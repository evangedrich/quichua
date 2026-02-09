'use client';

import { useState, useRef } from 'react';
import { phaseType, subsType } from '@/app/lib/lessons';
import parse from 'html-react-parser';
import styles from '@/app/ui/main.module.css';

/* in the future, this customParser can be adjusted to replace _ instead with dropdown list to swap in subs */

export default function Subs({ obj, margin }: { obj: phaseType, margin: boolean }) {
  const swapRefs = useRef(new Map());
  const items = (Array.isArray(obj.items[0]) ? obj.items.flat() : obj.items) as subsType[];

  function customParser(text: string, key: string) {
    const htmlString = text.replace(/(_)(.*?)\1/g, `<u>$2</u>`);
    return <span ref={(node) => {node ? swapRefs.current.set(key, node) : swapRefs.current.delete(key) }}>{parse(htmlString)}</span>;
  }
  function subOnClick(e: React.MouseEvent<HTMLElement>) {
    if (!swapRefs.current) return;

    const incomingFullText = e.currentTarget.textContent || "";
    const outgoingParts: string[] = [];

    const getNaturalFromData = (word: string) => {
      let match = null;
      items.forEach(item => {
        item.subs.forEach(sub => {
          const subOptions = sub.split(/[–-]/);
          subOptions.forEach(part => {
            const cleanPart = part.trim().replace(/[\[\]]/g, '');
            if (cleanPart.toLowerCase() === word.trim().toLowerCase()) {
              match = cleanPart;
            }
          });
        });
      });
      return match;
    };

    const isProperNounData = (word: string) => {
      const natural = getNaturalFromData(word);
      return natural && /^[A-Z]/.test(natural);
    };

    const isDashPair = incomingFullText.includes('–');
    const incomingParts = isDashPair ? incomingFullText.split('–') : [incomingFullText];
    let globalUIndex = 0;

    swapRefs.current.forEach(span => {
      const uTags = span.querySelectorAll('u');
      uTags.forEach((u: HTMLElement) => {
        const currentWordInSentence = u.textContent || "";
        const prevText = u.previousSibling?.textContent || "";
        const isStartOfSentence = u.previousSibling === null ||
                                  /[.!?¿¡]\s*$/.test(prevText) ||
                                  (prevText === "" && u.parentElement?.firstChild === u);

        // --- LOGIC FOR THE BOTTOM LIST ---
        // 1. If it's capitalized in the data (Quito), keep it.
        // 2. If it's capitalized in the sentence but NOT at the start (Colta), keep it.
        // 3. Otherwise (Escuela, Yacu), force to lowercase.
        const isNaturallyCapital = /^[A-Z]/.test(currentWordInSentence) && !isStartOfSentence;

        if (isProperNounData(currentWordInSentence) || isNaturallyCapital) {
          outgoingParts.push(currentWordInSentence);
        } else {
          outgoingParts.push(currentWordInSentence.toLowerCase());
        }

        // --- LOGIC FOR THE TOP (Sentence) ---
        let rawIncoming = isDashPair ? (incomingParts[globalUIndex] || incomingParts[0]) : incomingParts[0];
        let cleanIncoming = rawIncoming.trim().replace(/[\[\]]/g, '');

        const naturalIn = getNaturalFromData(cleanIncoming) || cleanIncoming;

        if (isStartOfSentence || isProperNounData(naturalIn)) {
          u.textContent = naturalIn.charAt(0).toUpperCase() + naturalIn.slice(1);
        } else {
          u.textContent = naturalIn.toLowerCase();
        }

        globalUIndex++;
      });
    });

    // Update BOTTOM List
    const uniqueOutgoing = outgoingParts.filter((val, idx, self) =>
      self.findIndex(v => v.toLowerCase() === val.toLowerCase()) === idx
    );

    e.currentTarget.textContent = uniqueOutgoing.length === 1 ? uniqueOutgoing[0] : uniqueOutgoing.join('–');
  }
  function underliner(text: string) {
    const ifSplit: boolean = text.includes('-');
    const splits = text.split('-');
    text = ifSplit ? splits[0] : text;
    return <><u onClick={subOnClick} tabIndex={0} role="button" className={styles.subOptions}>{text}</u>{ifSplit?splits[1]:''}</>;
  }

  return (
    <>{items.map((item,i) => (
      <div key={`subEx${i}`} className={`${margin?'mb-7':''}`}>
        <p>
          {item.n}. <b>{customParser(item.q,`q-${i}`)}</b>{item.q!==''?<br/>:<></>}<b>{customParser(item.a,`a-${i}`)}</b>
        </p>
        <p>«{item.subs.map((sub,j) => (
          j<item.subs.length-1
          ? <span key={`sub${j}`}><b>{underliner(sub)}</b>; </span>
          : <span key={`sub${j}`}><b>{underliner(sub)}</b></span>
        ))}»</p>
      </div>
    ))}</>
  )
}
