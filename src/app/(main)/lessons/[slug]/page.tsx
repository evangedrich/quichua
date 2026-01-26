import { lessons } from '@/app/lib/lessons';
import Text from '@/app/components/text-prep';
import Button from '@/app/components/custom-button';

export async function generateStaticParams() {
  return lessons.map(lesson => ({
    slug: lesson.slug,
  }));
}

function getLessonBySlug(slug) {
  return lessons.find(lesson => lesson.slug === slug);
}
function getLessonIndexBySlug(slug) {
  return lessons.findIndex(lesson => lesson.slug===slug);
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);

  const currentIndex: number = getLessonIndexBySlug(slug);
  const isFirst: boolean = currentIndex===0;
  const isLast: boolean = !currentIndex<lessons.length-1;

  if (!lesson) {
    return <div>Lesson not found</div>;
  }

  return (
    <>
      <h1>Lesson {lesson.slug}</h1>
      <h2><Text textObj={lesson.topic} /></h2>
      {!isFirst ? <Button text="back" to="back" /> : <></>}
      <Button text="next" to={`${lesson.slug}/${lesson.contents[0].phase}`} />
    </>
  )
}
