'use client';

import HomeIcon from '@/app/components/home-icon';
import KhipuIndex from '@/app/components/khipu';
import KhipuMobile from '@/app/components/khipu-mobile';
import NavButton from '@/app/components/nav-button';
import Link from 'next/link';
import styles from '@/app/ui/main.module.css';

import { useState } from 'react';
import useTheme from '@/app/hooks/useTheme';
import useMotion from '@/app/hooks/useMotion';
import useLang from '@/app/hooks/useLang';
import useWindowWidth from '@/app/hooks/useWindowWidth';

export default function Header() {
  const [navVisible,setNavVisible] = useState(false);
  const [showIndex,setShowIndex] = useState(false);
  const [settingsVisible,setSettingsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { motion, toggleMotion } = useMotion();
  const { lang, toggleLang } = useLang();
  const windowWidth: number = useWindowWidth();
  const isMobile: boolean = (windowWidth <= 800) ? true : false;
  return (
    <header className={styles.header}>
      <Link href="/"><HomeIcon /></Link>
      {!isMobile ? <KhipuIndex show={showIndex} onLeave={setShowIndex} /> : <KhipuMobile show={showIndex} toClose={setShowIndex} />}
      <div className={styles.nav} onMouseLeave={() => setSettingsVisible(false)}>
        <button
          className={styles.mobileToggle}
          onClick={() => {
            setNavVisible(!navVisible);
            if (navVisible&&settingsVisible) { setSettingsVisible(false); }
          } }
        >
          <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
            <path d={navVisible?"M 10,40 50,10 90,40":"M 10,10 50,40 90,10"} fill="none" stroke="var(--color-back)" strokeWidth="5" strokeLinecap="round" />
          </svg>
        </button>
        <div className={`grid justify-items-end ${styles.navGroup} ${(navVisible || !isMobile)?'':styles.hideNav}`}>
          <NavButton icon="fourEyes" text="index" color="#f0d699" func={() => setShowIndex(!showIndex)} textHide={showIndex} />
          <NavButton icon="teeth1" text="settings" color="#d9b484" func={() => setSettingsVisible(!settingsVisible)} />
          <div className={`${styles.settingsButtons} ${settingsVisible?'':styles.hideSettings}`}>
            <NavButton icon="esses" text={theme==='light' ? <><b>light</b> | dark</>:<>light | <b>dark</b></>} color="#5f633a" />
            <NavButton icon="earthquake" text={motion ? <>motion <b>on</b> | off</>:<>motion on | <b>off</b></>} color="#e85538" />
            <NavButton icon="owl" text={lang==='en' ? <><b>english</b> | español</>:<>english | <b>español</b></>} color="#5f633a" />
          </div>
          <NavButton icon="sinchi" text="info" color="#d9b484" />
      </div>
      </div>
    </header>
  )
}
