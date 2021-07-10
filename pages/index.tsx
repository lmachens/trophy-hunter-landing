import Head from 'next/head';
import Hero from '../components/Hero';
import styles from '../styles/Home.module.css';
import useScrolled from '../hooks/useScrolled';
import Features from '../components/Features';
import Steps from '../components/Steps';

export default function Home() {
  const { scrolled, elementRef } = useScrolled({ threshold: 200 });

  return (
    <div className={styles.container} ref={elementRef}>
      <Head>
        <title>Trophy Hunter for League of Legends</title>
        <meta
          name="description"
          content="Spice up your League of Legends experience with an epic journey full of fun challenges and trophies to unlock"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero hideScrollDownLink={scrolled} />
      <Features />
      <Steps />
    </div>
  );
}
