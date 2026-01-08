import { Hero } from '@/components/sections/Hero';
import { Programs } from '@/components/sections/Programs';
import { WhyIDI } from '@/components/sections/WhyIDI';
import { Stats } from '@/components/sections/Stats';
import { Accreditation } from '@/components/sections/Accreditation';
import { StudentOrgs } from '@/components/sections/StudentOrgs';
import { Location } from '@/components/sections/Location';
import { CTA } from '@/components/sections/CTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Interior Designers Institute | Design Your Future',
  description: '40 years of interior design education in Newport Beach, CA. CIDA-accredited Bachelor\'s program. Certificate, Associate, and Master\'s degrees. 88% graduation rate. 100% practicing professionals.',
  keywords: [
    'interior design school',
    'CIDA accredited interior design',
    'interior design degree California',
    'Orange County design school',
    'Newport Beach interior design',
    'best interior design programs',
    'interior design certificate',
    'interior design bachelor degree',
  ],
  openGraph: {
    title: 'Interior Designers Institute | Design Your Future',
    description: '40 years of interior design education. CIDA accredited. 100% practicing professionals. Small classes. Flexible scheduling.',
    url: 'https://idi.edu',
    type: 'website',
  },
};

// Schema.org JSON-LD for Educational Organization (Homepage)
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'Interior Designers Institute',
  alternateName: 'IDI',
  url: 'https://idi.edu',
  logo: 'https://idi.edu/logo.png',
  description: 'CIDA-accredited interior design school in Newport Beach, CA offering Certificate, Associate, Bachelor, and Master\'s degrees since 1984',
  foundingDate: '1984',
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
    latitude: '33.6189',
    longitude: '-117.9298',
  },
  telephone: '+1-949-675-4451',
  email: 'contact@idi.edu',
  sameAs: [
    'https://www.facebook.com/interiordesignersinstitute',
    'https://www.instagram.com/idi_newportbeach',
    'https://www.linkedin.com/school/interior-designers-institute',
  ],
  accreditedBy: [
    {
      '@type': 'Organization',
      name: 'Council for Interior Design Accreditation',
      alternateName: 'CIDA',
      url: 'https://www.accredit-id.org',
    },
    {
      '@type': 'Organization',
      name: 'Accrediting Commission of Career Schools and Colleges',
      alternateName: 'ACCSC',
    },
    {
      '@type': 'Organization',
      name: 'Bureau for Private Postsecondary Education',
      alternateName: 'BPPE',
    },
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Certificate of Completion in Interior Design',
      credentialCategory: 'Certificate',
      educationalLevel: 'Certificate',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Associate of Arts in Interior Design',
      credentialCategory: 'Associate Degree',
      educationalLevel: 'Associate',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Bachelor of Arts in Interior Design',
      credentialCategory: 'Bachelor\'s Degree',
      educationalLevel: 'Bachelor',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Master of Interior Architecture',
      credentialCategory: 'Master\'s Degree',
      educationalLevel: 'Graduate',
    },
  ],
  numberOfStudents: {
    '@type': 'QuantitativeValue',
    value: 150,
  },
  slogan: 'Design Your Future',
};

// WebSite schema for search
const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Interior Designers Institute',
  url: 'https://idi.edu',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://idi.edu/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

export default function Home() {
  return (
    <>
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <Hero />
      <Programs />
      <WhyIDI />
      <Stats />
      <Accreditation />
      <StudentOrgs />
      <Location />
      <CTA />
    </>
  );
}
