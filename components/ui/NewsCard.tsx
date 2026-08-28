import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsArticle } from "@/lib/news";
import { SchoolImage } from "@/components/ui/SchoolImage";

export function NewsCard({ article }: { article: NewsArticle }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-line bg-white">
      <SchoolImage
        src={article.image}
        alt={article.title}
        className="aspect-[4/3]"
        sizes="(max-width: 768px) 80vw, 25vw"
      />
      <div className="flex flex-1 flex-col p-5">
        <p className="eyebrow">
          {article.category} · {article.date}
        </p>
        <h3 className="mt-3 text-lg font-semibold leading-snug tracking-tight">
          {article.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
          {article.excerpt}
        </p>
        <Link
          href={`/news/${article.slug}`}
          className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
        >
          Read article <ArrowRight size={14} />
        </Link>
      </div>
    </article>
  );
}
