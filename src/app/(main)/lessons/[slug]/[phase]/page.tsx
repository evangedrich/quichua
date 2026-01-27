import { lessons } from '@/app/lib/lessons';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

export async function generateStaticParams() {
  return lessons.flatMap(lesson =>
    lesson.contents.map(content => ({
      slug: lesson.slug,
      phase: content.phase,
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
  return contents.find(content => content.phase === phaseId);
}
function getPhaseIndex(slug,phaseId) {
  const contents = lessons.find(lesson => lesson.slug === slug).contents;
  return contents.findIndex(content => content.phase === phaseId);
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

export default async function Phase({ params }: { params: Promise<{ slug: string, phase: string }> }) {
  const { slug, phase } = await params;
  const thisPhase = getPhase(slug,phase);
  const phaseIndex = getPhaseIndex(slug,phase);
  const phaseTitle: string = getPhaseTitle(phase);
  const contents = getLessonBySlug(slug).contents;
  const lessonIndex = getLessonIndexBySlug(slug);
  const nextSlug = (lessonIndex<lessons.length-1 || lessonIndex%10===0) ? `${lessons[lessonIndex+1].slug}` : 'review';
  const url: string = (phaseIndex<contents.length-1) ? `/lessons/${slug}/${contents[phaseIndex+1]?.phase}` : `/lessons/${nextSlug}`;
  return (
    <>
      <Text type="h1">{phaseTitle}</Text>
      <Button text="back" to="back" />
      <Button text="next" to={url} />
    </>
  )
}
