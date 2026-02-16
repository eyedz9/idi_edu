# QA Report: Tablet Layout (768x1024)

**Agent:** QA Agent 3 - Tablet Layout
**Viewport:** 768x1024 (actual content area: 754x844 after browser chrome)
**Date:** 2026-02-16
**Target:** localhost:3000
**Pages Tested:** 19 (17 loaded, 2 returned 404)

---

## Summary

- **Critical Issues:** 4
- **Warnings:** 7
- **Info:** 5

Overall, the site adapts well to the 768px tablet breakpoint. Navigation correctly switches to a hamburger menu, grids collapse from multi-column to 2-column or single-column layouts, and text remains readable. However, there are critical issues with two missing pages (404), invisible hero content on the homepage due to GSAP animations not firing, and several touch targets that are undersized for tablet/touch interaction.

---

## Findings

| Page | Issue | Details | Severity |
|------|-------|---------|----------|
| `/` | Hero content invisible (opacity: 0) | All hero section content -- H1 ("DESIGN YOUR FUTURE"), subtitle ("California's Premier Interior Design School"), CTA buttons ("Explore Programs", "Request Information"), badge ("Classes Starting May 5"), accreditation badges, and "Discover" scroll indicator -- remain at `opacity: 0`. GSAP entrance animations never trigger on page load. The hero appears as an empty dark gradient. | Critical |
| `/` | Stats counter animation not triggered | Stats section shows broken values: "2+" (should be ~50+), "0" Programs, "0:1" Ratio, "0S" Graduates. The GSAP ScrollTrigger counter animations do not fire, leaving placeholder/initial values visible. | Critical |
| `/about/faculty` | Page returns 404 | Navigating to `/about/faculty` returns "404: This page could not be found." The About page links to this route via a Faculty card, but the page does not exist in the build. | Critical |
| `/about/staff` | Page returns 404 | Navigating to `/about/staff` returns "404: This page could not be found." The About page links to this route via a Staff Directory card, but the page does not exist in the build. | Critical |
| `/` (all pages) | Apply Now button undersized touch target | The "Apply Now" nav link measures 106x36px -- height is below the 44px minimum recommended touch target size for mobile/tablet devices (WCAG 2.5.8 / Apple HIG). | Warning |
| `/` (all pages) | Hamburger menu button undersized | The hamburger/menu toggle button measures 40x40px, slightly below the 44x44px minimum recommended touch target. | Warning |
| `/` | Testimonial carousel dots undersized | Carousel navigation dots measure 10x10px (active dot: 32x10px). These are far too small for touch interaction on a tablet. Minimum recommended size is 44x44px. | Warning |
| `/` (all pages) | Footer links undersized touch targets | Footer navigation links (Programs, Admissions, Campus Life, About, Disclosures, Financial Aid, Privacy Policy, Accreditation) measure approximately 17-20px in height, well below the 44px minimum for touch. | Warning |
| `/` (all pages) | Footer email input undersized | The newsletter email input in the footer measures 252x41px. Height is 41px, slightly below the 44px touch target minimum. | Warning |
| `/` (all pages) | Logo link slightly undersized | The IDI logo/home link measures 104x40px. Height is 40px, 4px below the 44px minimum touch target. | Warning |
| `/programs/compare` | Comparison cards stack vertically | At 768px, the compare page stacks all 4 program cards vertically instead of side-by-side. While the hero text says "See all four programs side by side," users must scroll through each card sequentially, making direct comparison difficult. Consider a horizontally scrollable table or 2x2 grid at this breakpoint. | Warning |
| `/` | No horizontal overflow detected | scrollWidth (739) equals clientWidth (739) on the homepage. No horizontal scrollbar issues. | Info |
| `/about` | Page layout adapts correctly | Hero section, mission text, and 2-column card grid (History, Accreditation, Faculty, Staff) all render correctly at tablet width. No overflow. | Info |
| `/about/accreditation` | Page layout adapts correctly | Hero, body text, and accreditation body cards all display properly. Single-column card layout. No overflow. | Info |
| `/about/history` | Timeline layout adapts correctly | History milestones display in a clean single-column timeline format. Years and descriptions are readable. No overflow. | Info |
| `/admissions` | Page layout adapts correctly | Hero, "Five Steps to IDI" enrollment process, all display cleanly at tablet width. No overflow. | Info |
| `/admissions/apply` | Page layout adapts correctly | Hero with CTA, enrollment period info cards, and admission requirements cards all display in single-column layout. No overflow. | Info |
| `/admissions/financial-aid` | No issues found | Page adapts cleanly to tablet. Financial aid overview and eligibility sections display properly. No overflow. | Info |
| `/admissions/tuition` | Fee tables display correctly | Tuition fee tables (Certificate, AA, BA, MIA) display with proper column alignment at tablet width. "Fee" and "Amount" columns are clearly spaced. No overflow. | Info |
| `/campus-life` | No issues found | Hero image, location section, campus photo, tag/pill elements, and Student Organizations section all adapt well. No overflow. | Info |
| `/contact` | No issues found | Hero, address, contact info, social icons, school codes, embedded Google Map, and department contact cards all display properly at tablet width. No overflow. | Info |
| `/disclosures` | No issues found | Hero and document listing display cleanly at tablet. No overflow. | Info |
| `/programs` | Program cards stack to single column | Program listing cards correctly collapse from multi-column to single-column full-width cards at tablet. Each card shows image, program badge, description, tuition, units, and "Learn More" CTA. | Info |
| `/programs/associate-of-arts` | No issues found | Hero with info grid (Duration, Units, Tuition, Accreditation) displays in a 3+1 grid. Overview section readable. No overflow. | Info |
| `/programs/bachelor-of-arts` | No issues found | Same layout as AA page. Info grid, overview, and content all adapt properly. No overflow. | Info |
| `/programs/certificate` | No issues found | Same layout as other program pages. Info grid and overview adapt properly. No overflow. | Info |
| `/programs/master-interior-architecture` | No issues found | Same layout as other program pages. Info grid and overview adapt properly. No overflow. | Info |

