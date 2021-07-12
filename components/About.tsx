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
    </footer>
  );
}
