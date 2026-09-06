import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Principal's Message",
  "A message from the Principal of GD Goenka Public School Kupwara — coming soon.",
  "/principal-message",
);

export default function Page() {
  return <InnerPage content={pages.principal} />;
}
