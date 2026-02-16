# Devil's Advocate Review: IDI.edu Website Rebuild PRD v1.0

**Reviewer:** Devil's Advocate (Pre-Build Critical Analysis)
**Date:** February 11, 2026
**PRD Version Reviewed:** 1.0

**Severity Ratings:**
- **CRITICAL** -- Blocks launch or creates legal/compliance risk. Must resolve before development proceeds.
- **HIGH** -- Will cause significant rework if not addressed early. Resolve in Phase 1.
- **MEDIUM** -- Should be addressed but can be handled mid-project. Resolve by Phase 3.
- **LOW** -- Nice-to-fix, non-blocking. Can defer to post-launch.

---

## 1. Content Accuracy & URL Mapping Gaps

### 1.1 URL Redirect Map is Dangerously Incomplete [CRITICAL]

The PRD redirect map (Section 8.4) lists only 10 WordPress-to-Next.js redirects. The live site has **at least 30+ unique page URLs** that are NOT covered. Every unmapped URL becomes a 404 after launch, destroying SEO equity accumulated over 40+ years.

**URLs found on the live site NOT in the PRD redirect map:**

| Live WordPress URL | Notes |
|---|---|
| `/about/why-attend/` | PRD has `/about/why-idi` but no redirect from `/about/why-attend/` |
| `/idi-campus/` | No redirect. PRD maps to `/campus-life` but URL is different |
| `/interior-designer-faculty/` | PRD maps to `/about/faculty` but no redirect defined |
| `/staff-directory/` | PRD maps to `/about/staff` but no redirect defined |
| `/interior-design-careers/` | PRD maps to `/about/careers` but no redirect defined |
| `/job-posting-form/` | PRD maps to `/job-posting` but no redirect defined |
| `/design-gallery/` | Not in redirect map. Different from `/students/design-gallery/` |
| `/graduation-2023-gallery/` | Not in redirect map |
| `/graduation-2024-gallery/` | Not in redirect map |
| `/graduation-2025-gallery/` | Not in redirect map |
| `/online-book-store/` | PRD has `/bookstore` but no redirect defined |
| `/students/designing-graduates/` | Contains alumni success stories -- NOT in PRD sitemap at all |
| `/students/student-portfolios/` | No redirect defined |
| `/award-winning-idi-students/` | PRD has `/campus-life/awards` but no redirect defined |
| `/financial-aid/documents-disclosures/` | Not in redirect map. PRD maps to `/admissions/financial-aid` |
| `/disclosures/bppe-disclosures/` | Not in redirect map. PRD has `/disclosures/bppe` |
| `/disclosures/title-ix-information/` | Not in redirect map. PRD has `/disclosures/title-ix` |
| `/admissions/download-catalog/` | Not in redirect map |
| `/programs-of-study/download-catalog/` | Not in redirect map |
| `/programs-of-study/associate-of-arts-degree-interior-design/` | PRD redirect uses `/programs-of-study/associate-of-arts/` which is WRONG -- the actual WP URL is longer |
| `/programs-of-study/bachelor-of-arts-degree-interior-design/` | Same issue -- PRD truncates the actual URL |
| `/contact-us/` | Not in PRD redirect map, but IS in `next.config.ts` |

**Additionally, `next.config.ts` has redirects that do NOT match the PRD redirect map.** The config file contains redirects for URLs like `/associate-of-arts-in-interior-design`, `/about-the-college`, `/admissions-2`, `/career-services`, `/gallery`, and `/catalog-and-disclosures` -- none of which appear on the live site navigation. These may be legacy URLs that need verification, but the PRD and the config are out of sync.

**Action Required:** Before ANY development proceeds, we need a complete crawl of idi.edu (use Screaming Frog or `wget --spider`) to capture every indexed URL. Cross-reference with Google Search Console for all URLs with impressions. Build the definitive redirect map from that data, not from a partial manual list.

### 1.2 PRD Route Naming vs. Live Site Mismatch [HIGH]

The PRD uses `/about/history` but the live site is `/about/idi-history/`. The redirect map does include this mapping (`/about/idi-history/` -> `/about/history`), so the redirect itself is handled. However, there is a deeper naming inconsistency pattern:

