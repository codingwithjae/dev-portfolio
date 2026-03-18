import type { StaticData } from "./staticData.en";

export const staticDataEs: StaticData = {
	header: {
		downloadCv: "Descargar CV",
		cvUrl: "https://drive.google.com/file/d/1QDPNXCZXzEw5TYXWU1p9btOlBwAG3uPr/view?usp=drive_link",
		name: { first: "Johander", last: "Campos" },
		title: "Hola, soy Johander Campos.",
		subtitle: "Ingeniero de Software",
		bio: "Diseño y construyo sistemas con enfoque en arquitectura de software, APIs bien estructuradas, seguridad por diseño y estrategias de testing que garantizan confiabilidad desde el desarrollo hasta producción.",
		socials: {
			linkedin: "https://www.linkedin.com/in/johandercampos/",
			github: "https://github.com/codingwithjae",
		},
		repoUrl: "https://github.com/codingwithjae/dev-portfolio",
	},

	home: {
		skillsTitle: "Habilidades Clave",
		about: {
			title: "Sobre mí",
			intro:
				"Soy ingeniero de software con enfoque en backend, especializado en construir sistemas en TypeScript que sean mantenibles, seguros por defecto y bien documentados para equipos.",
			details:
				"Gran parte de mi trabajo reciente proviene de productos independientes, donde lidero la arquitectura, el diseño de APIs y la entrega end-to-end. Disfruto traducir objetivos de producto en servicios confiables y validar decisiones mediante pruebas y documentación práctica.\n\nValoro los límites claros entre módulos, el manejo predecible de errores y la iteración constante por encima de grandes reescrituras. El resultado es software que puede escalar desde un proyecto de portafolio hasta entornos de producción.",
		},

		projects: {
			title: "Proyectos Destacados",
			description:
				"Proyectos pensados para producción, desarrollos backend y full-stack, construidos sobre principios claros y escalables de arquitectura de software, e incluyendo flujos de automatización para el consumo de APIs.",
			projectCount: "Proyecto",
			projectsCount: "Proyectos",
			viewProject: "Ver proyecto",
			viewCode: "Código fuente",
			viewDocumentation: "Documentación",
			list: [
				{
					name: "Korta: Acortador de enlaces",
					techStack: "React / Tailwind / TypeScript / Express",
					demoUrl: "https://korta.click/",
					githubUrl: "https://github.com/codingwithjae/clean-cut",
					documentationUrl: "https://docs.korta.click/",
					category: "fullstack",
					thumbnail: "/korta-thumbnail.webp",
				},
				{
					name: "Budgeti: App de finanzas con IA",
					techStack: "Express / TypeScript / Prisma / OpenAI API",
					demoUrl: "https://budgeti-backend.johandercampos.site/",
					githubUrl: "https://github.com/codingwithjae/budgeti",
					documentationUrl: "https://budgeti-docs.johandercampos.site/",
					category: "backend",
					thumbnail: "/budgeti-thumbnail.webp",
				},
				{
					name: "Node Lab Studio: Automatización",
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
			title: "Notas de Ingeniería",
			viewAll: "Ver todos los artículos →",
			readMore: "Leer más",
		},

		contact: {
			title: "Abierto a oportunidades",
			subtitle: "¡Hablemos!",
			form: {
				nameLabel: "Nombre",
				namePlaceholder: "Tu nombre",
				emailLabel: "Correo electrónico",
				emailPlaceholder: "Tu correo",
				messageLabel: "Mensaje",
				messagePlaceholder: "Tu mensaje",
				submitButton: "Enviar mensaje",
				sendingButton: "Enviando...",
			},
		},

		faq: {
			title: "Sobre mí",
			intro:
				"onoce un poco más sobre cómo trabajo, en qué me enfoco y el tipo de equipo donde puedo aportar más valor, así como el enfoque técnico y las decisiones que guían mis proyectos.",
			questions: [
				{
					question: "¿Qué tipo de roles busco?",
					answer:
						"Busco roles backend o full-stack con un fuerte enfoque en backend, donde pueda participar en la construcción de sistemas reales, aportar en decisiones de arquitectura y trabajar en productos que requieran confiabilidad y escalabilidad. Me interesa formar parte de equipos donde la calidad del código y la claridad técnica sean una prioridad.",
				},
				{
					question: "¿Qué suelo construir?",
					answer:
						"Principalmente construyo sistemas orientados a producción en TypeScript, incluyendo APIs REST, flujos de autenticación, validación de datos, diseño de bases de datos con Prisma/PostgreSQL e integraciones con servicios externos (incluyendo APIs de IA). Suelo enfocarme en que cada pieza del sistema sea clara, reutilizable y fácil de mantener.",
				},
				{
					question: "¿Cómo trabajo en el día a día?",
					answer:
						"Trabajo priorizando la claridad y la mantenibilidad: organizo el código en capas bien definidas, construyo módulos pequeños y reutilizables, y aplico un manejo de errores consistente. Me enfoco en cubrir flujos críticos con pruebas y avanzar mediante iteraciones cortas que permitan validar decisiones rápidamente.",
				},
				{
					question: "¿Qué diferencia mis proyectos?",
					answer:
						"Mis proyectos están pensados para escenarios reales, no solo como demostraciones. Incluyen prácticas como autenticación segura (JWT, hashing), validación estructurada, rate limiting, logging, testing automatizado y despliegues funcionales. Busco que cada proyecto refleje cómo se construiría un sistema listo para producción.",
				},
				{
					question: "¿Dónde estoy ubicado?",
					answer:
						"Soy venezolano y actualmente vivo en Montevideo, Uruguay. Trabajo de forma remota y estoy abierto a oportunidades internacionales.",
				},
				{
					question: "¿Trabajo como freelance?",
					answer:
						"Realizo trabajos freelance de forma puntual, pero actualmente mi principal objetivo es integrarme a un equipo full-time donde pueda crecer, asumir más responsabilidad técnica y aportar de forma consistente en el desarrollo de producto.",
				},
			],
		},

		skills: [
			{
				category: "Backend",
				skills: [
					{ name: "Node.js", experience: "1 año", logo: "FaNodeJs" },
					{ name: "Express", experience: "1 año", logo: "SiExpress" },
					{
						name: "PostgreSQL",
						experience: "1 año",
						logo: "SiPostgresql",
					},
					{ name: "Prisma", experience: "1 año", logo: "SiPrisma" },
					{ name: "JWT", experience: "1 año", logo: "FaKey" },
					{
						name: "REST APIs",
						experience: "1+ año",
						logo: "FaServer",
					},
					{
						name: "Python",
						experience: "Aprendiendo",
						logo: "FaPython",
					},
				],
			},
			{
				category: "Herramientas",
				skills: [
					{
						name: "Git/GitHub",
						experience: "2 años",
						logo: "FaGitAlt",
					},
					{ name: "n8n", experience: "1 año", logo: "SiN8n" },
					{ name: "Vitest", experience: "1 año", logo: "SiVitest" },
				],
			},
			{
				category: "Frontend",
				skills: [
					{ name: "React", experience: "1 año", logo: "FaReact" },
					{ name: "Astro", experience: "1 año", logo: "SiAstro" },
					{
						name: "TypeScript",
						experience: "1 año",
						logo: "SiTypescript",
					},
					{ name: "JavaScript", experience: "2 años", logo: "FaJs" },
					{ name: "HTML", experience: "3 años", logo: "FaHtml5" },
					{ name: "CSS", experience: "3 años", logo: "FaCss3Alt" },
					{ name: "SEO", experience: "1 año", logo: "FaSearch" },
				],
			},
			{
				category: "UI / Estilos",
				skills: [
					{
						name: "Tailwind CSS",
						experience: "1 año",
						logo: "SiTailwindcss",
					},
					{ name: "Figma", experience: "1 año", logo: "FaFigma" },
					{ name: "Framer", experience: "1 año", logo: "SiFramer" },
				],
			},
		],
	},

	footer: {
		author: "Johander Campos",
		copyright: "bajo licencia MIT.",
		repoText: {
			pre: "Revisa el",
			link: "código",
			post: "de este sitio web",
		},
	},

	notFound: {
		title: "404 | Página no encontrada",
		description: "La página que buscas no existe.",
		heading: "404",
		subtitle: "Página no encontrada",
		message: "Ups. La página que buscas parece haberse perdido en el vacío digital.",
		buttonText: "Ir al inicio",
		buttonIcon: "fa-solid fa-house",
	},
};
