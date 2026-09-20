"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function ComingSoonButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowNotice(true)}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-[0.95rem] font-medium text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-ink-deep",
        className,
      )}
    >
      {showNotice ? "Coming soon" : label}
    </button>
  );
}
