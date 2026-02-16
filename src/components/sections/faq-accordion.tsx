"use client";

import { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mx-auto max-w-3xl divide-y divide-white/10">
      {faqs.map((faq, i) => (
        <div key={faq.question} className="py-4 first:pt-0 last:pb-0">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 text-left min-h-[44px]"
            aria-expanded={openIndex === i}
          >
            <h3 className="font-body text-base font-semibold text-parchment">
              {faq.question}
            </h3>
            <svg
              className={`h-5 w-5 flex-shrink-0 text-pink-500 transition-transform duration-200 ${
                openIndex === i ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            className={`overflow-hidden transition-all duration-200 ${
              openIndex === i ? "mt-2 max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-sm leading-relaxed text-sandstone">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
