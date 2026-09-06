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
        "fixed inset-0 z-[70] bg-cream transition duration-300 xl:hidden",
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
      )}
      aria-hidden={!open}
    >
      <div className="flex h-16 items-center justify-between border-b border-line px-5">
        <Logo compact />
        <button
          type="button"
          onClick={onClose}
          className="rounded-full border border-line p-2"
          aria-label="Close menu"
        >
          <X size={20} />
        </button>
      </div>
      <div className="h-[calc(100vh-4rem)] overflow-y-auto px-5 py-6">
        <ul className="space-y-1">
          {mainNav.map((item) => {
            const hasChildren = Boolean(item.children?.length);
            const isOpen = expanded === item.label;
            if (!hasChildren) {
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="block rounded-2xl px-3 py-3.5 text-lg font-medium"
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
                  className="flex w-full items-center justify-between rounded-2xl px-3 py-3.5 text-left text-lg font-medium"
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
                  <ul className="mb-3 space-y-1 pb-3 pl-3">
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-xl px-3 py-2.5 text-base text-muted"
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
        <div className="mt-8 space-y-3 border-t border-line pt-6 text-sm text-muted">
          <a href="tel:18008890880" className="block">
            18008890880
          </a>
          <a href={`mailto:${site.email}`} className="block">
            {site.email}
          </a>
          <a
            href={site.links.feePayment}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-ink"
          >
            Online Fee Payment
          </a>
        </div>
        <a
          href={admissionWhatsAppHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-ink py-4 text-base font-medium text-cream"
          onClick={onClose}
        >
          Apply Now
        </a>
      </div>
    </div>
  );
}
