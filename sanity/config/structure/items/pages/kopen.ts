import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const KopenItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Panden te koop')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('kopenPage')
        .documentId('kopenPage')
        .title('Panden te koop Page')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=kopen`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=case-kopen`,
            })
            .title('Preview'),
        ])
      )