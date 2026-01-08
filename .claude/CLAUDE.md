# Interior Designers Institute - Claude Code Orchestrator

> **Project**: IDI - Interior Design Education Website
> **Type**: Multi-page marketing website with premium design + AI optimization
> **Stack**: Next.js 16, TypeScript, Tailwind CSS 3.4, Framer Motion 12
> **Year**: 2026
> **Status**: Phase 0 - Project Initialization

⚠️ **IMPORTANT**: Check `memory.md` for current project state before starting work!

---

## 🎯 Project Overview

Interior Designers Institute (IDI) is Orange County's only dedicated interior design school, established in 1984. This website must convey:
- **Excellence** - 40 years of CIDA-accredited design education
- **Creativity** - Inspiring future interior designers
- **Career-Ready** - 88% graduation rate, industry connections
- **Personal** - Small classes (10:1 ratio), practicing professionals as faculty
- **Accessible** - Flexible scheduling for working students

### 🎯 Three Core Objectives

1. **AI Search Optimization (AEO)** - Structured for AI answer engines (ChatGPT, Perplexity, Google AI)
2. **Clear Sales Funnel** - Guide visitors from awareness → consideration → application
3. **Modern + Usable** - Unique design that doesn't sacrifice findability

### Core Message
> "Design Your Future"
> 40 years of interior design education. CIDA accredited. 100% practicing professionals.

