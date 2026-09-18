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
    files: [{ filename: "Trust.pdf", label: "Trust Certificate" }],
  },
  {
    information:
      "Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable",
    files: [
      {
        filename: "RecognitionCertificate_12434011020122025.pdf",
        label: "Recognition Certificate",
      },
    ],
  },
  {
    information:
      "Copy of valid Building Safety Certificate as per the National Building Code",
    files: [
      {
        filename: "building certificate.jpeg",
        label: "Building Safety Certificate",
      },
    ],
  },
  {
    information:
      "Copy of valid Fire Safety Certificate issued by the competent authority",
    files: [
      {
        filename: "Fire and emergency 2025.pdf",
        label: "Fire and Emergency Certificate",
      },
    ],
  },
  {
    information: "Copies of valid Water, Health and Sanitation Certificates",
    files: [
      {
        filename: "sanitation certificate.jpeg",
        label: "Sanitation Certificate",
      },
    ],
  },
  {
    information: "Lease Certificate",
    files: [{ filename: "lease.pdf", label: "Lease Certificate" }],
  },
  {
    information: "List of School Management Committee (SMC) / Managing Body",
    files: [{ filename: "managing-body", label: "Managing Body" }],
  },
];

export const resultAndAcademics: DisclosureRow[] = [
  {
    information: "Fee structure of the school",
    files: [{ filename: "Fee.pdf", label: "Fee Structure" }],
  },
  {
    information: "Annual academic calendar / yearly events",
    files: [
      { filename: "Yearly  Events 2026.pdf", label: "Yearly Events 2026" },
    ],
  },
  {
    information: "List of Parent Teacher Association (PTA)",
    files: [
      {
        filename: "Parent Teacher Association.pdf",
        label: "Parent Teacher Association",
      },
    ],
  },
  {
    information: "POCSO Committee",
    files: [{ filename: "POSCO.pdf", label: "POCSO Committee" }],
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
    files: [
      { filename: "House System  Planner.pdf", label: "House System Planner" },
    ],
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
