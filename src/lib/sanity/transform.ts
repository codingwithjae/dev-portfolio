import type { StaticData } from "../../data/staticData";
import { getStaticData } from "../../data/staticData";
import { DEFAULT_LOCALE, type Locale } from "../../i18n/config";
import { pickLocalizedValue } from "../../i18n/utils";
import { urlFor } from "./sanity";
import type {
	AboutContent,
	ExperienceItem,
	HeaderAuthor,
	HomeSEO,
	PageContent,
	SkillCategory,
	TranslatableStringValue,
	TranslatableTextValue,
	UIProject,
} from "./sanity.types";

export const CATEGORY_DISPLAY_NAMES: Record<string, string> = {
	frontend: "Frontend",
	backend: "Backend",
	fullstack: "Full-Stack",
	"automation-integrations": "Automation & Integrations",
} as const;

export const PROJECT_CATEGORIES_ORDER = [
	"frontend",
	"backend",
	"fullstack",
	"automation-integrations",
] as const;

function resolveLocalizedProjectTitle(
	project: NonNullable<PageContent["projects"]>[number],
	locale: Locale,
	fallbackProjectName: string,
): string {
	const localizedProjectTitle = resolveLocalizedString(
		project.name,
		locale,
		fallbackProjectName,
		project.nameEs,
	);

	return localizedProjectTitle.trim() || fallbackProjectName;
}

function resolveLocalizedString(
	value: TranslatableStringValue | undefined,
	locale: Locale,
	fallbackValue: string,
	spanishValue?: TranslatableStringValue,
): string {
	if (locale === "es") {
		const localizedSpanishValue =
			typeof spanishValue === "string" ? spanishValue : pickLocalizedValue(spanishValue, locale);

		if (localizedSpanishValue) {
			return localizedSpanishValue;
		}
	}

	if (typeof value === "string") {
		return value || fallbackValue;
	}

	const localizedValue = pickLocalizedValue(value, locale);
	return localizedValue || fallbackValue;
}

function resolveLocalizedText(
	value: TranslatableTextValue | undefined,
	locale: Locale,
	fallbackValue: string,
	spanishValue?: TranslatableTextValue,
): string {
	if (locale === "es") {
		const localizedSpanishValue =
			typeof spanishValue === "string" ? spanishValue : pickLocalizedValue(spanishValue, locale);

		if (localizedSpanishValue) {
			return localizedSpanishValue;
		}
	}

	if (typeof value === "string") {
		return value || fallbackValue;
	}

	const localizedValue = pickLocalizedValue(value, locale);
	return localizedValue || fallbackValue;
}

