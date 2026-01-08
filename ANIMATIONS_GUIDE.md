# IDI Website - Animation System Guide

> **Phase 3: Senior Designer Animations - COMPLETE**
> Premium Framer Motion animations for a sophisticated design school experience

---

## Overview

The IDI website features a comprehensive animation system built with Framer Motion 12. All animations are:
- **Professional**: 0.3-0.6s duration, smooth easing
- **Performant**: GPU-accelerated transforms, 60fps
- **Accessible**: Respect `prefers-reduced-motion` preference
- **Progressive**: Intersection Observer for scroll triggers

---

## Animation Components

### 1. ScrollReveal (`/src/components/animations/ScrollReveal.tsx`)

Animate elements when they scroll into viewport.

```tsx
import { ScrollReveal } from '@/components/animations/ScrollReveal';

// Basic usage
<ScrollReveal direction="up">
  <h2>Animated Heading</h2>
</ScrollReveal>

// With delay
<ScrollReveal direction="up" delay={0.2}>
  <p>Delayed content</p>
</ScrollReveal>

// With custom duration
<ScrollReveal direction="left" duration={0.8}>
  <div>Slower animation</div>
</ScrollReveal>
```

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale'
- `delay`: number (seconds)
- `duration`: number (seconds, default 0.6)
- `once`: boolean (default true)

**Example:**
```tsx
<ScrollReveal direction="up" delay={0.1}>
  <p className="text-xl text-text-secondary">
    Four decades of proven excellence
  </p>
</ScrollReveal>
```

---

### 2. TextReveal (`/src/components/animations/TextReveal.tsx`)

Premium text reveal animations for headlines.

```tsx
import { TextReveal, TextRevealWords, TextRevealBlur } from '@/components/animations/TextReveal';

// Clip-path reveal (hero headlines)
<TextReveal className="text-6xl font-bold" delay={0.2}>
  Design Your Future
</TextReveal>

// Word-by-word reveal
<TextRevealWords text="Design Your Future" className="text-6xl font-bold" />

// Blur reveal (subheadings)
<TextRevealBlur className="text-xl" delay={0.5}>
  Orange County's premier interior design school
</TextRevealBlur>
```

**TextReveal Props:**
- `className`: string
- `delay`: number (default 0)
- `duration`: number (default 0.8)

**TextRevealWords Props:**
- `text`: string (will be split by spaces)
- `className`: string
- `delay`: number (default 0)
- `staggerDelay`: number (default 0.08)

---

### 3. Button (`/src/components/ui/Button.tsx`)

Animated button component with multiple variants.

```tsx
import { Button, ButtonGroup } from '@/components/ui/Button';

// Primary button with link
<Button href="/admissions" variant="primary" size="lg">
  Apply Now
</Button>

// Outline button with click handler
<Button onClick={handleClick} variant="outline" size="md">
  Learn More
</Button>

// Button group
<ButtonGroup>
  <Button variant="primary">Primary Action</Button>
  <Button variant="outline">Secondary Action</Button>
</ButtonGroup>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `href`: string (renders as Link)
- `onClick`: function
- `disabled`: boolean
- `type`: 'button' | 'submit' | 'reset'

**Animations:**
- Hover: scale(1.05)
- Tap: scale(0.98)
- Duration: 0.2-0.3s

---

### 4. Card (`/src/components/ui/Card.tsx`)

Animated card with hover lift effect.

```tsx
import { Card, CardWithGlow, CardGrid } from '@/components/ui/Card';

// Basic card
<Card hover>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>

// Card with glow (premium interactions)
<CardWithGlow>
  <h3>Premium Card</h3>
</CardWithGlow>

// Responsive grid
<CardGrid columns={3}>
  <Card>Card 1</Card>
  <Card>Card 2</Card>
  <Card>Card 3</Card>
</CardGrid>
```

**Card Props:**
- `hover`: boolean (default true)
- `onClick`: function (makes clickable)

**CardGrid Props:**
- `columns`: 1 | 2 | 3 | 4

**Animations:**
- Hover: y: -8, scale: 1.02
- Duration: 0.3s
- Glow: boxShadow with terracotta color

---

## Animation Utilities (`/src/lib/animations.ts`)

### Motion Variants

```tsx
import { fadeIn, slideUp, scaleIn, staggerContainer } from '@/lib/animations';

// Use in custom motion components
<motion.div variants={fadeIn} initial="hidden" animate="visible">
  Content
</motion.div>

