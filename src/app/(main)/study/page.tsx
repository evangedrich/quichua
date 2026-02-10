'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { lessons, phaseType, trilingualType } from '@/app/lib/lessons';
import styles from '@/app/ui/study.module.css';
import Text from '@/app/components/text-prep';
import { textParser } from '@/app/components/text-parser';

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
  const [word, setWord] = useState<phaseType['items'][number] | trilingualType>({qu: 'alli', en: 'good', es: 'bueno'});
  const [input, setInput] = useState('');
  const [borderColor, setBorderColor] = useState('border-[var(--color-mid)]');
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

  function newWord() {
    const allVocab = vocab.flat();
    const randomIndex = Math.floor(Math.random() * allVocab.length);
    setWord(allVocab[randomIndex]);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input==='') { setBorderColor('border-[var(--color-mid)]'); }
    else if (typeof word === 'object' && word !== null && 'en' in word) {
      if (word.en.includes(input) || word.es.includes(input)) {
        setBorderColor('border-[#5d854c]');
        setButtonText('✓');
      } else { setBorderColor('border-[#e85538]'); setButtonText('✗'); }
    } else { setBorderColor('border-[#e85538]'); setButtonText('✗'); }
    setInput('');
    setTimeout(() => {
      setBorderColor('border-[var(--color-mid)]');
      setButtonText('?');
    }, 750);
  };
  return (
    <>
      <div className={`${styles.studyWrapper}`}>
        <div className={`${styles.buttonWrap}`}>
          <button onClick={newWord} className={`${styles.flashButton} mb-4 bg-[var(--color-mid)] rounded-full cursor-pointer`}>⇄</button>
        </div>
        <FlashCard word={word} />
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            <input type="text" value={input} onChange={handleChange} className={`border-2 border-solid ${borderColor}`} />
            <button type="submit">{buttonText}</button>
          </label>
        </form>
      </div>
    </>
  )
}
