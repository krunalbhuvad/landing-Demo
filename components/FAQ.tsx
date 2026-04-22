"use client";

import { useState } from "react";
import { faqs } from "@/lib/data";

export default function FAQ() {
  const [openQuestion, setOpenQuestion] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenQuestion((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="section-wrapper py-16 sm:py-20">
      <h2 className="section-title">Answers before you ask</h2>
      <p className="section-subtitle">
        Objections handled clearly so your team can move forward with confidence.
      </p>

      <div className="mt-10 space-y-4">
        {faqs.map((item, index) => {
          const isOpen = openQuestion === index;
          return (
            <article key={item.question} className="glass-panel rounded-2xl p-5">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-4 text-left"
                onClick={() => toggleQuestion(index)}
                aria-expanded={isOpen}
              >
                <span className="text-sm font-semibold text-white sm:text-base">
                  {item.question}
                </span>
                <span className="text-cyan-300">{isOpen ? "-" : "+"}</span>
              </button>
              {isOpen ? (
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.answer}</p>
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
}
