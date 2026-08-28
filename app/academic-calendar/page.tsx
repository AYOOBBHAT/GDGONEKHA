import { InnerPage } from "@/components/layout/InnerPage";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { images } from "@/lib/images";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Academic Calendar",
  "Academic calendar and term structure for GD Goenka Public School Kupwara.",
  "/academic-calendar",
);

export default function Page() {
  return (
    <InnerPage content={pages.calendar}>
      <SchoolImage
        src={images.academicCalendar}
        alt="Academic calendar issued by GD Goenka Public School Kupwara"
        className="mt-10 aspect-[3/4] max-w-3xl rounded-3xl border border-line md:aspect-[4/3]"
        sizes="(max-width: 768px) 100vw, 768px"
      />
    </InnerPage>
  );
}
