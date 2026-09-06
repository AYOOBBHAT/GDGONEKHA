import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Director's Message",
  "A message from the Director of GD Goenka Public School Kupwara — coming soon.",
  "/director-message",
);

export default function Page() {
  return <InnerPage content={pages.director} />;
}
