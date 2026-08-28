import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Exam & Evaluation",
  "Term weightage, grading, attendance and promotion rules at GD Goenka Public School Kupwara.",
  "/exam-evaluation",
);

export default function Page() {
  return <InnerPage content={pages.exam} />;
}
