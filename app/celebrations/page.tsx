import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Celebrations",
  "Cultural festivals, national days and school celebrations at GD Goenka Public School Kupwara.",
  "/celebrations",
);

export default function Page() {
  return <InnerPage content={pages.celebrations} />;
}
