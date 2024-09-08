import { defineField, defineType } from "sanity"
import { fieldGroups } from "../utils/field-groups"
import { fieldsets } from "../utils/fieldsets"
import { seoFields } from "../utils/seo-fields"

export default defineType({
  name: 'kopenPage',
  title: 'Panden te koop',
  type: 'document',
  fieldsets: [
    ...fieldsets,
  ],
  groups: [
    ...fieldGroups,
  ],
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    }),
    defineField({
      name: 'subheading',
      title: 'SubHeading',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    }),
    ...seoFields,
  ]
})