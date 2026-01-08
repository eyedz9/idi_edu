'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <motion.div
            key={index}
            className="bg-background-card border border-border-default rounded-[var(--radius-md)] overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.4,
              delay: index * 0.05,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Question Button */}
            <motion.button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-background-secondary transition-colors"
              aria-expanded={isOpen}
              whileHover={prefersReducedMotion ? {} : { x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <span className="font-heading text-lg pr-4">{item.question}</span>
              <motion.div
                animate={
                  prefersReducedMotion
                    ? {}
                    : { rotate: isOpen ? 180 : 0 }
                }
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <ChevronDown className="w-5 h-5 text-accent-terracotta flex-shrink-0" />
              </motion.div>
            </motion.button>

            {/* Answer Content */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                  animate={
                    prefersReducedMotion
                      ? {}
                      : { height: 'auto', opacity: 1 }
                  }
                  exit={prefersReducedMotion ? {} : { height: 0, opacity: 0 }}
                  transition={{
                    duration: 0.3,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                  className="overflow-hidden"
                >
                  <motion.div
                    initial={prefersReducedMotion ? {} : { y: -10 }}
                    animate={prefersReducedMotion ? {} : { y: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="px-6 py-4 bg-background-secondary text-text-secondary"
                  >
                    {item.answer}
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
