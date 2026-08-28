import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Study Tours",
  "Study tours at GD Goenka Kupwara — museums, historical sites, nature reserves and industry visits.",
  "/study-tours",
);

export default function Page() {
  return <InnerPage content={pages.tours} />;
}
