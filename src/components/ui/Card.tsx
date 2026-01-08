'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { cardHover } from '@/lib/animations';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

/**
 * Card - Animated card component with hover lift effect
 *
 * @example
 * <Card hover>
 *   <h3>Card Title</h3>
 *   <p>Card content</p>
 * </Card>
 */
export function Card({
  children,
  className = '',
  hover = true,
  onClick,
}: CardProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const baseStyles =
    'bg-background-card border border-border-default rounded-[var(--radius-card)] p-8 transition-shadow duration-300';

  const hoverStyles = hover
    ? 'hover:shadow-[var(--shadow-card)] hover:border-border-hover'
    : '';

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  const animationProps =
    !prefersReducedMotion && hover
      ? {
          initial: 'rest',
          whileHover: 'hover',
          variants: cardHover,
        }
      : {};

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
}

/**
 * CardWithGlow - Card with subtle glow effect on hover
 * Perfect for highlighting important content
 */
export function CardWithGlow({
  children,
  className = '',
  onClick,
}: Omit<CardProps, 'hover'>) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const baseStyles =
    'bg-background-card border border-border-default rounded-[var(--radius-card)] p-8 transition-all duration-300';

  const hoverStyles = 'hover:shadow-[var(--shadow-glow)] hover:border-accent-terracotta/30';

  const clickableStyles = onClick ? 'cursor-pointer' : '';

  const animationProps = !prefersReducedMotion
    ? {
        whileHover: {
          scale: 1.02,
          y: -4,
          boxShadow: '0 0 40px rgba(196, 114, 93, 0.2)',
        },
        transition: { duration: 0.3, ease: "easeOut" as const },
      }
    : {};

  return (
    <motion.div
      className={`${baseStyles} ${hoverStyles} ${clickableStyles} ${className}`}
      onClick={onClick}
      initial={{ scale: 1, y: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
}

/**
 * CardGrid - Responsive grid for cards
 *
 * @example
 * <CardGrid columns={3}>
 *   <Card>Card 1</Card>
 *   <Card>Card 2</Card>
 *   <Card>Card 3</Card>
 * </CardGrid>
 */
export function CardGrid({
  children,
  columns = 3,
  className = '',
}: {
  children: ReactNode;
  columns?: 1 | 2 | 3 | 4;
  className?: string;
}) {
  const columnStyles = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  return (
    <div className={`grid ${columnStyles[columns]} gap-6 ${className}`}>
      {children}
    </div>
  );
}
