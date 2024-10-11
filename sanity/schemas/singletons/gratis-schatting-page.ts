import { defineField, defineType } from 'sanity'
import { fieldsets } from '../utils/fieldsets'
import { fieldGroups } from '../utils/field-groups'
import { seoFields } from '../utils/seo-fields'

export default defineType({
  name: 'gratisSchattingPage',
  title: 'Gratis schatting',
  type: 'document',
  fieldsets: [
    ...fieldsets
  ],
  groups: [
    ...fieldGroups
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
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
      ]
    }),
    defineField({
      name: 'btnText',
      title: 'Button Text',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    }),
    defineField({
      name: 'btnDestination',
      title: 'Button Link',
      type: 'string',
      group: 'content',
      fieldset: 'content'
    }),
    ...seoFields
  ]
})