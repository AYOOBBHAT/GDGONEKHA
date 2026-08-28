import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { NewsCard } from "@/components/ui/NewsCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { news } from "@/lib/news";

export function NewsSection() {
  const featured = news.slice(0, 4);

  return (
    <section className="py-20 md:py-28">
      <div className="container-site">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="News"
              title="What's happening at Goenka"
            />
          </Reveal>
          <Reveal>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-medium"
            >
              View All News <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 flex snap-x gap-4 overflow-x-auto pb-2 no-scrollbar md:grid md:grid-cols-2 md:overflow-visible xl:grid-cols-4">
          {featured.map((article, index) => (
            <Reveal
              key={article.slug}
              delay={index * 0.06}
              className="min-w-[78%] snap-start sm:min-w-[60%] md:min-w-0"
            >
              <NewsCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
