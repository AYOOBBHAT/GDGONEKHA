import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Sports",
  "Football, basketball, cricket, athletics and swimming at GD Goenka Public School Kupwara.",
  "/sports",
);

export default function Page() {
  return <InnerPage content={pages.sports} />;
}
