import { Mail, Phone } from "lucide-react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/ui/SocialIcons";
import { site } from "@/lib/site";

const social = [
  { href: site.social.facebook, label: "Facebook", Icon: FacebookIcon },
  { href: "#", label: "X (Twitter)", Icon: XIcon },
  { href: site.social.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: "#", label: "LinkedIn", Icon: LinkedInIcon },
  { href: site.social.youtube, label: "YouTube", Icon: YoutubeIcon },
];

const edgePad =
  "max(1.25rem, calc((100vw - min(100vw, 1320px)) / 2 + 20px))";

export function TopBar() {
  return (
    <div className="relative hidden h-11 overflow-hidden lg:block">
      {/* Gold — follow & social */}
      <div
        className="absolute inset-y-0 left-0 flex w-[58%] items-center gap-3 bg-gold text-cream"
        style={{ paddingLeft: edgePad }}
      >
        <span className="text-sm font-medium tracking-wide">Follow us :</span>
        <div className="flex items-center gap-2.5">
          {social.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="rounded-full p-0.5 text-cream/90 transition hover:text-cream"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      {/* Ink — contact */}
      <div
        className="absolute inset-y-0 right-0 flex w-[50%] items-center justify-end gap-5 bg-ink text-cream"
        style={{
          clipPath: "polygon(7% 0, 100% 0, 100% 100%, 0 100%)",
          paddingRight: edgePad,
        }}
      >
        <a
          href="tel:18008890880"
          className="flex items-center gap-2 text-sm transition hover:text-gold"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/25">
            <Phone size={13} strokeWidth={1.8} />
          </span>
          <span className="whitespace-nowrap">
            {site.phones.map((p) => p.value).join(" , ")}
          </span>
        </a>
        <a
          href={`mailto:${site.email}`}
          className="flex items-center gap-2 text-sm transition hover:text-gold"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-cream/25">
            <Mail size={13} strokeWidth={1.8} />
          </span>
          <span className="hidden whitespace-nowrap xl:inline">{site.email}</span>
        </a>
      </div>
    </div>
  );
}
