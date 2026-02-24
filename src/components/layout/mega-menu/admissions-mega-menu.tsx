"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { NEXT_CLASS_DATE } from "@/lib/constants";
import { MegaMenuWrapper } from "./mega-menu-wrapper";
import { admissionsMenuItems } from "./mega-menu-data";

/* -------------------------------------------------------------------------- */
/*  Inline icons                                                              */
/* -------------------------------------------------------------------------- */

function ClipboardIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  );
}

function CalculatorIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V13.5Zm0 2.25h.008v.008H8.25v-.008Zm0 2.25h.008v.008H8.25V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.504-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5Zm0 2.25h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V18Zm2.498-6.75h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V13.5ZM8.25 6h7.5v2.25h-7.5V6ZM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 0 0 2.25 2.25h10.5a2.25 2.25 0 0 0 2.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0 0 12 2.25Z" />
    </svg>
  );
}

function BanknotesIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
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
  clipboard: ClipboardIcon,
  calculator: CalculatorIcon,
  banknotes: BanknotesIcon,
  document: DocumentIcon,
};

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface AdmissionsMegaMenuProps {
  open: boolean;
  onClose: () => void;
}

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

export function AdmissionsMegaMenu({ open, onClose }: AdmissionsMegaMenuProps) {
  return (
    <MegaMenuWrapper open={open} onClose={onClose} id="mega-admissions">
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
              Start Here
            </p>
            <h3 className="font-heading text-2xl font-bold text-parchment">
              Ready to Apply?
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-sandstone">
              Begin your journey to becoming a professional interior designer.
            </p>
            <Link href="/admissions/apply" onClick={onClose}>
              <Button
                as="span"
                variant="primary"
                size="sm"
                className="mt-4"
              >
                Apply Now
              </Button>
            </Link>
          </div>
        </div>

        {/* ── Admissions link cells (2×1 each) ──────────────────────────── */}
        {admissionsMenuItems.map((item) => {
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

        {/* ── Contact & Overview cell (1×1) ───────────────────────────── */}
        <div
          data-mega-cell
          className="col-span-1 row-span-1 flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/5 bg-plum-800/40 p-4 text-center"
        >
          <Link
            href="/contact"
            role="menuitem"
            onClick={onClose}
            className="font-body text-xs font-semibold text-parchment underline underline-offset-4 decoration-pink-500/40 hover:decoration-pink-500 transition-colors"
          >
            Contact Admissions
          </Link>
          <Link
            href="/admissions"
            role="menuitem"
            onClick={onClose}
            className="font-body text-[11px] text-sandstone hover:text-pink-400 transition-colors"
          >
            Overview &rarr;
          </Link>
        </div>
      </div>
    </MegaMenuWrapper>
  );
}
