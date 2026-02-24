"use client";

import { useRef, useCallback, type ReactNode } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useMotion } from "@/components/animations/motion-provider";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  /** Magnetic pull strength (0-1). Default 0.3. */
  strength?: number;
  /** How quickly the element returns to center (seconds). Default 0.5. */
  returnDuration?: number;
  /** HTML tag to render. Default: "button" */
  as?: "button" | "a" | "div";
  /** Pass-through props for the underlying element */
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  "aria-label"?: string;
}

export function MagneticButton({
  children,
  className,
  strength = 0.3,
  returnDuration = 0.5,
  as: Tag = "button",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const { animationsEnabled } = useMotion();

  // Detect touch device (disable magnetic on touch)
  const isTouchDevice = useCallback(() => {
    if (typeof window === "undefined") return true;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }, []);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !animationsEnabled || isTouchDevice()) return;

      // Create quickTo instances for butter-smooth interpolation
      const xTo = gsap.quickTo(el, "x", { duration: 0.4, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.4, ease: "power3.out" });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        xTo(deltaX);
        yTo(deltaY);
      };

      const handleMouseLeave = () => {
        gsap.to(el, {
          x: 0,
          y: 0,
          duration: returnDuration,
          ease: "elastic.out(1, 0.4)",
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
        el.removeEventListener("mouseleave", handleMouseLeave);
      };
    },
    {
      scope: ref,
      dependencies: [animationsEnabled, strength, returnDuration],
    },
  );

  return (
    <Tag
      ref={ref as React.RefObject<never>}
      className={className}
      style={{ display: "inline-block", willChange: "transform" }}
      {...props}
    >
      {children}
    </Tag>
  );
}
