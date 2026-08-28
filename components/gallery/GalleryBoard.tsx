"use client";

import { useMemo, useState } from "react";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { galleryFilters, galleryItems, type GalleryCategory } from "@/lib/gallery";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function GalleryBoard({
  initial,
}: {
  initial?: string;
}) {
  const start =
    galleryFilters.some((f) => f.id === initial) && initial
      ? (initial as GalleryCategory | "all")
      : "all";
  const [filter, setFilter] = useState<GalleryCategory | "all">(start);

  const items = useMemo(() => {
    if (filter === "all") return galleryItems;
    if (filter === "videos") return [];
    return galleryItems.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {galleryFilters.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setFilter(item.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm",
              filter === item.id
                ? "border-ink bg-ink text-cream"
                : "border-line bg-white text-muted",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      {filter === "videos" ? (
        <div className="mt-10 rounded-3xl border border-line bg-white p-8">
          <p className="text-lg font-semibold">Video gallery</p>
          <p className="mt-3 max-w-xl text-muted">
            School films and event recordings live on the official YouTube
            channel. Open it to watch assemblies, celebrations and campus
            stories.
          </p>
          <a
            href={site.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-medium text-cream"
          >
            Open YouTube channel
          </a>
        </div>
      ) : (
        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item) => (
            <figure key={item.id} className="group mb-4 break-inside-avoid">
              <SchoolImage
                src={item.image}
                alt={item.alt}
                className="aspect-[4/5] rounded-[1.4rem] sm:aspect-auto sm:min-h-[240px]"
                zoom
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <figcaption className="mt-2 text-sm text-muted">
                {item.title}
              </figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}
