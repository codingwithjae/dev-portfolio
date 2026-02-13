import type { StructureBuilder } from "sanity/structure";

export const myStructure = (S: StructureBuilder) =>
	S.list()
		.title("Website Management")
		.items([
			S.listItem()
				.title("Settings")
				.id("siteSettings")
				.child(
					S.editor()
						.id("siteSettings")
						.title("Settings")
						.schemaType("siteSettings")
						.documentId("siteSettings"),
				),
			S.divider(),
			S.listItem()
				.title("Page Content")
				.id("pageContent")
				.child(
					S.list()
						.title("Page Sections")
						.items([
							S.listItem()
								.title("Main Page Settings")
								.id("pageContentItem")
								.child(
									S.editor().id("pageContent").schemaType("pageContent").documentId("pageContent"),
								),
						]),
				),
			S.divider(),
			S.listItem()
				.title("Blog Posts")
				.id("blogPosts")
				.child(S.documentTypeList("blogPost").title("All Articles")),
		]);
