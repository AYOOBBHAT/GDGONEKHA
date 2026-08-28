import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Principal's Message",
  "A message from Principal Sartaj Mir on true knowledge, character and education beyond achievement.",
  "/principal-message",
);

export default function Page() {
  return <InnerPage content={pages.principal} />;
}
