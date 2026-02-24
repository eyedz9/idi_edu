import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

type BgVariant = "dark" | "accent";

interface CTAAction {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
}

interface CTABannerProps {
  headline: string;
  subtitle?: string;
  /** Optional badge/date tag above the headline */
  badge?: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction;
  bg?: BgVariant;
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*  BG map                                                                    */
/* -------------------------------------------------------------------------- */

const bgStyles: Record<BgVariant, string> = {
  dark: "bg-brand-900 text-white",
  accent: "bg-accent-500 text-white",
};

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function CTABanner({
  headline,
  subtitle,
  badge,
  primaryAction,
  secondaryAction,
  bg = "dark",
  className,
}: CTABannerProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        bgStyles[bg],
        className,
      )}
      aria-label="Call to action"
    >
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        {badge && (
          <div className="mb-6">
            <Badge
              variant={bg === "dark" ? "accent" : "dark"}
            >
              {badge}
            </Badge>
          </div>
        )}

        <h2 className="font-heading text-3xl font-bold md:text-4xl lg:text-5xl">
          {headline}
        </h2>

        {subtitle && (
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-lg leading-relaxed",
              bg === "dark" ? "text-warm-200" : "text-white/90",
            )}
          >
            {subtitle}
          </p>
        )}

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href={primaryAction.href}>
            <Button
              as="span"
              variant={primaryAction.variant ?? "primary"}
              size="lg"
              className={cn(
                bg === "accent" &&
                  primaryAction.variant !== "secondary" &&
                  "bg-white text-accent-500 hover:bg-warm-50",
              )}
            >
              {primaryAction.label}
            </Button>
          </Link>

          {secondaryAction && (
            <Link href={secondaryAction.href}>
              <Button
                as="span"
                variant={secondaryAction.variant ?? "secondary"}
                size="lg"
                className={cn(
                  bg === "dark" &&
                    "border-white text-white hover:bg-white hover:text-brand-900",
                  bg === "accent" &&
                    "border-white text-white hover:bg-white hover:text-accent-500",
                )}
              >
                {secondaryAction.label}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
