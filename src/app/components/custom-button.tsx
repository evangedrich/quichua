'use client';

import styles from '@/app/ui/home.module.css';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface buttonProps {
  text: string,
  to: string,
}

export default function Button({ text, to }: buttonProps): React.ReactNode {
  const router = useRouter();
  const underConstruction: boolean = false;
  function enter() {
    if (underConstruction) {
      alert("This site is under construction. Check back February 16th, 2026, for more.");
    } else { (to==='back') ? router.back() : router.push(to); }
  }
  if (text==='back') { text = '←'; }
  if (text==='next') { text = '→'; }
  return (
    <>
      {underConstruction || to==='back'
      ? <button className={styles.customButton} onClick={enter}>{text}</button>
      : <Link href={to} className={styles.customButton}>{text}</Link>
      }
    </>
  )
}
