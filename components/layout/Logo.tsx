import Link from "next/link";
import Image from "next/image";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

export function Logo({
  compact = false,
  inverted = false,
}: {
  compact?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link href="/" className="flex min-w-0 items-center gap-3">
      <span
        className={cn(
          "relative shrink-0 overflow-hidden rounded-full bg-white",
          compact ? "h-10 w-10" : "h-11 w-11 md:h-12 md:w-12",
        )}
      >
        <Image
          src={images.logoMark}
          alt=""
          fill
          className="object-contain p-1"
          sizes="48px"
          unoptimized
        />
      </span>
      <span className="min-w-0">
        <span
          className={cn(
            "block truncate text-[0.72rem] font-semibold uppercase tracking-[0.16em]",
            inverted ? "text-white/55" : "text-muted",
          )}
        >
          GD Goenka
        </span>
        <span
          className={cn(
            "block truncate text-sm font-semibold leading-tight tracking-tight md:text-base",
            inverted ? "text-cream" : "text-ink",
          )}
        >
          {compact ? "Kupwara" : site.shortName}
        </span>
      </span>
    </Link>
  );
}
