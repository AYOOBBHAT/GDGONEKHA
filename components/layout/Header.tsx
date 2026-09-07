"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";
import { admissionWhatsAppHref } from "@/lib/whatsapp";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white pt-[env(safe-area-inset-top)]">
      <TopBar />
      <div className="container-site flex h-[3.75rem] items-center justify-between gap-6 sm:h-16 md:h-[4.5rem]">
        <Logo />
        <div className="flex min-w-0 items-center justify-end gap-2 lg:gap-3">
          <Navbar />
          <a
            href={admissionWhatsAppHref}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden h-9 shrink-0 items-center rounded-full bg-brand-blue px-4 text-[13px] font-medium text-cream transition hover:bg-[#0e2f6e] md:inline-flex"
          >
            Apply
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-ink xl:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  );
}
