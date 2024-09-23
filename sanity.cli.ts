import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
    project: {
        basePath: '/studio'
      },
  api: {
    projectId: "nyjc2nrg",
    dataset: "production",
  },
  server: {
    hostname: "contentvastgoed.be",
  },
  graphql: [{
    tag: "default",
    playground: true,
    generation: "gen3",
    nonNullDocumentFields: false,
  }],
  vite: (config) => config,
  autoUpdates: true,
});