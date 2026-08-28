import { Reveal } from "@/components/ui/Reveal";
import { schoolStats } from "@/lib/features";

export function SchoolStats() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">The campus, in facts</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
            Built for learning. Measured with care.
          </h2>
        </Reveal>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
          {schoolStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="rounded-3xl border border-line bg-white p-6">
                <p className="eyebrow">{stat.label}</p>
                <p className="mt-4 text-3xl font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {stat.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
