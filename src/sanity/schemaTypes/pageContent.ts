export default {
    name: 'pageContent',
    title: 'Content',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Document Title',
            type: 'string',
            initialValue: 'Main Website Content',
        },
        {
            name: 'hero',
            title: 'Hero Section',
            type: 'object',
            fields: [
                {
                    name: 'title',
                    title: 'Greeting title',
                    type: 'string',
                    initialValue: "Hey, It's Johander Campos.",
                    description: "Example: 'Hey, It's Johander Campos.'"
                },
                {
                    name: 'subtitle',
                    title: 'Role / Subtitle',
                    type: 'string',
                    initialValue: "Front End Developer",
                    description: "Example: 'Front End Developer'"
                },
                {
                    name: 'bio',
                    title: 'Bio Text',
                    type: 'text',
                    initialValue: "I've been working as a Front End Developer for 1 year. I am based in Montevideo, Uruguay.",
                    description: "Example: 'I've been working as a...'"
                },
            ]
        },
        {
            name: 'cvUrl',
            title: 'CV Download URL',
            type: 'url',
            initialValue: 'https://drive.google.com/uc?export=download&id=19VztvpXXoDmiCYehy0xenuqowLVIWNYa'
        },
        {
            name: 'socials',
            title: 'Social Links',
            type: 'object',
            fields: [
                { name: 'linkedin', title: 'LinkedIn URL', type: 'url', initialValue: 'https://www.linkedin.com/in/johandercampos/' },
                { name: 'github', title: 'GitHub URL', type: 'url', initialValue: 'https://github.com/codingwithjae' },
            ]
        },
        {
            name: 'projects',
            title: 'Projects List',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'name', title: 'Project Name', type: 'string' },
                        { name: 'thumbnail', title: 'Thumbnail Image', type: 'image' },
                        { name: 'githubUrl', title: 'GitHub URL', type: 'url' },
                        { name: 'demoUrl', title: 'Demo URL', type: 'url' },
                        { name: 'techStack', title: 'Technologies (Slash separated)', type: 'string', description: "e.g. 'React / CSS / JavaScript'" }
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
        },
        {
            name: 'faqs',
            title: 'FAQ Accordion',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'question', title: 'Question', type: 'string' },
                        { name: 'answer', title: 'Answer', type: 'text' }
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
        }
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
}
