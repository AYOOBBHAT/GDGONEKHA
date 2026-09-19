import { InnerPage } from "@/components/layout/InnerPage";
import { GulmargTour } from "@/components/tours/GulmargTour";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Study Tours",
  "Study tours at GD Goenka Public School Kupwara, including the July 2026 Gulmarg summer camp.",
  "/study-tours",
);

export default function Page() {
  return (
    <InnerPage content={pages.tours}>
      <GulmargTour />
    </InnerPage>
  );
}
