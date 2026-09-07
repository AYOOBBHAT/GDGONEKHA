import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { MandatoryDisclosureTables } from "@/components/disclosure/MandatoryDisclosureTables";
import { PageHero } from "@/components/layout/PageHero";
import { mpdGeneral } from "@/lib/content";
import {
  documentsAndInformation,
  resultAndAcademics,
} from "@/lib/mandatoryDisclosure";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Mandatory Public Disclosure",
  `Mandatory public disclosure documents and information of ${site.name}.`,
  "/know-us/mandatory-disclosure",
);

export default function MandatoryDisclosurePage() {
  return (
    <>
      <PageHero
        eyebrow="Know us"
        title="Mandatory Public Disclosure"
        lead="Official documents and information published for transparency, as maintained by the school."
      />
      <Container className="py-10 sm:py-14 md:py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Know Us", href: "/about" },
            { label: "Mandatory Public Disclosure" },
          ]}
        />

        <section>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            General Information
          </h2>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white scroll-hint">
            <table className="w-full min-w-[480px] text-left text-sm">
              <thead className="bg-cream-2">
                <tr>
                  <th scope="col" className="w-16 px-5 py-4 font-semibold text-ink">
                    No.
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold text-ink">
                    Information
                  </th>
                  <th scope="col" className="px-5 py-4 font-semibold text-ink">
                    Details
                  </th>
                </tr>
              </thead>
              <tbody>
                {mpdGeneral.map(([information, details], index) => (
                  <tr
                    key={information}
                    className="border-t border-line align-top"
                  >
                    <td className="px-5 py-4 font-medium text-ink">
                      {index + 1}
                    </td>
                    <td className="px-5 py-4 text-muted">{information}</td>
                    <td className="px-5 py-4 text-ink">{details}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="mt-14">
          <MandatoryDisclosureTables
            documents={documentsAndInformation}
            academics={resultAndAcademics}
          />
        </div>
      </Container>
    </>
  );
}
