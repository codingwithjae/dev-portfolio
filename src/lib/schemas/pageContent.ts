import { defineType, defineField } from 'sanity';

export default defineType({
    name: 'pageContent',
    title: 'Content',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Document Title',
            type: 'string',
            initialValue: 'Main Website Content',
        }),
        defineField({
            name: 'portrait',
            title: 'Portrait Image (Uploaded)',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Your profile picture. If empty, local fallback will be used.'
        }),
        defineField({
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                defineField({
                    name: 'title',
                    title: 'Greeting title',
                    type: 'string',
                    initialValue: "Hey, It's Johander Campos.",
                    description: "Example: 'Hey, It's Johander Campos.'"
                }),
                defineField({
                    name: 'subtitle',
                    title: 'Role / Subtitle',
                    type: 'string',
                    initialValue: "Front End Developer",
                    description: "Example: 'Front End Developer'"
                }),
                defineField({
                    name: 'bio',
                    title: 'Bio Text',
                    type: 'text',
                    initialValue: "I've been working as a Front End Developer for 1 year. I am based in Montevideo, Uruguay.",
                    description: "Example: 'I've been working as a...'"
                }),
            ]
        }),
        defineField({
            name: 'cvUrl',
            title: 'CV Download URL',
            type: 'url',
            initialValue: 'https://drive.google.com/uc?export=download&id=19VztvpXXoDmiCYehy0xenuqowLVIWNYa'
        }),
        defineField({
            name: 'socials',
            title: 'Social Links',
            type: 'object',
            fields: [
                defineField({ name: 'linkedin', title: 'LinkedIn URL', type: 'url', initialValue: 'https://www.linkedin.com/in/johandercampos/' }),
                defineField({ name: 'github', title: 'GitHub URL', type: 'url', initialValue: 'https://github.com/codingwithjae' }),
            ]
        }),
        defineField({
            name: 'skills',
            title: 'Skills List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'category', title: 'Category Name', type: 'string' }),
                        defineField({
                            name: 'skills',
                            title: 'Skills',
                            type: 'array',
                            of: [
                                {
                                    type: 'object',
                                    fields: [
                                        defineField({ name: 'name', title: 'Name', type: 'string' }),
                                        defineField({ name: 'experience', title: 'Experience', type: 'string' }),
                                        defineField({ name: 'logo', title: 'Icon Class (FontAwesome)', type: 'string', description: 'e.g. "fa-brands fa-react"' }),
                                    ]
                                }
                            ]
                        })
                    ]
                }
            ],
            initialValue: [
                {
                    category: "Frontend",
                    skills: [
                        { name: "React", experience: "1 year", logo: "fa-brands fa-react" },
                        { name: "JavaScript", experience: "1.5 years", logo: "fa-brands fa-js" },
                        { name: "TypeScript", experience: "Learning", logo: "fa-solid fa-code" },
                        { name: "HTML", experience: "1.5 years", logo: "fa-brands fa-html5" }
                    ]
                },
                {
                    category: "UI/Styles",
                    skills: [
                        { name: "CSS", experience: "1.5 years", logo: "fa-brands fa-css3-alt" },
                        { name: "Tailwind CSS", experience: "1 year", logo: "fa-solid fa-wind" },
                        { name: "PostCSS", experience: "6 months", logo: "fa-solid fa-vial" },
                        { name: "Framer", experience: "Learning", logo: "fa-solid fa-wand-magic-sparkles" }
                    ]
                },
                {
                    category: "Backend",
                    skills: [
                        { name: "Node JS", experience: "Learning", logo: "fa-brands fa-node-js" },
                        { name: "Express", experience: "Learning", logo: "fa-solid fa-server" },
                        { name: "Prisma", experience: "Learning", logo: "fa-solid fa-database" },
                        { name: "PostgreSQL", experience: "Learning", logo: "fa-solid fa-table" }
                    ]
                },
                {
                    category: "Tools",
                    skills: [
                        { name: "Figma", experience: "1 year", logo: "fa-brands fa-figma" },
                        { name: "Storybook", experience: "6 months", logo: "fa-solid fa-book-open" },
                        { name: "Vitest", experience: "Learning", logo: "fa-solid fa-flask" },
                        { name: "Sanity", experience: "Learning", logo: "fa-solid fa-leaf" }
                    ]
                }
            ]
        }),
        defineField({
            name: 'projects',
            title: 'Projects List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'name', title: 'Project Name', type: 'string' }),
                        defineField({ name: 'thumbnail', title: 'Thumbnail Image', type: 'image' }),
                        defineField({ name: 'githubUrl', title: 'GitHub URL', type: 'url' }),
                        defineField({ name: 'demoUrl', title: 'Demo URL', type: 'url' }),
                        defineField({ name: 'techStack', title: 'Technologies (Slash separated)', type: 'string', description: "e.g. 'React / CSS / JavaScript'" }),
                        defineField({
                            name: 'category',
                            title: 'Category',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Frontend', value: 'frontend' },
                                    { title: 'Backend', value: 'backend' },
                                    { title: 'Fullstack', value: 'fullstack' },
                                ]
                            },
                            initialValue: 'frontend'
                        })
                    ]
                }
            ],
            initialValue: [
                {
                    name: 'Redsi',
                    techStack: 'React / CSS / JavaScript',
                    demoUrl: 'https://www.redsi.agency/',
                    githubUrl: 'https://github.com/codingwithjae/redsi'
                },
                {
                    name: 'Storybook Component Library',
                    techStack: 'React / CSS / JavaScript / Storybook',
                    demoUrl: 'https://redsi-storybook.vercel.app/',
                    githubUrl: 'https://github.com/codingwithjae/redsi'
                }
            ]
        }),
        defineField({
            name: 'faqs',
            title: 'FAQ Accordion',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({ name: 'question', title: 'Question', type: 'string' }),
                        defineField({ name: 'answer', title: 'Answer', type: 'text' })
                    ]
                }
            ],
            initialValue: [
                {
                    question: "Where are you from?",
                    answer: "A Venezuelan residing in Uruguay since 2020."
                },
                {
                    question: "What is your hourly rate?",
                    answer: "The hourly rate depends on the scope and complexity of the project. It can be an hourly rate or a project-based rate."
                }
            ]
        })
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare({ title }: any) {
            return {
                title: title || 'Content',
            }
        }
    }
});
