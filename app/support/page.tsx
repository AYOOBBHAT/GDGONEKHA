import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Support",
  "ERP login, online fee payment, school app and helpdesk for GD Goenka Public School Kupwara.",
  "/support",
);

export default function Page() {
  return (
    <InnerPage content={pages.support}>
      <div id="app" className="mt-8 flex flex-wrap gap-3 scroll-mt-28">
        <ButtonLink href={site.links.feePayment} external>
          Pay fees
        </ButtonLink>
        <ButtonLink href={site.links.erp} external variant="secondary">
          ERP login
        </ButtonLink>
        <ButtonLink href={site.links.app} external variant="secondary">
          App link
        </ButtonLink>
        <ButtonLink href={site.links.support} external variant="secondary">
          Official support desk
        </ButtonLink>
      </div>
    </InnerPage>
  );
}
