import { FiFolder } from "react-icons/fi";
import { StructureBuilder } from "sanity/structure";
import { BlogItem } from "./blog";
import { ContactItem } from "./contact";
import { PrivacyItem } from "./privacy";
import { TermsItem } from "./terms";
import { HomeItems } from "./home";
import { AanbodItem } from "./aanbod";
import { OverItem } from "./over";


export const PagesItem = (S: StructureBuilder) =>
  S.listItem()
    .title('Pages')
    .icon(FiFolder)
    .child(
      S.list()
        .title('Pages')
        .items([
          HomeItems(S),
          S.divider(),
          AanbodItem(S),
          OverItem(S),
          ContactItem(S),
          S.divider(),
          PrivacyItem(S),
          TermsItem(S),
          S.divider(),
        ])
    )