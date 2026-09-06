import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "gold" | "light";
  className?: string;
  external?: boolean;
};

function isHttp(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function isInternal(href: string, external?: boolean) {
  return !external && href.startsWith("/");
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  external,
}: ButtonProps) {
  const styles = {
    primary:
      "min-h-11 bg-ink text-cream hover:bg-ink-deep hover:-translate-y-0.5",
    secondary:
      "min-h-11 bg-transparent text-ink border border-line hover:border-ink hover:-translate-y-0.5",
    ghost: "min-h-11 bg-transparent text-ink px-3 hover:text-gold-dark",
    gold: "min-h-11 bg-gold text-ink hover:bg-gold-dark hover:text-cream hover:-translate-y-0.5",
    light:
      "min-h-11 bg-cream text-ink hover:bg-white hover:-translate-y-0.5",
  }[variant];

  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-[0.95rem] font-medium transition duration-300",
    styles,
    className,
  );

  if (isInternal(href, external)) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      className={classes}
      {...(isHttp(href) || external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
