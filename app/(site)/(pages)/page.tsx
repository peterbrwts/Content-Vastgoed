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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-4">
    <h1 className="text-5xl font-bold text-gray-800 mb-4">
      Content Vastgoed is Coming Soon
    </h1>
    <p className="text-lg text-gray-600 mb-8">
      We are working hard to bring you a great experience. Stay tuned!
    </p>
   
  </div>
  )
}
