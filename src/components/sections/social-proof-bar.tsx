import Image from "next/image";
import { cn } from "@/lib/cn";

/* -------------------------------------------------------------------------- */
/*  Types                                                                     */
/* -------------------------------------------------------------------------- */

interface TrustItem {
  label: string;
  /** Optional icon — if not provided, a shield icon is used */
  icon?: React.ReactNode;
}

interface SocialProofBarProps {
  items?: TrustItem[];
  className?: string;
}

/* -------------------------------------------------------------------------- */
/*  Default shield icon                                                       */
/* -------------------------------------------------------------------------- */

function ShieldIcon() {
  return (
    <svg
      className="h-4 w-4 flex-shrink-0 text-accent-400"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*  Defaults                                                                  */
/* -------------------------------------------------------------------------- */

const defaultItems: TrustItem[] = [
  {
    label: "ACCSC Accredited",
    icon: (
      <Image
        src="/images/ACCCS_logo.png"
        alt="ACCSC"
        width={48}
        height={20}
        className="h-5 w-auto brightness-0 invert opacity-70"
        unoptimized
      />
    ),
  },
  {
    label: "CIDA Accredited",
    icon: (
      <Image
        src="/images/cida_logo.png"
        alt="CIDA"
        width={48}
        height={20}
        className="h-5 w-auto brightness-0 invert opacity-70"
        unoptimized
      />
    ),
  },
  { label: "Est. 1984" },
  { label: "2019 School of Excellence" },
  {
    label: "BPPE Approved",
    icon: (
      <Image
        src="/images/bppe-logo.png"
        alt="BPPE"
        width={48}
        height={20}
        className="h-5 w-auto brightness-0 invert opacity-70"
        unoptimized
      />
    ),
  },
];

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function SocialProofBar({
  items = defaultItems,
  className,
}: SocialProofBarProps) {
  return (
    <section
      className={cn("bg-brand-900 py-4", className)}
      aria-label="Accreditations and trust signals"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Scrollable on mobile, centered flex on desktop */}
        <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide md:justify-center md:gap-10">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-shrink-0 items-center gap-2"
            >
              {item.icon ?? <ShieldIcon />}
              <span className="whitespace-nowrap font-body text-xs font-semibold uppercase tracking-[0.15em] text-warm-200">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SocialProofBar;
