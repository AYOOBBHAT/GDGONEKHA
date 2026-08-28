import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "The School",
  "GD Goenka Public School Kupwara — a CBSE school in Kupwara with a 95-kanal campus and child-focused education.",
  "/about",
);

export default function Page() {
  return <InnerPage content={pages.about} />;
}
