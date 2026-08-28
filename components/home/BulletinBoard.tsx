"use client";

import { useMemo, useState } from "react";
import { birthdays, calendarEvents, circulars } from "@/lib/bulletin";
import { cn } from "@/lib/cn";

const tabs = ["Circulars", "Birthdays", "Calendar"] as const;

function CalendarPanel() {
  const today = new Date(2026, 7, 27);
  const year = today.getFullYear();
  const month = today.getMonth();
  const first = new Date(year, month, 1);
  const startDay = first.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const eventDays = useMemo(
    () => new Set(calendarEvents.map((event) => event.date)),
    [],
  );

  const cells = [];
  for (let i = 0; i < startDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div>
      <p className="mb-4 text-sm font-medium">August 2026</p>
      <div className="grid grid-cols-7 gap-1 text-center text-[11px] uppercase tracking-wider text-muted">
        {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
          <span key={`${d}-${i}`}>{d}</span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-7 gap-1">
        {cells.map((day, index) => {
          if (!day) return <span key={`e-${index}`} />;
          const iso = `2026-08-${String(day).padStart(2, "0")}`;
          const hasEvent = eventDays.has(iso);
          const isToday = day === 27;
          return (
            <span
              key={day}
              className={cn(
                "flex aspect-square items-center justify-center rounded-xl text-sm",
                isToday && "bg-ink text-cream",
                hasEvent && !isToday && "bg-gold/20 font-medium",
              )}
            >
              {day}
            </span>
          );
        })}
      </div>
      <ul className="mt-5 space-y-2 text-sm text-muted">
        {calendarEvents.map((event) => (
          <li key={event.date}>
            <span className="font-medium text-ink">14 Aug — </span>
            {event.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BulletinBoard() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Circulars");

  return (
    <section className="bg-cream-2 py-20 md:py-28">
      <div className="container-site">
        <p className="eyebrow">School bulletin</p>
        <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
          Notices, birthdays, calendar.
        </h2>
        <div
          role="tablist"
          aria-label="Bulletin board"
          className="mt-8 flex gap-2"
        >
          {tabs.map((item) => (
            <button
              key={item}
              type="button"
              role="tab"
              aria-selected={tab === item}
              className={cn(
                "rounded-full border px-4 py-2 text-sm transition",
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
        <div className="mt-8 rounded-3xl border border-line bg-white p-6 md:p-8">
          {tab === "Circulars" ? (
            <ul className="space-y-4">
              {circulars.map((item) => (
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
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {item.body}
                    </p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-block text-sm font-medium"
                    >
                      Read circular →
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
          {tab === "Birthdays" ? (
            <div>
              <p className="mb-6 text-sm text-muted">
                May your day be filled with joy, learning, and the pursuit of
                your dreams.
              </p>
              <ul className="grid gap-4 sm:grid-cols-3">
                {birthdays.map((person) => (
                  <li
                    key={person.name}
                    className="rounded-2xl border border-line p-4"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cream-2 text-sm font-semibold">
                      {person.initials}
                    </div>
                    <p className="mt-4 font-semibold tracking-tight">
                      {person.name}
                    </p>
                    <p className="text-sm text-muted">{person.className}</p>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          {tab === "Calendar" ? <CalendarPanel /> : null}
        </div>
      </div>
    </section>
  );
}
