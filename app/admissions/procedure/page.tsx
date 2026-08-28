import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Admission Procedure",
  "Registration, interaction, aptitude test and confirmation of admission at GD Goenka Public School Kupwara.",
  "/admissions/procedure",
);

export default function Page() {
  return (
    <InnerPage content={pages.procedure}>
      <ButtonLink href="/admissions/apply" className="mt-4">
        Apply Now
      </ButtonLink>
    </InnerPage>
  );
}
