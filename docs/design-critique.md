# Design Critique: IDI.edu Website Redesign

**Critic:** Design Review (Provocation & Prescription)
**Date:** February 11, 2026
**Files Reviewed:** Full homepage composition, component library, design system, animation layer, data files, inspiration research, and Devil's Advocate review

---

## A. "The Elephant in the Room" --- What's Wrong Now

Let me say what nobody on the team wants to hear: **this site, in its current state, is a beautifully engineered template that could belong to literally anyone.** A crypto exchange. A coworking space. A meditation app. Swap the copy and nobody would notice it was supposed to be a design school.

Here is the full inventory of problems, in order of how much they hurt.

### 1. The Layout is a SaaS Landing Page Wearing a Serif Font

The page composition is:

```
Hero (full-screen, dark, centered text, two CTAs)
  -> Social Proof Bar (tiny logos/badges)
    -> Program Cards (2x2 grid)
      -> Why Us Feature Grid (3-column icons + text)
        -> Stats Counter Row (animated numbers)
          -> Testimonials (3-column cards)
            -> Campus Photo Grid (masonry-ish)
              -> CTA Banner (dark, centered text, two CTAs)
                -> Contact Cards (3-column)
```

I just described the homepage of Stripe, Linear, Notion, Vercel, and approximately 14,000 Y Combinator startups. This is the "Hero -> Features -> Social Proof -> CTA" pattern that every landing page generator outputs by default. The only thing that makes this an interior design school page is the text content. **The visual architecture communicates nothing about design, space, craft, or creativity.**

A school that teaches people how to design rooms has built a homepage with zero spatial thinking. No asymmetry. No tension between elements. No breathing room that feels intentional rather than padded. Every section is center-aligned, max-w-7xl, evenly spaced. It is relentlessly symmetrical --- the kind of symmetry that says "safe" rather than "designed."

Compare: RISD's site uses deliberate misalignment and incomplete boundaries to signal creative restlessness. Harvard GSD uses content interconnection to feel like a living research lab. Columbia GSAPP changes its identity based on the time of day. IDI's site feels like it was assembled, not designed.

### 2. The Hero is Invisible

```tsx
<TextReveal as="h1" className="font-heading text-6xl font-bold text-white lg:text-8xl">
  Design Your Future
</TextReveal>
<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-warm-200 md:text-xl">
  California's Premier Interior Design School · Newport Beach
</p>
```

"Design Your Future." Three words that say absolutely nothing. Every design school, coding bootcamp, business program, and community college in America has used this headline. It is the Lorem Ipsum of educational marketing. If I showed someone this hero for three seconds --- white text on a dark gradient with no imagery, no video, no spatial context --- they would have no idea this is a design school in Newport Beach.

The background is `bg-gradient-to-br from-brand-900 via-brand-900/95 to-brand-700/80` --- a gradient of nearly identical dark purples overlaid on another gradient of nearly identical dark purples. This is not a background. This is a void. The comment says `{/* Dark overlay gradient (placeholder for future video bg) */}` which means the team knows this is a placeholder, but placeholders have a way of surviving to production.

The hero also has `animate-bounce` on the scroll indicator. A bouncing chevron. In 2026. This was cliche in 2018.

### 3. Typography is Installed, Not Designed

Playfair Display and Inter. Fine fonts. Safe fonts. The exact combination used by approximately 30% of all Tailwind-based marketing sites. The fonts are being used as labels, not as design elements. Every heading is the same: `font-heading text-3xl font-bold md:text-4xl lg:text-5xl`. Three sizes, one weight, centered. There is no typographic hierarchy beyond size. No variation in weight, no letterspacing experiments, no display-size moments where the type itself becomes the visual.

The research document specifically calls out RISD's custom typeface system (105+ prototypes, complete/incomplete letterforms that embody their philosophy) and Columbia GSAPP's dynamic time-based wordmark. IDI has... Playfair Display at three sizes. This is like teaching a color theory class using only one hue.

### 4. GSAP is Installed but Doing Almost Nothing

The animation layer consists of:

