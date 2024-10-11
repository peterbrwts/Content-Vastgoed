import { Metadata } from 'next'
import { getGratisSchattingPage } from '@/sanity/lib/sanity.fetch'
import Container from '@/components/global/container'
import Content from '@/components/shared/content'
import Header from '@/components/shared/header'
import { SectionComponent } from '@/components/shared/ui/sections'
import Cta from '@/components/shared/cta'

export async function generateMetadata(): Promise<Metadata> {

  const page = await getGratisSchattingPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function OverPage() {

  const page = await getGratisSchattingPage()
  
  return (
    <>
      <Header heading={page.heading} subheading=''/>
      <Container>
        <div className='mx-auto md:pt-6 pb-10 px-6 md:px-0 text-lg text-gray-700 blog-content'>
          <Content data={page.content} />
        
        </div>
        
      </Container>
      <Cta />
    </>
  )
}
