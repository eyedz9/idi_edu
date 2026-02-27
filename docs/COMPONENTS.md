# Component Reference

All components live under `src/components/` and are organized by domain.

---

## UI Components (`src/components/ui/`)

Base-level design system primitives used across the site.

### Button

**File:** `src/components/ui/button.tsx`
**Purpose:** Polymorphic button component supporting `<button>`, `<a>`, and `<span>` rendering.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `as` | `"button" \| "a" \| "span"` | `"button"` | HTML element to render |
| `variant` | `"primary" \| "secondary" \| "ghost" \| "accent"` | `"primary"` | Visual style variant |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Size preset |
| `className` | `string` | -- | Additional CSS classes |

**Variant styles:**
- `primary` -- Pink background, dark text, amber glow on hover
- `secondary` -- Parchment border, fills on hover
- `ghost` -- Text-only with amber underline
- `accent` -- Violet background, white text

**Usage:**
```tsx
import { Button } from "@/components/ui/button";

<Button variant="primary" size="lg">Apply Now</Button>
<Button as="span" variant="ghost" size="sm">Learn More</Button>
```

**Used by:** Header, Footer, MobileNav, HeroSection, CTAFinale, all forms, mega menus

---

### Input

**File:** `src/components/ui/input.tsx`
**Purpose:** Floating-label text input with error and hint support.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | (required) | Floating label text |
| `error` | `string` | -- | Error message displayed below input |
| `hint` | `string` | -- | Helper text displayed below input |

Also accepts all standard `<input>` HTML attributes.

**Features:** Floating label animation on focus/value, `aria-invalid` and `aria-describedby` for accessibility, auto-generated `id` from label text.

**Used by:** Forms (available but forms currently use inline inputs for the dark theme)

---

### Select

**File:** `src/components/ui/select.tsx`
**Purpose:** Floating-label select dropdown with custom chevron, error, and hint support.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `label` | `string` | (required) | Floating label text |
| `options` | `SelectOption[]` | (required) | Array of `{ value, label, disabled? }` |
| `error` | `string` | -- | Error message |
| `hint` | `string` | -- | Helper text |
| `placeholder` | `string` | `"Select..."` | Empty first option text |

**Used by:** Available for forms; current forms use inline selects

---

### Card

**File:** `src/components/ui/card.tsx`
**Purpose:** Container card with variant styles. Also exports specialized `ProgramCard`, `TestimonialCard`, and `FacultyCard`.

