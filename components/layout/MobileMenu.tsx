"use client";

import { ChevronDown, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { mainNav } from "@/lib/navigation";
import { site } from "@/lib/site";
import { cn } from "@/lib/cn";
import { admissionWhatsAppHref } from "@/lib/whatsapp";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[70] flex flex-col bg-cream transition duration-300 xl:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="flex h-16 shrink-0 items-center justify-between border-b border-line px-4 sm:px-5">
        <Logo compact />
        <button
          type="button"
          onClick={onClose}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>
      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-4 py-5 pb-[max(1.5rem,env(safe-area-inset-bottom))] sm:px-5">
        <ul className="space-y-1">
          {mainNav.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isOpen = expanded === item.label;
            if (!hasChildren) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block min-h-11 rounded-2xl px-3 py-3.5 text-lg font-medium"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            }
            return (
              <li key={item.label} className="border-b border-line/80">
                <button
                  type="button"
                  className="flex min-h-11 w-full items-center justify-between rounded-2xl px-3 py-3.5 text-left text-lg font-medium"
                  aria-expanded={isOpen}
                  onClick={() => setExpanded(isOpen ? null : item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={18}
                    className={cn("transition", isOpen && "rotate-180")}
                  />
                </button>
                {isOpen ? (
                  <ul className="mb-3 space-y-1 pb-3 pl-2">
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block min-h-11 rounded-xl px-3 py-3 text-base text-muted"
                          onClick={onClose}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
        <div className="mt-8 space-y-1 border-t border-line pt-6 text-sm">
          <a
            href={site.phones[0].href}
            className="flex min-h-11 items-center rounded-xl px-3 text-muted"
          >
            {site.phones[0].value}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex min-h-11 items-center rounded-xl px-3 text-muted break-all"
          >
            {site.email}
          </a>
          <a
            href={site.links.feePayment}
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-11 items-center rounded-xl px-3 font-medium text-ink"
          >
            Online Fee Payment
          </a>
        </div>
        <a
          href={admissionWhatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 mb-2 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-ink px-5 py-3.5 text-base font-medium text-cream"
          onClick={onClose}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
