import { lessons } from '@/app/lib/lessons';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

export default function Lessons() {
  const introText: { en: string, es: string } = {
    en: 'Welcome to *Introduction to Central Highland Quichua of Ecuador*, where we learn how to speak Quichua with the help of a language tutor. Click below to get started!',
    es: 'Bienvenido a la *Introducción al quichua de la Sierra Central de Ecuador*, donde aprenderemos a hablar quichua con la ayuda de un tutor de idiomas. ¡Haz clic a continuación para empezar!',
  };
  return (
    <>
      <Text type="p">{introText}</Text>
      <Button text="let's go! →" to={`lessons/${lessons[0].slug}`} />
    </>
  )
}
