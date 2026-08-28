import { PageHero } from "@/components/layout/PageHero";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";
import { vacancies } from "@/lib/vacancies";

export const metadata = pageMeta(
  "Careers",
  "Current vacancies at GD Goenka Public School Kupwara — mother teacher, PRT English, Hindi and Maths.",
  "/career",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Career"
        title="Vacancies"
        lead="Join a faculty that treats teaching as craft. Apply online or write to the school."
      />
      <Container className="grid gap-4 py-14 md:py-20">
        {vacancies.map((job) => (
          <article
            key={job.id}
            className="rounded-3xl border border-line bg-white p-6 md:p-8"
          >
            <p className="eyebrow">Open until {job.deadline}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">
              {job.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-muted md:text-base">
              {job.summary}
            </p>
            <p className="mt-4 text-sm text-muted">
              {job.qualification} · {job.experience} · {job.compensation}
            </p>
            <ButtonLink href="/career/apply" className="mt-6">
              Apply online
            </ButtonLink>
          </article>
        ))}
      </Container>
    </>
  );
}
