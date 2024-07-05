import React, { ReactNode } from 'react';
import Container from '../global/container'
import { cn } from '@/utils/cn'

interface HeaderProps {
  children?: ReactNode
  heading: string
  subheading:string
  centerText?: boolean
}

export default function Header(props: HeaderProps) {

  const { children, heading, subheading,centerText } = props

  return (
    <header className='pt-8 md:pt-10'>
      <Container>
        <h1 
          className={cn('text-primary -ml-1 text-3xl md:text-5xl font-light leading-none text-left', {
            'text-center': centerText
          })}
        >
          {heading}
        </h1>
        <h2 
          className={cn('-ml-1 text-2xl md:text-4xl font-light leading-none text-left', {
            'text-center': centerText
          })}
        >
          {subheading}
        </h2>
        {children}
      </Container>
    </header>
  )
}
