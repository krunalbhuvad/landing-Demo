"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("features");

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry?.target?.id) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.01 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="animate-fade-in sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
      <div className="section-wrapper flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-semibold tracking-tight text-white">
          NeuroFlow <span className="text-cyan-300">AI</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm transition ${
                  isActive
                    ? "text-cyan-300"
                    : "text-slate-300 hover:text-white focus-visible:text-white"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#pricing"
          className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-300"
        >
          Get Started
        </a>
      </div>
    </header>
  );
}
