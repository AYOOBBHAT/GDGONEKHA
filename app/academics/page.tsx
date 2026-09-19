import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Academics",
  "Teaching methodology, academic calendar and curriculum at GD Goenka Public School Kupwara.",
  "/academics",
);

export default function Page() {
  return (
    <InnerPage content={pages.academics}>
      <div className="mt-10 flex flex-wrap gap-3">
        <ButtonLink href="/teaching-methodology">Teaching methodology</ButtonLink>
        <ButtonLink href="/academic-calendar" variant="secondary">
          Academic calendar
        </ButtonLink>
        <ButtonLink href="/curriculum" variant="secondary">
          Curriculum
        </ButtonLink>
      </div>
    </InnerPage>
  );
}
