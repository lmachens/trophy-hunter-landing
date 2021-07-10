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
        | Compliant with Riot&apos;s ToS
      </small>
    </footer>
  );
}