- `TextReveal`: Word-level fade-in stagger. Nice, but basic.
- `AnimatedSection`: Child elements fade up with a stagger delay. This is the "scroll-triggered fade-in" that every framework site does.
- `CountUp`: Number counter animation. Functional.
- `ParallaxImage`: Slight vertical offset on scroll. Subtle to the point of invisible.
- `MagneticButton`: Exists in the components folder but is not used on the homepage.

GSAP ScrollTrigger is a $0 tool capable of orchestrating cinematic scroll experiences --- pinned sections, horizontal scroll galleries, scrub-linked video playback, morphing SVG paths, scroll-velocity-based effects. The site uses it to... fade things in as you scroll past them. This is like buying a Steinway grand piano and only playing "Chopsticks."

The research document describes 10 specific animation patterns: scrollytelling, kinetic typography, video scrubbing, cursor effects, clip-path reveals, aurora backgrounds. The `globals.css` even defines keyframes for `clip-reveal` and `aurora-shift` that are never used anywhere in the actual components. The design system has built the vocabulary but the components refuse to speak.

### 5. Image Placeholder Hell

The campus section uses Unsplash stock photos of generic office spaces:

```tsx
{ src: "https://images.unsplash.com/photo-1497366216548-37526070297c", alt: "Modern interior design studio space" }
{ src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2", alt: "Open workspace with natural light" }
```

These are photos of WeWork-style coworking spaces, not an interior design school. The testimonials section has `imageSrc: ""` for every entry --- empty strings where real human faces should be. The hero has no imagery at all. **A design school website with no design work visible above the fold is self-defeating.**

The research is emphatic: "The best proof of a design school's quality is the work its students produce. Every visitor should see stunning interiors within 3 seconds of landing on any page." Currently, a visitor sees stunning interiors at zero seconds on zero pages.

### 6. Copy That Reads Like a Brochure From 2009

- "Design Your Future" --- generic
- "California's Premier Interior Design School" --- claim without evidence
- "Discover what makes IDI the top choice for aspiring interior designers in California" --- who says this? Based on what?
- "Hear from IDI graduates who turned their passion for design into thriving careers" --- every school says this
- "Begin Your Design Journey" --- what journey? Show me.
- "Take the first step toward a rewarding career in interior design" --- this could be generated by filling in blanks on a template

Not a single line of copy on the homepage has personality, specificity, or provocation. Compare to SCAD's "University for Creative Careers" (direct, promise-based) or RCA's positioning around "Radical Traditionalism" (unexpected, memorable). IDI's copy is warm oatmeal.

---

## B. "The Plum Luxe Gamble" --- Honest Assessment of the New Direction

The color system in `globals.css` tells a story:

```css
--color-plum-900: #120B1E;   /* Plum Noir */
--color-plum-800: #1E1230;   /* Midnight Plum */
--color-plum-700: #2A1B40;   /* Velvet */
--color-amber-500: #F5A623;  /* Ember Amber */
--color-jade: #3DD6A3;       /* Jade accent */
--color-violet: #B06CFF;     /* Electric Violet */
```

This is a carefully considered palette. I can see the thinking: dark and luxurious, with warm amber for action and jade/violet for interest. The mesh gradient utilities (`mesh-plum`, `mesh-aurora`) are sophisticated. The grain texture overlay is a nice touch. The naming convention ("Plum Noir," "Ember Amber," "Velvet") shows design intent.

But let me be honest about the risks.

### Does Purple Say "Interior Design"?

No. Purple says tech startup, gaming platform, or wellness brand. When I think of interior design, I think of materials: wood grain, marble, linen, brass, terracotta, sage. Natural textures and warm earth tones. The Plum Luxe palette is more Twitch than Terracotta.

**However** --- and this is the counter-argument the team should consider seriously --- every other interior design school website uses exactly those warm neutrals. NYSID is cream and charcoal. Every architecture firm portfolio is white space with black type. If IDI goes warm-neutral, it becomes invisible against its competitors. The purple is a differentiator precisely because it is unexpected.

