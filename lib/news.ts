import { images } from "./images";

export type NewsArticle = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  body: string[];
  image: string;
};

export const news: NewsArticle[] = [
  {
    slug: "capacity-building-program",
    title: "Capacity Building Program",
    date: "April 2026",
    category: "Faculty",
    excerpt:
      "GD Goenka organised a one-day capacity building program for teachers to impart 21st-century skills.",
    body: [
      "GD Goenka Public School Kupwara organised a one-day capacity building program for teachers, focused on 21st-century skills.",
      "The session was designed to strengthen classroom practice, collaboration and the evolving role of the educator — so that every Goenkan classroom remains thoughtful, current and child-centred.",
    ],
    image: images.news.capacity,
  },
  {
    slug: "baisakhi-vibes",
    title: "Baisakhi Vibes at GD Goenka Kupwara",
    date: "April 2026",
    category: "Celebrations",
    excerpt:
      "Joy on every face. Culture in every step. Students celebrate Baisakhi with energy, colour and pride.",
    body: [
      "Students at GD Goenka Kupwara celebrated Baisakhi with performances, colour and tradition — a day of music, movement and shared pride.",
      "School celebrations are an essential part of campus life, helping children learn about culture while building community across classes and houses.",
    ],
    image: images.news.baisakhi,
  },
  {
    slug: "sdrf-disaster-response-training",
    title: "Goenkans train to save lives with SDRF",
    date: "April 2026",
    category: "Skill Building",
    excerpt:
      "Students step into real disaster-response training with J&K SDRF — learning to act fast, stay calm and protect lives.",
    body: [
      "Students at GD Goenka Kupwara trained with the J&K State Disaster Response Force, practising how to act quickly, stay calm and protect lives.",
      "The experience is part of the school’s wider commitment to skill-based learning — real preparation for real situations, beyond the textbook.",
    ],
    image: images.news.sdrf,
  },
  {
    slug: "international-childrens-book-day-2026",
    title: "International Children's Book Day — 2026",
    date: "April 2026",
    category: "Literacy",
    excerpt:
      "From stories that spark imagination to laughter-filled moments, Grade 2 bookworms shone bright.",
    body: [
      "Grade 2 students marked International Children's Book Day 2026 with stories, conversation and the simple joy of reading together.",
      "The school’s philosophy is to encourage not just reading, but a lasting love for learning — and days like these make that visible.",
    ],
    image: images.news.bookDay,
  },
  {
    slug: "sof-olympiad-2024",
    title: "SOF Olympiad 2024",
    date: "2024",
    category: "Achievement",
    excerpt:
      "Abu Hammad Ilahi of Grade 1 made the school immensely proud by securing International Rank 1 in IEO 2024.",
    body: [
      "Abu Hammad Ilahi of Grade 1 secured International Rank 1 in the SOF International English Olympiad (IEO) 2024.",
      "The school community celebrates this achievement as a reflection of curiosity, consistency and the joy of language.",
    ],
    image: images.news.olympiad,
  },
  {
    slug: "north-india-karate-championship-2024",
    title: "North India Karate Championship 2024",
    date: "2024",
    category: "Sports",
    excerpt:
      "Sahil Javid of Grade 4 and Numaan Malik of Grade 2 won gold medals, securing 1st positions.",
    body: [
      "Sahil Javid of Grade 4 and Numaan Malik of Grade 2 won gold medals at the North India Karate Championship 2024, securing first positions.",
      "Sport at GD Goenka is treated as essential formation — discipline, courage and composure, practised every day.",
    ],
    image: images.news.karate,
  },
];

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug);
}
