import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Trophy Hunter for League of Legends</title>
        <meta
          name="description"
          content="Spice up your League of Legends experience with an epic journey full of fun challenges and trophies to unlock"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
