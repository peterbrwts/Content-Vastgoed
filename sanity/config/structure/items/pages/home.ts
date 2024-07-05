import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const HomeItems = (S: StructureBuilder) =>
  S.listItem()
    .title('Home')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('homePage')
        .documentId('homePage')
        .title('Home Page')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=home`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=home`,
            })
            .title('Preview'),
        ])
      )