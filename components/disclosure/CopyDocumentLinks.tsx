"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { disclosureHref, type DisclosureFile } from "@/lib/mandatoryDisclosure";

function filePath(file: DisclosureFile) {
  if (file.href) {
    return file.href.startsWith("/documents/") ? file.href : "";
  }
  if (!file.filename) return "";
  return disclosureHref(file.filename);
}

function absoluteUrl(path: string) {
  if (typeof window === "undefined") return path;
  return new URL(path, window.location.origin).toString();
}

async function copyToClipboard(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "absolute";
    input.style.left = "-9999px";
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
  }
}

export function CopyDocumentLinks({
  files,
}: {
  files: DisclosureFile[];
}) {
  const [copied, setCopied] = useState<string | null>(null);

  async function onCopy(path: string) {
    const url = absoluteUrl(path);
    await copyToClipboard(url);
    setCopied(path);
    window.setTimeout(() => {
      setCopied((current) => (current === path ? null : current));
    }, 1800);
  }

  return (
    <div className="flex flex-wrap gap-2">
      {files.map((file) => {
        const path = filePath(file);
        if (!path) return null;
        const isCopied = copied === path;
        return (
          <button
            key={path}
            type="button"
            onClick={() => onCopy(path)}
            aria-label={isCopied ? "Document URL copied" : "Copy document URL"}
            title={isCopied ? "Copied" : "Copy document URL"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-ink transition hover:border-ink hover:bg-cream-2"
          >
            {isCopied ? <Check size={16} strokeWidth={2} /> : <Copy size={16} strokeWidth={2} />}
          </button>
        );
      })}
    </div>
  );
}
