import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { faqs } from "@/lib/features";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Admission FAQs",
  "Timings, curriculum, safety, transport and parent role — frequently asked questions at GD Goenka Kupwara.",
  "/admissions/faq",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Admission"
        title="FAQs"
        lead="Clear answers for families considering GD Goenka Public School Kupwara."
      />
      <Container className="max-w-3xl py-14 md:py-20">
        <dl className="space-y-4">
          {faqs.map((item) => (
            <div
              key={item.q}
              className="rounded-3xl border border-line bg-white p-6"
            >
              <dt className="text-lg font-semibold tracking-tight">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                {item.a}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </>
  );
}
