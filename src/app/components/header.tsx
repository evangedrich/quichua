'use client';

import HomeIcon from '@/app/components/home-icon';
import NavButton from '@/app/components/nav-button';
import Link from 'next/link';
import styles from '@/app/ui/main.module.css';

import { useState } from 'react';
import useTheme from '@/app/hooks/useTheme';
import useMotion from '@/app/hooks/useMotion';
import useLang from '@/app/hooks/useLang';

export default function Header() {
  const [settingsVisible,setSettingsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { motion, toggleMotion } = useMotion();
  const { lang, toggleLang } = useLang();
  return (
    <header className={styles.header}>
      <Link href="/"><HomeIcon /></Link>
      <div className={styles.nav} onMouseLeave={() => setSettingsVisible(false)}>
        <NavButton icon="fourEyes" text="index" color="#f0d699" />
        <NavButton icon="teeth1" text="settings" color="#d9b484" func={() => setSettingsVisible(!settingsVisible)} />
        <div className={`${styles.settingsButtons} ${settingsVisible?'':styles.hideSettings}`}>
          <NavButton icon="esses" text={theme==='light' ? <><b>light</b> | dark</>:<>light | <b>dark</b></>} color="#5f633a" />
          <NavButton icon="earthquake" text={motion ? <>motion <b>on</b> | off</>:<>motion on | <b>off</b></>} color="#e85538" />
          <NavButton icon="owl" text={lang==='en' ? <><b>english</b> | español</>:<>english | <b>español</b></>} color="#5f633a" />
        </div>
        <NavButton icon="sinchi" text="info" color="#d9b484" />
      </div>
    </header>
  )
}
