import { Metadata } from 'next'
import { getPrivacyPage } from '@/sanity/lib/sanity.fetch'
import Container from '@/components/global/container'
import Content from '@/components/shared/content'
import Header from '@/components/shared/header'

export async function generateMetadata(): Promise<Metadata> {

  const page = await getPrivacyPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function PrivacyPage() {

  const page = await getPrivacyPage()
  
  return (
    <>
      <Header heading={page.heading} subheading='test'/>
      <Container>
        <div className='mx-auto md:pt-6 pb-10 px-6 md:px-0 text-lg text-gray-700 blog-content'>
          <Content data={page.content} />
        </div>
      </Container>
    </>
  )
}
