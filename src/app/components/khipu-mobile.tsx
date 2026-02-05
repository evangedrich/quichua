'use client';

import { lessons } from '@/app/lib/lessons';
import styles from '@/app/ui/khipu.module.css';
import { montserrat, barlowCondensed } from '@/app/ui/fonts'
import { knots, getIndexArray, convertIdToTitle } from '@/app/components/khipu';
import { translator } from '@/app/components/text-prep';
import React, { Fragment } from 'react';
import { Dispatch, SetStateAction } from 'react';
import { useRouter } from 'next/navigation';

export default function KhipuMobile({ show, toClose }: { show: boolean; toClose: Dispatch<SetStateAction<boolean>> }) {
  const router = useRouter();

  const index = getIndexArray();
  const lessonTot: number = index.length;
  const cordThickness = 0.75;
  const knotSize = 1.5;
  const cordGap: number = 25;
  const bumper: number = 5;
  const primary: number = (cordGap*lessonTot)+(bumper*2);
  let maxSecTot: number = 0; index.forEach(lesson => { maxSecTot = lesson.sections.length>maxSecTot ? lesson.sections.length : maxSecTot; });
  const maxHeight: number = maxSecTot*cordGap+(bumper*2);

  const lineBr = (txt: string, x: number) => {
    const results = txt.includes(' ')
    ? txt.split(' ').map((word,i) => <tspan key={i} x={x} dy={i===0?'-0.5em':'1em'}>{word}</tspan>)
    : txt; return results;
  }

  return (
    <div className={`${styles.mKhipuIndex} ${show?'block':'hidden'}`}>
      <div className={`${styles.mContainer} fixed top-0 w-screen h-screen bg-[var(--color-back)] z-10`}>
        <div className={`fixed top-5 w-full text-center text-2xl`}>index</div>
        <div className={`${styles.mClose} fixed top-0 right-0`} onClick={() => toClose(false)}>✕</div>
        <div className={`${styles.mKhipuWrapper}`}>
          <div className={`${styles.mKhipuSvg}`}>
            <svg viewBox={`0 0 ${primary} ${maxHeight}`} xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1={bumper} x2={`${primary}`} y2={bumper} stroke="var(--color-theme)" strokeWidth={cordThickness} />
              {/*index.map((lesson,i) => (
                <circle cx={(cordGap*i)+bumper*2} cy={bumper} r={knotSize} fill="var(--color-theme)" key={`lessonKnot${i}`} />
              ))*/}
              {index.map((lesson,i) => (
                <g key={`lessonKnot${i}`} onClick={() => {router.push(lesson.url); toClose(false);}}>
                  <foreignObject x={(cordGap*i)+bumper*2-knotSize*2.5} y={bumper-knotSize} height={knotSize*2} width={knotSize*5}>
                    {knots[i]}
                  </foreignObject>
                  <text x={(cordGap*i)+bumper*2} y={bumper-2} fill="var(--color-front)" fontSize="4" textAnchor="middle" className={`${montserrat.className} font-black`}>{i+1}</text>
                </g>
              ))}
              {index.map((lesson,i) => (
                <line x1={(cordGap*i)+bumper*2} y1={bumper} x2={(cordGap*i)+bumper*2} y2={bumper+lesson.sections.length*cordGap} stroke="var(--color-theme)" key={`lessonCord${i}`} />
              ))}
              {index.map((lesson,i) => (
                <React.Fragment key={`sectionKnot${i}`}>
                  {lesson.sections.map((section,j) => (
                    <g key={`sectionKnot${i}${j}`} onClick={() => {router.push(section.url); toClose(false);}}>
                      {/* <circle cx={(cordGap*i)+bumper*2} cy={bumper+cordGap*j+cordGap} r={knotSize} fill="var(--color-theme)" /> */}
                      <foreignObject x={(cordGap*i)+bumper*2-knotSize} y={bumper+cordGap*j+cordGap-(j/2)} height={knotSize*4} width={knotSize*2} className={styles.mSectionKnot}>
                        <div>{knots[j]}</div>
                      </foreignObject>
                      <text x={(cordGap*i)+bumper*2+2} y={bumper+cordGap*j+cordGap+knotSize} fill="var(--color-front)" fontSize="4" dominantBaseline="middle" className={barlowCondensed.className}>{lineBr(translator(convertIdToTitle(section.id)),(cordGap*i)+bumper*2+2)}</text>
                    </g>
                  ))}
                </React.Fragment>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
