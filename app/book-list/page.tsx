import { InnerPage } from "@/components/layout/InnerPage";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { pages } from "@/lib/pages";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Book List",
  "Book list for Nursery to Class 8 at GD Goenka Public School Kupwara.",
  "/book-list",
);

export default function Page() {
  return (
    <InnerPage content={pages.bookList}>
      <ButtonLink href={site.links.bookList} external className="mt-6">
        Download book list PDF
      </ButtonLink>
    </InnerPage>
  );
}
