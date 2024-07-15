import { type Aanbod } from '@/types'
import AanbodHeader from './aanbod-header'
import AanbodOverview from './aanbod-overview'
import AanbodImageGallery from './aanbod-image-gallery'

export default function Aanbod({ aanbod }: {
  aanbod: Aanbod
}) {
  return (
    <>
      <AanbodHeader aanbod={aanbod} />
      <AanbodOverview aanbod={aanbod} />
      <AanbodImageGallery aanbod={aanbod} />
    </>
  )
}
