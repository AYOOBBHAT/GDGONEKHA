import { SchoolImage } from "@/components/ui/SchoolImage";
import { images } from "@/lib/images";

const captions = [
  "Students on a trek and outdoor learning at Gulmarg.",
  "Students and escort teachers during the summer camp.",
  "Group photograph in the forests around Gulmarg.",
];

export function GulmargTour() {
  return (
    <div className="prose-school mt-10 max-w-3xl">
      <h2>Gulmarg summer camp — 3–4 July 2026</h2>
      <p>
        A one-night, two-day educational trip to Gulmarg and Baba Reshi,
        organised by GD Goenka Public School Handwara. Fifty-nine students (35
        boys and 24 girls) travelled with 15 escort staff, four drivers and two
        helpers.
      </p>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-muted">
        <li>Dates: Friday 3 July 2026 – Saturday 4 July 2026</li>
        <li>Departure: 6:45 AM from GD Goenka Public School, Handwara</li>
        <li>Return: 10:00 PM to the school, with students handed to parents</li>
        <li>Stay: Hotel Star Inn, Tangmarg</li>
      </ul>
      <div className="not-prose my-8 grid gap-4 sm:grid-cols-2">
        {images.gulmarg.map((src, index) => (
          <figure
            key={src}
            className={index === 0 ? "sm:col-span-2" : undefined}
          >
            <SchoolImage
              src={src}
              alt={captions[index]}
              className={
                index === 0
                  ? "aspect-[16/10] rounded-[1.4rem]"
                  : "aspect-[4/3] rounded-[1.4rem]"
              }
              sizes={
                index === 0
                  ? "100vw"
                  : "(max-width: 640px) 100vw, 50vw"
              }
            />
            <figcaption className="mt-2 text-sm text-muted">
              {captions[index]}
            </figcaption>
          </figure>
        ))}
      </div>
      <p>
        The programme was for experiential learning, adventure, environmental
        awareness and a closer bond between students and teachers — in a
        supervised setting.
      </p>
      <h3>How the two days ran</h3>
      <p>
        The camp left school at 6:45 AM on Friday. Students travelled to
        Gulmarg, had refreshments, trekked, played outdoor games, used the
        water activities, and had lunch before checking into Hotel Star Inn,
        Tangmarg. The evening was for team-building games. On Saturday they
        rode horses, cycled, took balloon rides and other recreation, then
        visited Baba Reshi. After evening refreshments the group returned
        safely at 10:00 PM.
      </p>
      <h3>Escort staff</h3>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-muted">
        <li>Mr. Maqbool Bhat — Chairman</li>
        <li>Mr. Imtiyaz Dilawar Khan — Transport in-charge</li>
        <li>Ms. Jasmine — Principal</li>
        <li>Ms. Qurat-ul-Fayaz — Academic Coordinator</li>
        <li>Ms. Heena Firdous — Head Teacher</li>
        <li>Ms. Syed Shyesta — Teacher</li>
        <li>Mr. Mudasir — Teacher</li>
        <li>Mr. Aamir Hussain — Teacher</li>
        <li>Ms. Iram — Teacher</li>
        <li>Ms. Ruqsana Raziq — Teacher</li>
        <li>Ms. Bisma — Teacher</li>
        <li>Ms. Shariqa — Teacher</li>
        <li>Ms. Seema — Teacher</li>
        <li>Ms. Falaq — Teacher</li>
        <li>Mr. Ishfaq Hussain (Daim) — IT Head</li>
        <li>Supporting staff: four drivers and two helpers</li>
      </ul>
      <h3>Aims</h3>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-muted">
        <li>Learning beyond the classroom</li>
        <li>Confidence, leadership and teamwork</li>
        <li>Fitness through trekking and outdoor activity</li>
        <li>Care for nature</li>
        <li>Stronger student–teacher relationships</li>
      </ul>
      <h3>Safety</h3>
      <ul className="mb-6 list-disc space-y-2 pl-5 text-muted">
        <li>Continuous supervision by escort teachers</li>
        <li>Attendance at every halt and activity point</li>
        <li>Safety briefing before outdoor activities</li>
        <li>Supervised stay at the hotel</li>
        <li>First-aid support on the tour</li>
        <li>Students remaining in groups throughout</li>
      </ul>
      <p>
        Students came back with more confidence, discipline and a clearer
        feeling for the mountains they live beside — and with shared memories
        of a camp that was planned, escorted and handed back to families at
        the school gate.
      </p>
    </div>
  );
}
