import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/lib/site";

export function ContactSection() {
  return (
    <section className="border-t border-line bg-cream-2 py-14 sm:py-20 md:py-28">
      <div className="container-site grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="eyebrow">Visit</p>
          <h2 className="mt-4 text-[1.85rem] font-semibold tracking-[-0.04em] sm:text-4xl">
            {site.name}
          </h2>
          <address className="mt-6 not-italic text-muted">
            {site.address.line1}
            <br />
            {site.address.line2}
          </address>
          <div className="mt-8 space-y-5 text-sm">
            <div>
              <span className="eyebrow mb-2 block">Phone</span>
              <div className="flex flex-col gap-1">
                {site.phones.map((phone) => (
                  <a
                    key={phone.value}
                    href={phone.href}
                    className="inline-flex min-h-11 items-center font-medium text-ink"
                  >
                    {phone.value}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <span className="eyebrow mb-2 block">Email</span>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex min-h-11 items-center break-all font-medium text-ink"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <ButtonLink
              href={site.phones[0].href}
              className="w-full justify-center sm:w-auto"
            >
              <Phone size={16} /> Call
            </ButtonLink>
            <ButtonLink
              href={`mailto:${site.email}`}
              variant="secondary"
              className="w-full justify-center sm:w-auto"
            >
              <Mail size={16} /> Email
            </ButtonLink>
            <ButtonLink
              href="/contact"
              variant="ghost"
              className="w-full justify-center sm:w-auto"
            >
              Contact page →
            </ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="overflow-hidden rounded-[1.4rem] border border-line bg-white sm:rounded-[1.8rem]">
            <iframe
              title="Map of GD Goenka Public School Kupwara"
              src={site.address.mapsEmbed}
              className="h-[260px] w-full sm:h-[320px] md:h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
