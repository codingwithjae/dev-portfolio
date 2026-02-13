import { defineField, defineType } from "sanity";

export default defineType({
	name: "siteSettings",
	title: "Site Settings",
	type: "document",
	__experimental_formPreviewTitle: false,
	initialValue: {
		title: "Settings",
	},
	fields: [
		defineField({
			name: "title",
			title: "Title",
			type: "string",
			initialValue: "Settings",
			readOnly: true,
			hidden: true,
		}),
		defineField({
			name: "siteName",
			title: "Site Name",
			type: "string",
			initialValue: "Johander Campos",
		}),
		defineField({
			name: "siteUrl",
			title: "Site URL",
			type: "url",
			initialValue: "https://developer.johandercampos.com",
		}),
		defineField({
			name: "defaultTitle",
			title: "Default SEO Title",
			type: "string",
			initialValue: "Johander Campos | Software Engineer",
		}),
		defineField({
			name: "titleTemplate",
			title: "Title Template",
			type: "string",
			description: "Use %s for page title. Example: %s | Johander Campos",
			initialValue: "%s | Johander Campos",
		}),
		defineField({
			name: "defaultDescription",
			title: "Default SEO Description",
			type: "text",
			rows: 3,
			initialValue:
				"Portfolio of Johander Campos, a Software Engineer specializing in scalable and reliable web applications.",
		}),
		defineField({
			name: "defaultOgImage",
			title: "Default Open Graph Image",
			type: "image",
			options: { hotspot: true },
		}),
	],
	preview: {
		select: {
			title: "title",
			subtitle: "siteUrl",
		},
		prepare({ title, subtitle }: { title?: string; subtitle?: string }) {
			return {
				title: title || "Settings",
				subtitle: subtitle || "",
			};
		},
	},
});
