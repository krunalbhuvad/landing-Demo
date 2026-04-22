import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-wrapper py-16 sm:py-20">
      <h2 className="section-title">Teams trust NeuroFlow AI to scale operations</h2>
      <p className="section-subtitle">
        Real feedback from operators and founders who replaced manual chaos with
        intelligent automation.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.name} className="glass-panel rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <img
                src={item.photo}
                alt={item.name}
                className="h-12 w-12 rounded-full object-cover ring-1 ring-white/20"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-white">{item.name}</p>
                <p className="mt-1 text-xs text-slate-400">{item.role}</p>
              </div>
            </div>
            <div className="mt-6 border-t border-white/10 pt-4">
              <p className="text-sm leading-6 text-slate-200">
                &ldquo;{item.quote}&rdquo;
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
