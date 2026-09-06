import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Mandatory Public Disclosure",
  "Mandatory public disclosure for GD Goenka Public School Kupwara — coming soon.",
  "/mandatory-public-disclosure",
);

export default function Page() {
  return <InnerPage content={pages.mpd} />;
}
