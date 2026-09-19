export type DisclosureFile = {
  filename?: string;
  href?: string;
  label?: string;
};

export type DisclosureRow = {
  information: string;
  files: DisclosureFile[];
};

const BASE = "/documents/mandatory-disclosure";

/** Build a public URL that correctly encodes spaces and special characters. */
export function disclosureHref(filename: string) {
  return `${BASE}/${filename
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")}`;
}

/**
 * Mapped only from files present in public/documents/mandatory-disclosure/.
 * Do not invent documents that are not in the folder.
 */
export const documentsAndInformation: DisclosureRow[] = [
  {
    information:
      "Copies of Societies / Trust / Company Registration / Renewal Certificate, as applicable",
    files: [{ filename: "Registration .pdf", label: "Registration Certificate" }],
  },
  {
    information:
      "Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable",
    files: [],
  },
  {
    information:
      "Copy of valid Building Safety Certificate as per the National Building Code",
    files: [
      {
        filename: "building certificate.jpeg",
        label: "Building Safety Certificate",
      },
      {
        filename: "R&B..pdf",
        label: "R&B Building Safety Certificate",
      },
    ],
  },
  {
    information:
      "Copy of valid Fire Safety Certificate issued by the competent authority",
    files: [{ filename: "Fire emergency..pdf", label: "Fire and Emergency Certificate" }],
  },
  {
    information: "Copies of valid Water, Health and Sanitation Certificates",
    files: [{ filename: "Sanitary.pdf", label: "Sanitation Certificate" }],
  },
  {
    information: "Lease Certificate",
    files: [{ filename: "Lease..pdf", label: "Lease Certificate" }],
  },
  {
    information: "List of School Management Committee (SMC) / Managing Body",
    files: [{ filename: "SMC.pdf", label: "School Management Committee" }],
  },
];

export const resultAndAcademics: DisclosureRow[] = [
  {
    information: "Fee structure of the school",
    files: [{ filename: "Fee Structure.pdf", label: "Fee Structure" }],
  },
  {
    information: "Annual academic calendar / yearly events",
    files: [],
  },
  {
    information: "List of Parent Teacher Association (PTA)",
    files: [
      {
        filename: "parent-teacher-assosication.pdf",
        label: "Parent Teacher Association",
      },
    ],
  },
  {
    information: "POCSO Committee",
    files: [],
  },
  {
    information: "Staff details",
    files: [
      {
        href: "/know-us/mandatory-disclosure/staff",
        label: "Staff",
      },
    ],
  },
  {
    information: "House System Planner",
    files: [],
  },
];

/** Extracted from public/documents/mandatory-disclosure/Staff.pdf */
export const staffTeachingDetails: [string, string][] = [
  ["Principal", "01"],
  ["Total No. of Teachers", "29"],
  ["TGT", "08"],
  ["PRT", "08"],
  ["Nursery Teachers", "10"],
  ["Teacher : Section Ratio", "1.5:1"],
  ["Librarian", "Miss Tabassum, Graduate"],
  ["Details of Special Educator", "Miss Afshana Banday, M.A, B.Ed."],
  ["Details of Counsellor", "Miss Syed Shaista, Master's Degree, B.Ed."],
  ["Wellness Teacher", "Miss Syed Shaista, Master's Degree, B.Ed."],
];
