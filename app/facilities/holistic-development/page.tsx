import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Holistic Development",
  "Co-scholastic activities, counselling, physical education and value-based learning at GD Goenka Kupwara.",
  "/facilities/holistic-development",
);

export default function Page() {
  return <InnerPage content={pages.holistic} />;
}
