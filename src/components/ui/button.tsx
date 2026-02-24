import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Variant + size maps                                                       */
/* -------------------------------------------------------------------------- */

const variantStyles = {
  primary:
    "bg-pink-500 text-plum-900 hover:bg-pink-400 focus-visible:ring-amber-400 shadow-sm hover:shadow-[0_0_20px_rgba(245,166,35,0.3)]",
  secondary:
    "border-2 border-parchment text-parchment hover:bg-parchment hover:text-plum-900 focus-visible:ring-parchment",
  ghost:
    "text-parchment underline underline-offset-4 decoration-amber-500/60 hover:decoration-amber-500 focus-visible:ring-amber-500",
  accent:
    "bg-violet text-white hover:bg-violet/80 focus-visible:ring-violet shadow-sm",
} as const;

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
} as const;

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

type Variant = keyof typeof variantStyles;
type Size = keyof typeof sizeStyles;

interface ButtonBaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: "button";
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: "a";
  };

type ButtonAsSpan = ButtonBaseProps &
  Omit<HTMLAttributes<HTMLSpanElement>, keyof ButtonBaseProps> & {
    as: "span";
  };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor | ButtonAsSpan;

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

const shared =
  "inline-flex items-center justify-center font-body font-semibold rounded-lg transition-all duration-200 ease-out hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement | HTMLSpanElement,
  ButtonProps
>(function Button(props, ref) {
  const {
    as,
    variant = "primary",
    size = "md",
    className,
    ...rest
  } = props;

  const classes = cn(shared, variantStyles[variant], sizeStyles[size], className);

  if (as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        {...anchorProps}
      />
    );
  }

  if (as === "span") {
    const spanProps = rest as HTMLAttributes<HTMLSpanElement>;
    return (
      <span
        ref={ref as React.Ref<HTMLSpanElement>}
        className={classes}
        {...spanProps}
      />
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={classes}
      {...buttonProps}
    />
  );
});

export default Button;
