import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { admissionWhatsAppHref } from "@/lib/whatsapp";

export function AdmissionsCTA() {
  return (
    <section className="container-site pb-6">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-ink-deep px-5 py-12 text-cream sm:rounded-[2rem] sm:px-8 sm:py-16 md:px-16 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            background:
              "radial-gradient(circle at 80% 20%, #C9A227 0%, transparent 42%)",
          }}
        />
        <Reveal className="relative max-w-3xl">
          <p className="eyebrow text-gold">Admissions 2026–27</p>
          <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.12] tracking-[-0.04em] sm:mt-5 sm:text-4xl md:text-6xl">
            Give your child a place to learn, explore and thrive.
          </h2>
          <p className="mt-5 max-w-xl text-[0.95rem] text-white/65 sm:mt-6 sm:text-base md:text-lg">
            Registration, interaction and a place in a classroom of 24 (Nursery
            & KG) or 30 (Class I and above). The admissions team looks for
            integrity, energy and curiosity.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={admissionWhatsAppHref}
              external
              variant="gold"
              className="w-full justify-center sm:w-auto"
            >
              Apply Now
            </ButtonLink>
            <ButtonLink
              href="/admissions/procedure"
              variant="light"
              className="w-full justify-center sm:w-auto"
            >
              View Admission Procedure
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
