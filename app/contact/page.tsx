import { ContactSection } from "@/components/home/ContactSection";
import { PageHero } from "@/components/layout/PageHero";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Contact",
  "Contact GD Goenka Public School Kupwara in Jammu & Kashmir. Phone 18008890880.",
  "/contact",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come and see the school."
        lead="Kupwara, Jammu & Kashmir. The helpdesk answers admissions, transport and general queries."
      />
      <ContactSection />
    </>
  );
}
