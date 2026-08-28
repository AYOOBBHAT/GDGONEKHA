import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Fee Structure",
  "How to pay school fees and confirm admission at GD Goenka Public School Kupwara.",
  "/admissions/fee-structure",
);

export default function Page() {
  return (
    <InnerPage content={pages.fees}>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={site.links.feePayment} external>
          Online Fee Payment
        </ButtonLink>
        <ButtonLink href="/contact" variant="secondary">
          Ask the office
        </ButtonLink>
      </div>
    </InnerPage>
  );
}
