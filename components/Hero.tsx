import React from 'react';
import styles from '../styles/Hero.module.css';
import Image from 'next/image';
import DownloadLink from './DownloadLink';
import ScrollDownLink from './ScrollDownLink';
import backgroundImage from '../public/assets/background.png';
import katarinaImage from '../public/assets/katarina.png';
import missFortuneImage from '../public/assets/miss-fortune.png';
import appImage from '../public/assets/app.gif';
import logoImage from '../public/assets/logo.svg';
import cloudsImage from '../public/assets/clouds.png';

export default function Hero({
  hideScrollDownLink,
}: {
  hideScrollDownLink: boolean;
}) {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src={backgroundImage}
          alt="Islands"
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          priority
          quality={100}
        />
      </div>
      <div className={styles.characters}>
        <Image
          src={missFortuneImage}
          alt="Miss Fortune"
          placeholder="blur"
          priority
          quality={100}
        />
        <Image
          src={katarinaImage}
          alt="Katarina"
          placeholder="blur"
          priority
          quality={100}
        />
      </div>
      <div className={styles.clouds}>
        <Image
          src={cloudsImage}
          alt=""
          layout="fill"
          objectFit="cover"
          priority
          quality="100"
        />
      </div>
      <div className={styles.demo}>
        <Image
          src={appImage}
          alt="Trophy Hunter Demonstration"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.message}>
        <Image src={logoImage} alt="Trophy Hunter" />
        <p className={styles.catchPhrase}>Up for a challenge?</p>
        <p>
          Spice up your League of Legends experience with an epic journey full
          of fun challenges and trophies to unlock
        </p>
        <DownloadLink />
      </div>
      <ScrollDownLink
        label="Features"
        href="#features"
        hidden={hideScrollDownLink}
      />
    </section>
  );
}
