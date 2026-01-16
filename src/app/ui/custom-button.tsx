'use client';

import styles from '@/app/ui/home.module.css';

function enter() {
  alert("This site is under construction. Check back February 16th, 2026, for more.");
}

export default function Button({ text }) {
  return (
    <button className={styles.customButton} onClick={enter}>{text}</button>
  )
}
