import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './src/lib/schemas';
import { myStructure } from './src/lib/schemas/sanity.structure';

export default defineConfig({
	name: 'developer-portfolio',
	title: 'Johander Campos | Studio',

	projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || 'hismgx2i',
	dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',

	basePath: '/admin',

	plugins: [
		structureTool({
			structure: myStructure,
		}),
	],

	schema: {
		types: schemaTypes,
	},
});
