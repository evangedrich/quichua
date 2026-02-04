import parse from 'html-react-parser';

export function textParser (text: { text: string }): React.ReactNode {
  let htmlString = text.replace(/(\*\*)(.*?)\1/g, '<b>$2</b>');
  htmlString = htmlString.replace(/(__)(.*?)\1/g, '<span style="font-weight:300;">$2</span>');
  htmlString = htmlString.replace(/(\*)(.*?)\1/g, '<i>$2</i>');
  htmlString = htmlString.replace(/(_)(.*?)\1/g, '<u>$2</u>');
  htmlString = htmlString.replace(/(#)(.*?)\1/g, '<span style="font-size:1.1rem;">$2</span>');
  htmlString = htmlString.replace(/\n/g, '<br/>');
  return (
    <>{parse(htmlString)}</>
  )
}
