'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative w-full min-h-screen overflow-hidden flex flex-col justify-end pb-12 md:pb-24" style={{paddingBottom: '12rem'}}>
      {/* Background Video with Fallback Image */}
      <div className="absolute inset-0 z-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
        {/* Fallback Image (shows while video loads or if video fails) */}
        <Image
          src="/idi_hero.jpg"
          alt="Interior design studio workspace"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Video overlay */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/idi_hero.jpg"
          className="absolute inset-0 w-full h-full object-cover animate-cinematic opacity-0"
        >
          <source src="/idi_hero.mp4" type="video/mp4" />
        </video>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#142030] via-[#142030]/20 to-transparent opacity-80"></div>
        <div className="absolute inset-0 mix-blend-overlay" style={{ backgroundColor: 'rgba(20, 32, 48, 0.1)' }}></div>
      </div>

      {/* Floating Data Point */}
      <div className="absolute top-32 right-6 md:right-12 z-20 flex flex-col items-end gap-2 animate-slide-up opacity-0" style={{ animationDelay: '2.5s', animationFillMode: 'forwards' }}>
        <div className="px-4 py-2 rounded-lg backdrop-blur-md flex items-center gap-3" style={{ backgroundColor: 'rgba(20, 32, 48, 0.6)', borderColor: 'var(--border-default)', borderWidth: '1px' }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: 'var(--accent-emerald)' }}></span>
          <span className="text-xs font-mono tracking-wider uppercase" style={{ color: 'var(--text-secondary)' }}>Enrolling Now: Spring 2026</span>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-10 w-full max-w-[90rem] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">

        {/* Left Column: Primary Headline */}
        <div className="md:col-span-7 relative">
          {/* Decorative Label */}
          <div className="flex items-center gap-3 mb-6 animate-slide-up opacity-0" style={{ animationDelay: '1.2s', animationFillMode: 'forwards' }}>
            <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
            <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Est. 1984</span>
          </div>

          <h1 className="leading-[0.9] tracking-tight" style={{ color: 'var(--text-primary)' }}>
            <span
              className="block text-[10vw] md:text-[5rem] lg:text-[6rem] animate-slide-up opacity-0 font-bricolage font-light tracking-wide"
              style={{ animationDelay: '1.4s', animationFillMode: 'forwards', color: 'var(--text-muted)' }}
            >
              WHERE
            </span>
            <span
              className="block text-[18vw] md:text-[12rem] lg:text-[14rem] animate-slide-up opacity-0 mix-blend-normal drop-shadow-2xl -mt-2 md:-mt-4 font-hero tracking-tight"
              style={{ animationDelay: '1.5s', animationFillMode: 'forwards', color: 'var(--text-primary)' }}
            >
              DESIGNERS
            </span>
            <div
              className="flex items-baseline gap-3 md:gap-5 -mt-2 md:-mt-4 animate-slide-up opacity-0"
              style={{ animationDelay: '1.6s', animationFillMode: 'forwards' }}
            >
              <span className="text-[10vw] md:text-[5rem] lg:text-[6rem] font-display italic font-light" style={{ color: 'var(--text-muted)' }}>are</span>
              <span className="text-[18vw] md:text-[12rem] lg:text-[14rem] drop-shadow-2xl font-hero tracking-tight" style={{ color: 'var(--text-primary)' }}>MADE</span>
            </div>
          </h1>
        </div>

        {/* Right Column: Description & Stats Card */}
        <div className="md:col-span-4 md:col-start-9 flex flex-col justify-end pb-4 md:pb-8">
          {/* Glassmorphism Card */}
          <div
            className="relative overflow-hidden glass-card p-8 animate-slide-up opacity-0"
            style={{ animationDelay: '1.8s', animationFillMode: 'forwards' }}
          >
            {/* Shimmer Overlay */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent to-transparent z-0 pointer-events-none animate-shimmer-effect" style={{ background: 'linear-gradient(to right, transparent, rgba(255, 92, 141, 0.05), transparent)' }}></div>

            <div className="relative z-10" style={{padding: '1.25rem'}}>
              <p className="text-lg md:text-xl font-light leading-relaxed mb-8 antialiased drop-shadow-md" style={{ color: 'var(--text-primary)' }}>
                Orange County&apos;s only dedicated interior design school. CIDA-accredited programs taught by practicing professionals.
              </p>

              <div className="flex flex-col gap-6">
                <div className="grid grid-cols-2 gap-4 pt-6" style={{ borderTopWidth: '1px', borderTopColor: 'var(--border-default)' }}>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Years</span>
                    <span className="text-2xl font-bricolage" style={{ color: 'var(--accent-gold)' }}>40+</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-widest mb-1" style={{ color: 'var(--text-muted)' }}>Graduation Rate</span>
                    <span className="text-2xl font-bricolage" style={{ color: 'var(--accent-gold)' }}>88%</span>
                  </div>
                </div>

                <Link
                  href="/programs"
                  className="group flex items-center justify-between w-full p-1 pb-2 transition-colors"
                  style={{ borderBottomWidth: '1px', borderBottomColor: 'var(--border-hover)' }}
                >
                  <span className="text-sm font-medium tracking-wide" style={{ color: 'var(--text-primary)' }}>Explore Programs</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" style={{ color: 'var(--accent-gold)' }} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-slide-up opacity-0"
        style={{ animationDelay: '2.2s', animationFillMode: 'forwards' }}
      >
        <span className="text-[10px] uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>Scroll</span>
        <div className="w-[1px] h-12" style={{ background: 'linear-gradient(to bottom, var(--text-primary), transparent)' }}></div>
      </div>
    </header>
  );
}
