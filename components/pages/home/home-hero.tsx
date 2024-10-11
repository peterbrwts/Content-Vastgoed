import Image from 'next/image'
import Box from '@/components/shared/ui/box'
import Flex from '@/components/shared/ui/flex'
import Button from '@/components/shared/button'
import GhostButton from '@/components/shared/ghostButton'
import Section from '@/components/shared/ui/section'
import Container from '@/components/global/container'

export default function HomeHero({ ...props }: {
  heading: string
  paragraph: string
  image: string
  btnText: string
  btnDestination: string
}) {

  const {
    heading,
    paragraph,
    image,
    btnText,
    btnDestination
  } = props

  return (
    <Section className='pt-6 pb-6 bg-primary text-white'>
      <Container>
        <Flex className='flex flex-col-reverse md:flex-row justify-between'>
          <Box>
            <Flex className='items-start flex-col'>
              <Heading>
                {heading}
              </Heading>
              {/* <Paragraph>
                {paragraph}
              </Paragraph> */}
              <GhostButton
                href={btnDestination}
                variant="default"
                size="default"
                className='flex items-center'
              >
                {btnText}
              </GhostButton>
            </Flex>
          </Box>
          <Box>
            <Image 
              src={image}
              width={800}
              height={800}
              sizes="(max-width: 1000px) 2000px"
              alt='Guy Content'
              className='mb-6 md:mb-0 mt-10 md:mt-6 object-contain'
            />
          </Box>
        </Flex>
      </Container>
    </Section>
  )
}

function Heading({ children }: {
  children: React.ReactNode
}) {
  return (
    <h1 className='lg:-ml-1 md:-ml-2 text-[7vw] lg:text-[5vw] font-semibold leading-none lg:mt-20 mb-6 lg:mb-32'>
      {children}
    </h1>
  )
}

function Paragraph({ children }: {
  children: React.ReactNode
}) {
  return (
    <p className='max-w-lg mt-6 md:mt-8 mb-8 md:mb-12 text-lg md:text-2xl font-light'>
      {children}
    </p>
  )
}