import { ComingSoonCard } from "@/components/downloads/ComingSoonCard";
import { PdfDownloadCard } from "@/components/downloads/PdfDownloadCard";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { getHomeNewsletters } from "@/lib/circulars";
import {
  getDateSheets,
  getSummerAssignments,
  getWinterAssignments,
} from "@/lib/downloads";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Downloads",
  "Admit cards, assignments, date sheets and newsletters from GD Goenka Public School Kupwara.",
  "/downloads",
);

export default async function Page() {
  const [summer, winter, dateSheets, newsletters] = await Promise.all([
    getSummerAssignments(),
    getWinterAssignments(),
    getDateSheets(),
    getHomeNewsletters(),
  ]);

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Downloads"
        lead="Files and notices published by the school. Empty items will fill in from the studio as they are added."
      />
      <Container className="grid gap-4 py-14 md:grid-cols-2 md:py-20">
        <ComingSoonCard
          id="admit-card"
          title="Admit Card"
          text="Admit cards for this campus will be published here."
        />
        <PdfDownloadCard
          id="summer-assignment"
          title="Summer Assignment"
          text="Seasonal assignments as issued by the academic office."
          files={summer}
        />
        <PdfDownloadCard
          id="winter-assignment"
          title="Winter Assignment"
          text="Winter work published for the relevant classes."
          files={winter}
        />
        <PdfDownloadCard
          id="date-sheet"
          title="Date Sheet"
          text="Examination date sheets for the current term."
          files={dateSheets}
        />
        <article
          id="newsletter"
          className="scroll-mt-28 rounded-3xl border border-line bg-white p-6 md:col-span-2"
        >
          <h2 className="text-xl font-semibold tracking-tight">Newsletter</h2>
          {newsletters.length ? (
            <ul className="mt-4 space-y-5">
              {newsletters.map((item) => (
                <li key={item.id} className="border-t border-line pt-4 first:border-0 first:pt-0">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {item.heading}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p className="mt-2 text-sm text-muted">
                Heading and text are added in the studio under Newsletter.
              </p>
              <p className="mt-4 text-sm font-medium text-ink">Coming soon.</p>
            </>
          )}
        </article>
      </Container>
    </>
  );
}
