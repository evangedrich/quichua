import { lessons } from '@/app/lib/lessons';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

import Models from '@/app/components/models';
import Vocab from '@/app/components/vocab';

export async function generateStaticParams() {
  return lessons.flatMap(lesson =>
    lesson.contents.map(content => ({
      slug: lesson.slug,
      phaseId: content.phaseId,
    }))
  );
}


function getLessonBySlug(slug) {
  return lessons.find(lesson => lesson.slug === slug);
}
function getLessonIndexBySlug(slug) {
  return lessons.findIndex(lesson => lesson.slug === slug);
}
function getPhase(slug,phaseId) {
  const contents = lessons.find(lesson => lesson.slug === slug).contents;
  return contents.find(content => content.phaseId === phaseId);
}
function getPhaseIndex(slug,phaseId) {
  const contents = lessons.find(lesson => lesson.slug === slug).contents;
  return contents.findIndex(content => content.phaseId === phaseId);
}
function getPhaseTitle(phaseId) {
  let title: {en: string, es: string} = {en: 'default', es: 'default'};
  if (phaseId==='models') { title = {en: 'Models', es: 'Modelos'}; }
  else if (phaseId==='vocab') { title = {en: 'Vocabulary', es: 'Vocabulario'}; }
  else if (phaseId==='exercises') { title = {en: 'Exercises', es: 'Ejercicios'}; }
  else if (phaseId==='more-exercises') { title = {en: 'More Exercises', es: 'Más Ejercisios'}; }
  else if (phaseId==='pronunciation') { title = {en: 'Pronunciation', es: 'Pronunciación'}; }
  else if (phaseId==='grammar') { title = {en: 'Grammar', es: 'Gramática'}; }
  return title;
}
function sortIntoElement(thisPhase): React.ReactNode {
  let element: React.ReactNode = <></>;
  if (thisPhase.phaseId==='models') { element = <Models>{thisPhase}</Models>; }
  else if (thisPhase.phaseId==='vocab') { element = <Vocab>{thisPhase}</Vocab>; }
  return element;
}

export default async function Phase({ params }: { params: Promise<{ slug: string, phaseId: string }> }) {
  const { slug, phaseId } = await params;
  const thisPhase = getPhase(slug,phaseId);
  const phaseIndex = getPhaseIndex(slug,phaseId);
  const phaseTitle: string = getPhaseTitle(phaseId);
  const contents = getLessonBySlug(slug).contents;
  const lessonIndex = getLessonIndexBySlug(slug);
  const nextSlug = (lessonIndex<lessons.length-1 || lessonIndex%10===0) ? `${lessons[lessonIndex+1].slug}` : 'review';
  const url: string = (phaseIndex<contents.length-1) ? `/lessons/${slug}/${contents[phaseIndex+1]?.phaseId}` : `/lessons/${nextSlug}`;
  return (
    <>
      <h1 style={{marginBottom:'1rem'}}><Text>{phaseTitle}</Text></h1>
      <>{sortIntoElement(thisPhase)}</>
      {/*<Text type="p">{thisPhase.items[0]}</Text>*/}
      <Button text="back" to="back" />
      <Button text="next" to={url} />
    </>
  )
}
