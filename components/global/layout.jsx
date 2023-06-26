import { useEffect, useState } from 'react'
import { getSettings } from '@/sanity/utils'

// components
import Footer from './footer'
import Navbar from './navbar'
import Topbar from './topbar'

// font
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  
  const [settings, setSettings] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    fetchSettings()
  }, [])
  
  const fetchSettings = async () => {
    const siteSettings = await getSettings()
    setSettings(siteSettings)
    setIsLoading(false)
  }

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className={`${inter.className}`}>
      {settings.enableTopbar && (
        <Topbar 
          message={settings.topbarMessage} 
          enableTopbarLink={settings.enableTopbarLink}
          topbarLinkUrl={settings.topbarLinkUrl} 
          topbarLinkText={settings.topbarLinkText}
          topbarLinkColor={settings.topbarLinkColor}
        />
      )}
      <Navbar 
        buttonText={settings.navbarButtonText} 
        buttonLink={settings.navbarButtonLink}
        logoText={settings.logoText}
        menuItems={settings.navbarMenuItems}
      />
      <main className='max-w-7xl mx-auto my-0 px-16'>
        {children}
      </main>
      <Footer 
        logoText={settings.logoText}
      />
    </div>
  )
}