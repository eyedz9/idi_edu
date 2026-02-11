"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface CountUpOptions {
  /** Animation duration in seconds */
  duration?: number;
  /** Text appended after the number (e.g. "+") */
  suffix?: string;
  /** Text prepended before the number (e.g. "$") */
  prefix?: string;
  /** ScrollTrigger start position */
  start?: string;
  /** Use locale-formatted number (commas) */
  useLocale?: boolean;
}

export function useCountUp(
  target: number,
  triggerRef: React.RefObject<HTMLElement | null>,
  options: CountUpOptions = {},
) {
  const {
    duration = 2,
    suffix = "",
    prefix = "",
    start = "top 85%",
    useLocale = true,
  } = options;

  const { animationsEnabled } = useMotion();

  // Format helper
  const format = (n: number): string => {
    const rounded = Math.round(n);
    const numStr = useLocale ? rounded.toLocaleString() : String(rounded);
    return `${prefix}${numStr}${suffix}`;
  };

  const [display, setDisplay] = useState(() =>
    animationsEnabled ? format(0) : format(target),
  );

  const proxy = useRef({ value: 0 });

  useGSAP(
    () => {
      const el = triggerRef.current;
      if (!el) return;

      if (!animationsEnabled) {
        setDisplay(format(target));
        return;
      }

      // Reset proxy
      proxy.current.value = 0;
      setDisplay(format(0));

      gsap.to(proxy.current, {
        value: target,
        duration,
        ease: "power2.out",
        snap: { value: 1 },
        scrollTrigger: {
          trigger: el,
          start,
          toggleActions: "play none none none",
        },
        onUpdate() {
          setDisplay(format(proxy.current.value));
        },
      });
    },
    {
      scope: triggerRef,
      dependencies: [target, duration, suffix, prefix, animationsEnabled, start, useLocale],
    },
  );

  return display;
}