#### Base Card

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"light" \| "dark" \| "glass"` | `"light"` | Background style |
| `children` | `ReactNode` | (required) | Card content |

#### ProgramCard

| Prop | Type | Description |
|---|---|---|
| `program` | `Program` | Program data object |
| `imageSrc` | `string` | Optional image URL |

Renders program name, degree type badge, description, tuition, CIDA badge (if applicable), and "Learn More" link.

#### TestimonialCard

| Prop | Type | Description |
|---|---|---|
| `testimonial` | `Testimonial` | Testimonial data object |

Renders quote icon, blockquote, author photo, name, title, company, and program.

#### FacultyCard

| Prop | Type | Description |
|---|---|---|
| `faculty` | `FacultyMember` | Object with `name`, `title`, `bio`, `imageSrc?`, `specialties?` |

Renders photo, name, title, bio, and specialty tags.

**Used by:** BentoGrid, TestimonialsSection, program pages, faculty pages

---

### Badge

**File:** `src/components/ui/badge.tsx`
**Purpose:** Small label/tag for displaying status, category, or metadata.

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `"accent" \| "dark" \| "outline" \| "jade" \| "violet"` | `"accent"` | Color variant |

**Used by:** ProgramCard, ProgramsMegaMenu, HeroSection, various pages

---

### Modal

**File:** `src/components/ui/modal.tsx`
**Purpose:** Accessible modal dialog with backdrop, focus trap, and escape-to-close.

| Prop | Type | Default | Description |
|---|---|---|---|
| `open` | `boolean` | (required) | Controls visibility |
| `onClose` | `() => void` | (required) | Close handler |
| `size` | `"sm" \| "md" \| "lg"` | `"md"` | Max width |
| `title` | `ReactNode` | -- | Modal title in header |
| `children` | `ReactNode` | (required) | Modal body content |

**Features:** Focus trap (tab cycling), escape key close, body scroll lock, previous focus restoration, backdrop click to close.

---

### Section

**File:** `src/components/ui/section.tsx`
**Purpose:** Standardized page section wrapper with optional overline, title, subtitle, and background variant.

| Prop | Type | Default | Description |
|---|---|---|---|
| `bg` | `"default" \| "dark" \| "accent" \| "light" \| "mesh"` | `"default"` | Background variant |
| `overline` | `string` | -- | Small uppercase text above title |
| `title` | `string` | -- | Section heading |
| `subtitle` | `string` | -- | Description text below heading |
| `centered` | `boolean` | `true` | Center-align header block |
| `grain` | `boolean` | `false` | Add noise texture overlay |
| `containerClassName` | `string` | -- | Extra classes for inner container |

**Used by:** Various page sections

---

## Layout Components (`src/components/layout/`)

### Header

**File:** `src/components/layout/Header.tsx`
**Purpose:** Sticky site header with logo, desktop navigation, mega menus, action buttons, and mobile hamburger trigger.

| Prop | Type | Default | Description |
|---|---|---|---|
| `navigation` | `NavItem[]` | Default nav items | Navigation structure |
| `phone` | `string` | `"(949) 675-4451"` | Phone number display |
| `brandName` | `string` | `"Interior Designers Institute"` | Brand text for logo alt |

**Features:** Hover-intent mega menus (150ms close delay), click-outside close, focus management, responsive (desktop nav hidden below `lg`, hamburger hidden at `lg`+).

**Dependencies:** Button, MobileNav, ProgramsMegaMenu, AdmissionsMegaMenu, AboutMegaMenu

---

### Footer

**File:** `src/components/layout/Footer.tsx`
**Purpose:** Site footer with brand info, link columns, social icons, newsletter form, and accreditation logos.

| Prop | Type | Default | Description |
|---|---|---|---|
| `brandName` | `string` | `"Interior Designers Institute"` | Brand name |
| `tagline` | `string` | `"Where Creative Talent..."` | Tagline text |
| `address` | `string` | Full address | Campus address |
| `phone` | `string` | `"(949) 675-4451"` | Phone number |
| `email` | `string` | `"contact@idi.edu"` | Email address |
| `columns` | `FooterColumn[]` | Default columns | Link columns |
| `socialLinks` | `SocialLink[]` | Default socials | Social media links |

**Dependencies:** NewsletterForm, Image (Next.js)

---

### MobileNav

**File:** `src/components/layout/mobile-nav.tsx`
**Purpose:** Full-screen slide-in drawer navigation for mobile devices.

| Prop | Type | Description |
|---|---|---|
| `navigation` | `NavItem[]` | Navigation items |
| `open` | `boolean` | Controls visibility |
| `onClose` | `() => void` | Close handler |
| `phone` | `string` | Phone number for call button |

**Features:** Accordion sub-navigation, escape-to-close, body scroll lock, backdrop overlay, sticky bottom bar with phone and Apply buttons.

---

### NewsletterForm

**File:** `src/components/layout/newsletter-form.tsx`
**Purpose:** Simple email signup form in the footer.

No props. Renders an email input and "Join" button that POSTs to `/api/newsletter`.

---

### Mega Menus

**Files:**
- `src/components/layout/mega-menu/mega-menu-wrapper.tsx` -- Animated container (GSAP clip-path reveal)
- `src/components/layout/mega-menu/mega-menu-data.ts` -- Static data for menu items
- `src/components/layout/mega-menu/programs-mega-menu.tsx` -- Programs mega menu (6-column grid with featured cell)
- `src/components/layout/mega-menu/admissions-mega-menu.tsx` -- Admissions mega menu
- `src/components/layout/mega-menu/about-mega-menu.tsx` -- About mega menu

**MegaMenuWrapper Props:**

| Prop | Type | Description |
|---|---|---|
| `open` | `boolean` | Controls visibility |
| `onClose` | `() => void` | Close handler |
| `id` | `string` | Unique id for aria-controls |
| `children` | `ReactNode` | Menu content |

**Features:** GSAP clip-path "unfold" animation, staggered cell fade-in, escape key support, reduced-motion fallback.

---

## Section Components (`src/components/sections/`)

Homepage and reusable page sections.

### HeroSection

**File:** `src/components/sections/hero-section.tsx`
**Purpose:** Full-viewport cinematic hero with animated headline, CTA buttons, and background image.

No props. Uses `homepageCopy.hero` data and `NEXT_CLASS_DATE` constant. GSAP timeline animation with safety timeout.

**Dependencies:** Button, Badge, Image, MotionProvider (via useMotion)

---

### BentoGrid

**File:** `src/components/sections/bento-grid.tsx`
**Purpose:** Asymmetric grid showcasing programs with images, countup stats, and links.

No props. Uses inline program card data. Features AnimatedSection and CountUp components.

**Dependencies:** AnimatedSection, CountUp, Badge, Image

---

### GallerySection

**File:** `src/components/sections/gallery-section.tsx`
**Purpose:** Horizontal-scrolling student work gallery with parallax effects.

No props. Uses inline gallery item data. GSAP horizontal scroll animation with ScrollTrigger.

**Dependencies:** Image, MotionProvider (via useMotion)

---

### StatsSection

**File:** `src/components/sections/stats-section.tsx`
**Purpose:** Four-column statistics bar (42+ years, 4 programs, 15:1 ratio, 1000+ graduates).

No props. Uses inline stats data with CountUp animation.

**Dependencies:** AnimatedSection, CountUp

---

### TestimonialsSection

**File:** `src/components/sections/testimonials-section.tsx`
**Purpose:** Editorial-style testimonial cards.

No props. Uses `homepageCopy.testimonials` data.

---

### CampusSection

**File:** `src/components/sections/campus-section.tsx`
**Purpose:** Split-screen section with campus description and location badges.

No props. Uses `homepageCopy.campus` data.

---

### CTAFinale

**File:** `src/components/sections/cta-finale.tsx`
**Purpose:** Dramatic closing CTA section with animated headline and action buttons.

No props. Uses constants for class date, phone, and email. Features MagneticButton and GSAP animations.

**Dependencies:** MagneticButton, Badge, Button, MotionProvider

---

### ConsumerInfoBar

**File:** `src/components/sections/consumer-info-bar.tsx`
**Purpose:** Regulatory compliance bar linking to disclosures and accreditation info.

---

### CTABanner

**File:** `src/components/sections/cta-banner.tsx`
**Purpose:** Reusable call-to-action banner section.

---

### FAQAccordion

**File:** `src/components/sections/faq-accordion.tsx`
**Purpose:** Expandable FAQ section with accordion behavior.

---

### MissionCTA

**File:** `src/components/sections/mission-cta.tsx`
**Purpose:** Mission statement with call-to-action.

---

### ProgramsSection

**File:** `src/components/sections/programs-section.tsx`
**Purpose:** Programs overview grid for listing pages.

---

### RequestInfoSection

**File:** `src/components/sections/request-info-section.tsx`
**Purpose:** Section prompting visitors to request information.

---

### SocialProofBar

**File:** `src/components/sections/social-proof-bar.tsx`
**Purpose:** Compact bar displaying social proof metrics.

---

### WhyIDISection

**File:** `src/components/sections/why-idi-section.tsx`
**Purpose:** Grid displaying reasons to attend IDI from `whyIDIPoints` data.

---

## Form Components (`src/components/forms/`)

### ContactForm

**File:** `src/components/forms/contact-form.tsx`
**Purpose:** Contact/request-info form. Submits to `POST /api/contact`.

No props. Self-contained with internal state management.

**Fields:** How found, first name, last name, contact method, email, phone, address (street/city/state/zip), message.

**Features:** Phone formatting (`+1 (999) 999-9999`), loading spinner, success state with "Send another" option, error display.

**Dependencies:** Button

---

### ApplicationForm

**File:** `src/components/forms/application-form.tsx`
**Purpose:** Multi-section application form for degree programs. Submits to `POST /api/apply`.

No props. Self-contained with extensive internal state.

**Features:** Schedule selection (combined, hybrid, single), personal info, SSN with masking, file upload (diploma) via `/api/upload`, phone formatting, terms acceptance. No payment required.

**Dependencies:** Button

---

### TourForm

**File:** `src/components/forms/tour-form.tsx`
**Purpose:** Campus tour scheduling form. Submits to `POST /api/tour`.

No props. Self-contained.

**Fields:** Name, email, phone, preferred date (min +1 day, max +90 days), preferred time slot, group size, program interest, comments.

**Dependencies:** Button

---

### CloverPaymentFields

**File:** `src/components/forms/clover-payment-fields.tsx`
**Purpose:** Embeds Clover SDK iframe fields for PCI-compliant card tokenization.

**Ref API (via `forwardRef`):**

| Method | Returns | Description |
|---|---|---|
| `createToken()` | `Promise<{ token: string } \| { errors: string[] }>` | Tokenizes card data |

**Props:**

| Prop | Type | Description |
|---|---|---|
| `onReady` | `() => void` | Called when Clover fields are mounted |
| `onError` | `(msg: string) => void` | Called on SDK initialization failure |

**Renders:** Card number, expiration date, CVV, and billing ZIP iframe fields. Loads Clover SDK via `next/script` with `lazyOnload` strategy.

**Used by:** Registration form (Step 4 -- Payment)

---

### Registration Form (Multi-Step)

**Directory:** `src/components/forms/registration/`

**Files:**
- `registration-form.tsx` -- Orchestrator with step navigation, validation, file upload, and form submission
- `registration-types.ts` -- TypeScript types (`RegistrationFormData`, `StepProps`, `StepId`, `ProgramType`, `CoursePreference`)
- `registration-constants.ts` -- Schedule options, payment tiers, how-found options, step labels, initial form data, style tokens
- `step-program.tsx` -- Step 1: Program type and schedule selection
- `step-personal.tsx` -- Step 2: Personal information (name, address, contact, SSN, emergency contact)
- `step-education.tsx` -- Step 3: Education background and course preferences
- `step-payment.tsx` -- Step 4: Payment tier, Clover fields, terms, how-found

**Flow:**
1. User selects program type and schedule (Step 1)
2. Enters personal information (Step 2)
3. Provides education background (Step 3)
4. Selects payment tier, enters card info via Clover, accepts terms (Step 4)
5. On submit: tokenize card -> upload diploma file if present -> POST `/api/register`

**Payment tiers:**
- $95 -- Registration fee only
- $1,195 -- Partial payment (reg + first tuition + supplies)
- $2,795 -- Full payment

**Dependencies:** Button, CloverPaymentFields

---

## SEO Components (`src/components/seo/`)

### JsonLd

**File:** `src/components/seo/JsonLd.tsx`
**Purpose:** Injects JSON-LD structured data into the page head.

| Prop | Type | Description |
|---|---|---|
| `data` | `Record<string, unknown>` | JSON-LD data object |

**Used by:** Root layout (Organization schema)

---

## Animation Components (`src/components/animations/`)

See [ARCHITECTURE.md](./ARCHITECTURE.md#animation-system) for full details.

### Summary

| Component | Purpose |
|---|---|
| `MotionProvider` | GSAP context provider with reduced-motion detection |
| `AnimatedSection` | Scroll-triggered fade-up with child stagger |
| `CountUp` | Animated number counter on scroll |
| `TextReveal` | Word-by-word text reveal animation |
| `ParallaxImage` | Scroll-scrubbed parallax for images |
| `MagneticButton` | Mouse-following magnetic pull effect |

All exported from `src/components/animations/index.ts`.

---

## Component Dependency Graph

```
Root Layout
├── JsonLd
├── MotionProvider
│   ├── Header
│   │   ├── Button
│   │   ├── MobileNav
│   │   │   └── Button
│   │   ├── ProgramsMegaMenu
│   │   │   ├── MegaMenuWrapper (GSAP)
│   │   │   ├── Badge
│   │   │   └── Button
│   │   ├── AdmissionsMegaMenu
│   │   │   ├── MegaMenuWrapper (GSAP)
│   │   │   └── Badge
│   │   └── AboutMegaMenu
│   │       ├── MegaMenuWrapper (GSAP)
│   │       └── Badge
│   │
│   ├── Page Content
│   │   ├── HeroSection (GSAP, Badge, Button)
│   │   ├── BentoGrid (AnimatedSection, CountUp, Badge)
│   │   ├── GallerySection (GSAP)
│   │   ├── StatsSection (AnimatedSection, CountUp)
│   │   ├── TestimonialsSection
│   │   ├── CampusSection
│   │   ├── ConsumerInfoBar
│   │   ├── CTAFinale (GSAP, MagneticButton, Badge, Button)
│   │   ├── ContactForm (Button)
│   │   ├── ApplicationForm (Button)
│   │   ├── TourForm (Button)
│   │   └── RegistrationForm
│   │       ├── StepProgram
│   │       ├── StepPersonal
│   │       ├── StepEducation
│   │       ├── StepPayment
│   │       │   └── CloverPaymentFields (Clover SDK)
│   │       └── Button
│   │
│   └── Footer
│       └── NewsletterForm
```
