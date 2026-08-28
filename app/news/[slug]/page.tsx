import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SchoolImage } from "@/components/ui/SchoolImage";
import { getNews, news } from "@/lib/news";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return news.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) return {};
  return pageMeta(article.title, article.excerpt, `/news/${article.slug}`);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getNews(slug);
  if (!article) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${article.category} · ${article.date}`}
        title={article.title}
        lead={article.excerpt}
      />
      <Container className="max-w-3xl py-12 md:py-16">
        <SchoolImage
          src={article.image}
          alt={article.title}
          className="aspect-[16/10] rounded-[1.8rem]"
          sizes="768px"
        />
        <div className="prose-school mt-10">
          {article.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link href="/news" className="mt-10 inline-block text-sm font-medium">
          ← All news
        </Link>
      </Container>
    </>
  );
}
