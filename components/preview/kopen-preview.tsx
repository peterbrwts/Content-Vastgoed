"use client";
import { useParams } from "next/navigation";
import { useLiveQuery } from "@sanity/preview-kit";
import { caseKopenSlugQuery } from "@/sanity/lib/sanity.queries";

import KopenHeader from "../pages/kopen/kopen-header";
import KopenOverview from "../pages/kopen/kopen-overview";
import KopenImageGallery from "../pages/kopen/kopen-image-gallery";
import { Kopen } from "@/types";

interface KopenPreviewProps {
  kopen: Kopen
}

export default function KopenPreview({ kopen }: KopenPreviewProps) {

  const params = useParams()
  const [data] = useLiveQuery(kopen, caseKopenSlugQuery, params)

  return (
    <>
      <KopenHeader kopen={data} />
      <KopenOverview kopen={data} />
      <KopenImageGallery kopen={data} />
    </>
  )
}

