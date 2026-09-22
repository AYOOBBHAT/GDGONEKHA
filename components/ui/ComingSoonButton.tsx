"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

const variants = {
  primary:
    "inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-[0.95rem] font-medium text-cream transition duration-300 hover:-translate-y-0.5 hover:bg-ink-deep",
  footer:
    "inline-flex min-h-11 items-center text-left text-sm text-muted transition hover:text-ink",
  footerBar:
    "inline-flex min-h-10 items-center gap-1 text-left transition hover:text-ink",
};

export function ComingSoonButton({
  label,
  className,
  variant = "primary",
  icon,
}: {
  label: string;
  className?: string;
  variant?: keyof typeof variants;
  icon?: React.ReactNode;
}) {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowNotice(true)}
      className={cn(variants[variant], className)}
    >
      {showNotice ? "Coming soon" : label}
      {!showNotice ? icon : null}
    </button>
  );
}
