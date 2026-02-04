import { lessons } from '@/app/lib/lessons';
import { getLessonBySlug, getLessonIndexBySlug } from '@/app/(main)/lessons/[slug]/page';
import { getPhase, getPhaseIndex, getPhaseData } from '@/app/(main)/lessons/[slug]/[phaseId]/page';
import { getNeighbor } from '@/app/components/khipu';
import PhaseIcon from '@/app/components/phase-icon';
import Text from '@/app/components/text-prep';
import ProgressBar from '@/app/components/progress-bar';
import ProgressDots from '@/app/components/progress-dots';
import Button from '@/app/components/custom-button';

import Models from '@/app/components/models';
import Vocab from '@/app/components/vocab';
import Ex from '@/app/components/ex';

import { tocapuLibrary, tocapuSearch } from '@/app/ui/tocapu';
import tocapuStyles from '@/app/ui/tocapu.module.css';

export async function generateStaticParams() {
  return lessons.flatMap(lesson =>
    lesson.contents.flatMap(content =>
      Array.isArray(content.items[0])
      ? content.items.map((item,i) => ({
        slug: lesson.slug,
        phaseId: content.phaseId,
        partId: `${i+1}`,
      })) : []
    )
  );
}

export function getPart(slug: string, phaseId: string, partId: string) {
  const items = getPhase(slug,phaseId)?.items;
  if (!items || !Array.isArray(items)) return null;
  return Array.isArray(items[0]) ? items[Number(partId)-1] : null;
}
export function getPartLength(slug: string, phaseId: string, partId: string) {
  const items = getPhase(slug,phaseId)?.items;
  if (!items || !Array.isArray(items)) return null;
  return Array.isArray(items[0]) ? items.length : null;
}

export default async function Part({ params }: { params: Promise<{ slug: string, phaseId: string, partId: string }> }) {
  const { slug, phaseId, partId } = await params;
  const { title, svgId } = getPhaseData(slug,phaseId);
  const part = getPart(slug,phaseId,partId);
  const subPhase = { phase: phaseId, items: part }; // this is the part formatted as a phase for Models/Vocab/Ex components
  const partIndex = Number(partId)-1;
  const partLength = getPartLength(slug,phaseId,partId) ?? 1;
  const progress = partIndex/(partLength-1 || 1); //(partIndex+1)/partLength;
  const prevPart = getPart(slug,phaseId,(Number(partId)-1).toString());
  const offset: number = (partIndex>0 && Array.isArray(prevPart)) ? (prevPart?.length ?? 0) : 0;
  const { prev, next } = getNeighbor(`/lessons/${slug}/${phaseId}/${partId}`);
  return (
    <>
      <h1 className="text-2xl mb-4"><i><Text>{title}</Text></i></h1>
      <PhaseIcon id={svgId} margin={false} />
      {(partLength<=6) ? <ProgressDots on={partIndex+1} of={partLength} /> : <ProgressBar complete={progress} size="s" />}
      {(phaseId==='models') ? <Models obj={subPhase} offset={offset} /> : (phaseId==='vocab') ? <Vocab obj={subPhase} /> : <Ex obj={subPhase} />}
      <Button text="←" to={prev} />
      <Button text="→" to={next} />
      <div className={`${tocapuStyles.svgMove} w-10 h-10 bg-transparent-500 mx-auto`}></div>
    </>
  )
}
