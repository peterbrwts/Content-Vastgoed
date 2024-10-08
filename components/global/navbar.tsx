import Link from 'next/link'
import { SettingsPayload } from '@/types'
import Logo from '../../public/icons/logo.svg'
import Button from '@/components/shared/button'

interface NavbarProps {
  settings: SettingsPayload
}

export default function Navbar(props: NavbarProps) {
  
  const { settings } = props

  return (
    <header 
      className='z-50 hidden sticky top-0 md:flex backdrop-blur-sm items-center justify-between max-w-8xl mx-auto my-0 py-6 px-6 md:px-12 rounded-bl-xl rounded-br-xl border-b border-b-[#efeff1] bg-[#ffffff] bg-opacity-80'
    >
      <div className='text-primary'>
      <Link href="/" className='text-2xl uppercase tracking-widest transition hover:scale-[0.96]'>
      <Logo width={50} height={50} />
    </Link>
     
      </div>
      <nav>
        <ul className='hidden md:flex gap-12 items-center list-none'>
          {settings.navbarMenuItems.map(item => (
            <li key={item._id}>
              <Link 
                href={`${item.link}`}
                className='text-lg tracking-wider hover:underline underline-offset-[12px] decoration-2'
              >
                {item.title}
              </Link>
           </li>
          ))}
          <li>
            <Button
              href={settings.navbarButtonLink}
              variant="default"
              size="default"
            >
              {settings.navbarButtonText}
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  )
}