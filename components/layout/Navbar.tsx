"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { mainNav } from "@/lib/navigation";
import { cn } from "@/lib/cn";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
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
    setOpen(null);
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav
      aria-label="Primary"
      className="hidden items-center xl:flex"
    >
      {mainNav.map((item) => {
        const hasChildren = Boolean(item.children?.length);
        const childActive = item.children?.some((child) =>
          isActivePath(pathname, child.href),
        );
        const active = isActivePath(pathname, item.href) || Boolean(childActive);
        const isOpen = open === item.label;
        const menuId = `${navId}-${item.label.replace(/\s+/g, "-")}`;

        if (!hasChildren) {
          return (
            <Link
              key={item.label}
              href={item.href}
              className={cn(
                "whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition",
                active
                  ? "bg-cream-2 text-brand-blue"
                  : "text-ink/70 hover:text-brand-blue",
              )}
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
                "inline-flex items-center gap-0.5 whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition",
                active || isOpen
                  ? "bg-cream-2 text-brand-blue"
                  : "text-ink/70 hover:text-brand-blue",
              )}
              aria-expanded={isOpen}
              aria-haspopup="true"
              aria-controls={menuId}
              onClick={() => setOpen(isOpen ? null : item.label)}
            >
              {item.label}
              <ChevronDown
                size={13}
                strokeWidth={2.25}
                className={cn(
                  "opacity-60 transition duration-300",
                  isOpen && "rotate-180 opacity-100",
                )}
              />
            </button>
            <div
              id={menuId}
              hidden={!isOpen}
              className="absolute left-0 top-full z-50 pt-2"
              onMouseEnter={cancelClose}
            >
              <ul
                role="menu"
                className="min-w-[220px] rounded-2xl border border-line bg-white p-1.5 shadow-[0_18px_50px_rgba(17,17,17,0.08)]"
              >
                {item.children?.map((child) => {
                  const childIsActive = isActivePath(pathname, child.href);
                  return (
                    <li key={child.href} role="none">
                      <Link
                        role="menuitem"
                        href={child.href}
                        className={cn(
                          "block rounded-xl px-3 py-2 text-[13px] transition",
                          childIsActive
                            ? "bg-cream-2 font-medium text-brand-blue"
                            : "text-ink/80 hover:bg-cream-2 hover:text-ink",
                        )}
                        onClick={() => setOpen(null)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
