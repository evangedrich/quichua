import { lessons } from '@/app/lib/lessons';
import { getLessonBySlug, getLessonIndexBySlug } from '@/app/(main)/lessons/[slug]/page.tsx';
import { getPhase, getPhaseIndex, getPhaseData } from '@/app/(main)/lessons/[slug]/[phaseId]/page.tsx';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

import Models from '@/app/components/models';
import Vocab from '@/app/components/vocab';

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

function getPart(slug: string, phaseId: string, partId: string) {
  const items = getPhase(slug,phaseId)?.items;
  return Array.isArray(items[0]) ? items[Number(partId)-1] : null;
}
function getPartLength(slug: string, phaseId: string, partId: string) {
  const items = getPhase(slug,phaseId)?.items;
  return Array.isArray(items[0]) ? items.length : null;
}

export default async function Part({ params }: { params: Promise<{ slug: string, phaseId: string, partId: string }> }) {
  const { slug, phaseId, partId } = await params;
  const { title, svgId } = getPhaseData(slug,phaseId);
  const part = getPart(slug,phaseId,partId);
  const partIndex = Number(partId)-1;
  const partLength = getPartLength(slug,phaseId,partId);
  const progress = partIndex/partLength;
  const url: string = (partIndex<(partLength-1)) ? `/lessons/${slug}/${phaseId}/${partIndex+2}` : '';
  return (
    <>
      <h1 className="text-2xl mb-4"><i><Text>{title}</Text></i> ({partId}/{partLength})</h1>
      <div className={`${tocapuStyles.svgMove} w-10 h-10 bg-blue-500 mx-auto mb-4`}>{tocapuSearch(svgId)}</div>
      <Vocab obj={{ phase: phaseId, items: part }} />
      <Button text="←" to="back" />
      <Button text="→" to={url} />
    </>
  )
}
