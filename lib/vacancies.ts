import { sanityClient } from "@/sanity/client";
import { vacanciesQuery } from "@/sanity/queries";

export type Vacancy = {
  id: string;
  title: string;
  qualification: string;
  experience: string;
  compensation: string;
  deadline: string;
  summary: string;
};

type SanityVacancy = {
  _id: string;
  title: string;
  summary: string;
  qualification?: string | null;
  experience?: string | null;
  compensation?: string | null;
  deadline?: string | null;
};

export async function getVacancies(): Promise<Vacancy[]> {
  if (!sanityClient) return [];

  try {
    const rows = await sanityClient.fetch<SanityVacancy[]>(
      vacanciesQuery,
      {},
      { next: { revalidate: 60 } },
    );
    return (rows ?? []).map((row) => ({
      id: row._id,
      title: row.title,
      summary: row.summary,
      qualification: row.qualification || "—",
      experience: row.experience || "—",
      compensation: row.compensation || "—",
      deadline: row.deadline || "Open",
    }));
  } catch {
    return [];
  }
}
