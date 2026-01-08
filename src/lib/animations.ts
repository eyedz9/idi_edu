/**
 * Animation Utilities for IDI Website
 * Premium Framer Motion variants and configuration
 */

import { Variants } from 'framer-motion';

// Easing functions for smooth, professional animations
export const easing = {
  easeOutQuart: [0.25, 0.46, 0.45, 0.94],
  easeInOutQuart: [0.76, 0, 0.24, 1],
  easeOutExpo: [0.16, 1, 0.3, 1],
  easeInOutExpo: [0.87, 0, 0.13, 1],
} as const;

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuart,
    },
  },
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuart,
    },
  },
};

// Slide down animation
export const slideDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuart,
    },
  },
};

// Slide from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuart,
    },
  },
};

// Slide from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: easing.easeOutQuart,
    },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easing.easeOutQuart,
    },
  },
};

// Stagger container for animating children sequentially
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Fast stagger for quick reveals
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// Stagger item (use as child of staggerContainer)
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easing.easeOutQuart,
    },
  },
};

// Clip text reveal (for hero headlines)
export const clipText: Variants = {
  hidden: {
    clipPath: 'inset(100% 0 0 0)',
    opacity: 0,
    y: 20,
  },
  visible: {
    clipPath: 'inset(0% 0 0 0)',
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easing.easeOutQuart,
    },
  },
};

// Card hover animation config
export const cardHover = {
  rest: {
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
  hover: {
    scale: 1.02,
    y: -4,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

// Button press animation config
export const buttonPress = {
  rest: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
    },
  },
};

// Utility: Check if user prefers reduced motion
export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

// Utility: Get animation props respecting reduced motion preference
export const getAnimationProps = (variants: Variants, options?: {
  viewport?: { once?: boolean; margin?: string; amount?: number };
  delay?: number;
}) => {
  const shouldAnimate = !prefersReducedMotion();

  return {
    variants: shouldAnimate ? variants : {},
    initial: shouldAnimate ? 'hidden' : 'visible',
    whileInView: shouldAnimate ? 'visible' : undefined,
    viewport: options?.viewport || { once: true, margin: '-100px' },
    transition: options?.delay ? { delay: options.delay } : undefined,
  };
};

// Navigation link underline animation
export const navUnderline = {
  rest: {
    scaleX: 0,
    opacity: 0,
  },
  hover: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut" as const,
    },
  },
};

// Scroll indicator pulse
export const scrollIndicatorPulse = {
  animate: {
    y: [0, 8, 0],
    opacity: [1, 0.5, 1],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      ease: [0.42, 0, 0.58, 1], // easeInOut bezier curve
    },
  },
};
