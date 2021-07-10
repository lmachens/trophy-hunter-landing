import React from 'react';
import styles from '../styles/DownloadLink.module.css';

export default function DownloadLink() {
  return (
    <a
      href="https://download.overwolf.com/install/Download?PartnerId=4165"
      target="_blank"
      rel="noreferrer"
      className={styles.link}
    >
      Download Free
    </a>
  );
}
