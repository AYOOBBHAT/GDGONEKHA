import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = [
  "",
  "/about",
  "/founder",
  "/vision-mission",
  "/school-song",
  "/know-us/mandatory-disclosure",
  "/team",
  "/principal-message",
  "/director-message",
  "/academics",
  "/teaching-methodology",
  "/academic-calendar",
  "/book-list",
  "/activities",
  "/study-tours",
  "/celebrations",
  "/sports",
  "/goenkan-pursuits",
  "/school-houses",
  "/clubs",
  "/facilities",
  "/facilities/state-of-the-art",
  "/facilities/holistic-development",
  "/facilities/transport",
  "/downloads",
  "/admissions",
  "/admissions/procedure",
  "/admissions/faq",
  "/admissions/apply",
  "/admissions/prospectus",
  "/career",
  "/career/apply",
  "/gallery",
  "/news",
  "/contact",
  "/privacy",
  "/support",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-08-27"),
  }));
}
