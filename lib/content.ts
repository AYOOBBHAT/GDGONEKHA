export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; cite?: string; role?: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "note"; text: string };

export type PageContent = {
  eyebrow: string;
  title: string;
  lead?: string;
  blocks: ContentBlock[];
};

export const schoolSongLyrics = [
  "Let the journey start with a song, to the land, which is far away.",
  "We'll climb the way to the mountain top, to reach our goal one day.",
  "We'll float above the world, We'll breathe beneath the sky.",
  "With knowledge, wisdom, skill and hard work, Goenkans will find their way.",
  "Our eyes are on the stars; our feet are on the ground.",
  "Whether sunny days or shades of grey, we pray to GOD everyday.",
  "Black and white keys on a Piano, let's make music and play.",
  "With knowledge, wisdom, skill and hard work, Goenkans will find their way.",
  "We go higher and higher........ grow stronger and stronger........ and get brighter and brighter..........",
  "We go higher and higher, grow stronger and stronger, get brighter day by day…",
  "With knowledge, wisdom, skill and hard work, Goenkans will find their way...",
  "With knowledge, wisdom, skill and hard work, Goenkans will find their way...",
  "With knowledge, wisdom, skill and hard work, Goenkans will find their way...",
];

export const ageCriteria = [
  ["Nursery", "3+", "As on 30 November 2024"],
  ["KG – 1", "4+", "As on 30 November 2024"],
  ["KG – 2", "5+", "As on 30 November 2024"],
  ["Class 1", "6+", "As on 30 November 2024"],
  ["Class 2", "7+", "As on 30 November 2024"],
  ["Class 3", "8+", "As on 30 November 2024"],
  ["Class 4", "9+", "As on 30 November 2024"],
  ["Class 5", "10+", "As on 30 November 2024"],
  ["Class 6", "11+", "As on 30 November 2024"],
  ["Class 7", "12+", "As on 30 November 2024"],
  ["Class 8", "13+", "As on 30 November 2024"],
];

export const mpdGeneral = [
  ["Name of the school", "G.D. Goenka Public School Kupwara"],
  ["Affiliation no.", "---"],
  ["School code", "---"],
  ["Address", "Bypass Road, Handwara, Kupwara"],
  ["Principal", "Mrs Jasmine Rafiq Mir"],
  ["Qualification", "M.A B.Ed/ DSM"],
  ["E-mail", "principalgdgkupwara1@gmail.com"],
  ["Contact", "7020169259"],
];

export const mpdInfrastructure = [
  ["Total campus area", "15,175.71 sq. m"],
  ["No. and size of classrooms", "75 (44.80 sq. m)"],
  ["Occupied classrooms", "30"],
  ["Vacant classrooms", "50"],
  ["Staff rooms", "05 (54 sq. m each)"],
  ["Indoor assembly area", "01 (300 sq. m)"],
  [
    "Outdoor play",
    "7,200 sq. m — football, basketball, badminton, swimming pool, cricket, children's play area",
  ],
  ["Indoor play", "143 sq. m — table tennis, archery, carrom, chess"],
  ["Laboratories including computer labs", "06"],
  ["Composite science lab", "01"],
  ["Maths lab", "01"],
  ["Robotics lab", "01"],
  ["English language lab", "01"],
  ["Computer lab", "01"],
  ["Library", "01"],
  ["School auditorium", "350 sq. m, capacity 300"],
  ["Internet facility", "Yes"],
  ["Girls' toilets", "36"],
  ["Boys' toilets", "36"],
];
