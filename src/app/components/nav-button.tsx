'use client';

import styles from '@/app/ui/main.module.css';
import { tocapuLibrary, tocapuSearch } from '@/app/ui/tocapu';
import tocapuStyles from '@/app/ui/tocapu.module.css';

import { useRouter } from 'next/navigation';
import useTheme from '@/app/hooks/useTheme';
import useMotion from '@/app/hooks/useMotion';
import useLang from '@/app/hooks/useLang';

interface navProps {
  text: string | React.ReactNode,
  icon: string,
  color: string,
  func: () => void,
}

export default function NavButton({ text, icon, color, func }: navProps) {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const { motion, toggleMotion } = useMotion();
  const { lang, toggleLang } = useLang();
  const clicked = () => {
    if (icon==='fourEyes') { console.log("show khipu"); }
    else if (icon==='esses') { toggleTheme(); }
    else if (icon==='earthquake') { toggleMotion(); }
    else if (icon==='owl') { toggleLang(); }
    else if (icon==='sinchi') { router.push(text); }
  };
  return (
    <button className={`${(motion)?tocapuStyles.svgHover:''} ${styles.navButton}`} onClick={func?func:clicked}>
      <p className={`${styles.navText}`}>{text}</p>
      <div className={`${styles.navSvg}`} style={{backgroundColor:color}}>{tocapuSearch(icon)}</div>
    </button>
  )
}
