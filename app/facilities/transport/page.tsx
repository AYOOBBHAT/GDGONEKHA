import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Transport",
  "Safe, attended school bus routes for GD Goenka Public School Kupwara families.",
  "/facilities/transport",
);

export default function Page() {
  return <InnerPage content={pages.transport} />;
}
