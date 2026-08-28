import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Curriculum",
  "Integrated, thematic, activity-based CBSE curriculum at GD Goenka Public School Kupwara.",
  "/curriculum",
);

export default function Page() {
  return <InnerPage content={pages.curriculum} />;
}
