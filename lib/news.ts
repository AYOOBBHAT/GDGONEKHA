export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
  image: string;
  gallery?: string[];
};

const independence = [
  "/images/news/independence-day/independence-1.jpeg",
  "/images/news/independence-day/independence-2.jpeg",
  "/images/news/independence-day/independence-3.jpeg",
] as const;

const medical = [
  "/images/news/medical_checkup/medical-1.jpeg",
  "/images/news/medical_checkup/medical-2.jpeg",
  "/images/news/medical_checkup/medical-3.jpeg",
] as const;

const ptm = [
  "/images/news/parent_teacher/ptm-1.jpeg",
  "/images/news/parent_teacher/ptm-2.jpeg",
  "/images/news/parent_teacher/ptm-3.jpeg",
] as const;

export const news: NewsArticle[] = [
  {
    slug: "independence-day-2026",
    title: "Independence Day on campus",
    date: "August 2026",
    category: "Celebrations",
    excerpt:
      "Flag, song and a morning of belonging — Kupwara’s Goenkans mark 15 August together.",
    body: [
      "The school gathered on Independence Day with the tricolour at the centre of the morning. Students stood for the national anthem, then took their place in a short programme of song, speech and house pride.",
      "Younger classes learned the day as a story of country and courage. Older students led the assembly, held the flag with care, and helped the campus feel like one school for an hour that is not about marks.",
      "Photographs from the morning show the ground, the assembly, and children in uniform around the flag — ordinary school life, given to a national day.",
    ],
    image: independence[0],
    gallery: [...independence],
  },
  {
    slug: "medical-checkup-2026",
    title: "School medical checkup",
    date: "2026",
    category: "Health",
    excerpt:
      "A quiet, thorough health day — so every child is seen, not only when they feel unwell.",
    body: [
      "The infirmary opened for a planned medical checkup. Children came class by class. Height, vision, a calm conversation with the doctor: the point is to notice small things early, and to make the clinic a familiar room, not a place of fear.",
      "Parents were informed in advance. Staff stayed with each group. The school doctor works through the school day; this checkup sits beside that everyday care.",
      "The pictures record a working campus — waiting, examining, talking — the unglamorous work of keeping children well enough to learn.",
    ],
    image: medical[0],
    gallery: [...medical],
  },
  {
    slug: "parent-teacher-meeting-2026",
    title: "Parent–teacher meeting",
    date: "2026",
    category: "Community",
    excerpt:
      "Families and teachers sat together over books, habits and the next stretch of the term.",
    body: [
      "A parent–teacher meeting is not a performance. It is a table, a file, and an honest account of how a child is working — and where they need a steadier hand at home and in class.",
      "Teachers in Kupwara met families through the day. Conversations covered reading, attendance, behaviour and the small wins that do not always show on a report. Parents left with a clearer picture of the weeks ahead.",
      "The school asks families to be present in this way more than once a year. A child does better when the two rooms they live in — home and school — are speaking.",
    ],
    image: ptm[0],
    gallery: [...ptm],
  },
];

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}
