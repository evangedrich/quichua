import Button from '@/app/components/custom-button';

export default function Lessons() {
  return (
    <>
      <div className="mb-[2rem]">
        <p>Welcome to <i>Introduction to Central Highland Quichua of Ecuador</i>, where we learn how to speak Quichua with the help of a language tutor. Click below to get started!</p>
      </div>
      <Button text="Let's go! →" to="lessons/1" />
    </>
  )
}
