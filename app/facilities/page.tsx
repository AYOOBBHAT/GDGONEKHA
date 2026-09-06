import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Facilities",
  "Campus facilities at GD Goenka Public School Kupwara — state of the art spaces, holistic programmes and transport.",
  "/facilities",
);

export default function Page() {
  return (
    <InnerPage content={pages.facilities}>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/facilities/state-of-the-art">State of the art</ButtonLink>
        <ButtonLink href="/facilities/holistic-development" variant="secondary">
          Holistic development
        </ButtonLink>
        <ButtonLink href="/facilities/transport" variant="secondary">
          Transport
        </ButtonLink>
      </div>
    </InnerPage>
  );
}
