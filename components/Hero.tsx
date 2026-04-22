export default function Hero() {
  return (
    <section className="section-wrapper pb-20 pt-20 sm:pb-24 sm:pt-24">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-5 inline-flex rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-200">
          AI workflow automation platform
        </p>

        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          Automate busywork.
          <span className="block bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
            Scale output with NeuroFlow AI.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          NeuroFlow AI connects your tools, understands context, and runs smart
          workflows end-to-end so your team can focus on high-impact work.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="w-full rounded-full bg-cyan-400 px-7 py-3 text-center text-sm font-semibold text-slate-950 shadow-glow transition hover:scale-[1.02] hover:bg-cyan-300 sm:w-auto"
          >
            Start Free Trial
          </a>
          <a
            href="#features"
            className="w-full rounded-full border border-white/20 bg-white/5 px-7 py-3 text-center text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10 sm:w-auto"
          >
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}
