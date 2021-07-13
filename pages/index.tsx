import Head from 'next/head';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import useScrolled from '../hooks/useScrolled';
import Features from '../components/Features';
import Steps from '../components/Steps';
import Download from '../components/Download';
import About from '../components/About';

export default function Home() {
  const { scrolled, elementRef } = useScrolled({ threshold: 200 });

  return (
    <div className={styles.container} ref={elementRef}>
      <Head>
        <title>Trophy Hunter for League of Legends</title>
      </Head>
      <Hero hideScrollDownLink={scrolled} />
      <Features />
      <Steps />
      <Download />
      <About />
    </div>
  );
}
