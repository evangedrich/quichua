import { poems } from '@/app/lib/poems';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';
import Link from 'next/link';
import styles from '@/app/ui/main.module.css';

export default function Poems() {
  const text1: { en: string, es: string } = {
    en: `These poems by Quichua writers, academics, philosophers, and activists can be used to practice reading comprehension. The most common orthography used by Quichua writers, and the one taught in schools throughout Ecuador, is that of Unified Kichwa; since this would look quite unfamiliar to a student of this course, the text has been converted into the older Quichua orthography (for some background on the different spelling conventions used for the language, read <a href="https://www.anthropology-news.org/articles/the-verbal-art-of-kichwa-reclamation/" target="_blank">this</a> or <a href="https://doi.org/10.1093/oso/9780197559178.003.0004" target="_blank">this</a>).`,
    es: `Estos poemas de escritores, académicos, activistas y filósofos quichuas pueden utilizarse para practicar la comprensión lectora. La ortografía más común utilizada por los poetas quichuas, y la que se enseña en las escuelas de todo Ecuador, es la del kichwa unificado; dado que esta resultaría poco familiar para un estudiante de este curso, el texto se ha convertido a la ortografía quichua tradicional (para obtener más información sobre las diferentes ortografías, consulte <a href="https://www.anthropology-news.org/articles/the-verbal-art-of-kichwa-reclamation/" target="_blank">esto</a> o <a href="https://doi.org/10.1093/oso/9780197559178.003.0004" target="_blank">esto</a>).`,
  }; const text2: { en: string, es: string } = {
    en: `Here are the poems:`,
    es: `Aquí están los poemas:`,
  }
  return (
    <>
    <div className={styles.poems}>
      <h1 className="text-2xl mb-4"><i><Text>{{ en: 'Poems', es: 'Poemas', }}</Text></i></h1>
      <Text textObj={text1} type="p"></Text>
      <Text textObj={text2} type="p"></Text>
      <ul>{poems.map(poem => (
        <Link href={`/poems/${poem.slug}`} replace key={`linkTo${poem.slug}`}>
          <li>“{('qu' in poem.title)?<>{poem.title.qu}</>:<Text>{{en:poem.title.en,es:poem.title.es}}</Text>}” <Text textObj={{en:'by',es:'por'}} /> {poem.author}</li><br/>
        </Link>
      ))}</ul>
    </div>
    <Button text="← back" to="back" />
    </>
  )
}

{/* <li key={`linkTo${poem.slug}`}>
  “<Link href={`/poems/${poem.slug}`}><Text textObj={poem.title} /></Link>”&nbsp;
  <Text textObj={{en:'by',es:'por'}} /> {poem.author}
</li> */}
