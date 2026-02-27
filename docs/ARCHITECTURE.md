# Architecture Guide

## App Router Structure

The project uses the Next.js App Router (file-system based routing under `src/app/`). All pages are server components by default; client components are explicitly marked with `"use client"`.

### Route Map

```
/                               Homepage (page.tsx)
/programs                       Programs overview (programs/page.tsx)
/programs/[slug]                Individual program detail (programs/[slug]/page.tsx)
/programs/compare               Side-by-side program comparison (programs/compare/page.tsx)
/admissions                     Admissions overview (admissions/page.tsx)
/admissions/apply               Application form (admissions/apply/page.tsx)
/admissions/tuition             Tuition and fees (admissions/tuition/page.tsx)
/admissions/financial-aid       Financial aid info (admissions/financial-aid/page.tsx)
/admissions/register            Certificate registration with payment (admissions/register/page.tsx)
/admissions/visit               Schedule a campus tour (admissions/visit/page.tsx)
/about                          About IDI (about/page.tsx)
/about/history                  History timeline (about/history/page.tsx)
/about/accreditation            Accreditation details (about/accreditation/page.tsx)
/about/faculty                  Faculty listing (about/faculty/page.tsx)
/about/staff                    Staff directory (about/staff/page.tsx)
/campus-life                    Campus life overview (campus-life/page.tsx)
/contact                        Contact page with form (contact/page.tsx)
/disclosures                    Regulatory disclosures (disclosures/page.tsx)
/not-found                      Custom 404 page (not-found.tsx)
```

### Dynamic Routes

- `/programs/[slug]` -- Renders program detail pages. The `slug` parameter maps to `Program.slug` in `src/data/programs.ts`. Valid slugs: `certificate`, `associate-of-arts`, `bachelor-of-arts`, `master-interior-architecture`.

### API Routes

```
POST /api/contact               Contact form submission -> Zapier webhook
POST /api/apply                 Application form submission -> Zapier webhook
POST /api/register              Registration form -> Clover charge -> Zapier webhook
POST /api/upload                File upload -> Vercel Blob storage
POST /api/tour                  Tour booking form -> Zapier webhook
```

---

## Layout Hierarchy

```
html (lang="en")
└── body (fonts, base styles, dark theme)
    ├── <a> Skip to content (a11y)
    ├── <JsonLd> Organization schema
    └── <MotionProvider>
        ├── <Header>
        │   ├── Logo + Desktop nav
        │   ├── Mega menus (Programs, Admissions, About)
        │   ├── Right actions (phone, Request Info, Apply Now)
        │   └── Mobile hamburger -> <MobileNav>
        ├── <main id="main-content">
        │   └── {children}  (page content)
        └── <Footer>
            ├── Brand + contact info
            ├── Quick Links / Resources columns
            ├── Social icons + Newsletter form
            └── Copyright + Accreditation logos
```

The root layout (`src/app/layout.tsx`) wraps every page with:
1. **Google Fonts** -- Playfair Display (headings) and Inter (body) via `next/font/google`
2. **Global metadata** -- Default title template, description, OG tags, Twitter cards, favicon, canonical URL
3. **JSON-LD** -- Organization + CollegeOrUniversity structured data
4. **MotionProvider** -- GSAP context with reduced-motion detection
5. **Header** -- Sticky navigation with mega menus
6. **Footer** -- Links, social icons, newsletter signup, accreditation logos

Individual pages can override metadata using the `export const metadata` or `export function generateMetadata()` patterns.

---

## Data Flow

The project follows a **static data -> component -> page** pattern. There is no database and no CMS.

```
src/data/            Static TypeScript data modules (programs, tuition, navigation, etc.)
    │
    ├── Imported by pages (server components) for rendering
    ├── Imported by components (client or server) for display
    └── Exported via barrel file (src/data/index.ts)

src/lib/constants.ts Site-wide constants (name, URL, phone, social links, enrollment dates)
src/lib/schemas.ts   Zod validation schemas (used by API routes AND forms)
src/types/index.ts   Shared TypeScript interfaces

src/app/api/         API route handlers consume schemas and env vars
```

### Data Modules

