import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Facilities",
  "State-of-the-art campus facilities at GD Goenka Public School Kupwara — pool, auditorium, labs and sports.",
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
        <ButtonLink href="/facilities/infrastructure" variant="secondary">
          Infrastructure
        </ButtonLink>
      </div>
    </InnerPage>
  );
}
