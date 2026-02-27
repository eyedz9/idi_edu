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
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // TODO: Remove sandbox domains before production launch
              "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://checkout.clover.com https://checkout.sandbox.dev.clover.com",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https://images.unsplash.com https://plus.unsplash.com https://idi.edu https://www.idi.edu blob:",
              "font-src 'self'",
              "frame-src https://checkout.clover.com https://checkout.sandbox.dev.clover.com https://www.google.com https://maps.google.com",
              "connect-src 'self' https://checkout.clover.com https://checkout.sandbox.dev.clover.com https://scl.clover.com https://hooks.zapier.com https://*.vercel-storage.com",
            ].join("; "),
          },
        ],
      },
    ];
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
