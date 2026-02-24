import type { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Variant map                                                               */
/* -------------------------------------------------------------------------- */

const variantStyles = {
  accent:
    "bg-pink-500/15 text-pink-500 border border-amber-500/25",
  dark:
    "bg-plum-900 text-parchment border border-plum-700",
  outline:
    "bg-transparent text-parchment border border-parchment/40",
  jade:
    "bg-jade/15 text-jade border border-jade/25",
  violet:
    "bg-violet/15 text-violet border border-violet/25",
} as const;

type Variant = keyof typeof variantStyles;

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: Variant;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function Badge({
  variant = "accent",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold font-body tracking-wide whitespace-nowrap",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}

export default Badge;
