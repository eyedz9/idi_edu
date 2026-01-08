'use client';

import { useEffect } from 'react';

export function ScrollAnimationInit() {
  useEffect(() => {
    // Helper to check if element is in viewport
    const isInViewport = (el: Element) => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      );
    };

    // Immediately animate elements already in view
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      if (isInViewport(el)) {
        el.classList.add('animate');
      }
    });

    // Create IntersectionObserver for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Only animate once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -5% 0px',
      }
    );

    // Observe elements that haven't animated yet
    elements.forEach((el) => {
      if (!el.classList.contains('animate')) {
        observer.observe(el);
      }
    });

    // Handle hash navigation - animate elements when scrolling to anchor
    const handleHashChange = () => {
      setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll:not(.animate)');
        elements.forEach((el) => {
          if (isInViewport(el)) {
            el.classList.add('animate');
            observer.unobserve(el);
          }
        });
      }, 100); // Small delay to let scroll complete
    };

    window.addEventListener('hashchange', handleHashChange);

    // Also handle smooth scroll completion
    let scrollTimeout: NodeJS.Timeout;
    const handleScroll = () => {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        const elements = document.querySelectorAll('.animate-on-scroll:not(.animate)');
        elements.forEach((el) => {
          if (isInViewport(el)) {
            el.classList.add('animate');
            observer.unobserve(el);
          }
        });
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return null;
}
