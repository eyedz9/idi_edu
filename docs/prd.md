# Product Requirements Document
## Interior Designers Institute — idi.edu Complete Website Redesign

**Next.js 15 · Tailwind CSS · GSAP 3 Animations · TypeScript**

---

| | |
|---|---|
| **Prepared by** | eyedz9 Creative Services |
| **Client** | Interior Designers Institute |
| **Date** | February 11, 2026 |
| **Version** | 1.0 |
| **Status** | Draft |
| **Classification** | Confidential |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Goals & Success Metrics](#2-goals--success-metrics)
3. [Target Audience & Personas](#3-target-audience--personas)
4. [Technology Stack](#4-technology-stack)
5. [Information Architecture & Sitemap](#5-information-architecture--sitemap)
6. [Sales Funnel Architecture](#6-sales-funnel-architecture)
7. [Design System & Visual Language](#7-design-system--visual-language)
8. [Content Migration Plan](#8-content-migration-plan)
9. [Page-by-Page Specifications](#9-page-by-page-specifications)
10. [Accessibility Requirements](#10-accessibility-requirements)
11. [Performance Requirements](#11-performance-requirements)
12. [SEO Strategy](#12-seo-strategy)
13. [Analytics & Tracking Plan](#13-analytics--tracking-plan)
14. [Development Phases & Timeline](#14-development-phases--timeline)
15. [Testing Strategy](#15-testing-strategy)
16. [Launch Checklist](#16-launch-checklist)
17. [Post-Launch Maintenance](#17-post-launch-maintenance)

---

## 1. Executive Summary

### 1.1 Project Overview

Interior Designers Institute (IDI) is a boutique accredited college specializing in interior design and interior architecture education, founded in 1984 in Corona del Mar, California and currently located at 1061 Camelback Street, Newport Beach, CA 92660. The institution offers four programs: an avocational Certificate Course, Associate of Arts Degree in Interior Design, Bachelor of Arts Degree in Interior Design (CIDA-accredited), and Master of Interior Architecture. IDI was awarded the 2019 ACCSC School of Excellence and maintains student chapters of ASID and IIDA.

The current idi.edu website is a WordPress-based site that, while containing all necessary content and compliance documentation, does not reflect the caliber of design education IDI provides. For an institution that teaches world-class interior design, the website must itself be a showcase of design excellence while simultaneously functioning as a high-converting enrollment funnel.

This PRD defines the complete redesign and rebuild of idi.edu as a modern Next.js application with Tailwind CSS styling and GSAP-powered animations. The project will migrate all existing content including PDFs, disclosures, and media assets. The new site will be a CMS-free, version-controlled, statically-generated application deployed to a modern edge network.

### 1.2 Problem Statement

- The current WordPress site has an outdated visual design that undermines IDI's reputation as a design institution
- Poor mobile experience — navigation is difficult, content is hard to read, and CTAs are not optimized for thumb zones
- No clear enrollment funnel — the path from awareness to registration is fragmented across inconsistent page layouts
- Slow page load times typical of WordPress with unoptimized assets and plugin overhead
- Content is organized by institutional structure rather than prospective student journey
- Lead capture is limited to a basic contact form and external Formstack links with no progressive engagement strategy
- PDF disclosures and compliance documents are scattered across wp-content/uploads with no organized access pattern
- GSAP-quality animations are absent; the site lacks the visual dynamism expected from a design school

### 1.3 Solution

A ground-up rebuild using Next.js 15 (App Router), Tailwind CSS, and GSAP 3 that transforms idi.edu into a conversion-optimized, visually stunning digital experience. Every page will serve a strategic role in the enrollment funnel while showcasing the design excellence that defines IDI. All existing content, PDFs, and compliance materials will be migrated and organized. Placeholder imagery from Unsplash will be used during development with a clear plan for replacement with IDI photography.

---

## 2. Goals & Success Metrics

### 2.1 Primary Goals

- Create a visually stunning, design-forward website that reflects IDI's position as a premier interior design institution and 2019 ACCSC School of Excellence
- Build a conversion-optimized enrollment funnel that increases inquiry submissions by 40%+ within 90 days of launch
- Achieve Lighthouse scores of 95+ across all four categories (Performance, Accessibility, Best Practices, SEO)
- Deliver sub-2-second Largest Contentful Paint on 4G connections while maintaining full GSAP animation support
- Migrate 100% of existing content, PDFs, and compliance documents without data loss
- Eliminate WordPress dependency entirely — no CMS, fully version-controlled, CI/CD deployed

### 2.2 Success Metrics

| Metric | Current (Est.) | Target | Measurement Method |
|--------|---------------|--------|-------------------|
| Largest Contentful Paint | ~4.2s | < 1.5s | Lighthouse / WebPageTest |
| Lighthouse Performance | ~55 | 95+ | Google Lighthouse |
| Mobile Usability | ~65 | 98+ | Lighthouse |
| Inquiry Form Submissions | Baseline TBD | +40% at 90 days | GA4 event tracking |
| Bounce Rate (Homepage) | ~55% | < 35% | GA4 |
| Pages Per Session | ~2.1 | 3.5+ | GA4 |
| Catalog Downloads | Baseline TBD | +60% | Event tracking |
| Organic Search Traffic | Baseline TBD | +30% at 6 months | Google Search Console |
| Accessibility (axe-core) | Multiple violations | 0 critical violations | axe-core automated audit |
| Time on Site | ~1:45 | 3:00+ | GA4 |

---

## 3. Target Audience & Personas

### 3.1 Primary: Aspiring Designer (Ages 18–28)

**Profile:** Recent high school graduate or young adult seeking focused, hands-on interior design education in Southern California. Visual learner, heavy mobile/Instagram user. Compares schools primarily through website experience and social proof.

**Needs:** Inspiring student work gallery, clear program paths, campus experience preview, easy mobile application process.

**Conversion trigger:** Seeing beautiful student work + simple "Apply Now" path.

### 3.2 Secondary: Career Pivoter (Ages 28–45)

**Profile:** Working professional seeking career transition into interior design. May have a degree in another field. Researches extensively, compares tuition/ROI across multiple institutions.

**Needs:** Tuition transparency, financial aid details, career outcome data, flexible scheduling, transfer credit info.

**Conversion trigger:** Clear tuition comparison + financial aid pathways + career placement data.

### 3.3 Tertiary: Design Enthusiast (Ages 30–60)

**Profile:** Homeowner or hobbyist interested in the Certificate Course for personal enrichment. Not career-focused. Values the Newport Beach lifestyle, prestige of a recognized institution, and avocational nature of the program.

**Needs:** Clear distinction that the Certificate Course is non-career/avocational, accessible pricing, low commitment messaging.

**Conversion trigger:** Approachable Certificate Course page + $2,400 price point visibility.

### 3.4 Influencer: Parents & Guardians

**Profile:** Parents evaluating institutions for their children. Focus on accreditation, safety, cost transparency, and career outcomes.

**Needs:** Easy access to ACCSC/CIDA accreditation docs, campus safety reports, tuition breakdowns, graduation/employment charts.

**Conversion trigger:** Visible accreditation badges + one-click access to all disclosure documents.

---

## 4. Technology Stack

### 4.1 Core Stack

| Layer | Technology | Rationale |
|-------|-----------|-----------|
| Framework | Next.js 15 (App Router) | Static site generation for speed, server components for dynamic content, built-in image optimization, API routes for form handling, file-based routing |
| Styling | Tailwind CSS 4.x | Utility-first CSS, design token system via tailwind.config, responsive breakpoints, dark mode capability, small bundle with purging |
| Animation | GSAP 3.x + ScrollTrigger + Flip | Industry-standard animation library; ScrollTrigger for scroll-driven reveals; Flip for layout transitions; GPU-accelerated transforms |
| Language | TypeScript 5.x | Type safety for components, props, API responses; improved DX and maintainability |
| Deployment | Vercel | Edge CDN, automatic preview deploys per PR, built-in analytics and Speed Insights, serverless functions for API routes |
| Forms | React Hook Form + Zod | Client-side validation with schema; server actions for submission to email service or Formstack API |
| Analytics | GA4 + Vercel Analytics | User behavior funnels, event tracking for CTAs, Core Web Vitals monitoring |
| Images | next/image + Unsplash Source | Automatic AVIF/WebP, responsive srcset, lazy loading. Unsplash for dev placeholders |
| Video | Self-hosted MP4 + HLS fallback | Hero video, campus tours. Lazy loaded with Intersection Observer |
| Email | Resend (or SendGrid) | Transactional emails for form confirmations, catalog delivery |
| PDF Hosting | Static /public/documents/ | All PDFs migrated from wp-content/uploads/ to organized /public/documents/ structure |
| Testing | Playwright + Vitest | E2E tests for enrollment funnel critical paths; unit tests for utilities |
| CI/CD | GitHub Actions | Lint, type-check, test on PR; auto-deploy to Vercel on merge to main |

### 4.2 GSAP Animation Architecture

GSAP operates as a progressive enhancement layer. All content is visible and functional without JavaScript enabled. The `prefers-reduced-motion` media query is respected globally — when enabled, all GSAP timelines are killed and elements are set to their final states via CSS.

#### Animation Inventory

| Element | Animation Type | Trigger | GSAP Modules |
|---------|---------------|---------|-------------|
| Hero Section | Cinematic text reveal with staggered characters; parallax video background; floating design elements | Page load | gsap.timeline, SplitText (Club) |
| Navigation | Morphing hamburger → X; sliding mega-menu with staggered link reveals; blur backdrop transition | Click / scroll state | gsap.to, stagger |
| Section Entrances | Fade-up with slight Y translate and scale (from 0.95 to 1); opacity 0→1 | ScrollTrigger (80% viewport) | ScrollTrigger, stagger |
| Program Cards | 3D tilt on hover via mousemove tracking; reveal of additional info overlay layer | Mouse enter / move | gsap.quickTo |
| Gallery | Horizontal smooth-scroll gallery with momentum and snap; lightbox with morph transition from thumbnail | Scroll / click | ScrollTrigger, Flip |
| Statistics | CountUp number animation from 0 to target value | ScrollTrigger once | gsap.to with snap |
| Page Transitions | Current page fades/slides out; new page fades/slides in with shared header persistence | Route change | gsap.timeline, Next.js layout |
| Custom Cursor | Magnetic effect pulling cursor toward interactive elements; scale pulse on hover | Mouse move (desktop) | gsap.quickTo |
| Parallax Layers | Multi-depth background parallax on hero and section dividers | Scroll position | ScrollTrigger |
| Form Interactions | Label float animation; input focus glow; multi-step progress bar; success state morph | Focus / submit events | gsap.timeline |
| Image Reveals | Clip-path wipe or curtain reveal as images enter viewport | ScrollTrigger | ScrollTrigger, clip-path |
| Testimonial Carousel | Crossfade with slight scale; auto-advance with pause on hover | Timer + user interaction | gsap.timeline |

#### GSAP Implementation Pattern

Each animated component will use a custom `useGSAP()` hook (from `@gsap/react`) that handles timeline creation, ScrollTrigger registration, and cleanup on unmount. Animations are defined in component files alongside the JSX, not in separate animation config files, to maintain colocation. The global GSAP config will be set once in a providers component:

- `gsap.config({ nullTargetWarn: false })` for SSR safety
- `gsap.registerPlugin(ScrollTrigger, Flip)` at app level
- `ScrollTrigger.normalizeScroll(true)` for mobile touch consistency
- A global `MotionProvider` context that checks `prefers-reduced-motion` and exposes an `animationsEnabled` boolean

---

## 5. Information Architecture & Sitemap

The new IA is restructured around the prospective student journey: Awareness → Interest → Consideration → Decision → Action. The existing WordPress content hierarchy is reorganized into a streamlined navigation that reduces clicks-to-conversion.

### 5.1 Primary Navigation

| Nav Item | Route | Dropdown Items |
|----------|-------|---------------|
| Programs | /programs | Certificate Course, AA in Interior Design, BA in Interior Design, Master of Interior Architecture, Compare Programs, Download Catalog |
| Admissions | /admissions | How to Apply, Tuition & Fees, Financial Aid, Transfer Students, Download Catalog |
| Campus Life | /campus-life | Our Campus, Student Life, Design Gallery, Student Portfolios, Awards, Graduation Galleries |
| About | /about | Our Story, Why IDI?, Faculty, Staff Directory, Careers in Design, Accreditation |
| Blog | /blog | No dropdown — links directly to blog listing |

**Persistent navigation elements:** Phone number with click-to-call icon, "Request Info" ghost button (triggers modal form), "Apply Now" solid accent button (links to Formstack registration). On mobile, a sticky bottom bar with "Call" + "Apply Now" buttons replaces the header CTAs.

### 5.2 Complete Page Inventory

#### Homepage (/)
- Hero: Full-viewport video background with cinematic text reveal, primary CTA ("Explore Programs"), secondary CTA ("Request Info")
- Social proof bar: Accreditation logos (ACCSC, CIDA, BPPE), "Est. 1984", "2019 School of Excellence" badge
- Programs overview: 4-card grid with program name, duration, degree type, and "Learn More" link; hover animation reveals key details
- "Why IDI?" section: 4–6 value propositions with icons (small class sizes, Newport Beach location, industry connections, accreditation, hands-on learning, career placement)
- Student work showcase: Curated horizontal-scroll gallery of best student design projects with GSAP momentum scroll
- Graduate success stories: 2–3 testimonials with photos, program completed, and current career position
- Campus life preview: Photo grid with parallax effect showing campus, Newport Beach, and student activities
- Enrollment CTA section: "Classes Starting [DATE]" with countdown, registration button
- Request info form: Persistent sidebar on desktop (Name, Email, Phone, Program Interest), inline section on mobile
- Footer: Contact info, quick links, social media, accreditation logos, catalog download, newsletter signup

#### Programs Section
- `/programs` — Hub page with program comparison matrix (side-by-side duration, credits, tuition, career outcomes, accreditation)
- `/programs/certificate` — Certificate Course details: avocational focus, online/in-person options, curriculum overview, $2,400 tuition, 3-month duration, supply kit info
- `/programs/associate-of-arts` — AA degree: career-oriented track, 80 credit units, ~2-year completion, $39,900 tuition, curriculum breakdown, prerequisite for BA
- `/programs/bachelor-of-arts` — BA degree: CIDA-accredited, 45 GE transfer units required, $19,950 additional tuition, advanced curriculum, thesis/capstone project
- `/programs/master-interior-architecture` — MIA: highest degree offered, 45 credit units, 3–4 terms, $22,500 tuition, advanced academic focus, thesis requirement
- `/programs/compare` — Interactive comparison tool: filterable matrix of all 4 programs by cost, duration, credits, career outcomes, accreditation status
- `/programs/catalog` — Digital catalog viewer (embedded PDF or interactive page-flip) + downloadable PDF

#### Admissions Section
- `/admissions` — Hub with clear step-by-step enrollment process visualization (Step 1: Explore → Step 2: Apply → Step 3: Financial Aid → Step 4: Register)
- `/admissions/apply` — Application overview + embedded or linked Formstack registration form
- `/admissions/tuition` — Complete tuition breakdown table for all 4 programs including registration fees, supply costs, STRF fees, lab fees, and total estimated charges
- `/admissions/financial-aid` — Federal financial aid info, documents & disclosures, Return of Title IV Funds Policy link, net price calculator
- `/admissions/transfers` — Transfer student requirements, credit evaluation process, how AA credits apply to BA

#### Campus Life Section
- `/campus-life` — Overview with embedded video tour, photo grid of Newport Beach campus
- `/campus-life/gallery` — Masonry grid gallery of student design work
- `/campus-life/graduation` — Photo galleries for graduation ceremonies (2023, 2024, 2025)
- `/campus-life/portfolios` — Featured student portfolio projects with case study format
- `/campus-life/student-life` — ASID and IIDA student chapters, campus events, design community
- `/campus-life/awards` — Award-winning student projects and institutional recognition

#### About Section
- `/about` — IDI founding story (1984 Corona del Mar, moved to Newport Beach 1990), mission, philosophy
- `/about/why-idi` — Key differentiators: Orange County location, proximity to Laguna Design Center and Pacific Design Center, small class sizes, industry-connected faculty, ACCSC School of Excellence
- `/about/faculty` — Faculty profile cards with photos, credentials, design specialties, and industry experience
- `/about/staff` — Staff directory with name, title, and contact information
- `/about/careers` — Interior design career paths, industry outlook, salary data, how IDI programs prepare graduates
- `/about/accreditation` — ACCSC, CIDA, BPPE details with logos, links to accrediting body websites, and downloadable verification documents

#### Utility Pages
- `/blog` — Blog listing with categories, search, and pagination (migrated from WordPress)
- `/blog/[slug]` — Individual blog post template with related posts sidebar
- `/contact` — Contact form, Google Maps embed, address, phone, fax, email, Zoom appointment scheduling CTA
- `/disclosures` — Central hub for all compliance and disclosure documents
- `/disclosures/title-ix` — Title IX information page
- `/disclosures/bppe` — BPPE annual reports and disclosures
- `/privacy-policy` — Privacy policy
- `/sitemap` — HTML sitemap
- `/bookstore` — Online bookstore (link to external store or embedded)
- `/job-posting` — Job posting form for industry design firms

---

## 6. Sales Funnel Architecture

Every page on the redesigned site serves a strategic role in the enrollment funnel. The architecture is designed to guide visitors through a progressive journey from initial awareness to registration, with multiple touchpoints for lead capture at each stage.

### 6.1 Funnel Stages & Page Mapping

| Stage | User Mindset | Key Pages | Primary CTA | Secondary CTA |
|-------|-------------|-----------|-------------|---------------|
| Awareness | "What is IDI?" | Homepage, Blog, SEO landing pages | "Explore Programs" | "Request Info" |
| Interest | "This looks good" | Programs hub, Campus Life, Gallery | "Request Information" | "Download Catalog" |
| Consideration | "Is this right for me?" | Program detail pages, Tuition, Financial Aid, Faculty | "Schedule a Tour" | "Download Catalog" |
| Decision | "I want to apply" | Compare Programs, Tuition, Testimonials, Careers | "Apply Now" | "Talk to Admissions" |
| Action | "Let me register" | Apply page, Formstack form, Contact | "Submit Application" | "Call (949) 675-4451" |

### 6.2 Conversion Optimization Elements

#### Persistent CTAs
- **Desktop header:** Sticky nav with "Request Info" (ghost/outline) + "Apply Now" (solid gold accent) buttons always visible
- **Mobile:** Sticky bottom bar (56px) with phone icon (click-to-call) + "Apply Now" button in thumb zone
- **Every content page:** Contextual CTA block inserted every 2–3 content sections to prevent scroll dead-ends
- **Exit intent:** Modal with "Before you go — download our catalog" on desktop (triggered once per session)

#### Lead Capture Forms
- **Quick Inquiry (4 fields):** Name, Email, Phone, Program of Interest — homepage sidebar, "Request Info" modal, inline on program pages
- **Catalog Request (3 fields):** Name, Email, Mailing Address — triggered by catalog download CTAs throughout site
- **Tour/Zoom Scheduling (5 fields):** Name, Email, Phone, Program Interest, Preferred Date/Time — contact page and campus section
- **Full Registration:** Links to Formstack form (interiordesignersinstitute.formstack.com) — "Apply Now" buttons site-wide

#### Trust & Social Proof Placement
- Accreditation badges (ACCSC, CIDA, BPPE) visible on homepage hero, program pages, and footer
- "2019 ACCSC School of Excellence" featured prominently on homepage and about page
- "Founded 1984 • 40+ Years of Design Excellence" heritage messaging in hero and about sections
- Graduate testimonials with real photos, program completed, and current design career positions
- Student work gallery as tangible evidence of educational quality
- ASID and IIDA student chapter logos as professional network credibility signals
- Newport Beach location positioned as career and lifestyle advantage (proximity to Laguna Design Center, Pacific Design Center)

#### Urgency & Scarcity Triggers
- "Classes Starting May 5" — dynamic date countdown banner on homepage and program pages
- "Limited Class Sizes" — messaging reinforcing small, personalized attention (IDI's genuine differentiator)
- "Registration Open: Spring/Summer 2026" — current enrollment period prominently displayed
- Seasonal messaging updates managed through a simple JSON config file (no CMS needed)

---

## 7. Design System & Visual Language

As an interior design institution, IDI's website must itself be a masterclass in design. The visual language will draw from interior design principles: considered use of space, material textures, sophisticated color palettes, and purposeful composition. The aesthetic should feel like walking into a beautifully designed space — every element intentional, nothing superfluous.

### 7.1 Design Principles

- **Editorial Luxury:** Think Architectural Digest meets modern SaaS. Large typography, generous whitespace, full-bleed imagery, and a pace that lets content breathe.
- **Material Honesty:** Textures and surfaces inspired by interior materials — linen, marble, warm wood, brushed metal — used subtly in backgrounds and UI elements.
- **Spatial Rhythm:** Consistent vertical rhythm with a base spacing unit. Sections flow like rooms in a well-designed home.
- **Progressive Disclosure:** Information reveals itself as you scroll, maintaining curiosity and engagement. GSAP animations are the vehicle.
- **Accessible Elegance:** Beautiful does not mean exclusive. WCAG 2.1 AA minimum, with careful attention to contrast ratios even within the refined color palette.

### 7.2 Color System (Tailwind Design Tokens)

| Token Name | Hex Value | Usage |
|-----------|-----------|-------|
| --color-brand-900 | #0F0F1A | Primary headings, navigation background |
| --color-brand-800 | #1A1A2E | Secondary dark surfaces, footer |
| --color-brand-700 | #2D2D4A | Dark card backgrounds |
| --color-accent-500 | #B8860B | Primary CTA buttons, highlights, accent borders |
| --color-accent-400 | #D4A843 | Hover states for accent elements |
| --color-accent-300 | #E8CC8A | Light accent backgrounds, tags |
| --color-warm-50 | #FAF8F5 | Page background (cream white) |
| --color-warm-100 | #F5F0EB | Card backgrounds, section alternation |
| --color-warm-200 | #E8E0D8 | Borders, dividers |
| --color-warm-300 | #D5CEC5 | Disabled states, secondary borders |
| --color-neutral-700 | #404040 | Body text |
| --color-neutral-500 | #737373 | Secondary text, captions |
| --color-neutral-300 | #D4D4D4 | Placeholder text |
| --color-white | #FFFFFF | Card surfaces, input backgrounds |
| --color-success | #16A34A | Form success states |
| --color-error | #DC2626 | Form error states |

### 7.3 Typography System

| Element | Font | Size (Desktop) | Size (Mobile) | Weight | Letter Spacing |
|---------|------|---------------|--------------|--------|---------------|
| Display / Hero | Playfair Display (serif) | 72–96px | 40–56px | 700 | -0.02em |
| H1 / Page Title | Playfair Display | 48–56px | 32–40px | 700 | -0.01em |
| H2 / Section Title | Playfair Display | 36–40px | 28–32px | 600 | 0 |
| H3 / Subsection | Inter (sans-serif) | 24–28px | 20–24px | 600 | 0 |
| Body | Inter | 16–18px | 16px | 400 | 0.01em |
| Body Large (Intro) | Inter | 20–22px | 18px | 400 | 0.01em |
| Caption / Small | Inter | 13–14px | 12–13px | 400 | 0.02em |
| Button | Inter | 15–16px | 15px | 600 | 0.05em |
| Overline / Label | Inter | 12–13px | 11–12px | 600 UPPERCASE | 0.1em |
| Nav Link | Inter | 15px | 16px | 500 | 0.02em |

### 7.4 Component Library

- **Buttons:** Primary (gold fill), Secondary (dark outline), Ghost (text only), Icon buttons. All with hover scale + subtle shadow GSAP animation.
- **Cards:** Program cards, testimonial cards, faculty cards, gallery cards. Consistent border-radius (8px), subtle shadow, hover elevation.
- **Forms:** Floating label inputs, select dropdowns, multi-step form with progress bar, inline validation with Zod schemas.
- **Navigation:** Desktop mega-menu with program previews, mobile slide-out drawer, breadcrumbs on interior pages.
- **Modals:** Request Info modal (triggered by CTAs), catalog download modal, video lightbox, image gallery lightbox.
- **Section Layouts:** Full-bleed hero, split (50/50 image+text), card grid (2–4 columns), testimonial carousel, CTA banner.
- **Media:** Responsive image with lazy loading + blur placeholder, video player with custom controls, PDF inline viewer.
- **Social Proof:** Accreditation badge strip, stat counter row, testimonial slider, logo carousel.

### 7.5 Spacing & Grid

- **Base unit:** 4px (0.25rem)
- **Spacing scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192px
- **Section padding:** 96px (desktop) / 64px (tablet) / 48px (mobile) vertical
- **Content max-width:** 1280px with 24px gutters
- **Grid:** 12-column CSS Grid (desktop), 6-column (tablet), 4-column (mobile)
- **Card gap:** 24px (desktop), 16px (mobile)

### 7.6 Imagery Guidelines

- **Aspect ratios:** Hero 16:9, program cards 4:3, gallery 3:2 and 2:3 mixed, testimonial portraits 1:1
- **Treatment:** Slight warm-tone color grade for cohesion; dark overlay (30–50% opacity) on hero/banner images for text legibility
- **Placeholder images (Unsplash) search terms:** "interior design," "architecture studio," "design studio workspace," "college campus California," "Newport Beach," "students designing," "material samples," "design sketching," "modern interior," "luxury home interior"

---

## 8. Content Migration Plan

All content from the current WordPress idi.edu site must be migrated to the new Next.js application. This includes page text content, images, videos, PDF documents, and blog posts. No content may be lost in the migration.

### 8.1 PDF Document Inventory (Must Migrate)

#### Disclosure & Compliance Documents

| Document | Current URL Path | New Path |
|----------|-----------------|----------|
| ACCSC Graduation & Employment Charts 2025 | /wp-content/uploads/2025/12/ACCSC-Graduation-and-Employment-Charts-2025.pdf | /documents/disclosures/accsc-graduation-employment-2025.pdf |
| IDI Campus Security Disclosures | /wp-content/uploads/2025/12/IDI-Campus-Security-Disclosures.pdf | /documents/disclosures/campus-security-disclosures.pdf |
| Title IX / Diversity Statement | /wp-content/uploads/2025/02/Title-IX-Notice-of-Nondiscrimination-Diversity-Statement-Student-Disability-Services-6.pdf | /documents/disclosures/title-ix-diversity-statement.pdf |
| Student Disability Services | /wp-content/uploads/2024/01/Disability-Services-24.pdf | /documents/disclosures/disability-services.pdf |
| CIDA Student Achievement Data 24-25 | /wp-content/uploads/2025/12/CIDA-student-acheivement-24-25.pdf | /documents/disclosures/cida-student-achievement-24-25.pdf |
| CIDA Accredited Status | /wp-content/uploads/2019/10/CIDA-Accredited-Status.pdf | /documents/disclosures/cida-accredited-status.pdf |
| IDI Mission, Goals & Philosophy | /wp-content/uploads/2018/12/IDI-mission-goals-philosophy.pdf | /documents/disclosures/idi-mission-goals-philosophy.pdf |
| IPEDS Data – Completions & Grad Rates | /wp-content/uploads/2025/03/IPEDS-Data-Completions-Graduation-Rates.pdf | /documents/disclosures/ipeds-data-completions-graduation.pdf |
| Return of Title IV Funds Policy | /wp-content/uploads/2018/12/Return-of-Title-IV-Funds-Policy.pdf | /documents/financial-aid/return-title-iv-funds-policy.pdf |

#### Catalog & Academic Documents

| Document | Current URL Path | New Path |
|----------|-----------------|----------|
| IDI Catalog Addendum 24-25 | /wp-content/uploads/2025/03/IDI-Catalog-Addendum-24-25-032025.pdf | /documents/catalog/idi-catalog-addendum-24-25.pdf |

### 8.2 Media Asset Migration

- **Hero video:** `/wp-content/uploads/2024/03/idi_hero_new_video.mp4` → `/public/video/hero.mp4`
- **Short promo video:** `/wp-content/uploads/2025/03/idi-15-sec.mp4` → `/public/video/promo-15s.mp4`
- **Design gallery images:** All images from `/wp-content/uploads/2018/11/` and `/2018/12/` (pic1 through pic8, full-size variants)
- **Faculty photos, campus photos, graduation gallery photos** (2023, 2024, 2025)
- **Accreditation logos:** ACCSC badge, CIDA logo, ACCSC Award Badge PNG
- **IDI logo:** `/wp-content/uploads/2018/11/logo.png`
- **Footer image:** `/wp-content/uploads/2018/11/idi_footer.jpg`

### 8.3 Blog Content Migration

- Export all WordPress blog posts via WP REST API or WXR export
- Convert posts to MDX files stored in `/content/blog/[slug].mdx`
- Preserve publication dates, categories, featured images, and author attribution
- Create a `contentlayer.config.ts` (or similar) to type-check and query blog content at build time

### 8.4 URL Redirect Map

A comprehensive 301 redirect map must be created from all current WordPress URLs to their new Next.js equivalents. This is critical for preserving SEO equity. The redirect map will be implemented in `next.config.ts` redirects array and/or `vercel.json`.

| Current WordPress URL | New URL |
|----------------------|---------|
| /programs-of-study/ | /programs |
| /programs-of-study/certificate-course/ | /programs/certificate |
| /programs-of-study/associate-of-arts/ | /programs/associate-of-arts |
| /programs-of-study/bachelor-of-arts/ | /programs/bachelor-of-arts |
| /programs-of-study/master-of-interior-architecture/ | /programs/master-interior-architecture |
| /admissions/tuition-fees/ | /admissions/tuition |
| /admissions/financial-aid/ | /admissions/financial-aid |
| /about/idi-history/ | /about/history |
| /students/student-life/ | /campus-life/student-life |
| /students/design-gallery/ | /campus-life/gallery |
| All /wp-content/uploads/*.pdf URLs | Corresponding /documents/ paths |

### 8.5 Unsplash Placeholder Strategy

During development, placeholder images from Unsplash will be used in place of actual IDI photography. Images will be sourced via unsplash.com direct URLs using relevant search terms.

- Each placeholder will include a comment in the code identifying what the real photo should depict
- A `/PLACEHOLDER_IMAGES.md` file will track every placeholder with its intended replacement subject
- Unsplash categories to source from: interior design, architecture, design studio, college campus, Southern California, Newport Beach, students working, design sketching, material samples
- Images will be downloaded locally (not hotlinked) and stored in `/public/images/placeholder/` for development builds

---

## 9. Page-by-Page Specifications

### 9.1 Homepage (/)

The homepage is the primary entry point and must accomplish three goals in the first 5 seconds: communicate that IDI is a prestigious design school, show that the education produces real results (student work), and present a clear next action (explore programs or request info).

#### Section 1: Hero (100vh)
- Full-viewport video background (`idi_hero_new_video.mp4`) with dark overlay gradient
- GSAP: Staggered character reveal for headline "Design Your Future" — each character fades in with slight Y offset
- Headline: "Design Your Future" (Playfair Display, 96px desktop / 48px mobile)
- Subheadline: "California's Premier Interior Design School • Newport Beach" (Inter, 22px)
- Two CTAs: "Explore Programs" (primary gold button) + "Request Information" (ghost button)
- "Classes Starting May 5" badge with subtle pulse animation
- Scroll indicator arrow at bottom with bounce animation

#### Section 2: Social Proof Bar
- Horizontal strip: ACCSC logo + CIDA logo + BPPE mention + "Est. 1984" + "2019 School of Excellence"
- GSAP: Fade in with stagger as scrolled into view
- Dark brand background with white/gold elements

#### Section 3: Programs Overview
- Section title: "Our Programs" (Playfair Display)
- 4-card grid (2×2 desktop, 1-column mobile) for each program
- Each card: Program name, degree type, duration, starting price, "Learn More" link
- GSAP: Cards stagger-reveal from bottom with slight scale. Hover: 3D tilt + shadow elevation
- Below grid: "Compare All Programs" link to /programs/compare

#### Section 4: Why IDI? Value Propositions
- 6-item grid with icons: Small Class Sizes, Newport Beach Location, ACCSC Accredited, CIDA Accredited (BA), Industry-Connected Faculty, 40+ Years of Excellence
- Each item has an icon, headline, and 1–2 sentence description
- GSAP: Staggered fade-up on scroll

#### Section 5: Student Work Gallery
- Horizontal scroll gallery of 8–12 curated student design images
- GSAP: ScrollTrigger-driven horizontal momentum scroll with snap-to-card
- Click opens lightbox with project details
- "View Full Gallery" link to /campus-life/gallery

#### Section 6: Testimonials
- 2–3 graduate testimonials in carousel format
- Each: Large quote, graduate photo, name, program completed, current title/company
- GSAP: Crossfade transition between testimonials with auto-advance

#### Section 7: Campus Preview
- Photo grid (3–4 images) of campus and Newport Beach
- GSAP: Parallax depth effect on images
- "Visit Our Campus" CTA linking to /campus-life

#### Section 8: Enrollment CTA Banner
- Full-width dark section with "Begin Your Design Journey" headline
- "Classes Starting May 5" with countdown timer
- "Apply Now" primary button + "Request Info" secondary button

#### Section 9: Request Info Form
- On desktop: Appears as a floating sidebar on the right side of the page, scrolling with content
- On mobile: Appears as a dedicated section between Sections 6 and 7
- Fields: First Name, Last Name, Email, Phone, Program of Interest (dropdown), "How can we help you?" (textarea)

### 9.2 Program Detail Page Template

Each of the 4 program pages follows a consistent template with program-specific content:

- **Hero:** Program name + degree type + key stats (duration, credits, tuition) as floating badges
- **Overview section:** Program description, learning objectives, who this program is for
- **Curriculum section:** Term-by-term course listing (pulled from catalog data)
- **Tuition section:** Cost breakdown table matching current tuition page data exactly
- **Career outcomes:** What graduates do with this degree, salary ranges, job titles
- **Faculty highlight:** 2–3 faculty members who teach in this program
- **Student work:** Gallery of work from students in this specific program
- **CTA section:** "Apply to the [Program Name]" with registration link
- **Related programs:** Cards linking to other programs for cross-consideration

### 9.3 Tuition Page (/admissions/tuition)

This page must present the complete tuition data currently shown on idi.edu in a cleaner, more scannable format:

| Program | Tuition | Registration | Supplies (Est.) | Lab Fee | Total Charges | Est. Total Cost |
|---------|---------|-------------|----------------|---------|--------------|----------------|
| Certificate Course | $2,400 ($800/mo ×3) | $95 | $300 (supply kit) | — | $2,795 | $3,045 |
| Certificate Single Course | $1,200 ($400/mo ×3) | $95 | $200 | — | $1,495 | $1,745 |
| AA Degree | $39,900 ($19,950/yr) | $100 | $2,500 | $600 | $40,600 | $43,100 |
| BA Degree | $19,950 ($2,217/class) | $100 | $2,500 | $800 | $20,850 | $23,350 |
| MIA Degree | $22,500 ($2,500/class) | $100 | $2,500 | — | $22,600 | $25,100 |

Additional data to display: full-time / 3/4-time / part-time payment schedules, international student registration fee ($250), STRF fee disclosure ($0.00), and link to Return of Title IV Funds Policy.

---

## 10. Accessibility Requirements

The site must meet WCAG 2.1 AA compliance at minimum. As an educational institution, accessibility is both an ethical imperative and a legal requirement.

### 10.1 Standards

- WCAG 2.1 Level AA compliance across all pages
- Section 508 compliance (federal requirement for institutions receiving federal financial aid)
- ARIA landmarks, roles, and labels on all interactive components
- Screen reader tested with NVDA (Windows) and VoiceOver (macOS/iOS)

### 10.2 Requirements

- **Color contrast:** Minimum 4.5:1 for body text, 3:1 for large text (18px+ bold, 24px+ regular). All color combinations in the design system must pass this threshold.
- **Keyboard navigation:** Full keyboard accessibility for all interactive elements. Visible focus indicators (2px solid accent outline) on all focusable elements. Tab order matches visual layout. Skip-to-content link as first focusable element.
- **Motion:** Respect `prefers-reduced-motion` OS setting globally. All GSAP animations disabled/reduced when this is active. No content relies solely on animation for comprehension.
- **Images:** All `<img>` elements have meaningful `alt` text. Decorative images use `alt=""` with `aria-hidden="true"`. Complex images (infographics, charts) have extended descriptions.
- **Forms:** All form inputs have associated `<label>` elements. Error messages are programmatically associated with fields via `aria-describedby`. Required fields indicated via `aria-required` and visual indicator. Form validation errors announced to screen readers via `aria-live` regions.
- **Video:** Captions on all video content. Transcript available for hero video. Video does not auto-play with sound.
- **Typography:** Text resizable to 200% without layout breakage. No content conveyed solely through color. Minimum 16px base font size.
- **Navigation:** Consistent navigation across all pages. Mobile menu accessible via keyboard and screen reader. Breadcrumbs with proper `aria-label`.

### 10.3 Testing

- Automated: axe-core integrated into CI pipeline; Lighthouse accessibility audit on every deploy
- Manual: Keyboard-only navigation test on all pages; VoiceOver walkthrough of enrollment funnel
- Annual third-party VPAT assessment recommended

---

## 11. Performance Requirements

### 11.1 Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| LCP (Largest Contentful Paint) | < 1.5s | Preload hero image/video, next/image optimization, static generation |
| FID (First Input Delay) | < 100ms | Minimal main-thread JavaScript, deferred GSAP initialization |
| CLS (Cumulative Layout Shift) | < 0.1 | Explicit dimensions on all media, font-display: swap with size-adjust |
| INP (Interaction to Next Paint) | < 200ms | Event delegation, efficient React state updates |
| TTFB (Time to First Byte) | < 200ms | Vercel Edge CDN, static generation for all pages |

### 11.2 Asset Budget

| Asset Type | Budget | Strategy |
|-----------|--------|----------|
| Total page weight (initial load) | < 500KB | Code splitting, tree shaking, image optimization |
| JavaScript bundle (initial) | < 150KB gzipped | Dynamic imports for GSAP, route-based splitting |
| CSS | < 30KB gzipped | Tailwind purge, no unused utilities |
| Fonts | < 100KB | Subset Playfair Display + Inter to Latin; WOFF2 format; font-display: swap |
| Hero image/video | < 2MB (video), < 200KB (poster) | Compressed MP4 (H.264), WebM fallback, poster image for instant visual |
| Individual images | < 150KB each | next/image with AVIF/WebP, responsive srcset |

### 11.3 Optimization Strategies

- **Static Site Generation (SSG):** All pages pre-rendered at build time via Next.js `generateStaticParams`. Zero server-side rendering at request time.
- **Image optimization:** next/image component with automatic format selection (AVIF → WebP → JPEG), responsive breakpoints, lazy loading with blur placeholder.
- **Video:** Hero video lazy-loaded with Intersection Observer. Poster image shown immediately. Video compressed to target 2MB with HandBrake/FFmpeg. WebM + MP4 dual-format.
- **Code splitting:** GSAP loaded via dynamic import only on client. Each page's animation code split per route. Third-party scripts (GA4, etc.) loaded with `next/script` strategy="lazyOnload".
- **Font optimization:** next/font for automatic self-hosting and optimization. Subset to Latin characters. Preload critical font files.
- **Prefetching:** Next.js automatic prefetch on visible links. Manual prefetch for likely next pages in enrollment funnel.

---

## 12. SEO Strategy

### 12.1 Technical SEO

- **Metadata:** Unique `<title>` and `<meta name="description">` for every page, generated from page content via Next.js metadata API
- **Open Graph / Twitter Cards:** Full OG tags on every page (title, description, image, URL) for social sharing
- **Structured Data (JSON-LD):** EducationalOrganization schema on homepage; Course schema on each program page; BreadcrumbList on all pages; FAQPage schema where applicable; LocalBusiness schema with address, phone, hours
- **Sitemap:** Auto-generated `sitemap.xml` via `next-sitemap` package, submitted to Google Search Console
- **Robots:** `robots.txt` allowing all crawlers, pointing to sitemap
- **Canonical URLs:** Self-referencing canonical on every page; proper canonical handling for paginated content
- **301 Redirects:** Complete WordPress-to-Next.js redirect map (see Section 8.4)
- **Internal linking:** Contextual cross-links between related programs, from blog posts to relevant program pages, breadcrumb navigation

### 12.2 Content SEO

- **Target keywords by page:** Each program page targets "[Program Name] interior design degree California" and variants
- **Blog strategy:** 2–4 posts/month targeting long-tail interior design education keywords (career guides, design trend articles, student spotlights)
- **Local SEO:** Google Business Profile optimization, Newport Beach / Orange County location keywords, campus address on every page in structured data
- **Image SEO:** Descriptive filenames (not pic1.jpg), meaningful alt text, compressed with next/image

### 12.3 Page Speed as SEO Factor

All performance targets in Section 11 directly support SEO via Core Web Vitals ranking signals. The migration from WordPress to static Next.js is expected to yield significant ranking improvements from page speed alone.

---

## 13. Analytics & Tracking Plan

### 13.1 Tools

- **Google Analytics 4 (GA4):** Primary analytics platform with enhanced e-commerce events adapted for lead gen
- **Vercel Analytics:** Real User Monitoring (RUM) for Core Web Vitals, deployed alongside the application
- **Google Search Console:** Organic search performance, indexing status, structured data validation
- **Google Tag Manager:** Event management layer (optional — may use direct GA4 gtag instead for simplicity)

### 13.2 Event Tracking Matrix

| Event Name | Trigger | Parameters | Funnel Stage |
|-----------|---------|------------|-------------|
| page_view | Every page load | page_title, page_location | All |
| cta_click | Any CTA button clicked | cta_text, cta_location, destination_url | All |
| form_view | Form becomes visible | form_name, form_location | Interest |
| form_start | First field interaction | form_name | Interest |
| form_submit | Successful form submission | form_name, program_interest | Consideration → Action |
| form_error | Validation error displayed | form_name, error_field, error_message | — |
| catalog_download | Catalog PDF downloaded | source_page | Interest |
| pdf_download | Any PDF downloaded | document_name, document_category | Varies |
| video_play | Hero or tour video started | video_name, source_page | Awareness |
| video_complete | Video watched to 75%+ | video_name, watch_percentage | Interest |
| program_compare | Compare tool used | programs_compared | Consideration |
| phone_click | Click-to-call initiated | source_page | Decision |
| exit_intent_shown | Exit modal displayed | source_page | — |
| exit_intent_converted | User submits exit modal form | — | Interest |
| scroll_depth | 25%, 50%, 75%, 100% | page_title, scroll_percentage | Engagement |

### 13.3 Conversion Funnels (GA4 Explore)

- **Primary funnel:** Homepage → Programs → Program Detail → Apply Page → Formstack Submission
- **Secondary funnel:** Any page → Request Info Form → Form Submit → Thank You
- **Catalog funnel:** Any page → Catalog CTA → Catalog Download (or form gate)

### 13.4 Dashboards

- **Weekly:** Sessions, bounce rate, pages/session, form submissions, top pages, device split
- **Monthly:** Funnel conversion rates, catalog downloads, phone clicks, organic traffic growth, keyword rankings
- **Quarterly:** Enrollment attribution analysis, content performance, SEO progress vs. baseline

---

## 14. Development Phases & Timeline

### Phase 1: Foundation (Weeks 1–3)

| Task | Duration | Deliverables |
|------|----------|-------------|
| Project setup: Next.js 15, TypeScript, Tailwind config, GSAP install, Git repo, Vercel project | 2 days | Running dev environment with CI/CD |
| Design tokens: Colors, typography, spacing implemented in tailwind.config.ts | 1 day | Design system config |
| Component library: Buttons, cards, forms, navigation, modals, section layouts | 5 days | Storybook or dev page with all components |
| GSAP infrastructure: useGSAP hook, MotionProvider, ScrollTrigger setup, animation utilities | 2 days | Reusable animation system |
| Content migration: Download all PDFs, videos, images from idi.edu; organize in /public | 2 days | Complete local asset library |
| Blog migration: Export WordPress posts, convert to MDX | 2 days | /content/blog/ directory with all posts |
| Unsplash placeholder download: Source and download all placeholder images | 1 day | /public/images/placeholder/ |

### Phase 2: Core Pages (Weeks 4–6)

| Task | Duration | Deliverables |
|------|----------|-------------|
| Homepage: All 9 sections with GSAP animations | 4 days | Fully animated homepage |
| Program pages: 4 detail pages + hub page + compare tool | 4 days | Complete programs section |
| Admissions pages: Apply, tuition, financial aid, transfers | 3 days | Complete admissions section |
| Navigation: Desktop mega-menu + mobile drawer + sticky header | 2 days | Responsive navigation |
| Footer: Contact info, links, accreditation, newsletter | 1 day | Site-wide footer |

### Phase 3: Secondary Pages & Features (Weeks 7–9)

| Task | Duration | Deliverables |
|------|----------|-------------|
| Campus Life: Campus page, gallery (masonry + lightbox), graduation galleries, portfolios | 3 days | Complete campus section |
| About section: History, Why IDI, faculty, staff, careers, accreditation | 3 days | Complete about section |
| Blog: Listing page with pagination, individual post template, category filters | 2 days | Blog system |
| Disclosures hub: Central page with organized PDF links | 1 day | Compliance page |
| Contact page: Form, map, info | 1 day | Contact page |
| Utility pages: Privacy, sitemap, bookstore, job posting | 1 day | Utility pages |
| Forms: All lead capture forms, Formstack integration, email confirmations | 2 days | Working form system |

### Phase 4: Polish & Optimization (Weeks 10–11)

| Task | Duration | Deliverables |
|------|----------|-------------|
| GSAP animation polish: Timing refinement, mobile optimization, reduced-motion testing | 2 days | Production-ready animations |
| Performance optimization: Bundle analysis, image compression, font subsetting, lazy loading audit | 2 days | Meeting all performance targets |
| SEO implementation: Metadata, structured data, sitemap, redirects, OG images | 2 days | SEO-ready site |
| Analytics: GA4 setup, event tracking, conversion funnels, dashboards | 1 day | Analytics tracking live |
| Accessibility audit: axe-core pass, keyboard testing, screen reader walkthrough | 2 days | WCAG 2.1 AA compliance |
| Cross-browser testing: Chrome, Safari, Firefox, Edge; iOS Safari, Chrome Android | 1 day | Browser compatibility |

### Phase 5: Launch (Week 12)

| Task | Duration | Deliverables |
|------|----------|-------------|
| Staging review with client | 2 days | Client sign-off |
| DNS cutover: Point idi.edu to Vercel | 1 day | Live site |
| 301 redirect verification | 1 day | All old URLs redirecting |
| Post-launch monitoring: Analytics, error tracking, performance monitoring | Ongoing | Stability confirmation |

**Total estimated timeline: 12 weeks**

---

## 15. Testing Strategy

### 15.1 Automated Testing

- **Unit tests (Vitest):** Utility functions, form validation schemas, data transformations, component logic
- **E2E tests (Playwright):** Critical user paths through enrollment funnel; form submission flows; navigation on desktop and mobile; PDF download links; redirect verification
- **Visual regression (Playwright screenshots):** Key pages captured at desktop, tablet, and mobile breakpoints; compared against baselines on PR
- **Accessibility (axe-core):** Integrated into Playwright tests; run on every page; fail CI on critical violations
- **Lighthouse CI:** Performance, accessibility, best practices, SEO scores checked on every deploy; fail if below thresholds

### 15.2 Manual Testing

- Keyboard-only navigation of entire site
- VoiceOver (macOS/iOS) and NVDA (Windows) screen reader walkthroughs
- Real device testing: iPhone (Safari), Android (Chrome), iPad (Safari)
- Form submission end-to-end with email receipt verification
- PDF download and opening on multiple devices
- GSAP animations on low-powered devices and with `prefers-reduced-motion` enabled
- Slow 3G network simulation for graceful degradation

### 15.3 UAT (User Acceptance Testing)

- IDI staff walkthrough of all pages for content accuracy
- Admissions team test of form submissions and lead receipt
- Faculty review of faculty/staff directory pages
- Mobile-first review by IDI marketing team

---

## 16. Launch Checklist

### Pre-Launch

- [ ] All content migrated and verified against current idi.edu (page-by-page comparison)
- [ ] All PDFs accessible and downloadable from new /documents/ paths
- [ ] 301 redirect map implemented and tested for every known WordPress URL
- [ ] Forms tested end-to-end: submission → email receipt → Formstack (if applicable)
- [ ] GA4 property configured with all events firing correctly
- [ ] Google Search Console verified for new domain configuration
- [ ] Sitemap.xml generated and submitted
- [ ] Robots.txt reviewed and confirmed
- [ ] OG images generated for all pages
- [ ] Structured data validated via Google Rich Results Test
- [ ] Lighthouse scores meeting targets (95+ across all categories)
- [ ] WCAG 2.1 AA compliance verified via automated and manual testing
- [ ] Cross-browser testing complete (Chrome, Safari, Firefox, Edge, iOS, Android)
- [ ] SSL certificate active on idi.edu
- [ ] Client sign-off on staging environment
- [ ] Backup of current WordPress site (database + files)

### Launch Day

- [ ] DNS updated: idi.edu → Vercel
- [ ] SSL propagation confirmed
- [ ] 301 redirects verified with live URLs
- [ ] GA4 real-time dashboard confirming data flow
- [ ] Form submission test on production
- [ ] Key pages spot-checked on mobile and desktop
- [ ] Google Search Console URL inspection on key pages
- [ ] Social media links tested

### Post-Launch (Week 1)

- [ ] Monitor 404 errors in analytics and add missing redirects
- [ ] Verify Google is indexing new pages (Search Console coverage report)
- [ ] Check Core Web Vitals field data (Vercel Analytics + Search Console)
- [ ] Review form submission volume vs. pre-launch baseline
- [ ] Address any client-reported issues

---

## 17. Post-Launch Maintenance

### Ongoing Tasks

- **Content updates:** Managed via Git — edit MDX/JSON files, commit, and Vercel auto-deploys. No CMS needed for routine updates.
- **Enrollment period updates:** Update `/data/enrollment.json` with new class start dates, registration links, and countdown dates.
- **Tuition updates:** Update `/data/tuition.json` when tuition changes occur (typically annually).
- **PDF updates:** Replace files in `/public/documents/` and commit. Old URLs continue to work if filenames are maintained.
- **Blog posts:** Add new `.mdx` files to `/content/blog/`, commit, and deploy.
- **Dependency updates:** Monthly review of Next.js, Tailwind, GSAP, and other package updates. Automated via Renovate or Dependabot.
- **Security:** Vercel handles infrastructure security. No server to patch. Dependencies monitored via GitHub security advisories.
- **Analytics review:** Monthly review of GA4 dashboards; quarterly funnel optimization based on data.

### Content Update Workflow

Since the site has no CMS, content updates follow this workflow:

1. Open the relevant file in the GitHub repository (e.g., `/data/enrollment.json` or `/content/blog/new-post.mdx`)
2. Make changes directly in GitHub's web editor (for non-technical staff) or via local development
3. Create a pull request — Vercel automatically creates a preview deployment
4. Review the preview URL to verify changes
5. Merge to main — Vercel auto-deploys to production within ~60 seconds

For clients who prefer a CMS-like editing experience, a future enhancement could add a headless CMS (e.g., Sanity, Contentful, or Tina) that writes to the Git repo, but this is not in scope for the initial launch.

---

## Appendix A: Current Site Content Reference

### Contact Information (to preserve)
- **Address:** 1061 Camelback St., Newport Beach, CA 92660
- **Phone:** (949) 675-4451
- **Fax:** (949) 759-0667
- **Email:** contact@idi.edu
- **Registration Form:** interiordesignersinstitute.formstack.com/forms/spring_summer_2026_registration

### Current External Links (to maintain)
- ACCSC: accsc.org
- CIDA: accredit-id.org
- BPPE: bppe.ca.gov
- ASID: asid.org
- IIDA: iida.org
- Net Price Calculator: idi.edu/NetPriceCalculator/npcalc.html

### Accreditation Details
- **ACCSC:** Accrediting Commission of Career Schools and Colleges — institutional accreditor
- **CIDA:** Council for Interior Design Accreditation — accredits the BA program specifically
- **BPPE:** California Bureau for Private Postsecondary Education — state regulatory body
- **2019 ACCSC School of Excellence Award** — prestigious institutional recognition

---

## Appendix B: Unsplash Placeholder Image Plan

| Location | Subject | Unsplash Search Terms | Dimensions |
|----------|---------|----------------------|------------|
| Homepage hero poster | Design studio with warm lighting | "interior design studio warm" | 1920×1080 |
| Program card: Certificate | Color/material samples on desk | "design material samples swatches" | 800×600 |
| Program card: AA | Student sketching floor plan | "architecture student drawing" | 800×600 |
| Program card: BA | Modern interior living room | "luxury modern interior" | 800×600 |
| Program card: MIA | Architectural model building | "architecture model" | 800×600 |
| Gallery images (8–12) | Beautiful interior design projects | "modern interior design," "luxury home interior," "restaurant interior design" | 1200×800 mixed |
| Campus exterior | Modern college building California | "modern college campus California" | 1600×900 |
| Newport Beach lifestyle | Newport Beach harbor/coast | "Newport Beach California" | 1600×900 |
| Faculty placeholder (6) | Professional headshot diverse | "professional headshot" | 400×400 |
| Student working | Young adult at drafting table | "design student working" | 1200×800 |
| Testimonial portraits (3) | Professional women/men portraits | "professional portrait" | 300×300 |
| About page hero | Interior design workspace | "creative workspace interior" | 1920×800 |

---

*End of Document*

*Version 1.0 — February 11, 2026*
*eyedz9 Creative Services — Confidential*