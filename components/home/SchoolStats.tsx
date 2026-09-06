import { Reveal } from "@/components/ui/Reveal";
import { schoolStats } from "@/lib/features";

export function SchoolStats() {
  return (
    <section className="py-14 sm:py-20 md:py-28">
      <div className="container-site grid gap-8 sm:gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <p className="eyebrow">The campus, in facts</p>
          <h2 className="mt-4 text-[1.85rem] font-semibold tracking-[-0.04em] sm:text-4xl">
            Built for learning. Measured with care.
          </h2>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4 lg:col-span-8">
          {schoolStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.06}>
              <div className="rounded-[1.4rem] border border-line bg-white p-5 sm:rounded-3xl sm:p-6">
                <p className="eyebrow">{stat.label}</p>
                <p className="mt-3 text-2xl font-semibold tracking-tight sm:mt-4 sm:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:mt-3">
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
