"use client";
import { useParams } from "next/navigation";
import { useLiveQuery } from "@sanity/preview-kit";
import { caseAanbodSlugQuery } from "@/sanity/lib/sanity.queries";

import AanbodHeader from "../pages/aanbod/aanbod-header";
import AanbodOverview from "../pages/aanbod/aanbod-overview";
import AanbodImageGallery from "../pages/aanbod/aanbod-image-gallery";
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

