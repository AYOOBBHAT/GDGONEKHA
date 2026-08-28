import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="border-t border-line bg-cream-2 py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Visit</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em]">
            {site.name}
          </h2>
          <address className="mt-6 not-italic text-muted">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <div className="mt-8 space-y-3 text-sm">
            <p>
              <span className="eyebrow block mb-1">Phone</span>
              <a href="tel:18008890880">18008890880</a>
              <span className="text-muted"> · </span>
              <a href="tel:9103854896">9103854896</a>
              <span className="text-muted"> · </span>
              <a href="tel:9103854897">9103854897</a>
            </p>
            <p>
              <span className="eyebrow block mb-1">Email</span>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="tel:18008890880">
              <Phone size={16} /> Call
            </ButtonLink>
            <ButtonLink href={`mailto:${site.email}`} variant="secondary">
              <Mail size={16} /> Email
            </ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact page →
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[1.8rem] border border-line bg-white">
            <iframe
              title="Map of GD Goenka Public School Kupwara"
              src={site.address.mapsEmbed}
              className="h-[320px] w-full md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
