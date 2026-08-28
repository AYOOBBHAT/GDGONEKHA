import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";

export function AdmissionsCTA() {
  return (
    <section className="px-4 pb-6 md:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-ink-deep px-6 py-16 text-cream md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, #C9A227 0%, transparent 42%)",
          }}
        />
        <Reveal className="relative max-w-3xl">
          <p className="eyebrow text-gold">Admissions 2026–27</p>
          <h2 className="mt-5 text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-6xl">
            Give your child a place to learn, explore and thrive.
          </h2>
          <p className="mt-6 max-w-xl text-base text-white/65 md:text-lg">
            Registration, interaction and a place in a classroom of 24 (Nursery
            & KG) or 30 (Class I and above). The admissions team looks for
            integrity, energy and curiosity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/admissions/apply" variant="gold">
              Apply Now
            </ButtonLink>
            <ButtonLink href="/admissions/procedure" variant="light">
              View Admission Procedure
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
