import Button from '@/app/components/custom-button';
import { lessons } from '@/app/lib/lessons'

export default function Lessons() {
  return (
    <>
      <div>
        <p>Welcome to <i>Introduction to Central Highland Quichua of Ecuador</i>, where we learn how to speak Quichua with the help of a language tutor. Click below to get started!</p>
      </div>
      <Button text="Let's go! →" to={`lessons/${lessons[0].slug}`} />
    </>
  )
}
