export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavLink[];
};

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Know Us",
    href: "/about",
    children: [
      { label: "Our Founder", href: "/founder" },
      { label: "The School", href: "/about" },
      { label: "Vision & Mission", href: "/vision-mission" },
      { label: "School Song", href: "/school-song" },
      { label: "Mandatory Public Disclosure", href: "/mandatory-public-disclosure" },
      { label: "Our Team", href: "/team" },
      { label: "Principal's Message", href: "/principal-message" },
      { label: "Director's Message", href: "/director-message" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Teaching Methodology", href: "/teaching-methodology" },
      { label: "Academic Calendar", href: "/academic-calendar" },
      { label: "Book List", href: "/book-list" },
    ],
  },
  {
    label: "Beyond Academics",
    href: "/activities",
    children: [
      { label: "Study Tours", href: "/study-tours" },
      { label: "Celebrations", href: "/celebrations" },
      { label: "Sports", href: "/sports" },
      { label: "Goenkan Pursuits", href: "/goenkan-pursuits" },
      { label: "School Houses", href: "/school-houses" },
      { label: "Clubs", href: "/clubs" },
    ],
  },
  {
    label: "Facilities",
    href: "/facilities",
    children: [
      { label: "State of the Art", href: "/facilities/state-of-the-art" },
      { label: "Holistic Development", href: "/facilities/holistic-development" },
      { label: "Transport", href: "/facilities/transport" },
    ],
  },
  {
    label: "Downloads",
    href: "/downloads",
    children: [
      { label: "Admit Card", href: "/downloads#admit-card" },
      { label: "Summer Assignment", href: "/downloads#summer-assignment" },
      { label: "Winter Assignment", href: "/downloads#winter-assignment" },
      { label: "Worksheets", href: "/downloads#worksheets" },
      { label: "Web Lesson", href: "/downloads#web-lesson" },
      { label: "Date Sheet", href: "/downloads#date-sheet" },
      { label: "Newsletter", href: "/downloads#newsletter" },
    ],
  },
  {
    label: "Admission",
    href: "/admissions",
    children: [
      { label: "Procedure", href: "/admissions/procedure" },
      { label: "FAQs", href: "/admissions/faq" },
      { label: "E-Prospectus", href: "/admissions/prospectus" },
      { label: "Apply Now", href: "/admissions/apply" },
    ],
  },
  {
    label: "Career",
    href: "/career",
    children: [
      { label: "Vacancies", href: "/career" },
      { label: "Apply Online", href: "/career/apply" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
    children: [
      { label: "Sports", href: "/gallery?category=sports" },
      { label: "Class Activities", href: "/gallery?category=class" },
      { label: "Outdoor Activities", href: "/gallery?category=outdoor" },
      { label: "House Activities", href: "/gallery?category=house" },
      { label: "Video Gallery", href: "/gallery?category=videos" },
    ],
  },
];

export const footerNav = {
  school: [
    { label: "The School", href: "/about" },
    { label: "Vision & Mission", href: "/vision-mission" },
    { label: "Our Founder", href: "/founder" },
    { label: "Our Team", href: "/team" },
    { label: "Mandatory Disclosure", href: "/mandatory-public-disclosure" },
  ],
  academics: [
    { label: "Teaching Methodology", href: "/teaching-methodology" },
    { label: "Academic Calendar", href: "/academic-calendar" },
    { label: "Book List", href: "/book-list" },
  ],
  admissions: [
    { label: "Procedure", href: "/admissions/procedure" },
    { label: "FAQs", href: "/admissions/faq" },
    { label: "Apply Now", href: "/admissions/apply" },
    { label: "E-Prospectus", href: "/admissions/prospectus" },
  ],
  resources: [
    { label: "Downloads", href: "/downloads" },
    { label: "Gallery", href: "/gallery" },
    { label: "News", href: "/news" },
    { label: "Career", href: "/career" },
    { label: "ERP Login", href: "https://erp.youthconnekt.in", external: true },
  ],
};
