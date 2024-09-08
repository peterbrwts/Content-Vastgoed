import Link from 'next/link'
import Image from 'next/image'
import { Kopen } from '@/types'
import { FiArrowUpRight } from 'react-icons/fi'

interface KopenCardProps {
  kopen: Kopen
}

export default function KopenCard({ kopen }: KopenCardProps) {

  const { title, slug, image, location, bedroom, surface } = kopen

  return (
    <article 
      key={title} 
      className='max-w-6xl mx-auto px-6 mt-10 mb-10'
    >
      <Link 
        href={`/te-koop/${slug}`}
      >
        <div className='relative group text-white w-full h-[408px] mb-0 overflow-hidden rounded-sm'>
        <Image 
          src={image}
          width={580}
          height={800}
          sizes="(max-width: 640px) 320px, (max-width: 1600px) 584px"
          alt={title}
          className='w-full h-full object-cover transition md:hover:scale-[1.02] '
        />
        
        <div className='p-[1rem] absolute bottom-0 left-0 right-0 '>
          <div className='flex items-center justify-between py-2 md:py-3 px-4 md:px-5 text-sm font-semibold   cursor-pointer group rounded-md bg-[#f6f6f2] text-black'>
            <h2>{title} {location}</h2>
          </div>
          <div className='pt-2 text-white'>
        <p>Slaapkamers: {bedroom}</p>
        <p>Oppervlakte: {surface}m²</p>
      </div>
        </div>
        
        </div>
      
       
      </Link>
      
    </article>
  )
}
