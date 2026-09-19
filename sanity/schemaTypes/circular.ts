import { defineField, defineType } from "sanity";

export const circularType = defineType({
  name: "circular",
  title: "Circular",
  type: "document",
  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "text",
      title: "Text",
      type: "text",
      rows: 6,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "heading", subtitle: "text" },
  },
});
