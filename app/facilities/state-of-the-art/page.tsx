import { InnerPage } from "@/components/layout/InnerPage";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "State of the Art",
  "Wi-Fi campus, central AC, soundproof classrooms, swimming pool, auditorium and laboratories.",
  "/facilities/state-of-the-art",
);

export default function Page() {
  return <InnerPage content={pages.stateOfArt} />;
}
