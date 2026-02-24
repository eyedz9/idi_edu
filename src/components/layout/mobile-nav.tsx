"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import type { NavItem } from "@/types";

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface MobileNavProps {
  navigation: NavItem[];
  open: boolean;
  onClose: () => void;
  phone?: string;
}

/* -------------------------------------------------------------------------- */
/*  Accordion item                                                            */
/* -------------------------------------------------------------------------- */

function AccordionNavItem({
  item,
  onNavigate,
}: {
  item: NavItem;
  onNavigate: () => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  if (!hasChildren) {
    return (
      <li>
        <Link
          href={item.href}
          onClick={onNavigate}
          className="block border-b border-white/5 px-6 py-4 font-body text-base font-medium text-parchment transition-colors hover:bg-white/5"
          {...(item.isExternal
            ? { target: "_blank", rel: "noopener noreferrer" }
            : {})}
        >
          {item.label}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="flex w-full items-center justify-between border-b border-white/5 px-6 py-4 font-body text-base font-medium text-parchment transition-colors hover:bg-white/5"
      >
        {item.label}
        <svg
          className={cn(
            "h-4 w-4 text-sandstone transition-transform duration-200",
            expanded && "rotate-180",
          )}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </button>

      {expanded && item.children && (
        <ul className="bg-plum-800">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                onClick={onNavigate}
                className="block border-b border-white/5 px-10 py-3 text-sm text-sandstone transition-colors hover:text-pink-500"
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/* -------------------------------------------------------------------------- */
/*  Mobile Nav Component                                                      */
/* -------------------------------------------------------------------------- */

export function MobileNav({
  navigation,
  open,
  onClose,
  phone = "(949) 675-4451",
}: MobileNavProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  /* ----- Close on Escape -------------------------------------------------- */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (!open) return;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[90]" role="presentation">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-plum-900/70 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col bg-plum-900 shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
          <span className="font-heading text-lg font-bold text-parchment">
            Menu
          </span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-parchment transition-colors hover:bg-white/5"
            aria-label="Close menu"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Nav items */}
        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          <ul>
            {navigation.map((item) => (
              <AccordionNavItem
                key={item.label}
                item={item}
                onNavigate={onClose}
              />
            ))}
          </ul>
        </nav>

        {/* Sticky bottom bar */}
        <div className="border-t border-white/5 bg-plum-900 p-4 space-y-3">
          <a
            href={phoneHref}
            className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-parchment px-4 py-3 font-body text-sm font-semibold text-parchment transition-colors hover:bg-parchment hover:text-plum-900"
            aria-label={`Call us at ${phone}`}
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            Call {phone}
          </a>
          <Link href="/admissions/apply" onClick={onClose}>
            <Button
              as="span"
              variant="primary"
              size="md"
              className="w-full"
            >
              Apply Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
