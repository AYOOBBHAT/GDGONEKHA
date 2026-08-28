import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Transport",
  "GPS and CCTV school buses with female attendants on major Kupwara routes.",
  "/facilities/transport",
);

export default function Page() {
  return <InnerPage content={pages.transport} />;
}
