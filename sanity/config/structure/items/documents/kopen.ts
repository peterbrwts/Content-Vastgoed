import { FiBriefcase } from "react-icons/fi";
import { StructureBuilder } from "sanity/structure";

export const KopenItem = (S: StructureBuilder) =>
  S.listItem()
    .title("Panden te koop")
    .icon(FiBriefcase)
    .child(
      S.documentList()
        .title('panden te koop')
        .filter('_type == "kopen"')
      )