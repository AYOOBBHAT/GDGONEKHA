import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Parent Teacher Body",
  "Parent–teacher partnership at GD Goenka Kupwara — monthly sessions, mothers’ training and committee membership.",
  "/parent-teacher-body",
);

export default function Page() {
  return <InnerPage content={pages.pta} />;
}
