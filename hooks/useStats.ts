import Plausible from 'plausible-tracker';
import { useEffect } from 'react';

let plausible: ReturnType<typeof Plausible> | null = null;
const initPlausible = () => {
  if (
    typeof process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN === 'string' &&
    typeof process.env.NEXT_PUBLIC_PLAUSIBLE_HOST === 'string' &&
    !plausible
  ) {
    plausible = Plausible({
      domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN,
      apiHost: process.env.NEXT_PUBLIC_PLAUSIBLE_HOST,
    });
    plausible.enableAutoPageviews();
  }
};

export default function useStats() {
  useEffect(() => {
    initPlausible();
  }, []);
}
