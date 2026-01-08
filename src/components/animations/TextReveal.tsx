'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { easing } from '@/lib/animations';

interface TextRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

/**
 * TextReveal - Elegant text reveal animation for headlines
 * Uses clip-path to reveal text from bottom to top
 *
 * @example
 * <TextReveal className="text-6xl font-bold">
 *   Design Your Future
 * </TextReveal>
 */
export function TextReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.8,
}: TextRevealProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
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
        duration,
        delay,
        ease: easing.easeOutQuart,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

/**
 * TextRevealWords - Reveal text word by word
 * Great for creating dramatic entrances
 *
 * @example
 * <TextRevealWords text="Design Your Future" />
 */
export function TextRevealWords({
  text,
  className = '',
  delay = 0,
  staggerDelay = 0.08,
}: {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
}) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className={className}>{text}</div>;
  }

  const words = text.split(' ');

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const wordVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.5,
        ease: easing.easeOutQuart,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          className="inline-block mr-2"
          variants={wordVariants}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
}

/**
 * TextRevealBlur - Reveal text with blur effect
 * Subtle and elegant for subheadings
 *
 * @example
 * <TextRevealBlur delay={0.3}>
 *   Orange County's premier interior design school
 * </TextRevealBlur>
 */
export function TextRevealBlur({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
}: TextRevealProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const variants: Variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: 10,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: {
        duration,
        delay,
        ease: easing.easeOutQuart,
      },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
