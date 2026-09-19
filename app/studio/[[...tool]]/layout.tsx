import { metadata as studioMetadata, viewport } from "next-sanity/studio";

export const metadata = studioMetadata;
export { viewport };
export const dynamic = "force-static";

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
