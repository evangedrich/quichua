'use client';

import useLang from '@/app/hooks/useLang';
import { textParser } from '@/app/components/text-parser';

interface bilingualType {
  en: string | string[],
  es: string | string[],
}
interface trilingualType {
  qu: string,
  en: string,
  es: string,
}
interface inputType {
  textObj?: bilingualType | trilingualType,
  type?: string,
  children?: bilingualType,
}

export function translator(obj: {en: string, es: string}): string {
  const { lang } = useLang();
  return lang==='en' ? obj.en : obj.es;
}

export default function Text({ textObj, type, children }: inputType): React.ReactNode {
  const { lang } = useLang();
  const inputText = children ? children : textObj;
  const rawText = (lang==='en' ? inputText?.en : inputText?.es) ?? '';
  const text = Array.isArray(rawText) ? rawText.join('\n') : rawText;
  let textEl: React.ReactNode = textParser(text);
  if (type==='h1') { textEl = <h1>{textEl}</h1>; }
  else if (type==='h2') { textEl = <h2>{textEl}</h2>; }
  else if (type==='p') { textEl = <p>{textEl}</p>; }
  else if (type==='li') { textEl = <li>{textEl}</li>; }
  return (
    <>{textEl}</>
  )
}
