"use client";

import { useRef, type ReactNode } from "react";
import { useTextReveal, type TextRevealOptions } from "@/hooks/useTextReveal";

interface TextRevealProps extends TextRevealOptions {
  children: ReactNode;
  className?: string;
  /** HTML heading or element tag. Default: "h2" */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
}

export function TextReveal({
  children,
  className,
  as: Tag = "h2",
  ...options
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  useTextReveal(ref, options);

  return (
    // @ts-expect-error -- Tag is a dynamic element, ref typing is safe
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
