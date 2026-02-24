"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins outside of React lifecycle for SSR safety
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.config({ nullTargetWarn: false });
}

/* ------------------------------------------------------------------ */
/*  Context                                                            */
/* ------------------------------------------------------------------ */

interface MotionContextValue {
  /** `true` when animations are allowed (reduced-motion is NOT active) */
  animationsEnabled: boolean;
}

const MotionContext = createContext<MotionContextValue>({
  animationsEnabled: true,
});

/* ------------------------------------------------------------------ */
/*  Provider                                                           */
/* ------------------------------------------------------------------ */

interface MotionProviderProps {
  children: ReactNode;
}

export function MotionProvider({ children }: MotionProviderProps) {
  const [animationsEnabled, setAnimationsEnabled] = useState(true);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");

    const update = (e: MediaQueryListEvent | MediaQueryList) => {
      setAnimationsEnabled(!e.matches);
    };

    // Initial check
    update(mql);

    // Listen for changes (e.g. user toggles OS setting)
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  return (
    <MotionContext.Provider value={{ animationsEnabled }}>
      {children}
    </MotionContext.Provider>
  );
}

/* ------------------------------------------------------------------ */
/*  Hook                                                               */
/* ------------------------------------------------------------------ */

export function useMotion(): MotionContextValue {
  return useContext(MotionContext);
}
