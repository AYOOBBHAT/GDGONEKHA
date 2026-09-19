import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Teaching Methodology",
  "How GD Goenka Public School Kupwara teaches: questioning, practice, labs, sport, and a partnership with parents.",
  "/teaching-methodology",
);

export default function Page() {
  return <InnerPage content={pages.teaching} />;
}
