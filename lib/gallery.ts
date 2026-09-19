export type GalleryCategory =
  | "sports"
  | "class"
  | "outdoor"
  | "house"
  | "videos";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
};

import { activityPhotos, sportsPhotos } from "./images";

export const galleryItems: GalleryItem[] = [
  ...sportsPhotos.map((image, index) => ({
    id: `sports-${index + 1}`,
    title: "Sports",
    category: "sports" as const,
    image,
    alt: "Sports at GD Goenka Public School Kupwara",
  })),
  {
    id: "activity-1",
    title: "School life",
    category: "outdoor",
    image: activityPhotos[0],
    alt: "Campus activity at GD Goenka Public School Kupwara",
  },
  {
    id: "activity-2",
    title: "School life",
    category: "class",
    image: activityPhotos[1],
    alt: "Students during a school activity at GD Goenka Kupwara",
  },
  {
    id: "activity-3",
    title: "Class Activities",
    category: "class",
    image: activityPhotos[2],
    alt: "Classroom and campus activity at GD Goenka Kupwara",
  },
  {
    id: "activity-4",
    title: "Class Activities",
    category: "class",
    image: activityPhotos[3],
    alt: "Learning activity at GD Goenka Public School Kupwara",
  },
  {
    id: "activity-5",
    title: "School life",
    category: "outdoor",
    image: activityPhotos[4],
    alt: "Campus life at GD Goenka Public School Kupwara",
  },
];

export const galleryFilters: { id: GalleryCategory | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "sports", label: "Sports" },
  { id: "class", label: "Class Activities" },
  { id: "outdoor", label: "Outdoor Activities" },
  { id: "house", label: "House Activities" },
  { id: "videos", label: "Videos" },
];
