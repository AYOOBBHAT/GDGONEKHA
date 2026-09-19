import { circulars as staticCirculars } from "@/lib/bulletin";
import { sanityClient } from "@/sanity/client";
import { circularsQuery, newslettersQuery } from "@/sanity/queries";

export type HomeNotice = {
  id: string;
  heading: string;
  text: string;
  date: string;
  month: string;
  year: string;
};

/** @deprecated Use HomeNotice */
export type HomeCircular = HomeNotice;

type SanityNotice = {
  _id: string;
  heading: string;
  text: string;
  _createdAt: string;
};

function formatDateParts(iso: string): Pick<HomeNotice, "date" | "month" | "year"> {
  const parsed = new Date(iso);
  if (Number.isNaN(parsed.getTime())) {
    return { date: "--", month: "", year: "" };
  }
  return {
    date: String(parsed.getDate()).padStart(2, "0"),
    month: parsed.toLocaleString("en-IN", { month: "short" }),
    year: parsed.getFullYear().toString().slice(-2),
  };
}

function mapRows(rows: SanityNotice[] | null): HomeNotice[] {
  return (rows ?? []).map((row) => ({
    id: row._id,
    heading: row.heading,
    text: row.text,
    ...formatDateParts(row._createdAt),
  }));
}

function staticCircularNotices(): HomeNotice[] {
  return staticCirculars.map((item) => ({
    id: item.id,
    heading: item.title,
    text: item.body,
    date: item.date,
    month: item.month,
    year: item.year,
  }));
}

async function fetchNotices(
  query: string,
  fallback: HomeNotice[],
): Promise<HomeNotice[]> {
  if (!sanityClient) return fallback;

  try {
    const rows = await sanityClient.fetch<SanityNotice[]>(query, {}, {
      next: { revalidate: 60 },
    });
    return mapRows(rows);
  } catch {
    return fallback;
  }
}

export async function getHomeCirculars(): Promise<HomeNotice[]> {
  return fetchNotices(circularsQuery, staticCircularNotices());
}

export async function getHomeNewsletters(): Promise<HomeNotice[]> {
  return fetchNotices(newslettersQuery, []);
}
