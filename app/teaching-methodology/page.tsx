import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Teaching Methodology",
  "Faculty qualifications, classroom craft and continuous professional development at GD Goenka Kupwara.",
  "/teaching-methodology",
);

export default function Page() {
  return <InnerPage content={pages.teaching} />;
}
