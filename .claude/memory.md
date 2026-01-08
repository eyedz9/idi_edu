# Interior Designers Institute - Project Memory

> **Last Updated**: January 7, 2026
>
> This file tracks the current state of the IDI website build. The orchestrator MUST read this before starting work and update it after completing features.

---

## 🎯 Three Core Objectives

| Objective | Status | Key Requirements |
|-----------|--------|------------------|
| **AI Search Optimization (AEO)** | 🟡 In Progress | Schema.org JSON-LD on homepage, semantic HTML, structured content |
| **Clear Sales Funnel** | 🟡 In Progress | Persistent CTAs, navigation scrolls to sections |
| **Modern + Usable Design** | 🟡 In Progress | Rose color palette, glass effects, premium animations |

---

## Project Overview

**Interior Designers Institute (IDI)** is Orange County's only dedicated interior design school, established in 1984. The site must convey:
- **Excellence** - 40 years of CIDA-accredited design education
- **Creativity** - Inspiring future interior designers
- **Career-Ready** - 88% graduation rate, industry connections
- **Personal** - Small classes (10:1 ratio), practicing professionals as faculty
- **Accessible** - Flexible scheduling for working students

### Core Message
> "Design Your Future"
> 40 years of interior design education. CIDA accredited. 100% practicing professionals.

---

## Current Status

### Phase: **4 - Refinement (Vibing)**
### Completion: **~70%**
### Build Status: **Passing** ✅

| Phase | Description | Status |
|-------|-------------|--------|
| 0 | Project Setup | ✅ Complete |
| 1 | JSON Blueprint (Style) | ✅ Complete |
| 2 | Build Framework (Structure) | ✅ Complete |
| 3 | Senior Designer Animations | ✅ Complete |
| 4 | Refinement (Vibing) | 🟡 In Progress |
| 5 | Content Integration | ⬜ Not Started |
| 6 | Production Audit | ⬜ Not Started |

---

## Design System Status

### Color Palette: Rose Editorial Theme v3.0.0

| Token | Value | Usage |
|-------|-------|-------|
| `--bg-primary` | #142030 | Dark section backgrounds |
| `--bg-secondary` | #1E3442 | Cards on dark |
| `--bg-light` | #E9D8C8 | Light section backgrounds |
| `--text-primary` | #E9D8C8 | Text on dark |
| `--text-dark` | #142030 | Text on light |
| `--accent-gold` | #FF5C8D | Pink accent (CTAs, highlights) |
| `--accent-terracotta` | #732553 | Eggplant accent |

### Typography: Perfect Fourth Scale (1.333)

**Base font size: 18px**

| Element | Size | Pixels (at 18px base) |
|---------|------|----------------------|
| h1 | 5.61rem | ~101px |
| h2 | 4.209rem | ~76px |
| h3 | 3.157rem | ~57px |
| h4 | 2.369rem | ~43px |
| h5 | 1.777rem | ~32px |
| h6 | 1.333rem | ~24px |
| p | 1rem | 18px |
| small | 0.75rem | ~13.5px |

### Fonts
- **Hero**: Bebas Neue (large headlines)
- **Heading**: Bricolage Grotesque
- **Display**: Playfair Display (italic accents)
- **Body**: Inter
- **Mono**: JetBrains Mono (stats, numbers)

---

## Pages Status

| Page | Route | Status | Notes |
|------|-------|--------|-------|
| Home | `/` | ✅ Complete | All sections built |
| About | `/about` | ✅ Complete | — |
| Programs Overview | `/programs` | ✅ Complete | — |
| Certificate | `/programs/certificate` | ✅ Complete | Sales funnel landing page template |
| Associate | `/programs/associate` | ✅ Complete | — |
| Bachelor | `/programs/bachelor` | ✅ Complete | — |
| Masters | `/programs/masters` | ✅ Complete | — |
| Admissions | `/admissions` | ✅ Complete | — |
| Student Life | `/student-life` | ✅ Complete | — |
| Contact | `/contact` | ✅ Complete | — |

---

## Homepage Sections Status

| # | Section | ID | Status | Notes |
|---|---------|-----|--------|-------|
| 1 | Hero | — | ✅ Complete | Video background with fallback image |
| 2 | Programs | `#programs` | ✅ Complete | Glass effect cards with hover glow |
| 3 | Why IDI | `#why-idi` | ✅ Complete | Texture background (0.25 opacity) |
| 4 | Stats | `#stats` | ✅ Complete | Animated gradient background |
| 5 | Accreditation | `#accreditation` | ✅ Complete | Texture background (0.25 opacity) |
| 6 | Student Orgs | — | ✅ Complete | Animated gradient background |
| 7 | Location | `#location` | ✅ Complete | Texture background (0.25 opacity) |
| 8 | CTA | `#contact` | ✅ Complete | Animated gradient background |
| 9 | Footer | — | ✅ Complete | Improved spacing |

---

## Navigation

**Updated January 7, 2026**

- Dropdown menu removed
- All nav items scroll to homepage sections
- Logo scrolls to top of page
- Sections scroll to top of viewport (no offset)

| Nav Item | Target |
|----------|--------|
| Logo | Scroll to top |
| Programs | `#programs` |
| Why IDI | `#why-idi` |
| Stats | `#stats` |
| Accreditation | `#accreditation` |
| Location | `#location` |
| Contact | `#contact` |
| Apply Now | `#contact` |