// Stagger children
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible">
  {items.map(item => (
    <motion.div key={item.id} variants={staggerItem}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

**Available Variants:**
- `fadeIn`: Opacity 0 → 1
- `slideUp`: Opacity + Y translation (40px)
- `slideDown`: Opacity + Y translation (-40px)
- `slideLeft`: Opacity + X translation (40px)
- `slideRight`: Opacity + X translation (-40px)
- `scaleIn`: Opacity + scale (0.9 → 1)
- `clipText`: Clip-path reveal for text
- `staggerContainer`: Parent container
- `staggerItem`: Child items

### Easing Functions

```tsx
import { easing } from '@/lib/animations';

<motion.div
  transition={{ duration: 0.6, ease: easing.easeOutQuart }}
>
  Content
</motion.div>
```

**Available Easings:**
- `easeOutQuart`: [0.25, 0.46, 0.45, 0.94] - Most common
- `easeInOutQuart`: [0.76, 0, 0.24, 1] - Smooth both ends
- `easeOutExpo`: [0.16, 1, 0.3, 1] - Dramatic ease out

### Hover Configs

```tsx
import { cardHover, buttonPress } from '@/lib/animations';

// Card hover
<motion.div variants={cardHover} initial="rest" whileHover="hover">
  Card content
</motion.div>

// Button press
<motion.button variants={buttonPress} initial="rest" whileHover="hover" whileTap="tap">
  Click me
</motion.button>
```

---

## Implementation Examples

### Hero Section

```tsx
'use client';

import { TextReveal, TextRevealBlur } from '@/components/animations/TextReveal';
import { Button, ButtonGroup } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { scrollIndicatorPulse } from '@/lib/animations';

export function Hero() {
  return (
    <section className="relative h-screen">
      {/* Animated Headline */}
      <TextReveal className="text-8xl font-bold" delay={0.2}>
        Design Your Future
      </TextReveal>

      {/* Animated Subheading */}
      <TextRevealBlur className="text-2xl" delay={0.5}>
        Orange County's premier interior design school
      </TextRevealBlur>

      {/* Animated CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <ButtonGroup>
          <Button href="/admissions" variant="primary" size="lg">
            Apply Now
          </Button>
          <Button href="/programs" variant="outline" size="lg">
            Explore Programs
          </Button>
        </ButtonGroup>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div variants={scrollIndicatorPulse} animate="animate">
        <div className="scroll-indicator" />
      </motion.div>
    </section>
  );
}
```

### Stats Section with Stagger

```tsx
'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';

export function Stats() {
  return (
    <section className="py-24">
      <ScrollReveal direction="up">
        <h2>By the Numbers</h2>
      </ScrollReveal>

      <div className="grid md:grid-cols-2 gap-12">
        {stats.map((stat, index) => (
          <ScrollReveal
            key={stat.label}
            direction={index % 2 === 0 ? 'left' : 'right'}
            delay={index * 0.1}
          >
            <motion.div
              className="stat-number"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.2 }}
            >
              {stat.value}
            </motion.div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

### Program Cards with Hover

```tsx
'use client';

import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function Programs() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {programs.map((program, index) => (
        <ScrollReveal key={program.id} direction="up" delay={index * 0.1}>
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Link href={program.href}>
              {/* Card content */}
            </Link>

            {/* Hover Glow */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              style={{ boxShadow: '0 0 40px rgba(196, 114, 93, 0.15)' }}
            />
          </motion.div>
        </ScrollReveal>
      ))}
    </div>
  );
}
```

### FAQ Accordion

```tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
          >
            {/* Question */}
            <motion.button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              whileHover={{ x: 4 }}
            >
              <span>{item.question}</span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown />
              </motion.div>
            </motion.button>

            {/* Answer */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div>{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
```

---

## Animation Guidelines

### DO:
- ✅ Use `transform` and `opacity` (GPU accelerated)
- ✅ Keep durations between 0.3-0.6s
- ✅ Use easeOutQuart for most animations
- ✅ Stagger children with 0.05-0.1s delays
- ✅ Test with `prefers-reduced-motion`
- ✅ Use `viewport={{ once: true }}` for scroll animations
- ✅ Add loading states for async content

### DON'T:
- ❌ Animate width, height, top, left (causes layout thrash)
- ❌ Use animations longer than 1 second
- ❌ Animate many elements simultaneously
- ❌ Forget pointer-events-none on overlays
- ❌ Skip reduced motion checks
- ❌ Use infinite animations on many elements

### Performance Tips:
1. Use `will-change` sparingly (only during animation)
2. Prefer `transform` over position properties
3. Test on low-power devices
4. Use DevTools Performance tab to check 60fps
5. Minimize repaints with proper layer management

---

## Accessibility

All animations respect the `prefers-reduced-motion` media query:

```tsx
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Skip animation if user prefers reduced motion
if (prefersReducedMotion) {
  return <div>{children}</div>;
}
```

Users who enable "Reduce Motion" in their OS will see:
- No entrance animations
- No hover animations
- Instant state changes
- Full functionality preserved

---

## File Structure

```
/src/
├── lib/
│   └── animations.ts              # Motion variants, easing, configs
├── components/
│   ├── animations/
│   │   ├── ScrollReveal.tsx       # Scroll-triggered animations
│   │   └── TextReveal.tsx         # Text reveal effects
│   └── ui/
│       ├── Button.tsx             # Animated button component
│       ├── Card.tsx               # Animated card component
│       ├── ProgramComparisonCard.tsx  # Enhanced card
│       └── FAQ.tsx                # Animated accordion
└── sections/
    ├── Hero.tsx                   # Premium text reveals
    ├── Programs.tsx               # Card hover effects
    ├── Stats.tsx                  # Number animations
    ├── WhyIDI.tsx                 # Staggered reveals
    └── CTA.tsx                    # Interactive CTAs
```

---

## Next Steps (Phase 4)

With animations complete, the next phase focuses on:
1. Contrast and accessibility audits
2. Image optimization and lazy loading
3. Spacing and typography polish
4. Mobile responsive refinements
5. Performance optimization

---

## Testing Checklist

- [x] Hero animations play on page load
- [x] Sections animate on scroll into view
- [x] Cards lift on hover
- [x] Buttons scale on hover/tap
- [x] FAQ accordion expands smoothly
- [x] No layout shift during animations
- [x] Animations respect prefers-reduced-motion
- [x] 60fps performance in DevTools
- [x] Works on mobile (touch interactions)
- [x] No console errors

---

**Animation System Status: ✅ COMPLETE**

All homepage sections and key components now feature premium animations that enhance the user experience without sacrificing performance or accessibility.
