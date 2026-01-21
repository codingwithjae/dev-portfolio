import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/sanity/schemas';
import { myStructure } from './sanity.structure';

export default defineConfig({
    name: 'developer-portfolio',
    // Use the title the user wanted or a generic one
    title: 'Johander Campos | Studio',

    projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'hismgx2i',
    dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',

    // This is the relative path in the browser
    basePath: '/admin',

    plugins: [
        structureTool({
            structure: myStructure,
        }),
    ],

    schema: {
        types: schemaTypes as any,
    },
});
