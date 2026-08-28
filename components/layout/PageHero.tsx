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
      <Container className="py-16 md:py-24">
        <Reveal>
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.045em] md:text-6xl">
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {lead}
            </p>
          ) : null}
        </Reveal>
      </Container>
    </section>
  );
}
