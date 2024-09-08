import { Metadata } from 'next'
import { getAllKopen, getKopenPage } from '@/sanity/lib/sanity.fetch'

//components
import KopenArchive from '@/components/pages/kopen/kopen-archive'
import Header from '@/components/shared/header'
import Cta from '@/components/shared/cta'

export async function generateMetadata(): Promise<Metadata> {

  const page = await getKopenPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function KopenPage() {

  const page = await getKopenPage()
  const kopen = await getAllKopen()

  return (
    <>
      <Header heading={page.heading} subheading={page.subheading}/>
      <KopenArchive kopen={kopen} />
      <Cta />
    </>
  )
}
