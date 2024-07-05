import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const AanbodItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Aanbod')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('aanbodPage')
        .documentId('aanbodPage')
        .title('Aanbod Page')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=aanbod`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=case-aanbod`,
            })
            .title('Preview'),
        ])
      )