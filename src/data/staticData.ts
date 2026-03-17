export const staticData = {
	header: {
		downloadCv: "Download my CV",
		name: { first: "Johander", last: "Campos" },
		title: "Hey, I'm Johander Campos.",
		subtitle: "Software Engineer",
		bio: `I build backend-driven web systems with TypeScript, focusing on software architecture, well-structured APIs, security-first design, and testing strategies that ensure reliability from development to deployment.`,
		socials: {
			linkedin: "https://www.linkedin.com/in/johandercampos/",
			github: "https://github.com/codingwithjae",
		},
		repoUrl: "https://github.com/codingwithjae/dev-portfolio",
	},

	home: {
		skillsTitle: "Core Skills",
		about: {
			title: "About",
			intro:
				"I am a backend-leaning software engineer focused on TypeScript systems that are easy to maintain, secure by default, and documented clearly for teams.",
			details:
				"Most of my recent work comes from independent product builds where I own architecture, API design, and delivery. I enjoy translating product goals into reliable services, then validating decisions with tests and practical documentation.\n\nI value clean module boundaries, predictable error handling, and steady iteration over large risky rewrites. The result is software that can scale from a portfolio proof into production-ready workflows.",
		},
		experience: [
			{
				title: "Korta",
				role: "Independent Project",
				period: "2025 - Present",
				thumbnail: "/korta-thumbnail.webp",
				summary:
					"Link shortener platform built with a full-stack TypeScript architecture and product-grade documentation.",
				highlights: [
					"Designed a clean API layer for creating and resolving shortened links.",
					"Published project documentation to support onboarding and usage.",
					"Shipped a public demo for end-to-end validation of the product flow.",
				],
				stack: ["React", "TypeScript", "Tailwind CSS", "Express"],
				demoUrl: "https://korta.click/",
				docsUrl: "https://docs.korta.click/",
				codeUrl: "https://github.com/codingwithjae/clean-cut",
				featured: true,
				order: 1,
			},
			{
				title: "Budgeti Backend",
				role: "Independent Project",
				period: "2024 - 2025",
				thumbnail: "/budgeti-thumbnail.webp",
				summary:
					"Backend service for a personal finance mobile app workflow, including API architecture and technical docs.",
				highlights: [
					"Implemented TypeScript backend modules with a Prisma-powered data layer.",
					"Exposed a live backend demo endpoint for integration testing.",
					"Maintained dedicated documentation covering setup and API usage.",
				],
				stack: ["Node.js", "Express", "TypeScript", "Prisma", "OpenAI API"],
				demoUrl: "https://budgeti-backend.johandercampos.site/",
				docsUrl: "https://budgeti-docs.johandercampos.site/",
				codeUrl: "https://github.com/codingwithjae/budgeti",
				featured: true,
				order: 2,
			},
			{
				title: "Node Lab Studio",
				role: "Independent Project",
				period: "2024 - Present",
				thumbnail: "/node-lab-studio-thumbnail.webp",
				summary:
					"Automation workspace focused on workflow orchestration and practical documentation for integration patterns.",
				highlights: [
					"Structured automation workflows around API-first integration patterns.",
					"Documented automation guides to make workflows easier to reproduce.",
					"Used n8n-based tooling to speed up repetitive backend tasks.",
				],
				stack: ["n8n", "REST API", "TypeScript"],
				docsUrl: "https://docs.nodelabstudio.site/",
				featured: false,
				order: 3,
			},
		],

		projects: {
			title: "Featured Projects",
			description:
				"Production-like projects, some full-stack or backend architecture oriented, security, testing, and deployments.",
			projectCount: "Project",
			projectsCount: "Projects",
			viewProject: "Live demo",
			viewCode: "Source code",
			viewDocumentation: "Documentation",
			list: [
				{
					name: "Korta: Link Shortener",
					techStack: "React / Tailwind / TypeScript / Express",
					demoUrl: "https://korta.click/",
					githubUrl: "https://github.com/codingwithjae/clean-cut",
					documentationUrl: "https://docs.korta.click/",
					category: "fullstack",
					thumbnail: "/korta-thumbnail.webp",
				},
				{
					name: "Budgeti: Finance Mobile App Powered by AI",
					techStack: "Express / TypeScript / Prisma / Open AI API",
					demoUrl: "https://budgeti-backend.johandercampos.site/",
					githubUrl: "https://github.com/codingwithjae/budgeti",
					documentationUrl: "https://budgeti-docs.johandercampos.site/",
					category: "backend",
					thumbnail: "/budgeti-thumbnail.webp",
				},
				{
					name: "Node Lab Studio: Automation Wokspace",
					techStack: "RESTful API, n8n",
					demoUrl: "#",
					githubUrl: "#",
					documentationUrl: "https://docs.nodelabstudio.site/",
					category: "automation-integrations",
					thumbnail: "/node-lab-studio-thumbnail.webp",
				},
			],
		},

		blog: {
			title: "Engineering Notes",
			viewAll: "View all articles →",
			readMore: "Read more",
		},

		contact: {
			title: "Open to opportunities",
			subtitle: "Let's talk!",
			form: {
				nameLabel: "Name",
				namePlaceholder: "Your Name",
				emailLabel: "Email",
				emailPlaceholder: "Your email",
				messageLabel: "Message",
				messagePlaceholder: "Your message",
				submitButton: "Send Message",
				sendingButton: "Sending...",
			},
		},

		faq: {
			title: "About",
			intro:
				"Quick answers about how I work, what I focus on, and the kind of team environment where I can contribute best.",
			questions: [
				{
					question: "What kind of roles am I looking for?",
					answer:
						"Backend or full-stack roles (backend-leaning). I enjoy building APIs, designing clean architectures, writing tests, and shipping reliable deployments.",
				},
				{
					question: "What do you build most often?",
					answer:
						"Production-oriented systems with TypeScript: REST APIs, authentication, validation, database design with Prisma/PostgreSQL, and integrations (including AI services).",
				},
				{
					question: "How do I work day-to-day?",
					answer:
						"I focus on clarity and maintainability: clean layering, small reusable modules, predictable error handling, and test coverage for critical flows. I like shipping in small iterations.",
				},
				{
					question: "What makes my projects different from typical portfolio apps?",
					answer:
						"They’re built with real-world concerns in mind: security basics (JWT, hashing, rate limiting), structured validation, logging, automated testing, and deployments — not just UI demos.",
				},
				{
					question: "Where am I based?",
					answer:
						"I'm Venezuelan and currently based in Montevideo, Uruguay (since 2020). Open to remote opportunities.",
				},
				{
					question: "Do I freelance?",
					answer:
						"Occasionally — but my main focus right now is joining a team full-time where I can grow fast and contribute consistently.",
				},
			],
		},

		skills: [
			{
				category: "Backend",
				skills: [
					{ name: "Node.js", experience: "1 year", logo: "FaNodeJs" },
					{
						name: "Express",
						experience: "1 year",
						logo: "SiExpress",
					},
					{
						name: "PostgreSQL",
						experience: "1 year",
						logo: "SiPostgresql",
					},
					{ name: "Prisma", experience: "1 year", logo: "SiPrisma" },
					{ name: "JWT", experience: "1 year", logo: "FaKey" },
					{
						name: "REST APIs",
						experience: "1+ year",
						logo: "FaServer",
					},
					{
						name: "Python",
						experience: "Learning",
						logo: "FaPython",
					},
				],
			},

			{
				category: "Tools",
				skills: [
					{
						name: "Git/GitHub",
						experience: "2 years",
						logo: "FaGitAlt",
					},
					{ name: "n8n", experience: "1 year", logo: "SiN8n" },
					{ name: "Vitest", experience: "1 year", logo: "SiVitest" },
				],
			},

			{
				category: "Frontend",
				skills: [
					{ name: "React", experience: "1 year", logo: "FaReact" },
					{ name: "Astro", experience: "1 year", logo: "SiAstro" },
					{
						name: "TypeScript",
						experience: "1 year",
						logo: "SiTypescript",
					},
					{ name: "JavaScript", experience: "2 years", logo: "FaJs" },
					{ name: "HTML", experience: "3 years", logo: "FaHtml5" },
					{ name: "CSS", experience: "3 years", logo: "FaCss3Alt" },
					{ name: "SEO", experience: "1 year", logo: "FaSearch" },
				],
			},

			{
				category: "UI / Styles",
				skills: [
					{
						name: "Tailwind CSS",
						experience: "1 year",
						logo: "SiTailwindcss",
					},
					{ name: "Figma", experience: "1 year", logo: "FaFigma" },
					{ name: "Framer", experience: "1 year", logo: "SiFramer" },
				],
			},
		],
	},

	footer: {
		author: "Johander Campos",
		copyright: "under MIT License.",
		repoText: {
			pre: "Check the",
			link: "code",
			post: "of this website",
		},
	},

	notFound: {
		title: "404 | Page Not Found",
		description: "The page you are looking for does not exist.",
		heading: "404",
		subtitle: "Page Not Found",
		message: "Oops! The page you're looking for seems to have wandered off into the digital void.",
		buttonText: "Go Home",
		buttonIcon: "fa-solid fa-house",
	},
};
