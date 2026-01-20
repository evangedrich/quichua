'use client';

import styles from '@/app/ui/home.module.css';
import tocapuStyles from '@/app/ui/tocapu.module.css';
import { tocapuLibrary } from '@/app/ui/tocapu';
import useWindowWidth from '@/app/hooks/useWindowWidth';
import useTheme from '@/app/hooks/useTheme';
import useMotion from '@/app/hooks/useMotion';
import useLang from '@/app/hooks/useLang';

interface unkuProps {
  pattern: number,
  top: boolean,
}
interface tocapuObj {
  name: string,
  svg: React.ReactNode,
}
function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function UnkuRibbon({ pattern }: unkuProps) {
  const { theme, toggleTheme } = useTheme();
  const { motion, toggleMotion } = useMotion();
  const { lang, toggleLang } = useLang();
  const pattern1: string[][] = [
    ["twoEyes2","firstAid","waves","curls","maskaypacha","sinchi","key2","earthquake","owl","waves","esses","key1"],
    ["sinchi","key1","snakes","escalators","owl","firstAid","teeth2","staircases","exes","sinchi","escalators","worms"],
    ["waves","secret","exes","pants2","fourEyes","waves","esses","bigExes","curls","fourEyes","altMaskaypacha","twoEyes1"]
  ];
  const pattern2: string[][] = [
    ["escalators","threeEyes","owl","altEarthquake","key3","sinchi","twoEyes1","pants1","twoEyes2","secret","teeth2","sinchi"],
    ["worms","bigExes","teeth1","twoEyes1","snakes","anvil","worms","waves","sinchi","key1","altEarthquake","exes"],
    ["key1","sinchi","waves","maskaypacha","pants2","firstAid","key1","esses","anvil","worms","waves","snakes"]
  ];
  const tocSize: number = 45; let newTocSize: number = tocSize;
  function stitch(order: string[][]): tocapuObj[] {
    let tocapuArray: tocapuObj[] = [];
    const windowWidth: number = useWindowWidth();
    const roughCount: number = windowWidth/tocSize;
    const realCount: number = Math.floor(roughCount);
    const nRows: number = 3;
    newTocSize = tocSize+(windowWidth-tocSize*realCount)/realCount;
    let orderedTocapu: tocapuObj[] = [];
    for (let i=0; i<nRows; i++) {
      for (let j=0; j<realCount; j++) {
        const k: number = (j<order[i].length) ? j : (j<order[i].length*2) ? j-order[i].length : (j<order[i].length*3) ? j-order[i].length*2 : 0;
        tocapuLibrary.forEach(item => {
          if (item.name===order[i][k]) { orderedTocapu.push(item); }
        });
      }
    }
    const arr: tocapuObj[] = orderedTocapu;
    for (let i=0; i<orderedTocapu.length; i++) {
      const arrLen: number = arr.length;
      for (let j=0; j<nRows; j++) {
        if (i>=arrLen*j) { tocapuArray.push(arr[i-arrLen*j]); }
      }
    }
    return tocapuArray;
  }
  const ribbon: tocapuObj[] = stitch((pattern===1)?pattern1:pattern2);
  function clicked(id: string): void {
    if (id==='esses') { toggleTheme(); }
    else if (id==='earthquake' || id==="altEarthquake") { toggleMotion(); }
    else if (id==='owl') { toggleLang(); }
    // else { console.log(id); }
  }
  return (
    <div className={styles.unku}>
      {ribbon.map(tocapu => (
        <div
          className={`bg-transparent-500 float-left ${(motion)?tocapuStyles.svgMove:""}`}
          style={{width:newTocSize+"px", height:newTocSize+"px"}}
          key={`${tocapu.name}_${crypto.randomUUID()}`}
          onClick={() => clicked(tocapu.name)}
        >
          {tocapu.svg}
        </div>
      ))}
    </div>
  )
}
