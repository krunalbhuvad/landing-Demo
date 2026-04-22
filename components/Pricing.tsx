import { pricingPlans } from "@/lib/data";

export default function Pricing() {
  return (
    <section id="pricing" className="section-wrapper py-16 sm:py-20">
      <h2 className="animate-fade-in-up section-title">Simple pricing for every growth stage</h2>
      <p className="animate-fade-in-up section-subtitle" style={{ animationDelay: "120ms" }}>
        Start lean, scale confidently, and only pay for the value your team is
        creating.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <article
            key={plan.name}
            className={`animate-fade-in-up rounded-2xl p-6 transition ${
              plan.isPopular
                ? "border border-cyan-300/50 bg-cyan-300/10 shadow-glow"
                : "glass-panel border border-white/15"
            }`}
            style={{ animationDelay: `${index * 120}ms` }}
          >
            {plan.isPopular ? (
              <p className="mb-4 inline-flex rounded-full bg-cyan-300 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-slate-950">
                Most Popular
              </p>
            ) : null}
            <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
            <p className="mt-3 text-3xl font-semibold text-cyan-200">{plan.price}</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">{plan.description}</p>
            <ul className="mt-6 space-y-2 text-sm text-slate-200">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <a
              href="#"
              className={`mt-7 inline-block w-full rounded-full px-5 py-2.5 text-center text-sm font-semibold transition ${
                plan.isPopular
                  ? "bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                  : "border border-white/20 bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Choose {plan.name}
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
