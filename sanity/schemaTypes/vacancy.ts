import { defineField, defineType } from "sanity";

export const vacancyType = defineType({
  name: "vacancy",
  title: "Vacancy",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "text",
      rows: 5,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "qualification",
      title: "Qualification",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "compensation",
      title: "Compensation",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "deadline",
      title: "Open until",
      type: "string",
      description: "Shown as “Open until …”, for example 31 July 2026.",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "deadline" },
  },
});
