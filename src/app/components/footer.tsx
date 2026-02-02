'use client';

import useWindowWidth from '@/app/hooks/useWindowWidth';
import styles from '@/app/ui/main.module.css';

export default function Footer() {
  const windowWidth: number = useWindowWidth();
  const isMobile: boolean = (windowWidth <= 800) ? true : false;
  return (
    <footer className={`${styles.footer} ${isMobile?'hidden':'block'}`}>
      Designed and built by <a href="https://evangedrich.com" target="_blank">Evan Gedrich Pintado</a>.
      Educational materials by <a href="https://quichua.net/" target="_blank">Richard P. Aschmann</a>.
    </footer>
  )
}
