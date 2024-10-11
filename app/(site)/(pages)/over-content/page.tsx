import { Metadata } from 'next'
import { getOverPage } from '@/sanity/lib/sanity.fetch'
import Container from '@/components/global/container'
import Content from '@/components/shared/content'
import Header from '@/components/shared/header'
import { SectionComponent } from '@/components/shared/ui/sections'
import Cta from '@/components/shared/cta'

export async function generateMetadata(): Promise<Metadata> {

  const page = await getOverPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function OverPage() {

  const page = await getOverPage()
  
  return (
    <>
      <Header heading={page.heading} subheading=''/>
      <div>
        <div className='mx-auto md:pt-6 pb-10 px-0 lg:px-6 md:px-0 text-lg text-primary'>
          <Content data={page.content} />
          <div>
      {page?.sections.map((section) => (
        <div key={section.title}>
          <SectionComponent section={section} />
          
        </div>
      ))}
      </div>
        </div>
      </div>
      <Cta />
    </>
  )
}


