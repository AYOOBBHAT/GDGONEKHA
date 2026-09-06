import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Academic Calendar",
  "Academic calendar for GD Goenka Public School Kupwara — coming soon.",
  "/academic-calendar",
);

export default function Page() {
  return <InnerPage content={pages.calendar} />;
}
