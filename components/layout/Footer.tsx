import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { Logo } from "@/components/layout/Logo";
import { footerNav } from "@/lib/navigation";
import { site } from "@/lib/site";

function Column({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) {
  return (
    <div>
      <p className="eyebrow mb-4 text-gold-dark">{title}</p>
      <ul className="space-y-1">
        {links.map((link) => (
          <li key={link.href + link.label}>
            {link.external ? (
              <a
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm text-muted transition hover:text-ink"
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link
                href={link.href}
                className="inline-flex min-h-11 items-center text-sm text-muted transition hover:text-ink"
              >
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream-2 text-ink">
      <div className="container-site grid gap-10 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 lg:grid-cols-6 lg:py-20">
        <div className="lg:col-span-2">
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            An endeavour of Symphony Educational Trust. A CBSE school in
            Kupwara — educating children to thrive, for life.
          </p>
          <div className="mt-6 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink transition hover:border-gold hover:text-gold-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon size={16} />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink transition hover:border-gold hover:text-gold-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon size={16} />
            </a>
            <a
              href={site.social.youtube}
              aria-label="YouTube"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-cream text-ink transition hover:border-gold hover:text-gold-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon size={16} />
            </a>
          </div>
        </div>
        <Column title="School" links={footerNav.school} />
        <Column title="Academics" links={footerNav.academics} />
        <Column title="Admissions" links={footerNav.admissions} />
        <div>
          <Column title="Resources" links={footerNav.resources} />
          <p className="eyebrow mt-8 mb-4 text-gold-dark">Contact</p>
          <address className="text-sm not-italic leading-relaxed text-muted">
            Kupwara
            <br />
            Jammu & Kashmir
            <br />
            <a
              href="tel:18008890880"
              className="mt-2 inline-flex min-h-11 items-center transition hover:text-ink"
            >
              18008890880
            </a>
            <br />
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-11 items-center break-all transition hover:text-ink"
            >
              {site.email}
            </a>
          </address>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-3 py-5 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            <Link
              href="/privacy"
              className="inline-flex min-h-10 items-center transition hover:text-ink"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-10 items-center transition hover:text-ink"
            >
              Contact
            </Link>
            <a
              href={site.links.erp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-1 transition hover:text-ink"
            >
              ERP Login <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
