import { PageHero } from "@/components/layout/PageHero";
import { NewsCard } from "@/components/ui/NewsCard";
import { Container } from "@/components/ui/Container";
import { news } from "@/lib/news";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "News",
  "News and information from GD Goenka Public School Kupwara — events, achievements and campus life.",
  "/news",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="News"
        title="What's happening at Goenka"
        lead="Capacity building, celebrations, skill training and student achievement."
      />
      <Container className="grid gap-4 py-14 sm:grid-cols-2 xl:grid-cols-3 md:py-20">
        {news.map((article) => (
          <NewsCard key={article.slug} article={article} />
        ))}
      </Container>
    </>
  );
}
