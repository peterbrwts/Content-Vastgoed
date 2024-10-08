"use client"
import Link from 'next/link'
import Logo from '../../public/icons/logo.svg'
import SubscribeForm from './subscribe-form'
import { SettingsPayload } from '@/types'

interface FooterProps {
  settings: SettingsPayload
}

export default function Footer(props: FooterProps) {

  const { settings } = props

  return (
    <footer className='bg-sand text-white border-t'>
      <div className='max-w-8xl mx-auto p-12 pb-28 md:pb-4 lg:pb-6 px-6 md:px-12'>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-fit mr-auto pb-8 md:pb-0 border-b md:border-b-0 border-gray-100'>
            <Logo width={50} height={50} />
            {/* <p className='mt-4'>
              {settings.footerTagline}
            </p> */}
            <div className="my-4 flex flex-col gap-y-0">
            <p className="font-bold">Contact:</p>
            <a href="mailto:guy@contentvastgoed.be">
            guy@contentvastgoed.be
            </a>
            <a href="tel:0032495624471"> +32 495 62 44 71</a>
          </div>
          <div className="mb-4">
            <p className="font-bold">Adres:</p>
            <p>
              Guy Content <br />
              Waterloostraat 2 <br />
              8301 Knokke-Heist
            </p>
          </div>
            {settings.enableSubscribeForm && (
              <SubscribeForm 
                title={settings.subscribeFormTitle} 
                placeholder={settings.subscribeFormPlaceholder}
              />
            )}
          </div>
          <div className='mt-10 md:mt-0 pb-6 md:pb-0 grid grid-cols-2 gap-24 border-b md:border-b-0 border-gray-100'>
            <QuickLinks footerQuickLinks={settings.footerQuickLinks} />
            <SocialLinks footerSocialLinks={settings.footerSocialLinks} />
          </div>
        </div>
        <div className='mt-10 md:mt-24 flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col md:flex-row'>
            <p className='font-light text-sm'>
              {settings.footerCopyright}
            </p>
            {settings.enableFootnote && (
              <Footnote 
                footerFootnoteText={settings.footerFootnoteText}
                enableFootnoteLink={settings.enableFootnoteLink}
                footerFootnoteLink={settings.footerFootnoteLink}
                footerFootnoteLinkText={settings.footerFootnoteLinkText}
              />
            )}
          </div>
          <LegalLinks footerLegalLinks={settings.footerLegalLinks}/>
        </div>
      </div>
    </footer>
  )
}

interface QuickLinksProps {
  footerQuickLinks: SettingsPayload['footerQuickLinks']
}

function QuickLinks({ footerQuickLinks }: QuickLinksProps) {
  return (
    <div>
      <h5 className='mb-6 font-medium'>
        Quick Links
      </h5>
      <ul>
        {footerQuickLinks?.map((item) => (
          <li key={item._id} className='mb-4 hover:underline underline-offset-2'>
            <Link href={`${item.link}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface SocialLinksProps {
  footerSocialLinks: SettingsPayload['footerSocialLinks']
}

function SocialLinks({ footerSocialLinks }: SocialLinksProps) {
  return (
    <div>
      <h5 className='mb-6 font-medium'>
        Socials
      </h5>
      <ul>
        {footerSocialLinks?.map((item) => (
          <li key={item._id} className='mb-4 hover:underline underline-offset-2'>
            <Link href={`${item.link}`}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

interface FootnoteProps {
  footerFootnoteText: SettingsPayload['footerFootnoteText']
  enableFootnoteLink: SettingsPayload['enableFootnoteLink']
  footerFootnoteLink: SettingsPayload['footerFootnoteLink']
  footerFootnoteLinkText: SettingsPayload['footerFootnoteLinkText']
}

function Footnote(props: FootnoteProps) {

  const {
    footerFootnoteText,
    enableFootnoteLink,
    footerFootnoteLink,
    footerFootnoteLinkText
  } = props

  return (
    <span className='mt-1 md:mt-0 ml-0 md:ml-1 font-light text-sm'>
      {footerFootnoteText ?? 'A free and open source theme by'}
      &nbsp;
      {enableFootnoteLink && (
        <a 
          href={footerFootnoteLink ?? 'https://jamesrea.co'}
          target='_blank'
          rel="noopener noreferrer"
          className='font-medium text-[#0e788a] hover:underline underline-offset-8 decoration-0.5'
        >
          {footerFootnoteLinkText ?? 'James Rea'}
        </a>
      )}
    </span>
  )
}

interface LegalLinksProps {
  footerLegalLinks: SettingsPayload['footerLegalLinks']
}

function LegalLinks({ footerLegalLinks }: LegalLinksProps) {
  return (
    <div className='mt-2 md:mt-0 flex items-center gap-1'>
      {footerLegalLinks?.map((link) => (
        <div key={link._id} className='flex items-center gap-1 group'>
          <Link 
            href={link.link}
            className='mt-1 md:mt-0 text-sm hover:underline underline-offset-2'
          >
            {link.title}
          </Link>
          <span className='group-last:hidden'>
            /
          </span>
        </div>
      ))}
    </div>
  )
}
