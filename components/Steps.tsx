import React from 'react';
import styles from '../styles/styles.module.css';
import Image from 'next/image';
import downloadImage from '../public/assets/download.svg';
import installImage from '../public/assets/install.svg';
import baronImage from '../public/assets/baron.svg';

export default function Steps() {
  return (
    <section className={styles.section} id="steps">
      <h2>Using Trophy Hunter in 3 steps</h2>
      <div className={styles.flex}>
        <article className={styles.card}>
          <Image src={downloadImage} alt="" />
          <h3>Download Trophy Hunter</h3>
          <p>You can get it securely for free using the button below</p>
        </article>
        <article className={styles.card}>
          <Image src={installImage} alt="" />
          <h3>Install the App</h3>
          <p>A short installation will enable Trophy Hunter on your machine</p>
        </article>
        <article className={styles.card}>
          <Image src={baronImage} alt="" />
          <h3>Start Your Match</h3>
          <p>Trophy Hunter automatically launches when your match starts</p>
        </article>
      </div>
    </section>
  );
}
