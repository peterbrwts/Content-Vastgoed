import './globals.css'
import { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { getSettings } from '@/sanity/lib/sanity.fetch'
import { defaultMetadata } from '@/utils/default-metadata';
import ClientLayout from '@/components/global/client-layout';
import Cta from '../components/shared/cta';

import { Jost } from 'next/font/google'
const jost = Jost({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  const settings = await getSettings()

  return (
    <html lang="en">
      <body className={`${jost.className}`}>
        <ClientLayout settings={settings}>
          {children}
        </ClientLayout>
        
      </body>
    </html>
  )
}