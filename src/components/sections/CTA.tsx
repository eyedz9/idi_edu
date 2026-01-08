'use client';

import Link from 'next/link';
import { ArrowRight, ArrowUpRight, Calendar, Mail } from 'lucide-react';

const actions = [
  {
    icon: ArrowUpRight,
    title: 'Apply Now',
    description:
      "Start your application today. Rolling admissions mean you can begin when you're ready.",
    href: '/admissions',
    primary: true,
  },
  {
    icon: Calendar,
    title: 'Schedule a Visit',
    description:
      'Tour our Newport Beach campus and see our studios, classrooms, and student work.',
    href: '/contact',
    primary: false,
  },
  {
    icon: Mail,
    title: 'Contact Us',
    description: 'Questions? Our admissions team is here to help you find the right program.',
    href: '/contact',
    primary: false,
  },
];

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', paddingTop: '10rem', paddingBottom: '10rem' }}>
      {/* Animated Gradient Background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(-45deg, #142030, #1E3442, #142030, #1a2a3d, #142030)',
          backgroundSize: '400% 400%',
        }}
      ></div>

      {/* Gradient Overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 50% 0%, rgba(255, 92, 141, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(115, 37, 83, 0.1) 0%, transparent 50%)',
        }}
      ></div>

      {/* Background Section Number */}
      <div className="absolute top-12 left-6 md:left-12 z-0 opacity-[0.03] font-bricolage font-bold text-[8rem] md:text-[12rem] leading-none pointer-events-none select-none" style={{ color: 'var(--text-primary)' }}>
        START
      </div>

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center animate-on-scroll" style={{ marginBottom: '4rem' }}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Get Started</span>
            <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
          </div>
          <h2 className="leading-[0.9]">
            <span className="block text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-primary)' }}>
              START YOUR
            </span>
            <span className="flex items-baseline justify-center gap-3 md:gap-4">
              <span className="text-3xl md:text-5xl font-display italic font-light" style={{ color: 'var(--text-muted)' }}>design</span>
              <span className="text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-muted)' }}>JOURNEY.</span>
            </span>
          </h2>
          <p className="text-lg max-w-xl mx-auto font-light mt-6" style={{ color: 'var(--text-secondary)' }}>
            Join 40 years of design excellence. Your future in interior design starts here.
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {actions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={action.title}
                href={action.href}
                className="group block rounded-2xl transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
                style={{
                  animationDelay: `${0.1 + index * 0.1}s`,
                  backgroundColor: action.primary ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                  border: action.primary ? 'none' : '1px solid var(--border-default)',
                  padding: '2rem'
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
                  style={{
                    backgroundColor: action.primary ? 'rgba(20, 32, 48, 0.2)' : 'rgba(255, 92, 141, 0.1)',
                    color: action.primary ? 'var(--text-inverse)' : 'var(--accent-gold)'
                  }}
                >
                  <Icon className="w-6 h-6" strokeWidth={2} />
                </div>

                <h3
                  className="text-2xl font-bricolage font-semibold mb-3"
                  style={{ color: action.primary ? 'var(--text-inverse)' : 'var(--text-primary)' }}
                >
                  {action.title}
                </h3>

                <p
                  className="text-sm mb-6 leading-relaxed"
                  style={{ color: action.primary ? 'rgba(20, 32, 48, 0.8)' : 'var(--text-muted)' }}
                >
                  {action.description}
                </p>

                <div
                  className="inline-flex items-center font-semibold text-sm"
                  style={{ color: action.primary ? 'var(--text-inverse)' : 'var(--accent-gold)' }}
                >
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="text-center pt-8 animate-on-scroll" style={{ borderTop: '1px solid var(--border-default)' }}>
          <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
            Questions? We&apos;re here to help.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="tel:9496754451"
              className="font-semibold transition-colors hover:opacity-80"
              style={{ color: 'var(--text-primary)' }}
            >
              (949) 675-4451
            </a>
            <span className="hidden md:inline" style={{ color: 'var(--text-muted)' }}>•</span>
            <a
              href="mailto:contact@idi.edu"
              className="font-semibold transition-colors hover:opacity-80"
              style={{ color: 'var(--text-primary)' }}
            >
              contact@idi.edu
            </a>
            <span className="hidden md:inline" style={{ color: 'var(--text-muted)' }}>•</span>
            <p style={{ color: 'var(--text-muted)' }}>
              1061 Camelback Street, Newport Beach, CA 92660
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
