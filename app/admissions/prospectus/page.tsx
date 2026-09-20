import { InnerPage } from "@/components/layout/InnerPage";
import { ComingSoonButton } from "@/components/ui/ComingSoonButton";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "E-Prospectus",
  "E-prospectus for GD Goenka Public School Kupwara.",
  "/admissions/prospectus",
);

export default function Page() {
  return (
    <InnerPage content={pages.prospectus}>
      <ComingSoonButton label="Open e-prospectus" className="mt-4" />
    </InnerPage>
  );
}
