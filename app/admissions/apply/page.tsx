import { ApplyForm } from "@/components/forms/ApplyForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Apply Now",
  "Apply for admission to GD Goenka Public School Kupwara for session 2026–27.",
  "/admissions/apply",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Admission"
        title="Apply now"
        lead="Fill in the details below and submit — WhatsApp will open with your enquiry ready to send to the school."
      />
      <Container className="py-10 md:py-16">
        <ApplyForm />
      </Container>
    </>
  );
}
