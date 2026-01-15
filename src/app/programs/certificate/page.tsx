'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  CheckCircle2,
  Clock,
  DollarSign,
  GraduationCap,
  Users,
  Palette,
  Monitor,
  MapPin,
  Calendar,
  Star,
  ArrowRight,
  Play,
  Sparkles,
  Building2,
  HandshakeIcon,
  BookOpen,
  Lightbulb,
  Award,
  MessageCircle
} from 'lucide-react';

// Lecture Series Topics (from content.md)
const lectureTopics = [
  'Beautiful Kitchens',
  'Luxury Bathroom',
  'Great Windows and Walls',
  'Magic of Color',
  'Natural and Healthy Home',
  'History of the Chair',
  'Outdoor Spaces',
  'High-Tech Home',
  'Indoor Plantscaping',
  'Design Resources',
  'Floors That Rock',
  'Home Staging',
  'Principles & Elements of Design',
  'Planning the Space',
];

// Studio Workshop Topics (from content.md)
const studioWorkshops = [
  'Tools and Equipment',
  'Drafting and Spaceplanning',
  'Color Systems and Solutions',
  'Furniture Specifications',
  'Textile Specifications',
  'Concept Development',
  'Finalizing the Concept',
  'Design Concept',
];

// Why in-person learning benefits
const inPersonBenefits = [
  {
    icon: Users,
    title: 'Hands-On Learning',
    description: 'Touch real materials, see actual color samples, and work with physical space—something online courses can\'t replicate.',
  },
  {
    icon: HandshakeIcon,
    title: 'Industry Networking',
    description: 'Build relationships with instructors and classmates who become your professional network in Orange County\'s design community.',
  },
  {
    icon: MessageCircle,
    title: 'Real-Time Feedback',
    description: 'Get immediate, personalized critiques from practicing designers. No waiting days for email responses.',
  },
  {
    icon: Building2,
    title: 'Studio Access',
    description: 'Use our professional-grade design studios, materials library, and industry resources throughout your program.',
  },
  {
    icon: MapPin,
    title: 'Design District Location',
    description: 'Newport Beach puts you minutes from Laguna Design Center, SOCO, and major design showrooms for field trips.',
  },
  {
    icon: Lightbulb,
    title: 'Collaborative Environment',
    description: 'Learn alongside peers, share ideas, and get inspired by different perspectives in our intimate class setting.',
  },
];

