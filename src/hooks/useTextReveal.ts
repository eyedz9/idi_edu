"use client";

import { type RefObject, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface TextRevealOptions {
  /** Stagger delay between each word (seconds) */
  stagger?: number;
  /** Starting Y offset per word */
  y?: number;
  /** Animation duration per word (seconds) */
  duration?: number;
  /** Ease function */
  ease?: string;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** If true, triggers on mount instead of scroll */
  triggerOnMount?: boolean;
  /** ScrollTrigger start position */
  start?: string;
}

/**
 * Splits text content of `ref` into word-level spans and animates them
 * in with a staggered fade-up. The original text is preserved for
 * accessibility via `aria-label` on the container.
 */
export function useTextReveal(
  ref: RefObject<HTMLElement | null>,
  options: TextRevealOptions = {},
) {
  const {
    stagger = 0.04,
    y = 20,
    duration = 0.6,
    ease = "power3.out",
    delay = 0,
    triggerOnMount = false,
    start = "top 85%",
  } = options;

  const { animationsEnabled } = useMotion();

  // Split helper — wraps each word in a span
  const splitWords = useCallback((el: HTMLElement): HTMLSpanElement[] => {
    const text = el.textContent || "";
    // Store original text for a11y
    el.setAttribute("aria-label", text);

    const words = text.split(/\s+/).filter(Boolean);
    el.innerHTML = "";

    const spans: HTMLSpanElement[] = [];
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.style.display = "inline-block";
      span.style.willChange = "transform, opacity";
      span.textContent = word;
      el.appendChild(span);

      // Add a text node space between words (not after last)
      if (i < words.length - 1) {
        el.appendChild(document.createTextNode("\u00A0"));
      }

      spans.push(span);
    });

    return spans;
  }, []);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      if (!animationsEnabled) {
        // Ensure text is visible, don't split
        el.style.opacity = "1";
        return;
      }

      const wordSpans = splitWords(el);
      if (wordSpans.length === 0) return;

      gsap.set(wordSpans, { opacity: 0, y });

      const tweenVars: gsap.TweenVars = {
        opacity: 1,
        y: 0,
        duration,
        stagger,
        ease,
        delay,
      };

      if (!triggerOnMount) {
        tweenVars.scrollTrigger = {
          trigger: el,
          start,
          toggleActions: "play none none none",
        };
      }

      gsap.to(wordSpans, tweenVars);
    },
    {
      scope: ref,
      dependencies: [animationsEnabled, stagger, y, duration, ease, delay, triggerOnMount, start],
    },
  );
}
