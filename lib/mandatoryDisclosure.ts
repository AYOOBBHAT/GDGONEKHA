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
      "Copies of Affiliation / upgradation letter and recent extension of Affiliation, if any",
    files: [],
  },
  {
    information:
      "Copies of Societies / Trust / Company Registration / Renewal Certificate, as applicable",
    files: [{ filename: "Trust..pdf", label: "Trust Certificate" }],
  },
  {
    information:
      "Copy of No Objection Certificate (NOC) issued, if applicable, by the State Govt./UT",
    files: [],
  },
  {
    information:
      "Copies of Recognition Certificate under RTE Act, 2009, and its renewal if applicable",
    files: [
      { filename: "Registration .pdf", label: "Recognition Certificate" },
    ],
  },
  {
    information:
      "Copy of valid Building Safety Certificate as per the National Building Code",
    files: [
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
    information:
      "Copy of the self certification submitted by the school for Affiliation / Upgradation / Extension of Affiliation",
    files: [],
  },
  {
    information: "Copies of valid Water, Health and Sanitation Certificates",
    files: [{ filename: "Sanitary.pdf", label: "Sanitation Certificate" }],
  },
];

export const resultAndAcademics: DisclosureRow[] = [
  {
    information: "Fee structure of the school",
    files: [{ filename: "Fee Structure.pdf", label: "Fee Structure" }],
  },
  {
    information: "Annual academic calendar / yearly events",
    files: [{ filename: "Events 2026.pdf", label: "Yearly Events 2026" }],
  },
  {
    information: "List of School Management Committee (SMC)",
    files: [{ filename: "SMC.pdf", label: "School Management Committee" }],
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
    files: [{ filename: "POSCO.pdf", label: "POCSO Committee" }],
  },
  {
    information: "House System Planner",
    files: [
      { filename: "House System  Planner.pdf", label: "House System Planner" },
    ],
  },
];

export type InfrastructureRow = {
  information: string;
  details?: string;
  href?: string;
  files?: DisclosureFile[];
};

export const schoolInfrastructure: InfrastructureRow[] = [
  {
    information: "Total campus area of the school (in square mtr)",
    details: "22,763",
  },
  {
    information: "No. and size of the class rooms (in sq mtr)",
    details: "35 (44 sq. m)",
  },
  {
    information: "No. of class rooms",
    details: "35",
  },
  {
    information:
      "No. and size of laboratories including computer labs (in sq mtr)",
    details: "06 (56 sq. m)",
  },
  {
    information: "No. of laboratories",
    details: "06",
  },
  {
    information: "Internet facility",
    details: "Yes",
  },
  {
    information: "No. of girls toilets",
    details: "30",
  },
  {
    information: "No. of boys toilets",
    details: "30",
  },
  {
    information:
      "Link of YouTube video of the inspection of school covering the infrastructure of the school",
  },
  {
    information: "Teacher's list",
    files: [
      {
        filename: "teachers qualification.xlsx",
        label: "Teacher's list",
      },
    ],
  },
];
export const staffTeachingDetails: [string, string][] = [
  ["Principal", "01"],
  ["Total No. of Teachers", "29"],
  ["TGT", "01"],
  ["PGT", "07"],
  ["PRT", "08"],
  ["Nursery Teachers", "10"],
  ["Teacher : Section Ratio", "1.5:1"],
  ["Librarian", "Miss Tabassum, Graduate"],
  ["Details of Special Educator", "Miss Afshana Banday, M.A, B.Ed."],
  ["Details of Counsellor", "Miss Syed Shaista, Master's Degree, B.Ed."],
  ["Wellness Teacher", "Miss Syed Shaista, Master's Degree, B.Ed."],
];
