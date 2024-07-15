import { Aanbod } from '@/types'
import Grid from '@/components/shared/ui/grid'
import Section from '@/components/shared/ui/section'
import Container from '@/components/global/container'
import AanbodCard from '@/components/shared/aanbod-card'

export default function AanbodArchive({ aanbod }: {
  aanbod: Aanbod[]
}) {
  return (
    <Section className='mt-10 mb-6 md:my-16'>
      <Container>
        <Grid className='md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {aanbod.map(aanbod => (
            <li key={aanbod._id}>
              <AanbodCard aanbod={aanbod} />
            </li>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}
