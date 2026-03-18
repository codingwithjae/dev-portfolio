export const staticDataEn = {
	header: {
		downloadCv: "Download CV",
		cvUrl: "https://drive.google.com/file/d/1hFZmIRvL9rnfFACMt16BVlmdjt3WXfbJ/view?usp=drive_link",
		name: { first: "Johander", last: "Campos" },
		title: "Hi, I'm Johander Campos.",
		subtitle: "Software Engineer",
		bio: "I design and build systems with a focus on software architecture, well-structured APIs, security by design, and testing strategies that ensure reliability from development to production.",
		socials: {
			linkedin: "https://www.linkedin.com/in/johandercampos/",
			github: "https://github.com/codingwithjae",
		},
		repoUrl: "https://github.com/codingwithjae/dev-portfolio",
	},

	home: {
		skillsTitle: "Core Skills",
		about: {
			title: "About me",
			intro:
				"I'm a software engineer focused on backend development, specializing in building TypeScript systems that are maintainable, secure by default, and well-documented for teams.",
			details:
				"Most of my recent work comes from independent products, where I lead architecture, API design, and end-to-end delivery. I enjoy translating product goals into reliable services and validating decisions through testing and practical documentation.\n\nI value clear boundaries between modules, predictable error handling, and continuous iteration over large rewrites. The result is software that can scale from a portfolio project to production-ready systems.",
		},

		projects: {
			title: "Featured Projects",
			description:
				"Projects built with a production mindset, spanning backend and full-stack development, grounded in clear and scalable software architecture principles, and including automation workflows for API consumption.",
			projectCount: "Project",
			projectsCount: "Projects",
			viewProject: "View project",
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
					name: "Budgeti: AI-Powered Finance App",
					techStack: "Express / TypeScript / Prisma / OpenAI API",
					demoUrl: "https://budgeti-backend.johandercampos.site/",
					githubUrl: "https://github.com/codingwithjae/budgeti",
					documentationUrl: "https://budgeti-docs.johandercampos.site/",
					category: "backend",
					thumbnail: "/budgeti-thumbnail.webp",
				},
				{
					name: "Node Lab Studio: Automation",
					techStack: "REST API / n8n",
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
				namePlaceholder: "Your name",
				emailLabel: "Email",
				emailPlaceholder: "Your email",
				messageLabel: "Message",
				messagePlaceholder: "Your message",
				submitButton: "Send message",
				sendingButton: "Sending...",
			},
		},

		faq: {
			title: "About me",
			intro:
				"Get to know more about how I work, what I focus on, and the type of team where I can bring the most value, as well as the technical approach and decisions behind my projects.",
			questions: [
				{
					question: "What kind of roles am I looking for?",
					answer:
						"I'm looking for backend or full-stack roles with a strong backend focus, where I can contribute to building real systems, participate in architectural decisions, and work on products that require reliability and scalability. I'm especially interested in teams that prioritize code quality and technical clarity.",
				},
				{
					question: "What do I usually build?",
					answer:
						"I primarily build production-oriented systems in TypeScript, including REST APIs, authentication flows, data validation, database design with Prisma/PostgreSQL, and integrations with external services (including AI APIs). I focus on making each part of the system clear, reusable, and easy to maintain.",
				},
				{
					question: "How do I work day to day?",
					answer:
						"I prioritize clarity and maintainability: I structure code into well-defined layers, build small reusable modules, and apply consistent error handling. I focus on covering critical flows with tests and iterate in short cycles to validate decisions quickly.",
				},
				{
					question: "What makes my projects different?",
					answer:
						"My projects are built for real-world scenarios, not just as demos. They include practices like secure authentication (JWT, hashing), structured validation, rate limiting, logging, automated testing, and working deployments. I aim for each project to reflect how production-ready systems are actually built.",
				},
				{
					question: "Where am I based?",
					answer:
						"I'm originally from Venezuela and currently based in Montevideo, Uruguay. I work remotely and I'm open to international opportunities.",
				},
				{
					question: "Do I do freelance work?",
					answer:
						"I take on freelance work occasionally, but my main focus right now is joining a full-time team where I can grow, take on more technical responsibility, and contribute consistently to product development.",
				},
			],
		},

		skills: [
			{
				category: "Backend",
				skills: [
					{ name: "Node.js", experience: "1 year", logo: "FaNodeJs" },
					{ name: "Express", experience: "1 year", logo: "SiExpress" },
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
		copyright: "under MIT license.",
		repoText: {
			pre: "Check out the",
			link: "code",
			post: "for this website",
		},
	},

	notFound: {
		title: "404 | Page not found",
		description: "The page you are looking for does not exist.",
		heading: "404",
		subtitle: "Page not found",
		message: "Oops. The page you're looking for seems to have drifted into the digital void.",
		buttonText: "Go home",
		buttonIcon: "fa-solid fa-house",
	},
};

export type StaticData = typeof staticDataEn;
