import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "School Houses",
  "Teresa, Radha Krishna, Tagore and Vivekananda houses at GD Goenka Public School Kupwara.",
  "/school-houses",
);

export default function Page() {
  return <InnerPage content={pages.houses} />;
}
