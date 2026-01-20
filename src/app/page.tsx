import styles from '@/app/ui/home.module.css';
import Banner from '@/app/components/banner';
import Button from '@/app/ui/custom-button';
import UnkuRibbon from '@/app/ui/unku-ribbon';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.ribbon}>
          <UnkuRibbon pattern={1} top={true} />
        </div>
        <div className={styles.banner}>
          <Banner />
          <Button text="enter →" />
        </div>
        <div className={styles.ribbon}>
          <UnkuRibbon pattern={2}  />
        </div>
      </div>
    </main>
  );
}