// Testimonials
const testimonials = [
  {
    quote: "I was skeptical about going back to school, but the 12-week certificate gave me exactly what I needed to start my design business. The hands-on experience was invaluable.",
    name: "Sarah M.",
    title: "Now runs her own staging company",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    quote: "As a real estate agent, understanding design has transformed how I help clients. The certificate program fit perfectly into my schedule.",
    name: "Michael R.",
    title: "Real Estate Professional",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
  {
    quote: "The instructors are actual working designers. They shared real projects, real challenges, and real solutions. That's something you can't get from YouTube videos.",
    name: "Jennifer L.",
    title: "Continued to Associate Program",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
];

// What's included
const whatsIncluded = [
  'All course materials and supplies',
  'Access to materials library (500+ samples)',
  'Design studio access during program',
  'Industry software tutorials',
  'Field trip to Laguna Design Center',
  'Certificate of Completion',
  'Portfolio review session',
  'Career guidance consultation',
];

// FAQ items (with accurate data from content.md)
const faqItems = [
  {
    question: 'How long is the Certificate program?',
    answer: 'The Certificate of Interior Design is a 12-week program. Classes meet twice per week (in-person options: Tue/Wed or Tue/Thu 9:00-11:30 AM, or hybrid option: Tue/Thu 6:00-8:30 PM online).',
  },
  {
    question: 'What is the tuition for the Certificate program?',
    answer: 'The total tuition is $2,795, which includes tuition ($2,400), registration fee ($95), supply kit/notebook/textbook/bag ($300), and estimated additional supplies ($250). You can register for Lecture Series OR Studio Workshop separately at $1,200 each.',
  },
  {
    question: 'Do I need any prior experience or prerequisites?',
    answer: 'No prior experience or prerequisites are required! This program is designed for complete beginners. All you need is curiosity about interior design and a willingness to learn.',
  },
  {
    question: 'Can I work while taking this program?',
    answer: 'Absolutely. The program is specifically designed for working professionals with in-person morning options (Tue/Wed or Tue/Thu 9:00-11:30 AM) or hybrid evening classes (Tue/Thu 6:00-8:30 PM online) to fit your schedule.',
  },
  {
    question: 'What will I learn in the lecture series?',
    answer: 'The lecture series covers 14 topics including Beautiful Kitchens, Luxury Bathroom, Magic of Color, History of the Chair, High-Tech Home, Principles & Elements of Design, and more. You\'ll also take field trips to Laguna Design Center and Stonemill Design Center.',
  },
  {
    question: 'Is this program CIDA accredited?',
    answer: 'The Certificate program is not CIDA accredited (CIDA accreditation applies to our Bachelor\'s program). However, it\'s taught by the same professional faculty and provides excellent foundational education.',
  },
  {
    question: 'Can credits transfer to a degree program?',
    answer: 'Yes! Certificate completers may continue to the AA program with just a $100 registration fee and will be awarded 8 quarter credit units toward the Associate degree.',
  },
  {
    question: 'What can I do with a certificate?',
    answer: 'Graduates use the certificate to: start freelance residential design consulting, enhance adjacent careers (real estate, staging), prepare for degree programs, or simply gain design literacy for personal projects.',
  },
  {
    question: 'Why should I choose in-person over online courses?',
    answer: 'Interior design is inherently tactile and spatial. In-person learning lets you touch materials, see true colors, understand scale, get immediate feedback, and build real relationships with instructors and peers.',
  },
  {
    question: 'When does the next cohort start?',
    answer: 'Next start date: January 12 - April 4, 2026. Contact admissions at (949) 675-4451 or visit our campus to reserve your spot.',
  },
];

// FAQ Schema for AEO
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqItems.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function CertificatePage() {
  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>
      {/* Schema.org JSON-LD for AEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{ paddingTop: '10rem', paddingBottom: '10rem' }}>
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 animate-gradient-shift"
            style={{
              background: 'linear-gradient(-45deg, #142030, #1E3442, #142030, #1a2a3d, #142030)',
              backgroundSize: '400% 400%',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse at 30% 20%, rgba(255, 92, 141, 0.15) 0%, transparent 50%)',
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm mb-8" style={{ color: 'var(--text-muted)' }}>
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
            <span>/</span>
            <span style={{ color: 'var(--accent-gold)' }}>Certificate</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6" style={{ backgroundColor: 'rgba(255, 92, 141, 0.15)', border: '1px solid rgba(255, 92, 141, 0.3)', padding: '0.25rem 1rem', marginBottom: '1rem' }}>
                <Sparkles className="w-4 h-4" style={{ color: 'var(--accent-gold)' }} />
                <span className="text-sm font-medium" style={{ color: 'var(--accent-gold)' }}>12-Week Accelerated Program</span>
              </div>

              <h1 className="font-hero text-5xl md:text-7xl tracking-tight mb-6" style={{ color: 'var(--text-primary)' }}>
                CERTIFICATE <span className="text-[5vw] md:text-[2rem] lg:text-[3rem] font-display italic font-light" style={{ color: 'var(--text-muted)' }}>of</span><br />
                <span style={{ color: 'var(--text-muted)' }}>INTERIOR DESIGN</span>
              </h1>

              <p className="text-xl mb-8 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                Discover your passion for interior design in just 12 weeks. <strong style={{ color: 'var(--text-primary)' }}>Hands-on, in-person learning</strong> with practicing design professionals in Newport Beach.
              </p>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8 pb-8" style={{ borderBottom: '1px solid var(--border-default)', marginTop: '1rem' }}>
                <div>
                  <p className="text-3xl font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>12</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Weeks</p>
                </div>
                <div>
                  <p className="text-3xl font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>$2,795</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Total Cost</p>
                </div>
                <div>
                  <p className="text-3xl font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>15</p>
                  <p className="text-sm" style={{ color: 'var(--text-muted)' }}>Max Class Size</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4" style={{marginTop: '1rem'}}>
                <Link
                  href="#enroll"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                  style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)' }}
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="tel:9496754451"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
                  style={{ border: '1px solid var(--border-hover)', color: 'var(--text-primary)' }}
                >
                  Call (949) 675-4451
                </Link>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden" style={{ height: '500px' }}>
                <Image
                  src="/certificate.jpg"
                  alt="Interior design materials and color swatches"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(20, 32, 48, 0.8) 0%, transparent 50%)' }} />

                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl backdrop-blur-xl" style={{ backgroundColor: 'rgba(20, 32, 48, 0.9)', border: '1px solid var(--border-default)' }}>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--accent-gold)' }}>
                      <Calendar className="w-6 h-6" style={{ color: 'var(--text-inverse)' }} />
                    </div>
                    <div>
                      <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>Next Start: January 12 - April 4, 2026</p>
                      <p className="text-sm" style={{ color: 'var(--text-muted)' }}>In-person & hybrid options available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why In-Person Learning Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light)', paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-dark-secondary)' }}>The IDI Difference</span>
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-hero tracking-tight mb-4" style={{ color: 'var(--text-dark)' }}>
              WHY IN-PERSON BEATS ONLINE
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-dark-secondary)' }}>
              Interior design is a tactile, spatial discipline. Here's why our in-person format delivers what online courses can't.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {inPersonBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{ backgroundColor: 'rgba(20, 32, 48, 0.03)', border: '1px solid var(--border-dark)' }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--accent-gold)' }}
                  >
                    <Icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-bricolage font-semibold mb-2" style={{ color: 'var(--text-dark)' }}>
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-dark-secondary)' }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Comparison callout */}
          <div className="mt-12 p-8 rounded-2xl text-center" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <p className="text-lg mb-4" style={{ color: 'var(--text-primary)' }}>
              <strong>The truth about online design courses:</strong> You can watch videos about fabric texture, or you can <em>feel</em> the difference between silk and linen. You can read about color temperature, or you can see how the same swatch looks different under warm vs. cool lighting.
            </p>
            <p className="font-semibold" style={{ color: 'var(--accent-gold)' }}>
              Some things you have to experience in person. Interior design is one of them.
            </p>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div
          className="absolute inset-0 animate-gradient-shift"
          style={{
            background: 'linear-gradient(-45deg, #142030, #1E3442, #142030, #1a2a3d, #142030)',
            backgroundSize: '400% 400%',
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>12-Week Curriculum</span>
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-hero tracking-tight mb-4" style={{ color: 'var(--text-primary)' }}>
              WHAT YOU'LL LEARN
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
              A carefully structured curriculum that builds your design foundation week by week.
            </p>
          </div>

          {/* Curriculum - Lectures & Studios */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Lecture Series */}
            <div className="p-8 rounded-2xl backdrop-blur-xl" style={{ backgroundColor: 'rgba(30, 52, 66, 0.5)', border: '1px solid var(--border-default)' }}>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6" style={{ color: 'var(--accent-gold)' }} />
                <h3 className="text-2xl font-bricolage font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Lecture Series
                </h3>
              </div>
              <ul className="space-y-3">
                {lectureTopics.map((topic) => (
                  <li key={topic} className="flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border-default)' }}>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Field Trips:</strong> Stonemill Design Center, Laguna Design Center
                </p>
              </div>
            </div>

            {/* Studio Workshops */}
            <div className="p-8 rounded-2xl backdrop-blur-xl" style={{ backgroundColor: 'rgba(30, 52, 66, 0.5)', border: '1px solid var(--border-default)' }}>
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-6 h-6" style={{ color: 'var(--accent-gold)' }} />
                <h3 className="text-2xl font-bricolage font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Studio Workshops
                </h3>
              </div>
              <ul className="space-y-3">
                {studioWorkshops.map((workshop) => (
                  <li key={workshop} className="flex items-start gap-2" style={{ color: 'var(--text-muted)' }}>
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                    <span>{workshop}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--border-default)' }}>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Grading:</strong> Pass/Not Pass system
                </p>
                <p className="text-sm mt-2" style={{ color: 'var(--text-secondary)' }}>
                  <strong>Advancement:</strong> Continue to AA with $100 registration fee + 8 quarter credits
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light)', paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-dark-secondary)' }}>Is This Right For You?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-hero tracking-tight mb-6" style={{ color: 'var(--text-dark)' }}>
                PERFECT FOR
              </h2>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
                    <span className="font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-dark)' }}>Career Explorers</h3>
                    <p style={{ color: 'var(--text-dark-secondary)' }}>Thinking about a career in design? Test the waters before committing to a degree program.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
                    <span className="font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-dark)' }}>Real Estate & Home Pros</h3>
                    <p style={{ color: 'var(--text-dark-secondary)' }}>Agents, stagers, and contractors who want to add design expertise to their services.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
                    <span className="font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-dark)' }}>Design Enthusiasts</h3>
                    <p style={{ color: 'var(--text-dark-secondary)' }}>Love design but don't need a degree? Gain skills to elevate your own home projects.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--bg-primary)' }}>
                    <span className="font-mono font-bold" style={{ color: 'var(--accent-gold)' }}>4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1" style={{ color: 'var(--text-dark)' }}>Future Degree Students</h3>
                    <p style={{ color: 'var(--text-dark-secondary)' }}>Get a head start before enrolling in our Associate or Bachelor's programs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative rounded-2xl overflow-hidden" style={{ height: '500px' }}>
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Students collaborating on design project"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Student Stories</span>
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-hero tracking-tight" style={{ color: 'var(--text-primary)' }}>
              HEAR FROM OUR GRADUATES
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="p-6 rounded-2xl"
                style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-default)' }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" style={{ color: 'var(--accent-gold)' }} />
                  ))}
                </div>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: 'var(--text-primary)' }}>{testimonial.name}</p>
                    <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Enrollment Section */}
      <section id="enroll" className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light)', paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div className="w-full max-w-5xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-dark-secondary)' }}>Investment</span>
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-hero tracking-tight mb-4" style={{ color: 'var(--text-dark)' }}>
              SIMPLE, ALL-INCLUSIVE PRICING
            </h2>
          </div>

          {/* Pricing Card */}
          <div className="rounded-3xl overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)' }}>
            <div className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Price */}
                <div className="text-center md:text-left">
                  <p className="text-sm font-mono uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>Total Tuition</p>
                  <p className="text-6xl font-mono font-bold mb-2" style={{ color: 'var(--accent-gold)' }}>$2,795</p>
                  <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>Payment plans available</p>

                  <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                    <Link
                      href="/admissions"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                      style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)' }}
                    >
                      Apply Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
                      style={{ border: '1px solid var(--border-hover)', color: 'var(--text-primary)' }}
                    >
                      Schedule Visit
                    </Link>
                  </div>
                </div>

                {/* Right - What's Included */}
                <div>
                  <p className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Everything's included:</p>
                  <ul className="grid grid-cols-1 gap-3">
                    {whatsIncluded.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: 'var(--accent-gold)' }} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Urgency Banner */}
            <div className="px-8 py-4 text-center" style={{ backgroundColor: 'rgba(255, 92, 141, 0.1)', borderTop: '1px solid var(--border-default)' }}>
              <p style={{ color: 'var(--accent-gold)' }}>
                <strong>Next cohort starts soon.</strong> Class size limited to 15 students for personalized attention.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12">
          {/* Section Header */}
          <div className="text-center" style={{ marginBottom: '4rem' }}>
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'var(--text-secondary)' }}>Questions?</span>
              <span className="h-[1px] w-8" style={{ backgroundColor: 'var(--accent-gold)' }}></span>
            </div>
            <h2 className="text-4xl md:text-5xl font-hero tracking-tight" style={{ color: 'var(--text-primary)' }}>
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <details
                key={index}
                className="group rounded-2xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-default)' }}
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <h3 className="font-semibold pr-4" style={{ color: 'var(--text-primary)' }}>{faq.question}</h3>
                  <span className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform group-open:rotate-45" style={{ backgroundColor: 'rgba(255, 92, 141, 0.1)' }}>
                    <span style={{ color: 'var(--accent-gold)' }}>+</span>
                  </span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative overflow-hidden" style={{ backgroundColor: 'var(--bg-light)', paddingTop: '10rem', paddingBottom: '10rem' }}>
        <div className="w-full max-w-4xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-hero tracking-tight mb-6" style={{ color: 'var(--text-dark)' }}>
            READY TO START YOUR<br />
            <span style={{ color: 'var(--accent-gold)' }}>DESIGN JOURNEY?</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-dark-secondary)' }}>
            Join our next Certificate cohort and discover what makes IDI the premier choice for design education in Orange County.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
              style={{ backgroundColor: 'var(--accent-gold)', color: 'var(--text-inverse)' }}
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
              style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}
            >
              Schedule a Campus Visit
            </Link>
            <Link
              href="tel:9496754451"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all"
              style={{ border: '1px solid var(--border-dark)', color: 'var(--text-dark)' }}
            >
              Call (949) 675-4451
            </Link>
          </div>

          <p className="text-sm" style={{ color: 'var(--text-dark-secondary)' }}>
            Questions? Email us at <a href="mailto:contact@idi.edu" style={{ color: 'var(--accent-gold)' }}>contact@idi.edu</a>
          </p>
        </div>
      </section>
    </div>
  );
}
