import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryItems } from "@/lib/gallery";

export function GalleryPreview() {
  const preview = galleryItems.slice(0, 6);

  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="School, as it is lived."
            subtitle="Sports, classrooms, outdoor work and house life — photographed on campus."
          />
        </Reveal>
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {preview.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.04} className="mb-4 break-inside-avoid">
              <Link href="/gallery" className="group block overflow-hidden rounded-[1.4rem]">
                <SchoolImage
                  src={item.image}
                  alt={item.alt}
                  className={`w-full ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}
                  zoom
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </Link>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8">
          <Link href="/gallery" className="text-sm font-medium">
            Open the gallery →
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
