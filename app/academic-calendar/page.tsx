import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { disclosureHref } from "@/lib/mandatoryDisclosure";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Academic Calendar",
  "Yearly events 2026 at GD Goenka Public School Kupwara — examinations, celebrations and holidays.",
  "/academic-calendar",
);

export default function Page() {
  return (
    <InnerPage content={pages.calendar}>
      <ButtonLink
        href={disclosureHref("Yearly  Events 2026.pdf")}
        variant="secondary"
        className="mt-4"
        external
      >
        Download Yearly Events 2026 PDF
      </ButtonLink>
    </InnerPage>
  );
}
