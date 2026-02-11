"use client";

import { useRef } from "react";
import Image from "next/image";
import { useParallax, type ParallaxOptions } from "@/hooks/useParallax";

interface ParallaxImageProps extends ParallaxOptions {
  src: string;
  alt: string;
  /** Image width in px (Next.js Image requirement) */
  width?: number;
  /** Image height in px (Next.js Image requirement) */
  height?: number;
  /** Use fill mode instead of explicit width/height */
  fill?: boolean;
  className?: string;
  /** Extra classes on the outer wrapper */
  containerClassName?: string;
  /** Image priority loading */
  priority?: boolean;
  /** Image sizes attribute for responsive images */
  sizes?: string;
}

export function ParallaxImage({
  src,
  alt,
  width,
  height,
  fill = false,
  className,
  containerClassName,
  priority = false,
  sizes,
  speed,
  direction,
  start,
  end,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  useParallax(ref, { speed, direction, start, end });

  return (
    <div
      className={containerClassName}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <div ref={ref} style={{ willChange: "transform" }}>
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            className={className}
            priority={priority}
            sizes={sizes}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width ?? 800}
            height={height ?? 600}
            className={className}
            priority={priority}
            sizes={sizes}
          />
        )}
      </div>
    </div>
  );
}
