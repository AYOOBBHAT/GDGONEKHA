"use client";

import { useMemo, useState } from "react";
import { staff } from "@/lib/team";
import { cn } from "@/lib/cn";

const groups = [
  { id: "all", label: "All" },
  { id: "leadership", label: "Leadership" },
  { id: "admin", label: "Administration" },
  { id: "faculty", label: "Faculty" },
] as const;

export function TeamDirectory() {
  const [group, setGroup] = useState<(typeof groups)[number]["id"]>("all");
  const people = useMemo(
    () =>
      group === "all" ? staff : staff.filter((person) => person.group === group),
    [group],
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {groups.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setGroup(item.id)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm",
              group === item.id
                ? "border-ink bg-ink text-cream"
                : "border-line bg-white text-muted",
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {people.map((person) => (
          <li
            key={`${person.name}-${person.role}`}
            className="rounded-3xl border border-line bg-white p-5"
          >
            <p className="text-lg font-semibold tracking-tight">{person.name}</p>
            <p className="mt-1 text-sm text-gold-dark">{person.role}</p>
            {person.qualification ? (
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {person.qualification}
              </p>
            ) : null}
          </li>
        ))}
      </ul>
      <p className="mt-8 max-w-2xl text-sm text-muted">
        A dedicated transport, housekeeping and care team supports every school
        day. Transport queries: 18008890880 / 9103854896.
      </p>
    </div>
  );
}
