'use client';

import Image from 'next/image';
import { MapPin, Building2, Store, Palette, ArrowUpRight } from 'lucide-react';

const locationBenefits = [
  /*{
    icon: Building2,
    title: 'Design District Access',
    description: 'Located in the heart of Orange County\'s design community with easy access to showrooms and studios.',
  },*/
  {
    icon: Store,
    title: 'Laguna Design Center',
    description: 'Minutes from premier design showrooms featuring the latest in furniture, fabrics, and finishes.',
    image: '/Laguna-Design-Center-sq.jpg',
  },
  {
    icon: Palette,
    title: 'South Coast Collection',
    description: 'Proximity to SOCO and other design destinations keeps you connected to industry trends.',
    image: '/soco.jpg',
  },
];

export function Location() {
  return (
    <section id="location" className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light)', color: 'var(--text-dark)', paddingTop: '10rem', paddingBottom: '10rem' }}>
      {/* Background Texture Image */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <Image
          src="/npb.avif"
          alt="Newport Beach California coastline near Interior Designers Institute campus"
          fill
          className="object-cover"
        />
      </div>

      {/* Background Section Number */}
      <div className="absolute top-12 right-6 md:right-12 z-0 opacity-[0.03] font-bricolage font-bold text-[8rem] md:text-[12rem] leading-none pointer-events-none select-none" style={{ color: 'var(--text-dark)' }}>
        LOCATION
      </div>

      {/* Background Dot Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--text-dark) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      ></div>

      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 animate-on-scroll" style={{ marginBottom: '4rem' }}>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-dark-secondary)' }}>Our Campus</span>
            </div>
            <h2 className="leading-[0.9]">
              <span className="block text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-dark)' }}>
                HEART OF
              </span>
              <span className="flex items-baseline gap-3 md:gap-4">
                <span className="text-3xl md:text-5xl font-display italic font-light" style={{ color: 'var(--text-dark-secondary)' }}>Orange County</span>
                <span className="text-5xl md:text-7xl font-hero tracking-tight" style={{ color: 'var(--text-dark-secondary)' }}>DESIGN.</span>
              </span>
            </h2>
          </div>

          <p className="text-lg max-w-md font-light pl-6" style={{ color: 'var(--text-dark-secondary)', borderLeft: '1px solid var(--accent-gold)', paddingLeft: '0.85rem' }}>
            Our Newport Beach campus places you at the center of Southern California's thriving design industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="relative animate-on-scroll rounded-2xl overflow-hidden" style={{ height: '500px', border: '1px solid var(--border-dark)' }}>
            {/* Live Google Map */}
            <iframe
              src="https://maps.google.com/maps?q=1061+Camelback+Street,+Newport+Beach,+CA+92660&t=m&z=16&output=embed&iwloc=near"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Interior Designers Institute Location"
            ></iframe>

            {/* Address Card Overlay */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl backdrop-blur-xl"
              style={{
                backgroundColor: 'rgba(20, 32, 48, 0.85)',
                border: '1px solid var(--border-default)',
                boxShadow: 'var(--shadow-xl)'
              }}
            >
              <div className="text-center" style={{ padding: '1.5rem' }}>
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)' }}
                >
                  <MapPin className="w-7 h-7" strokeWidth={1.5} />
                </div>
                <p className="text-lg font-bricolage font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  1061 Camelback Street
                </p>
                <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
                  Newport Beach, CA 92660
                </p>
                <a
                  href="https://maps.google.com/?q=1061+Camelback+Street+Newport+Beach+CA+92660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-medium text-sm transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)' }}
                >
                  Get Directions
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            {locationBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const hasImage = 'image' in benefit && benefit.image;
              return (
                <div
                  key={benefit.title}
                  className="group flex gap-6 rounded-2xl transition-all duration-300 animate-on-scroll"
                  style={{
                    animationDelay: `${0.1 + index * 0.1}s`,
                    backgroundColor: 'rgba(20, 32, 48, 0.05)',
                    border: '1px solid var(--border-dark)',
                    padding: '1.5rem'
                  }}
                >
                  {hasImage ? (
                    <div className="flex-shrink-0 overflow-hidden group-hover:scale-105 transition-all duration-300" style={{ width: '200px', height: '200px' }}>
                      <Image
                        src={benefit.image as string}
                        alt={benefit.title}
                        width={200}
                        height={200}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div
                      className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300"
                      style={{
                        backgroundColor: 'var(--bg-primary)',
                        color: 'var(--text-primary)'
                      }}
                    >
                      <Icon className="w-7 h-7" strokeWidth={1.5} />
                    </div>
                  )}
                  <div>
                    <h4 className="text-xl font-bricolage font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>
                      {benefit.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dark-secondary)' }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Additional Info */}
            <div className="pt-6 animate-on-scroll" style={{ borderTop: '1px solid var(--border-dark)', marginTop: '1.5rem' }}>
              <p className="leading-relaxed" style={{ color: 'var(--text-dark-secondary)' }}>
                Newport Beach offers the perfect environment for design students—close to beaches for inspiration,
                surrounded by luxury homes showcasing cutting-edge interior design, and connected to LA's broader
                design community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