The question is whether "different" and "appropriate" can coexist. My verdict: **they can, but only if the dark palette is a stage, not the entire show.** The Plum Noir background needs to exist in service of making student work, campus photography, and design imagery absolutely glow against it. Like a gallery wall. If the dark palette becomes the personality of the site rather than the frame for the work, the gamble fails.

### Is Dark Mode First a Mistake for a School That Teaches Light and Space?

This is the strongest argument against the current direction. Interior design is fundamentally about how light inhabits space. About warmth, openness, and livability. A dark-mode-first website communicates the opposite: enclosure, mystery, drama. It is a nightclub, not a sunlit studio.

The research document's own recommendation (Pattern #8, Dark Mode / Gallery Toggle) actually suggests: **"Default: Light mode with warm, inviting palette. Gallery/Dark Mode: Deep charcoal, white text, images at maximum impact."** The research recommended light-first with dark as an option. The implementation went dark-first. Why?

I suspect the answer is that dark mode looks more "premium" in a Dribbble screenshot. And it does. But Dribbble screenshots do not enroll students. A prospective student browsing on their phone during lunch wants to feel invited, not intimidated.

**My recommendation:** Flip the default. The body background is already set to `bg-warm-50` (`#FAF7F2`), which is correct. The hero and accent sections should be dark. The informational sections --- programs, why IDI, testimonials, contact --- should be warm and light. The current body default suggests someone already had this instinct. Lean into it. Let the dark sections be punctuation, not the paragraph.

### Will the Palette Age Poorly?

The purple-amber-jade combination has a shelf life of about 3 years before it looks dated. But that is fine. A website should be refreshed every 2-3 years anyway. What matters more is whether the palette can be evolved. Because the tokens are defined as CSS custom properties in `@theme`, a palette refresh is a 15-minute CSS change. This is good architecture, even if the specific colors need debate.

### Are We Overthinking Color When the Real Problem is Layout and Motion?

**Yes.** One thousand percent yes. If the layout were daring, the animation were memorable, and the imagery were real, this site could be beige and it would still be impressive. The color system is the least of IDI's problems. The structural monotony and animation timidity are what make this feel generic. No color palette can rescue a site that is nine centered sections stacked vertically with fade-in-on-scroll as the only visual event.

---

## C. "What Would Actually Move the Needle" --- Specific Recommendations

### Test 1: The Hero Test

> "If I showed someone just the hero for 3 seconds, would they know this is a design school AND want to learn more?"

**Current score: FAIL.** They would see white text on a dark void and know nothing.

**What would pass this test:**

The hero needs to be one of two things:

**Option A --- The Video Hero (recommended):** A 12-second muted loop. Opening shot: close-up of hands moving fabric swatches across a mood board. Cut to: a student sketching a floor plan, camera pulling back to reveal the Newport Beach studio with sunlight streaming through windows. Cut to: a 3D rendering rotating on screen. Cut to: a finished room --- the kind that makes you stop scrolling. The video plays at 50% speed on scroll-scrub so the user controls the reveal. The headline "Design Your Future" overlays the video with a `mix-blend-mode: difference` so it interacts with the imagery. The text is `clamp(3rem, 8vw, 10rem)` --- massive on desktop, still bold on mobile.

**Option B --- The Image + Typography Hero:** If video is not ready, use a single stunning full-bleed photograph of an IDI student project (the best piece of work any graduate has ever produced). The headline should be set at `12vw` with `clip-path: inset(100% 0 0 0)` animating to `clip-path: inset(0% 0 0 0)` over 1.2 seconds, revealing from bottom to top as if the text is rising from the floor. Below the headline, a single line: "Interior Design Education. Newport Beach, California." No subtitle paragraph. No "premier" or "top choice" claims. Let the image do the talking.

**In both options:** Remove the bouncing scroll indicator. Remove the pulse badge. These are visual clutter that dilute the hero's impact. The CTA buttons should be minimal --- one ghost-style "Explore Programs" link, tucked into the bottom-left corner, not centered like a PowerPoint title slide.

### Test 2: The Scroll Test

> "Is there a reason to keep scrolling?"

