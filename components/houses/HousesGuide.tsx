import {
  bestHouseCriteria,
  houseRollHeaders,
  houseRollRows,
  houseRules,
  housesExecutive,
  houseTeacherHeaders,
  houseTeacherRows,
  softBoardPlan,
} from "@/lib/houses";

function Table({
  headers,
  rows,
  caption,
}: {
  headers: string[];
  rows: string[][];
  caption: string;
}) {
  return (
    <div className="my-8 -mx-1 overflow-x-auto rounded-2xl border border-line scroll-hint">
      <table className="w-full min-w-[480px] text-left text-sm sm:min-w-[520px]">
        <caption className="sr-only">{caption}</caption>
        <thead className="bg-cream-2 text-ink">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-medium">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-line">
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="px-4 py-3 text-muted">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function HousesGuide() {
  return (
    <div className="prose-school max-w-3xl">
      <h2>Teacher allocation</h2>
      <p>
        Each house has a captain and a team of teachers for session 2026–2027.
        Together they run assemblies, duties, competitions and the monthly soft
        board.
      </p>
      <Table
        headers={houseTeacherHeaders}
        rows={houseTeacherRows}
        caption="House teachers and captains, 2026–2027"
      />
      <p className="rounded-2xl border border-line bg-cream-2 px-4 py-3 text-sm">
        Executive body: {housesExecutive.join(" and ")} — they coordinate house
        events with the coordinators, keep records, and review each house’s
        work.
      </p>
      <h2>How students are placed</h2>
      <p>
        Students are allotted by class roll number, so the four houses stay
        mixed across the school:
      </p>
      <Table
        headers={houseRollHeaders}
        rows={houseRollRows}
        caption="Student house allocation by class roll number"
      />
      <h2>Reception soft board</h2>
      <p>
        Houses decorate the reception soft board by month. After June the same
        order repeats through the rest of the session.
      </p>
      <Table
        headers={["Month", "House"]}
        rows={softBoardPlan}
        caption="Monthly soft board decoration sequence"
      />
      <h2>Best House of the Month</h2>
      <p>
        At the end of each month the executive body and coordinators name the
        Best House of the Month, looking at:
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-muted">
        {bestHouseCriteria.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2>Rules and responsibilities</h2>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-muted">
        {houseRules.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
