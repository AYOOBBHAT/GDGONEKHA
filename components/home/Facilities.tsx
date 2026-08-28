import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { images } from "@/lib/images";

const tiles = [
  {
    title: "The campus",
    caption: "95-kanal campus in Kupwara",
    image: images.campusAerial,
    className: "md:col-span-2 md:row-span-2 min-h-[320px] md:min-h-[540px]",
  },
  {
    title: "School life",
    caption: "A child-focused, technology-enabled campus",
    image: images.campusPortrait,
    className: "min-h-[240px]",
  },
  {
    title: "Learning in motion",
    caption: "Activity, culture and character, every week",
    image: images.news.baisakhi,
    className: "min-h-[240px]",
  },
  {
    title: "Sport",
    caption: "Football, basketball, tennis, volleyball, swimming",
    image: images.gallery.sports1,
    className: "min-h-[240px]",
  },
  {
    title: "Swimming pool",
    caption: "Semi-Olympic pool with trained instructors",
    image: null,
    className: "min-h-[240px]",
  },
];

export function Facilities() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Campus"
            title="A campus built with intention."
            subtitle="Soundproof classrooms, Wi-Fi, central air-conditioning, a 300-seat auditorium, a food court, and sports infrastructure of international standard — including a semi-Olympic swimming pool."
          />
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {tiles.map((tile, index) => (
            <Reveal
              key={tile.title}
              delay={index * 0.06}
              className={tile.className}
            >
              <figure className="group relative h-full min-h-[240px] overflow-hidden rounded-[1.6rem]">
                {tile.image ? (
                  <SchoolImage
                    src={tile.image}
                    alt={tile.caption}
                    className="absolute inset-0 h-full w-full"
                    zoom
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                ) : (
                  <ImagePlaceholder
                    label={tile.title}
                    className="absolute inset-0 h-full w-full"
                  />
                )}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-cream">
                  <p className="text-lg font-semibold tracking-tight">
                    {tile.title}
                  </p>
                  <p className="mt-1 text-sm text-white/75">{tile.caption}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link href="/facilities" className="text-sm font-medium text-ink">
            Explore facilities →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
