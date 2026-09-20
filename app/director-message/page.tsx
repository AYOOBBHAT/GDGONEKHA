import { InnerPage } from "@/components/layout/InnerPage";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { images } from "@/lib/images";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Director's Message",
  "From the desk of Dr. Khalid Maqbool, Director of GD Goenka Public School Handwara.",
  "/director-message",
);

export default function Page() {
  return (
    <InnerPage
      content={pages.director}
      before={
        <SchoolImage
          src={images.director}
          alt={`${site.people.director}, ${site.people.directorTitle}`}
          className="mb-10 aspect-[4/5] max-w-md rounded-[1.6rem]"
          sizes="(max-width: 768px) 100vw, 28rem"
        />
      }
    />
  );
}
