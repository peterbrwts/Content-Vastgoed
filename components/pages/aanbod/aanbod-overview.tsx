import Image from 'next/image';
import { Aanbod } from '@/types';
import Flex from '@/components/shared/ui/flex';
import Content from '@/components/shared/content';
import Container from '@/components/global/container';
import Section from '@/components/shared/ui/section';

export default function AanbodOverview({ aanbod }: {
  aanbod: Aanbod
}) {
  return (
    <Section>
      <Container>
        <Image 
          src={aanbod.image}
          width={2000}
          height={600}
          alt={aanbod.title}
          className='h-[400px] md:h-[600px] object-cover rounded-xl'
        />
        <Flex className='flex-col justify-center relative max-w-4xl mx-auto mt-16 md:my-32'>
          <Heading>
            Omschrijving
          </Heading>
          <Content data={aanbod.overview} />
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