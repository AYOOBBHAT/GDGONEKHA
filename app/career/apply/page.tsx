import { ApplyForm } from "@/components/forms/ApplyForm";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Apply Online",
  "Apply for a teaching or staff vacancy at GD Goenka Public School Kupwara.",
  "/career/apply",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Apply online"
        lead="Share your details and the role you want — WhatsApp will open with your application ready to send to the school."
      />
      <Container className="py-10 md:py-16">
        <ApplyForm variant="career" />
      </Container>
    </>
  );
}
