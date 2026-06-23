"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

export default function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 2,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      current = Math.min(value, increment * step);
      setDisplay(current);
      if (step >= steps) clearInterval(timer);
    }, (duration * 1000) / steps);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  const formatted = value % 1 !== 0 ? display.toFixed(1) : Math.round(display).toString();

  return (
    <span ref={ref}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