**Current score: FAIL.** Every section resolves completely within its own bounds. There is no hook pulling you to the next section. No unfinished visual thread. No question unanswered.

**What would pass this test:**

Each section transition needs a hook. Specific implementations:

1. **Hero -> Social Proof:** As the hero scrolls away, the social proof bar should already be partially visible, pinned to the bottom of the viewport. Not a separate section --- a persistent element that slides up from the hero's bottom edge. It feels like a continuation, not a new section.

2. **Programs Section:** Do not show all four programs in a 2x2 grid. Show one program at a time, large, with a horizontal scroll or tab interaction. Each program card should be the size of the viewport width, with a full-bleed student project image on the left and program details on the right. The edge of the next card peeks into view on the right side, pulling the user to swipe or scroll horizontally. This is the "incomplete boundary" principle from RISD's design system.

3. **Why IDI -> Stats:** Instead of a separate stats section, embed the numbers directly into the "Why IDI" content. "Small Class Sizes" becomes "15:1 Student-Faculty Ratio" with the number animated as a large display element. Merge these two sections --- they are saying the same thing twice.

4. **Testimonials -> Campus:** A testimonial should end with a mention of Newport Beach ("The Newport Beach location is incredibly inspiring" --- this is literally already in the copy). The campus section should begin immediately, no gap, no new header. The testimonial's mention of location should be the bridge.

5. **Throughout:** Use GSAP ScrollTrigger pinning to create at least one "sticky" moment where the user pauses and something unfolds. A section that pins while elements animate in sequence. This creates a sense of event, of something happening, that makes scrolling feel purposeful.

### Test 3: The Comparison Test

> "Put this next to RISD, Parsons, and SCAD's sites. Does IDI hold its own?"

**Current score: FAIL.** Not close.

**What's missing:**

1. **Student work as primary content.** RISD's site functions as a gallery that happens to have enrollment info. IDI's site is an enrollment brochure with zero gallery. Flip the ratio. At least 40% of the homepage visual area should be student/graduate design work.

2. **A point of view.** RISD's "Question to Create, Create to Question." RCA's "Radical Traditionalism." SCAD's "University for Creative Careers." IDI has no positioning statement beyond "California's Premier Interior Design School," which is a claim, not a perspective. What does IDI believe about design that nobody else does? That answer should be the homepage's thesis.

3. **Content interconnection.** Harvard GSD links every faculty member to their projects, courses, exhibitions, and publications. IDI's data files are isolated silos --- programs.ts knows nothing about faculty, testimonials know nothing about programs beyond a string label. The data architecture should enable: "This is Sarah Mitchell. She graduated from our BA program. Here is her thesis project. She now works at Mitchell Interiors. She studied under Professor [name], who also teaches [course]." That web of connections makes a school feel alive.

4. **Visual ambition.** Every Tier 1 school site does something technically impressive that makes you think "they put effort into this." Columbia GSAPP's time-based identity. RISD's custom typeface. RCA's modular building-block layout system. IDI needs one "wow" moment --- one interaction or visual treatment that a designer would notice and respect. Currently there are zero.

### Test 4: The Conversion Test

> "Does every section have a clear path to Apply?"

**Current score: PARTIAL PASS.** The header has "Apply Now." The CTA banner exists. But the architecture is blunt-force rather than contextual.

**What would improve conversion:**

1. **Contextual CTAs, not generic ones.** The program cards should each say "Apply to [Program Name]" not just "Learn More." The testimonial from the BA graduate should have an "Explore the BA Program" link. The campus section should have "Schedule a Visit" not "Visit Our Campus" (which links to /contact --- wrong destination for someone who wants to physically visit).

2. **Sticky micro-CTA.** After the user scrolls past the hero, a small "Apply" chip should appear in the header (it already exists via the header button, but it should become more prominent --- perhaps changing from outlined to filled after scroll, or pulsing subtly once).

3. **The Request Info form is buried at the bottom.** A 3-field inline form (name, email, program interest dropdown) should appear at the midpoint of the page, not the end. Place it between programs and testimonials. "Interested? Get our program guide in 30 seconds." This captures leads who are curious but not committed enough to scroll to the bottom.

