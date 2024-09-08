import { Metadata } from "next";
import { draftMode } from "next/headers";
import { getAanbodBySlug } from '@/sanity/lib/sanity.fetch'
import { generateStaticSlugs } from "@/utils/generate-static-slugs";

// components
import Aanbod from '@/components/pages/kopen/aanbod'
import AanbodPreview from '@/components/preview/aanbod-preview';
import PreviewProvider from "@/components/preview/preview-provider";

interface AanbodPageProps {
  params: { slug: string }
}

export async function generateMetadata({ params }: AanbodPageProps): Promise<Metadata> {

  const aanbod = await getAanbodBySlug(params.slug)

  return {
    title: aanbod.metaTitle,
    description: aanbod.metaDescription,
    keywords: aanbod.metaKeywords,
  }
}

export async function generateStaticParams() {
  return generateStaticSlugs('aanbod');
}

export default async function AanbodPage({ params }: AanbodPageProps) {

  const aanbod = await getAanbodBySlug(params.slug)
  const isDraftMode = draftMode().isEnabled;

  if (isDraftMode && process.env.SANITY_API_READ_TOKEN) {
    return (
      <PreviewProvider token={process.env.SANITY_API_READ_TOKEN}>
        <AanbodPreview aanbod={aanbod} />
      </PreviewProvider>
    );
  }

  return (
    <Aanbod aanbod={aanbod} />
  )
}