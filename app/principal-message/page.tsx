import { InnerPage } from "@/components/layout/InnerPage";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { images } from "@/lib/images";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Principal's Message",
  "A message from the Principal of GD Goenka Public School Kupwara — coming soon.",
  "/principal-message",
);

export default function Page() {
  return (
    <InnerPage content={pages.principal}>
      <SchoolImage
        src={images.principal}
        alt={`${site.people.principal}, Principal of GD Goenka Public School Kupwara`}
        className="mt-8 aspect-[4/5] max-w-md rounded-[1.6rem]"
        sizes="(max-width: 768px) 100vw, 28rem"
      />
    </InnerPage>
  );
}
