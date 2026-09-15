import Link from "next/link";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { PhotoGrid } from "@/components/ui/PhotoGrid";
import { images } from "@/lib/images";
import { pageMeta } from "@/lib/seo";

const items = [
  { href: "/study-tours", title: "Study Tours", text: "Museums, industry, nature — curriculum made physical." },
  { href: "/celebrations", title: "Celebrations", text: "Festivals, national days and the joy of belonging." },
  { href: "/sports", title: "Sports", text: "Football, basketball, tennis, swimming and athletics." },
  { href: "/goenkan-pursuits", title: "Goenkan Pursuits", text: "Art, counselling, values and skill." },
  { href: "/school-houses", title: "School Houses", text: "Teresa, Radha Krishna, Tagore, Vivekananda." },
  { href: "/clubs", title: "Clubs", text: "Integrated activities across disciplines." },
];

export const metadata = pageMeta(
  "Beyond Academics",
  "Study tours, celebrations, sports, houses and clubs at GD Goenka Public School Kupwara.",
  "/activities",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Beyond academics"
        title="The rest of a life in school."
        lead="Sport, art, houses and journeys — because a child is more than a mark sheet."
      />
      <Container className="py-14 md:py-20">
        <PhotoGrid
          photos={images.activities}
          alt="Beyond academics at GD Goenka Public School Kupwara"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-3xl border border-line bg-white p-6 transition hover:-translate-y-0.5 hover:border-ink/20"
            >
              <h2 className="text-xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.text}</p>
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}
