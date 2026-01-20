export const staticData = {
    basic: {
        name: { first: "Johander", last: "Campos" },
        title: "Hey, It's Johander Campos.",
        subtitle: "Front End Developer",
        bio: `I've been working as a Front End Developer for 1 year.\nI am based in Montevideo, Uruguay.`,
        socials: {
            linkedin: "https://www.linkedin.com/in/johandercampos/",
            github: "https://github.com/codingwithjae",
        },
        repoUrl: "https://github.com/codingwithjae/dev-portfolio",
    },
    header: {
        nav: {
            downloadCv: "Download my CV",
        },
        description: {
            experience: "I've been working as a Front End Developer for 1 year.",
            location: "I am based in Montevideo, Uruguay.",
        },
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
    home: {
        skillsTitle: "Technical Skills",
        projects: {
            title: "My projects",
            description: "A curated selection of my work across different layers of architectural.",
            projectCount: "Project",
            projectsCount: "Projects",
            viewProject: "View project",
            viewCode: "View code",
        },
        blog: {
            title: "Latest Articles",
            viewAll: "View all articles →",
            readMore: "Read more",
        },
        contact: {
            title: "Got a project?",
            subtitle: "Lets Talk!",
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
            title: "Know a little more about me",
        },
        skills: [
            {
                category: "Frontend",
                skills: [
                    {
                        name: "React",
                        experience: "1 year",
                        logo: "fa-brands fa-react"
                    },
                    {
                        name: "JavaScript",
                        experience: "1.5 years",
                        logo: "fa-brands fa-js"
                    },
                    {
                        name: "TypeScript",
                        experience: "Learning",
                        logo: "fa-solid fa-code"
                    },
                    {
                        name: "HTML",
                        experience: "1.5 years",
                        logo: "fa-brands fa-html5"
                    }
                ]
            },
            {
                category: "UI/Styles",
                skills: [
                    {
                        name: "CSS",
                        experience: "1.5 years",
                        logo: "fa-brands fa-css3-alt"
                    },
                    {
                        name: "Tailwind CSS",
                        experience: "1 year",
                        logo: "fa-solid fa-wind"
                    },
                    {
                        name: "PostCSS",
                        experience: "6 months",
                        logo: "fa-solid fa-vial"
                    },
                    {
                        name: "Framer",
                        experience: "Learning",
                        logo: "fa-solid fa-wand-magic-sparkles"
                    }
                ]
            },
            {
                category: "Backend",
                skills: [
                    {
                        name: "Node JS",
                        experience: "Learning",
                        logo: "fa-brands fa-node-js"
                    },
                    {
                        name: "Express",
                        experience: "Learning",
                        logo: "fa-solid fa-server"
                    },
                    {
                        name: "Prisma",
                        experience: "Learning",
                        logo: "fa-solid fa-database"
                    },
                    {
                        name: "PostgreSQL",
                        experience: "Learning",
                        logo: "fa-solid fa-table"
                    }
                ]
            },
            {
                category: "Tools",
                skills: [
                    {
                        name: "Figma",
                        experience: "1 year",
                        logo: "fa-brands fa-figma"
                    },
                    {
                        name: "Storybook",
                        experience: "6 months",
                        logo: "fa-solid fa-book-open"
                    },
                    {
                        name: "Vitest",
                        experience: "Learning",
                        logo: "fa-solid fa-flask"
                    },
                    {
                        name: "Sanity",
                        experience: "Learning",
                        logo: "fa-solid fa-leaf"
                    }
                ]
            }
        ]
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
