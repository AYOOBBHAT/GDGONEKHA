import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Academics",
  "CBSE curriculum, teaching methodology, calendar, evaluation and book list at GD Goenka Public School Kupwara.",
  "/academics",
);

export default function Page() {
  return (
    <InnerPage content={pages.academics}>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/curriculum">Curriculum</ButtonLink>
        <ButtonLink href="/teaching-methodology" variant="secondary">
          Teaching methodology
        </ButtonLink>
        <ButtonLink href="/exam-evaluation" variant="secondary">
          Exam & evaluation
        </ButtonLink>
      </div>
    </InnerPage>
  );
}
