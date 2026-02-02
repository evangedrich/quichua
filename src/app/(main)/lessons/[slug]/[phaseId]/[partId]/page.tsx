import { lessons } from '@/app/lib/lessons';
import { getLessonBySlug, getLessonIndexBySlug } from '@/app/(main)/lessons/[slug]/page.tsx';
import { getPhase, getPhaseIndex, getPhaseData } from '@/app/(main)/lessons/[slug]/[phaseId]/page.tsx';
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
  return Array.isArray(items[0]) ? items[Number(partId)-1] : null;
}
export function getPartLength(slug: string, phaseId: string, partId: string) {
  const items = getPhase(slug,phaseId)?.items;
  return Array.isArray(items[0]) ? items.length : null;
}

export function getURL(slug,phaseId,partId) {
  const contents = getLessonBySlug(slug).contents;
  const phaseIndex = getPhaseIndex(slug,phaseId);
  const partIndex = Number(partId)-1;
  const partLength = getPartLength(slug,phaseId,partId);
  const ifMoreParts: boolean = partIndex<(partLength-1);
  const ifNextHasParts: boolean = Array.isArray(contents[phaseIndex+1]?.items[0]);
  const ifLessonEnd: boolean = phaseIndex===((contents?.length??0)-1);
  const ifToReview: boolean = getLessonIndexBySlug(slug)<lessons.length-1 || getLessonIndexBySlug(slug)%10===0;
  const nextSlug = ifToReview ? `${lessons[getLessonIndexBySlug(slug)+1].slug}` : 'review';
  let url: string = ifMoreParts
    ? `/lessons/${slug}/${phaseId}/${partIndex+2}`
    : ifNextHasParts
      ? `/lessons/${slug}/${contents?.[phaseIndex+1]?.phaseId}/1`
      : `/lessons/${slug}/${contents?.[phaseIndex+1]?.phaseId}`;
  url = (ifLessonEnd && !ifMoreParts) ? `/lessons/${nextSlug}` : url;
  return url;
}

export default async function Part({ params }: { params: Promise<{ slug: string, phaseId: string, partId: string }> }) {
  const { slug, phaseId, partId } = await params;
  const { title, svgId } = getPhaseData(slug,phaseId);
  const part = getPart(slug,phaseId,partId);
  const subPhase = { phase: phaseId, items: part }; // this is the part formatted as a phase for Models/Vocab/Ex components
  const partIndex = Number(partId)-1;
  const partLength = getPartLength(slug,phaseId,partId);
  const progress = partIndex/(partLength-1); //(partIndex+1)/partLength;
  return (
    <>
      <h1 className="text-2xl mb-4"><i><Text>{title}</Text></i></h1>
      <PhaseIcon id={svgId} />
      {(partLength<=6) ? <ProgressDots on={partIndex+1} of={partLength} /> : <ProgressBar complete={progress} size="s" />}
      {(phaseId==='models') ? <Models obj={subPhase} /> : (phaseId==='vocab') ? <Vocab obj={subPhase} /> : <Ex obj={subPhase} />}
      <Button text="←" to="back" />
      <Button text="→" to={getURL(slug,phaseId,partId)} />
      <div className={`${tocapuStyles.svgMove} w-10 h-10 bg-transparent-500 mx-auto`}></div>
    </>
  )
}
