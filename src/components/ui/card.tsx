import type { HTMLAttributes, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { Badge } from "./badge";
import type { Program, Testimonial } from "@/types";

/* ========================================================================== */
/*  Base Card                                                                 */
/* ========================================================================== */

const cardVariantStyles = {
  light:
    "bg-plum-800 border border-white/10 hover:border-white/20",
  dark:
    "bg-plum-700 border border-plum-700/60 hover:shadow-[0_0_30px_rgba(176,108,255,0.12)]",
  glass:
    "bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20",
} as const;

type CardVariant = keyof typeof cardVariantStyles;

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  children: ReactNode;
}

export function Card({ variant = "light", className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl transition-all duration-300",
        cardVariantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ========================================================================== */
/*  Program Card                                                              */
/* ========================================================================== */

interface ProgramCardProps extends HTMLAttributes<HTMLDivElement> {
  program: Program;
  /** Optional image path; falls back to a placeholder gradient */
  imageSrc?: string;
}

export function ProgramCard({
  program,
  imageSrc,
  className,
  ...props
}: ProgramCardProps) {
  const tuitionFormatted = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(program.tuition);

  return (
    <Card
      className={cn("group flex flex-col overflow-hidden", className)}
      {...props}
    >
      {/* Image / gradient header */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-plum-700">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={program.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-plum-900 via-plum-700 to-amber-500/40" />
        )}
        {/* Duration badge */}
        <div className="absolute right-3 top-3">
          <Badge variant="dark">{program.duration}</Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <p className="mb-1 font-body text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-pink-500">
          {program.degreeType}
        </p>
        <h3 className="font-heading text-xl font-bold text-parchment">
          {program.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-sandstone line-clamp-3">
          {program.description}
        </p>

        {/* Meta row */}
        <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
          <div>
            <p className="text-xs sm:text-sm text-sandstone">Tuition</p>
            <p className="font-body text-sm font-semibold text-parchment">
              {tuitionFormatted}
            </p>
          </div>

          {program.cidaAccredited && (
            <Badge variant="accent">CIDA Accredited</Badge>
          )}
        </div>

        {/* CTA */}
        <Link
          href={`/programs/${program.slug}`}
          className="mt-4 inline-flex items-center min-h-[44px] gap-1.5 text-sm font-semibold text-pink-500 transition-colors hover:text-pink-400"
          aria-label={`Learn more about ${program.name}`}
        >
          Learn More
          <svg
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </Link>
      </div>
    </Card>
  );
}

/* ========================================================================== */
/*  Testimonial Card                                                          */
/* ========================================================================== */

interface TestimonialCardProps extends HTMLAttributes<HTMLDivElement> {
  testimonial: Testimonial;
}

export function TestimonialCard({
  testimonial,
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <Card className={cn("flex flex-col p-6 md:p-8", className)} {...props}>
      {/* Quote icon */}
      <svg
        className="mb-4 h-8 w-8 text-pink-500/30"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.274-.556-2.917-1.179zM15.583 17.321C14.553 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C20.591 11.69 22 13.166 22 15c0 1.933-1.567 3.5-3.5 3.5-1.171 0-2.274-.556-2.917-1.179z" />
      </svg>

      <blockquote className="flex-1 text-base leading-relaxed text-parchment italic">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mt-6 flex items-center gap-4 border-t border-white/10 pt-4">
        {testimonial.imageSrc && (
          <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full bg-plum-700">
            <Image
              src={testimonial.imageSrc}
              alt={testimonial.name}
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
        )}
        <div>
          <p className="font-body text-sm font-semibold text-parchment">
            {testimonial.name}
          </p>
          <p className="text-xs text-sandstone">
            {testimonial.currentTitle}
            {testimonial.company && `, ${testimonial.company}`}
          </p>
          <p className="text-xs font-medium text-pink-500">
            {testimonial.program}
          </p>
        </div>
      </div>
    </Card>
  );
}

/* ========================================================================== */
/*  Faculty Card                                                              */
/* ========================================================================== */

interface FacultyMember {
  name: string;
  title: string;
  bio: string;
  imageSrc?: string;
  specialties?: string[];
}

interface FacultyCardProps extends HTMLAttributes<HTMLDivElement> {
  faculty: FacultyMember;
}

export function FacultyCard({
  faculty,
  className,
  ...props
}: FacultyCardProps) {
  return (
    <Card
      className={cn("group overflow-hidden", className)}
      {...props}
    >
      {/* Photo */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-plum-700">
        {faculty.imageSrc ? (
          <Image
            src={faculty.imageSrc}
            alt={faculty.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-plum-800 to-plum-900" />
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-heading text-lg font-bold text-parchment">
          {faculty.name}
        </h3>
        <p className="mt-0.5 text-xs sm:text-sm font-semibold uppercase tracking-wider text-pink-500">
          {faculty.title}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-sandstone line-clamp-3">
          {faculty.bio}
        </p>

        {faculty.specialties && faculty.specialties.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {faculty.specialties.map((s) => (
              <span
                key={s}
                className="rounded-full bg-white/5 px-2.5 py-0.5 text-[11px] font-medium text-sandstone"
              >
                {s}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}

export default Card;
