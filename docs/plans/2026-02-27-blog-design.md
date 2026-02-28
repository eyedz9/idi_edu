# IDI Blog — Design Document

**Date:** 2026-02-27
**Status:** Approved

---

## Overview

A blog section for the IDI website with 3 pillar categories and 30 long-form articles (10 per pillar). Targets industry professionals and students. Tone is educational and authoritative with IDI's confident personality. Each article is 1500-2500 words with curated Unsplash images.

---

## Pillar Categories

### 1. Design in Southern California
The SoCal design scene: showrooms, trends, projects, the design corridor from LA to Laguna. Positions IDI at the center of it all.

### 2. Interior Design Practice
The craft and business of design: techniques, materials, technology, career insights. Educational authority content.

### 3. Student & Alumni Spotlight
Real work, real careers. Showcases IDI's output and community. Social proof that converts.

---

## Architecture

### Routes
- `/blog` — Listing page with category filters, featured post hero
- `/blog/[slug]` — Article detail page with rich content

### Data Layer
- `src/data/blog.ts` — All 30 articles as typed data
- `src/types/index.ts` — `BlogPost`, `BlogCategory` interfaces
- Helper functions: `getBlogBySlug()`, `getBlogsByCategory()`, `getAllBlogPosts()`

### Components
- `src/app/blog/page.tsx` — Blog listing page
- `src/app/blog/[slug]/page.tsx` — Article detail page
- Reuse: `Section`, `Card`, `Badge`, `Button`, `Breadcrumb`, `AnimatedSection`, `JsonLd`

---

## Data Model

```typescript
interface BlogCategory {
  slug: string;
  name: string;
  description: string;
}

interface BlogContentSection {
  heading: string;
  body: string;   // paragraph text
  image?: string;  // optional section image
  imageAlt?: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;           // 1-2 sentence summary for cards
  category: string;          // category slug
  author: string;
  publishedAt: string;       // ISO date string
  readTime: string;          // e.g. "8 min read"
  featuredImage: string;     // Unsplash URL
  featuredImageAlt: string;
  content: BlogContentSection[];  // structured body sections
  tags: string[];
  relatedSlugs: string[];    // 2-3 related article slugs
}
```

---

## Page Designs

### Blog Listing (`/blog`)
- Hero: "IDI Journal" headline, subtitle, featured/latest post card
- Category filter bar (All, Design in SoCal, Practice, Spotlight)
- Grid of article cards (image, category badge, title, excerpt, read time)
- Standard CTA banner at bottom

### Article Detail (`/blog/[slug]`)
- Hero: full-width featured image with gradient overlay
- Breadcrumb: Home > Blog > Category > Article
- Meta bar: author, date, category badge, read time
- Content body: heading + paragraph sections with optional inline images
- Related articles grid (2-3 cards)
- CTA: "Start Your Design Journey" banner

### SEO
- `generateMetadata()` per article (title, description, OG image)
- `<JsonLd>` with BlogPosting schema (headline, author, datePublished, image)
- `generateStaticParams()` for static pre-rendering
- Add blog entries to `src/app/sitemap.ts`

---

## Article Plan (30 Articles)

### Pillar 1: Design in Southern California (10)
1. The SoCal Design Corridor: A Guide to Southern California's Interior Design Ecosystem
2. Inside the Laguna Design Center: What Every Designer Should Know
3. Coastal Modernism: How Southern California Shaped a Design Movement
4. Newport Beach Architecture: A Walking Tour of Iconic Interiors
5. The Stonemill Design Center: Sourcing Materials Like a Pro
6. Biophilic Design in Southern California: Bringing the Outdoors In
7. Mid-Century Modern in Palm Springs: Lessons for Today's Designers
8. Luxury Residential Design in Orange County: Trends and Standards
9. Sustainable Design in Southern California: Climate-Responsive Interiors
10. The Future of SoCal Design: Emerging Trends Shaping Our Built Environment

### Pillar 2: Interior Design Practice (10)
1. Color Theory in Practice: How Professional Designers Build Palettes
2. Space Planning Fundamentals: The Invisible Art of Interior Design
3. Material Specification: A Professional's Guide to Surfaces and Finishes
4. From Concept to Construction Documents: The Design Process Explained
5. Lighting Design for Interiors: Layers, Techniques, and Technology
6. The Business of Interior Design: Building a Sustainable Practice
7. Revit vs. SketchUp vs. AutoCAD: Choosing the Right Design Software
8. Hospitality Design: Creating Spaces That Tell Stories
9. Healthcare Design: Evidence-Based Interiors That Heal
10. The NCIDQ Exam: What It Is, Why It Matters, and How to Prepare

### Pillar 3: Student & Alumni Spotlight (10)
1. From Certificate to Career: How IDI Graduates Launch Their Design Practices
2. Senior Studio Showcase: Inside IDI's Capstone Design Projects
3. A Day in the Life of an Interior Design Student at IDI
4. Alumni Profile: Designing Hospitality Spaces Across Southern California
5. The MIA Thesis Process: Graduate Research That Shapes the Profession
6. Student Competition Wins: IDI at ASID and IIDA Regional Events
7. Career Paths in Interior Design: Where IDI Graduates Work Today
8. The Power of Small Classes: How IDI's 15:1 Ratio Changes Everything
9. From Corporate Career to Design Studio: Career Changers at IDI
10. Portfolio Building: How IDI Students Create Work That Gets Them Hired

---

## Styling

Follow existing site conventions:
- Backgrounds: `bg-plum-900`, `bg-plum-800`
- Text: `text-parchment`, `text-sandstone`
- Accents: `text-pink-500`, `bg-pink-500/15`
- Cards: `bg-white/5 border border-white/10 rounded-2xl`
- Typography: `font-heading` (Playfair Display), `font-body` (Inter)
- Animations: `AnimatedSection` for scroll reveals