| Module | Exports | Used By |
|---|---|---|
| `programs.ts` | `programs`, `getProgramBySlug`, `getDegreePrograms`, `getProgramNavItems` | Program pages, navigation, mega menus |
| `tuition.ts` | `tuitionData`, `getTuitionByProgram`, `getCombinedBATuition` | Tuition page, program detail |
| `navigation.ts` | `primaryNav`, `persistentCTAs`, `footerNav` | Header, Footer, MobileNav |
| `about.ts` | `aboutIDI` (history, milestones, accreditation, whyAttend) | About pages |
| `contact.ts` | `contactInfo`, `socialLinks`, `fullAddress`, `officeHours`, `googleMapsEmbedUrl`, `googleMapsDirectionsUrl` | Contact page, Footer |
| `enrollment.ts` | `enrollmentConfig`, `enrollmentSteps`, `admissionRequirements` | Admissions pages |
| `disclosures.ts` | `disclosures`, `getDisclosuresByCategory`, `disclosureCategoryOrder` | Disclosures page |
| `why-idi.ts` | `whyIDIPoints`, `idiStats` | Homepage, About |
| `homepage.ts` | `homepageCopy` (hero, bento, gallery, testimonials, campus, CTA) | Homepage |

---

## API Routes

All API routes follow a consistent pattern:

1. **Origin check** -- `isValidOrigin(request)` validates the `Origin` header against allowed domains (idi.edu, www.idi.edu, localhost, Vercel preview URLs)
2. **Rate limiting** -- `rateLimit(ip, route)` enforces 5 requests per IP per route per 60 seconds (in-memory sliding window)
3. **Zod validation** -- Request body is validated against the appropriate schema from `src/lib/schemas.ts`
4. **Business logic** -- Forward to Zapier webhook, charge via Clover, or upload to Vercel Blob
5. **Error handling** -- Consistent JSON error responses with appropriate HTTP status codes

### Flow: Registration with Payment

```
Client                    Server (/api/register)          Clover API          Zapier
  │                              │                           │                  │
  ├─ Clover SDK tokenizes ──────>│                           │                  │
  │  card in iframe              │                           │                  │
  │                              │                           │                  │
  ├─ POST /api/register ────────>│                           │                  │
  │  (form data + cloverToken)   │                           │                  │
  │                              ├── Validate with Zod       │                  │
  │                              ├── POST /v1/charges ──────>│                  │
  │                              │   (token + amount)        │                  │
  │                              │<───── charge result ──────│                  │
  │                              │                           │                  │
  │                              ├── POST webhook ──────────────────────────────>│
  │                              │   (safe payload + chargeId)                  │
  │<────── { success, chargeId } │                                              │
```

---

## Third-Party Integrations

### Clover Payments

- **Purpose:** Credit card processing for certificate registration fees
- **Flow:** Clover iframe SDK tokenizes card data on the client (card numbers never touch our server). The token is sent to `POST /api/register`, which calls the Clover REST API to charge the card.
- **SDK Host:** Configurable via `NEXT_PUBLIC_CLOVER_SDK_HOST` (defaults to sandbox: `checkout.sandbox.dev.clover.com`; production: `checkout.clover.com`)
- **Payment tiers:** $95 (registration only), $1,195 (partial), $2,795 (full)
- **Component:** `src/components/forms/clover-payment-fields.tsx` -- Mounts Clover iframe elements and exposes a `createToken()` method via `forwardRef`/`useImperativeHandle`

### Zapier Webhooks

- **Purpose:** All form submissions are forwarded to Zapier webhooks for CRM integration, email notifications, and workflow automation
- **Routes using Zapier:** `/api/contact`, `/api/apply`, `/api/register`, `/api/tour`
- **Payload:** Each webhook receives the validated form data plus `submittedAt` timestamp and `source` identifier

### Vercel Blob Storage

- **Purpose:** File uploads for diploma documents during registration
- **Route:** `POST /api/upload` accepts multipart form data, validates file type (PDF, JPG, PNG, DOC, DOCX) and size (max 10 MB), stores to Vercel Blob under `diplomas/` prefix
- **Access:** Files are stored with `public` access

### Google Maps

- **Purpose:** Campus location display on the contact page
- **Implementation:** Embed URL and directions URL stored in `src/data/contact.ts`

---

## SEO Strategy

### Metadata

- **Root metadata** defined in `src/app/layout.tsx` with `title.template: "%s | Interior Designers Institute"`
- Each page exports its own `metadata` object to override title, description, OG tags
- `metadataBase` is set to `https://idi.edu` for resolving relative OG image URLs
- Keywords include "interior design school", "interior design degree", "Newport Beach", "CIDA", etc.

### JSON-LD Structured Data

