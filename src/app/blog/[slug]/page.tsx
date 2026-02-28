/** Dynamic blog article page with hero, content sections, related posts, and CTA. */
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogBySlug, getBlogCategoryBySlug } from "@/data";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { Section } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AnimatedSection } from "@/components/animations";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumb } from "@/components/ui/breadcrumb";

/* ────────────────────────────────────────────────────────────────────────── */
/*  Static Params                                                            */
/* ────────────────────────────────────────────────────────────────────────── */

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Dynamic Metadata                                                         */
/* ────────────────────────────────────────────────────────────────────────── */

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.featuredImageAlt,
        },
      ],
    },
  };
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Page Component                                                           */
/* ────────────────────────────────────────────────────────────────────────── */

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const category = getBlogCategoryBySlug(post.category);
  const categoryName = category?.name ?? post.category;

  // Get related posts
  const relatedPosts = post.relatedSlugs
    .map((s) => getBlogBySlug(s))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post.title,
          description: post.excerpt,
          image: post.featuredImage,
          datePublished: post.publishedAt,
          author: {
            "@type": "Person",
            name: post.author,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            logo: {
              "@type": "ImageObject",
              url: `${SITE_URL}/favicon/apple-touch-icon.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${SITE_URL}/blog/${slug}`,
          },
          articleSection: categoryName,
          keywords: post.tags.join(", "),
          wordCount: post.content.reduce(
            (acc, section) => acc + section.body.split(/\s+/).length,
            0,
          ),
        }}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden mesh-aurora grain py-20 md:py-28">
        <div className="absolute inset-0">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-plum-900 via-plum-900/85 to-plum-900/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-plum-900/70 via-transparent to-plum-900/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { label: "Blog", href: "/blog" },
              { label: categoryName, href: `/blog?category=${post.category}` },
              { label: post.title },
            ]}
          />
          <Badge variant="accent" className="mb-4">
            {categoryName}
          </Badge>
          <h1 className="font-heading text-3xl font-bold text-parchment md:text-4xl lg:text-5xl max-w-4xl">
            {post.title}
          </h1>

          {/* Meta bar */}
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-sandstone/80">
            <span className="font-medium text-parchment">{post.author}</span>
            <span aria-hidden="true" className="text-sandstone/40">&middot;</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </time>
            <span aria-hidden="true" className="text-sandstone/40">&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      {/* ── Article Content ──────────────────────────────────────────────── */}
      <Section>
        <AnimatedSection>
          <article className="mx-auto max-w-3xl">
            {post.content.map((section, i) => (
              <div key={i} className={i > 0 ? "mt-12" : ""}>
                <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.split("\n\n").map((paragraph, j) => (
                    <p
                      key={j}
                      className="text-base leading-relaxed text-sandstone"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
                {section.image && (
                  <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-xl">
                    <Image
                      src={section.image}
                      alt={section.imageAlt ?? section.heading}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 720px"
                    />
                  </div>
                )}
              </div>
            ))}

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 border-t border-white/10 pt-8">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sandstone/60">
                  Tags
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-xs font-medium text-sandstone"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </article>
        </AnimatedSection>
      </Section>

      {/* ── Related Articles ──────────────────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <Section
          bg="light"
          overline="Keep Reading"
          title="Related Articles"
        >
          <AnimatedSection stagger={0.1}>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <RelatedPostCard key={related!.slug} post={related!} />
              ))}
            </div>
          </AnimatedSection>
        </Section>
      )}

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <Section bg="mesh" grain>
        <div className="relative text-center">
          <h2 className="font-heading text-2xl font-bold text-parchment md:text-3xl lg:text-4xl">
            Start Your <span className="text-gradient-pink">Design Journey</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sandstone">
            Inspired to pursue interior design? Explore our accredited programs
            and take the first step toward a creative career.
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
/*  Local sub-components (server-only)                                       */
/* ────────────────────────────────────────────────────────────────────────── */

import type { BlogPost } from "@/types";

function RelatedPostCard({ post }: { post: BlogPost }) {
  const categoryName = getBlogCategoryBySlug(post.category)?.name ?? post.category;

  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <Card className="flex h-full flex-col overflow-hidden">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-plum-700">
          <Image
            src={post.featuredImage}
            alt={post.featuredImageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
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
          <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4 text-xs text-sandstone/60">
            <span>{post.author}</span>
            <span aria-hidden="true">&middot;</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
