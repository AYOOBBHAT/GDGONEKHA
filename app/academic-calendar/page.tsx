import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Academic Calendar",
  "Yearly events 2026 at GD Goenka Public School Kupwara — examinations, celebrations and holidays.",
  "/academic-calendar",
);

export default function Page() {
  return <InnerPage content={pages.calendar} />;
}
