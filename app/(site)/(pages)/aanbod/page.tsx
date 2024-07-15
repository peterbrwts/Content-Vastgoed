import { Metadata } from 'next'
import { getAllAanbod, getAanbodPage } from '@/sanity/lib/sanity.fetch'

//components
import AanbodArchive from '@/components/pages/aanbod/aanbod-archive'
import Header from '@/components/shared/header'

export async function generateMetadata(): Promise<Metadata> {

  const page = await getAanbodPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function AanbodPage() {

  const page = await getAanbodPage()
  const aanbod = await getAllAanbod()

  return (
    <>
      <Header heading={page.heading} subheading={page.subheading}/>
      <AanbodArchive aanbod={aanbod} />
    </>
  )
}
