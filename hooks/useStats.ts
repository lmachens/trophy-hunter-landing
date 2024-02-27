import Plausible, { EventOptions, PlausibleOptions } from 'plausible-tracker';
import { useEffect } from 'react';

let plausible: ReturnType<typeof Plausible> | null = null;
const initPlausible = () => {
  if (
    !plausible
  ) {
    plausible = Plausible({
      domain: "lol.th.gl",
      apiHost: "https://metrics.th.gl",
    });
    plausible.enableAutoPageviews();
  }
};

export const trackEvent = (
  eventName: string,
  options?: EventOptions | undefined,
  eventData?: PlausibleOptions | undefined
) => {
  if (plausible) {
    plausible.trackEvent(eventName, options, eventData);
  }
};

export const trackOutboundLinkClick = (url: string) => {
  trackEvent('Outbound Link: Click', { props: { url: url } });
};

export default function useStats() {
  useEffect(() => {
    initPlausible();
  }, []);
}
