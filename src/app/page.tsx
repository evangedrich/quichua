'use client';

import { useEffect, useState } from 'react';

import styles from '@/app/ui/home.module.css';
import Banner from '@/app/components/banner';
import Button from '@/app/components/custom-button';
import UnkuRibbon from '@/app/components/unku-ribbon';

export default function Home() {
  const [isRendered,setIsRendered] = useState(false);
  useEffect(() => {
    setIsRendered(true);
  }, []);
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.ribbon}>
          <UnkuRibbon pattern={1} />
        </div>
        <div className={styles.banner} style={{display:(isRendered)?'flex':'none'}}>
          <Banner />
          <Button text="enter →" to='lessons' />
        </div>
        <div className={styles.ribbon}>
          <UnkuRibbon pattern={2}  />
        </div>
      </div>
    </main>
  );
}
