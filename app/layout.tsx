import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/seo/JsonLd";
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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full bg-cream font-sans text-ink">
        <JsonLd />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-cream"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
