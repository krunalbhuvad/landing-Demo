export default function CTA() {
  return (
    <section className="section-wrapper py-16 sm:py-20">
      <div className="glass-panel animate-fade-in-up rounded-3xl border-cyan-300/30 bg-gradient-to-r from-cyan-400/15 to-violet-400/15 p-8 text-center sm:p-12">
        <p className="animate-fade-in-up text-sm uppercase tracking-[0.2em] text-cyan-200">
          Ready to scale smarter?
        </p>
        <h2
          className="animate-fade-in-up mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          style={{ animationDelay: "120ms" }}
        >
          Replace repetitive work with AI-powered workflows your team actually
          trusts.
        </h2>
        <a
          href="#pricing"
          className="animate-fade-in-up mt-8 inline-block rounded-full bg-cyan-300 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] hover:bg-cyan-200"
          style={{ animationDelay: "220ms" }}
        >
          Start Your Free Trial
        </a>
      </div>
    </section>
  );
}
