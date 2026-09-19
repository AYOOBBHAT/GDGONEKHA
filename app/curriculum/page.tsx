import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Curriculum",
  "The CBSE curriculum at GD Goenka Public School Kupwara — Nursery to Class XII, English-medium, with sport, labs and character beside the syllabus.",
  "/curriculum",
);

export default function Page() {
  return <InnerPage content={pages.curriculum} />;
}
