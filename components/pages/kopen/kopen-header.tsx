import { Kopen } from '@/types'
import Tag from '@/components/shared/tag'
import Flex from '@/components/shared/ui/flex'
import Button from '@/components/shared/button'
import Header from '@/components/shared/ui/header'
import Container from '@/components/global/container'
import Image from 'next/image';
import { FaLocationArrow, FaMapPin, FaSearchLocation } from 'react-icons/fa'
import Link from 'next/link'
import { strict } from 'assert'


export default function KopenHeader({ kopen }: {
  kopen: Kopen
  
}) {

  const { title, shortDescription, location, type, price} = kopen

  const Eur = new Intl.NumberFormat('nl-BE', {
    style: 'currency',
    currency: 'EUR',
});


const address= kopen.location
const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;


  return (
    <Header className='mt-20 mb-20 -ml-1'>
      <Container>
        <Flex className='flex-col md:flex-row items-start md:items-end justify-between w-full'>
          <Flex className='flex-col items-start'>
          <span className="text-2xl font-semibold text-white bg-primary px-2">{Eur.format(price)}</span>
            <Title>
              {title}
            </Title>
            <Link 
            href={googleMapsUrl} target="_blank" rel="noopener noreferrer"
            className='flex items-center text-xl text-primary mb-4 mt-6'>
            <FaMapPin className='mr-2'/>{location}
            </Link>
            {/* <p className='flex items-center text-xl text-primary mb-4 mt-6'><FaMapPin className='mr-2'/>{location}</p> */}
            <Image 
          src={kopen.image}
          width={2000}
          height={600}
          alt={kopen.title}
          className='h-[400px] md:h-[600px] object-cover rounded-xl'
        />
          </Flex>
          {/* <Button
            href={`${url}`}
            variant="outline"
            size="large"
          >
            View Project
          </Button> */}
        </Flex>
      </Container>
    </Header>
  )
}

function Title({ children }: {
  children: React.ReactNode
}) {
  return (
    <h1 className='text-6xl font-bold text-primary mb-4 mt-6'>
      {children}
    </h1>
  )
}

function Description({ children }: {
  children: React.ReactNode
}) {
  return (
    <p className='md:max-w-md mt-6 leading-7'>
      {children}
    </p>
  )
}