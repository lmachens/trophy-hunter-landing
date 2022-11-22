import React from 'react';
import { trackOutboundLinkClick } from '../hooks/useStats';
import styles from '../styles/DownloadLink.module.css';

export default function DownloadLink() {
  return (
    <a
      href="https://download.overwolf.com/install/Download?PartnerId=4165"
      target="_blank"
      className={styles.link}
      onClick={() =>
        trackOutboundLinkClick(
          'https://download.overwolf.com/install/Download?PartnerId=4165'
        )
      }
    >
      Download Free
    </a>
  );
}
