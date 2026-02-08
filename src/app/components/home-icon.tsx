'use client';

import styles from '@/app/ui/main.module.css';
import { montserrat } from '@/app/ui/fonts';
import { tocapuLibrary, tocapuSearch } from '@/app/lib/tocapu';
import tocapuStyles from '@/app/ui/tocapu.module.css';

import useLang from '@/app/hooks/useLang';
import useMotion from '@/app/hooks/useMotion';

export default function HomeIcon() {
  const { motion, toggleMotion } = useMotion();
  const { lang, toggleLang } = useLang();
  return (
    <div className={`${styles.homeIcon} ${motion?tocapuStyles.svgHover:''}`}>
      <div className={`${styles.iconSvg}`}>{tocapuSearch("key1")}</div>
      <div className={styles.iconText}>
        <h1 className={montserrat.className}>QUICHUA</h1>
        <h2 className={montserrat.className}>
          {(lang==='en')?"IN 10 EASY":"EN 10 LECCIONES"}<br/>{(lang==='en')?"LESSONS":"FÁCILES"}
        </h2>
      </div>
    </div>
  )
}
