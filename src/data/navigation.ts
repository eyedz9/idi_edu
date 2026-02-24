import type { NavItem, PersistentCTA } from "@/types";
import { PHONE } from "@/lib/constants";

export const primaryNav: NavItem[] = [
  {
    label: "Programs",
    href: "/programs",
    children: [
      {
        label: "Certificate Course",
        href: "/programs/certificate",
      },
      {
        label: "Associate of Arts",
        href: "/programs/associate-of-arts",
      },
      {
        label: "Bachelor of Arts",
        href: "/programs/bachelor-of-arts",
      },
      {
        label: "Master of Interior Architecture",
        href: "/programs/master-interior-architecture",
      },
      {
        label: "All Programs Overview",
        href: "/programs",
      },
    ],
  },
  {
    label: "Admissions",
    href: "/admissions",
    children: [
      {
        label: "How to Apply",
        href: "/admissions",
      },
      {
        label: "Tuition & Fees",
        href: "/admissions/tuition",
      },
      {
        label: "Financial Aid",
        href: "/admissions/financial-aid",
      },
      {
        label: "Request Information",
        href: "/contact",
      },
      {
        label: "Apply Now",
        href: "/admissions/apply",
      },
    ],
  },
  {
    label: "Campus Life",
    href: "/campus-life",
    children: [
      {
        label: "Student Life",
        href: "/campus-life",
      },
      {
        label: "Newport Beach Campus",
        href: "/campus-life/campus",
      },
      {
        label: "Student Work Gallery",
        href: "/campus-life/gallery",
      },
      {
        label: "Events",
        href: "/campus-life/events",
      },
    ],
  },
  {
    label: "About",
    href: "/about",
    children: [
      {
        label: "About IDI",
        href: "/about",
      },
      {
        label: "Why IDI",
        href: "/about/why-idi",
      },
      {
        label: "Accreditation",
        href: "/about/accreditation",
      },
      {
        label: "Faculty",
        href: "/about/faculty",
      },
      {
        label: "Disclosures",
        href: "/disclosures",
      },
      {
        label: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    label: "Blog",
    href: "/blog",
  },
];

export const persistentCTAs: PersistentCTA[] = [
  {
    label: PHONE,
    href: `tel:${PHONE.replace(/[^0-9+]/g, "")}`,
    type: "phone",
    variant: "secondary",
  },
  {
    label: "Request Info",
    href: "/contact",
    type: "link",
    variant: "secondary",
  },
  {
    label: "Apply Now",
    href: "/admissions/apply",
    type: "button",
    variant: "accent",
  },
];

export const footerNav = {
  programs: [
    { label: "Certificate Course", href: "/programs/certificate" },
    { label: "Associate of Arts", href: "/programs/associate-of-arts" },
    { label: "Bachelor of Arts", href: "/programs/bachelor-of-arts" },
    {
      label: "Master of Interior Architecture",
      href: "/programs/master-interior-architecture",
    },
  ],
  quickLinks: [
    { label: "Admissions", href: "/admissions" },
    { label: "Financial Aid", href: "/admissions/financial-aid" },
    { label: "Tuition & Fees", href: "/admissions/tuition" },
    { label: "Disclosures", href: "/disclosures" },
    { label: "Contact Us", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Disclosures", href: "/disclosures" },
    { label: "Catalog", href: "/documents/idi-catalog.pdf", isExternal: true },
  ],
};
