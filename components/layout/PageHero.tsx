import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
}) {
  return (
    <section className="border-b border-line bg-cream">
      <Container className="py-12 sm:py-16 md:py-24">
        <Reveal>
          {eyebrow ? <p className="eyebrow mb-3 sm:mb-4">{eyebrow}</p> : null}
          <h1 className="max-w-4xl text-[1.9rem] font-semibold leading-[1.12] tracking-[-0.04em] sm:text-4xl md:text-6xl md:leading-[1.08] md:tracking-[-0.045em]">
            {title}
          </h1>
          {lead ? (
            <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-base md:text-lg">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
