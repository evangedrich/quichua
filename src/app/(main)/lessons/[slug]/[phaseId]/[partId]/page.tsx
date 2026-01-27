import { lessons } from '@/app/lib/lessons';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

import Models from '@/app/components/models';
import Vocab from '@/app/components/vocab';

export async function generateStaticParams() {
  return lessons.flatMap(lesson =>
    lesson.contents.flatMap(content =>
      Array.isArray(content.items[0])
      ? content.items.map((item,i) => ({
        slug: lesson.slug,
        phaseId: content.phase,
        partId: i+1,
      })) : []
    )
  );
}

export default async function Phase({ params }: { params: Promise<{ slug: string, phaseId: string, partId: string }> }) {
  const { slug, phaseId, partId } = await params;
  return (
    <></>
  )
}
