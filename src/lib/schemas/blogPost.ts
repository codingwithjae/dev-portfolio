import { defineField, defineType } from "sanity";

export default defineType({
	name: "blogPost",
	title: "Blog Post",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "title", maxLength: 96 },
			validation: (Rule) => Rule.required(),
		}),
		defineField({
			name: "coverImage",
			title: "Cover Image",
			type: "image",
			options: { hotspot: true },
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alt Text",
				},
			],
		}),
		defineField({
			name: "excerpt",
			title: "Excerpt",
			type: "text",
			rows: 3,
			description: "Brief summary for blog listing and SEO",
		}),
		defineField({
			name: "body",
			title: "Content",
			type: "array",
			of: [
				{
					type: "block",
					styles: [
						{ title: "Normal", value: "normal" },
						{ title: "H1", value: "h1" },
						{ title: "H2", value: "h2" },
						{ title: "H3", value: "h3" },
						{ title: "Quote", value: "blockquote" },
					],
					lists: [{ title: "Bullet", value: "bullet" }],
					marks: {
						decorators: [
							{ title: "Strong", value: "strong" },
							{ title: "Emphasis", value: "em" },
						],
						annotations: [
							{
								title: "URL",
								name: "link",
								type: "object",
								fields: [
									{
										title: "URL",
										name: "href",
										type: "url",
									},
								],
							},
						],
					},
				},
				{
					type: "image",
					options: { hotspot: true },
				},
			],
		}),
		defineField({
			name: "categories",
			title: "Categories",
			type: "array",
			of: [{ type: "string" }],
			options: {
				layout: "tags",
				list: [
					{ title: "JavaScript", value: "javascript" },
					{ title: "TypeScript", value: "typescript" },
					{ title: "React", value: "react" },
					{ title: "CSS", value: "css" },
					{ title: "Astro", value: "astro" },
				],
			},
		}),
		defineField({
			name: "publishedAt",
			title: "Published At",
			type: "datetime",
		}),
		defineField({
			name: "featured",
			title: "Featured Post",
			type: "boolean",
			initialValue: false,
		}),
	],
	initialValue: () => ({
		publishedAt: new Date().toISOString(),
		featured: true,
	}),
	preview: {
		select: {
			title: "title",
			media: "coverImage",
			date: "publishedAt",
		},
		prepare({ title, media, date }) {
			const formattedDate = date ? new Date(date).toLocaleDateString("es-ES") : "Draft";
			return {
				title: title || "New Blog Post",
				subtitle: formattedDate,
				media,
			};
		},
	},
});
