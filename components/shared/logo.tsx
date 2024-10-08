import Link from 'next/link'
import Image from 'next/image'


interface LogoProps {
  image: string
}

export default function Logo(props: LogoProps) {

  const { image } = props

  return (
    <Link href="/" className='text-2xl uppercase tracking-widest transition hover:scale-[0.96]'>
      <Image 
              src={image}
              width={800}
              height={800}
              sizes="(max-width: 1000px) 2000px"
              alt='Guy Content'
              className='mb-10 md:mb-0 mt-10 md:mt-20 object-contain'
            />
    </Link>
  )
}