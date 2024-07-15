import { defineField, defineType } from 'sanity'
import { CaseIcon } from '@sanity/icons'
import { fieldsets } from '../utils/fieldsets'
import { fieldGroups } from '../utils/field-groups'
import { seoFields } from '../utils/seo-fields'

export default defineType({
  name: 'aanbod',
  title: 'Aanbod panden',
  type: 'document',
  icon: CaseIcon,
  fieldsets: [
    ...fieldsets
  ],
  groups: [
    ...fieldGroups
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: "type",
      title:
        "Pand Type (Te koop of te huur: Shown in filters on project page. Unique value will create a new filter)",
      type: "string",
      validation: (Rule) => Rule.max(50).required(),
    }),
    defineField({
      name: "location",
      title: "Location (Property Location)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Vraagprijs",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    }),
    defineField({
      name: 'overview',
      title: 'Pand Overview',
      type: 'array',
      of: [{ type: 'block' }]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string'
        }
      ]
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      description: "Reccommended image size: 600px (width) - 600px (height)",
      type: 'array',
      of: [{ 
        type: 'image',
        fields: [
          {
            name: 'alt',
            title: 'Alt',
            type: 'string'
          }
        ]
      }],
    }),
    defineField({
      name: "typePand",
      title:
        "Type pand (Appartement, Villa, ...)",
      type: "string",
      validation: (Rule) => Rule.max(50).required(),
    }),
    defineField({
      name: "bedroom",
      title:
        "Aantal slaapkamers",
      type: "number",
      validation: (Rule) => Rule.max(50).required(),
    }),
    defineField({
      name: "livingSurface",
      title:
        "Bewoonbaar oppervlakte",
      type: "number",
   
    }),
    defineField({
      name: "surface",
      title:
        "Oppervlakte perceel",
      type: "number",

    }),
    defineField({
      name: "terraceSurface",
      title:
        "Oppervlakte terras",
      type: "number",
    
    }),
    defineField({
      name: "year",
      title: "Bouwjaar",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "condition",
      title: "Algemene staat",
      type: "string",
      options: {
        list: [
          {title: 'Instapklaar', value: 'instapklaar'},
          {title: 'Te renoveren', value: 'te renoveren'},
          {title: 'Gerenoveerd', value: 'gerenoveerd'},
          {title: 'Af te breken', value: 'gf te breken'},
          {title: 'Licht op te frissen', value: 'licht op te frissen'},
          {title: 'Luxe', value: 'luxe'},
          {title: 'Nieuwe', value: 'nieuwe'}
        ], // <-- predefined values
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "parking",
      title: "Aantal garage/parkeerplaats",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "epc",
      title: "EPC-score",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "water",
      title: "Watertoets: gebouwscore, G-score, P-score",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "flood",
      title: "Overstromingsgevoeligheid",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "easement",
      title: "Erfdienstbaarheid",
      type: "string",
      options: {
        list: [
          {title: 'Wettelijk', value: 'wettelijk'},
          {title: 'Conventioneel', value: 'conventioneel'},
         
        ], // <-- predefined values
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "urbanism",
      title: "Stedenbouw",
      type: "object",
      validation: (Rule) => Rule.required(),
      fieldsets: [
        {name: 'urbanism'}
      ],
      fields: [
        {
          name: "permit",
          title: "Vergunning uitgereikt",
          type: "string",
          fieldset: 'urbanism',
          options: {
            list: [
              { title: "Ja", value: "1" },
              { title: "Nee", value: "2" },
            ],
            layout: "radio",
            direction: "horizontal"
          },
        },
        {
          name: "preemption",
          title: "Verkooprecht",
          type: "string",
          fieldset: 'urbanism',
          options: {
            list: [
              { title: "Ja", value: "1" },
              { title: "Nee", value: "2" },
            ],
            layout: "radio",
            direction: "horizontal"
          },
        },
        {
          name: "judicial",
          title: "Rechelijke uitspraak",
          type: "string",
          fieldset: 'urbanism',
          options: {
            list: [
              { title: "Ja", value: "1" },
              { title: "Nee", value: "2" },
            ],
            layout: "radio",
            direction: "horizontal"
          },
        },
        {
          name: "subdivision",
          title: "Verkavelingsvergunning (Ja/nee)",
          type: "string",
          fieldset: 'urbanism',
        },
        {
          name: "destination",
          title: "Bestemming",
          type: "string",
          fieldset: 'urbanism',
        },
      ] 
    }),
    defineField({
      name: "reference",
      title: "Referentie",
      type: "string"
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      }
    }),
    ...seoFields
  ]
})