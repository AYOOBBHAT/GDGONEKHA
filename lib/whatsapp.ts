import { site } from "@/lib/site";

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(message)}`;
}
