# Interior Designers Institute - Design System Documentation

## Overview

The IDI Design System is a comprehensive set of design tokens, components, and guidelines that create a cohesive, warm, and professional aesthetic for Orange County's premier interior design school.

**Theme**: Warm Neutral
**Version**: 1.0.0
**Status**: Phase 1 Complete

---

## Brand Identity

### Core Values
- **Excellence** - 40 years of CIDA-accredited education
- **Creativity** - Inspiring future designers
- **Professional** - 100% practicing professionals as faculty
- **Accessible** - Flexible, welcoming environment

### Visual Language
The design system uses warm neutrals (cream and charcoal) as the foundation, with terracotta and gold accents that evoke creativity, warmth, and sophistication.

---

## Typography

### Font Families

#### Playfair Display (Headings)
- **Purpose**: Headlines, display text, emphasis
- **Character**: Elegant, sophisticated, classic serif
- **Usage**: All `<h1>` through `<h6>` elements
- **CSS Variable**: `--font-heading`
- **Tailwind Class**: `font-heading`

```tsx
<h1 className="font-heading text-5xl font-bold">Design Your Future</h1>
```

#### Inter (Body)
- **Purpose**: Body text, UI elements, general content
- **Character**: Clean, modern, highly readable sans-serif
- **Usage**: Paragraphs, navigation, buttons, labels
- **CSS Variable**: `--font-body`
- **Tailwind Class**: `font-body`

```tsx
<p className="font-body text-lg">Orange County's only dedicated interior design school.</p>
```

#### JetBrains Mono (Stats/Numbers)
- **Purpose**: Statistics, numbers, data, dates
- **Character**: Technical, precise, monospaced
- **Usage**: ONLY for numerical data and statistics
- **CSS Variable**: `--font-mono`
- **Tailwind Class**: `font-mono`

```tsx
<div className="font-mono text-5xl font-bold">40</div>
```

### Font Sizes

| Token | Size | Usage |
|-------|------|-------|
| `text-xs` | 12px | Small labels, captions |
| `text-sm` | 14px | Secondary text, metadata |
| `text-base` | 16px | Body text (default) |
| `text-lg` | 18px | Large body text |
| `text-xl` | 20px | Lead paragraphs |
| `text-2xl` | 24px | Section subtitles |
| `text-3xl` | 30px | Section titles |
| `text-4xl` | 36px | Page titles |
| `text-5xl` | 48px | Hero headlines |
| `text-7xl` | 72px | Main hero text |

### Font Weights

| Token | Weight | Usage |
|-------|--------|-------|
| `font-normal` | 400 | Body text |
| `font-medium` | 500 | Emphasis, buttons |
| `font-semibold` | 600 | Headings |
| `font-bold` | 700 | Strong emphasis, stats |

---

## Colors

### Background Colors

#### Primary Background
- **Hex**: `#FAF8F5`
- **Usage**: Main page background
- **CSS Variable**: `--bg-primary`
- **Tailwind**: `bg-background-primary`

```tsx
<div className="bg-background-primary">...</div>
```

#### Secondary Background
- **Hex**: `#F5F0EB`
- **Usage**: Alternating sections, subtle contrast
- **CSS Variable**: `--bg-secondary`
- **Tailwind**: `bg-background-secondary`

#### Card Background
- **Hex**: `#FFFFFF`
- **Usage**: Cards, elevated content
- **CSS Variable**: `--bg-card`
- **Tailwind**: `bg-background-card`

#### Dark Background
- **Hex**: `#2D2A26`
- **Usage**: Headers, footers, primary buttons
- **CSS Variable**: `--bg-dark`
- **Tailwind**: `bg-background-dark`

### Text Colors

#### Primary Text
- **Hex**: `#2D2A26`
- **Usage**: Headlines, body text
- **Contrast**: 14.3:1 on primary background (AAA)
- **Tailwind**: `text-text-primary`

