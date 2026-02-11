export const staticData = {
	header: {
		downloadCv: 'Download my CV',
		name: { first: 'Johander', last: 'Campos' },
		title: "Hey, I'm Johander Campos.",
		subtitle: 'Software Engineer',
		bio: `I build backend-driven web systems with TypeScript, focusing on clean architecture, well-structured APIs, security-first design, and testing strategies that ensure reliability from development to deployment.`,
		socials: {
			linkedin: 'https://www.linkedin.com/in/johandercampos/',
			github: 'https://github.com/codingwithjae',
		},
		repoUrl: 'https://github.com/codingwithjae/dev-portfolio',
	},

	home: {
		skillsTitle: 'Core Skills',

		projects: {
			title: 'Featured Projects',
			description: 'Production-like projects focused on backend architecture, security, testing, and deployments.',
			projectCount: 'Project',
			projectsCount: 'Projects',
			viewProject: 'Live demo',
			viewCode: 'Source code',
			list: [
				{
					name: 'Redsi',
					techStack: 'React / CSS / JavaScript',
					demoUrl: 'https://www.redsi.agency/',
					githubUrl: 'https://github.com/codingwithjae/redsi',
					category: 'frontend',
					thumbnail: 'https://placehold.co/600x400',
				},
				{
					name: 'Storybook Component Library',
					techStack: 'React / CSS / JavaScript / Storybook',
					demoUrl: 'https://redsi-storybook.vercel.app/',
					githubUrl: 'https://github.com/codingwithjae/redsi',
					category: 'frontend',
					thumbnail: 'https://placehold.co/600x400',
				},
			],
		},

		blog: {
			title: 'Engineering Notes',
			viewAll: 'View all articles →',
			readMore: 'Read more',
		},

		contact: {
			title: 'Open to opportunities',
			subtitle: "Let's talk!",
			form: {
				nameLabel: 'Name',
				namePlaceholder: 'Your Name',
				emailLabel: 'Email',
				emailPlaceholder: 'Your email',
				messageLabel: 'Message',
				messagePlaceholder: 'Your message',
				submitButton: 'Send Message',
				sendingButton: 'Sending...',
			},
		},

		faq: {
			title: 'A bit more about me',
			questions: [
				{
					question: 'What kind of roles am I looking for?',
					answer:
						'Backend or full-stack roles (backend-leaning). I enjoy building APIs, designing clean architectures, writing tests, and shipping reliable deployments.',
				},
				{
					question: 'What do you build most often?',
					answer:
						'Production-oriented systems with TypeScript: REST APIs, authentication, validation, database design with Prisma/PostgreSQL, and integrations (including AI services).',
				},
				{
					question: 'How do I work day-to-day?',
					answer:
						'I focus on clarity and maintainability: clean layering, small reusable modules, predictable error handling, and test coverage for critical flows. I like shipping in small iterations.',
				},
				{
					question: 'What makes my projects different from typical portfolio apps?',
					answer:
						'They’re built with real-world concerns in mind: security basics (JWT, hashing, rate limiting), structured validation, logging, automated testing, and deployments — not just UI demos.',
				},
				{
					question: 'Where am I based?',
					answer:
						"I'm Venezuelan and currently based in Montevideo, Uruguay (since 2020). Open to remote opportunities.",
				},
				{
					question: 'Do I freelance?',
					answer:
						'Occasionally — but my main focus right now is joining a team full-time where I can grow fast and contribute consistently.',
				},
			],
		},

		skills: [
			{
				category: 'Backend',
				skills: [
					{ name: 'Node.js', experience: '1 year', logo: 'FaNodeJs' },
					{ name: 'Express', experience: '1 year', logo: 'SiExpress' },
					{ name: 'PostgreSQL', experience: '1 year', logo: 'SiPostgresql' },
					{ name: 'Prisma', experience: '1 year', logo: 'SiPrisma' },
					{ name: 'JWT', experience: '1 year', logo: 'FaKey' },
					{ name: 'REST APIs', experience: '1+ year', logo: 'FaServer' },
					{ name: 'Python', experience: 'Learning', logo: 'FaPython' },
				],
			},

			{
				category: 'Tools',
				skills: [
					{ name: 'Git/GitHub', experience: '2 years', logo: 'FaGitAlt' },
					{ name: 'Vitest', experience: '1 year', logo: 'SiVitest' },
				],
			},

			{
				category: 'Frontend',
				skills: [
					{ name: 'React', experience: '1 year', logo: 'FaReact' },
					{ name: 'TypeScript', experience: '1 year', logo: 'SiTypescript' },
					{ name: 'JavaScript', experience: '2 years', logo: 'FaJs' },
					{ name: 'HTML', experience: '3 years', logo: 'FaHtml5' },
					{ name: 'CSS', experience: '3 years', logo: 'FaCss3Alt' },
					{ name: 'SEO', experience: '1 year', logo: 'FaSearch' },
				],
			},

			{
				category: 'UI / Styles',
				skills: [
					{ name: 'Tailwind CSS', experience: '1 year', logo: 'SiTailwindcss' },
					{ name: 'Figma', experience: '1 year', logo: 'FaFigma' },
					{ name: 'Framer', experience: '1 year', logo: 'SiFramer' },
				],
			},
		],
	},

	footer: {
		author: 'Johander Campos',
		copyright: 'under MIT License.',
		repoText: {
			pre: 'Check the',
			link: 'code',
			post: 'of this website',
		},
	},

	notFound: {
		title: '404 | Page Not Found',
		description: 'The page you are looking for does not exist.',
		heading: '404',
		subtitle: 'Page Not Found',
		message: "Oops! The page you're looking for seems to have wandered off into the digital void.",
		buttonText: 'Go Home',
		buttonIcon: 'fa-solid fa-house',
	},
};
