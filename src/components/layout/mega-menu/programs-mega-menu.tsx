"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { NEXT_CLASS_DATE } from "@/lib/constants";
import { MegaMenuWrapper } from "./mega-menu-wrapper";
import { programMenuItems } from "./mega-menu-data";

/* -------------------------------------------------------------------------- */
/*  Inline icons (small SVGs to avoid import overhead)                        */
/* -------------------------------------------------------------------------- */

function CertificateIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  );
}

function AssociateIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
  );
}

function BachelorIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
    </svg>
  );
}

function MasterIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
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
  certificate: CertificateIcon,
  associate: AssociateIcon,
  bachelor: BachelorIcon,
  master: MasterIcon,
};

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface ProgramsMegaMenuProps {
  open: boolean;
  onClose: () => void;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function ProgramsMegaMenu({ open, onClose }: ProgramsMegaMenuProps) {
  return (
    <MegaMenuWrapper open={open} onClose={onClose} id="mega-programs">
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
              Explore Our Programs
            </p>
            <h3 className="font-heading text-2xl font-bold text-parchment">
              Shape Your Creative Future
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-sandstone">
              From 12-week certificates to graduate degrees — find the path that matches your ambition.
            </p>
            <Link href="/programs" onClick={onClose}>
              <Button
                as="span"
                variant="primary"
                size="sm"
                className="mt-4"
              >
                All Programs
              </Button>
            </Link>
          </div>
        </div>

        {/* ── Program cells (2×1 each) ────────────────────────────────── */}
        {programMenuItems.map((item) => {
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
                <div className="flex items-center gap-2">
                  <span className="font-heading text-sm font-bold text-parchment group-hover:text-pink-400 transition-colors">
                    {item.shortTitle}
                  </span>
                  {item.badges?.map((badge) => (
                    <Badge
                      key={badge}
                      variant={badge === "CIDA" ? "jade" : "violet"}
                      className="text-[10px] px-1.5 py-0"
                    >
                      {badge}
                    </Badge>
                  ))}
                </div>
                <p className="mt-0.5 text-xs text-pink-500/80 font-medium">{item.duration}</p>
                <p className="mt-1 text-xs leading-relaxed text-sandstone line-clamp-1">
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

        {/* ── Next Class Starts stat cell (1×1) ──────────────────────── */}
        <div
          data-mega-cell
          className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-2xl border border-pink-500/15 bg-plum-800/80 p-4 text-center"
        >
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.15em] text-pink-500">
            Next Class
          </p>
          <p className="mt-1 font-heading text-2xl font-bold text-parchment">
            {NEXT_CLASS_DATE}
          </p>
          <p className="mt-0.5 text-[11px] text-sandstone">Enroll today</p>
        </div>

        {/* ── Compare & View All cell (1×1) ──────────────────────────── */}
        <div
          data-mega-cell
          className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-plum-800/40 p-4 text-center"
        >
          <Link
            href="/programs/compare"
            role="menuitem"
            onClick={onClose}
            className="font-body text-xs font-semibold text-parchment underline underline-offset-4 decoration-pink-500/40 hover:decoration-pink-500 transition-colors"
          >
            Compare Programs
          </Link>
          <Link
            href="/programs"
            role="menuitem"
            onClick={onClose}
            className="font-body text-[11px] text-sandstone hover:text-pink-400 transition-colors"
          >
            View All &rarr;
          </Link>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}
