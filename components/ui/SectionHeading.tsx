import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p className={cn("eyebrow mb-4", light && "text-white/55")}>{eyebrow}</p>
      ) : null}
      <h2
        className={cn(
          "text-[2rem] font-semibold leading-[1.12] tracking-[-0.04em] md:text-5xl",
          light ? "text-cream" : "text-ink",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            light ? "text-white/70" : "text-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
