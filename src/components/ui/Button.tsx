'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { buttonPress } from '@/lib/animations';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

/**
 * Button - Animated button component with multiple variants
 *
 * @example
 * <Button href="/apply" variant="primary">Apply Now</Button>
 * <Button onClick={handleClick} variant="outline">Learn More</Button>
 */
export function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Base styles
  const baseStyles =
    'inline-flex items-center justify-center font-body font-semibold rounded-md transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-terracotta focus-visible:ring-offset-2';

  // Variant styles
  const variantStyles = {
    primary:
      'bg-accent-terracotta text-text-inverse hover:bg-accent-terracotta-hover shadow-lg hover:shadow-xl',
    secondary:
      'bg-accent-gold text-text-primary hover:bg-accent-gold-light shadow-md hover:shadow-lg',
    outline:
      'border-2 border-text-inverse text-text-inverse hover:bg-text-inverse/10 backdrop-blur-sm',
  };

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  // Disabled styles
  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : '';

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles} ${className}`;

  // Animation variants
  const animationProps = prefersReducedMotion
    ? {}
    : {
        initial: 'rest',
        whileHover: disabled ? 'rest' : 'hover',
        whileTap: disabled ? 'rest' : 'tap',
        variants: buttonPress,
      };

  // If href is provided, render as Link
  if (href) {
    return (
      <Link href={href} className="inline-block">
        <motion.button
          className={combinedClassName}
          disabled={disabled}
          {...animationProps}
        >
          {children}
        </motion.button>
      </Link>
    );
  }

  // Otherwise render as button
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={combinedClassName}
      disabled={disabled}
      {...animationProps}
    >
      {children}
    </motion.button>
  );
}

/**
 * ButtonGroup - Group multiple buttons with consistent spacing
 *
 * @example
 * <ButtonGroup>
 *   <Button variant="primary">Primary Action</Button>
 *   <Button variant="outline">Secondary Action</Button>
 * </ButtonGroup>
 */
export function ButtonGroup({
  children,
  className = '',
  align = 'center',
}: {
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
}) {
  const alignStyles = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };

  return (
    <div className={`flex gap-4 flex-wrap ${alignStyles[align]} ${className}`}>
      {children}
    </div>
  );
}
