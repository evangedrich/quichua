import React, { Fragment } from 'react';
import Vocab from './vocab';
import Text from './text-prep';
import Subs from './subs';
import { textParser } from '@/app/components/text-parser';

export default function Ex({ obj }: any) {
  const items = Array.isArray(obj.items[0]) ? obj.items.flat() : obj.items;
  return (
    <>{items.map((item: any, i: number) => (
      <React.Fragment key={`p${i}`}>
        {typeof item === 'string'
          ? <p>{textParser(item)}</p>
          : 'qu' in item
            ? <><Vocab obj={{ phaseId: obj.phaseId, items: [item] }}></Vocab>{items[i+1]?.qu?<></>:<span className="block h-3"></span>}</>
            : 'en' in item
              ? <Text type="p">{item}</Text>
              : 'subs' in item
                ? <Subs obj={{ phaseId: obj.phaseId, items: [item] }} margin={(items[i+1]?.hasOwnProperty('subs'))}></Subs>
                : <>{console.log(item)}</>}
      </React.Fragment>
    ))}</>
  )
}
