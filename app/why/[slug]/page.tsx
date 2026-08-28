import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { whyFeatures } from "@/lib/features";
import { pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return whyFeatures.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = whyFeatures.find((item) => item.slug === slug);
  if (!feature) return {};
  return pageMeta(feature.title, feature.description, `/why/${feature.slug}`);
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = whyFeatures.find((item) => item.slug === slug);
  if (!feature) notFound();

  return (
    <>
      <PageHero
        eyebrow={`Why GD Goenka · ${feature.number}`}
        title={feature.title}
        lead={feature.description}
      />
      <Container className="max-w-3xl py-14 md:py-20">
        <div className="prose-school">
          {feature.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <Link href="/#why" className="mt-10 inline-block text-sm font-medium">
          ← All reasons
        </Link>
      </Container>
    </>
  );
}
