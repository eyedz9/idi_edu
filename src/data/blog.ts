/** Blog categories and posts with helper functions for querying. */
import type { BlogCategory, BlogPost } from "@/types";
import { socalDesignPosts } from "./blog-socal";
import { designPracticePosts } from "./blog-practice";
import { studentSpotlightPosts } from "./blog-spotlight";

// ─── Categories ─────────────────────────────────────────────────────────────

export const blogCategories: BlogCategory[] = [
  {
    slug: "socal-design",
    name: "Design in Southern California",
    description:
      "The SoCal design scene: showrooms, trends, projects, and the design corridor from LA to Laguna.",
  },
  {
    slug: "design-practice",
    name: "Interior Design Practice",
    description:
      "The craft and business of design: techniques, materials, technology, and career insights.",
  },
  {
    slug: "student-spotlight",
    name: "Student & Alumni Spotlight",
    description:
      "Real work, real careers. Showcasing IDI's creative community and graduate success stories.",
  },
];

// ─── Posts ───────────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  ...socalDesignPosts,
  ...designPracticePosts,
  ...studentSpotlightPosts,
];

// ─── Helper Functions ───────────────────────────────────────────────────────

/** Find a single blog post by its slug. */
export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Get all posts in a given category, sorted by date descending. */
export function getBlogsByCategory(categorySlug: string): BlogPost[] {
  return blogPosts
    .filter((p) => p.category === categorySlug)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
    );
}

/** Get all posts sorted by date descending. */
export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

/** Get the most recent post (featured). */
export function getFeaturedPost(): BlogPost | undefined {
  return getAllBlogPosts()[0];
}

/** Find a category by its slug. */
export function getBlogCategoryBySlug(
  slug: string,
): BlogCategory | undefined {
  return blogCategories.find((c) => c.slug === slug);
}
