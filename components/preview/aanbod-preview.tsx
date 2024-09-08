"use client";
import { useParams } from "next/navigation";
import { useLiveQuery } from "@sanity/preview-kit";
import { caseAanbodSlugQuery } from "@/sanity/lib/sanity.queries";

import AanbodHeader from "../pages/kopen/kopen-header";
import AanbodOverview from "../pages/kopen/kopen-overview";
import AanbodImageGallery from "../pages/kopen/kopen-image-gallery";
import { Aanbod } from "@/types";

interface AanbodPreviewProps {
  aanbod: Aanbod
}

export default function AanbodPreview({ aanbod }: AanbodPreviewProps) {

  const params = useParams()
  const [data] = useLiveQuery(aanbod, caseAanbodSlugQuery, params)

  return (
    <>
      <AanbodHeader aanbod={data} />
      <AanbodOverview aanbod={data} />
      <AanbodImageGallery aanbod={data} />
    </>
  )
}

