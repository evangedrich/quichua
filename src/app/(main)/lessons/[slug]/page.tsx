import { lessons } from '@/app/lib/lessons';
import { getNeighbor } from '@/app/components/khipu';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';
import { montserrat, inter } from '@/app/ui/fonts';

export async function generateStaticParams() {
  return lessons.map(lesson => ({
    slug: lesson.slug,
  }));
}

export function getLessonBySlug(slug: string) {
  return lessons.find(lesson => lesson.slug === slug);
}
export function getLessonIndexBySlug(slug: string) {
  return lessons.findIndex(lesson => lesson.slug===slug);
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  const currentIndex: number = getLessonIndexBySlug(slug);
  const isFirst: boolean = currentIndex===0;
  const isLast: boolean = !(currentIndex<lessons.length-1);

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  const { prev, next } = getNeighbor(`/lessons/${slug}`);

  return (
    <>
      <h1 className={`${montserrat.className} font-extrabold text-4xl mb-2 uppercase`}>
        <Text>{{en: `Lesson ${lesson.slug}`, es: `Lección ${lesson.slug}`}}</Text>
      </h1>
      <h2 className={`${inter.className} font-light text-lg`}><Text>{lesson.topic}</Text></h2>
      {!isFirst ? <Button text="back" to={prev} /> : <></>}
      <Button text="next" to={next} />
      <div className={`w-10 h-10 bg-transparent-500 mx-auto`}></div>
    </>
  )
}
