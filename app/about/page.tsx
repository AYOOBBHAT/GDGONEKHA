import { InnerPage } from "@/components/layout/InnerPage";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { images } from "@/lib/images";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "The School",
  "GD Goenka Public School Kupwara — a CBSE school in Kupwara with a 5-kanal campus and child-focused education.",
  "/about",
);

export default function Page() {
  return (
    <InnerPage content={pages.about}>
      <PhotoGrid
        photos={images.activities}
        alt="Campus life at GD Goenka Public School Kupwara"
        className="mt-10"
      />
    </InnerPage>
  );
}
