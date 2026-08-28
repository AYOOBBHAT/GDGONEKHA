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

import { images } from "./images";

export const galleryItems: GalleryItem[] = [
  {
    id: "sports-awards-1",
    title: "Sports",
    category: "sports",
    image: images.gallery.sports1,
    alt: "Students at a sports event at GD Goenka Public School Kupwara",
  },
  {
    id: "sports-awards-2",
    title: "Sports",
    category: "sports",
    image: images.gallery.sports2,
    alt: "School sports celebration at GD Goenka Kupwara",
  },
  {
    id: "karate",
    title: "Sports",
    category: "sports",
    image: images.news.karate,
    alt: "Karate championship achievement at GD Goenka Kupwara",
  },
  {
    id: "sdrf",
    title: "Outdoor Activities",
    category: "outdoor",
    image: images.news.sdrf,
    alt: "Students in disaster-response training with SDRF",
  },
  {
    id: "baisakhi",
    title: "House Activities",
    category: "house",
    image: images.news.baisakhi,
    alt: "Baisakhi celebration at GD Goenka Public School Kupwara",
  },
  {
    id: "book-day",
    title: "Class Activities",
    category: "class",
    image: images.news.bookDay,
    alt: "Grade 2 students celebrating International Children's Book Day",
  },
  {
    id: "capacity",
    title: "Class Activities",
    category: "class",
    image: images.news.capacity,
    alt: "Teachers at a capacity building program",
  },
  {
    id: "olympiad",
    title: "Class Activities",
    category: "class",
    image: images.news.olympiad,
    alt: "SOF Olympiad achievement at GD Goenka Kupwara",
  },
  {
    id: "campus-life",
    title: "Outdoor Activities",
    category: "outdoor",
    image: images.campusPortrait,
    alt: "Campus life at GD Goenka Public School Kupwara",
  },
  {
    id: "campus-wide",
    title: "Outdoor Activities",
    category: "outdoor",
    image: images.campusWide,
    alt: "GD Goenka Public School Kupwara campus",
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
