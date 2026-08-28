import { InnerPage } from "@/components/layout/InnerPage";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { images } from "@/lib/images";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "The Management",
  "School Management Committee of GD Goenka Public School Kupwara, an endeavour of Anwar Sultana Charitable Trust.",
  "/management",
);

export default function Page() {
  return (
    <InnerPage content={pages.management}>
      <SchoolImage
        src={images.management}
        alt="School Management Committee document, GD Goenka Public School Kupwara"
        className="mt-10 aspect-[3/4] max-w-3xl rounded-3xl border border-line bg-white md:aspect-[4/3]"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </InnerPage>
  );
}
