import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "idi.edu",
      },
      {
        protocol: "https",
        hostname: "www.idi.edu",
      },
    ],
  },
  async redirects() {
    return [
      // WordPress to Next.js URL mapping
      {
        source: "/associate-of-arts-in-interior-design",
        destination: "/programs/associate-of-arts",
        permanent: true,
      },
      {
        source: "/bachelor-of-arts-in-interior-design",
        destination: "/programs/bachelor-of-arts",
        permanent: true,
      },
      {
        source: "/master-of-interior-architecture",
        destination: "/programs/master-of-interior-architecture",
        permanent: true,
      },
      {
        source: "/programs-of-study",
        destination: "/programs",
        permanent: true,
      },
      {
        source: "/about-the-college",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/admissions-2",
        destination: "/admissions",
        permanent: true,
      },
      {
        source: "/financial-aid",
        destination: "/admissions/financial-aid",
        permanent: true,
      },
      {
        source: "/tuition",
        destination: "/admissions/tuition",
        permanent: true,
      },
      {
        source: "/career-services",
        destination: "/student-life/career-services",
        permanent: true,
      },
      {
        source: "/gallery",
        destination: "/student-life/gallery",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/catalog-and-disclosures",
        destination: "/disclosures",
        permanent: true,
      },
      {
        source: "/request-information",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
