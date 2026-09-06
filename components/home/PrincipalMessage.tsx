import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export function PrincipalMessage() {
  return (
    <section className="bg-cream-2 py-20 md:py-28">
      <div className="container-site grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <SchoolImage
            src={images.principal}
            alt={`${site.people.principal}, Principal of GD Goenka Public School Kupwara`}
            className="aspect-[4/5] rounded-[2rem]"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-7">
          <p className="eyebrow">A message from the Principal</p>
          <h2 className="mt-4 max-w-[16ch] text-4xl font-semibold leading-[1.1] tracking-[-0.04em] md:text-5xl">
            Leadership that puts every child first.
          </h2>
          <p className="mt-6 max-w-xl text-muted">
            The Principal’s full message will be published here soon. Until then,
            reach the school office for guidance, or explore Know Us for more
            about our vision and campus.
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
