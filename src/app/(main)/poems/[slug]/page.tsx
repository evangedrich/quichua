import { poems } from '@/app/lib/poems';
import Poem from '@/app/components/poem';
import Button from '@/app/components/custom-button';

export async function generateStaticParams() {
  return poems.map(poem => ({
    slug: poem.slug,
  }));
}

function getPoem(slug: string) {
  return poems.find(poem => poem.slug === slug);
}
function getPoemIndex(slug: string) {
  return poems.findIndex(poem => poem.slug===slug);
}

export default async function PoemPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const poem = getPoem(slug);
  return (
    <>
      {poem && <Poem obj={poem} />}
      <Button text="back" to="/poems" />
    </>
  )
}
