"use client";

import { useRef, type ReactNode } from "react";
import { useAnimatedSection, type AnimatedSectionOptions } from "@/hooks/useAnimatedSection";

interface AnimatedSectionProps extends AnimatedSectionOptions {
  children: ReactNode;
  className?: string;
  /** HTML tag to render. Default: "div" */
  as?: keyof HTMLElementTagNameMap;
}

export function AnimatedSection({
  children,
  className,
  as: Tag = "div",
  ...options
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  useAnimatedSection(ref, options);

  return (
    // @ts-expect-error -- Tag is a dynamic element, ref typing is safe for div
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
