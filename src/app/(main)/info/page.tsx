import Button from '@/app/components/custom-button';

export default function Info() {
  return (
    <>
      <div>
        <p>This cross-platform app is an adaptation of the document <i>Introduction to Central Highland Quichua of Ecuador, or Quichua in Ten Easy Lessons (the other 40 are harder)</i> by Ellen M. Ross, prepared by Richard P. Aschmann, intended as a digital aid to learning spoken Ecuadorian Quichua with a Quichua-language tutor.</p>
        <p>The app was designed and built by Evan Gedrich Pintado as a part of the 12-week Recurse Center programming retreat in Brooklyn, NY.</p>
      </div>
      <Button text="← Back to lessons" to="back" />
    </>

  )
}
