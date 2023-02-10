/* eslint-disable react/jsx-no-target-blank */
import { trackOutboundLinkClick } from '../hooks/useStats';
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <footer className={styles.about}>
      <small>
        Built on{' '}
        <a
          href="https://www.overwolf.com/"
          target="_blank"
          onClick={() => trackOutboundLinkClick('https://www.overwolf.com/')}
        >
          Overwolf
        </a>{' '}
        by{' '}
        <a
          href="https://leon.machens.koeln/"
          target="_blank"
          onClick={() => trackOutboundLinkClick('https://leon.machens.koeln/')}
        >
          Leon Machens
        </a>{' '}
        | No Cross-Site trackers and other creepy things
      </small>
      <small>
        More Projects:{' '}
        <a
          href="https://www.hogwarts.gg/"
          title="Hogwarts Legacy Fansite"
          target="_blank"
          onClick={() => trackOutboundLinkClick('https://www.hogwarts.gg/')}
        >
          Hogwarts.gg
        </a>{' '}
        |{' '}
        <a
          href="https://aeternum-map.gg/"
          title="Interactive map for New World"
          target="_blank"
          onClick={() => trackOutboundLinkClick('https://aeternum-map.gg/')}
        >
          Aeternum Map
        </a>{' '}
        |{' '}
        <a
          href="https://www.arkesia.gg/"
          title="Interactive map for Lost Ark"
          target="_blank"
          onClick={() => trackOutboundLinkClick('https://www.arkesia.gg/')}
        >
          Arkesia.gg
        </a>{' '}
        |{' '}
        <a
          href="https://www.soc.gg/"
          title="A Songs of Conquest fansite"
          target="_blank"
          onClick={() => trackOutboundLinkClick('https://www.soc.gg/')}
        >
          SoC.gg
        </a>{' '}
        |{' '}
        <a
          href="https://github.com/lmachens/skeleton"
          title="Simply display any website as customizable Overlay"
          target="_blank"
          onClick={() =>
            trackOutboundLinkClick('https://github.com/lmachens/skeleton')
          }
        >
          Skeleton
        </a>
      </small>
    </footer>
  );
}
