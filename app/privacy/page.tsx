import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Privacy Policy",
  "Privacy notes for the GD Goenka Public School Kupwara website redesign.",
  "/privacy",
);

export default function Page() {
  return <InnerPage content={pages.privacy} />;
}
