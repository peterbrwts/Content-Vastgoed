import { Metadata } from "next";
import { draftMode } from "next/headers";
import { SectionComponent } from "@/components/shared/ui/sections";

import { 
  getHomePage, 
  getLatestKopen, 
  getLatestPosts 
} from '@/sanity/lib/sanity.fetch'

// components
import HomeHero from '@/components/pages/home/home-hero'
import HomeCaseStudies from '@/components/pages/home/home-case-studies'
import HomeLatestPosts from '@/components/pages/home/home-latest-posts'

// preview components
import PreviewProvider from "@/components/preview/preview-provider"
import HomePreview from "@/components/preview/home-preview"
import Cta from "@/components/shared/cta";

export async function generateMetadata(): Promise<Metadata> {

  const page = await getHomePage()
  
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function Home() {

  const pageData = await getHomePage()
  const kopenData = await getLatestKopen()
  const postsData = await getLatestPosts()

  const [ 
    page, 
    kopen, 
    posts 
  ] = await Promise.all([pageData, kopenData, postsData])

  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && process.env.SANITY_API_READ_TOKEN) {
    return (
      <PreviewProvider token={process.env.SANITY_API_READ_TOKEN}>
        <HomePreview page={page} kopen={kopen} posts={posts} />
      </PreviewProvider>
    )
  }

  return (
    <>
      <HomeHero 
        heading={page.heading}
        paragraph={page.paragraph}
        image={page.image}
        btnText={page.btnText}
        btnDestination={page.btnDestination}
      />
      <HomeCaseStudies kopen={kopen} />
      <div>
      {page?.sections.map((section) => (
        <div key={section.title}>
          <SectionComponent section={section} />
        </div>
      ))}
      </div>
      <Cta />
      <HomeLatestPosts posts={posts} />
      {/* <HomeLatestPosts posts={posts} /> */}
    </>
  )
}
