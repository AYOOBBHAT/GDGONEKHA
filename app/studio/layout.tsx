import { metadata as studioMetadata, viewport } from "next-sanity/studio";

export const metadata = studioMetadata;
export { viewport };

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="fixed inset-0 z-[300] h-dvh w-screen overflow-auto bg-white">
      {children}
    </div>
  );
}
