/** Shared breadcrumb navigation with JSON-LD BreadcrumbList schema markup. */
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  // Always prepend Home
  const allItems: BreadcrumbItem[] = [{ label: "Home", href: "/" }, ...items];

  // Build JSON-LD BreadcrumbList
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, i) => {
      const entry: Record<string, unknown> = {
        "@type": "ListItem",
        position: i + 1,
        name: item.label,
      };
      if (item.href) {
        entry.item = `${SITE_URL}${item.href === "/" ? "" : item.href}`;
      }
      return entry;
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav aria-label="Breadcrumb" className="mb-4 text-sm text-sandstone/70">
        <ol className="flex items-center gap-1.5">
          {allItems.map((item, i) => {
            const isLast = i === allItems.length - 1;
            return (
              <li key={item.label + i} className={isLast ? "font-medium text-parchment" : undefined}>
                {i > 0 && (
                  <span aria-hidden="true" className="mr-1.5 text-sandstone/40">
                    &rsaquo;
                  </span>
                )}
                {!isLast && item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-pink-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  item.label
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
