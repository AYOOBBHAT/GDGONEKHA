import { defineField, defineType } from "sanity";

function pdfDocument(name: string, title: string) {
  return defineType({
    name,
    title,
    type: "document",
    fields: [
      defineField({
        name: "pdf",
        title: "PDF",
        type: "file",
        options: { accept: "application/pdf" },
        validation: (rule) => rule.required(),
      }),
    ],
    preview: {
      select: { title: "pdf.asset.originalFilename" },
      prepare: ({ title: filename }) => ({
        title: filename || "PDF",
      }),
    },
  });
}

export const summerAssignmentType = pdfDocument(
  "summerAssignment",
  "Summer Assignment",
);

export const winterAssignmentType = pdfDocument(
  "winterAssignment",
  "Winter Assignment",
);

export const dateSheetType = pdfDocument("dateSheet", "Date Sheet");
