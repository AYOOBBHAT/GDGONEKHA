import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Vision & Mission",
  "Thrive. For life. The vision and mission of GD Goenka Public School Kupwara — Higher, Stronger, Brighter.",
  "/vision-mission",
);

export default function Page() {
  return <InnerPage content={pages.vision} />;
}
