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

export function TopBar() {
  const primaryPhone = site.phones[0];

  return (
    <div className="hidden border-b border-brand-blue/20 bg-brand-blue text-cream lg:block">
      <div className="container-site flex h-10 items-center justify-between gap-4 text-sm">
        <div className="flex items-center gap-3">
          <span className="font-medium tracking-wide text-cream/85">
            Follow us
          </span>
          <div className="flex items-center gap-1.5">
            {social.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="inline-flex h-8 w-8 items-center justify-center rounded-full text-cream/85 transition hover:bg-white/10 hover:text-cream"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 items-center gap-4">
          <a
            href={primaryPhone.href}
            className="flex items-center gap-2 text-cream/90 transition hover:text-cream"
          >
            <Phone size={13} strokeWidth={2} />
            <span className="whitespace-nowrap">{primaryPhone.value}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hidden items-center gap-2 truncate text-cream/90 transition hover:text-cream xl:flex"
          >
            <Mail size={13} strokeWidth={2} />
            <span className="truncate">{site.email}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