- PRD: `/about/why-idi` vs Live: `/about/why-attend/`
- PRD: `/campus-life/student-life` vs Live: `/students/student-life/`
- PRD: `/campus-life/gallery` vs Live: `/students/design-gallery/` AND `/design-gallery/` (two different URLs for same content)
- PRD: `/admissions/financial-aid` vs Live: `/financial-aid/documents-disclosures/` (the live site has financial aid as a top-level section, not under admissions)

This is not inherently a problem -- the new IA restructures things -- but it means the redirect map must be exhaustive. Currently it is not.

### 1.3 Program URL Slug Mismatch [HIGH]

The PRD uses `/programs/master-interior-architecture` (no hyphen between "master" and "interior"). The Footer component in the codebase uses `/programs/master-of-interior-architecture` (with "of"). These need to be consistent. The PRD and the code disagree on day one.

Similarly, the PRD Section 8.4 redirect for the AA program points from `/programs-of-study/associate-of-arts/` but the actual live URL is `/programs-of-study/associate-of-arts-degree-interior-design/`. The PRD redirect will miss the real URL entirely.

### 1.4 Missing "Designing Graduates" Page [MEDIUM]

The live site has `/students/designing-graduates/` which contains **alumni success stories and career placements** -- Amy Fotheringham at Kenneth Ussenko Design, Breeana Anderson at Designworks, etc. This is prime social proof content that the PRD mentions wanting (Section 6.2 "Graduate testimonials with real photos") but the page is not listed in the PRD sitemap, not in the redirect map, and the content has not been scraped. This page IS the testimonials data source.

### 1.5 Financial Aid Documents Not Fully Inventoried [HIGH]

The PRD Section 8.1 lists 9 disclosure PDFs. The live site's Financial Aid Documents & Disclosures page (`/financial-aid/documents-disclosures/`) contains at least 4 additional PDFs NOT in the PRD:

| Missing Document | URL |
|---|---|
| Estimated Tuition Fees and Expenses per Academic Year | `/wp-content/uploads/2025/10/2025-26-IDI-estimated-tuition-fees.pdf` |
| Financial Assistance & Disclosures | `/wp-content/uploads/2025/10/Fin-Assistance-Disclosures-10032025.pdf` |
| FERPA Disclosure 2025-26 | `/wp-content/uploads/2026/02/FERPA-Disclosure-202526.pdf` |
| Title IV Return of Funds Disclosure (R2T4) | `/wp-content/uploads/2024/07/R2T4-disclosure.pdf` |

The PRD lists the "Return of Title IV Funds Policy" from a 2018 upload, but the live site has a newer R2T4 disclosure from 2024. We may be migrating stale documents.

---

## 2. Technical Risks

### 2.1 GSAP SplitText is a Club GreenSock Plugin [CRITICAL]

The PRD (Section 4.2, Animation Inventory) explicitly specifies:

> Hero Section: "Cinematic text reveal with staggered characters" using "gsap.timeline, **SplitText (Club)**"

**SplitText is NOT included in the free GSAP package.** It requires a Club GreenSock membership ($99/year for Shockingly Green or $199/year for Simply Green). The `package.json` installs `gsap: ^3.14.2` which is the free tier -- SplitText will not be available.

