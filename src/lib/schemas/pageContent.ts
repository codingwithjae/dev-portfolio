import { defineField, defineType } from "sanity";

export default defineType({
	name: "pageContent",
	title: "Content",
	type: "document",
	fields: [
		defineField({
			name: "portrait",
			title: "Portrait Image (Uploaded)",
			type: "image",
			options: {
				hotspot: true,
			},
			description: "Your profile picture. If empty, local fallback will be used.",
		}),

		defineField({
			name: "cvUrl",
			title: "CV Download URL",
			type: "url",
			initialValue:
				"https://drive.google.com/file/d/1hFZmIRvL9rnfFACMt16BVlmdjt3WXfbJ/view?usp=drive_link",
			description: "English CV download URL. If empty, the default CV URL will be used."
		}),
		defineField({
			name: "cvUrlEs",
			title: "CV Download URL (ES)",
			type: "url",
			initialValue:
				"https://drive.google.com/file/d/1QDPNXCZXzEw5TYXWU1p9btOlBwAG3uPr/view?usp=drive_link",
			description: "Spanish CV download URL. If empty, the default CV URL will be used.",
		}),
		defineField({
			name: "socials",
			title: "Social Links",
			type: "object",
			fields: [
				defineField({
					name: "linkedin",
					title: "LinkedIn URL",
					type: "url",
					initialValue: "https://www.linkedin.com/in/johandercampos/",
				}),
				defineField({
					name: "github",
					title: "GitHub URL",
					type: "url",
					initialValue: "https://github.com/codingwithjae",
				}),
			],
		}),

		defineField({
			name: "projects",
			title: "Projects List",
			type: "array",
			of: [
				{
					type: "object",
					fields: [
						defineField({
							name: "name",
							title: "Project Name",
							type: "string",
						}),
						defineField({
							name: "nameEs",
							title: "Project Name (ES)",
							type: "string",
						}),
						defineField({
							name: "thumbnail",
							title: "Thumbnail Image",
							type: "image",
						}),
						defineField({
							name: "githubUrl",
							title: "GitHub URL",
							type: "url",
						}),
						defineField({ name: "demoUrl", title: "Demo URL", type: "url" }),
						defineField({
							name: "documentationUrl",
							title: "Documentation URL",
							type: "url",
							description: "Link to the documentation page for this project.",
						}),
						defineField({
							name: "techStack",
							title: "Technologies (Slash separated)",
							type: "string",
							description: "e.g. 'React / CSS / JavaScript'",
						}),
						defineField({
							name: "techStackEs",
							title: "Technologies (Slash separated) (ES)",
							type: "string",
							description: "e.g. 'React / CSS / JavaScript'",
						}),
						defineField({
							name: "category",
							title: "Category",
							type: "string",
							options: {
								list: [
									{ title: "Frontend", value: "frontend" },
									{ title: "Backend", value: "backend" },
									{ title: "Full Stack", value: "fullstack" },
									{ title: "Automation & Integrations", value: "automation-integrations" },
								],
							},
							initialValue: "frontend",
						}),
					],
				},
			],
		}),
		defineField({
			name: "about",
			title: "About",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "About Title",
					type: "string",
					initialValue: "About Me",
				}),
				defineField({
					name: "titleEs",
					title: "About Title (ES)",
					type: "string",
				}),
				defineField({
					name: "intro",
					title: "Intro",
					type: "text",
				}),
				defineField({
					name: "introEs",
					title: "Intro (ES)",
					type: "text",
				}),
				defineField({
					name: "details",
					title: "Details",
					type: "text",
				}),
				defineField({
					name: "detailsEs",
					title: "Details (ES)",
					type: "text",
				}),
			],
		}),
		defineField({
			name: "experience",
			title: "Experience",
			type: "array",
			of: [
				defineField({
					name: "experienceItem",
					title: "Experience Item",
					type: "object",
					fields: [
						defineField({
							name: "title",
							title: "Project / Experience Title",
							type: "string",
						}),
						defineField({
							name: "titleEs",
							title: "Project / Experience Title (ES)",
							type: "string",
						}),
						defineField({
							name: "role",
							title: "Role",
							type: "string",
							initialValue: "Independent Project",
						}),
						defineField({
							name: "roleEs",
							title: "Role (ES)",
							type: "string",
						}),
						defineField({
							name: "period",
							title: "Period",
							type: "string",
						}),
						defineField({
							name: "periodEs",
							title: "Period (ES)",
							type: "string",
						}),
						defineField({
							name: "thumbnail",
							title: "Thumbnail Image",
							type: "image",
							options: {
								hotspot: true,
							},
						}),
						defineField({
							name: "summary",
							title: "Summary",
							type: "text",
						}),
						defineField({
							name: "summaryEs",
							title: "Summary (ES)",
							type: "text",
						}),
						defineField({
							name: "highlights",
							title: "Highlights",
							type: "array",
							of: [{ type: "string" }],
							options: { layout: "tags" },
						}),
						defineField({
							name: "highlightsEs",
							title: "Highlights (ES)",
							type: "array",
							of: [{ type: "string" }],
							options: { layout: "tags" },
						}),
						defineField({
							name: "stack",
							title: "Stack",
							type: "array",
							of: [{ type: "string" }],
							options: { layout: "tags" },
						}),
						defineField({
							name: "stackEs",
							title: "Stack (ES)",
							type: "array",
							of: [{ type: "string" }],
							options: { layout: "tags" },
						}),
						defineField({
							name: "demoUrl",
							title: "Demo URL",
							type: "url",
						}),
						defineField({
							name: "docsUrl",
							title: "Documentation URL",
							type: "url",
						}),
						defineField({
							name: "codeUrl",
							title: "Code URL",
							type: "url",
						}),
						defineField({
							name: "featured",
							title: "Featured",
							type: "boolean",
							initialValue: false,
						}),
						defineField({
							name: "order",
							title: "Order",
							type: "number",
							initialValue: 10,
						}),
					],
				}),
			],
		}),
		defineField({
			name: "author",
			title: "Author",
			type: "object",
			fields: [
				defineField({
					name: "name",
					title: "Name",
					type: "string",
				}),
				defineField({
					name: "nameEs",
					title: "Name (ES)",
					type: "string",
				}),
				defineField({
					name: "title",
					title: "Title",
					type: "string",
				}),
				defineField({
					name: "titleEs",
					title: "Title (ES)",
					type: "string",
				}),
				defineField({
					name: "subtitle",
					title: "Subtitle",
					type: "string",
				}),
				defineField({
					name: "subtitleEs",
					title: "Subtitle (ES)",
					type: "string",
				}),
				defineField({
					name: "bio",
					title: "Bio",
					type: "text",
				}),
				defineField({
					name: "bioEs",
					title: "Bio (ES)",
					type: "text",
				}),
			],
		}),
		defineField({
			name: "faqTitle",
			title: "FAQ Section Title",
			type: "string",
			initialValue: "About",
		}),
		defineField({
			name: "faqTitleEs",
			title: "FAQ Section Title (ES)",
			type: "string",
		}),
		defineField({
			name: "faqIntro",
			title: "FAQ Section Intro",
			type: "text",
			initialValue:
				"Quick answers about how I work, what I focus on, and the kind of team environment where I can contribute best.",
		}),
		defineField({
			name: "faqIntroEs",
			title: "FAQ Section Intro (ES)",
			type: "text",
		}),
		defineField({
			name: "faqs",
			title: "FAQ Items",
			type: "array",
			of: [
				defineField({
					name: "faqItem",
					title: "FAQ Item",
					type: "object",
					fields: [
						defineField({
							name: "question",
							title: "Question",
							type: "string",
						}),
						defineField({
							name: "questionEs",
							title: "Question (ES)",
							type: "string",
						}),
						defineField({
							name: "answer",
							title: "Answer",
							type: "text",
						}),
						defineField({
							name: "answerEs",
							title: "Answer (ES)",
							type: "text",
						}),
					],
				}),
			],
		}),
		defineField({
			name: "seo",
			title: "SEO Settings",
			type: "object",
			fields: [
				defineField({
					name: "title",
					title: "SEO Title",
					type: "string",
					description: "The title shown in browser tabs and search results.",
				}),
				defineField({
					name: "titleEs",
					title: "SEO Title (ES)",
					type: "string",
					description: "The title shown in browser tabs and search results for Spanish pages.",
				}),
				defineField({
					name: "description",
					title: "SEO Description",
					type: "text",
					description: "The description shown in search results.",
				}),
				defineField({
					name: "descriptionEs",
					title: "SEO Description (ES)",
					type: "text",
					description: "The description shown in search results for Spanish pages.",
				}),
				defineField({
					name: "ogImage",
					title: "Open Graph Image",
					type: "image",
					description: "Image shown when sharing the site on social media.",
				}),
				defineField({
					name: "noindex",
					title: "Noindex",
					type: "boolean",
					description: "If enabled, search engines will not index this page.",
					initialValue: false,
				}),
			],
		}),
	],
	preview: {
		select: {
			title: "title",
		},
		prepare({ title }: { title?: string }) {
			return {
				title: title || "Content",
			};
		},
	},
});
