import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';
import styles from '@/app/ui/main.module.css';

export default function Info() {
  const text1 = {
    en: `This cross-platform app is an adaptation of the document <i>Introduction to Central Highland Quichua of Ecuador, or Quichua in Ten Easy Lessons (the other 40 are harder)</i> by Ellen M. Ross, prepared by <a href="https://quichua.net/" target="_blank">Richard P. Aschmann</a>, intended as a digital aid to learning spoken Ecuadorian Quichua with a Quichua-language tutor.`,
    es: `Esta aplicación multiplataforma es una adaptación del documento Introducción al quichua de la Sierra Central de Ecuador, o Quichua en diez lecciones fáciles (las otras 40 son más difíciles), de Ellen M. Ross, preparado por <a href="https://quichua.net/" target="_blank">Richard P. Aschmann</a>, y está diseñada como una herramienta digital para el aprendizaje del quichua ecuatoriano hablado con la ayuda de un tutor de quichua.`,
  }; const text2 = {
    en: `The app was designed and built by <a href="https://evangedrich.com/" target="_blank">Evan Gedrich Pintado</a> as a part of the 12-week Recurse Center programming retreat in Brooklyn, NY.`,
    es: `La aplicación fue diseñada y desarrollada por <a href="https://evangedrich.com/" target="_blank">Evan Gedrich Pintado</a> como parte del programa intensivo de programación de 12 semanas del Recurse Center en Brooklyn, Nueva York.`,
  }
  return (
    <>
      <div className={styles.info}>
        <Text type="p">{text1}</Text>
        <Text type="p">{text2}</Text>
      </div>
      <Button text="← Back to lessons" to="back" />
    </>
  )
}
