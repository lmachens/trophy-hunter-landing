import { useEffect, useRef, useState } from 'react';

export default function useScrolled({ threshold }: { threshold: number }) {
  const [scrolled, setScrolled] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      setScrolled(element.scrollTop > threshold);
    };
    element.addEventListener('scroll', handleScroll);
    return () => {
      element.removeEventListener('scroll', handleScroll);
    };
  }, [elementRef, threshold]);
  return { scrolled, elementRef };
}
