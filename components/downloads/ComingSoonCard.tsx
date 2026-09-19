"use client";

import { useState } from "react";

export function ComingSoonCard({
  id,
  title,
  text,
}: {
  id: string;
  title: string;
  text: string;
}) {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <article id={id} className="scroll-mt-28">
      <button
        type="button"
        onClick={() => setShowNotice(true)}
        className="w-full rounded-3xl border border-line bg-white p-6 text-left"
      >
        <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
        <p className="mt-2 text-sm text-muted">{text}</p>
        <p className="mt-4 text-sm font-medium text-ink">
          {showNotice ? "Coming soon." : "Open resource →"}
        </p>
      </button>
    </article>
  );
}
