import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { myTheme } from './theme';
import { StudioNavBar } from './components/StudioNavBar';
import Logo from './components/Logo';
import { getDefaultDocumentNode } from './structer';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  name: 'Nicode_Studio',
  title: 'Nicode Studio',
  projectId,
  dataset,
  plugins: 
    [deskTool({
      defaultDocumentNode: getDefaultDocumentNode,
    }),
    visionTool()],
      schema: {
      types: schemaTypes,
  },
  studio: {
    components: {
      logo: Logo,
      navbar: StudioNavBar,
    },
  },
  theme: myTheme,
})
