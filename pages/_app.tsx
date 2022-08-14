import '../styles/globals.css';
import type { AppProps } from 'next/app';
import useStats from '../hooks/useStats';

function MyApp({ Component, pageProps }: AppProps) {
  useStats();

  return <Component {...pageProps} />;
}
export default MyApp;
