export type SchoolClub = {
  name: string;
  teachers: string;
  aim: string;
  activities: string[];
};

export const clubsCoordinator = "Qurat Fayaz";

export const schoolClubs: SchoolClub[] = [
  {
    name: "Environment & Eco Club",
    teachers: "Mudasir Sir & Javed Sir",
    aim: "Plantation, recycling, waste segregation and conservation — practical projects, not only posters.",
    activities: [
      "School plantation / adopt-a-plant drive",
      "Waste segregation project",
      "Best out of waste",
      "School environmental audit",
      "Eco-awareness campaign",
    ],
  },
  {
    name: "Robotics & AI Club",
    teachers: "Aamir Sir & Shahista Ma'am",
    aim: "Coding, simple robotics and how AI shows up in daily life — with a working model or exhibition at the end.",
    activities: [
      "Introduction to coding",
      "Simple robotics project",
      "AI around us",
      "Innovation challenge",
      "Student tech exhibition",
    ],
  },
  {
    name: "Critical Thinking Club",
    teachers: "Iram Ma'am & Sharika Ma'am",
    aim: "Reasoning, general knowledge, questioning and decision-making through quizzes and structured challenges.",
    activities: [
      "GK challenge",
      "Quiz competition",
      "Current affairs board",
      "Puzzle & reasoning challenge",
      "Debate & discussion project",
    ],
  },
  {
    name: "Arts & Creativity Club",
    teachers: "Gurmeet Ma'am & Maheen Ma'am",
    aim: "Drawing, craft, design and photography — collaborative work that can go on a wall or into an exhibition.",
    activities: [
      "School wall project",
      "Craft from waste",
      "Poster & design project",
      "Creative exhibition",
      "Photography project",
    ],
  },
  {
    name: "Sports & Fitness Club",
    teachers: "Rukhsana Ma'am & Farooq Sir",
    aim: "Fitness, sportsmanship and healthy habits — stations, yoga, skills and awareness, not only match day.",
    activities: [
      "Fitness challenge",
      "Yoga sessions",
      "Sports skills project",
      "Fitness awareness campaign",
      "Nutrition awareness activity",
    ],
  },
  {
    name: "Financial Literacy & Entrepreneurship Club",
    teachers: "Falak Ma'am, Henna Ma'am & Ghulam Muhammad Wani Sir",
    aim: "Saving, budgeting and a first taste of enterprise — mock market, pitches and a student product fair.",
    activities: [
      "Mock market",
      "Budgeting activity",
      "Saving challenge",
      "Student business idea project",
      "Student product fair",
    ],
  },
  {
    name: "Social Service & Community Club",
    teachers: "Bisma Ma'am",
    aim: "Kindness, service and noticing who needs a hand in the school and neighbourhood.",
    activities: [
      "Kindness campaign",
      "Donation drive",
      "Community awareness campaign",
      "Service project",
      "Gratitude / helping-hand project",
    ],
  },
  {
    name: "Astronomy & Space Club",
    teachers: "Seema Ma'am",
    aim: "Planets, stars and missions — models, charts, observation where it is safe, and a space exhibition.",
    activities: [
      "Solar system model",
      "Constellation project",
      "Space mission project",
      "Astronomy observation activity",
      "Space exhibition",
    ],
  },
  {
    name: "Islamic Values & Character Club (Akhlaq Club)",
    teachers: "Naseer Sir & Tariq Sir",
    aim: "Manners, honesty, kindness, respect and responsibility — practised in daily school life, not only spoken about.",
    activities: [
      "Good manners campaign",
      "Kindness project",
      "Honesty challenge",
      "Respect & responsibility campaign",
      "Values-based story / role play",
    ],
  },
];

export const clubAssignmentHeaders = ["Club", "Teacher(s) in-charge"];

export const clubAssignmentRows = schoolClubs.map((club) => [
  club.name,
  club.teachers,
]);
