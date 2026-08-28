import { PageHero } from "@/components/layout/PageHero";
import { TeamDirectory } from "@/components/team/TeamDirectory";
import { Container } from "@/components/ui/Container";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta(
  "Our Team",
  "Leadership, administration and faculty of GD Goenka Public School Kupwara.",
  "/team",
);

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Know us"
        title="Our team"
        lead="Educators, administrators and specialists who hold the school’s daily promise."
      />
      <Container className="py-14 md:py-20">
        <TeamDirectory />
      </Container>
    </>
  );
}
