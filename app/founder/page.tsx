import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Our Founder",
  "Sh. Anjani Kumar Goenka, Chairman of the GD Goenka Group, on wellbeing, dignity and the best start in life.",
  "/founder",
);

export default function Page() {
  return <InnerPage content={pages.founder} />;
}