---

## Certificate Landing Page (Sales Funnel Template)

**Path**: `/programs/certificate`

This page serves as the template for all program landing pages. Key sections:

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Strong value prop, key stats (12 weeks, $2,795, 15 max class), dual CTAs |
| 2 | Why In-Person | Key differentiator - 6 benefits of on-campus vs online |
| 3 | Curriculum | 12-week breakdown with topics per module |
| 4 | Perfect For | 4 target audiences (career explorers, real estate pros, enthusiasts, future degree students) |
| 5 | Testimonials | 3 student stories with photos and outcomes |
| 6 | Pricing | All-inclusive pricing card with "What's Included" list + urgency banner |
| 7 | FAQ | 10 questions for AEO optimization |
| 8 | Final CTA | Multiple contact options (Apply, Visit, Call, Email) |

**To duplicate for other programs:**
1. Copy `/programs/certificate/page.tsx`
2. Update program-specific data (tuition, duration, curriculum)
3. Adjust messaging for target audience
4. Update FAQ answers for program specifics
5. For Bachelor page: emphasize CIDA accreditation

---

## Recent Updates (January 7, 2026)

### Typography
- [x] Set base font size to 18px
- [x] Implemented Perfect Fourth scale (1.333 ratio)
- [x] Added CSS variables for all type sizes (`--text-h1` through `--text-small`)
- [x] Added utility classes (`.text-h1` through `.text-small`)

### Navigation
- [x] Removed dropdown menu
- [x] Converted to anchor links for homepage sections
- [x] Logo scrolls to top of page
- [x] Sections scroll to top of viewport

### Program Cards
- [x] Added glass effect with gradient background
- [x] Implemented backdrop blur
- [x] Added shine overlay
- [x] Enhanced shadows (deep shadow + pink accent ring)
- [x] Added hover glow effect with animated gradient border
- [x] Increased card gap for breathing room

### Section Backgrounds
- [x] Light sections (WhyIDI, Accreditation, Location): Unsplash texture at 0.25 opacity
- [x] Dark sections (Programs, Stats, StudentOrgs, CTA): Texture images removed, using animated gradients only

### Footer
- [x] Improved spacing (6rem top, 4rem bottom)
- [x] Better touch targets (w-11 h-11 for buttons)
- [x] Typography updates

### Hero
- [x] Video background (`/idi_hero.mp4`)
- [x] Fallback image (`/idi_hero.jpg`)
- [x] Cinematic animation on video

### Certificate Landing Page (Sales Funnel)
- [x] Sales-focused hero with key stats
- [x] "Why In-Person Beats Online" differentiator section
- [x] 12-week curriculum breakdown
- [x] "Perfect For" target audience section
- [x] Testimonials with 5-star ratings
- [x] Pricing card with "What's Included" list
- [x] 10 FAQ items for AEO optimization
- [x] Final CTA with multiple contact options

---

## Components Status

| Component | Status | Notes |
|-----------|--------|-------|
| Header/Navigation | ✅ Complete | Anchor-based, no dropdown |
| Footer | ✅ Complete | Improved spacing |
| Program Cards | ✅ Complete | Glass effect with hover glow |
| Stat Cards | ✅ Complete | — |
| Feature Cards | ✅ Complete | — |
| CTA Buttons | ✅ Complete | — |

---

## CSS Classes Added

### Program Card Glass Effect
```css
.program-card - Glass card with gradient background
.program-card::before - Animated gradient border (appears on hover)
.program-card:hover - Glowing pink shadow + border color shift
```

### Type Scale Utilities
```css
.text-h1 through .text-small - Font size utility classes
```

---

## Known Issues

| Issue | Severity | Notes |
|-------|----------|-------|
| None currently | — | Build passing |

---

## Next Steps

### Phase 4: Refinement (Remaining)
- [ ] Review mobile responsiveness
- [ ] Check all hover states
- [ ] Verify animation performance (60fps)
- [ ] Contrast audit on all text

### Phase 5: Content Integration
- [ ] Replace placeholder images with real campus photos
- [ ] Add real faculty photos
- [ ] Integrate student work samples
- [ ] Final copy review

### Phase 6: Production Audit
- [ ] Lighthouse Performance >90
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] SEO meta tags review
- [ ] Mobile testing on real devices

---

## File Inventory

### Key Files Modified (January 7, 2026)
- `src/app/globals.css` - Type scale, program card styles
- `src/components/layout/Header.tsx` - Simplified navigation
- `src/components/sections/Programs.tsx` - Glass effect cards
- `src/components/sections/WhyIDI.tsx` - Texture background
- `src/components/sections/Accreditation.tsx` - ID + texture
- `src/components/sections/Location.tsx` - ID + texture
- `src/components/sections/CTA.tsx` - ID added
- `src/components/sections/Stats.tsx` - Texture removed
- `src/components/sections/StudentOrgs.tsx` - Texture removed
- `src/app/programs/certificate/page.tsx` - Complete sales funnel redesign (template for other programs)

---

## Deployment

- **Platform**: Vercel (planned)
- **Domain**: idi.edu
- **Status**: Not deployed (development)

---

**Remember**: Update this file after completing any significant work!
