'use client';

import useLang from '@/app/hooks/useLang';

interface objType {
  en: string,
  es: string,
}
interface inputType {
  textObj: objType,
  type: string,
}
type CombinedProps = React.PropsWithChildren<inputType>;

function textParser (text: { text: string }): React.ReactNode {
  return (
    <>{text}</>
  )
}

export default function Text({ textObj, type, children }: {CombinedProps}): React.ReactNode {
  const { lang } = useLang();
  const inputText: objType = children ? children : textObj;
  const text: string = lang==='en' ? inputText.en : inputText.es;
  let textEl: React.ReactNode = textParser(text);
  if (type==='h1') { textEl = <h1>{textEl}</h1>; }
  else if (type==='h2') { textEl = <h2>{textEl}</h2>; }
  else if (type==='p') { textEl = <p>{textEl}</p>; }
  return (
    <>{textEl}</>
  )
}
