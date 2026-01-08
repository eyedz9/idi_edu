/**
 * Interior Designers Institute - Design System
 * Rose Color Palette - TypeScript utilities for accessing design tokens
 */

// Rose Palette Reference
export const rosePalette = {
  heiSeBlack: '#142030',
  siestaTan: '#E9D8C8',
  picoEggplant: '#732553',
  stellarStrawberry: '#FF5C8D',
  blueWhale: '#1E3442',
  grauzone: '#85A3B2',
} as const;

// Legacy export for compatibility
export const luxePalette = rosePalette;

export const colors = {
  background: {
    primary: '#142030',      // Hēi Sè Black
    secondary: '#1E3442',    // Blue Whale
    card: '#1E3442',         // Blue Whale
    dark: '#0d1620',         // Darker than Hēi Sè
    light: '#E9D8C8',        // Siesta Tan
    lightAlt: '#f5ece3',     // Lighter Siesta
  },
  text: {
    primary: '#E9D8C8',      // Siesta Tan
    secondary: 'rgba(233, 216, 200, 0.8)',
    muted: 'rgba(233, 216, 200, 0.6)',
    inverse: '#142030',      // Hēi Sè Black
    dark: '#142030',         // Hēi Sè Black
    darkSecondary: '#1E3442',
  },
  accent: {
    picoEggplant: '#732553',
    picoEggplantHover: '#8a2d63',
    stellarStrawberry: '#FF5C8D',
    stellarStrawberryLight: '#ff7da6',
    grauzone: '#85A3B2',
    // Legacy aliases for compatibility
    terracotta: '#732553',
    terracottaHover: '#8a2d63',
    gold: '#FF5C8D',
    goldLight: '#ff7da6',
  },
  status: {
    success: '#85A3B2',      // Grauzone
    warning: '#E9D8C8',      // Siesta Tan
    error: '#732553',        // Pico Eggplant
  },
  border: {
    default: 'rgba(233, 216, 200, 0.1)',
    hover: 'rgba(233, 216, 200, 0.2)',
    dark: 'rgba(20, 32, 48, 0.1)',
  },
} as const;

export const typography = {
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Inter', system-ui, -apple-system, sans-serif",
    mono: "'JetBrains Mono', 'Courier New', monospace",
  },
  sizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    hero: '4.5rem',
    stat: '3rem',
  },
  weights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    none: 1,
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },
} as const;

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  '2xl': '4rem',
  '3xl': '6rem',
  section: '6rem',
  card: '2rem',
} as const;

export const borderRadius = {
  none: '0',
  sm: '0.25rem',
  md: '0.5rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px',
  card: '1rem',
} as const;

export const shadows = {
  sm: '0 1px 2px 0 rgba(20, 32, 48, 0.3)',
  md: '0 4px 6px -1px rgba(20, 32, 48, 0.4)',
  lg: '0 10px 15px -3px rgba(20, 32, 48, 0.5)',
  xl: '0 20px 25px -5px rgba(20, 32, 48, 0.5)',
  card: '0 4px 6px -1px rgba(20, 32, 48, 0.3)',
  glow: '0 0 40px rgba(255, 92, 141, 0.3)',
} as const;

export const components = {
  card: {
    background: colors.background.card,
    borderRadius: borderRadius.card,
    border: `1px solid ${colors.border.default}`,
    shadow: shadows.card,
    padding: spacing.card,
  },
  button: {
    borderRadius: borderRadius.md,
    paddingX: '1.5rem',
    paddingY: '0.75rem',
    primary: {
      background: colors.background.dark,
      text: colors.text.inverse,
    },
    secondary: {
      background: 'transparent',
      text: colors.text.primary,
      border: `1px solid ${colors.text.primary}`,
    },
    accent: {
      background: colors.accent.terracotta,
      text: colors.text.inverse,
    },
  },
  stat: {
    font: typography.fonts.mono,
    size: typography.sizes.stat,
    color: colors.text.primary,
    weight: typography.weights.bold,
  },
} as const;

// Type exports
export type RosePalette = typeof rosePalette;
export type LuxePalette = typeof luxePalette;
export type Colors = typeof colors;
export type Typography = typeof typography;
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type Shadows = typeof shadows;
export type Components = typeof components;

// Utility functions
export const getColor = (path: string): string => {
  const keys = path.split('.');
  let value: any = colors;

  for (const key of keys) {
    value = value[key];
    if (value === undefined) {
      throw new Error(`Invalid color path: ${path}`);
    }
  }

  return value;
};

export const getSpacing = (size: keyof typeof spacing): string => {
  return spacing[size];
};

export const getBorderRadius = (size: keyof typeof borderRadius): string => {
  return borderRadius[size];
};

export const getShadow = (type: keyof typeof shadows): string => {
  return shadows[type];
};

// CSS variable utilities
export const cssVar = (name: string): string => `var(--${name})`;

// Design system metadata
export const designSystem = {
  name: 'Interior Designers Institute Design System',
  version: '3.0.0',
  theme: 'rose-editorial',
  description: 'Rose color palette for IDI - a prestigious interior design school with 40 years of excellence',
} as const;

export default {
  colors,
  rosePalette,
  luxePalette,
  typography,
  spacing,
  borderRadius,
  shadows,
  components,
  designSystem,
};
