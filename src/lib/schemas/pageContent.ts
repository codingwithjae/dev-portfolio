import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'pageContent',
	title: 'Content',
	type: 'document',
	fields: [
		defineField({
			name: 'portrait',
			title: 'Portrait Image (Uploaded)',
			type: 'image',
			options: {
				hotspot: true,
			},
			description: 'Your profile picture. If empty, local fallback will be used.',
		}),

		defineField({
			name: 'cvUrl',
			title: 'CV Download URL',
			type: 'url',
			initialValue: 'https://drive.google.com/uc?export=download&id=19VztvpXXoDmiCYehy0xenuqowLVIWNYa',
		}),
		defineField({
			name: 'socials',
			title: 'Social Links',
			type: 'object',
			fields: [
				defineField({
					name: 'linkedin',
					title: 'LinkedIn URL',
					type: 'url',
					initialValue: 'https://www.linkedin.com/in/johandercampos/',
				}),
				defineField({
					name: 'github',
					title: 'GitHub URL',
					type: 'url',
					initialValue: 'https://github.com/codingwithjae',
				}),
			],
		}),

		defineField({
			name: 'projects',
			title: 'Projects List',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'name',
							title: 'Project Name',
							type: 'string',
						}),
						defineField({
							name: 'thumbnail',
							title: 'Thumbnail Image',
							type: 'image',
						}),
						defineField({
							name: 'githubUrl',
							title: 'GitHub URL',
							type: 'url',
						}),
						defineField({ name: 'demoUrl', title: 'Demo URL', type: 'url' }),
						defineField({
							name: 'techStack',
							title: 'Technologies (Slash separated)',
							type: 'string',
							description: "e.g. 'React / CSS / JavaScript'",
						}),
						defineField({
							name: 'category',
							title: 'Category',
							type: 'string',
							options: {
								list: [
									{ title: 'Frontend', value: 'frontend' },
									{ title: 'Backend', value: 'backend' },
									{ title: 'Full Stack', value: 'fullstack' },
								],
							},
							initialValue: 'frontend',
						}),
					],
				},
			],
		}),
		defineField({
			name: 'seo',
			title: 'SEO Settings',
			type: 'object',
			fields: [
				defineField({
					name: 'title',
					title: 'SEO Title',
					type: 'string',
					description: 'The title shown in browser tabs and search results.',
				}),
				defineField({
					name: 'description',
					title: 'SEO Description',
					type: 'text',
					description: 'The description shown in search results.',
				}),
				defineField({
					name: 'ogImage',
					title: 'Open Graph Image',
					type: 'image',
					description: 'Image shown when sharing the site on social media.',
				}),
				defineField({
					name: 'noindex',
					title: 'Noindex',
					type: 'boolean',
					description: 'If enabled, search engines will not index this page.',
					initialValue: false,
				}),
			],
		}),
	],
	preview: {
		select: {
			title: 'title',
		},
		prepare({ title }: { title?: string }) {
			return {
				title: title || 'Content',
			};
		},
	},
});
