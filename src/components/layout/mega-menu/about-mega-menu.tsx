"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MegaMenuWrapper } from "./mega-menu-wrapper";
import { aboutMenuItems } from "./mega-menu-data";

/* -------------------------------------------------------------------------- */
/*  Inline icons                                                              */
/* -------------------------------------------------------------------------- */

function ClockIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function IdentificationIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}

const iconMap: Record<string, () => React.JSX.Element> = {
  clock: ClockIcon,
  shield: ShieldIcon,
  users: UsersIcon,
  identification: IdentificationIcon,
};

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface AboutMegaMenuProps {
  open: boolean;
  onClose: () => void;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function AboutMegaMenu({ open, onClose }: AboutMegaMenuProps) {
  return (
    <MegaMenuWrapper open={open} onClose={onClose} id="mega-about">
      <div className="grid grid-cols-6 gap-3">
        {/* ── Featured Cell (2×2) ─────────────────────────────────────── */}
        <div
          data-mega-cell
          className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-plum-700 via-plum-800 to-plum-900 p-6 flex flex-col justify-end min-h-[260px]"
        >
          <div className="absolute inset-0 opacity-30 mesh-plum" />
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl" />
          <div className="relative z-10">
            <p className="mb-1 font-body text-xs font-semibold uppercase tracking-[0.2em] text-pink-500">
              Since 1984
            </p>
            <h3 className="font-heading text-2xl font-bold text-parchment">
              About IDI
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-sandstone">
              California&apos;s premier interior design school — over 40 years of excellence in Newport Beach.
            </p>
            <Link href="/about" onClick={onClose}>
              <Button
                as="span"
                variant="primary"
                size="sm"
                className="mt-4"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>

        {/* ── About link cells (2×1 each) ─────────────────────────────── */}
        {aboutMenuItems.map((item) => {
          const Icon = iconMap[item.icon];
          return (
            <Link
              key={item.href}
              href={item.href}
              role="menuitem"
              onClick={onClose}
              data-mega-cell
              className="group col-span-2 flex items-start gap-4 rounded-2xl border border-white/5 bg-plum-800/60 p-5 transition-all duration-200 hover:border-pink-500/20 hover:bg-plum-700/60"
            >
              {/* Icon */}
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-pink-500/10 text-pink-500 transition-colors group-hover:bg-pink-500/20">
                {Icon && <Icon />}
              </span>

              {/* Content */}
              <div className="min-w-0 flex-1">
                <span className="font-heading text-sm font-bold text-parchment group-hover:text-pink-400 transition-colors">
                  {item.title}
                </span>
                <p className="mt-1 text-xs leading-relaxed text-sandstone line-clamp-2">
                  {item.description}
                </p>
              </div>

              {/* Arrow */}
              <span className="mt-1 flex-shrink-0 text-sandstone/40 transition-all duration-200 group-hover:text-pink-500 group-hover:translate-x-0.5">
                <ArrowRightIcon />
              </span>
            </Link>
          );
        })}

        {/* ── Newport Beach cell (1×1) ─────────────────────────────── */}
        <div
          data-mega-cell
          className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-2xl border border-pink-500/15 bg-plum-800/80 p-4 text-center"
        >
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-pink-500">
            Located In
          </p>
          <p className="mt-1 font-heading text-lg font-bold text-parchment leading-tight">
            Newport Beach
          </p>
          <p className="mt-0.5 text-[11px] text-sandstone">California</p>
        </div>

        {/* ── Campus Life & Contact cell (1×1) ─────────────────────── */}
        <div
          data-mega-cell
          className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-plum-800/40 p-4 text-center"
        >
          <Link
            href="/campus-life"
            role="menuitem"
            onClick={onClose}
            className="font-body text-xs font-semibold text-parchment underline underline-offset-4 decoration-pink-500/40 hover:decoration-pink-500 transition-colors"
          >
            Campus Life
          </Link>
          <Link
            href="/contact"
            role="menuitem"
            onClick={onClose}
            className="font-body text-[11px] text-sandstone hover:text-pink-400 transition-colors"
          >
            Contact Us &rarr;
          </Link>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}
