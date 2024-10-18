// components
import { Metadata } from 'next'
import Header from '@/components/shared/header'
import Container from '@/components/global/container'
import ContactForm from '@/components/forms/contact-form'
import { getContactPage } from '@/sanity/lib/sanity.fetch'
import Button from '@/components/shared/button'

export async function generateMetadata(): Promise<Metadata> {

  const page = await getContactPage()

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.metaKeywords,
  }
}

export default async function ContactPage() {

  const page = await getContactPage()

  return (
    <div className='py-16'>
      <Container>
        <div className='flex flex-col lg:flex-row gap-16 lg:gap-40'>
          <h1 className='flex-none -ml-1 text-3xl md:text-4xl leading-none tracking-tighter'>
            {page.heading}
          </h1>
          <div>
        <div className='md:pt-6 pb-10 px-0 lg:px-6 md:px-0 text-lg text-primary'>
        <Button 
                href="mailto:guy@contentvastgoed.be"
                variant="default"
                size="default">
                Stuur me een mailtje
              </Button>
          <div>
     
      </div>
        </div>
      </div>
          <div className='flex-1'>
          {/* <ContactForm /> */}
          
          </div>
        </div>
      </Container>
    </div>
  )
}