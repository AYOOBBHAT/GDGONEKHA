import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Withdrawal / TC Details",
  "Transfer Certificate information for GD Goenka Public School Kupwara.",
  "/admissions/withdrawal",
);

export default function Page() {
  return (
    <InnerPage content={pages.withdrawal}>
      <ButtonLink href={site.links.transferCertificate} external className="mt-4">
        Details of TCs issued
      </ButtonLink>
    </InnerPage>
  );
}
