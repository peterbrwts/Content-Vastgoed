import './globals.css'
import { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { getSettings } from '@/sanity/lib/sanity.fetch'
import { defaultMetadata } from '@/utils/default-metadata';
import ClientLayout from '@/components/global/client-layout';
import Cta from '../components/shared/cta';



export const metadata: Metadata = defaultMetadata

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  const settings = await getSettings()

  return (
    <html lang="en">
      <body>
        <ClientLayout settings={settings}>
          {children}
        </ClientLayout>
        
      </body>
    </html>
  )
}