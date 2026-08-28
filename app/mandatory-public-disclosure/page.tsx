import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Mandatory Public Disclosure",
  "CBSE affiliation 730129, school code 23786, infrastructure and staff details for GD Goenka Public School Kupwara.",
  "/mandatory-public-disclosure",
);

export default function Page() {
  return <InnerPage content={pages.mpd} />;
}
