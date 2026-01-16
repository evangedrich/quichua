import styles from '@/app/ui/home.module.css';
import { montserrat, josefinSans } from '@/app/ui/fonts';
import Button from '@/app/ui/custom-button';
import UnkuRibbon from '@/app/ui/unku-ribbon';

export default function Home() {
  return (
    <main>
      <UnkuRibbon pattern={1} top={true} />
      <UnkuRibbon pattern={2} top={false} />
      <div className={styles.banner}>
        <h1 className={`${montserrat.className}`}>QUICHUA</h1>
        <h2 className={`${josefinSans.className}`}>in 10 easy lessons</h2>
        <Button text="enter →" />
      </div>
    </main>
  );
}
