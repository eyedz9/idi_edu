import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    // Core pages
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/programs`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/admissions`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/admissions/apply`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },

    // Program pages
    { url: `${SITE_URL}/programs/certificate`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/programs/associate-of-arts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/programs/bachelor-of-arts`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/programs/master-interior-architecture`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/programs/compare`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },

    // Admissions sub-pages
    { url: `${SITE_URL}/admissions/tuition`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/admissions/financial-aid`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // About section
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/about/history`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${SITE_URL}/about/faculty`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/about/accreditation`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/about/staff`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },

    // Other pages
    { url: `${SITE_URL}/campus-life`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${SITE_URL}/disclosures`, lastModified: now, changeFrequency: "yearly", priority: 0.4 },
  ];
}
