import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import styles from '@/app/ui/main.module.css';

export default function MainLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
