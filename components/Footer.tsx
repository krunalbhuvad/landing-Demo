import { navLinks } from "@/lib/data";

const socialLinks = ["X", "LinkedIn", "GitHub"];

export default function Footer() {
  return (
    <footer className="animate-fade-in border-t border-white/10 py-10">
      <div className="section-wrapper flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">
            NeuroFlow <span className="text-cyan-300">AI</span>
          </p>
          <p className="mt-2 text-sm text-slate-400">
            Automate workflows with confidence.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
          {socialLinks.map((social) => (
            <a key={social} href="#" className="text-slate-300 transition hover:text-white">
              {social}
            </a>
          ))}
        </div>
      </div>

      <p className="section-wrapper mt-8 text-xs text-slate-500">
        © {new Date().getFullYear()} NeuroFlow AI. All rights reserved.
      </p>
    </footer>
  );
}
