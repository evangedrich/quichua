import { phaseType, subsType } from '@/app/lib/lessons';
import parse from 'html-react-parser';

/* in the future, this customParser can be adjusted to replace _ instead with dropdown list to swap in subs */
function customParser(text: string) {
  const htmlString = text.replace(/(_)(.*?)\1/g, '<u>$2</u>');
  return <>{parse(htmlString)}</>;
}
function underliner(text: string) {
  const ifSplit: boolean = text.includes('-');
  const splits = text.split('-');
  text = ifSplit ? splits[0] : text;
  return <><u>{text}</u>{ifSplit?splits[1]:''}</>;
}

export default function Subs({ obj, margin }: { obj: phaseType, margin: boolean }) {
  const items = (Array.isArray(obj.items[0]) ? obj.items.flat() : obj.items) as subsType[];
  return (
    <>{items.map((item,i) => (
      <div key={`subEx${i}`} className={`${margin?'mb-7':''}`}>
        <p>
          {item.n}. <b>{customParser(item.q)}</b>{item.q!==''?<br/>:<></>}<b>{customParser(item.a)}</b>
        </p>
        <p>«{item.subs.map((sub,j) => (
          j<item.subs.length-1
          ? <span key={`sub${j}`}><b>{underliner(sub)}</b>; </span>
          : <span key={`sub${j}`}><b>{underliner(sub)}</b></span>
        ))}»</p>
      </div>
    ))}</>
  )
}
