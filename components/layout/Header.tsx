"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-cream/90 pt-[env(safe-area-inset-top)] backdrop-blur-md">
      <TopBar />
      <div className="container-site flex h-14 items-center justify-between gap-3 sm:h-16 sm:gap-4 md:h-[4.5rem]">
        <Logo />
        <Navbar />
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line xl:hidden"
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
