const origin = "https://www.gdgoenkabaramulla.com";

export const sportsPhotos = [
  "/images/sports/DSC00089.jpg",
  "/images/sports/DSC00093.jpg",
  "/images/sports/DSC00103.jpg",
  "/images/sports/DSC00106.jpg",
  "/images/sports/DSC00111.jpg",
  "/images/sports/DSC00122.jpg",
  "/images/sports/DSC00123.jpg",
  "/images/sports/DSC00165.jpg",
] as const;

export const activityPhotos = [
  "/images/activities/DSC00016.jpg",
  "/images/activities/DSC00027.jpg",
  "/images/activities/DSC00029.jpg",
  "/images/activities/DSC00078.jpg",
  "/images/activities/DSC00159.jpg",
] as const;

export const images = {
  /** Official GD Goenka lockup (falcon + wordmark + Thrive. For Life.) */
  brandLogo: "/images/brand/gd-goenka-logo.svg",
  brandFooterLogo: "/images/brand/gd-goenka-footer.svg",
  logo: `${origin}/images/newone.png`,
  logoMark: `${origin}/img/LOGO.png`,
  footerMark: `${origin}/img/GDGoenkaSchool_footer.png`,
  hero: activityPhotos[1],
  campusWide: activityPhotos[0],
  campusAerial: activityPhotos[4],
  campusPortrait: activityPhotos[3],
  about: activityPhotos[2],
  principal: "/images/principal/principal.jpg",
  founder: "/images/founder/our_founder.png",
  coordinator: "/images/coordinator/coordinator.jpg",
  management: `${origin}/img/SCHOOL%20MANAGEMENT%20COMMITTEE_page-0001.jpg`,
  academicCalendar: `${origin}/documents/aaaaaaa.jpeg`,
  sports: sportsPhotos,
  activities: activityPhotos,
  news: {
    independence: "/images/news/independence-day/independence-1.jpeg",
    medical: "/images/news/medical_checkup/medical-1.jpeg",
    parentTeacher: "/images/news/parent_teacher/ptm-1.jpeg",
  },
  gallery: {
    sports1: sportsPhotos[0],
    sports2: sportsPhotos[1],
  },
  gulmarg: [
    "/images/study-tours/gulmarg-1.jpg",
    "/images/study-tours/gulmarg-2.jpg",
    "/images/study-tours/gulmarg-3.jpg",
  ],
} as const;