**The existing `useTextReveal.ts` hook sidesteps this** by implementing word-level splitting manually (DOM manipulation to wrap each word in a span). This is a reasonable workaround for word-level animation, but the PRD specifically calls for **character-level** reveal ("staggered characters"). Character-level splitting is significantly more complex to do manually -- you need to handle:
- Individual character wrapping while preserving word spacing
- Line-break detection after splitting (characters don't know which line they are on)
- Proper `aria-label` preservation for screen readers
- Performance with 50+ individual character animations on mobile

**Options:**
1. Buy Club GreenSock license ($99-$199/year) and use the real SplitText
2. Accept word-level splitting (current hook approach) and update the PRD spec to match
3. Implement manual character-level splitting, accepting the complexity and edge cases

**Recommendation:** Option 2 is most pragmatic. Word-level reveal still looks cinematic. The current `useTextReveal.ts` already works and handles accessibility. Update the PRD to say "staggered words" instead of "staggered characters."

### 2.2 Next.js SSR + GSAP Hydration Challenges [HIGH]

The codebase already shows awareness of this (`"use client"` directives, `typeof window !== "undefined"` guards, `nullTargetWarn: false`). However, there are unaddressed risks:

- **ScrollTrigger.normalizeScroll(true)** is called out in the PRD (Section 4.2) but not yet implemented. This feature hijacks native scroll behavior and can cause conflicts with Next.js App Router navigation. On mobile, it can break pull-to-refresh, elastic scrolling, and address bar show/hide behavior. This is a known pain point in the GSAP community.
- **Page transitions via GSAP + App Router** are listed in the Animation Inventory. Next.js App Router does NOT have a built-in page transition API. Implementing this requires either: (a) wrapping the entire app in a transition provider that captures route changes and delays rendering (fragile), or (b) using the experimental `next/view-transitions` API (unstable). This has been the #1 source of bugs in GSAP + Next.js projects. The PRD allocates 0 days specifically for this integration.
- **GSAP registerPlugin called multiple times:** The codebase calls `gsap.registerPlugin(ScrollTrigger)` in `motion-provider.tsx`, `useTextReveal.ts`, `useAnimatedSection.ts`, and `useCountUp.ts`. While GSAP is idempotent for double-registration, this pattern indicates the plugin registration architecture is not centralized and could lead to tree-shaking issues.

### 2.3 Tailwind CSS 4.x Compatibility [MEDIUM]

The `package.json` installs `tailwindcss: ^4` and `@tailwindcss/postcss: ^4`. Tailwind CSS 4 uses a fundamentally different configuration approach:

- There is NO `tailwind.config.ts` file. Tailwind 4 uses CSS-based configuration with `@theme` blocks, which the `globals.css` already uses correctly.
- However, the PRD (Section 4.1) says "design token system via tailwind.config" and Phase 1 says "Colors, typography, spacing implemented in tailwind.config.ts." This is outdated advice for Tailwind 4. The actual implementation in `globals.css` is correct, but the PRD documentation is misleading.
- `tailwind-merge` (installed as `tailwind-merge: ^3.4.0`) may have compatibility issues with custom Tailwind 4 theme tokens. The `cn()` utility uses it, so any merge failures would affect the entire component system. This needs testing.
- The Tailwind 4 `@theme inline` directive used in `globals.css` is correct but relatively new. Verify that all custom color tokens (`bg-brand-900`, `text-accent-500`, etc.) resolve correctly in production builds.

### 2.4 "No CMS" Content Update Workflow is Unrealistic [HIGH]

The PRD Section 17 describes this workflow for non-technical staff:

> 1. Open the relevant file in the GitHub repository
> 2. Make changes directly in GitHub's web editor
> 3. Create a pull request
> 4. Review the preview URL
> 5. Merge to main

The IDI staff directory shows: Executive Director, Director of Education, Associate Director of Education, Admissions Student Services, Career Placement, Financial Aid Administrator, and a Librarian. **None of these roles imply Git/GitHub proficiency.** Asking a Financial Aid Administrator to edit JSON files in GitHub, create pull requests, and review Vercel preview deployments is not realistic.

The PRD acknowledges this ("For clients who prefer a CMS-like editing experience, a future enhancement could add a headless CMS") but frames it as optional. In practice, this will be one of the first post-launch complaints. **Recommend budgeting Tina CMS or a similar Git-backed visual editor from launch, or at minimum, creating a detailed operations manual with screenshots for each content update type.**

Content that will need regular updates:
- Enrollment dates and registration links (every term)
- Tuition figures (annually)
- New PDFs for disclosures (as regulations require)
- Blog posts (2-4/month per PRD)
- Faculty changes (departures/hires)
- Graduation gallery photos (annually)

### 2.5 Next.js Version Mismatch [LOW]

The PRD specifies "Next.js 15 (App Router)" but `package.json` installs `next: 16.1.6`. This is Next.js 16, not 15. Next.js 16 was released in 2026 and has differences from v15 (React 19 default, changed caching semantics, etc.). The PRD should be updated to reflect the actual version being used, and any Next.js 15-specific guidance should be verified against v16 behavior.

### 2.6 Font Loading Double-Import [LOW]

The codebase loads fonts in two places:
- `layout.tsx` uses `next/font/google` (Playfair_Display, Inter) -- this is the correct, optimized approach
- `globals.css` uses `@import url("https://fonts.googleapis.com/css2?...")` -- this is a redundant, render-blocking external request

The Google Fonts CSS import in `globals.css` should be removed. It defeats the purpose of `next/font` optimization and adds an unnecessary network request that will hurt LCP.

---

## 3. Missing Content

### 3.1 Testimonials / Graduate Success Stories Not Scraped [CRITICAL]

The PRD Homepage spec (Section 9.1, Section 6) calls for "2-3 graduate testimonials with photos, program completed, and current career position." The Testimonial type is defined in `types/index.ts`. But:

- **Zero testimonial content has been captured.** The `/src/data/` directory is empty.
- The live site's `/students/designing-graduates/` page contains alumni career placement stories but these have NOT been scraped or documented in the PRD.
- The PRD does not mention `/students/designing-graduates/` anywhere in the sitemap or content migration plan.
- We do not know if IDI has signed photo/testimonial releases from graduates.

**Action Required:** Scrape `/students/designing-graduates/` content immediately. Confirm with IDI whether graduate quotes and photos can be used. If not, testimonials will need to be fabricated with placeholder data, undermining the "social proof" strategy that the entire funnel architecture depends on.

### 3.2 Faculty Content Not Scraped or Structured [HIGH]

The PRD calls for faculty profile cards (Section 5.2, `/about/faculty`), and the live site has 18 faculty members with detailed bios at `/interior-designer-faculty/`. This content has NOT been scraped into the project. The `/src/data/` directory is empty -- no faculty JSON or data file exists.

Faculty data needed per person: name, credentials, education, professional affiliations, current role, bio text, and photo. The photo assets from the live site have not been downloaded either.

### 3.3 Staff Directory Content Not Scraped [HIGH]

The live site has 7 staff members at `/staff-directory/` with names, titles, and email addresses. This is not captured anywhere in the project.

### 3.4 Blog Content Migration Has No Foundation [HIGH]

The PRD (Section 8.3) specifies blog migration from WordPress:
- "Export all WordPress blog posts via WP REST API or WXR export"
- "Convert posts to MDX files stored in `/content/blog/[slug].mdx`"

**Issues:**
- There is no `/content/` directory in the project structure
- No WP REST API export has been performed
- No WXR export has been obtained
- We do not know how many blog posts exist on the current site
- We do not know if we have WordPress admin access to perform exports
- The PRD allocates only 2 days for "Blog migration: Export WordPress posts, convert to MDX" -- if there are 100+ posts, this is insufficient
- No contentlayer or MDX processing library is in `package.json`

**Question for client:** Do we have WordPress admin access? If not, WP REST API is still accessible publicly for published posts (`/wp-json/wp/v2/posts`), but featured images and author data may require authentication.

### 3.5 Student Portfolio and Gallery Images Not Captured [MEDIUM]

The PRD describes:
- Horizontal scroll gallery of 8-12 curated student design images (homepage)
- Masonry grid gallery at `/campus-life/gallery`
- Featured student portfolio projects at `/campus-life/portfolios`

The `/public/images/placeholder/` directory is empty. No gallery images have been downloaded from the live site. The live site gallery at `/design-gallery/` contains images from `/wp-content/uploads/2018/11/` and `/2018/12/` (referenced in PRD Section 8.2) but these have not been fetched.

### 3.6 Video Assets Not Downloaded [MEDIUM]

The PRD specifies two video files:
- `idi_hero_new_video.mp4` (hero background)
- `idi-15-sec.mp4` (short promo)

The `/public/video/` directory is empty. These files have not been downloaded. The hero video is central to the homepage experience and video compression/optimization will take time.

---

## 4. Design System Gaps

### 4.1 Multiple WCAG AA Contrast Failures [CRITICAL]

I calculated WCAG 2.1 contrast ratios for the color combinations specified in the PRD. **Three combinations fail AA for normal text (4.5:1 minimum):**

| Combination | Contrast Ratio | AA Normal (4.5:1) | AA Large (3:1) |
|---|---|---|---|
| accent-500 (#B8860B) on white (#FFFFFF) | **3.25:1** | **FAIL** | PASS |
| accent-500 (#B8860B) on warm-50 (#FAF8F5) | **3.07:1** | **FAIL** | PASS |
| neutral-500 (#737373) on warm-50 (#FAF8F5) | **4.47:1** | **FAIL** (barely) | PASS |
| white (#FFFFFF) on accent-500 (#B8860B) | **3.25:1** | **FAIL** | PASS |
| neutral-700 (#404040) on warm-50 (#FAF8F5) | 9.78:1 | PASS | PASS |
| neutral-700 (#404040) on white (#FFFFFF) | 10.37:1 | PASS | PASS |
| white (#FFFFFF) on brand-900 (#0F0F1A) | 19.03:1 | PASS | PASS |
| accent-400 (#D4A843) on brand-900 (#0F0F1A) | 8.59:1 | PASS | PASS |

**The gold accent (#B8860B) fails contrast against BOTH white and warm-50 backgrounds.** This is the primary CTA button color. The PRD specifies "bg-accent-500 text-white" for primary buttons (see button.tsx line 10). Every "Apply Now" and "Request Info" button on the site fails WCAG AA.

This is not just an accessibility issue -- it is a legal compliance risk for an educational institution that receives federal financial aid (Section 508 compliance is mandatory).

**The neutral-500 (#737373) used for captions and secondary text** at 4.47:1 on warm-50 technically fails the 4.5:1 threshold by 0.03 points. This is borderline and could be fixed by darkening neutral-500 slightly to #6F6F6F or lighter.

**Fixes needed:**
- Darken accent-500 to approximately #8B6914 to achieve 4.5:1 on white, OR
- Use brand-900 or neutral-700 text on accent-500 background buttons instead of white, OR
- Keep accent-500 for large text only (24px+ regular, 18px+ bold) where 3:1 is acceptable, and use a darker gold for body-text-sized elements
- Darken neutral-500 by 2-3 shades for body text usage

### 4.2 The Section Component Has an Accessibility Issue [MEDIUM]

The `Section` component (section.tsx) uses `bg="accent"` which renders as `bg-accent-500 text-white`. As shown above, white text on accent-500 background fails AA contrast. Any section using this variant will have accessibility violations.

### 4.3 Missing Design Tokens for Interactive States [LOW]

The color system defines hover states (accent-400) but is missing:
- Focus ring color for dark backgrounds
- Active/pressed state colors
- Visited link colors
- Selection highlight color
- Skip-to-content link styling

---

## 5. Enrollment Funnel Gaps

### 5.1 Formstack Dependency Creates an Uncontrollable Conversion Bottleneck [HIGH]

The entire funnel architecture (Section 6) culminates in "Apply Now" buttons that link to an external Formstack form at `interiordesignersinstitute.formstack.com`. The new site has zero control over:

- Formstack page load performance (likely adds 2-4 seconds to the conversion path)
- Formstack mobile responsiveness
- Formstack visual design (will not match the new site's design system)
- Formstack form field order or validation UX
- Analytics tracking across the domain boundary (cross-domain GA4 tracking is unreliable)

The PRD's elaborate funnel optimization (persistent CTAs, exit intent modals, urgency triggers, trust badges) all lead to a cliff edge when the user clicks "Apply Now" and lands on a generic Formstack page that looks nothing like the site they just experienced.

**Recommendation:** Investigate whether Formstack has an embeddable JavaScript widget or API. If so, embed the form directly on `/admissions/apply` within the site's design system. If not, at minimum implement cross-domain tracking and consider a pre-registration step that captures lead data before the Formstack redirect.

### 5.2 Exit Intent Modal on Mobile [MEDIUM]

The PRD specifies "Exit intent modal: Modal with 'Before you go -- download our catalog' on desktop (triggered once per session)."

Exit intent detection on desktop relies on `mouseout` events toward the browser chrome. On mobile:
- There is no reliable "exit intent" signal
- The `beforeunload` event is unreliable on iOS Safari
- Scroll-up patterns and back-button detection are heuristic at best
- Intrusive modals on mobile violate Google's interstitial penalty guidelines, which can hurt SEO rankings

**Recommendation:** Limit exit intent to desktop only. On mobile, use a less intrusive "sticky banner" or timed bottom-sheet instead. The PRD should explicitly state "desktop only" for exit intent.

### 5.3 GDPR/CCPA Compliance for Lead Capture Forms [HIGH]

The PRD specifies 4 different lead capture forms (Quick Inquiry, Catalog Request, Tour Scheduling, Newsletter). None of the form specifications include:

- Cookie consent banner requirement (California residents under CCPA)
- Privacy policy checkbox or link at point of data collection
- Opt-in consent for marketing communications (email/SMS)
- Data retention policy
- Right-to-delete mechanism
- How collected data flows to Formstack, Resend/SendGrid, and any CRM

As an educational institution in California, IDI is subject to CCPA. If they recruit students from the EU (unlikely but possible for the MIA program), GDPR also applies.

**Action Required:** Add privacy/consent requirements to every form specification in the PRD. Add a cookie consent component to the global layout.

### 5.4 Multiple Forms with No CRM Integration Specified [MEDIUM]

The PRD mentions form submissions going to "email service or Formstack API" but does not specify:
- Where do Quick Inquiry submissions go? (Email to admissions? A spreadsheet? A CRM?)
- How does the admissions team manage and follow up on leads?
- Is there a response SLA?
- Do catalog request submissions trigger an automated email with the PDF attached?

Without a CRM or lead management system, form submissions may go into a void. The Resend/SendGrid integration handles transactional emails but not lead nurturing.

---

## 6. Performance Concerns

### 6.1 Video Hero + GSAP Animations vs. <1.5s LCP [HIGH]

The PRD targets LCP < 1.5s while specifying:
- Full-viewport video background on the homepage hero
- GSAP character-level text reveal animation
- Parallax floating elements
- Multiple animation layers

**The math does not work:**
- Hero video poster image (target < 200KB per PRD) must be the LCP element
- Poster image will be served via `next/image` which adds processing time
- GSAP must initialize before animations run, adding to perceived load time
- Even with a poster image, video decode will compete for main thread time

A more realistic LCP target for a video hero page is 2.0-2.5 seconds. The 1.5s target is achievable for non-hero pages but not for the homepage as specified.

**Recommendation:** Set LCP target to < 2.0s for homepage, < 1.5s for interior pages. Use a static optimized hero image as the true LCP element, with video loading progressively after first paint.

### 6.2 <500KB Total Page Weight is Unrealistic [HIGH]

Asset budget breakdown from the PRD:
- JavaScript initial bundle: < 150KB gzipped
- CSS: < 30KB gzipped
- Fonts: < 100KB (Playfair Display + Inter)
- Hero image poster: < 200KB

**That is already 480KB before any actual page content, component code, or images below the fold.**

GSAP 3 core is ~24KB gzipped. ScrollTrigger adds ~10KB. The `@gsap/react` adapter adds more. React 19 + React DOM is ~40KB gzipped. Next.js framework overhead is ~80-90KB gzipped. That alone is ~150KB+ just for the framework, not counting application code.

Add two Google Fonts (even subsetted to Latin, Playfair Display is a heavy serif font) and the 150KB JS budget is already exceeded by the framework alone.

**Recommendation:** Revise the budget to < 800KB for homepage first load, < 500KB for subsequent navigations (which benefit from caching and code splitting). Track the budget during development and make tradeoff decisions early.

### 6.3 Hero Video at <2MB [MEDIUM]

A 2MB H.264 video at 1920x1080 resolution can achieve approximately 8-12 seconds of acceptable quality at a bitrate of ~1.3-2 Mbps. The current hero video on the live site (`idi_hero_new_video.mp4`) is likely much larger. Compressing it to 2MB while maintaining the "cinematic" quality the PRD demands will require:

- Reducing resolution to 1280x720 or lower
- Aggressive compression that may introduce visible artifacts
- Possibly trimming the video to 6-8 seconds
- Using WebM/VP9 for better compression at same quality

This is achievable but requires deliberate video production work, not just a simple ffmpeg encode.

---

## 7. Scope Creep Risks

### 7.1 12-Week Timeline is Extremely Aggressive [CRITICAL]

The PRD specifies building the following in 12 weeks:

- ~30 unique pages with custom layouts
- 12+ distinct GSAP animation types
- Complete component library (buttons, cards, forms, navigation, modals, sections, media)
- Blog system with MDX processing and pagination
- 4 lead capture forms with validation, submission handling, and email integration
- Masonry gallery with lightbox
- Horizontal scroll gallery with momentum
- Program comparison interactive tool
- Custom cursor implementation
- Page transitions
- Multi-step form with progress bar
- Video player with custom controls
- PDF inline viewer
- Countdown timer
- Exit intent modal
- GA4 event tracking for 16+ events
- Complete SEO implementation with structured data for 5 schema types
- Full accessibility compliance testing
- Playwright E2E test suite
- Vitest unit tests
- Visual regression testing
- Blog content migration from WordPress
- PDF document migration
- Video compression and optimization
- Cross-browser testing
- Responsive design at 3 breakpoints minimum

For a solo developer or small team, this is 16-20 weeks of work minimum, not 12. The timeline does not account for:
- Client review cycles and revision rounds
- Content that has not been scraped yet (faculty, staff, blog, testimonials, galleries)
- Photo sourcing and replacement of Unsplash placeholders
- Inevitable scope changes during client reviews
- Bug fixes discovered during QA

**Recommendation:** Either (a) cut scope aggressively (remove custom cursor, page transitions, blog at launch, program comparison tool), or (b) extend timeline to 16-18 weeks, or (c) increase team size. See specific cut recommendations below.

### 7.2 Custom Cursor Adds Complexity for Near-Zero UX Benefit [LOW]

The PRD specifies "Custom cursor: Magnetic effect pulling cursor toward interactive elements; scale pulse on hover" using `gsap.quickTo`. This:

- Only works on desktop (no cursor on touch devices)
- Adds JavaScript overhead on every mousemove event
- Can interfere with accessibility (users with motor impairments may find magnetic cursors disorienting)
- Provides no conversion benefit
- Takes ~1-2 days to implement and test properly

**Recommendation:** Cut this feature entirely. It is pure decoration that serves no strategic purpose.

### 7.3 Page Transitions Are Notoriously Fragile with Next.js App Router [HIGH]

As mentioned in Section 2.2, GSAP page transitions with Next.js App Router require intercepting route changes, delaying unmount of the current page, animating out, then animating the new page in. This is one of the hardest things to implement reliably in Next.js because:

- App Router uses React Server Components which do not have lifecycle hooks
- `useEffect` cleanup timing is not guaranteed
- Concurrent rendering can cause animation state conflicts
- Back/forward navigation must also be handled
- Scroll restoration conflicts with animated page entrances

**Recommendation:** Defer page transitions to a post-launch enhancement. Launch with standard Next.js navigation (instant page swaps with loading states). This alone saves 3-5 days of development and eliminates a class of bugs.

### 7.4 Blog Migration Requires WordPress Access We May Not Have [MEDIUM]

The PRD assumes we can export blog content via WP REST API or WXR. Questions:

- Do we have WordPress admin credentials?
- Is the WP REST API publicly accessible? (Many WordPress sites disable it)
- How many blog posts exist? (Determines migration effort)
- Are there custom post types or custom fields?
- Are blog images stored in WordPress media library or external CDNs?

If we cannot access the WP REST API or admin panel, blog migration becomes a web scraping exercise, which is significantly more work than the 2 days allocated.

### 7.5 Program Comparison Interactive Tool [MEDIUM]

The PRD specifies `/programs/compare` as an "Interactive comparison tool: filterable matrix of all 4 programs." For 4 programs, a static comparison table would be equally effective and take 1 hour instead of 1-2 days. An interactive filterable comparison tool is overkill when there are only 4 items to compare.

**Recommendation:** Replace with a well-designed static comparison table. Add interactivity post-launch if analytics show users want it.

### 7.6 PDF Inline Viewer [LOW]

The PRD mentions "Digital catalog viewer (embedded PDF or interactive page-flip)" at `/programs/catalog`. Browser native PDF rendering is inconsistent (especially on mobile). Building a custom PDF viewer or "interactive page-flip" is a significant scope item that serves few users. Most users will download the PDF.

**Recommendation:** Provide a direct PDF download link with a well-designed landing page that summarizes catalog highlights. Skip the embedded viewer.

---

## 8. Codebase Observations (Current State)

### 8.1 Header Navigation Inconsistency [LOW]

The Header component links to `/student-life` but the PRD specifies `/campus-life`. This is a day-one inconsistency that should be resolved now before more components are built against the wrong routes.

### 8.2 Footer Missing Certificate Course [LOW]

The Footer lists programs (AA, BA, MIA) but omits the Certificate Course. Since the Certificate Course targets a different audience (Design Enthusiasts, Section 3.3) and has the lowest barrier to entry ($2,400), it should have footer visibility.

### 8.3 MotionProvider Not Used in Layout [MEDIUM]

The `MotionProvider` component exists in `motion-provider.tsx` but is NOT wrapped around the app in `layout.tsx`. The GSAP hooks (`useTextReveal`, `useAnimatedSection`, `useCountUp`) all call `useMotion()` which depends on the `MotionProvider` context. Without it, `animationsEnabled` will always be `true` (the context default), meaning `prefers-reduced-motion` will be ignored in production. This is an accessibility violation.

---

## 9. Summary of Recommended Actions

### Must Fix Before Development Continues (CRITICAL)
1. Complete a full URL crawl of idi.edu and build a comprehensive redirect map
2. Fix the WCAG contrast failures on accent-500 (gold) color -- affects every CTA button
3. Add GSAP SplitText licensing decision to the project (buy Club license or accept word-level animation)
4. Scrape testimonials/alumni content from `/students/designing-graduates/`
5. Add GDPR/CCPA privacy consent requirements to form specs
6. Re-evaluate 12-week timeline against actual scope

### Should Fix in Phase 1 (HIGH)
7. Resolve program URL slug inconsistency between PRD and codebase
8. Remove redundant Google Fonts CSS import from `globals.css`
9. Add `MotionProvider` to `layout.tsx`
10. Scrape and structure faculty/staff content
11. Determine WordPress admin access for blog migration
12. Scrape all Financial Aid PDFs (4 missing from inventory)
13. Define CRM/lead management workflow for form submissions
14. Revise performance budgets to realistic targets
15. Address Formstack UX cliff in the conversion funnel
16. Update PRD to reference Next.js 16 (not 15)
17. Correct PRD references to `tailwind.config.ts` (Tailwind 4 uses CSS-based config)

### Should Fix by Phase 3 (MEDIUM)
18. Limit exit intent to desktop only
19. Download and compress video assets
20. Download gallery and portfolio images
21. Replace interactive program comparison tool with static table
22. Fix Header `/student-life` route to match PRD `/campus-life`
23. Add missing design tokens for interactive states

### Can Defer to Post-Launch (LOW)
24. Cut custom cursor feature
25. Cut page transitions (launch with standard navigation)
26. Cut PDF inline viewer (use direct download)
27. Add Certificate Course to footer
28. Resolve `next.config.ts` redirect map entries that reference URLs not found on the live site

---

*This review is intentionally aggressive. Its purpose is to surface every possible issue now, when changes are cheap, rather than in Week 10, when they are expensive. Not every item requires action, but every item deserves a conscious decision.*
