import type { PortableTextBlock } from '@portabletext/types'

export type PostCategory = {
  title: string
  slug: string
}

export type PostAuthor = {
  name: string
  description: string
  image: string
}

export type Post = {
  _id: string
  slug: string
  title: string
  image: string
  readTime: number
  author: PostAuthor
  content: PortableTextBlock
  category: PostCategory
  relatedPosts: Post[]
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type AanbodGalleryImage = {
  url: string
  alt: string
}

export type Aanbod = {
  _id: string
  title: string
  slug: string
  image: string
  typePand: string;
  location: string;
  price: number;
  shortDescription: string
  overview: PortableTextBlock
  imageGallery: AanbodGalleryImage[]
  type: string;
  bedroom: number;
  livingSurface: number;
  surface:number;
  terraceSurface:number;
  year: string;
  condition: string;
  parking: string;
  epc: string;  
  water:string;
  flood:string;
  easement:string;
  urbanism: object;
  permit: string;
  preemption: string;
  judicial: string;
  subdivision: string;
  destination: string;
  reference: string;
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export interface SettingsPayload {
  enableBottomBar: boolean
  bottomBarMessage: string
  enableBottomBarLink: boolean
  bottomBarLinkUrl: string
  bottomBarLinkText: string
  bottomBarLinkColor: string
  navbarButtonText: string
  navbarButtonLink: string
  logoText: string
  navbarMenuItems: {
    _id: string
    title: string
    link: string
  }[]
  footerTagline: string
  enableSubscribeForm: boolean
  subscribeFormTitle: string
  subscribeFormPlaceholder: string
  footerQuickLinks: {
    _id: string
    title: string
    link: string
  }[]
  footerSocialLinks: {
    _id: string
    title: string
    link: string
  }[]
  footerCopyright: string
  footerLegalLinks: {
    _id: string
    title: string
    link: string
  }[]
  enableFootnote: boolean
  enableFootnoteLink: boolean
  footerFootnoteText: string
  footerFootnoteLinkText: string
  footerFootnoteLink: string
}

export interface Section {
  title: string;
  description: string;
  image: string;
  showOnLeft?: boolean;
}

export type HomePagePayload = {
  _id: string
  heading: string
  paragraph: string
  image: string
  btnText: string
  btnDestination: string
  sections: Section[]
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type BlogPagePayload = {
  _id: string
  heading: string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}


export type AanbodPayload = {
  _id: string
  heading: string
  subheading:string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type OverPagePayload = {
  _id: string
  heading: string
  content: PortableTextBlock
  sections: Section[]
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type TermsPagePayload = {
  _id: string
  heading: string
  content: PortableTextBlock
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type PrivacyPagePayload = {
  _id: string
  heading: string
  content: PortableTextBlock
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type ContactPagePayload = {
  _id: string
  heading: string
  subheading:string
  metaTitle: string
  metaDescription: string
  metaKeywords: string
}

export type Quote = {
  quote: string
  author: string
  bgColor: string
  iconColor: string 
  textColor: string
}