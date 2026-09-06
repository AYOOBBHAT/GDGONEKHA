import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Admissions",
  "Admissions 2026–27 at GD Goenka Public School Kupwara — procedure, FAQs and apply now.",
  "/admissions",
);

export default function Page() {
  return (
    <InnerPage content={pages.admissions}>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/admissions/apply">Apply Now</ButtonLink>
        <ButtonLink href="/admissions/procedure" variant="secondary">
          Procedure
        </ButtonLink>
        <ButtonLink href="/admissions/faq" variant="secondary">
          FAQs
        </ButtonLink>
      </div>
    </InnerPage>
  );
}
