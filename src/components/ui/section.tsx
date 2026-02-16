import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Background variants                                                       */
/* -------------------------------------------------------------------------- */

const bgVariants = {
  default: "bg-plum-900 text-parchment",
  dark: "bg-plum-900 text-parchment",
  accent: "bg-plum-800 text-parchment",
  light: "bg-plum-800 text-parchment",
  mesh: "text-parchment",
} as const;

type BgVariant = keyof typeof bgVariants;

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface SectionProps extends HTMLAttributes<HTMLElement> {
  bg?: BgVariant;
  overline?: string;
  title?: string;
  subtitle?: string;
  /** Center the header block (default true) */
  centered?: boolean;
  /** Add grain texture overlay to dark sections */
  grain?: boolean;
  /** Extra wrapper classes for the inner container */
  containerClassName?: string;
  children: ReactNode;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function Section({
  bg = "default",
  overline,
  title,
  subtitle,
  centered = true,
  grain = false,
  containerClassName,
  className,
  children,
  ...props
}: SectionProps) {
  const hasHeader = overline || title || subtitle;
  const isDark = true;
  const showGrain = grain && isDark;

  return (
    <section
      className={cn(
        "relative overflow-hidden py-16 md:py-24",
        bgVariants[bg],
        bg === "mesh" && "mesh-aurora",
        showGrain && "grain",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          containerClassName,
        )}
      >
        {hasHeader && (
          <div
            className={cn(
              "mb-12 md:mb-16 max-w-3xl",
              centered && "mx-auto text-center",
            )}
          >
            {overline && (
              <p className="mb-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
                {overline}
              </p>
            )}
            {title && (
              <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  "mt-4 text-lg leading-relaxed",
                  isDark ? "text-sandstone" : "text-neutral-500",
                )}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}

export default Section;