### Brand Identity
| Attribute | Value |
|-----------|-------|
| Theme | Warm Neutral with Creative Accents |
| Primary Font | Playfair Display (Elegant serif for headlines) |
| Body Font | Inter (Clean sans-serif) |
| Accent Font | JetBrains Mono (Stats, dates, numbers) |
| Primary Color | Warm Charcoal (#2D2A26) |
| Secondary Color | Cream (#FAF8F5) |
| Accent Color | Terracotta (#C4725D) |
| Highlight | Gold (#B8977E) |

---

## 🎨 Complete Color System

```json
{
  "colors": {
    "background": {
      "primary": "#FAF8F5",
      "secondary": "#F5F0EB",
      "card": "#FFFFFF",
      "dark": "#2D2A26"
    },
    "text": {
      "primary": "#2D2A26",
      "secondary": "#5A5651",
      "muted": "#8A8580",
      "inverse": "#FAF8F5"
    },
    "accent": {
      "terracotta": "#C4725D",
      "terracottaHover": "#A85D4A",
      "gold": "#B8977E",
      "goldLight": "#D4C4B0"
    },
    "status": {
      "success": "#4A7C59",
      "warning": "#D4A84B",
      "error": "#C45D5D"
    },
    "border": {
      "default": "rgba(45, 42, 38, 0.1)",
      "hover": "rgba(45, 42, 38, 0.2)"
    }
  }
}
```

---

## 🤖 AI Search Optimization (AEO) Strategy

AI answer engines (ChatGPT, Perplexity, Google AI Overviews, Claude) pull answers from well-structured content. Every page must be optimized for AI retrieval.

### Structural Requirements

#### 1. Schema.org Markup (JSON-LD)
Every page MUST include appropriate schema:
```json
{
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Interior Designers Institute",
  "description": "CIDA-accredited interior design school in Newport Beach, CA",
  "foundingDate": "1984",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1061 Camelback Street",
    "addressLocality": "Newport Beach",
    "addressRegion": "CA",
    "postalCode": "92660"
  },
  "accreditation": ["CIDA", "ACCSC", "BPPE"],
  "hasCredential": [
    {"@type": "EducationalOccupationalCredential", "name": "Certificate of Completion"},
    {"@type": "EducationalOccupationalCredential", "name": "Associate of Arts"},
    {"@type": "EducationalOccupationalCredential", "name": "Bachelor of Arts"},
    {"@type": "EducationalOccupationalCredential", "name": "Master of Interior Architecture"}
  ]
}
```

#### 2. FAQ Sections with Schema
Each program page MUST have an FAQ section with `FAQPage` schema:
- "How long is the [program] program?"
- "What is the tuition for [program]?"
- "Is [program] CIDA accredited?"
- "Can I work while attending [program]?"
- "What software will I learn?"

#### 3. Content Structure for AI Extraction
```
H1: Clear, keyword-rich page title
├── Lead paragraph: Direct answer to "what is this page about?"
├── H2: Section with clear topic
│   ├── First sentence: Direct answer (AI pulls this)
│   └── Supporting details
├── H2: Another clear section
│   └── Bullet points for scannable facts
└── Summary/CTA: Reinforces key points
```

#### 4. Target AI Queries
Optimize content to answer these queries:
- "best interior design schools in Orange County"
- "CIDA accredited interior design programs California"
- "how to become an interior designer in California"
- "interior design degree cost California"
- "interior design certificate programs near me"
- "can I work while getting interior design degree"
- "what software do interior designers use"

#### 5. Content Patterns for AEO
| Pattern | Example |
|---------|---------|
| Definition first | "The Bachelor of Arts in Interior Design is a CIDA-accredited 4-year program..." |
| Numbers early | "At $40,600 total tuition, the Associate degree takes 24-48 months..." |
| Lists for features | "Students learn: Revit, AutoCAD, SketchUp, Photoshop, and InDesign" |
| Comparisons | "Unlike online programs, IDI offers hands-on studio experience with..." |

### Technical AEO Requirements
- [ ] Semantic HTML5 (`<article>`, `<section>`, `<aside>`, `<nav>`)
- [ ] Proper heading hierarchy (never skip levels)
- [ ] Meta descriptions that answer the query (150-160 chars)
- [ ] Open Graph tags for social/AI preview
- [ ] Fast load times (<2.5s LCP) - AI prefers fast sites
- [ ] Mobile-first (AI increasingly pulls from mobile index)
- [ ] Internal linking with descriptive anchor text

---

## 🎯 Sales Funnel Strategy

### The Enrollment Journey

```
┌─────────────────────────────────────────────────────────────────────┐
│  AWARENESS                                                          │
│  "I'm interested in interior design as a career"                    │
│  ─────────────────────────────────────────────────────────────────  │
│  Entry Points: Homepage, Blog, AI Search, Social                    │
│  Goal: Educate about interior design careers + IDI                  │
│  CTAs: "Explore Programs" | "Why Interior Design?"                  │
├─────────────────────────────────────────────────────────────────────┤
│  CONSIDERATION                                                      │
│  "Is IDI the right school for me?"                                  │
│  ─────────────────────────────────────────────────────────────────  │
│  Pages: Programs, About, Why IDI, Student Life                      │
│  Goal: Build trust, show value, overcome objections                 │
│  CTAs: "Schedule a Visit" | "Download Catalog" | "Talk to Advisor"  │
├─────────────────────────────────────────────────────────────────────┤
│  DECISION                                                           │
│  "I want to apply to IDI"                                           │
│  ─────────────────────────────────────────────────────────────────  │
│  Pages: Admissions, Tuition, Financial Aid, Apply                   │
│  Goal: Remove friction, answer final questions                      │
│  CTAs: "Apply Now" | "Request Info" | "Calculate Net Price"         │
├─────────────────────────────────────────────────────────────────────┤
│  ACTION                                                             │
│  "I'm enrolling at IDI"                                             │
│  ─────────────────────────────────────────────────────────────────  │
│  Pages: Application Form, Registration                              │
│  Goal: Smooth application experience                                │
│  CTAs: "Submit Application" | "Complete Registration"               │
└─────────────────────────────────────────────────────────────────────┘
```

### CTA Hierarchy (Every Page)
| Position | CTA Type | Example |
|----------|----------|---------|
| Header (sticky) | Primary | "Apply Now" (button) |
| Header (sticky) | Secondary | "Schedule Visit" (link) |
| Hero section | Primary | Context-specific main CTA |
| Mid-page | Soft | "Have questions? Talk to an advisor" |
| Bottom | Primary | "Ready to start? Apply Now" |

### Conversion Points
| Conversion | Value | Tracking |
|------------|-------|----------|
| Page view | Low | Analytics |
| Catalog download | Medium | Form + email capture |
| Visit scheduled | High | Calendar booking |
| Info request | High | Form submission |
| Application started | Very High | Form step tracking |
| Application submitted | Highest | Confirmation page |

### Objection Handling (Address on Site)
| Objection | Answer Location |
|-----------|-----------------|
| "Too expensive" | Financial Aid page, Net Price Calculator |
| "Can I work while studying?" | Flexible scheduling on Programs pages |
| "Is it worth it?" | Career outcomes, employer logos, alumni success |
| "Not accredited" | CIDA prominently featured everywhere |
| "Too far" | Location benefits (design centers nearby) |
| "No experience needed?" | Admissions requirements (100% acceptance) |

### Lead Capture Strategy
1. **Soft Capture**: Email for catalog/info (low commitment)
2. **Medium Capture**: Schedule campus visit (Calendly integration)
3. **Hard Capture**: Start application (multi-step form)

---

## 🎨 Design Philosophy: Modern + Unique + Usable

### The Balance
```
UNIQUE ←──────────────────────────────────────→ USABLE
        Creative layouts     │     Clear navigation
        Bold typography      │     Readable content
        Unexpected colors    │     Accessible contrast
        Animation/motion     │     Fast performance
        Artistic imagery     │     Informative content
                            │
                    IDI SITS HERE
                    (70% unique, 30% conventional)
```

### Design Principles

#### 1. "Design School Should Look Designed"
- The website IS a portfolio piece showing what IDI teaches
- Every design choice should demonstrate design excellence
- If it looks like a generic school template, we've failed

#### 2. "Creativity Within Clarity"
- Bold visual choices that don't hide information
- Unconventional layouts with conventional navigation
- Surprising moments that don't confuse users

#### 3. "Show, Don't Just Tell"
- Student work galleries (proof of outcomes)
- Campus/studio photography (aspirational)
- Process imagery (what learning looks like)

### Visual Differentiation Strategy
| Element | Generic School Site | IDI Approach |
|---------|---------------------|--------------|
| Hero | Stock photo + text overlay | Full-bleed student work or studio shot + typographic treatment |
| Navigation | Horizontal text links | Elegant minimal nav with creative hover states |
| Cards | Rounded rectangles | Asymmetric layouts, mixed media |
| Stats | Numbers in circles | Editorial/magazine-style data visualization |
| Color | Blue/green/safe | Warm neutrals + terracotta/gold accents |
| Typography | Single sans-serif | Serif/sans pairing with intentional contrast |

### Usability Non-Negotiables
Despite creative freedom, these MUST be maintained:
- [ ] Navigation visible and consistent on every page
- [ ] Search/find any page in 3 clicks max
- [ ] Mobile hamburger menu with full navigation
- [ ] Form fields clearly labeled and accessible
- [ ] Error states clear and helpful
- [ ] Loading states for any async content
- [ ] Breadcrumbs on interior pages
- [ ] Footer with complete site map
- [ ] Phone number clickable (tel: link)
- [ ] Address linked to Google Maps

### Information Architecture Priority
Users must easily find:
1. **Programs** - What can I study? (top nav, homepage)
2. **Cost** - How much? (clear path from programs)
3. **Apply** - How do I start? (persistent CTA)
4. **Contact** - Who do I talk to? (header + footer)
5. **Visit** - Can I see the campus? (prominent CTA)

---

## 🖼️ Placeholder Media Strategy

Use high-quality placeholder images and videos from Unsplash and Pexels until client provides actual campus/student photography.

### Image Sources

#### Unsplash (Primary for Images)
```
Base URL: https://images.unsplash.com/photo-{ID}?w={width}&q=80&fit=crop
API: https://api.unsplash.com (requires API key for production)
```

**Recommended Search Terms:**
| Content Need | Search Terms |
|--------------|--------------|
| Hero/Campus | "interior design studio", "architecture studio", "design workspace" |
| Students | "design students", "creative students", "architecture students" |
| Classrooms | "design classroom", "art studio class", "workshop space" |
| Materials | "fabric samples", "material palette", "design materials" |
| Sketching | "interior sketch", "architectural drawing", "design drafting" |
| Software | "designer computer", "CAD screen", "3D modeling" |
| Furniture | "furniture design", "modern furniture", "interior furniture" |
| Newport Beach | "newport beach california", "orange county coast", "california beach city" |

**Direct Unsplash URLs to Use:**
```typescript
// Hero images
const heroImages = [
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80", // modern studio
  "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80", // design office
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80", // interior workspace
];

// Student/classroom images
const studentImages = [
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80", // collaboration
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80", // design review
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80", // students working
];

// Interior design work
const designImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80", // interior room
  "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80", // modern living
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80", // designed space
];

// Materials/samples
const materialImages = [
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", // fabric swatches
  "https://images.unsplash.com/photo-1615529328331-f8917597711f?w=600&q=80", // color samples
];
```

#### Pexels (Primary for Videos, Secondary for Images)
```
Base URL: https://www.pexels.com
Videos: https://www.pexels.com/video/{slug}-{ID}/
API: https://api.pexels.com (requires API key for production)
```

**Recommended Video Search Terms:**
| Content Need | Search Terms |
|--------------|--------------|
| Hero background | "interior design", "architecture studio", "design process" |
| Campus feel | "modern office", "creative workspace", "studio tour" |
| Design process | "sketching design", "3D modeling", "drafting" |
| Student life | "students collaborating", "creative team", "workshop" |

**Direct Pexels Video URLs to Use:**
```typescript
// Hero background videos (use with muted autoplay)
const heroVideos = [
  "https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7c02d", // design studio
  "https://videos.pexels.com/video-files/3129671/3129671-sd_640_360_30fps.mp4", // architectural
  "https://videos.pexels.com/video-files/6774063/6774063-sd_640_360_25fps.mp4", // modern interior
];

// Process videos
const processVideos = [
  "https://videos.pexels.com/video-files/5668887/5668887-sd_640_360_24fps.mp4", // sketching
  "https://videos.pexels.com/video-files/7989623/7989623-sd_640_360_25fps.mp4", // design work
];
```

### Image Requirements by Section

| Section | Size | Aspect | Count | Content |
|---------|------|--------|-------|---------|
| Hero | 1920x1080 | 16:9 | 1-3 | Studio/campus wide shot |
| Program Cards | 800x600 | 4:3 | 4 | Relevant to each program |
| About Hero | 1600x900 | 16:9 | 1 | Campus exterior or lobby |
| Faculty | 400x400 | 1:1 | 8-12 | Professional headshots |
| Student Work | 600x800 | 3:4 | 6-12 | Interior design projects |
| Campus Gallery | 800x600 | 4:3 | 6-10 | Classrooms, studios, spaces |
| Testimonials | 200x200 | 1:1 | 3-5 | Student/alumni headshots |

### Video Requirements

| Location | Duration | Resolution | Format | Audio |
|----------|----------|------------|--------|-------|
| Hero BG | 10-30s | 1080p min | MP4/WebM | Muted |
| Program intros | 30-60s | 720p+ | MP4 | Optional |
| Campus tour | 1-3min | 1080p | MP4 | With audio |

### Implementation Pattern

```tsx
// components/PlaceholderImage.tsx
import Image from 'next/image';

interface PlaceholderImageProps {
  category: 'hero' | 'student' | 'design' | 'material' | 'campus';
  index?: number;
  alt: string;
  className?: string;
  priority?: boolean;
}

const imageSets = {
  hero: [
    { src: 'https://images.unsplash.com/photo-1497366216548-37526070297c', credit: 'Unsplash' },
    // ... more
  ],
  student: [
    { src: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c', credit: 'Unsplash' },
    // ... more
  ],
  // ... other categories
};

export function PlaceholderImage({ category, index = 0, alt, className, priority }: PlaceholderImageProps) {
  const images = imageSets[category];
  const image = images[index % images.length];
  
  return (
    <Image
      src={`${image.src}?w=1200&q=80&fit=crop`}
      alt={alt}
      fill
      className={className}
      priority={priority}
      // Add Unsplash attribution as required by their license
    />
  );
}
```

### Attribution Requirements

**Unsplash**: Free to use, no attribution required but appreciated
```html
<!-- Optional but recommended -->
<span class="text-xs text-gray-400">Photo by [Photographer] on Unsplash</span>
```

**Pexels**: Free to use, no attribution required but appreciated
```html
<!-- Optional but recommended -->
<span class="text-xs text-gray-400">Video by [Creator] from Pexels</span>
```

### Placeholder-to-Real Transition Plan

1. **Phase 2-4**: Use Unsplash/Pexels placeholders throughout development
2. **Phase 5 (Content Integration)**: 
   - Client provides real campus photos
   - Client provides student/faculty photos (with releases)
   - Client provides student work samples
   - Replace placeholders systematically
3. **Fallback**: Keep 2-3 high-quality placeholders for missing content

### Image Optimization

All images must be:
- [ ] Served via Next.js Image component (automatic optimization)
- [ ] Lazy loaded (except hero/above-fold)
- [ ] Properly sized (use `sizes` prop)
- [ ] WebP format when possible (automatic via Next.js)
- [ ] Include descriptive alt text for accessibility + SEO

This project follows a phased workflow:

```
┌─────────────────────────────────────────────────────────────────┐
│  PHASE 0: Project Setup                                    🔄   │
│  └─ Initialize Next.js 16, install deps, configure Tailwind     │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 1: JSON Blueprint (Style)                           ⬜   │
│  └─ design-system agent creates tokens, colors, typography      │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 2: Build Framework (Structure)                      ⬜   │
│  └─ sections agent builds each page and section                 │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 3: Senior Designer Animations                       ⬜   │
│  └─ animations agent adds premium motion effects                │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 4: Refinement (Vibing)                              ⬜   │
│  └─ Polish contrast, images, micro-interactions                 │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 5: Content Integration                              ⬜   │
│  └─ Integrate all programs, faculty, and admissions content     │
├─────────────────────────────────────────────────────────────────┤
│  PHASE 6: Production Audit                                 ⬜   │
│  └─ Lighthouse, mobile testing, SEO, accessibility              │
└─────────────────────────────────────────────────────────────────┘
```

---

## 📄 Website Structure

### Pages
| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Hero, programs overview, why IDI, key stats |
| About | `/about` | History, mission, campus, accreditation |
| Programs | `/programs` | Overview of all 4 programs |
| Certificate | `/programs/certificate` | 12-week intro course details |
| Associate | `/programs/associate` | AA degree details |
| Bachelor | `/programs/bachelor` | BA degree (CIDA) details |
| Masters | `/programs/masters` | MIA degree details |
| Admissions | `/admissions` | How to apply, tuition, financial aid |
| Student Life | `/student-life` | Organizations, career services |
| Contact | `/contact` | Contact form, location, hours |

### Homepage Sections
| # | Section | Headline | Key Content |
|---|---------|----------|-------------|
| 1 | **Hero** | "Design Your Future" | 40 years, CIDA accredited, CTA: Apply Now |
| 2 | **Programs** | "Four Paths to Your Design Career" | Certificate, AA, BA, MIA cards |
| 3 | **Why IDI** | "Why Interior Designers Institute?" | Small classes, pro faculty, CIDA, flexibility |
| 4 | **Stats** | "By the Numbers" | 40 yrs, 88% grad rate, 10:1 ratio, 100% pros |
| 5 | **Accreditation** | "Industry Recognized" | CIDA, ACCSC logos and meaning |
| 6 | **Student Orgs** | "Professional Connections" | ASID, IIDA, NEWH, NKBA |
| 7 | **Location** | "Heart of Orange County Design" | Near Laguna Design Center, SOCO |
| 8 | **CTA** | "Start Your Design Journey" | Apply, Schedule Visit, Contact |
| 9 | **Footer** | — | Contact info, quick links, social |

---

## 🤖 Specialist Agents

| Agent | Purpose | Invoke For |
|-------|---------|------------|
| `design-system` | JSON Blueprint, CSS variables, Tailwind config | Colors, typography, spacing tokens |
| `sections` | Build website sections and pages | Section structure, content, layout |
| `animations` | Premium motion design | Scroll, hover, and interaction effects |
| `components` | Reusable UI components | Buttons, cards, forms, navigation |
| `tester` | Visual verification with Playwright | Screenshot verification |
| `stuck` | Human escalation | ANY error or uncertainty |
| `coder` | Generic implementation | Utilities, integrations, API |

---

## 📁 File Ownership

```
/src/
├── app/
│   ├── layout.tsx              → design-system (fonts, metadata)
│   ├── page.tsx                → sections (homepage)
│   ├── globals.css             → design-system (CSS variables)
│   ├── about/
│   │   └── page.tsx            → sections
│   ├── programs/
│   │   ├── page.tsx            → sections (programs overview)
│   │   ├── certificate/
│   │   │   └── page.tsx        → sections
│   │   ├── associate/
│   │   │   └── page.tsx        → sections
│   │   ├── bachelor/
│   │   │   └── page.tsx        → sections
│   │   └── masters/
│   │       └── page.tsx        → sections
│   ├── admissions/
│   │   └── page.tsx            → sections
│   ├── student-life/
│   │   └── page.tsx            → sections
│   └── contact/
│       └── page.tsx            → sections
├── components/
│   ├── layout/
│   │   ├── Header.tsx          → components
│   │   ├── Footer.tsx          → components
│   │   └── Navigation.tsx      → components
│   ├── sections/
│   │   ├── Hero.tsx            → sections
│   │   ├── Programs.tsx        → sections
│   │   ├── WhyIDI.tsx          → sections
│   │   ├── Stats.tsx           → sections
│   │   └── CTA.tsx             → sections
│   ├── ui/
│   │   ├── Button.tsx          → components
│   │   ├── Card.tsx            → components
│   │   ├── ProgramCard.tsx     → components
│   │   └── StatCard.tsx        → components
│   └── animations/
│       ├── ScrollReveal.tsx    → animations
│       ├── TextReveal.tsx      → animations
│       └── ImageParallax.tsx   → animations
├── lib/
│   ├── design-system.ts        → design-system
│   ├── animations.ts           → animations
│   └── content.ts              → sections (content data)
└── styles/
    └── design-system.json      → design-system

/tailwind.config.ts             → design-system
/memory.md                      → orchestrator
```

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 12 |
| Fonts | Playfair Display, Inter, JetBrains Mono |
| Icons | Lucide React |
| React | 19.0.0 |
| Deployment | Vercel |

### Dependencies
```json
{
  "dependencies": {
    "next": "^16.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "typescript": "^5.7.0",
    "tailwindcss": "^3.4.0",
    "@types/react": "^19.0.0",
    "@types/node": "^22.0.0"
  }
}
```

---

## 🔄 Mandatory Workflow

### Before ANY Work
```
1. Read /memory.md to understand current state
2. Check which phase we're in (0-6)
3. Identify next incomplete task
```

### Task Execution
```
1. Use TodoWrite to create specific task
   Format: [ ] [agent-name] Task description - Acceptance criteria
   
2. Delegate to ONE specialist agent via Task tool
   - coder/design-system for Phase 0 work
   - design-system for Phase 1 work
   - sections for Phase 2 work  
   - animations for Phase 3 work
   - Any agent for Phase 4-5 refinement

3. After agent completes, invoke tester agent
   - Navigate to localhost:3000
   - Take screenshot
   - Verify against acceptance criteria

4. On PASS: Mark todo complete, update memory.md
   On FAIL: Invoke stuck agent immediately
```

### After ANY Work
```
1. Update /memory.md with:
   - What was completed
   - Current phase status
   - Any blockers or notes
2. Report to user
```

---

## 📊 Key Content Data

### Institution Stats
| Stat | Value | Context |
|------|-------|---------|
| Years | 40 | Established 1984 |
| Graduation Rate | 88% | ACCSC reported |
| Student:Faculty | 10:1 | Small class advantage |
| Faculty | 100% | Practicing professionals |
| Studio Max | 22 | Average 15 students |
| Lecture Max | 49 | Personalized attention |

### Programs
| Program | Duration | Tuition | Credential |
|---------|----------|---------|------------|
| Certificate | 12 weeks | $2,795 | Certificate of Completion |
| Associate | 24-48 months | $40,600 | AA Degree |
| Bachelor | 30-54 months | $61,450 (total) | BA Degree (CIDA) |
| Masters | 12-15 months | $22,600 | MIA Degree |

### Accreditations
- **CIDA** - Council for Interior Design Accreditation (BA program)
- **ACCSC** - Accrediting Commission of Career Schools and Colleges
- **BPPE** - Bureau of Private Postsecondary Education

### Professional Organizations
- ASID (American Society of Interior Designers)
- IIDA (International Interior Design Association)
- NEWH (Hospitality Industry Network)
- NKBA (National Kitchen & Bath Association)

### Software Training
- Revit, SketchUp, AutoCAD, Photoshop, InDesign, TinkerCad, Design Manager

---

## 🚨 Critical Rules

### ✅ ALWAYS
- Read memory.md before starting
- Follow the phased workflow in order
- Use design tokens, never hardcode colors
- Test every change with tester agent
- Update memory.md after completing work
- Use JetBrains Mono for statistics/numbers
- Use warm neutral theme (cream backgrounds, charcoal text)
- Ensure CIDA accreditation is prominently featured

### ❌ NEVER
- Skip phases
- Implement without delegating to specialist
- Hardcode colors or spacing values
- Deploy without visual verification
- Continue past errors - invoke stuck agent
- Include salary data (marked as DO NOT USE in content)
- Include crossed-out faculty names from content doc
- Include outdated awards (2019 School of Excellence is too old)

---

## 🔧 Environment Setup

```bash
# Create project
npx create-next-app@latest . --typescript --tailwind --app --src-dir

# Install dependencies
cd idi
npm install framer-motion lucide-react

# Start development
npm run dev
```

---

## 📞 Contact Information

| Element | Value |
|---------|-------|
| Primary CTA | "Apply Now" / "Schedule a Visit" |
| Address | 1061 Camelback Street, Newport Beach, CA 92660 |
| Phone | (949) 675-4451 |
| Email | contact@idi.edu |
| Website | idi.edu |

---

## 🎯 Success Criteria

The site is complete when:
1. ⬜ All pages built and properly styled
2. ⬜ All animations smooth and performant (60fps)
3. ⬜ Mobile responsive (all breakpoints)
4. ⬜ Lighthouse Performance >90
5. ⬜ All text passes contrast checks
6. ⬜ CIDA accreditation prominently displayed
7. ⬜ Program information accurate and complete
8. ⬜ Contact forms functional
9. ⬜ SEO optimized with proper meta tags
10. ⬜ Accessibility compliant (WCAG 2.1 AA)

---

**Remember**: This is a prestigious design school with 40 years of history. The website should reflect the creativity, professionalism, and attention to detail that IDI teaches its students. Every design choice should demonstrate design excellence.