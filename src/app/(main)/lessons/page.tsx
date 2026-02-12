import { lessons } from '@/app/lib/lessons';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

export default function Lessons() {
  const introText1: { en: string, es: string } = {
    en: 'Welcome to *Introduction to Central Highland Quichua of Ecuador*, where we learn how to speak Quichua with the help of a Quichua language tutor.',
    es: 'Bienvenido a la *Introducción al quichua de la Sierra Central de Ecuador*, donde aprenderemos a hablar quichua con la ayuda de un quichuahablante.',
  };
  const introText2: { en: string, es: string } = {
    en: 'Click below to get started, or navigate through the site using the buttons on the top right.',
    es: 'Haz clic a continuación para empezar, o navega por el sitio usando los botones de la derecha.',
  };
  return (
    <>
      <Text type="p">{introText1}</Text>
      <Text type="p">{introText2}</Text>
      <Button text="let's go! →" to={`/lessons/${lessons[0].slug}`} />
    </>
  )
}
