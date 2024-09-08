import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getKopenBySlug } from '@/sanity/lib/sanity.fetch'
import { generateStaticSlugs } from "@/utils/generate-static-slugs";

// components
import Kopen from '@/components/pages/kopen/kopen'
import KopenPreview from '@/components/preview/kopen-preview';
import PreviewProvider from "@/components/preview/preview-provider";

interface KopenPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: KopenPageProps): Promise<Metadata> {

  const kopen = await getKopenBySlug(params.slug)

  return {
    title: kopen.metaTitle,
    description: kopen.metaDescription,
    keywords: kopen.metaKeywords,
  }
}

export async function generateStaticParams() {
  return generateStaticSlugs('kopen');
}

export default async function KopenPage({ params }: KopenPageProps) {

  const kopen = await getKopenBySlug(params.slug)
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && process.env.SANITY_API_READ_TOKEN) {
    return (
      <PreviewProvider token={process.env.SANITY_API_READ_TOKEN}>
        <KopenPreview kopen={kopen} />
      </PreviewProvider>
    );
  }

  return (
    <Kopen kopen={kopen} />
  )
}