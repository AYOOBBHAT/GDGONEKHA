"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  CalendarDays,
  CreditCard,
  Download,
  GraduationCap,
  LogIn,
  Phone,
} from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

const actions = [
  {
    title: "Admissions",
    href: "/admissions",
    icon: GraduationCap,
  },
  {
    title: "School Calendar",
    href: "/academic-calendar",
    icon: CalendarDays,
  },
  {
    title: "Fee Payment",
    href: site.links.feePayment,
    icon: CreditCard,
    external: true,
  },
  {
    title: "ERP / Parent Login",
    href: "/erp-login",
    icon: LogIn,
    comingSoon: true,
  },
  {
    title: "Downloads",
    href: "/downloads",
    icon: Download,
  },
  {
    title: "Contact Us",
    href: "/contact",
    icon: Phone,
  },
];

const cardClass =
  "group flex min-h-[3.5rem] items-center justify-between rounded-2xl border border-line bg-white px-4 py-3.5 transition duration-300 hover:-translate-y-1 hover:border-ink/30 hover:shadow-[0_12px_30px_rgba(17,17,17,0.05)]";

function ComingSoonAction({
  title,
  icon: Icon,
}: {
  title: string;
  icon: typeof LogIn;
}) {
  const [showNotice, setShowNotice] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setShowNotice(true)}
      className={`${cardClass} w-full text-left`}
    >
      <span className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-2 text-ink">
          <Icon size={16} strokeWidth={1.7} />
        </span>
        <span className="text-sm font-medium">
          {showNotice ? "Coming soon" : title}
        </span>
      </span>
      <ArrowUpRight
        size={16}
        className="text-muted transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
      />
    </button>
  );
}

export function QuickActions() {
  return (
    <section className="border-y border-line bg-cream-2/60">
      <div className="container-site grid gap-3 py-6 sm:grid-cols-2 sm:py-8 lg:grid-cols-3 xl:grid-cols-6">
        {actions.map((action, index) => {
          const Icon = action.icon;
          const inner = (
            <>
              <span className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-2 text-ink">
                  <Icon size={16} strokeWidth={1.7} />
                </span>
                <span className="text-sm font-medium">{action.title}</span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-muted transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-ink"
              />
            </>
          );
          return (
            <Reveal key={action.title} delay={index * 0.05}>
              {"comingSoon" in action && action.comingSoon ? (
                <ComingSoonAction title={action.title} icon={action.icon} />
              ) : "external" in action && action.external ? (
                <a
                  href={action.href}
                  className={cardClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {inner}
                </a>
              ) : (
                <Link href={action.href} className={cardClass}>
                  {inner}
                </Link>
              )}
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
