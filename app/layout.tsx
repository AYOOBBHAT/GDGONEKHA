import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { JsonLd } from "@/components/seo/JsonLd";
import { SiteChrome } from "@/components/layout/SiteChrome";
import { images } from "@/lib/images";
import { site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | CBSE School in Kupwara`,
    template: `%s | ${site.shortName}`,
  },
  description: site.description,
  keywords: [
    "GD Goenka Public School Kupwara",
    "School in Kupwara",
    "Best School in Kupwara",
    "CBSE School Kupwara",
    "GD Goenka Kupwara",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | CBSE School in Kupwara`,
    description: site.description,
    images: [
      {
        url: images.hero,
        alt: "GD Goenka Public School Kupwara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | CBSE School in Kupwara`,
    description: site.description,
  },
  robots: { index: true, follow: true },
  verification: {
    google: "5qxRx7SIoamNHAumh-c4K1Z1f__3mmXwHlcVwlQIlGU",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink">
        <JsonLd />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
