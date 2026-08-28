import { Reveal } from "@/components/ui/Reveal";

export function Philosophy() {
  return (
    <section className="border-y border-line py-24 md:py-36">
      <div className="container-site max-w-5xl">
        <Reveal>
          <p className="eyebrow mb-8">Philosophy</p>
          <p className="text-4xl font-semibold leading-[1.12] tracking-[-0.045em] md:text-6xl">
            Every child has the potential to become something extraordinary.
          </p>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
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
