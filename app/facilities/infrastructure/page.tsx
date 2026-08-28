import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Infrastructure",
  "Campus area, classrooms, labs, auditorium and play facilities — from mandatory public disclosure.",
  "/facilities/infrastructure",
);

export default function Page() {
  return <InnerPage content={pages.infrastructure} />;
}
