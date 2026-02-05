'use client';

import { useState } from 'react';
import { poemType } from '@/app/lib/poems';
import Text from '@/app/components/text-prep';
import parse from 'html-react-parser';

function poemParse(text: string): React.ReactNode {
  let htmlString = text.replace(/\n/g, '<br/>');
  return <>{parse(htmlString)}</>;
}

export default function Poem({ obj }: { obj: poemType }) {
  const [isQuichua,setIsQuichua] = useState(true);
  const PoemSwitch = () => {
    return <div className="relative mt-4 mb-4 z-20">
      <button onClick={() => setIsQuichua(!isQuichua)} style={{cursor:'pointer'}}>
        <Text textObj={{ en: isQuichua?'**QU** | EN':'QU | **EN**', es: isQuichua?'**QU** | ES':'QU | **ES**' }} />
      </button>
    </div>;
  }
  return (
    <>
      <h1 className="text-2xl">
        “{(isQuichua && 'qu' in obj.title)?<>{obj.title.qu}</>:<Text>{{en:obj.title.en,es:obj.title.es}}</Text>}”
      </h1>
      <h2><Text textObj={{en:'by',es:'por'}} /> {obj.author}</h2>
      <PoemSwitch />
      {isQuichua
        ? <p>{poemParse(obj.text.qu)}</p>
        : <Text type="p">{{en:obj.text.en,es:obj.text.es}}</Text>}
    </>
  )
};
