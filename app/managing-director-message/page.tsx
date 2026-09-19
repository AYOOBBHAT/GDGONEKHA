import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Managing Director's Message",
  "From the desk of Mr. Imtiyaz Maqbool Bhat, Managing Director of GD Goenka Public School Handwara.",
  "/managing-director-message",
);

export default function Page() {
  return <InnerPage content={pages.managingDirector} />;
}
