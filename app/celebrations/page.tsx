import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Celebrations",
  "National days, cultural festivals and school gatherings at GD Goenka Public School Kupwara.",
  "/celebrations",
);

export default function Page() {
  return <InnerPage content={pages.celebrations} />;
}
