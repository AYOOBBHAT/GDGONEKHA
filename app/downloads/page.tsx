import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

const items = [
  {
    id: "admit-card",
    title: "Admit Card",
    href: site.links.admitCard,
    text: "Download admit cards from the school portal.",
  },
  {
    id: "summer-assignment",
    title: "Summer Assignment",
    href: "https://www.gdgoenkabaramulla.com/downloads.php?main_heading=Summer%20Assignment",
    text: "Seasonal assignments as issued by the academic office.",
  },
  {
    id: "winter-assignment",
    title: "Winter Assignment",
    href: "https://www.gdgoenkabaramulla.com/downloads.php?main_heading=Winter%20Assignment",
    text: "Winter work published for the relevant classes.",
  },
  {
    id: "worksheets",
    title: "Worksheets",
    href: "https://www.gdgoenkabaramulla.com/downloads.php?main_heading=Worksheets",
    text: "Practice worksheets released through the downloads desk.",
  },
  {
    id: "web-lesson",
    title: "Web Lesson",
    href: "https://www.gdgoenkabaramulla.com/downloads.php?main_heading=Web%20Lesson",
    text: "Web lessons when published by faculty.",
  },
  {
    id: "date-sheet",
    title: "Date Sheet",
    href: "https://www.gdgoenkabaramulla.com/downloads.php?main_heading=Date%20Sheet",
    text: "Examination date sheets for the current term.",
  },
  {
    id: "newsletter",
    title: "Newsletter",
    href: "https://www.gdgoenkabaramulla.com/downloads.php?main_heading=Newsletter",
    text: "School newsletters and circular archives.",
  },
];

export const metadata = pageMeta(
  "Downloads",
  "Admit cards, assignments, worksheets, date sheets and newsletters from GD Goenka Public School Kupwara.",
  "/downloads",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Downloads"
        lead="Official files are hosted on the school’s document desk. Open the item you need."
      />
      <Container className="grid gap-4 py-14 md:grid-cols-2 md:py-20">
        {items.map((item) => (
          <article
            id={item.id}
            key={item.id}
            className="scroll-mt-28 rounded-3xl border border-line bg-white p-6"
          >
            <h2 className="text-xl font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-2 text-sm text-muted">{item.text}</p>
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-sm font-medium"
            >
              Open resource →
            </a>
          </article>
        ))}
      </Container>
    </>
  );
}