export function mapSanityProjectsToUI(
	sanityProjects: PageContent["projects"],
	locale: Locale = DEFAULT_LOCALE,
): UIProject[] {
	const localizedStaticData = getStaticData(locale);
	const fallbackProjects = localizedStaticData.home.projects.list;

	if (!sanityProjects || sanityProjects.length === 0) {
		return fallbackProjects.map((project: StaticData["home"]["projects"]["list"][number]) => ({
			title: project.name,
			thumbnail: project.thumbnail,
			technologies: project.techStack,
			...(project.demoUrl ? { demoUrl: project.demoUrl } : {}),
			...(project.githubUrl ? { codeUrl: project.githubUrl } : {}),
			...(project.documentationUrl ? { documentationUrl: project.documentationUrl } : {}),
			category: project.category || "frontend",
		}));
	}

	return sanityProjects.map((project, projectIndex) => {
		const fallbackProject = fallbackProjects[projectIndex];
		const fallbackProjectName = fallbackProject?.name ?? "Untitled project";
		const fallbackProjectTechStack = fallbackProject?.techStack ?? "";

		return {
			title: resolveLocalizedProjectTitle(project, locale, fallbackProjectName),
			thumbnail: project.thumbnail
				? urlFor(project.thumbnail).url()
				: (fallbackProject?.thumbnail ?? "https://placehold.co/600x400"),
			technologies: resolveLocalizedString(
				project.techStack,
				locale,
				fallbackProjectTechStack,
				project.techStackEs,
			),
			...(project.demoUrl
				? { demoUrl: project.demoUrl }
				: fallbackProject?.demoUrl
					? { demoUrl: fallbackProject.demoUrl }
					: {}),
			...(project.githubUrl
				? { codeUrl: project.githubUrl }
				: fallbackProject?.githubUrl
					? { codeUrl: fallbackProject.githubUrl }
					: {}),
			...(project.documentationUrl
				? { documentationUrl: project.documentationUrl }
				: fallbackProject?.documentationUrl
					? { documentationUrl: fallbackProject.documentationUrl }
					: {}),
			category: project.category || fallbackProject?.category || "frontend",
		};
	});
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

export function resolveSkillCategories(
	homePageContent: PageContent | null,
	locale: Locale = DEFAULT_LOCALE,
): SkillCategory[] {
	const localizedStaticData = getStaticData(locale);

	if (homePageContent?.skills && homePageContent.skills.length > 0) {
		return homePageContent.skills;
	}
	return localizedStaticData.home.skills as SkillCategory[];
}

export function resolveAboutContent(
	homePageContent: PageContent | null,
	locale: Locale = DEFAULT_LOCALE,
): AboutContent {
	const fallback = getStaticData(locale).home.about;
	const about = homePageContent?.about;

	return {
		title: resolveLocalizedString(about?.title, locale, fallback.title, about?.titleEs),
		intro: resolveLocalizedText(about?.intro, locale, fallback.intro, about?.introEs),
		details: resolveLocalizedText(about?.details, locale, fallback.details, about?.detailsEs),
	};
}

export function resolveExperience(
	homePageContent: PageContent | null,
	locale: Locale = DEFAULT_LOCALE,
): ExperienceItem[] {
	const fallbackExperienceItems: ExperienceItem[] = [];
	const experience = homePageContent?.experience;

	if (!experience || experience.length === 0) {
		return fallbackExperienceItems;
	}

	return experience
		.map((item, itemIndex) => {
			const fallbackExperienceItem = fallbackExperienceItems[itemIndex];
			const maximumHighlightsLength = Math.max(
				item.highlights?.length ?? 0,
				item.highlightsEs?.length ?? 0,
			);
			const resolvedHighlights =
				maximumHighlightsLength > 0
					? Array.from({ length: maximumHighlightsLength }, (_, highlightIndex) =>
							resolveLocalizedString(
								item.highlights?.[highlightIndex],
								locale,
								fallbackExperienceItem?.highlights?.[highlightIndex] ?? "",
								item.highlightsEs?.[highlightIndex],
							),
						)
					: (fallbackExperienceItem?.highlights ?? []);

			const maximumStackLength = Math.max(item.stack?.length ?? 0, item.stackEs?.length ?? 0);
			const resolvedStack =
				maximumStackLength > 0
					? Array.from({ length: maximumStackLength }, (_, technologyIndex) =>
							resolveLocalizedString(
								item.stack?.[technologyIndex],
								locale,
								fallbackExperienceItem?.stack?.[technologyIndex] ?? "",
								item.stackEs?.[technologyIndex],
							),
						)
					: (fallbackExperienceItem?.stack ?? []);

			return {
				title: resolveLocalizedString(
					item.title,
					locale,
					fallbackExperienceItem?.title ?? "",
					item.titleEs,
				),
				role: resolveLocalizedString(
					item.role,
					locale,
					fallbackExperienceItem?.role ?? "",
					item.roleEs,
				),
				period: resolveLocalizedString(
					item.period,
					locale,
					fallbackExperienceItem?.period ?? "",
					item.periodEs,
				),
				...(item.thumbnail
					? { thumbnail: item.thumbnail }
					: fallbackExperienceItem?.thumbnail
						? { thumbnail: fallbackExperienceItem.thumbnail }
						: {}),
				summary: resolveLocalizedText(
					item.summary,
					locale,
					fallbackExperienceItem?.summary ?? "",
					item.summaryEs,
				),
				highlights: resolvedHighlights,
				stack: resolvedStack,
				...(item.demoUrl
					? { demoUrl: item.demoUrl }
					: fallbackExperienceItem?.demoUrl
						? { demoUrl: fallbackExperienceItem.demoUrl }
						: {}),
				...(item.docsUrl
					? { docsUrl: item.docsUrl }
					: fallbackExperienceItem?.docsUrl
						? { docsUrl: fallbackExperienceItem.docsUrl }
						: {}),
				...(item.codeUrl
					? { codeUrl: item.codeUrl }
					: fallbackExperienceItem?.codeUrl
						? { codeUrl: fallbackExperienceItem.codeUrl }
						: {}),
				...(typeof item.featured === "boolean"
					? { featured: item.featured }
					: typeof fallbackExperienceItem?.featured === "boolean"
						? { featured: fallbackExperienceItem.featured }
						: {}),
				...(typeof item.order === "number"
					? { order: item.order }
					: typeof fallbackExperienceItem?.order === "number"
						? { order: fallbackExperienceItem.order }
						: {}),
			};
		})
		.sort((a, b) => {
			const featuredDiff = Number(b.featured) - Number(a.featured);
			if (featuredDiff !== 0) return featuredDiff;
			return (a.order ?? 9999) - (b.order ?? 9999);
		});
}

export function extractAuthorHeader(
	homePageContent: PageContent | null,
	locale: Locale = DEFAULT_LOCALE,
): HeaderAuthor {
	const localizedStaticData = getStaticData(locale);
	const author = homePageContent?.author;
	const resolvedAuthorName = resolveLocalizedString(
		author?.name,
		locale,
		`${localizedStaticData.header.name.first} ${localizedStaticData.header.name.last}`,
		author?.nameEs,
	);

	const nameParts = resolvedAuthorName.split(" ");
	const first = nameParts[0] || (localizedStaticData.header.name.first as string);
	const last = nameParts.slice(1).join(" ") || (localizedStaticData.header.name.last as string);

	return {
		name: { first, last },
		title: resolveLocalizedString(
			author?.title,
			locale,
			localizedStaticData.header.title,
			author?.titleEs,
		),
		subtitle: resolveLocalizedString(
			author?.subtitle,
			locale,
			localizedStaticData.header.subtitle,
			author?.subtitleEs,
		),
		bio: resolveLocalizedText(author?.bio, locale, localizedStaticData.header.bio, author?.bioEs),
		portrait: homePageContent?.portrait || null,
	};
}

export function extractHomeSEO(
	homePageContent: PageContent | null,
	locale: Locale = DEFAULT_LOCALE,
): HomeSEO {
	const localizedStaticData = getStaticData(locale);
	const seo = homePageContent?.seo;
	return {
		title: resolveLocalizedString(
			seo?.title,
			locale,
			`${localizedStaticData.header.name.first} ${localizedStaticData.header.name.last} | ${localizedStaticData.header.subtitle}`,
			seo?.titleEs,
		),
		description: resolveLocalizedText(
			seo?.description,
			locale,
			localizedStaticData.header.bio,
			seo?.descriptionEs,
		),
		ogImage: seo?.ogImage ? urlFor(seo.ogImage).url() : undefined,
		noindex: seo?.noindex || false,
	};
}

export function resolveFaqContent(
	homePageContent: PageContent | null,
	locale: Locale = DEFAULT_LOCALE,
) {
	const localizedStaticData = getStaticData(locale);
	const fallbackFrequentlyAskedQuestions = localizedStaticData.home.faq.questions;

	const frequentlyAskedQuestions =
		homePageContent?.faqs && homePageContent.faqs.length > 0
			? homePageContent.faqs.map((faqItem, faqIndex) => ({
					question: resolveLocalizedString(
						faqItem.question,
						locale,
						fallbackFrequentlyAskedQuestions[faqIndex]?.question ?? "",
						faqItem.questionEs,
					),
					answer: resolveLocalizedText(
						faqItem.answer,
						locale,
						fallbackFrequentlyAskedQuestions[faqIndex]?.answer ?? "",
						faqItem.answerEs,
					),
				}))
			: fallbackFrequentlyAskedQuestions;

	return {
		title: resolveLocalizedString(
			homePageContent?.faqTitle,
			locale,
			localizedStaticData.home.faq.title,
			homePageContent?.faqTitleEs,
		),
		intro: resolveLocalizedText(
			homePageContent?.faqIntro,
			locale,
			localizedStaticData.home.faq.intro,
			homePageContent?.faqIntroEs,
		),
		questions: frequentlyAskedQuestions,
	};
}
