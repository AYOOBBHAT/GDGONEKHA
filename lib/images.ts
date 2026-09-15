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
  "/images/activities/DSC00068.jpg",
  "/images/activities/DSC00071.jpg",
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
  campusAerial: activityPhotos[6],
  campusPortrait: activityPhotos[4],
  about: activityPhotos[2],
  principal: "/images/principal/principal.jpg",
  coordinator: "/images/coordinator/coordinator.jpg",
  management: `${origin}/img/SCHOOL%20MANAGEMENT%20COMMITTEE_page-0001.jpg`,
  academicCalendar: `${origin}/documents/aaaaaaa.jpeg`,
  sports: sportsPhotos,
  activities: activityPhotos,
  news: {
    capacity: `${origin}/upload/gdgoenka--news_event--2026-04-22-02-44-am59--IMG_6773.JPG`,
    baisakhi: `${origin}/upload/gdgoenka--news_event--2026-04-22-02-41-am31--IMG_6807.JPG`,
    sdrf: `${origin}/upload/gdgoenka--news_event--2026-04-22-02-38-am49--IMG_6700.JPG`,
    bookDay: `${origin}/upload/gdgoenka--news_event--2026-04-22-02-35-am30--IMG_6589.JPG`,
    olympiad: `${origin}/upload/gdgoenka--news_event--2025-03-26-04-15-am13--OLYMPAID.jpg`,
    karate: `${origin}/upload/gdgoenka--news_event--2025-03-26-04-14-am15--KARATE.jpg`,
  },
  gallery: {
    sports1: sportsPhotos[0],
    sports2: sportsPhotos[1],
  },
} as const;
