"use client";

import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface ParallaxOptions {
  /** Speed multiplier. Positive = moves slower than scroll, negative = opposite.
   *  Typical range: -0.5 to 0.5. Default 0.2. */
  speed?: number;
  /** Direction of parallax movement */
  direction?: "vertical" | "horizontal";
  /** ScrollTrigger start position */
  start?: string;
  /** ScrollTrigger end position */
  end?: string;
}

export function useParallax(
  ref: RefObject<HTMLElement | null>,
  options: ParallaxOptions = {},
) {
  const {
    speed = 0.2,
    direction = "vertical",
    start = "top bottom",
    end = "bottom top",
  } = options;

  const { animationsEnabled } = useMotion();

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !animationsEnabled) return;

      // Calculate the total distance to travel based on speed
      // A speed of 0.2 means the element moves 20% of its own height
      // relative to the scroll distance
      const distance = el.offsetHeight * speed;

      const prop = direction === "vertical" ? "y" : "x";

      gsap.fromTo(
        el,
        { [prop]: -distance },
        {
          [prop]: distance,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start,
            end,
            scrub: true,
          },
        },
      );
    },
    {
      scope: ref,
      dependencies: [animationsEnabled, speed, direction, start, end],
    },
  );
}
