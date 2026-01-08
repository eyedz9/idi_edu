'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

const quickLinks = [
  { name: 'About', href: '/about' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Student Life', href: '/student-life' },
  { name: 'Contact', href: '/contact' },
];

const programs = [
  { name: 'Certificate Program', href: '/programs/certificate' },
  { name: "Associate's Degree", href: '/programs/associate' },
  { name: "Bachelor's Degree", href: '/programs/bachelor' },
  { name: "Master's Degree", href: '/programs/masters' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'LinkedIn', icon: Linkedin, href: '#' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative z-10"
      style={{
        backgroundColor: 'var(--bg-dark)',
        color: 'var(--text-primary)',
        borderTop: '1px solid var(--border-default)',
        paddingTop: '6rem',
        paddingBottom: '4rem'
      }}
    >
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8"
          style={{ marginBottom: '4rem' }}
        >
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block group" style={{ marginBottom: '1.5rem' }}>
              <Image
                src="/idi_logo_stacked.png"
                alt="Interior Designers Institute"
                width={160}
                height={53}
                className="h-12 w-auto group-hover:scale-105 transition-transform"
              />
            </Link>
            <p
              className="max-w-xs leading-relaxed"
              style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}
            >
              Orange County&apos;s only dedicated interior design school. Shaping creative professionals since 1984.
            </p>

            {/* Email Signup */}
            <div className="flex flex-col sm:flex-row gap-3" style={{ marginBottom: '2rem' }}>
              <input
                type="email"
                placeholder="Email address"
                className="rounded-full focus:outline-none transition-colors"
                style={{
                  backgroundColor: 'rgba(233, 216, 200, 0.05)',
                  border: '1px solid var(--border-default)',
                  color: 'var(--text-primary)',
                  padding: '0.75rem 1.5rem',
                  width: '100%',
                  maxWidth: '280px'
                }}
              />
              <button
                className="rounded-full font-medium transition-all hover:scale-105"
                style={{
                  backgroundColor: 'var(--accent-gold)',
                  color: 'var(--text-inverse)',
                  padding: '0.75rem 1.5rem',
                  whiteSpace: 'nowrap'
                }}
              >
                Subscribe
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105"
                    style={{
                      border: '1px solid var(--border-hover)',
                      color: 'var(--text-muted)',
                      backgroundColor: 'transparent'
                    }}
                    aria-label={`Visit our ${social.name} page`}
                  >
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4
              className="font-bricolage font-medium text-sm uppercase tracking-widest"
              style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}
            >
              Institution
            </h4>
            <div className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm transition-colors hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div className="flex flex-col">
            <h4
              className="font-bricolage font-medium text-sm uppercase tracking-widest"
              style={{ color: 'var(--text-primary)', marginBottom: '1.5rem' }}
            >
              Programs
            </h4>
            <div className="flex flex-col gap-3">
              {programs.map((program) => (
                <Link
                  key={program.name}
                  href={program.href}
                  className="text-sm transition-colors hover:translate-x-1 transition-transform"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {program.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Info Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-default)',
            paddingTop: '2.5rem',
            marginBottom: '2.5rem'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" style={{ marginBottom: '2rem' }}>
            <a
              href="https://www.google.com/maps/place/1061+Camelback+St,+Newport+Beach,+CA+92660"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                style={{ border: '1px solid var(--border-hover)' }}
              >
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm">1061 Camelback Street, Newport Beach, CA 92660</span>
            </a>
            <a
              href="tel:+19496754451"
              className="flex items-center gap-4 transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                style={{ border: '1px solid var(--border-hover)' }}
              >
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm">(949) 675-4451</span>
            </a>
            <a
              href="mailto:contact@idi.edu"
              className="flex items-center gap-4 transition-colors group"
              style={{ color: 'var(--text-secondary)' }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-105"
                style={{ border: '1px solid var(--border-hover)' }}
              >
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm">contact@idi.edu</span>
            </a>
          </div>

          {/* Accreditations */}
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="text-xs font-mono uppercase tracking-widest"
              style={{ color: 'var(--text-muted)', marginRight: '0.5rem' }}
            >
              Accredited by:
            </span>
            <span
              className="rounded-full text-xs font-mono uppercase tracking-wider"
              style={{
                border: '1px solid var(--border-default)',
                color: 'var(--text-secondary)',
                padding: '0.5rem 1rem'
              }}
            >
              CIDA
            </span>
            <span
              className="rounded-full text-xs font-mono uppercase tracking-wider"
              style={{
                border: '1px solid var(--border-default)',
                color: 'var(--text-secondary)',
                padding: '0.5rem 1rem'
              }}
            >
              ACCSC
            </span>
            <span
              className="rounded-full text-xs font-mono uppercase tracking-wider"
              style={{
                border: '1px solid var(--border-default)',
                color: 'var(--text-secondary)',
                padding: '0.5rem 1rem'
              }}
            >
              BPPE
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm"
          style={{
            borderTop: '1px solid var(--border-default)',
            paddingTop: '2rem',
            color: 'var(--text-muted)'
          }}
        >
          <p>&copy; {currentYear} Interior Designers Institute. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="transition-colors hover:opacity-80"
              style={{ color: 'var(--text-muted)' }}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="transition-colors hover:opacity-80"
              style={{ color: 'var(--text-muted)' }}
            >
              Terms
            </Link>
            <Link
              href="/accessibility"
              className="transition-colors hover:opacity-80"
              style={{ color: 'var(--text-muted)' }}
            >
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
