import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Study Tours",
  "Planned learning journeys beyond the classroom at GD Goenka Public School Kupwara.",
  "/study-tours",
);

export default function Page() {
  return <InnerPage content={pages.tours} />;
}
