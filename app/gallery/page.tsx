import { GalleryBoard } from "@/components/gallery/GalleryBoard";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Gallery",
  "Sports, class activities, outdoor and house photographs from GD Goenka Public School Kupwara.",
  "/gallery",
);

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Life on campus"
        lead="Photographs from school events, sport and classroom work. Video lives on the official YouTube channel."
      />
      <Container className="py-12 md:py-16">
        <GalleryBoard initial={category} />
      </Container>
    </>
  );
}
