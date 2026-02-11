"use client";

import { useRef, useEffect, useCallback, type ReactNode } from "react";
import gsap from "gsap";
import { useMotion } from "@/components/animations/motion-provider";

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface MegaMenuWrapperProps {
  /** Whether the panel is visible */
  open: boolean;
  /** Called when the panel should close */
  onClose: () => void;
  /** Unique id for aria-controls linking */
  id: string;
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/*  Animated Container                                                        */
/* -------------------------------------------------------------------------- */

export function MegaMenuWrapper({ open, onClose, id, children }: MegaMenuWrapperProps) {
  const panelRef = useRef<HTMLDivElement>(null);
  const { animationsEnabled } = useMotion();

  /* ── Escape key ───────────────────────────────────────────────────────── */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [open, handleKeyDown]);

  /* ── GSAP animation ───────────────────────────────────────────────────── */
  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    if (!animationsEnabled) {
      panel.style.display = open ? "block" : "none";
      panel.style.clipPath = "none";
      panel.style.opacity = "1";
      return;
    }

    if (open) {
      // Kill any running tweens first
      gsap.killTweensOf(panel);
      gsap.killTweensOf(panel.querySelectorAll("[data-mega-cell]"));

      panel.style.display = "block";

      // Clip-path reveal: top-down unfold
      gsap.fromTo(
        panel,
        { clipPath: "inset(0 0 100% 0)", opacity: 0 },
        {
          clipPath: "inset(0 0 0% 0)",
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        },
      );

      // Staggered cell fade-in
      const cells = panel.querySelectorAll("[data-mega-cell]");
      gsap.fromTo(
        cells,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.05,
          delay: 0.12,
          ease: "power2.out",
        },
      );
    } else {
      gsap.killTweensOf(panel);
      gsap.killTweensOf(panel.querySelectorAll("[data-mega-cell]"));

      gsap.to(panel, {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        duration: 0.22,
        ease: "power2.in",
        onComplete: () => {
          panel.style.display = "none";
        },
      });
    }
  }, [open, animationsEnabled]);

  if (!open && !animationsEnabled) return null;

  return (
    <div
      ref={panelRef}
      id={id}
      role="menu"
      aria-label="Submenu"
      style={{ display: "none" }}
      className="absolute left-0 right-0 top-full z-50 border-b border-white/5 bg-plum-900/98 shadow-2xl backdrop-blur-2xl"
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
}
