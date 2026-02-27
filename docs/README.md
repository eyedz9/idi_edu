# IDI.edu -- Project Overview

## Description

This is the official website for **Interior Designers Institute (IDI)**, a private, accredited interior design school located in Newport Beach, California. The site serves as the primary digital presence for prospective students, current students, and the public, covering academic programs, admissions, tuition, campus life, faculty, institutional disclosures, and contact information.

The site replaces a legacy WordPress installation and is built as a modern, performant, server-rendered Next.js application with rich GSAP animations and full-stack form processing (contact, application, registration with Clover payments, campus tour scheduling).

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| Framework | Next.js (App Router) | 16.1.6 |
| Language | TypeScript | ^5 |
| UI Library | React | 19.2.3 |
| Styling | Tailwind CSS | ^4 |
| Animation | GSAP + @gsap/react | ^3.14.2 / ^2.1.2 |
| Forms | react-hook-form + zod | ^7.71.1 / ^4.3.6 |
| Payments | Clover SDK (iframe-based tokenization) | External SDK |
| File Upload | @vercel/blob | ^2.3.0 |
| CSS Utilities | clsx + tailwind-merge | ^2.1.1 / ^3.4.0 |
| Linting | ESLint (eslint-config-next) | ^9 |
| Deployment | Vercel | -- |

---

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm (ships with Node)

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server starts at `http://localhost:3000`.

### Build

```bash
npm run build
```

### Production Start

```bash
npm start
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

Create a `.env.local` file in the project root. Reference `.env.example` for the full list.

| Variable | Scope | Description |
|---|---|---|
| `ZAPIER_CONTACT_WEBHOOK_URL` | Server | Zapier webhook for the contact form (`POST /api/contact`) |
| `ZAPIER_APPLY_WEBHOOK_URL` | Server | Zapier webhook for the application form (`POST /api/apply`) |
| `ZAPIER_REGISTER_WEBHOOK_URL` | Server | Zapier webhook for the registration form (`POST /api/register`) |
| `ZAPIER_TOUR_WEBHOOK_URL` | Server | Zapier webhook for the tour booking form (`POST /api/tour`) |
| `NEXT_PUBLIC_CLOVER_PAKMS_KEY` | Client | Clover public key for client-side card tokenization |
| `CLOVER_API_TOKEN` | Server | Clover private API token for charging cards |
| `CLOVER_MERCHANT_ID` | Server | Clover merchant identifier |
| `BLOB_READ_WRITE_TOKEN` | Server | Vercel Blob read/write token (auto-set when Blob store is linked in Vercel) |

**Important:** Variables prefixed with `NEXT_PUBLIC_` are exposed to the browser bundle. All others are server-only and must never be leaked to the client.

---

## Folder Structure

```
idi-edu/
├── docs/                        # Project documentation (this directory)
├── public/
│   ├── documents/               # PDF disclosures, catalog, fact sheets
│   ├── favicon/                 # Favicon and webmanifest
│   └── images/                  # Static images (logos, OG images)
├── src/
│   ├── app/                     # Next.js App Router pages and API routes
│   │   ├── about/               # About section pages (history, faculty, staff, accreditation)
│   │   ├── admissions/          # Admissions pages (apply, tuition, financial-aid, register, visit)
│   │   ├── api/                 # API route handlers (contact, apply, register, upload, tour)
│   │   ├── campus-life/         # Campus life page
│   │   ├── contact/             # Contact page
│   │   ├── disclosures/         # Regulatory disclosures page
│   │   ├── programs/            # Program pages ([slug] dynamic route, compare)
│   │   ├── globals.css          # Global Tailwind CSS + custom properties
│   │   ├── layout.tsx           # Root layout (fonts, metadata, Header/Footer, MotionProvider)
│   │   ├── page.tsx             # Homepage
│   │   ├── not-found.tsx        # Custom 404 page
│   │   ├── robots.ts            # robots.txt generator
│   │   └── sitemap.ts           # sitemap.xml generator
│   ├── components/
│   │   ├── animations/          # GSAP animation components and MotionProvider
│   │   ├── forms/               # Form components (contact, application, registration, tour, Clover)
│   │   ├── layout/              # Header, Footer, MobileNav, newsletter, mega-menus
│   │   ├── sections/            # Homepage and reusable page sections
│   │   ├── seo/                 # JSON-LD structured data component
│   │   └── ui/                  # Base UI primitives (Button, Input, Select, Card, Badge, Modal, Section)
│   ├── data/                    # Static data modules (programs, tuition, navigation, about, etc.)
│   ├── hooks/                   # Custom React hooks (useAnimatedSection, useCountUp, useTextReveal, useParallax)
│   ├── lib/                     # Utility functions and shared logic
│   │   ├── cn.ts                # clsx + tailwind-merge className helper
│   │   ├── constants.ts         # Site-wide constants (name, URL, phone, social links)
│   │   ├── origin-check.ts      # CSRF origin validation for API routes
│   │   ├── rate-limit.ts        # In-memory sliding-window rate limiter
│   │   ├── schemas.ts           # Zod validation schemas for all forms
│   │   └── utils.ts             # Currency formatting, program image map
│   ├── styles/                  # Additional style files (placeholder)
│   └── types/
│       └── index.ts             # Shared TypeScript interfaces
├── .env.example                 # Template for environment variables
├── next.config.ts               # Next.js configuration (images, headers, redirects)
├── package.json                 # Dependencies and scripts
├── postcss.config.mjs           # PostCSS config for Tailwind
├── tsconfig.json                # TypeScript configuration
└── eslint.config.mjs            # ESLint configuration
```

---

## Key Conventions

- **Path aliases:** `@/*` maps to `./src/*` (configured in `tsconfig.json`).
- **Fonts:** Playfair Display (headings) and Inter (body), loaded via `next/font/google` with CSS variables `--font-heading` and `--font-body`.
- **Color palette:** Uses custom Tailwind colors -- `plum-700/800/900` (dark purples), `parchment` (warm off-white), `sandstone` (muted text), `pink-500` (accent), `jade` (success), `amber-500` (gold highlight).
- **Images:** Remote images allowed from `images.unsplash.com`, `plus.unsplash.com`, `idi.edu`, and `www.idi.edu` (configured in `next.config.ts`).
- **Security headers:** CSP, X-Frame-Options, Referrer-Policy, and Permissions-Policy are set in `next.config.ts` for all routes.
- **WordPress redirects:** Legacy WordPress URLs are permanently redirected to new Next.js paths in `next.config.ts`.
