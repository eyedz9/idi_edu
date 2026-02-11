"use client";

import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface AnimatedSectionOptions {
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Stagger between child elements (seconds) */
  stagger?: number;
  /** Starting Y offset in pixels */
  y?: number;
  /** Starting scale value */
  scale?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** Custom trigger element selector (defaults to the container ref) */
  trigger?: string;
  /** ScrollTrigger start position */
  start?: string;
}

const DEFAULTS: Required<Omit<AnimatedSectionOptions, "trigger">> = {
  delay: 0,
  stagger: 0.08,
  y: 40,
  scale: 0.97,
  duration: 0.8,
  start: "top 85%",
};

export function useAnimatedSection(
  ref: RefObject<HTMLElement | null>,
  options: AnimatedSectionOptions = {},
) {
  const { animationsEnabled } = useMotion();

  const {
    delay = DEFAULTS.delay,
    stagger = DEFAULTS.stagger,
    y = DEFAULTS.y,
    scale = DEFAULTS.scale,
    duration = DEFAULTS.duration,
    start = DEFAULTS.start,
    trigger,
  } = options;

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // If reduced-motion is active, make sure elements are visible and bail
      if (!animationsEnabled) {
        gsap.set(el.children.length > 0 ? el.children : el, {
          opacity: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const targets = el.children.length > 0 ? el.children : el;

      // Set initial state
      gsap.set(targets, { opacity: 0, y, scale });

      // Animate in on scroll
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration,
        delay,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: trigger ? document.querySelector(trigger) : el,
          start,
          toggleActions: "play none none none",
        },
      });
    },
    {
      scope: ref,
      dependencies: [animationsEnabled, delay, stagger, y, scale, duration, start, trigger],
    },
  );
}
