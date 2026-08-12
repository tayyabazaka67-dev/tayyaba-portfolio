import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type Props = {
  end: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  displayValue?: string;
};

/**
 * Count-up animation that triggers when scrolled into view.
 * If `displayValue` is provided it is shown instead of the count (for text stats).
 */
export default function CountUp({
  end,
  decimals = 0,
  suffix = '',
  prefix = '',
  duration = 1.6,
  displayValue,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(0);
  const numericEnd = typeof end === 'number' ? end : 0;

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    let start: number | null = null;
    const animate = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / (duration * 1000), 1);
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(numericEnd * eased);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, numericEnd, duration]);

  const text = displayValue ?? `${prefix}${value.toFixed(decimals)}${suffix}`;

  return <span ref={ref}>{text}</span>;
}
