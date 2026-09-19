import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Director's Message",
  "From the desk of Dr. Khalid Maqbool, Director of GD Goenka Public School Handwara.",
  "/director-message",
);

export default function Page() {
  return <InnerPage content={pages.director} />;
}
