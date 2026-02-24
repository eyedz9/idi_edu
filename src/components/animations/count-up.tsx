"use client";

import { useRef } from "react";
import { useCountUp, type CountUpOptions } from "@/hooks/useCountUp";

interface CountUpProps extends CountUpOptions {
  /** Target number to count up to */
  target: number;
  className?: string;
  /** HTML tag to render. Default: "span" */
  as?: keyof HTMLElementTagNameMap;
}

export function CountUp({
  target,
  className,
  as: Tag = "span",
  ...options
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const display = useCountUp(target, ref, options);

  return (
    // @ts-expect-error -- Tag is a dynamic element, ref typing is safe for span
    <Tag ref={ref} className={className}>
      {display}
    </Tag>
  );
}
