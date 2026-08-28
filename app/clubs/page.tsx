import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Clubs",
  "Integrated activities and club life at GD Goenka Public School Kupwara.",
  "/clubs",
);

export default function Page() {
  return <InnerPage content={pages.clubs} />;
}
