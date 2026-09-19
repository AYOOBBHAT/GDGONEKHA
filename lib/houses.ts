export type SchoolHouse = {
  name: string;
  colour: string;
  captain: string;
  members: string[];
  rollNumbers: string;
};

export const housesSession = "2026–2027";

export const housesExecutive = ["Mr. Farooq", "Mr. Wajid"];

export const schoolHouses: SchoolHouse[] = [
  {
    name: "Compassion House",
    colour: "Yellow",
    captain: "Ms Bisma Amaan",
    members: [
      "Ms Shariqa Siraj",
      "Ms Madiha Sundus",
      "Ms Henna Firdous",
      "Mr Naseer",
      "Ms Kousheen",
    ],
    rollNumbers: "1, 5, 9, 13, 17, 21, 25, 29",
  },
  {
    name: "Courage House",
    colour: "Green",
    captain: "Ms Sumaya",
    members: [
      "Mr Aamir",
      "Ms Maheen Yousuf",
      "Ms Pakeeza",
      "Miss Anisa Rasool",
      "Mr Javid",
    ],
    rollNumbers: "2, 6, 10, 14, 18, 22, 26, 30",
  },
  {
    name: "Wisdom House",
    colour: "Blue",
    captain: "Ms Syed Shaista",
    members: [
      "Ms Farhat",
      "Ms Farheen",
      "Tariq Ali",
      "Miss Falak",
      "Miss Rukhsana",
      "Mudasir Bashir",
      "Ms Kulsum",
    ],
    rollNumbers: "3, 7, 11, 15, 19, 23, 27, 31",
  },
  {
    name: "Hope House",
    colour: "Orange",
    captain: "Ms Beenish",
    members: [
      "Ms Fatima Galeeni",
      "Ms Afshana",
      "Ms Gurmeet",
      "Ms Shaista Khurshid",
      "Ms Gurpreet",
    ],
    rollNumbers: "4, 8, 12, 16, 20, 24, 28, 32",
  },
];

export const houseTeacherHeaders = [
  "House",
  "Colour",
  "House captain",
  "Teacher members",
];

export const houseTeacherRows = schoolHouses.map((house) => [
  house.name,
  house.colour,
  house.captain,
  house.members.join(", "),
]);

export const houseRollHeaders = [
  "Compassion (Yellow)",
  "Courage (Green)",
  "Wisdom (Blue)",
  "Hope (Orange)",
];

export const houseRollRows = [
  ["1", "2", "3", "4"],
  ["5", "6", "7", "8"],
  ["9", "10", "11", "12"],
  ["13", "14", "15", "16"],
  ["17", "18", "19", "20"],
  ["21", "22", "23", "24"],
  ["25", "26", "27", "28"],
  ["29", "30", "31", "32"],
];

export const softBoardPlan = [
  ["March", "Compassion House"],
  ["April", "Courage House"],
  ["May", "Wisdom House"],
  ["June", "Hope House"],
];

export const bestHouseCriteria = [
  "Participation in school activities",
  "Conduct and discipline",
  "Assembly presentation",
  "Creativity in soft board decoration",
  "Team spirit and leadership",
  "Overall contribution to school events",
];

export const houseRules = [
  "All house members take part in school competitions and activities.",
  "Houses take turns planning and conducting the weekly morning assembly with teachers.",
  "House members help keep order at arrival, recess, dispersal and school events.",
  "The house of the month decorates and maintains the reception soft board.",
  "Each house keeps records of activities, participation and achievements.",
  "House captains coordinate with members and teachers so events run smoothly.",
  "Houses compete fairly, with respect and sportsmanship.",
  "Members promote cleanliness, discipline and positive behaviour on campus.",
];
