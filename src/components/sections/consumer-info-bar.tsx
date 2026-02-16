import Link from "next/link";

const consumerLinks = [
  { label: "School Catalog", href: "/documents/idi-catalog.pdf" },
  { label: "Performance Fact Sheet", href: "/documents/school-performance-fact-sheet.pdf" },
  { label: "Student Outcomes", href: "/disclosures#student-outcomes" },
  { label: "STRF Information", href: "/disclosures#strf" },
  { label: "All Disclosures", href: "/disclosures" },
];

export function ConsumerInfoBar() {
  return (
    <section className="border-y border-white/10 bg-plum-800/50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-sandstone/60">
          Consumer Information
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {consumerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-pink-500 transition-colors hover:text-pink-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
