'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Programs', href: '/programs' },
  { name: 'About', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'Contact', href: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    // Trigger entrance animation after mount
    const timer = setTimeout(() => setIsVisible(true), 500);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={cn(
        'fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-1000',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      )}
    >
      <nav
        className={cn(
          'w-full max-w-6xl flex items-center justify-between px-2 py-2 pr-6 backdrop-blur-xl rounded-full shadow-2xl transition-all duration-300'
        )}
        style={{
          borderWidth: '1px',
          borderColor: 'var(--border-default)',
          backgroundColor: isScrolled ? 'rgba(20, 32, 48, 0.95)' : 'rgba(20, 32, 48, 0.85)',
          padding: '0.25rem 1rem'
        }}
      >
        {/* Logo Area */}
        <Link
          href="/"
          className="flex items-center pl-4 group cursor-pointer"
          onClick={closeMobileMenu}
        >
          <Image
            src="/idi_logo_stacked.png"
            alt="Interior Designers Institute"
            width={120}
            height={40}
            className="h-8 w-auto group-hover:scale-105 transition-transform"
            priority
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="transition-colors focus-visible:outline-none cursor-pointer hover:text-[var(--text-primary)]"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/admissions"
            className="px-5 py-2.5 font-medium rounded-full transition-all text-sm cursor-pointer"
            style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)', padding: '0.25rem 3rem' }}
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden w-10 h-10 rounded-full flex items-center justify-center transition-colors"
          style={{ color: 'var(--text-secondary)' }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation Panel */}
      <div
        id="mobile-menu"
        className={cn(
          'md:hidden fixed top-24 left-4 right-4 backdrop-blur-xl rounded-3xl overflow-hidden transition-all duration-300 shadow-2xl',
          isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0'
            : 'opacity-0 invisible -translate-y-4 pointer-events-none'
        )}
        style={{ backgroundColor: 'rgba(20, 32, 48, 0.98)', borderWidth: '1px', borderColor: 'var(--border-default)' }}
        aria-hidden={!isMobileMenuOpen}
      >
        <nav className="flex flex-col p-4" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={closeMobileMenu}
              className="block px-4 py-4 min-h-[48px] rounded-xl transition-colors cursor-pointer"
              style={{ color: 'var(--text-secondary)' }}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile CTAs */}
          <div className="flex flex-col gap-3 mt-4 pt-4" style={{ borderTopWidth: '1px', borderTopColor: 'var(--border-default)' }}>
            <Link
              href="/admissions"
              onClick={closeMobileMenu}
              className="text-center px-6 py-3.5 min-h-[48px] font-semibold rounded-full transition-all duration-200 cursor-pointer"
              style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)' }}
            >
              Apply Now
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