4. **Social proof adjacent to CTAs.** Near every "Apply Now" button: "Fall 2026 classes start [date] --- 12 seats remaining in the BA program." Scarcity + specificity. The current copy ("Join a community of passionate creatives") is fluff.

### Test 5: The Mobile Test

> "Does the magic work on a phone?"

**Current score: UNKNOWN but HIGH RISK.** The CSS is responsive (Tailwind breakpoints are present). But the experiential design has not been thought through for mobile.

**Specific mobile concerns:**

1. **The hero on mobile is just text on a dark rectangle.** No image, no video, no visual. On a 375px screen, `text-6xl` Playfair Display on a `#120B1E` background is a dark screen with small white words. This is the first impression for likely 60-70% of visitors.

2. **Horizontal scroll sections** (recommended in the research) are fine on mobile if implemented with native CSS `overflow-x: scroll` and `scroll-snap-type`. They are disastrous if implemented with GSAP scroll hijacking. The Devil's Advocate review flagged this correctly.

3. **The 6-card "Why IDI" grid** collapses to a single column on mobile, creating a wall of text blocks that requires extensive scrolling. On mobile, this should be a swipeable carousel or an accordion --- show the titles, reveal the description on tap.

4. **ParallaxImage effects** are wasteful on mobile. The slight vertical offset that creates a subtle depth effect on desktop is imperceptible on a small screen and costs GPU performance for nothing. Disable parallax on touch devices. The hook already has the infrastructure (`typeof window !== "undefined"`) --- add a touch device check.

---

## D. "Danger Zones" --- Things That Could Go Wrong

### 1. Performance: The Stack is Heavy

The current technology stack loads:
- React 19 + React DOM (~40KB gzipped)
- Next.js 16 framework (~80KB gzipped)
- GSAP core + ScrollTrigger (~34KB gzipped)
- Playfair Display (a heavy serif; Latin subset is ~30KB)
- Inter (variable weight; Latin subset is ~25KB)
- Tailwind CSS runtime

That is ~210KB of JavaScript and fonts before a single component renders. Add the mesh gradient CSS, grain texture SVG, and any above-the-fold images, and the first paint is fighting for every millisecond. The Devil's Advocate review already noted the unrealistic <500KB page budget and <1.5s LCP target. These numbers are fiction.

**Concrete risk:** If the video hero is implemented without aggressive optimization (poster frame as LCP element, lazy video load, adaptive bitrate), the homepage will score 40-60 on Google PageSpeed Insights. For a site targeting organic search traffic from prospective students, this is a conversion killer.

**Mitigation:** Define a real performance budget. ~800KB for homepage initial load. ~400KB for subsequent navigation. Measure weekly during development. Make tradeoff decisions explicitly (e.g., "We can have the mesh gradient OR the parallax images on mobile, not both").

### 2. Accessibility: Multiple Failures Already Exist

The Devil's Advocate review identified WCAG AA contrast failures on the gold accent color (#F5A623 on dark backgrounds may pass, but on light backgrounds it does not). Beyond color contrast:

- **`MotionProvider` is not wired into the layout.** The `prefers-reduced-motion` media query is effectively ignored. Every animation runs regardless of user preference. This is a legal liability for a school receiving federal financial aid (Section 508 compliance).

