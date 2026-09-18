import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "School",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phones.map((p) => p.value),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bypass Road, Near Fruit Mandy, Iqbal Abad Handwara",
      addressLocality: "Kupwara",
      postalCode: "193221",
      addressRegion: "Jammu and Kashmir",
      addressCountry: "IN",
    },
    sameAs: [site.social.facebook, site.social.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