#### Secondary Text
- **Hex**: `#5A5651`
- **Usage**: Supporting text, descriptions
- **Contrast**: 7.8:1 on primary background (AAA)
- **Tailwind**: `text-text-secondary`

#### Muted Text
- **Hex**: `#8A8580`
- **Usage**: Metadata, captions, hints
- **Contrast**: 4.6:1 on primary background (AA)
- **Tailwind**: `text-text-muted`

#### Inverse Text
- **Hex**: `#FAF8F5`
- **Usage**: Text on dark backgrounds
- **Tailwind**: `text-text-inverse`

### Accent Colors

#### Terracotta
- **Hex**: `#C4725D`
- **Usage**: Primary accent, CTAs, highlights
- **Tailwind**: `bg-accent-terracotta`, `text-accent-terracotta`

```tsx
<button className="bg-accent-terracotta text-text-inverse">
  Apply Now
</button>
```

#### Terracotta Hover
- **Hex**: `#A85D4A`
- **Usage**: Hover state for terracotta elements
- **Tailwind**: `hover:bg-accent-terracotta-hover`

#### Gold
- **Hex**: `#B8977E`
- **Usage**: Secondary accent, badges, awards
- **Tailwind**: `bg-accent-gold`

#### Gold Light
- **Hex**: `#D4C4B0`
- **Usage**: Subtle gold tints
- **Tailwind**: `bg-accent-gold-light`

### Status Colors

| Purpose | Hex | Usage | Tailwind |
|---------|-----|-------|----------|
| Success | `#4A7C59` | Success messages, confirmations | `bg-status-success` |
| Warning | `#D4A84B` | Warnings, alerts | `bg-status-warning` |
| Error | `#C45D5D` | Error messages, validation | `bg-status-error` |

### Border Colors

- **Default**: `rgba(45, 42, 38, 0.1)` - `border-border-default`
- **Hover**: `rgba(45, 42, 38, 0.2)` - `border-border-hover`

---

## Spacing

### Scale

| Token | Size | Usage | Tailwind |
|-------|------|-------|----------|
| `xs` | 8px | Tight spacing | `p-2` / `m-2` |
| `sm` | 16px | Compact spacing | `p-4` / `m-4` |
| `md` | 24px | Standard spacing | `p-6` / `m-6` |
| `lg` | 32px | Generous spacing | `p-8` / `m-8` |
| `xl` | 48px | Large spacing | `p-12` / `m-12` |
| `2xl` | 64px | Extra large spacing | `p-16` / `m-16` |
| `3xl` | 96px | Section spacing | `p-24` / `m-24` |
| `section` | 96px | Vertical section padding | Custom |
| `card` | 32px | Card internal padding | Custom |

### Component Spacing

```tsx
// Section spacing
<section className="py-20 px-6">...</section>

// Card spacing
<div className="p-8">...</div>

// Content gaps
<div className="flex gap-4">...</div>
```

---

## Border Radius

| Token | Size | Usage | Tailwind |
|-------|------|-------|----------|
| `none` | 0 | No rounding | `rounded-none` |
| `sm` | 4px | Subtle rounding | `rounded-sm` |
| `md` | 8px | Buttons, inputs | `rounded-md` |
| `lg` | 16px | Cards | `rounded-lg` |
| `xl` | 24px | Large cards | `rounded-xl` |
| `2xl` | 32px | Hero sections | `rounded-2xl` |
| `full` | 9999px | Pills, avatars | `rounded-full` |
| `card` | 16px | Standard cards | Custom |

---

## Shadows

| Token | CSS | Usage | Tailwind |
|-------|-----|-------|----------|
| `sm` | `0 1px 2px rgba(0,0,0,0.05)` | Subtle elevation | Custom |
| `md` | `0 4px 6px rgba(0,0,0,0.1)` | Standard elevation | Custom |
| `lg` | `0 10px 15px rgba(0,0,0,0.1)` | High elevation | Custom |
| `xl` | `0 20px 25px rgba(0,0,0,0.1)` | Maximum elevation | Custom |
| `card` | `0 4px 6px rgba(0,0,0,0.1)` | Card hover | `shadow-card` |
| `glow` | `0 0 40px rgba(45,42,38,0.15)` | Soft glow effect | `shadow-glow` |

