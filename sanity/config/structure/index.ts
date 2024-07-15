import { PagesItem } from './items/pages';
import { SettingsItem } from './items/settings';
import { PostsItem } from './items/documents/post';
import type { StructureResolver } from "sanity/structure";
import { AanbodItem } from './items/documents/aanbod';

export const structure: StructureResolver = (S, _context) =>
  S.list()
    .title('Content')
    .items([
      SettingsItem(S),
      S.divider(),
      PagesItem(S),
      S.divider(),
      AanbodItem(S),
      S.divider(),
      PostsItem(S),
      S.divider(),
    ])


  

  

  





    