import { sanityClient } from "@/sanity/client";
import {
  dateSheetsQuery,
  summerAssignmentsQuery,
  winterAssignmentsQuery,
} from "@/sanity/queries";

export type DownloadPdf = {
  id: string;
  url: string;
  filename: string;
};

type SanityPdf = {
  _id: string;
  url: string | null;
  filename: string | null;
};

async function fetchPdfs(query: string): Promise<DownloadPdf[]> {
  if (!sanityClient) return [];

  try {
    const rows = await sanityClient.fetch<SanityPdf[]>(query, {}, {
      next: { revalidate: 60 },
    });
    return (rows ?? [])
      .filter((row) => Boolean(row.url))
      .map((row) => ({
        id: row._id,
        url: row.url as string,
        filename: row.filename || "Download PDF",
      }));
  } catch {
    return [];
  }
}

export async function getSummerAssignments() {
  return fetchPdfs(summerAssignmentsQuery);
}

export async function getWinterAssignments() {
  return fetchPdfs(winterAssignmentsQuery);
}

export async function getDateSheets() {
  return fetchPdfs(dateSheetsQuery);
}
