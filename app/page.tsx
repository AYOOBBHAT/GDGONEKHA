import { AdmissionsCTA } from "@/components/home/AdmissionsCTA";
import { BulletinBoard } from "@/components/home/BulletinBoard";
import { ContactSection } from "@/components/home/ContactSection";
import { Facilities } from "@/components/home/Facilities";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { Hero } from "@/components/home/Hero";
import { NewsSection } from "@/components/home/NewsSection";
import { Philosophy } from "@/components/home/Philosophy";
import { PrincipalMessage } from "@/components/home/PrincipalMessage";
import { QuickActions } from "@/components/home/QuickActions";
import { SchoolStats } from "@/components/home/SchoolStats";
import { WhyGoenka } from "@/components/home/WhyGoenka";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickActions />
      <WhyGoenka />
      <Facilities />
      <Philosophy />
      <BulletinBoard />
      <NewsSection />
      <PrincipalMessage />
      <SchoolStats />
      <AdmissionsCTA />
      <GalleryPreview />
      <ContactSection />
    </>
  );
}
