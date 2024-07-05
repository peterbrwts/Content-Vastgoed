import { FiBriefcase } from "react-icons/fi";
import { StructureBuilder } from "sanity/structure";

export const AanbodItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Aanbod")
    .icon(FiBriefcase)
    .child(
      S.documentList()
        .title('Aanbod')
        .filter('_type == "aanbod"')
      )