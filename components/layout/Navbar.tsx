"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/cn";

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const closeTimer = useRef<number | null>(null);
  const navId = useId();

  function scheduleClose() {
    closeTimer.current = window.setTimeout(() => setOpen(null), 140);
  }

  function cancelClose() {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  }

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
      {mainNav.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const isOpen = open === item.label;
        const menuId = `${navId}-${item.label.replace(/\s+/g, "-")}`;

        if (!hasChildren) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full px-3 py-2 text-[13px] font-medium tracking-wide text-ink/80 transition hover:text-ink"
            >
              {item.label}
            </Link>
          );
        }

        return (
          <div
            key={item.label}
            className="relative"
            onMouseEnter={() => {
              cancelClose();
              setOpen(item.label);
            }}
            onMouseLeave={scheduleClose}
          >
            <button
              type="button"
              className={cn(
                "inline-flex items-center gap-1 rounded-full px-3 py-2 text-[13px] font-medium tracking-wide text-ink/80 transition hover:text-ink",
                isOpen && "text-ink",
              )}
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={menuId}
              onClick={() => setOpen(isOpen ? null : item.label)}
            >
              {item.label}
              <ChevronDown
                size={14}
                className={cn(
                  "transition duration-300",
                  isOpen && "rotate-180 text-gold-dark",
                )}
              />
            </button>
            <div
              id={menuId}
              hidden={!isOpen}
              className="absolute left-0 top-full z-50 pt-3"
              onMouseEnter={cancelClose}
            >
              <ul
                role="menu"
                className="min-w-[260px] rounded-2xl border border-line bg-white p-2 shadow-[0_18px_50px_rgba(17,17,17,0.08)]"
              >
                {item.children?.map((child) => (
                  <li key={child.href} role="none">
                    <Link
                      role="menuitem"
                      href={child.href}
                      className="block rounded-xl px-3.5 py-2.5 text-sm text-ink/80 transition hover:bg-cream-2 hover:text-ink"
                      onClick={() => setOpen(null)}
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
