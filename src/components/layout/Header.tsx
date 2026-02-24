"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { MobileNav } from "./mobile-nav";
import { ProgramsMegaMenu } from "./mega-menu/programs-mega-menu";
import { AdmissionsMegaMenu } from "./mega-menu/admissions-mega-menu";
import { AboutMegaMenu } from "./mega-menu/about-mega-menu";
import type { NavItem } from "@/types";

/* -------------------------------------------------------------------------- */
/*  Props                                                                     */
/* -------------------------------------------------------------------------- */

interface HeaderProps {
  navigation?: NavItem[];
  phone?: string;
  /** Visible brand text when no logo image is ready */
  brandName?: string;
}

/* -------------------------------------------------------------------------- */
/*  Icons                                                                     */
/* -------------------------------------------------------------------------- */

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
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
  );
}

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-6 w-6", className)}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-3.5 w-3.5", className)}
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
  );
}

/* -------------------------------------------------------------------------- */
/*  Mega-menu trigger labels (keys for which menus exist)                     */
/* -------------------------------------------------------------------------- */

const MEGA_MENU_KEYS = new Set(["Programs", "Admissions", "About"]);

/* -------------------------------------------------------------------------- */
/*  Default navigation data                                                   */
/* -------------------------------------------------------------------------- */

const defaultNavigation: NavItem[] = [
  {
    label: "Programs",
    href: "/programs",
    children: [
      { label: "Interior Design Certificate", href: "/programs/certificate" },
      { label: "Associate of Arts", href: "/programs/associate-of-arts" },
      { label: "Bachelor of Arts", href: "/programs/bachelor-of-arts" },
      { label: "Master of Interior Architecture", href: "/programs/master-interior-architecture" },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      { label: "How to Apply", href: "/admissions/apply" },
      { label: "Tuition & Fees", href: "/admissions/tuition" },
      { label: "Financial Aid", href: "/admissions/financial-aid" },
    ],
  },
  { label: "Campus Life", href: "/campus-life" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Our History", href: "/about/history" },
      { label: "Accreditation", href: "/about/accreditation" },
      { label: "Faculty", href: "/about/faculty" },
      { label: "Staff Directory", href: "/about/staff" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

/* -------------------------------------------------------------------------- */
/*  Header Component                                                          */
/* -------------------------------------------------------------------------- */

export default function Header({
  navigation = defaultNavigation,
  phone = "(949) 675-4451",
  brandName = "Interior Designers Institute",
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  /* ── Hover intent helpers ────────────────────────────────────────────── */

  const openMega = useCallback((label: string) => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
    setOpenMenu(label);
  }, []);

  const closeMega = useCallback(() => {
    setOpenMenu(null);
  }, []);

  const schedulClose = useCallback(() => {
    leaveTimerRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  }, []);

  const cancelClose = useCallback(() => {
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  }, []);

  /* ── Close on click outside ──────────────────────────────────────────── */

  useEffect(() => {
    if (!openMenu) return;

    function handleClickOutside(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpenMenu(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openMenu]);

  /* ── Close mega + return focus to trigger ─────────────────────────────── */

  const closeMegaAndFocus = useCallback(() => {
    const key = openMenu;
    setOpenMenu(null);
    if (key && triggerRefs.current[key]) {
      triggerRefs.current[key]?.focus();
    }
  }, [openMenu]);

  const phoneHref = `tel:${phone.replace(/[^0-9+]/g, "")}`;

  return (
    <>
      <header
        ref={headerRef}
        className="sticky top-0 z-50 border-b border-white/5 bg-plum-900/95 backdrop-blur-xl"
        role="banner"
        onMouseLeave={schedulClose}
        onMouseEnter={cancelClose}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          {/* ---- Logo / Brand -------------------------------------------- */}
          <Link
            href="/"
            className="flex items-center gap-2 min-h-[44px]"
            aria-label={`${brandName} - Home`}
          >
            <Image
              src="/images/idi_logo_stacked.png"
              alt={brandName}
              width={180}
              height={48}
              className="h-10 w-auto"
              priority
              unoptimized
            />
          </Link>

          {/* ---- Desktop Navigation -------------------------------------- */}
          <nav
            className="hidden items-center gap-6 lg:flex"
            aria-label="Main navigation"
          >
            {navigation.map((item) =>
              MEGA_MENU_KEYS.has(item.label) ? (
                <button
                  key={item.label}
                  ref={(el) => { triggerRefs.current[item.label] = el; }}
                  type="button"
                  onClick={() => setOpenMenu((prev) => (prev === item.label ? null : item.label))}
                  onMouseEnter={() => openMega(item.label)}
                  aria-expanded={openMenu === item.label}
                  aria-haspopup="true"
                  aria-controls={`mega-${item.label.toLowerCase()}`}
                  className="inline-flex items-center gap-1 font-body text-sm font-medium text-parchment/80 transition-colors hover:text-pink-500"
                >
                  {item.label}
                  <ChevronDownIcon
                    className={cn(
                      "transition-transform duration-200",
                      openMenu === item.label && "rotate-180",
                    )}
                  />
                </button>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-body text-sm font-medium text-parchment/80 transition-colors hover:text-pink-500"
                  {...(item.isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          {/* ---- Right actions ------------------------------------------- */}
          <div className="flex items-center gap-3">
            {/* Phone */}
            <a
              href={phoneHref}
              className="hidden items-center gap-1.5 font-body text-sm font-medium text-sandstone transition-colors hover:text-pink-500 md:inline-flex"
              aria-label={`Call us at ${phone}`}
            >
              <PhoneIcon />
              <span>{phone}</span>
            </a>

            {/* Request Info - Ghost */}
            <Link href="/contact" className="hidden lg:inline-flex">
              <Button
                as="span"
                variant="ghost"
                size="sm"
              >
                Request Info
              </Button>
            </Link>

            {/* Apply Now - Primary Gold */}
            <Link href="/admissions/apply" className="hidden sm:inline-flex">
              <Button
                as="span"
                variant="primary"
                size="sm"
                className="min-h-[44px]"
              >
                Apply Now
              </Button>
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2.5 text-parchment transition-colors hover:bg-white/5 lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>

        {/* ---- Mega Menu Panels (desktop only) ----------------------------- */}
        <div className="hidden lg:block">
          <ProgramsMegaMenu
            open={openMenu === "Programs"}
            onClose={closeMegaAndFocus}
          />
          <AdmissionsMegaMenu
            open={openMenu === "Admissions"}
            onClose={closeMegaAndFocus}
          />
          <AboutMegaMenu
            open={openMenu === "About"}
            onClose={closeMegaAndFocus}
          />
        </div>
      </header>

      {/* Mobile nav drawer */}
      <MobileNav
        navigation={navigation}
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        phone={phone}
      />
    </>
  );
}
