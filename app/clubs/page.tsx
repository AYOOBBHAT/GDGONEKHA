import { ClubsGuide } from "@/components/clubs/ClubsGuide";
import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Clubs",
  "Nine school clubs at GD Goenka Public School Kupwara for 2026–27, with teacher in-charges and planned activities.",
  "/clubs",
);

export default function Page() {
  return (
    <InnerPage content={pages.clubs}>
      <ClubsGuide />
    </InnerPage>
  );
}
