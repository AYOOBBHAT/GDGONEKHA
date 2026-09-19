import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { sanityDataset, sanityProjectId } from "./sanity/env";
import { schemaTypes } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

export default defineConfig({
  name: "gdgonekha",
  title: "GD Goenka Kupwara",
  projectId: sanityProjectId || "placeholder",
  dataset: sanityDataset,
  basePath: "/studio",
  plugins: [structureTool({ structure })],
  schema: { types: schemaTypes },
});
