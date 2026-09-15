import { SchoolImage } from "@/components/ui/SchoolImage";
import { cn } from "@/lib/cn";

export function PhotoGrid({
  photos,
  alt,
  className,
}: {
  photos: readonly string[];
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {photos.map((src, index) => (
        <SchoolImage
          key={src}
          src={src}
          alt={`${alt} ${index + 1}`}
          className={
            index === 0
              ? "aspect-[4/3] rounded-[1.4rem] sm:col-span-2 lg:col-span-3 lg:aspect-[21/9]"
              : "aspect-[4/3] rounded-[1.4rem]"
          }
          sizes={
            index === 0
              ? "100vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
        />
      ))}
    </div>
  );
}
