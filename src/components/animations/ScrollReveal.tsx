'use client';

import { motion, Variants } from 'framer-motion';
import { ReactNode } from 'react';
import { slideUp, slideDown, slideLeft, slideRight, fadeIn, scaleIn, easing } from '@/lib/animations';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade' | 'scale';
  duration?: number;
  once?: boolean;
}

const directionVariants = {
  up: slideUp,
  down: slideDown,
  left: slideLeft,
  right: slideRight,
  fade: fadeIn,
  scale: scaleIn,
};

/**
 * ScrollReveal - Animate elements when they scroll into view
 *
 * @example
 * <ScrollReveal direction="up" delay={0.2}>
 *   <h2>Animated Heading</h2>
 * </ScrollReveal>
 */
export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  // Check for reduced motion preference
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    // If user prefers reduced motion, just render without animation
    return <div className={className}>{children}</div>;
  }

  const variants = directionVariants[direction];

  // Create custom variants with duration and delay
  const customVariants: Variants = {
    hidden: variants.hidden,
    visible: {
      ...variants.visible,
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
      whileInView="visible"
      viewport={{ once, margin: '-100px' }}
      variants={customVariants}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealStagger - Animate children sequentially when parent scrolls into view
 *
 * @example
 * <ScrollRevealStagger staggerDelay={0.1}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </ScrollRevealStagger>
 */
export function ScrollRevealStagger({
  children,
  className = '',
  staggerDelay = 0.1,
  delayChildren = 0.2,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  delayChildren?: number;
  once?: boolean;
}) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren,
      },
    },
  };

  const itemVariants: Variants = {
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

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-100px' }}
      variants={containerVariants}
    >
      {Array.isArray(children)
        ? children.map((child, index) => (
            <motion.div key={index} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}