- **Organization schema** in root layout: `EducationalOrganization` + `CollegeOrUniversity` with address, geo coordinates, accreditation credentials, social profiles
- Component: `src/components/seo/JsonLd.tsx` -- Generic JSON-LD injector that serializes data to a `<script type="application/ld+json">` tag. Note: The data passed to this component is always developer-controlled static data from the layout, not user input, so there is no XSS risk.

### Sitemap

- Generated by `src/app/sitemap.ts` using Next.js `MetadataRoute.Sitemap`
- Covers all public pages with appropriate `changeFrequency` and `priority` values
- Available at `https://idi.edu/sitemap.xml`

### Robots

- Generated by `src/app/robots.ts`
- Allows all crawlers on `/`, blocks `/api/` and `/_next/`
- Explicitly allows AI search crawlers (GPTBot, ClaudeBot, PerplexityBot, etc.)
- Blocks training-only crawlers (CCBot, Bytespider)
- References sitemap at `https://idi.edu/sitemap.xml`

### WordPress Redirects

`next.config.ts` includes permanent (301) redirects from legacy WordPress URLs to their Next.js equivalents:
- `/associate-of-arts-in-interior-design` -> `/programs/associate-of-arts`
- `/programs-of-study` -> `/programs`
- `/about-the-college` -> `/about`
- `/financial-aid` -> `/admissions/financial-aid`
- `/contact-us` -> `/contact`
- And more (see `next.config.ts` `redirects()`)

---

## Animation System

### MotionProvider

`src/components/animations/motion-provider.tsx`

- Wraps the entire app (in root layout)
- Registers GSAP + ScrollTrigger plugins
- Detects `prefers-reduced-motion` media query and exposes `animationsEnabled` boolean via React context
- All animation hooks and components check `animationsEnabled` before running animations
- When reduced motion is active, elements are immediately set to their final visible state

### Animation Components

| Component | File | Description |
|---|---|---|
| `AnimatedSection` | `animated-section.tsx` | Scroll-triggered fade-up with stagger for child elements |
| `CountUp` | `count-up.tsx` | Scroll-triggered animated number counter |
| `TextReveal` | `text-reveal.tsx` | Splits text into word-level spans and animates them in with staggered fade-up |
| `ParallaxImage` | `parallax-image.tsx` | ScrollTrigger-scrubbed parallax movement for images |
| `MagneticButton` | `magnetic-button.tsx` | Mouse-following magnetic pull effect on hover (disabled on touch devices) |

### Animation Hooks

| Hook | File | Description |
|---|---|---|
| `useAnimatedSection` | `hooks/useAnimatedSection.ts` | Core scroll-triggered fade/scale animation with configurable delay, stagger, y offset, scale, duration. Includes 4-second safety timeout. |
| `useCountUp` | `hooks/useCountUp.ts` | Animates a number from 0 to target on scroll. Returns formatted display string. Includes 5-second safety timeout. |
| `useTextReveal` | `hooks/useTextReveal.ts` | Splits text content into word spans and animates them in. Preserves original text via `aria-label`. |
| `useParallax` | `hooks/useParallax.ts` | Applies scroll-scrubbed parallax movement (vertical or horizontal) to an element. |

### Safety Timeouts

All animation hooks include safety timeouts that force elements to their visible final state if GSAP/ScrollTrigger fails to fire within 3-5 seconds. This prevents content from being permanently hidden if animations fail to initialize.

### Barrel Export

All animation components are re-exported from `src/components/animations/index.ts` for clean imports:

```typescript
import { AnimatedSection, CountUp, TextReveal, ParallaxImage, MagneticButton } from "@/components/animations";
```

---

## Security

### Content Security Policy

Configured in `next.config.ts` for all routes:
- `default-src 'self'`
- `script-src` allows Clover SDK domains
- `frame-src` allows Clover checkout iframes
- `connect-src` allows Clover API, Zapier webhooks, Vercel storage
- `img-src` allows Unsplash and idi.edu domains

### CSRF Protection

`src/lib/origin-check.ts` validates the `Origin` header on all API routes:
- Allows `https://idi.edu`, `https://www.idi.edu`, `localhost`, and Vercel preview URLs
- Rejects cross-origin POST requests from unknown origins

### Rate Limiting

`src/lib/rate-limit.ts` implements an in-memory sliding-window rate limiter:
- Default: 5 requests per IP per route per 60 seconds
- Resets on serverless cold start (acceptable for a low-traffic school site)
- Applied to all API routes

### Sensitive Data Handling

- SSN is never logged server-side (explicitly stripped from log payloads)
- Clover card data never touches the server (tokenized in client-side iframe)
- All webhook payloads are sent over HTTPS
