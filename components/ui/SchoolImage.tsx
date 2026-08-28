import Image from "next/image";
import { cn } from "@/lib/cn";

export function SchoolImage({
  src,
  alt,
  className,
  sizes,
  priority = false,
  zoom = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  zoom?: boolean;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-cream-2", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 768px) 100vw, 50vw"}
        priority={priority}
        unoptimized
        className={cn(
          "object-cover object-center",
          zoom &&
            "transition duration-700 ease-out group-hover:scale-[1.04]",
        )}
      />
    </div>
  );
}
