import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "E-Prospectus",
  "Request or open the e-prospectus for GD Goenka Public School Kupwara.",
  "/admissions/prospectus",
);

export default function Page() {
  return (
    <InnerPage content={pages.prospectus}>
      <ButtonLink href={site.links.prospectus} external className="mt-4">
        Open e-prospectus
      </ButtonLink>
    </InnerPage>
  );
}
