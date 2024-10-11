import Image from 'next/image';
import { Kopen } from '@/types';
import Flex from '@/components/shared/ui/flex';
import Content from '@/components/shared/content';
import Container from '@/components/global/container';
import Section from '@/components/shared/ui/section';
import { FaBed, FaCalendar, FaFire, FaHeart, FaHome, FaRuler } from 'react-icons/fa';

export default function KopenOverview({ kopen }: {
  kopen: Kopen
}) {
  return (
    <Section>
      <Container>
       
        <Flex className='flex-col justify-center relative max-w-4xl mx-auto mt-4 md:my-6'>
          <div className='mb-6'>
          <div className="grid md:grid-cols-3 md:gap-4 grid-cols-2 gap-2">
      <div className="p-4 border border-primary rounded-lg ">
      <FaHome className='mb-4'/>
        <p className="font-semibold">Bewoonbaar oppervlakte</p>
        <p>{kopen.livingSurface}m²</p>
      </div>
      <div className="p-4 border border-primary rounded-lg">
      <FaRuler className='mb-4'/>
        <p className="font-semibold">Perceel oppervlakte</p>
        <p>{kopen.surface}m²</p>
      </div>
      <div className="p-4 border border-primary rounded-lg">
      <FaBed className='mb-4'/>
        <p className="font-semibold">Slaapkamers</p>
        <p>{kopen.bedroom}</p>
      </div>
      <div className="p-4 border border-primary rounded-lg">
      <FaRuler className='mb-4'/>
        <p className="font-semibold">Terras oppervlakte</p>
        <p>{kopen.terraceSurface}m²</p>
      </div>
      <div className="p-4 border border-primary rounded-lg">
      <FaCalendar className='mb-4'/>
        <p className="font-semibold">Bouwjaar</p>
        <p>{kopen.year}</p>
      </div>
      <div className="p-4 border border-primary rounded-lg">
      <FaFire className='mb-4'/>
        <p className="font-semibold">EPC</p>
        <p>{kopen.epc}</p>
      </div>
    </div>
          </div>
          <h2 className='text-primary -ml-1 text-2xl md:text-3xl font-light leading-none text-left mt-6'>Omschrijving</h2>
          <Content  data={kopen.overview} />
          <h2 className='text-primary -ml-1 text-2xl md:text-3xl font-light leading-none text-left mt-6'>Eigenschappen</h2>
          <div className="overflow-x-auto mt-6">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">Eigenschappen</th>
            <th className="border border-gray-300 px-4 py-2 text-left">Waarde</th>
          </tr>
        </thead>
        <tbody>
          
            <tr className="hover:bg-gray-50">
              <td className="border border-gray-300 px-4 py-2 font-semibold">{kopen.price}</td>
              <td className="border border-gray-300 px-4 py-2">{kopen.price}</td>
            </tr>
          
        </tbody>
      </table>
    </div>
        </Flex>
      </Container>
    </Section>
  )
}

function Heading({ children }: {
  children: React.ReactNode    
}) {
  return (
    <h2 className='mb-4 text-3xl md:text-4xl font-extralight'>
      {children}
    </h2>
  )
}