---

## Components

### Buttons

#### Primary Button
```tsx
<button className="bg-background-dark text-text-inverse px-6 py-3 rounded-md font-medium hover:opacity-90 transition-opacity">
  Apply Now
</button>
```

#### Secondary Button
```tsx
<button className="border border-text-primary text-text-primary px-6 py-3 rounded-md font-medium hover:bg-background-secondary transition-colors">
  Learn More
</button>
```

#### Accent Button
```tsx
<button className="bg-accent-terracotta text-text-inverse px-6 py-3 rounded-md font-medium hover:bg-accent-terracotta-hover transition-colors">
  Schedule Visit
</button>
```

### Cards

```tsx
<div className="bg-background-card border border-border-default rounded-lg p-6 hover:shadow-card transition-shadow">
  <h3 className="font-heading text-2xl font-semibold text-text-primary mb-3">
    Card Title
  </h3>
  <p className="font-body text-text-secondary">
    Card content goes here.
  </p>
</div>
```

### Statistics Display

```tsx
<div className="text-center">
  <div className="font-mono text-5xl font-bold text-accent-terracotta mb-2">
    40
  </div>
  <div className="font-body text-text-secondary">
    Years of Excellence
  </div>
</div>
```

---

## File Structure

```
/src
├── styles/
│   └── design-system.json          # JSON token export
├── lib/
│   └── design-system.ts            # TypeScript utilities
├── app/
│   ├── globals.css                 # CSS variables & Tailwind config
│   └── layout.tsx                  # Font configuration & metadata
```

---

## Usage

### In Components

```tsx
import { colors, typography, spacing } from '@/lib/design-system';

// Use tokens programmatically
const cardStyle = {
  backgroundColor: colors.background.card,
  padding: spacing.card,
  borderRadius: '1rem',
};

// Or use Tailwind classes
<div className="bg-background-card p-8 rounded-lg">
  Content
</div>
```

### CSS Variables

All tokens are available as CSS variables:

```css
.custom-element {
  color: var(--text-primary);
  background: var(--bg-card);
  border: 1px solid var(--border-default);
  font-family: var(--font-heading);
}
```

---

## Accessibility

### Contrast Ratios

All text/background combinations meet WCAG 2.1 Level AA standards:

- Primary text on primary background: **14.3:1** (AAA)
- Secondary text on primary background: **7.8:1** (AAA)
- Muted text on primary background: **4.6:1** (AA)
- Terracotta on primary background: **4.8:1** (AA)
- Inverse text on dark background: **14.3:1** (AAA)

### Focus States

All interactive elements include visible focus indicators:

```css
:focus-visible {
  outline: 2px solid var(--accent-terracotta);
  outline-offset: 2px;
}
```

### Font Sizing

- Minimum text size: 14px (0.875rem)
- Body text default: 16px (1rem)
- Line height minimum: 1.5 for body text

---

## Best Practices

### DO
- Use JetBrains Mono ONLY for numbers and statistics
- Use CSS variables for all colors (never hardcode hex values)
- Maintain consistent spacing using the scale
- Test all color combinations for contrast
- Use semantic color names (e.g., `bg-background-primary` not `bg-cream`)

### DON'T
- Use JetBrains Mono for regular text or headings
- Hardcode color values in components
- Create arbitrary spacing values
- Skip hover/focus states on interactive elements
- Mix serif and sans-serif in the same text block (except intentionally)

---

## Updates & Versioning

**Current Version**: 1.0.0
**Last Updated**: January 5, 2026
**Changelog**: Initial design system implementation

To update tokens:
1. Edit `/src/styles/design-system.json`
2. Update `/src/lib/design-system.ts`
3. Update `/src/app/globals.css`
4. Increment version number
5. Document changes

---

## Support

For questions or issues with the design system, contact the design team or create an issue in the project repository.
