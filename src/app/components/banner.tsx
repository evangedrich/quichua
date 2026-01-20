'use client';

import { montserrat, josefinSans } from '@/app/ui/fonts';
import useLang from '@/app/hooks/useLang';

export default function Banner() {
  const { lang, toggleLang } = useLang();
  return (
    <>
      <h1 className={`${montserrat.className}`}>QUICHUA</h1>
      <h2 className={`${josefinSans.className}`}>{(lang==='en')?'in 10 easy lessons':'en 10 lecciones fáciles'}</h2>
    </>
  )
}
