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
        lead="Tell us the role. Email your CV to info@gdgoenkabaramulla.com as well — this form is an enquiry."
      />
      <Container className="py-10 md:py-16">
        <ApplyForm variant="career" />
      </Container>
    </>
  );
}
