import settings from "./singletons/settings";
import post from "./documents/post";
import postCategory from "./documents/post-category";
import author from "./documents/author";
import menuItem from "./documents/menu-item";
import aanbod from "./documents/aanbod";

const coreSchema = [
  settings,
  post,
  postCategory,
  author,
  menuItem,
  aanbod,
]

// pages schema 
import homePage from "./singletons/home-page";
import aanbodPage from "./singletons/aanbod-page";
import blogPage from "./singletons/blog-page";
import contactPage from "./singletons/contact-page";
import privacyPage from "./singletons/privacy-page";
import termsPage from "./singletons/terms-page";

const pagesSchema = [
  homePage,
  aanbodPage,
  blogPage,
  contactPage,
  privacyPage,
  termsPage
]

// post builder schema
import postQuoteBlock from "./objects/portable-text/post-quote-block";
import postImageBlock from "./objects/portable-text/post-image-block";

const postBuilderSchema = [
  postImageBlock,
  postQuoteBlock
]

export const schemaTypes = [
  ...coreSchema,
  ...pagesSchema,
  ...postBuilderSchema
]