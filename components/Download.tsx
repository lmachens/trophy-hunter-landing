import React from 'react';
import styles from '../styles/styles.module.css';
import DownloadLink from './DownloadLink';

export default function Download() {
  return (
    <section className={styles.section} id="download">
      <h2>Up for a Challenge?</h2>
      <DownloadLink />
    </section>
  );
}
