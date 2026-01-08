'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProgramComparisonCardProps {
  title: string;
  credential: string;
  duration: string;
  tuition: string;
  description: string;
  href: string;
  isCIDA?: boolean;
}

export function ProgramComparisonCard({
  title,
  credential,
  duration,
  tuition,
  description,
  href,
  isCIDA = false,
}: ProgramComparisonCardProps) {
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <motion.div
      className={`bg-background-card border rounded-[var(--radius-card)] p-8 group ${
        isCIDA ? 'border-accent-terracotta/50' : 'border-border-default'
      } hover:shadow-[var(--shadow-card)] transition-shadow duration-300`}
      initial={{ y: 0, scale: 1 }}
      whileHover={prefersReducedMotion ? undefined : { y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="mb-6">
          <h3 className="font-heading text-2xl mb-2 group-hover:text-accent-terracotta transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-secondary">{credential}</p>
          {isCIDA && (
            <motion.span
              className="inline-block mt-2 px-3 py-1 bg-accent-terracotta text-text-inverse text-xs font-mono rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              CIDA ACCREDITED
            </motion.span>
          )}
        </div>

        {/* Details */}
        <div className="mb-6 space-y-3">
          <div>
            <span className="text-text-muted text-sm block mb-1">Duration</span>
            <span className="font-mono text-text-primary">{duration}</span>
          </div>
          <div>
            <span className="text-text-muted text-sm block mb-1">Tuition</span>
            <span className="font-mono text-xl text-accent-terracotta">{tuition}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-text-secondary mb-6 flex-grow">{description}</p>

        {/* CTA */}
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-accent-terracotta font-medium group/link"
        >
          Learn More
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>

      {/* Subtle glow on hover for CIDA card */}
      {isCIDA && (
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-[var(--radius-card)]"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          style={{
            boxShadow: '0 0 30px rgba(196, 114, 93, 0.2)',
          }}
        />
      )}
    </motion.div>
  );
}
