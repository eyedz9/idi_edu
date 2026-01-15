'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Linkedin, Calendar } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Campus Location',
    content: '1061 Camelback Street\nNewport Beach, CA 92660',
    link: 'https://www.google.com/maps/place/1061+Camelback+St,+Newport+Beach,+CA+92660',
    linkText: 'Get Directions',
    external: true,
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '(949) 675-4451',
    link: 'tel:+19496754451',
    linkText: 'Call Us',
    subtitle: 'Fax: (949) 759-0667',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@idi.edu',
    link: 'mailto:contact@idi.edu',
    linkText: 'Send Email',
  },
  {
    icon: Clock,
    title: 'Office Hours',
    content: 'Contact for current hours and appointment availability',
    subtitle: 'Zoom appointments available upon request',
  },
];

const quickActions = [
  {
    title: 'Winter 2026 Registration',
    description: 'Register for upcoming winter quarter',
    link: 'https://interiordesignersinstitute.formstack.com/forms/winter_2026_registration',
    buttonText: 'Register Now',
    external: true,
  },
  {
    title: 'MIA Application',
    description: 'Apply for Master of Interior Architecture program',
    link: 'https://idi.edu/wp-content/uploads/2025/09/MIA-Application2.pdf',
    buttonText: 'Download PDF',
    external: true,
  },
  {
    title: 'Transfer Student Registration',
    description: 'Register as a transfer student',
    link: 'https://interiordesignersinstitute.formstack.com/forms/transfer_student',
    buttonText: 'Transfer Form',
    external: true,
  },
  {
    title: 'Net Price Calculator',
    description: 'Calculate your estimated costs and financial aid',
    link: 'https://idi.edu/NetPriceCalculator/npcalc.html',
    buttonText: 'Calculate Costs',
    external: true,
  },
  {
    title: 'School Catalog',
    description: '2025-26 complete catalog and addendum',
    link: 'https://idi.edu/wp-content/uploads/2025/03/IDI-Catalog-Addendum-24-25-032025.pdf',
    buttonText: 'Download Catalog',
    external: true,
  },
  {
    title: 'Schedule a Campus Visit',
    description: 'Tour our facilities and meet with faculty',
    link: '/admissions#visit',
    buttonText: 'Schedule Visit',
    external: false,
  },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-[#1877F2]' },
  { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-[#E4405F]' },
  { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-[#0A66C2]' },
];

// Schema.org LocalBusiness schema for Contact page
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://idi.edu',
  name: 'Interior Designers Institute',
  alternateName: 'IDI',
  url: 'https://idi.edu',
  logo: 'https://idi.edu/logo.png',
  image: 'https://idi.edu/campus.jpg',
  description: 'CIDA-accredited interior design school offering Certificate, Associate, Bachelor, and Master\'s programs in Newport Beach, California.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1061 Camelback Street',
    addressLocality: 'Newport Beach',
    addressRegion: 'CA',
    postalCode: '92660',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 33.6189,
    longitude: -117.9298,
  },
  telephone: '+1-949-675-4451',
  faxNumber: '+1-949-759-0667',
  email: 'contact@idi.edu',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    description: 'Contact for current office hours and appointment availability',
  },
  sameAs: [
    'https://www.facebook.com/interiordesignersinstitute',
    'https://www.instagram.com/idi_newportbeach',
    'https://www.linkedin.com/school/interior-designers-institute',
  ],
  priceRange: '$2,795 - $61,450',
  areaServed: {
    '@type': 'GeoCircle',
    geoMidpoint: {
      '@type': 'GeoCoordinates',
      latitude: 33.6189,
      longitude: -117.9298,
    },
    geoRadius: '100000',
  },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    program: '',
    contactMethod: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        program: '',
        contactMethod: '',
        message: '',
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Hero Section */}
      <section className="relative text-[var(--text-primary)] py-24 md:py-32 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" style={{ animationDelay: '0.1s' }}>
              <ol className="flex items-center gap-2" style={{ color: 'var(--text-secondary)' }}>
                <li>
                  <Link href="/" className="transition-colors" style={{ color: 'var(--text-secondary)' }}>
                    Home
                  </Link>
                </li>
                <li>/</li>
                <li style={{ color: 'var(--text-primary)' }}>Contact</li>
              </ol>
            </nav>

            <h1 className="font-hero uppercase text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight" style={{ animationDelay: '0.2s', color: 'var(--text-primary)' }}>
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed" style={{ animationDelay: '0.3s', color: 'var(--text-secondary)' }}>
              Connect with our admissions team, career services, or financial aid office. We're here to help you start your <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>interior design journey</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              Quick Links
            </h2>
            <p className="text-xl" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Access forms, calculators, and important resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {quickActions.map((action, index) => (
              <a
                key={action.title}
                href={action.link}
                target={action.external ? '_blank' : undefined}
                rel={action.external ? 'noopener noreferrer' : undefined}
                className="bg-white p-8 rounded-[32px] text-center hover:shadow-lg transition-all animate-on-scroll group"
                style={{
                  animationDelay: `${0.2 + index * 0.05}s`,
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'var(--border-default)'
                }}
              >
                <h3 className="font-bricolage text-xl font-semibold mb-3" style={{ color: 'var(--text-dark)' }}>
                  {action.title}
                </h3>
                <p className="mb-6" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  {action.description}
                </p>
                <span className="inline-flex items-center justify-center px-6 py-3 bg-white font-semibold rounded-full transition-all group-hover:text-white" style={{
                  color: 'var(--text-dark)',
                  borderWidth: '1px',
                  borderStyle: 'solid',
                  borderColor: 'var(--text-dark)',
                  backgroundColor: 'white'
                }}>
                  {action.buttonText}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Directory */}
      <section className="py-20 bg-white animate-on-scroll">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              Staff Directory
            </h2>
            <p className="text-xl" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              Connect with the right department for your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="p-8 rounded-[32px] animate-on-scroll" style={{
              animationDelay: '0.2s',
              backgroundColor: 'var(--bg-light)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--border-default)'
            }}>
              <h3 className="font-bricolage text-xl font-semibold mb-4" style={{ color: 'var(--text-dark)' }}>
                Admissions & Student Services
              </h3>
              <div className="space-y-2 text-sm">
                <p style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  <strong>Phone:</strong> <a href="tel:+19496754451" className="hover:opacity-100 transition-opacity">(949) 675-4451</a>
                </p>
                <p style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  <strong>Email:</strong> <a href="mailto:contact@idi.edu" className="hover:opacity-100 transition-opacity">contact@idi.edu</a>
                </p>
              </div>
            </div>

            <div className="p-8 rounded-[32px] animate-on-scroll" style={{
              animationDelay: '0.3s',
              backgroundColor: 'var(--bg-light)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--border-default)'
            }}>
              <h3 className="font-bricolage text-xl font-semibold mb-4" style={{ color: 'var(--text-dark)' }}>
                Career Services
              </h3>
              <div className="space-y-2 text-sm">
                <p style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  <strong>Contact:</strong> Rachel Hulan
                </p>
                <p style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  <strong>Email:</strong> <a href="mailto:rhulan@idi.edu" className="hover:opacity-100 transition-opacity">rhulan@idi.edu</a>
                </p>
              </div>
            </div>

            <div className="p-8 rounded-[32px] animate-on-scroll" style={{
              animationDelay: '0.4s',
              backgroundColor: 'var(--bg-light)',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: 'var(--border-default)'
            }}>
              <h3 className="font-bricolage text-xl font-semibold mb-4" style={{ color: 'var(--text-dark)' }}>
                Financial Aid Office
              </h3>
              <div className="space-y-2 text-sm">
                <p style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  <strong>Contact:</strong> Renee Robles
                </p>
                <p style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  <strong>Phone:</strong> <a href="tel:+19496754451" className="hover:opacity-100 transition-opacity">(949) 675-4451</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1" style={{ animationDelay: '0.1s' }}>
              <h2 className="font-bricolage text-3xl font-bold mb-8" style={{ color: 'var(--text-primary)' }}>
                Main Contact
              </h2>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.title} className="flex gap-4" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{
                          backgroundColor: 'rgba(233, 216, 200, 0.1)'
                        }}>
                          <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{info.title}</h3>
                        <p className="text-sm leading-relaxed whitespace-pre-line mb-2" style={{ color: 'var(--text-secondary)' }}>
                          {info.content}
                        </p>
                        {info.subtitle && (
                          <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>
                            {info.subtitle}
                          </p>
                        )}
                        {info.link && (
                          <a
                            href={info.link}
                            target={info.external ? '_blank' : undefined}
                            rel={info.external ? 'noopener noreferrer' : undefined}
                            className="font-semibold text-sm transition-opacity hover:opacity-80"
                            style={{ color: 'var(--text-primary)' }}
                          >
                            {info.linkText} →
                          </a>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Social Media */}
              <div className="mt-12">
                <h3 className="font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Connect With Us</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        className="p-3 rounded-xl transition-all"
                        style={{
                          backgroundColor: 'rgba(233, 216, 200, 0.05)',
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'var(--border-default)'
                        }}
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon className="w-6 h-6" style={{ color: 'var(--text-primary)' }} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2" style={{ animationDelay: '0.2s' }}>
              <div className="p-8 md:p-12 rounded-[32px]" style={{
                backgroundColor: 'var(--bg-secondary)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--border-default)'
              }}>
                <h2 className="font-bricolage text-3xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Send Us a Message
                </h2>
                <p className="mb-8" style={{ color: 'var(--text-secondary)' }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form id="contact-form" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        First Name <span style={{ color: 'var(--text-muted)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-colors"
                        style={{
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'var(--border-default)',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="John"
                      />
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Last Name <span style={{ color: 'var(--text-muted)' }}>*</span>
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-colors"
                        style={{
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'var(--border-default)',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Email <span style={{ color: 'var(--text-muted)' }}>*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-colors"
                        style={{
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'var(--border-default)',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Phone <span className="text-xs" style={{ color: 'var(--text-muted)' }}>(optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-colors"
                        style={{
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'var(--border-default)',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          color: 'var(--text-primary)'
                        }}
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="program" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Program of Interest <span style={{ color: 'var(--text-muted)' }}>*</span>
                      </label>
                      <select
                        id="program"
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-colors"
                        style={{
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'var(--border-default)',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <option value="">Select a program</option>
                        <option value="certificate">Certificate Program</option>
                        <option value="associate">Associate's Degree</option>
                        <option value="bachelor">Bachelor's Degree</option>
                        <option value="masters">Master's Degree</option>
                        <option value="undecided">Not Sure / General Inquiry</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contactMethod" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                        Preferred Contact Method <span className="text-xs" style={{ color: 'var(--text-muted)' }}>(optional)</span>
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-colors"
                        style={{
                          borderWidth: '1px',
                          borderStyle: 'solid',
                          borderColor: 'var(--border-default)',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          color: 'var(--text-primary)'
                        }}
                      >
                        <option value="">Select preferred method</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="text">Text Message</option>
                        <option value="any">Any Method</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                      Message <span style={{ color: 'var(--text-muted)' }}>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl focus:outline-none focus:ring-2 transition-colors resize-none"
                      style={{
                        borderWidth: '1px',
                        borderStyle: 'solid',
                        borderColor: 'var(--border-default)',
                        backgroundColor: 'rgba(0, 0, 0, 0.3)',
                        color: 'var(--text-primary)'
                      }}
                      placeholder="Tell us about your questions or how we can help you..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="mb-6 p-4 rounded-xl" style={{
                      backgroundColor: 'rgba(74, 124, 89, 0.1)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(74, 124, 89, 0.2)'
                    }}>
                      <p className="font-semibold" style={{ color: '#4A7C59' }}>
                        Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.
                      </p>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="mb-6 p-4 rounded-xl" style={{
                      backgroundColor: 'rgba(196, 93, 93, 0.1)',
                      borderWidth: '1px',
                      borderStyle: 'solid',
                      borderColor: 'rgba(196, 93, 93, 0.2)'
                    }}>
                      <p className="font-semibold" style={{ color: '#C45D5D' }}>
                        Sorry, there was an error sending your message. Please try again or call us directly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 font-semibold rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                    style={{
                      backgroundColor: 'white',
                      color: 'var(--text-dark)'
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 rounded-full animate-spin" style={{
                          borderColor: 'rgba(0, 0, 0, 0.3)',
                          borderTopColor: 'black'
                        }} />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-sm mt-4 text-center" style={{ color: 'var(--text-muted)' }}>
                    By submitting this form, you agree to be contacted by IDI regarding your inquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12" style={{ animationDelay: '0.1s' }}>
            <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-dark)' }}>
              Visit Our <span className="font-display italic" style={{ color: 'var(--accent-gold)' }}>Campus</span>
            </h2>
            <p className="text-xl mb-2" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
              1061 Camelback Street, Newport Beach, CA 92660
            </p>
            <p style={{ color: 'var(--text-dark)', opacity: 0.6 }}>
              Located in the heart of Orange County design. Near Laguna Design Center, Fashion Island, and SOCO.
            </p>
          </div>

          {/* Google Maps Embed Placeholder */}
          <div className="bg-white rounded-[32px] overflow-hidden animate-on-scroll" style={{
            animationDelay: '0.2s',
            borderWidth: '1px',
            borderStyle: 'solid',
            borderColor: 'var(--border-default)'
          }}>
            <div className="aspect-[16/9] md:aspect-[21/9] bg-neutral-100 flex items-center justify-center relative">
              {/* Placeholder for Google Maps - Replace with actual embed in production */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <MapPin className="w-16 h-16 mb-4" style={{ color: 'var(--text-dark)' }} />
                <h3 className="font-bricolage text-2xl font-bold mb-2" style={{ color: 'var(--text-dark)' }}>
                  Interactive Map Coming Soon
                </h3>
                <p className="mb-6 max-w-md" style={{ color: 'var(--text-dark)', opacity: 0.7 }}>
                  Google Maps integration will be added during production deployment
                </p>
                <a
                  href="https://www.google.com/maps/place/1061+Camelback+St,+Newport+Beach,+CA+92660"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white font-semibold rounded-full transition-all"
                  style={{
                    color: 'var(--text-dark)',
                    borderWidth: '1px',
                    borderStyle: 'solid',
                    borderColor: 'var(--text-dark)'
                  }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+19496754451"
              className="bg-white p-6 rounded-[32px] hover:shadow-lg transition-all flex items-center gap-4 group animate-on-scroll"
              style={{
                animationDelay: '0.3s',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--border-default)'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{
                backgroundColor: 'rgba(45, 42, 38, 0.05)'
              }}>
                <Phone className="w-6 h-6" style={{ color: 'var(--text-dark)' }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>Call Us</p>
                <p className="font-semibold" style={{ color: 'var(--text-dark)' }}>(949) 675-4451</p>
              </div>
            </a>

            <a
              href="mailto:contact@idi.edu"
              className="bg-white p-6 rounded-[32px] hover:shadow-lg transition-all flex items-center gap-4 group animate-on-scroll"
              style={{
                animationDelay: '0.4s',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--border-default)'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{
                backgroundColor: 'rgba(45, 42, 38, 0.05)'
              }}>
                <Mail className="w-6 h-6" style={{ color: 'var(--text-dark)' }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>Email Us</p>
                <p className="font-semibold" style={{ color: 'var(--text-dark)' }}>contact@idi.edu</p>
              </div>
            </a>

            <Link
              href="/admissions#visit"
              className="bg-white p-6 rounded-[32px] hover:shadow-lg transition-all flex items-center gap-4 group animate-on-scroll"
              style={{
                animationDelay: '0.5s',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--border-default)'
              }}
            >
              <div className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors" style={{
                backgroundColor: 'rgba(45, 42, 38, 0.05)'
              }}>
                <Calendar className="w-6 h-6" style={{ color: 'var(--text-dark)' }} />
              </div>
              <div>
                <p className="text-sm mb-1" style={{ color: 'var(--text-dark)', opacity: 0.6 }}>Schedule</p>
                <p className="font-semibold" style={{ color: 'var(--text-dark)' }}>Campus Visit</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-20 animate-on-scroll" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-bricolage text-3xl md:text-4xl font-bold mb-6" style={{ animationDelay: '0.1s', color: 'var(--text-primary)' }}>
            Looking for Something Else?
          </h2>
          <p className="mb-8" style={{ animationDelay: '0.2s', color: 'var(--text-secondary)' }}>
            Find quick answers to common questions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admissions#faq"
              className="p-6 rounded-[32px] transition-all text-left animate-on-scroll"
              style={{
                animationDelay: '0.3s',
                backgroundColor: 'var(--bg-secondary)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--border-default)'
              }}
            >
              <h3 className="font-bricolage text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Admissions FAQ
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Application process, requirements, and deadlines
              </p>
            </Link>
            <Link
              href="/programs"
              className="p-6 rounded-[32px] transition-all text-left animate-on-scroll"
              style={{
                animationDelay: '0.4s',
                backgroundColor: 'var(--bg-secondary)',
                borderWidth: '1px',
                borderStyle: 'solid',
                borderColor: 'var(--border-default)'
              }}
            >
              <h3 className="font-bricolage text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                Program Information
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                Detailed program descriptions and curriculum
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
