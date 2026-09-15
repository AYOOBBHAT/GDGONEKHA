import Link from "next/link";
import {
  disclosureHref,
  type DisclosureRow,
} from "@/lib/mandatoryDisclosure";

function ViewLinks({
  files,
}: {
  files: DisclosureRow["files"];
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {files.map((file) => {
        const href = file.href ?? disclosureHref(file.filename ?? "");
        const label = file.label ?? file.filename ?? "View";
        const isDocument = href.startsWith("/documents/");
        const className =
          "inline-flex min-h-10 min-w-[5.5rem] items-center justify-center rounded-full border border-ink bg-ink px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cream transition hover:bg-ink-deep";

        if (isDocument) {
          return (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${label}`}
              className={className}
            >
              View
            </a>
          );
        }

        return (
          <Link
            key={href}
            href={href}
            aria-label={`View ${label}`}
            className={className}
          >
            View
          </Link>
        );
      })}
    </div>
  );
}

function DisclosureTable({
  title,
  rows,
}: {
  title: string;
  rows: DisclosureRow[];
}) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
        {title}
      </h2>

      {/* Desktop / tablet table */}
      <div className="mt-6 hidden overflow-x-auto rounded-2xl border border-line bg-white scroll-hint md:block">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="bg-cream-2">
            <tr>
              <th scope="col" className="w-16 px-5 py-4 font-semibold text-ink">
                No.
              </th>
              <th scope="col" className="px-5 py-4 font-semibold text-ink">
                Information
              </th>
              <th scope="col" className="w-[280px] px-5 py-4 font-semibold text-ink">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={row.information} className="border-t border-line align-top">
                <td className="px-5 py-4 font-medium text-ink">{index + 1}</td>
                <td className="px-5 py-4 text-muted">{row.information}</td>
                <td className="px-5 py-4">
                  <ViewLinks files={row.files} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards — avoids full-page horizontal scroll */}
      <ul className="mt-6 space-y-3 md:hidden">
        {rows.map((row, index) => (
          <li
            key={row.information}
            className="rounded-2xl border border-line bg-white p-4"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              No. {index + 1}
            </p>
            <p className="mt-2 text-sm font-medium leading-snug text-ink">
              {row.information}
            </p>
            <div className="mt-4">
              <ViewLinks files={row.files} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function MandatoryDisclosureTables({
  documents,
  academics,
}: {
  documents: DisclosureRow[];
  academics: DisclosureRow[];
}) {
  return (
    <div>
      <DisclosureTable
        title="Documents and Information"
        rows={documents}
      />
      <DisclosureTable
        title="Result and Academics"
        rows={academics}
      />
    </div>
  );
}
