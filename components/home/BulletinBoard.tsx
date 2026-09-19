"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import type { HomeNotice } from "@/lib/circulars";

const tabs = ["Circulars", "Newsletter"] as const;

function NoticeList({
  items,
  empty,
}: {
  items: HomeNotice[];
  empty: string;
}) {
  if (!items.length) {
    return <p className="text-sm text-muted">{empty}</p>;
  }

  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item.id}
          className="flex flex-col gap-4 border-b border-line pb-5 last:border-0 last:pb-0 sm:flex-row sm:items-start"
        >
          <div className="flex h-16 w-16 shrink-0 flex-col items-center justify-center rounded-2xl bg-cream-2">
            <span className="text-xl font-semibold leading-none">
              {item.date}
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-wider text-muted">
              {item.month} {item.year}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {item.heading}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {item.text}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function BulletinBoard({
  circulars,
  newsletters,
}: {
  circulars: HomeNotice[];
  newsletters: HomeNotice[];
}) {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Circulars");

  return (
    <section className="bg-cream-2 py-14 sm:py-20 md:py-28">
      <div className="container-site">
        <p className="eyebrow">School bulletin</p>
        <h2 className="mt-3 text-[1.85rem] font-semibold tracking-[-0.04em] sm:text-4xl md:text-5xl">
          Circulars and newsletter.
        </h2>
        <div
          role="tablist"
          aria-label="Bulletin board"
          className="mt-6 flex flex-wrap gap-2 sm:mt-8"
        >
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={tab === item}
              className={cn(
                "min-h-11 rounded-full border px-4 py-2.5 text-sm transition",
                tab === item
                  ? "border-ink bg-ink text-cream"
                  : "border-line bg-white text-muted hover:text-ink",
              )}
              onClick={() => setTab(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="mt-6 rounded-[1.5rem] border border-line bg-white p-5 sm:mt-8 sm:rounded-3xl sm:p-6 md:p-8">
          {tab === "Circulars" ? (
            <NoticeList
              items={circulars}
              empty="No circulars published yet."
            />
          ) : (
            <NoticeList
              items={newsletters}
              empty="No newsletter published yet."
            />
          )}
        </div>
      </div>
    </section>
  );
}
