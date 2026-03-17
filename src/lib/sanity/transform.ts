import { staticData } from "../../data/staticData";
import { urlFor } from "./sanity";
import type {
	AboutContent,
	ExperienceItem,
	HeaderAuthor,
	HomeSEO,
	PageContent,
	SkillCategory,
	UIProject,
} from "./sanity.types";

export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
	frontend: "Frontend",
	backend: "Backend",
	fullstack: "Full-Stack",
} as const;

export const PROJECT_CATEGORIES_ORDER = ["frontend", "backend", "fullstack"] as const;

export function mapSanityProjectsToUI(sanityProjects: PageContent["projects"]): UIProject[] {
	if (!sanityProjects || sanityProjects.length === 0) {
		return staticData.home.projects.list.map((project) => ({
			title: project.name,
			thumbnail: project.thumbnail,
			technologies: project.techStack,
			demoUrl: project.demoUrl || "#",
			codeUrl: project.githubUrl || "#",
			documentationUrl: project.documentationUrl || "#",
			category: project.category || "frontend",
		}));
	}

	return sanityProjects.map((project) => ({
		title: project.name,
		thumbnail: project.thumbnail ? urlFor(project.thumbnail).url() : "https://placehold.co/600x400",
		technologies: project.techStack,
		demoUrl: project.demoUrl || "#",
		codeUrl: project.githubUrl || "#",
		documentationUrl: project.documentationUrl || "#",
		category: project.category || "frontend",
	}));
}

export function groupProjectsByCategory(projects: UIProject[]): Record<string, UIProject[]> {
	return projects.reduce(
		(acc, project) => {
			const category = project.category || "frontend";
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
	return staticData.home.skills as SkillCategory[];
}

export function resolveAboutContent(homePageContent: PageContent | null): AboutContent {
	const fallback = staticData.home.about;
	const about = homePageContent?.about;

	return {
		title: about?.title || fallback.title,
		intro: about?.intro || fallback.intro,
		details: about?.details || fallback.details,
	};
}

export function resolveExperience(homePageContent: PageContent | null): ExperienceItem[] {
	const fallback = staticData.home.experience as ExperienceItem[];
	const experience = homePageContent?.experience;

	if (!experience || experience.length === 0) {
		return fallback;
	}

	return experience
		.map((item) => ({
			title: item.title,
			role: item.role,
			period: item.period,
			...(item.thumbnail ? { thumbnail: item.thumbnail } : {}),
			summary: item.summary,
			highlights: item.highlights || [],
			stack: item.stack || [],
			...(item.demoUrl ? { demoUrl: item.demoUrl } : {}),
			...(item.docsUrl ? { docsUrl: item.docsUrl } : {}),
			...(item.codeUrl ? { codeUrl: item.codeUrl } : {}),
			...(typeof item.featured === "boolean" ? { featured: item.featured } : {}),
			...(typeof item.order === "number" ? { order: item.order } : {}),
		}))
		.sort((a, b) => {
			const featuredDiff = Number(b.featured) - Number(a.featured);
			if (featuredDiff !== 0) return featuredDiff;
			return (a.order ?? 9999) - (b.order ?? 9999);
		});
}

export function extractAuthorHeader(homePageContent: PageContent | null): HeaderAuthor {
	const author = homePageContent?.author;

	const nameParts = (author?.name || "").split(" ");
	const first = nameParts[0] || (staticData.header.name.first as string);
	const last = nameParts.slice(1).join(" ") || (staticData.header.name.last as string);

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
