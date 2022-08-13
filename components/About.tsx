/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <footer className={styles.about}>
      <small>
        Built on{' '}
        <a href="https://www.overwolf.com/" target="_blank" rel="noreferrer">
          Overwolf
        </a>{' '}
        by{' '}
        <a href="https://leon.machens.koeln/" target="_blank" rel="noreferrer">
          Leon Machens
        </a>{' '}
        | No Cross-Site trackers and other creepy things
      </small>
      <small>
        More Projects:{' '}
        <a
          href="https://www.aeternum-map.gg/"
          title="Interactive map for New World"
          target="_blank"
        >
          Aeternum Map
        </a>{' '}
        |{' '}
        <a
          href="https://www.arkesia.gg/"
          title="Interactive map for Lost Ark"
          target="_blank"
        >
          Arkesia.gg
        </a>{' '}
        |{' '}
        <a
          href="https://www.soc.gg/"
          title="A Songs of Conquest fansite"
          target="_blank"
        >
          SoC.gg
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/lmachens/skeleton"
          title="Simply display any website as customizable Overlay"
          target="_blank"
        >
          Skeleton
        </a>
      </small>
    </footer>
  );
}
