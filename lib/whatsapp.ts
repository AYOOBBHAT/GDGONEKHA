import { site } from "@/lib/site";

export function whatsappUrl(message: string) {
  return `https://wa.me/${site.whatsappPhone}?text=${encodeURIComponent(message)}`;
}

export const admissionWhatsAppMessage = [
  `*Admission Enquiry — ${site.shortName}*`,
  "",
  "Hello, I would like to apply for admission.",
  "",
  "Student name:",
  "Class applying for:",
  "Parent / guardian:",
  "Phone:",
  "Email:",
].join("\n");

export const admissionWhatsAppHref = whatsappUrl(admissionWhatsAppMessage);
