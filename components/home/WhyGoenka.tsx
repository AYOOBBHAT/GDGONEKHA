import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { whyFeatures } from "@/lib/features";

export function WhyGoenka() {
  return (
    <section id="why" className="bg-cream-2 py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            title="Why GD Goenka?"
            subtitle="More than academics. A foundation for life."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {whyFeatures.map((feature, index) => (
            <Reveal key={feature.slug} delay={index * 0.05}>
              <Link
                href={`/why/${feature.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-[0_16px_40px_rgba(17,17,17,0.05)]"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs font-semibold tracking-[0.14em] text-gold-dark">
                    {feature.number}
                  </span>
                  <ArrowRight
                    size={16}
                    className="text-muted transition duration-300 group-hover:translate-x-1 group-hover:text-ink"
                  />
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
