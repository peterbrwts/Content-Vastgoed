import { type Kopen } from '@/types'
import KopenHeader from './kopen-header'
import KopenOverview from './kopen-overview'
import KopenImageGallery from './kopen-image-gallery'

export default function Kopen({ kopen }: {
  kopen: Kopen
}) {
  return (
    <>
      <KopenHeader kopen={kopen} />
      <KopenOverview kopen={kopen} />
      <KopenImageGallery kopen={kopen} />
    </>
  )
}
