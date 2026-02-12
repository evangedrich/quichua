'use client';

import React, { useState, useEffect, useRef, ChangeEvent, FormEvent } from 'react';
import useLang from '@/app/hooks/useLang';
import { lessons, phaseType, trilingualType } from '@/app/lib/lessons';
import { montserrat } from '@/app/ui/fonts';
import styles from '@/app/ui/study.module.css';
import Text from '@/app/components/text-prep';
import { textParser } from '@/app/components/text-parser';

const studySVGs = [
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,50 90,50 M50,10 10,50 50,90" strokeWidth="5" strokeLinecap="round" stroke="var(--color-front)" fill="none" />
  </svg>,
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,50 90,50 M50,10 90,50 50,90" strokeWidth="5" strokeLinecap="round" stroke="var(--color-front)" fill="none" />
  </svg>,
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,10 90,90 M10,90 90,10" strokeWidth="7.5" strokeLinecap="round" stroke="var(--color-back)" fill="none" />
  </svg>,
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M10,50 40,90 90,10" strokeWidth="7.5" strokeLinecap="round" stroke="var(--color-back)" fill="none" />
  </svg>,
];

function getVocab() {
  let allVocab: phaseType['items'][number][] = [];
  lessons.forEach(lesson => {
    let vocArray: phaseType['items'][number][] = [];
    lesson.contents[1].items.forEach(word => {
      vocArray.push(word);
    }); allVocab.push(vocArray.flat());
  }); return allVocab;
}

