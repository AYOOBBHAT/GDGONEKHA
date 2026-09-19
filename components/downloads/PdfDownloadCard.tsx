import type { DownloadPdf } from "@/lib/downloads";

export function PdfDownloadCard({
  id,
  title,
  text,
  files,
}: {
  id: string;
  title: string;
  text: string;
  files: DownloadPdf[];
}) {
  return (
    <article
      id={id}
      className="scroll-mt-28 rounded-3xl border border-line bg-white p-6"
    >
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <p className="mt-2 text-sm text-muted">{text}</p>
      {files.length ? (
        <ul className="mt-4 space-y-2">
          {files.map((file) => (
            <li key={file.id}>
              <a
                href={file.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium"
              >
                {file.filename} →
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-4 text-sm font-medium text-ink">Coming soon.</p>
      )}
    </article>
  );
}
