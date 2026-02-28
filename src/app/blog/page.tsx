/** Blog listing page with category filtering, featured post, and post card grid. */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogCategories, getAllBlogPosts, getFeaturedPost, getBlogCategoryBySlug } from "@/data";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations";
import { Breadcrumb } from "@/components/ui/breadcrumb";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page Component                                                           */
/* ────────────────────────────────────────────────────────────────────────── */

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const allPosts = getAllBlogPosts();
  const featured = getFeaturedPost();
  const filteredPosts =
    activeCategory === "all"
      ? allPosts
      : allPosts.filter((p) => p.category === activeCategory);

  // For the grid, exclude the featured post if showing all
  const gridPosts =
    activeCategory === "all" && featured
      ? filteredPosts.filter((p) => p.slug !== featured.slug)
      : filteredPosts;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80"
            alt="Modern interior design inspiration"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <p className="mb-3 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-pink-500">
            IDI Journal
          </p>
          <h1 className="font-heading text-5xl font-bold text-parchment md:text-6xl lg:text-7xl">
            The IDI <span className="text-gradient-pink">Journal</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-sandstone">
            Perspectives on Southern California design, the craft of interior
            design, and stories from the IDI community.
          </p>
        </div>
      </section>

      {/* ── Empty State ──────────────────────────────────────────────────── */}
      {allPosts.length === 0 ? (
        <Section
          overline="Coming Soon"
          title="Stories Are on the Way"
          subtitle="We're curating our first articles. Check back soon for insights on Southern California design, industry practice, and the IDI community."
        >
          <AnimatedSection>
            <div className="mx-auto max-w-2xl text-center">
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white/5 border border-white/10">
                <svg
                  className="h-10 w-10 text-pink-500/60"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5"
                  />
                </svg>
              </div>

              {/* Category previews */}
              <div className="mt-12 grid gap-6 md:grid-cols-3">
                {blogCategories.map((cat) => (
                  <Card key={cat.slug} className="p-6 text-left">
                    <h3 className="font-heading text-base font-bold text-parchment">
                      {cat.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-sandstone">
                      {cat.description}
                    </p>
                  </Card>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/contact">
                  <Button as="span" variant="secondary" size="md">
                    Request Information
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </Section>
      ) : (
        <>
          {/* ── Category Filters ──────────────────────────────────────────── */}
          <Section>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setActiveCategory("all")}
                className={`rounded-full px-5 py-2 text-sm font-semibold font-body transition-all duration-200 ${
                  activeCategory === "all"
                    ? "bg-pink-500 text-plum-900"
                    : "border border-white/10 bg-white/5 text-sandstone hover:border-white/20 hover:text-parchment"
                }`}
              >
                All Posts
              </button>
              {blogCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold font-body transition-all duration-200 ${
                    activeCategory === cat.slug
                      ? "bg-pink-500 text-plum-900"
                      : "border border-white/10 bg-white/5 text-sandstone hover:border-white/20 hover:text-parchment"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </Section>

          {/* ── Featured Post ─────────────────────────────────────────────── */}
          {featured && activeCategory === "all" && (
            <Section bg="light">
              <AnimatedSection>
                <Link href={`/blog/${featured.slug}`} className="group block">
                  <Card className="overflow-hidden">
                    <div className="grid md:grid-cols-2">
                      <div className="relative aspect-[16/10] md:aspect-auto overflow-hidden">
                        <Image
                          src={featured.featuredImage}
                          alt={featured.featuredImageAlt}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="flex flex-col justify-center p-8 md:p-10">
                        <Badge variant="accent" className="mb-4 self-start">
                          {getBlogCategoryBySlug(featured.category)?.name ?? featured.category}
                        </Badge>
                        <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl lg:text-4xl group-hover:text-pink-400 transition-colors">
                          {featured.title}
                        </h2>
                        <p className="mt-4 text-base leading-relaxed text-sandstone line-clamp-3">
                          {featured.excerpt}
                        </p>
                        <div className="mt-6 flex items-center gap-4 text-sm text-sandstone/60">
                          <span>{featured.author}</span>
                          <span aria-hidden="true">&middot;</span>
                          <span>{featured.readTime}</span>
                          <span aria-hidden="true">&middot;</span>
                          <time dateTime={featured.publishedAt}>
                            {new Date(featured.publishedAt).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              </AnimatedSection>
            </Section>
          )}

          {/* ── Post Grid ─────────────────────────────────────────────────── */}
          <Section
            overline="Latest"
            title={activeCategory === "all" ? "All Articles" : (getBlogCategoryBySlug(activeCategory)?.name ?? "Articles")}
            subtitle={activeCategory !== "all" ? (getBlogCategoryBySlug(activeCategory)?.description ?? undefined) : undefined}
          >
            <AnimatedSection stagger={0.08}>
              {gridPosts.length > 0 ? (
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  {gridPosts.map((post) => (
                    <BlogPostCard key={post.slug} post={post} />
                  ))}
                </div>
              ) : (
                <div className="mx-auto max-w-md rounded-lg border border-white/10 bg-white/5 p-8 text-center">
                  <p className="text-sandstone">
                    No articles in this category yet. Check back soon.
                  </p>
                </div>
              )}
            </AnimatedSection>
          </Section>
        </>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section bg="mesh" grain>
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl lg:text-4xl">
            Start Your <span className="text-gradient-pink">Design Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Explore accredited interior design programs at IDI and take the
            first step toward a creative career.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/admissions/apply">
              <Button as="span" variant="primary" size="lg" className="glow-amber">
                Apply Now
              </Button>
            </Link>
            <Link href="/contact">
              <Button as="span" variant="ghost" size="lg" className="text-parchment decoration-parchment/60 hover:decoration-parchment">
                Request Info
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Blog Post Card                                                           */
/* ────────────────────────────────────────────────────────────────────────── */

import type { BlogPost } from "@/types";

function BlogPostCard({ post }: { post: BlogPost }) {
  const categoryName = getBlogCategoryBySlug(post.category)?.name ?? post.category;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden">
        {/* Image */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-plum-700">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <Badge variant="accent" className="mb-3 self-start">
            {categoryName}
          </Badge>
          <h3 className="font-heading text-lg font-bold text-parchment group-hover:text-pink-400 transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-sandstone line-clamp-3">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4 text-xs text-sandstone/60">
            <span>{post.author}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
            <span aria-hidden="true">&middot;</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </Card>
    </Link>
  );
}
