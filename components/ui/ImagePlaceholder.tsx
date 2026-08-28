import { cn } from "@/lib/cn";

export function ImagePlaceholder({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-2 bg-cream-2 text-center",
        className,
      )}
    >
      <span className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted">
        Photograph
      </span>
      <span className="max-w-[16ch] text-lg font-semibold tracking-tight text-ink">
        {label}
      </span>
    </div>
  );
}
