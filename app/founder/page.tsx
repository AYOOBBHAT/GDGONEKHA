import { InnerPage } from "@/components/layout/InnerPage";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { images } from "@/lib/images";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Our Founder",
  "Sh. Anjani Kumar Goenka, Chairman of the GD Goenka Group, on wellbeing, dignity and the best start in life.",
  "/founder",
);

export default function Page() {
  return (
    <InnerPage
      content={pages.founder}
      before={
        <SchoolImage
          src={images.founder}
          alt={`${site.people.founder}, ${site.people.founderTitle}`}
          className="mb-10 aspect-[4/5] max-w-md rounded-[1.6rem]"
          sizes="(max-width: 768px) 100vw, 28rem"
        />
      }
    />
  );
}
