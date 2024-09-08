import 'server-only'

import type { QueryParams } from '@sanity/client'
import { client } from "../config/sanity.client";

import { 
  allKopenQuery, 
  allPostCategoriesQuery, 
  allPostsQuery, 
  blogPageQuery, 
  caseKopenSlugQuery, 
  caseStudyPageQuery,
  kopenPageQuery,
  OverPageQuery,
  contactPageQuery, 
  homePageQuery, 
  latestKopenQuery, 
  latestPostsQuery, 
  postBySlugQuery, 
  postCategoryBySlugQuery, 
  postsByCategoryQuery, 
  privacyPageQuery, 
  settingsQuery, 
  termsPageQuery
} from "./sanity.queries";

import { 
  BlogPagePayload, 
  Kopen, 
  KopenPayload,
  OverPagePayload,
  ContactPagePayload, 
  HomePagePayload, 
  Post, 
  PostCategory, 
  PrivacyPagePayload, 
  SettingsPayload, 
  TermsPagePayload 
} from '@/types';


export async function sanityFetch<QueryResponse>({ 
  query, 
  params = {} as QueryParams, 
  tags = [] as string[]
}: {
  query: string
  params?: QueryParams
  tags: string[]
}): Promise<QueryResponse> {
  return client.fetch<QueryResponse>(query, params, {
    next: { tags }
  })
}

export async function getSettings() {
  return sanityFetch<SettingsPayload>({
    query: settingsQuery,
    tags: ['settings']
  })
}

export async function getHomePage() {
  return sanityFetch<HomePagePayload>({
    query: homePageQuery,
    tags: ['homePage']
  })
}

export async function getBlogPage() {
  return sanityFetch<BlogPagePayload>({
    query: blogPageQuery,
    tags: ['blogPage']
  })
}

export async function getOverPage() {
  return sanityFetch<OverPagePayload>({
    query: OverPageQuery,
    tags: ['overPage']
  })
}


export async function getKopenPage() {
  return sanityFetch<KopenPayload>({
    query: kopenPageQuery,
    tags: ['kopenPage']
  })
}

export async function getContactPage() {
  return sanityFetch<ContactPagePayload>({
    query: contactPageQuery,
    tags: ['contactPage']
  })
}

export async function getPrivacyPage() {
  return sanityFetch<PrivacyPagePayload>({
    query: privacyPageQuery,
    tags: ['privacyPage']
  })
}

export async function getTermsPage() {
  return sanityFetch<TermsPagePayload>({
    query: termsPageQuery,
    tags: ['termsPage']
  })
}

export async function getAllPosts() {
  return sanityFetch<Post[]>({
    query: allPostsQuery,
    tags: ['post']
  })
}

export async function getLatestPosts() {
  return sanityFetch<Post[]>({
    query: latestPostsQuery,
    tags: ['post']
  })
}

export async function getPostBySlug(slug: string) {
  return sanityFetch<Post>({
    query: postBySlugQuery,
    params: { slug: slug },
    tags: ['post'],
  })
}

export async function getAllPostsByCategory(slug: string) {
  return sanityFetch<Post[]>({
    query: postsByCategoryQuery,
    params: { slug: slug },
    tags: ['post'],
  })
}

export async function getAllPostCategories() {
  return sanityFetch<PostCategory[]>({
    query: allPostCategoriesQuery,
    tags: ['postCategory'],
  })
}

export async function getPostCategoryBySlug(slug: string) {
  return sanityFetch<Post>({
    query: postCategoryBySlugQuery,
    params: { slug: slug },
    tags: ['post'],
  })
}

export async function getLatestKopen() {
  return sanityFetch<Kopen[]>({
    query: latestKopenQuery,
    tags: ['kopen']
  })
}

export async function getAllKopen() {
  return sanityFetch<Kopen[]>({
    query: allKopenQuery,
    tags: ['kopen']
  })
}

export async function getKopenBySlug(slug: string) {
  return sanityFetch<Kopen>({
    query: caseKopenSlugQuery,
    params: { slug: slug },
    tags: ['kopen'],
  })
}
