import { FiFile } from "react-icons/fi";
import Iframe from "sanity-plugin-iframe-pane";
import { StructureBuilder } from "sanity/structure";

export const GratisSchattingItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Gratis schattting')
    .icon(FiFile)
    .child(
      S.document()
        .schemaType('gratisSchattingPage')
        .documentId('gratisSchattingPage')
        .title('Gratis schatting')
        .views([
          S.view.form(),
          S.view
            .component(Iframe)
            .title('Preview')
            .options({
              url: (doc: any) => doc?.slug?.current 
              ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=over`
              : `${process.env.NEXT_PUBLIC_SITE_URL}/api/preview?page=over`,
            })
            .title('Preview'),
        ])
      )