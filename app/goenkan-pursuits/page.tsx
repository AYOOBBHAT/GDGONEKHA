import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Goenkan Pursuits",
  "Co-scholastic pursuits — arts, counselling, physical education and values — at GD Goenka Kupwara.",
  "/goenkan-pursuits",
);

export default function Page() {
  return <InnerPage content={pages.pursuits} />;
}
