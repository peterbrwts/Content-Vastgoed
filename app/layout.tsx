import './globals.css'
import { Metadata } from 'next';
import React, { ReactNode } from 'react';
import { getSettings } from '@/sanity/lib/sanity.fetch'
import { defaultMetadata } from '@/utils/default-metadata';
import ClientLayout from '@/components/global/client-layout';
import Cta from '../components/shared/cta';

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = defaultMetadata

interface RootLayoutProps {
  children: ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {

  const settings = await getSettings()

  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ClientLayout settings={settings}>
          {children}
          <Cta />
        </ClientLayout>
        
      </body>
    </html>
  )
}