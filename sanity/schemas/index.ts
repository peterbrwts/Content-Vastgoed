import settings from "./singletons/settings";
import post from "./documents/post";
import postCategory from "./documents/post-category";
import author from "./documents/author";
import menuItem from "./documents/menu-item";
import kopen from "./documents/kopen";

const coreSchema = [
  settings,
  post,
  postCategory,
  author,
  menuItem,
  kopen,
]

// pages schema 
import homePage from "./singletons/home-page";
import kopenPage from "./singletons/kopen-page";
import blogPage from "./singletons/blog-page";
import contactPage from "./singletons/contact-page";
import gratisSchattingPage from './singletons/gratis-schatting-page';
import privacyPage from "./singletons/privacy-page";
import termsPage from "./singletons/terms-page";

const pagesSchema = [
  homePage,
  kopenPage,
  overPage,
  blogPage,
  contactPage,
  gratisSchattingPage,
  privacyPage,
  termsPage
]

// post builder schema
import postQuoteBlock from "./objects/portable-text/post-quote-block";
import postImageBlock from "./objects/portable-text/post-image-block";
import overPage from "./singletons/over-page";

const postBuilderSchema = [
  postImageBlock,
  postQuoteBlock
]

export const schemaTypes = [
  ...coreSchema,
  ...pagesSchema,
  ...postBuilderSchema
]