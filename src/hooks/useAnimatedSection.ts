"use client";

import { type RefObject, useEffect } from "react";
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

  // Safety timeout: force elements visible if ScrollTrigger hasn't fired after 4s
  useEffect(() => {
    const timer = setTimeout(() => {
      const el = ref.current;
      if (!el) return;
      const targets = el.children.length > 0 ? el.children : [el];
      Array.from(targets).forEach((child) => {
        const htmlChild = child as HTMLElement;
        const computed = window.getComputedStyle(htmlChild);
        if (computed.opacity === "0" || computed.visibility === "hidden") {
          htmlChild.style.opacity = "1";
          htmlChild.style.visibility = "visible";
          htmlChild.style.transform = "none";
        }
      });
    }, 4000);
    return () => clearTimeout(timer);
  }, [ref]);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      // If reduced-motion is active, make sure elements are visible and bail
      if (!animationsEnabled) {
        gsap.set(el.children.length > 0 ? el.children : el, {
          autoAlpha: 1,
          y: 0,
          scale: 1,
        });
        return;
      }

      const targets = el.children.length > 0 ? el.children : el;

      // Set initial state using autoAlpha for better visibility management
      gsap.set(targets, { autoAlpha: 0, y, scale });

      // Animate in on scroll
      gsap.to(targets, {
        autoAlpha: 1,
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
