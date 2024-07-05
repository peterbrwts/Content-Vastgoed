import { defineField, defineType } from "sanity";
import { ProjectsIcon } from "@sanity/icons";

const aanbod = defineType({
  name: "aanbod",
  title: "Aanbod pand",
  type: "document",
  icon: ProjectsIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name (Project Title)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "type",
      title:
        "Project Type (Shown in filters on project page. Unique value will create a new filter)",
      type: "string",
      validation: (Rule) => Rule.max(50).required(),
    }),
    defineField({
      name: "what",
      title: "What (Project Type)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Where (Project Location)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "year",
      title: "When (Project Date/Year)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description (Shown on Home Screen)",
      type: "text",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "image" }],
    }),
    defineField({
      name: "descriptionImage",
      title: "Description Image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt Text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "descriptionTitle",
      title: "Description Image Title",
      type: "string",
    }),
    defineField({
      name: "longDescription",
      title: "Long Description",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
    defineField({
      name: "slug",
      title:
        "Slug (will be shown in URL, just click generate, change if needed)",
      type: "slug",
      options: { source: "name" },
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "subtitle",
      media: "coverImage",
    },
  },
});

export default aanbod;
