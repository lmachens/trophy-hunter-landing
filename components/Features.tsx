import React from 'react';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import trophiesImage from '../public/assets/trophies.png';
import liveProgressImage from '../public/assets/live-progress.png';
import challengeIslandImage from '../public/assets/challenge-island.png';

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <h2>Features</h2>
      <div className={styles.flex}>
        <article className={styles.card}>
          <Image src={trophiesImage} alt="" width={202} height={175} />
          <h3>Trophies</h3>
          <p>Unlock over 200 unique trophies across several categories</p>
        </article>
        <article className={styles.card}>
          <Image src={liveProgressImage} alt="" width={202} height={175} />
          <h3>Live Progress Bar</h3>
          <p>
            Focus on your favorite trophies with a real-time tracker that
            rewards your every move
          </p>
        </article>
        <article className={styles.card}>
          <Image src={challengeIslandImage} alt="" width={202} height={175} />
          <h3>Challenge Islands</h3>
          <p>
            Complete challenges to unlock epic islands – each adding new
            trophies to collect
          </p>
        </article>
      </div>
    </section>
  );
}
