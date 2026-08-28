import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "School Song",
  "The GD Goenka school song — with knowledge, wisdom, skill and hard work, Goenkans will find their way.",
  "/school-song",
);

export default function Page() {
  return <InnerPage content={pages.song} />;
}
