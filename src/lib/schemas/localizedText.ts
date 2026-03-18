import { defineField, defineType } from "sanity";

export default defineType({
	name: "localizedText",
	title: "Localized Text",
	type: "object",
	fields: [
		defineField({
			name: "en",
			title: "English",
			type: "text",
			rows: 2,
		}),
		defineField({
			name: "es",
			title: "Spanish",
			type: "text",
			rows: 2,
		}),
	],
});
