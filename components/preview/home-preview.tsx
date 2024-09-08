"use client";
import { Kopen, Post } from "@/types";
import { useLiveQuery } from "@sanity/preview-kit";

// sanity queries
import { homePageQuery } from "@/sanity/lib/sanity.queries";
import { latestKopenQuery } from "@/sanity/lib/sanity.queries";
import { latestPostsQuery } from "@/sanity/lib/sanity.queries";

// components
import HomeHero from "../pages/home/home-hero";
import HomeCaseStudies from "../pages/home/home-case-studies";
import HomeLatestPosts from "../pages/home/home-latest-posts";

interface Page {
  heading: string
  paragraph: string
  image: string
  btnText: string
  btnDestination: string
}

interface HomePreviewProps {
  page: Page
  kopen: Kopen[]
  posts: Post[]
}

export default function HomePreview({ 
  page, 
  kopen, 
  posts 
}: HomePreviewProps) {
  return (
    <>
      <HomeHeroPreview page={page} />
      <HomeCaseStudiesPreview kopen={kopen} />
      <HomePostsPreview posts={posts} />
    </>
  )
}

interface HomeHeroPreviewProps {
  page: Page
}

function HomeHeroPreview({ page }: HomeHeroPreviewProps) {

  const [data] = useLiveQuery(page, homePageQuery);
  
  return (
    <HomeHero 
      heading={data.heading}
      paragraph={data.paragraph}
      image={data.image}
      btnText={data.btnText}
      btnDestination={data.btnDestination}
    />
  )
}

interface HomeCaseStudiesPreviewProps {
  kopen: Kopen[]
}

function HomeCaseStudiesPreview({ kopen }: HomeCaseStudiesPreviewProps) {

  const [data] = useLiveQuery(kopen, latestKopenQuery);
  
  return (
    <HomeCaseStudies 
    kopen={data} 
    />
  )
}

interface HomePostsPreviewProps {
  posts: Post[]
}

function HomePostsPreview({ posts }: HomePostsPreviewProps) {

  const [data] = useLiveQuery(posts, latestPostsQuery);
  
  return (
    <HomeLatestPosts 
      posts={data} 
    />
  )
}