import { clubAssignmentHeaders, clubsCoordinator, schoolClubs } from "@/lib/clubs";

export function ClubsGuide() {
  return (
    <div className="prose-school max-w-3xl">
      <div className="my-8 -mx-1 overflow-x-auto rounded-2xl border border-line scroll-hint">
        <table className="w-full min-w-[480px] text-left text-sm sm:min-w-[520px]">
          <caption className="sr-only">
            Club-wise teacher assignment, session 2026–27
          </caption>
          <thead className="bg-cream-2 text-ink">
            <tr>
              {clubAssignmentHeaders.map((header) => (
                <th key={header} className="px-4 py-3 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {schoolClubs.map((club) => (
              <tr key={club.name} className="border-t border-line">
                <td className="px-4 py-3 font-medium text-ink">{club.name}</td>
                <td className="px-4 py-3 text-muted">{club.teachers}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="rounded-2xl border border-line bg-cream-2 px-4 py-3 text-sm">
        Overall in-charge of all activities: {clubsCoordinator}.
      </p>
      {schoolClubs.map((club) => (
        <section key={club.name}>
          <h2>{club.name}</h2>
          <p>
            <span className="text-ink">In-charge: </span>
            {club.teachers}
          </p>
          <p>{club.aim}</p>
          <ul className="mb-6 list-disc space-y-2 pl-5 text-muted">
            {club.activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
