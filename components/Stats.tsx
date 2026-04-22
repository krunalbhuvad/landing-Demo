import { stats } from "@/lib/data";

export default function Stats() {
  return (
    <section className="section-wrapper py-16 sm:py-20">
      <div className="glass-panel animate-fade-in-up grid gap-6 rounded-3xl p-8 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="animate-fade-in-up text-center sm:text-left"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <p className="text-3xl font-semibold text-cyan-300">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
