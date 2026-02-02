import { lessons } from '@/app/lib/lessons';
import { getLessonBySlug, getLessonIndexBySlug } from '@/app/(main)/lessons/[slug]/page.tsx';
import PhaseIcon from '@/app/components/phase-icon';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

import Models from '@/app/components/models';
import Vocab from '@/app/components/vocab';
import Ex from '@/app/components/ex';

import { tocapuLibrary, tocapuSearch } from '@/app/ui/tocapu';
import tocapuStyles from '@/app/ui/tocapu.module.css';

interface bilingualType {
  en: string | string[],
  es: string | string[],
}
interface trilingualType {
  qu: string,
  en: string,
  es: string,
}
interface phaseType {
  phaseId: string,
  items: bilingualType[] | trilingualType[],
}
interface lessonType {
  slug: string,
  topic: bilingualType,
  contents: phaseType[],
}

export async function generateStaticParams() {
  return lessons.flatMap(lesson =>
    lesson.contents.map(content => ({
      slug: lesson.slug,
      phaseId: content.phaseId,
    }))
  );
}

export function getPhase(slug: string, phaseId: string): phaseType {
  const contents = lessons.find(lesson => lesson.slug === slug)?.contents;
  return contents?.find(content => content.phaseId === phaseId);
}
export function getPhaseIndex(slug: string, phaseId: string) {
  const contents = lessons.find(lesson => lesson.slug === slug)?.contents;
  return contents?.findIndex(content => content.phaseId === phaseId);
}
export function getPhaseData(slug: string, phaseId: string): { title: { en: string, es: string }, svgId: string, element: React.ReactNode } {
  let title: {en: string, es: string} = {en: 'default', es: 'default'};
  let svgId: string = 'key3'; let el: React.ReactNode = <></>; const phase: phaseType = getPhase(slug,phaseId);
  if (phaseId==='models') { title={en:'Models',es:'Modelos'}; svgId='maskaypacha'; el=<Models obj={phase} />; }
  else if (phaseId==='vocab') { title={en:'Vocabulary',es:'Vocabulario'}; svgId='anvil'; el=<Vocab obj={phase} />; }
  else if (phaseId==='exercises') { title={en:'Exercises',es:'Ejercicios'}; svgId='exes'; el=<Ex obj={phase} />; }
  else if (phaseId==='more-exercises') { title={en:'More Exercises',es:'Más Ejercisios'}; svgId='pants1'; el=<Ex obj={phase} />; }
  else if (phaseId==='pronunciation') { title={en:'Pronunciation',es:'Pronunciación'}; svgId='worms'; el=<Ex obj={phase} />; }
  else if (phaseId==='grammar') { title={en:'Grammar',es:'Gramática'}; svgId='firstAid'; el=<Ex obj={phase} />; }
  return { title: title, svgId: svgId, element: el };
}

export default async function Phase({ params }: { params: Promise<{ slug: string, phaseId: string }> }) {
  const { slug, phaseId } = await params;
  const thisPhase: phaseType | undefined = getPhase(slug,phaseId);
  const phaseIndex = getPhaseIndex(slug,phaseId) ?? -1;

  const { title, svgId, element } = getPhaseData(slug,phaseId);

  const contents = getLessonBySlug(slug)?.contents;
  const lessonIndex: number = getLessonIndexBySlug(slug);

  const ifToReview: boolean = lessonIndex<lessons.length-1 || lessonIndex%10===0;
  const ifLessonEnd: boolean = phaseIndex<(contents?.length??0)-1;
  const ifNextHasParts: boolean = Array.isArray(contents[phaseIndex+1]?.items[0]);
  const nextSlug = ifToReview ? `${lessons[lessonIndex+1].slug}` : 'review';
  let url: string = ifLessonEnd ? `/lessons/${slug}/${contents?.[phaseIndex+1]?.phaseId}` : `/lessons/${nextSlug}`;
  url = ifNextHasParts ? `/lessons/${slug}/${contents?.[phaseIndex+1]?.phaseId}/1` : url;
  return (
    <>
      <h1 className="text-2xl mb-4"><i><Text>{title}</Text></i></h1>
      <PhaseIcon id={svgId} />
      <>{element}</>
      {/*<Text type="p">{thisPhase.items[0]}</Text>*/}
      <Button text="back" to="back" />
      <Button text="next" to={url} />
      <div className={`${tocapuStyles.svgMove} w-10 h-10 bg-transparent-500 mx-auto`}></div>
    </>
  )
}
