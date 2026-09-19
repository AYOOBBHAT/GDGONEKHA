import { HousesGuide } from "@/components/houses/HousesGuide";
import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "School Houses",
  "Compassion, Courage, Wisdom and Hope houses at GD Goenka Public School Kupwara — teachers, roll numbers and duties for 2026–2027.",
  "/school-houses",
);

export default function Page() {
  return (
    <InnerPage content={pages.houses}>
      <HousesGuide />
    </InnerPage>
  );
}
