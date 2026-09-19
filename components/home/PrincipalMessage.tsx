import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function PrincipalMessage() {
  return (
    <section className="bg-cream-2 py-14 sm:py-20 md:py-28">
      <div className="container-site grid items-center gap-8 sm:gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SchoolImage
            src={images.principal}
            alt={`${site.people.principal}, Principal of GD Goenka Public School Kupwara`}
            className="aspect-[4/5] rounded-[1.5rem] sm:rounded-[2rem]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <p className="eyebrow">A message from the Principal</p>
          <h2 className="mt-4 max-w-[18ch] text-[1.85rem] font-semibold leading-[1.12] tracking-[-0.04em] sm:text-4xl md:text-5xl">
            We prepare them to thrive—throughout life.
          </h2>
          <p className="mt-5 max-w-xl text-[0.95rem] text-muted sm:mt-6 sm:text-base">
            It is my privilege and honor to welcome you to GD Goenka School, a
            place where education goes beyond classrooms, textbooks, and
            examinations. Our vision is to nurture young minds who are confident,
            compassionate, curious, and prepared to contribute meaningfully to
            the world.
          </p>
          <p className="mt-6 text-sm font-medium">
            {site.people.principal}
            <span className="block font-normal text-muted">
              {site.people.principalTitle}
            </span>
          </p>
          <ButtonLink href="/principal-message" variant="ghost" className="mt-6">
            Principal&apos;s Message →
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
