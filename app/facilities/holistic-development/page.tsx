import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Holistic Development",
  "Arts, sport, guidance and values — whole-child growth at GD Goenka Public School Kupwara.",
  "/facilities/holistic-development",
);

export default function Page() {
  return <InnerPage content={pages.holistic} />;
}