export default function Study() {
  const { lang } = useLang();
  const isFirstRender = useRef(true);
  // top buttons
  const [range, setRange] = useState({ start: 0, end: lessons.length-1, });
  const [showRange, setShowRange] = useState(false);
  // flash card contents
  const [word, setWord] = useState({ i: 0, options: getVocab().flat(), });
  const [prevIndex, setPrevIndex] = useState<number[]>([]);
  const [nextIndex, setNextIndex] = useState<number[]>([]);
  //text input
  const [input, setInput] = useState('');
  const [correctGuess, setCorrectGuess] = useState<boolean | null>(null);
  const [buttonText, setButtonText] = useState('?');
  const vocab = getVocab();

  function FlashCard({ word }: { word: any }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const flip = () => { setIsFlipped(!isFlipped); };
    return (
      <div className={`${styles.flashCard}`} onClick={flip}>
        <div className={`${styles.inner} ${isFlipped?styles.flipped:''}`}>
          <div className={`${styles.front}`}><p><b>{textParser(word.qu)}</b></p></div>
          <div  className={`${styles.back}`}><Text type="p">{{en: word.en, es: word.es}}</Text></div>
        </div>
      </div>
    )
  };

  const updateRange = (e: React.MouseEvent<HTMLLIElement>, key: 'lower' | 'upper') => {
    const clickedIndex: number = Number(e.currentTarget.textContent)-1;
    if (key==='lower') {
      if (clickedIndex >= range.end) { setRange({ start: clickedIndex, end: clickedIndex, }); }
      else { setRange({ start: clickedIndex, end: range.end, }); }
    } else if (key==='upper') {
      setRange({ start: range.start, end: clickedIndex, });
    } setShowRange(false); setPrevIndex([]); setNextIndex([]);
  };
  const toggleShowRange = () => {
    setShowRange(!showRange);
  };
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const vocabSet = (range.start===range.end ? vocab[range.start] : vocab.slice(range.start,range.end).flat()) as any[];
    const index = Math.floor(Math.random()*vocabSet.length);
    setWord({ i: index, options: vocabSet, });
  }, [range]);

  function oldWord() {
    if (prevIndex.length>0) {
      const vocabSet = (range.start===range.end ? vocab[range.start] : vocab.slice(range.start,range.end).flat()) as any[];
      const index = prevIndex[prevIndex.length-1];
      setPrevIndex(priorArray => priorArray.slice(0,-1));
      setNextIndex(priorArray => [...priorArray, word.i]);
      setWord({ i: index, options: vocabSet, });
    }
  }
  function newWord() {
    const vocabSet = (range.start===range.end ? vocab[range.start] : vocab.slice(range.start,range.end).flat()) as any[];
    let index = nextIndex.length>0 ? nextIndex[nextIndex.length-1] : Math.floor(Math.random()*vocabSet.length);
    if (prevIndex.length>0 && vocabSet.length>1) {
      while (index === prevIndex[prevIndex.length-1]) { index = Math.floor(Math.random() * vocabSet.length); }
    }
    setPrevIndex(priorArray => [...priorArray, word.i]);
    if (nextIndex.length>0) { setNextIndex(priorArray => priorArray.slice(0,-1)); }
    setWord({ i: index, options: vocabSet, });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const checkMatch = (def: { en: string, es: string }) => {
    const myDef = lang==='en' ? def.en : def.es;
    // the remainder of the function below was written with AI, 1 of 2 such functions
    const stopWords = ['the', 'a', 'an', 'el', 'la', 'los', 'las', 'un', 'una', 'to', 'or', 'o'];
    const getCleanWords = (str: string) => {
      return str
        .toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Strip accents
        .replace(/[\u2018\u2019]/g, "'") // Normalize quotes
        .replace(/[/()\-]/g, " ") // Treat slashes, dashes, and parentheses as spaces
        .replace(/[.,/#!$%^&*;:{}=_`~!?]/g, "") // Strip punctuation
        .split(/\s+/)
        .filter(word => word.length > 1 && !stopWords.includes(word)); // Ignore single letters like 'a'
    };
    const defWords = getCleanWords(myDef);
    const inputWords = getCleanWords(input);
    if (inputWords.length === 0) return false;
    const isMatch = inputWords.every(inputWord =>
      defWords.some(defWord => defWord.startsWith(inputWord) || defWord === inputWord)
    );
    return isMatch;
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const currentWord = word.options[word.i] as any;
    if (input==='') { setCorrectGuess(null); }
    else if (typeof currentWord === 'object' && currentWord !== null && 'en' in currentWord) {
      if (checkMatch({en:currentWord.en,es:currentWord.es,})) {
        setCorrectGuess(true);
        newWord();
      } else { setCorrectGuess(false); }
    } else { setCorrectGuess(false); }
    setInput('');
    setTimeout(() => {
      setCorrectGuess(null);
    }, 750);
  };
  return (
    <>
      <div className={`${styles.studyWrapper}`}>
        <div className={`${styles.buttonWrap}`}>
          <button onClick={oldWord}
            className={`${styles.flashButton} ${styles.flashBack} ${prevIndex.length===0?'hidden':'block'}`}
          >{studySVGs[0]}</button>
          <button className={`${styles.dummy} ${prevIndex.length===0?'block':'hidden'} opacity-0`}></button>
          <div>
            <div className={`${montserrat.className} font-extrabold mb-[-0.1rem]`}>
              <Text textObj={{en: `LESSON${range.start<range.end?'S':''}`, es: `LECCIÓN${range.start<range.end?'ES':''}`}} />
            </div>
            <div className={`${montserrat.className} font-extrabold text-3xl relative`} onMouseLeave={() => setShowRange(false)}>
              <button className={styles.rangeSelect} onClick={toggleShowRange}>
                {range.start<range.end?<><span>{range.start+1}</span>
                <span>–</span>
                <span>{range.end+1}</span></>:<><span>{range.start+1}</span></>}
                <span className={`${styles.dropCaret} ${showRange?styles.upCaret:''}`}>⌄</span>
              </button>
              <div className={`${styles.dropdown} ${showRange?'flex':'hidden'}`}>
                <ul>
                  {Array.from({ length: lessons.length }, (_, i) => i)
                    .filter(i => i!==range.start)
                    .map(i => (
                      <li key={`lowerBound${i}`} onClick={(e) => updateRange(e,'lower')}>{i + 1}</li>
                    ))}
                </ul>
                {range.start!==9?<ul>
                  {Array.from({ length: lessons.length }, (_, i) => i)
                    .filter((i) => i >= range.start && i !== range.end)
                    .map((i) => (
                      <li key={`upperBound${i}`} onClick={(e) => updateRange(e, 'upper')}>{i + 1}</li>
                    ))}
                </ul>:<></>}
              </div>
            </div>
          </div>
          <button onClick={newWord} className={`${styles.flashButton} ${styles.flashBack}`}>{studySVGs[1]}</button>
        </div>
        <FlashCard word={word.options[word.i]} />
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            <input
              type="text"
              autoComplete="off"
              value={input}
              onChange={handleChange}
              className={`border-2 border-solid ${correctGuess===null?'border-[var(--color-mid)]':correctGuess?'border-[#5d854c]':'border-[#e85538]'}`}
            />
            <button
              type="submit"
              className={`${correctGuess===null?styles.regButton:correctGuess?styles.yButton:styles.nButton} ${correctGuess===null?'':styles.feedText}`}
            >{correctGuess===null?'?':correctGuess?studySVGs[3]:studySVGs[2]}</button>
          </label>
        </form>
      </div>
    </>
  )
}
