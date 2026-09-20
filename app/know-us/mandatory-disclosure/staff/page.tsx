import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/layout/PageHero";
import { staffTeachingDetails } from "@/lib/mandatoryDisclosure";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Staff Details",
  `Teaching staff details of ${site.name}, published for mandatory public disclosure.`,
  "/know-us/mandatory-disclosure/staff",
);

export default function StaffDetailsPage() {
  return (
    <>
      <PageHero
        eyebrow="Mandatory Public Disclosure"
        title="Staff details"
        lead="Teaching staff information as published by the school."
      />
      <Container className="py-10 sm:py-14 md:py-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Know Us", href: "/about" },
            {
              label: "Mandatory Public Disclosure",
              href: "/know-us/mandatory-disclosure",
            },
            { label: "Staff details" },
          ]}
        />

        <div className="overflow-x-auto rounded-2xl border border-line bg-white scroll-hint">
          <table className="w-full min-w-[480px] text-left text-sm">
            <caption className="sr-only">
              D: Staff details (teaching) — {site.name}
            </caption>
            <thead className="bg-cream-2">
              <tr>
                <th scope="col" className="w-16 px-5 py-4 font-semibold text-ink">
                  Sr. no.
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
              {staffTeachingDetails.map(([information, details], index) => (
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
      </Container>
    </>
  );
}
