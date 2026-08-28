import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Director's Message",
  "Director Raja Zubair Ahmed on opportunity, innovation and the learning environment at GD Goenka Kupwara.",
  "/director-message",
);

export default function Page() {
  return <InnerPage content={pages.director} />;
}
