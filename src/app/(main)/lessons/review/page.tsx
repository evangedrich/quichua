import { montserrat } from '@/app/ui/fonts';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

export default function Review() {
  const text1: {en: string, es: string} = {
    en: `Congratulations!`,
    es: `!Felicidades!`,
  };
  const text2: {en: string, es: string} = {
    en: `But your Quichua language education is far from over—this is actually a 50-lesson course, where the other 40 are more difficult. Check back later and we'll have more Quichua language learning for you!`,
    es: `Pero tu aprendizaje del idioma quichua está lejos de haber terminado.: este es un curso de 50 lecciones, y las 40 restantes son más difíciles. Vuelve más tarde y tendremos más material para que sigas aprendiendo quichua.`,
  };
  const text3: {en: string, es: string} = {
    en: `In the meantime, practice what you've learned so far by navigating to the poetry page using the buttons on the righthand side of the screen and see what words you recognize.`,
    es: `Mientras tanto, practica lo que has aprendido hasta ahora navegando a la página de poesía y viendo qué palabras reconoces.`,
  };
  return (
    <>
      <h1 className={`${montserrat.className} font-extrabold text-4xl mb-4 uppercase`}>Lessons 1–10 complete</h1>
      <Text type="p">{text1}</Text>
      <Text type="p">{text2}</Text>
      <Text type="p">{text3}</Text>
      <Button text="back" to="back" />
    </>
  )
}
