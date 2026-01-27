import parse from 'html-react-parser';

export function textParser (text: { text: string }): React.ReactNode {
  let htmlString = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  htmlString = htmlString.replace(/(\*|_)(.*?)\1/g, '<i>$2</i>');
  htmlString = htmlString.replace(/\n/g, '<br/>');
  return (
    <>{parse(htmlString)}</>
  )
}
