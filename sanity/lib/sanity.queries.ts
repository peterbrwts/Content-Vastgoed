import { groq } from "next-sanity";
import { client } from "../config/sanity.client";
import { Post } from "@/types";
import { readToken } from "../config/sanity.api";

export const homePageQuery = groq`*[_type == 'homePage'][0]{
  _id,
  heading,
  paragraph,
  'image': image.asset->url,
  btnText,
  btnDestination,
   sections[]{
          title,
          description,
          "image": image.asset->url,
          showOnLeft
        },
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const blogPageQuery = groq`*[_type == 'blogPage'][0]{
  _id,
  heading,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const caseStudyPageQuery = groq`*[_type == 'aanbodPage'][0]{
  _id,
  heading,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const aanbodPageQuery = groq`*[_type == 'aanbodPage'][0]{
  _id,
  heading,
  subheading,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const contactPageQuery = groq`*[_type == 'contactPage'][0]{
  _id,
  heading,
  subheading
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const privacyPageQuery = groq`*[_type == 'privacyPage'][0]{
  _id,
  heading,
  content,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const termsPageQuery = groq`*[_type == 'termsPage'][0]{
  _id,
  heading,
  content,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const allPostsQuery = groq`*[_type == 'post'] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  category->{
    title,
    'slug': slug.current,
  },
  readTime,
  'image': image.asset->url,
}`

export const latestPostsQuery = groq`*[_type == 'post'][0...5] | order(_createdAt desc) {
  _id,
  title,
  category->{
    title,
    'slug': slug.current,
  },
  readTime,
  'image': image.asset->url,
  'slug': slug.current,
}`

export const postBySlugQuery = groq`*[_type == 'post' && slug.current == $slug][0] {
  _id,
  title,
  'slug': slug.current,
  category->{
    title,
    'slug': slug.current,
  },
  author->{
    name,
    description,
    'image': image.asset->url,
  },
  'image': image.asset->url,
  readTime,
  content,
  relatedPosts[]->{
    title,
    'image': image.asset->url,
    'slug': slug.current,
    readTime,
    category->{
      title,
      'slug': slug.current,
    },
  },
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const postsByCategoryQuery = groq`*[_type == 'post' && category->slug.current == $slug] {
  _id,
  title,
  'slug': slug.current,
  category->{
    title,
    'slug': slug.current,
  },
  author->{
    name,
    description,
    'image': image.asset->url,
  },
  'image': image.asset->url,
  readTime,
  content,
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const postPathsQuery = groq`*[_type == "post" && defined(slug.current)][]{
  'params': { 'slug': slug.current }
}`;

export const allPostCategoriesQuery = groq`*[_type == 'postCategory'] {
  _id,
  title,
  'slug': slug.current,
}`

export const postCategoryBySlugQuery = groq`*[_type == 'postCategory' && slug.current == $slug][0] {
  _id,
  title,
  'slug': slug.current,
}`

export const latestAanbodQuery = groq`*[_type == 'aanbod'][0...3] | order(_createdAt desc) {
  _id,
  title,
  'slug': slug.current,
  url,
  'image': image.asset->url,
}`
 
 export const allAanbodQuery = groq`*[_type == 'aanbod'] | order(_createdAt desc) {
  _id,
  title,
  location,
  'slug': slug.current,
  url,
  'image': image.asset->url,
}`

export const caseAanbodSlugQuery = groq`*[_type == 'aanbod' && slug.current == $slug][0]{
  _id,
  title,
  location,
  type,
  shortDescription,
  overview,
  'slug': slug.current,
  url,
  'image': image.asset->url,
  imageGallery[] {
    'alt': alt,
    'url': asset->url
  },
  metaTitle,
  metaDescription,
  metaKeywords,
}`

export const caseStudyPathsQuery = groq`*[_type == "aanbod" && defined(slug.current)][]{
  'params': { 'slug': slug.current }
}`;

export const settingsQuery = groq`*[_type == 'settings' && _id == 'settings'][0]{
  _id,
  logoText,
  main_heading,
  hide_testimonials,
  recent_posts,
  enableBottomBar,
  bottomBarMessage,
  enableBottomBarLink,
  bottomBarLinkUrl,
  bottomBarLinkText,
  bottomBarLinkColor,
  navbarMenuItems[]-> {
    _id,
    title,
    link
  },
  navbarButtonText,
  navbarButtonLink,
  footerTagline,
  enableSubscribeForm,
  subscribeFormTitle,
  subscribeFormPlaceholder,
  footerCopyright,
  footerQuickLinks[]-> {
    _id,
    title,
    link
  },
  footerSocialLinks[]-> {
    _id,
    title,
    link
  },
  footerLegalLinks[]-> {
    _id,
    title,
    link
  },
  enableFootnote,
  footerFootnoteText,
  enableFootnoteLink,
  footerFootnoteLinkText,
  footerFootnoteLink
}`  