- **The mesh gradient backgrounds with `sandstone` (#A89F94) text** are a contrast disaster. Sandstone on plum-900 calculates to approximately 5.8:1 (passes AA), but sandstone on plum-700 (#2A1B40) drops to approximately 4.2:1 (fails AA for normal text). The `Section` component uses sandstone for subtitles on dark backgrounds regardless of which dark variant is active.

- **Focus states on dark backgrounds** are undefined. A keyboard user tabbing through the dark hero section will see... what? The default browser focus ring on a dark purple background is nearly invisible. The button component has `focus-visible:ring-2 focus-visible:ring-offset-2` but `ring-offset` inherits the background color, which on dark sections means a dark offset around a colored ring that may not have sufficient contrast.

- **The TextReveal animation** splits text into word-level spans. Screen readers will read the text correctly via the original `textContent`, but if the animation delays visibility, a screen reader user may hear content that a sighted user cannot yet see. This temporal mismatch is a known GSAP accessibility issue.

### 3. GSAP SplitText Licensing (Still Unresolved)

The Devil's Advocate review flagged this as CRITICAL. The PRD calls for character-level animation. The current implementation does word-level animation. No decision has been documented. The `useTextReveal` hook works but its output is not what the PRD specified. **Someone needs to make a decision and write it down: either buy Club GreenSock ($99/year) or formally accept word-level animation.** Indecision here will cause scope-creep debugging in Week 8 when someone notices the hero text does not match the design comp.

### 4. Browser Compatibility of Advanced CSS

The `globals.css` uses:
- `clip-path: inset()` --- supported everywhere modern, but the defined `clip-reveal` keyframe animation is not used anywhere
- `backdrop-blur` (via Tailwind's `backdrop-blur-xl` on the header) --- supported everywhere modern, but performance is poor on older Android devices; causes visible repaint on scroll
- `mix-blend-mode: overlay` (grain texture) --- supported, but grain texture at 3.5% opacity on a dark background is effectively invisible. You are paying the compositing cost for zero visual benefit.
- Mesh gradients using multiple `radial-gradient()` layers --- supported, but the GPU cost of 3-4 layered radial gradients on a full-viewport element is non-trivial on mobile. Consider whether the visual difference between `mesh-aurora` and a simple `linear-gradient` justifies the rendering cost.

### 5. Mobile Horizontal Scroll Sections

If the programs section or a portfolio gallery is redesigned as a horizontal scroll section (as the research recommends), the implementation must use native CSS scroll-snap, not GSAP scroll hijacking. GSAP `ScrollTrigger.normalizeScroll(true)` on mobile breaks pull-to-refresh on Chrome Android, elastic overscroll on iOS Safari, and address bar show/hide behavior. The Devil's Advocate review already flagged this. Use `overflow-x: auto; scroll-snap-type: x mandatory;` with scroll-snap-aligned children. Let the browser handle touch physics. Use GSAP only for visual flourishes (parallax layers within the scrolling container, fade-in of entering cards) not for scroll behavior itself.

---

## E. "The One Thing" --- If You Could Only Change One Thing

**Replace the hero void with a full-bleed image or video of the single most impressive piece of student work that has ever come out of IDI.**

Not a stock photo. Not a gradient. Not a dark rectangle with white text. One image. The best room, the best rendering, the best student project. Full viewport. Edge to edge. With the headline overlaid in large type with `mix-blend-mode: difference` or a semi-transparent scrim.

This single change accomplishes:
1. Instantly communicates "this is a design school"
2. Provides proof of quality (the work speaks louder than any tagline)
3. Creates an emotional response (a beautiful room triggers aspiration)
4. Differentiates from every competitor using generic stock imagery or text-only heroes
5. Gives the GSAP animation layer something worth animating (a parallax image with a text reveal over real content is fundamentally more compelling than text revealing over a CSS gradient)

The research document's own words: "The best proof of a design school's quality is the work its students produce. Every visitor should see stunning interiors within 3 seconds of landing on any page."

Right now, that number is zero seconds on zero pages.

Fix the hero. Everything else follows.

---

## F. "Steal This" --- 3 Specific References

### 1. Royal College of Art (rca.ac.uk) --- Steal the Modular Content System

**What they do:** RCA rebuilt their site using a modular building-block system where every page is composed from a library of flexible content blocks. This is not a traditional CMS template approach --- each block is a designed, responsive component that can be arranged in dozens of combinations. The result is that every page feels custom-designed while maintaining brand consistency.

**What IDI should take:** The `Section` component is a start, but it has exactly five variants (`default`, `dark`, `accent`, `light`, `mesh`). RCA's approach would mean 15-20 section variants with different layout geometries: asymmetric image-text splits, full-bleed image breaks, pull-quote interludes, horizontal scroll showcases, sticky-sidebar layouts, masonry galleries. The homepage should not feel like a single template --- it should feel like a curated composition of distinct moments, each with its own layout rhythm. Build the block library. Then compose the homepage from it.

**Specific implementation:** Create section layout variants beyond centered-text-above-content:
- `SplitSection` --- 60/40 image-text split with the image bleeding off the edge
- `StickySection` --- text scrolls while an image stays pinned
- `BreakoutSection` --- full-viewport-width content breaking out of the max-w-7xl container
- `GallerySection` --- horizontal scroll showcase with scroll-snap
- `QuoteSection` --- large pull-quote typography moment that creates visual pause

### 2. Raad Studio (raad.studio) --- Steal the Portfolio-as-Website Approach

**What they do:** Raad Studio is a Brooklyn-based architecture firm whose website is essentially a full-screen portfolio viewer. Dark background. Minimal navigation. Projects are hero-scale images that fill the viewport. You do not "browse" their site --- you experience it. Each project is presented at maximum visual impact with almost no UI competing for attention.

**What IDI should take:** The campus section and any future portfolio gallery should borrow this "project as full-screen experience" approach. Instead of a 4-column grid of small thumbnails, show one student project at a time, full viewport width, with the student's name, program, and a one-line description. Let the user swipe or scroll between projects. On dark backgrounds, design work looks dramatically better --- the Plum Luxe palette actually earns its existence in this context.

**Specific implementation:** Create a `ProjectShowcase` component that renders a single project at `100vw` width and `70vh` minimum height. Use `scroll-snap-type: y mandatory` to create a vertical snap-scroll gallery. Each project card has the image as the background with a gradient scrim at the bottom for text. GSAP adds a subtle parallax shift on the image as the user scrolls between projects. This is the single best use of GSAP on the site --- animation in service of content presentation.

### 3. Selldorf Architects (selldorf.com) --- Steal the Restraint

**What they do:** Selldorf's website does almost nothing. White space. One typeface. No gradients, no mesh backgrounds, no aurora effects. Projects are presented in a clean grid. The navigation is a list of words. And it is absolutely beautiful because every pixel is intentional. The restraint IS the design.

**What IDI should take:** This is the counterweight to the Plum Luxe maximalism. For the light-mode informational sections (programs, why IDI, contact), strip away the decorative elements. No icon badges in colored circles. No `shadow-sm` hover effects. No `rounded-xl` cards with `bg-warm-100` backgrounds. Just: a heading, a paragraph, and white space. Let the typography and content do the work. Trust the reader.

**Specific implementation:** The "Why IDI" section currently has six identical cards with icon-in-circle + title + paragraph. Replace this with a simple typographic list:

```
Small Class Sizes              15:1 student-to-faculty ratio.
Newport Beach                  Design centers, showrooms, and sunshine.
ACCSC Accredited               Nationally recognized by the U.S. Department of Education.
CIDA Accredited BA             The gold standard in interior design education.
Industry Faculty               Working designers who teach, not just academics.
40+ Years                      Educating designers since 1984.
```

Two columns. Left-aligned title, right-aligned description. No icons, no cards, no shadows. Just information, beautifully set. This would be more striking than six identical rounded cards, because it demonstrates confidence. The kind of confidence a design school should have.

---

## Closing Note

This critique is sharp because the foundation is good. The component architecture is clean. The design token system is well-structured. The TypeScript is solid. The data modeling is thoughtful. The research document is one of the most thorough competitive analyses I have reviewed for a project of this scale.

The problem is not engineering. The problem is courage. The team has assembled all the tools, done all the research, identified all the right references --- and then built the safest possible version of the site. The "Hero -> Features -> Social Proof -> CTA" pattern was chosen because it is proven. The centered layouts were chosen because they are safe. The generic copy was written because it is inoffensive.

IDI is a school that teaches people to make rooms that evoke emotion, that surprise, that make you want to stay. The website should make you feel something too. Right now, it does not.

Make us feel something.

---

*This critique is intended to provoke better work, not to demoralize. Every issue identified has a proposed solution. The team that built this foundation is clearly capable of building something exceptional --- they just need to stop being careful and start being bold.*
