import { features } from "@/lib/data";

export default function Features() {
  return (
    <section id="features" className="section-wrapper py-16 sm:py-20">
      <h2 className="section-title">Built for modern teams shipping fast</h2>
      <p className="section-subtitle">
        Every feature is designed to remove manual work, reduce delays, and keep
        your team in flow.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="glass-panel group rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/10"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl transition group-hover:bg-cyan-300/20">
              {feature.icon}
            </div>
            <h3 className="mt-4 text-xl font-semibold text-white">{feature.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {feature.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
