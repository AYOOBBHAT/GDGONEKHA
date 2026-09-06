import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section className="border-y border-line py-16 sm:py-24 md:py-36">
      <div className="container-site max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-6 sm:mb-8">Philosophy</p>
          <p className="text-[1.85rem] font-semibold leading-[1.15] tracking-[-0.04em] sm:text-4xl md:text-6xl md:leading-[1.12] md:tracking-[-0.045em]">
            Every child has the potential to become something extraordinary.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:mt-10 sm:text-lg md:text-xl">
            The school rises above conventional teaching. With an activity-based
            curriculum, the institution initiates character development, and a
            highly qualified faculty works for academic excellence. Each child
            is met with development programmes that encourage not just reading,
            but a lasting love for learning. In this vision, every Goenkan
            grows qualified, confident and ready.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
