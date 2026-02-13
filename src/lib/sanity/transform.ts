import { urlFor } from './sanity';
import type { PageContent, SkillCategory, UIProject, HeaderAuthor, HomeSEO, ProjectCategory } from './sanity.types';
import { staticData } from '../../data/staticData';

export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
    frontend: "Frontend",
    backend: "Backend",
    fullstack: "Full-Stack",
    "automation-integrations": "Automation & Integrations",
} as const;

export const PROJECT_CATEGORIES_ORDER = ["frontend", "backend", "fullstack", "automation-integrations"] as const;

const DEFAULT_PROJECT_CATEGORY: ProjectCategory = 'frontend';

export function mapSanityProjectsToUI(sanityProjects: PageContent['projects']): UIProject[] {
    if (!sanityProjects || sanityProjects.length === 0) {
        return staticData.home.projects.list.map((project) => ({
            title: project.name,
            thumbnail: project.thumbnail,
            technologies: project.techStack,
            demoUrl: project.demoUrl,
            documentationUrl: project.documentationUrl,
            codeUrl: project.githubUrl,
            category: (project.category as ProjectCategory) || DEFAULT_PROJECT_CATEGORY,
        }));
    }

    return sanityProjects.map((project) => ({
        title: project.name,
        thumbnail: project.thumbnail
            ? urlFor(project.thumbnail).url()
            : "https://placehold.co/600x400",
        technologies: project.techStack,
        demoUrl: project.demoUrl,
        documentationUrl: project.documentationUrl,
        codeUrl: project.githubUrl,
        category: project.category || DEFAULT_PROJECT_CATEGORY,
    }));
}

export function groupProjectsByCategory(projects: UIProject[]): Record<string, UIProject[]> {
    return projects.reduce(
        (acc, project) => {
            const category = project.category || DEFAULT_PROJECT_CATEGORY;
            if (!acc[category]) acc[category] = [];
            acc[category].push(project);
            return acc;
        },
        {} as Record<string, UIProject[]>,
    );
}

export function resolveSkillCategories(homePageContent: PageContent | null): SkillCategory[] {
    if (homePageContent?.skills && homePageContent.skills.length > 0) {
        return homePageContent.skills;
    }
    return staticData.home.skills as unknown as SkillCategory[];
}


export function extractAuthorHeader(homePageContent: PageContent | null): HeaderAuthor {
    const author = homePageContent?.author;

    const nameParts = (author?.name || '').split(' ');
    const first = nameParts[0] || (staticData.header.name.first as string);
    const last = nameParts.slice(1).join(' ') || (staticData.header.name.last as string);

    return {
        name: author?.name ? { first, last } : staticData.header.name,
        title: author?.title || staticData.header.title,
        subtitle: author?.subtitle || staticData.header.subtitle,
        bio: author?.bio || staticData.header.bio,
        portrait: homePageContent?.portrait || null,
    };
}


export function extractHomeSEO(homePageContent: PageContent | null): HomeSEO {
    const seo = homePageContent?.seo;
    return {
        title: seo?.title,
        description: seo?.description,
        ogImage: seo?.ogImage ? urlFor(seo.ogImage).url() : undefined,
        noindex: seo?.noindex || false,
    };
}
