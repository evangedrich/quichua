import { lessons } from '@/app/lib/lessons';
import styles from '@/app/ui/khipu.module.css';
import { montserrat } from '@/app/ui/fonts'
import Link from 'next/link';
import { translator } from '@/app/components/text-prep';

interface indexType {
  id: string,
  url: string,
  sections: {
    id: string,
    url: string,
    parts: {
      id: string,
      url: string,
    }
  }[],
}

const knots: React.ReactNode[] = [
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25,75 75,25" strokeWidth="40" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M75,75 25,25" strokeWidth="40" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
  </svg>,
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,70 40,30" strokeWidth="50" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M60,70 80,30" strokeWidth="50" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
  </svg>,
  <svg viewBox="0 0 140 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M25,75 45,25" strokeWidth="40" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M60,75 80,25" strokeWidth="40" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M95,75 115,25" strokeWidth="40" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
  </svg>,
  <svg viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,80 40,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M50,80 70,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M80,80 100,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M110,80 130,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
  </svg>,
  <svg viewBox="0 0 180 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,80 40,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M50,80 70,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M80,80 100,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M110,80 130,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M140,80 160,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
  </svg>,
  <svg viewBox="-2 0 210 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M20,80 40,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M50,80 70,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M80,80 100,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M110,80 130,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M140,80 160,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
    <path d="M170,80 190,20" strokeWidth="30" strokeLinecap="round" stroke="var(--color-theme)" fill="none" />
  </svg>,
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="var(--color-theme)"/>
  </svg>,
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="var(--color-theme)"/>
  </svg>,
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="50" fill="var(--color-theme)"/>
  </svg>,
  <svg viewBox="-20 0 140 100" xmlns="http://www.w3.org/2000/svg">
    <path d="M50,50 25,75 0,50 25,25 75,75 100,50 75,25 z" strokeWidth="30" strokeLinejoin="round" stroke="var(--color-theme)" fill="none" />
  </svg>,
];

function getIndexArray() {
  let index: indexType[] = [];
  lessons.forEach(lesson => {
    let sections: { id: string, url: string, parts: {id: string, url: string}[] }[] = [];
    lesson.contents.forEach((content,i) => {
      let hasParts: boolean = false;
      let parts: {id: string, url: string}[] = [];
      if (Array.isArray(content.items[0])) { hasParts = true;
        content.items.forEach((item,j) => {
          parts.push({ id: `${j+1}`, url: `/lessons/${lesson.slug}/${content.phaseId}/${j+1}`, });
        });
      } sections.push({ id: `${content.phaseId}`, url: `/lessons/${lesson.slug}/${content.phaseId}${hasParts?'/1':''}`, parts: parts, });
    });
    index.push({ id: `${lesson.slug}`, url: `/lessons/${lesson.slug}`, sections: sections, });
  });
  return index;
}

export default function KhipuIndex({ show, onLeave }) {
  const index = getIndexArray();
  const lessonLength: string = (show) ? `${3+((2)*index.length)}rem` : '0';
  const lessonNodeVis = (show) ? 'block' : 'none';

  const getSectionLineHeight = (lesson) => {
    return `${0.75+2*lesson.sections.length}rem`;
  };

  return (
    <div onMouseLeave={() => onLeave(false)}>
    <div className="bg-[var(--color-back)] h-20 w-5 absolute top-0 right-0 z-6"></div>
    <div className={styles.khipuIndex}>

      <div>
        <div className={styles.sectionBarrier}></div>
        <div className={styles.lessonLine} style={{width:lessonLength}}>
        </div>

        <div className={styles.knots}>
          {index.map((lesson,i) => (
            <div className={styles.lessonWrapper} key={`knotBox${i}`}>
              <Link href={lesson.url}>
                <div className={styles.knot}>
                  <div className={`${styles.knotTitle} ${montserrat.className}`}>{translator({en: `Lesson ${i+1}`, es: `Lección ${i+1}`,})}</div>
                  <div className={styles.knotSvg}>{knots[i]}</div>
                </div>
              </Link>

              <div className={styles.sections}>
                <div className={styles.sectionLine} style={{height:getSectionLineHeight(lesson)}}></div>
                <div className={styles.sectionKnots}>
                  {lesson.sections.map((section,j) => (
                    <div key={`sectionKnot${j}`}>
                      <Link href={section.url}>
                        <div className={styles.sectionKnot}>
                          <div className={styles.sectionText}>{section.id}</div>
                          <div className={`${styles.knotSvg} rotate-90`}>{knots[j]}</div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
                <div className="w-full h-3 bg-[var(--color-back)] absolute bottom-0 left-0 z-6"></div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
    </div>
  )
}


/*
  // a node is a grouped knot and a string
  function Node(props) {
    const { direction, number, knotOff } = props;
    const flexDirection: string = direction==='H' ? 'row' : 'column-reverse';
    // string properties
    const thickness: number = 0.25;
    const extent: number = 3;
    const width: number = direction==='H' ? `${extent}rem` : `${thickness}rem`;
    const height: number = direction==='H' ? `${thickness}rem` : `${extent}rem`;
    const stringL: string = direction==='H' ? `-0.25rem` : `0`;
    const stringB: string = direction==='H' ? `0` : `-0.25rem`;
    // knot properties
    const knotL: string = direction==='H' ? `-0.25rem` : `0`;
    const knotB: string = direction==='H' ? `0` : `-0.25rem`;
    return (
      <div className={styles.node} style={{alignItems:'center',justifyContent:'center',flexDirection:flexDirection,}}>
        {knotOff ? <></> : <div className={styles.knot} style={{marginLeft:knotL,marginBottom:knotB,}}>{knots[number]}</div>}
        <div className={styles.string} style={{width:show?width:0,height:show?height:0,marginLeft:knotOff?0:stringL,marginBottom:knotOff?0:stringB,}}></div>
      </div>
    )
  }


  <div className={styles.lessonLine} style={{width:lessonLength}}>
    {index.map((lessonNode,i) => (
      <div key={`lessonNode${i}`} className={styles.lessonNodeContainer}>
        <Link href={lessonNode.url}>
          <div className={`${styles.lessonName} ${montserrat.className}`}>{translator({en: `Lesson ${i+1}`, es: `Lección ${i+1}`,})}</div>
        </Link>
        <Link href={lessonNode.url}>
          <div className={styles.lessonNode} style={{display:lessonNodeVis}}>{knots[0]}</div>
        </Link>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionLine}></div>
        </div>
      </div>
    ))}
  </div>


  <div className={`${styles.lessons} ${show?styles.expanded:''}`} style={{flexDirection:'row',}}>
    {index.map((lesson,i) => (
      <Node direction='H' number={i} />
    ))}
    <Node direction='H' knotOff={true} />
  </div>
*/
