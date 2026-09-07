import Link from "next/link";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * Brand guidelines:
 * - Intact official lockup (falcon + wordmark + Thrive. For Life.)
 * - White or brand-blue background only
 * - Location is secondary (city only)
 * - Never crop / stretch / separate the bird
 */
export function Logo({
  compact = false,
}: {
  compact?: boolean;
  inverted?: boolean;
}) {
  return (
    <Link
      href="/"
      aria-label={`${site.name}. ${site.brandTagline}`}
      className={cn(
        "group flex shrink-0 flex-col items-start justify-center",
        compact ? "gap-0.5" : "gap-1",
      )}
    >
      {/* Native img: most reliable for local SVG lockups */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={images.brandLogo}
        alt="GD Goenka — Thrive. For Life."
        width={251}
        height={55}
        className={cn(
          "w-auto max-w-full object-contain object-left",
          compact ? "h-8 sm:h-9" : "h-9 sm:h-10",
        )}
        decoding="async"
      />
      <span
        className={cn(
          "pl-0.5 font-medium uppercase tracking-[0.18em] text-brand-grey/70",
          compact ? "text-[0.55rem]" : "text-[0.58rem] sm:text-[0.62rem]",
        )}
      >
        {site.logoLocation}
      </span>
    </Link>
  );
}