---

## Navigation Check

| Feature | Status | Notes |
|---------|--------|-------|
| Hamburger menu | Present | Shows hamburger icon (3-line) at 768px -- desktop nav is hidden |
| Apply Now CTA | Present | Pink button in header, visible alongside hamburger |
| Breadcrumbs | Present | Displayed on all inner pages (e.g., Home / About / Accreditation) |
| Logo/Home link | Present | IDI logo in top-left links to homepage |
| Sticky header | Yes | Header remains fixed on scroll |

## Grid/Column Behavior at 768px

| Section | Columns at Tablet | Notes |
|---------|-------------------|-------|
| Homepage program cards | 2 columns | `sm:grid-cols-2` activates at 640px+, good at 768px |
| Homepage student showcase | 2 columns | `sm:grid-cols-2` with 8 items across 7 rows (280px each) |
| Homepage stats | 2 columns | `grid-cols-2` base, `md:grid-cols-4` at 768px+ |
| About sub-page cards | 2 columns | History, Accreditation, Faculty, Staff in 2x2 grid |
| Programs listing | 1 column | Full-width stacked cards |
| Compare Programs | 1 column | Stacked cards (not side-by-side) |
| Footer | 2 columns | Left (logo/address) + Right (quick links) |
| Contact departments | 1 column | Stacked department cards |

## Horizontal Overflow Check

All 17 accessible pages were tested for horizontal overflow (`scrollWidth > clientWidth`). **No horizontal overflow was detected on any page.**

---

## Recommendations

1. **CRITICAL -- Fix GSAP hero animations:** The homepage hero GSAP animations (fade-in on load) do not trigger, leaving all hero content invisible. Investigate whether GSAP ScrollTrigger or timeline `.play()` calls are failing silently. Consider adding a `noscript` or CSS fallback to ensure content is visible even if JS animations fail.

2. **CRITICAL -- Create missing pages:** `/about/faculty` and `/about/staff` both return 404. Either create these pages or remove/update the links on the `/about` page that reference them.

3. **CRITICAL -- Fix stats counter animation:** The homepage stats counters display initial/broken values because the GSAP counter animation does not fire. Add a CSS fallback or ensure ScrollTrigger is properly initialized.

4. **Increase touch target sizes:** Multiple interactive elements are below the 44x44px minimum:
   - Apply Now button: increase height from 36px to 44px
   - Hamburger menu: increase from 40x40 to 44x44
   - Testimonial dots: add padding or increase hit area to 44x44
   - Footer links: add vertical padding to increase tap height
   - Newsletter email input: increase height from 41px to 44px

5. **Compare page UX at tablet:** Consider implementing a horizontally scrollable comparison table or a 2x2 grid layout at 768px so users can actually compare programs side by side as the heading promises.
