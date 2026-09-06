import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import type { ContentBlock, PageContent } from "@/lib/content";

function Blocks({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-school max-w-3xl">
      {blocks.map((block, index) => {
        if (block.type === "p") {
          return <p key={index}>{block.text}</p>;
        }
        if (block.type === "h2") {
          return <h2 key={index}>{block.text}</h2>;
        }
        if (block.type === "h3") {
          return <h3 key={index}>{block.text}</h3>;
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={index}
              className="my-8 border-l-2 border-gold pl-5"
            >
              <p className="text-xl font-medium leading-snug text-ink md:text-2xl">
                {block.text}
              </p>
              {block.cite ? (
                <footer className="mt-3 text-sm text-muted">
                  {block.cite}
                  {block.role ? ` · ${block.role}` : ""}
                </footer>
              ) : null}
            </blockquote>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={index} className="mb-6 list-disc space-y-2 pl-5 text-muted">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "table") {
          return (
            <div key={index} className="my-8 -mx-1 overflow-x-auto rounded-2xl border border-line scroll-hint">
              <table className="w-full min-w-[480px] text-left text-sm sm:min-w-[520px]">
                <thead className="bg-cream-2 text-ink">
                  <tr>
                    {block.headers.map((header) => (
                      <th key={header} className="px-4 py-3 font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t border-line">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 text-muted">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p
            key={index}
            className="rounded-2xl border border-line bg-cream-2 px-4 py-3 text-sm"
          >
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

export function InnerPage({
  content,
  children,
}: {
  content: PageContent;
  children?: React.ReactNode;
}) {
  return (
    <>
      <PageHero
        eyebrow={content.eyebrow}
        title={content.title}
        lead={content.lead}
      />
      <Container className="py-10 sm:py-14 md:py-20">
        <Blocks blocks={content.blocks} />
        {children}
      </Container>
    </>
  );
}
