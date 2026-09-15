import { InnerPage } from "@/components/layout/InnerPage";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { images } from "@/lib/images";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Sports",
  "Team sports, athletics and swimming at GD Goenka Public School Kupwara.",
  "/sports",
);

export default function Page() {
  return (
    <InnerPage content={pages.sports}>
      <PhotoGrid
        photos={images.sports}
        alt="Sports at GD Goenka Public School Kupwara"
        className="mt-10"
      />
    </InnerPage>
  );
}
