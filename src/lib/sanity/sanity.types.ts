import type { Locale } from "../../i18n/config";

export interface SanityImage {
	_type: "image";
	asset: {
		_ref: string;
		_type: "reference";
	};
	alt?: string;
	caption?: string;
}

export type LocalizedField<TValue extends string = string> = Partial<Record<Locale, TValue>>;

export type LocalizedString = LocalizedField<string>;

export type LocalizedText = LocalizedField<string>;

export type TranslatableStringValue = string | LocalizedString;
export type TranslatableTextValue = string | LocalizedText;

export interface BlogPost {
	_id: string;
	_type: "blogPost";
	title: string;
	slug: string;
	coverImage?: SanityImage;
	excerpt?: string;
	categories?: string[];
	publishedAt?: string;
	featured?: boolean;
}

export interface BlogPostDetail extends BlogPost {
	body?: unknown[];
	author?: {
		_id: string;
		name: string;
		image?: SanityImage;
		bio?: string;
	};
}

export interface AboutContent {
	title: string;
	intro: string;
	details: string;
}

export interface SanityAboutContent {
	title?: TranslatableStringValue;
	titleEs?: TranslatableStringValue;
	intro?: TranslatableTextValue;
	introEs?: TranslatableTextValue;
	details?: TranslatableTextValue;
	detailsEs?: TranslatableTextValue;
}

export interface ExperienceItem {
	title: string;
	role: string;
	period: string;
	thumbnail?: SanityImage | string;
	summary: string;
	highlights: string[];
	stack: string[];
	demoUrl?: string;
	docsUrl?: string;
	codeUrl?: string;
	featured?: boolean;
	order?: number;
}

export interface SanityExperienceItem {
	title: TranslatableStringValue;
	titleEs?: TranslatableStringValue;
	role: TranslatableStringValue;
	roleEs?: TranslatableStringValue;
	period: TranslatableStringValue;
	periodEs?: TranslatableStringValue;
	thumbnail?: SanityImage | string;
	summary: TranslatableTextValue;
	summaryEs?: TranslatableTextValue;
	highlights?: TranslatableStringValue[];
	highlightsEs?: TranslatableStringValue[];
	stack?: TranslatableStringValue[];
	stackEs?: TranslatableStringValue[];
	demoUrl?: string;
	docsUrl?: string;
	codeUrl?: string;
	featured?: boolean;
	order?: number;
}

export interface SanityPageProject {
	name: TranslatableStringValue;
	nameEs?: TranslatableStringValue;
	thumbnail: SanityImage;
	githubUrl?: string;
	demoUrl?: string;
	documentationUrl?: string;
	techStack: TranslatableStringValue;
	techStackEs?: TranslatableStringValue;
	category?: "frontend" | "backend" | "fullstack" | "automation-integrations";
}

export interface SanityFAQItem {
	question: TranslatableStringValue;
	questionEs?: TranslatableStringValue;
	answer: TranslatableTextValue;
	answerEs?: TranslatableTextValue;
}

export interface SanityAuthorContent {
	name: TranslatableStringValue;
	nameEs?: TranslatableStringValue;
	title: TranslatableStringValue;
	titleEs?: TranslatableStringValue;
	subtitle: TranslatableStringValue;
	subtitleEs?: TranslatableStringValue;
	bio: TranslatableTextValue;
	bioEs?: TranslatableTextValue;
}

export interface PageContent {
	_id: string;
	_type: "pageContent";
	portrait?: string;
	hero?: {
		title: string;
		subtitle: string;
		bio: string;
		experience: string;
		location: string;
	};
	cvUrl?: string;
	cvUrlEs?: string;
	socials?: {
		linkedin: string;
		github: string;
	};
	projects?: SanityPageProject[];
	about?: SanityAboutContent;
	experience?: SanityExperienceItem[];
	skills?: SkillCategory[];
	faqTitle?: TranslatableStringValue;
	faqTitleEs?: TranslatableStringValue;
	faqIntro?: TranslatableTextValue;
	faqIntroEs?: TranslatableTextValue;
	faqs?: SanityFAQItem[];
	author?: SanityAuthorContent;
	seo?: {
		title?: TranslatableStringValue;
		titleEs?: TranslatableStringValue;
		description?: TranslatableTextValue;
		descriptionEs?: TranslatableTextValue;
		ogImage?: SanityImage;
		noindex?: boolean;
	};
}

export interface SiteSettings {
	_id: string;
	_type: "siteSettings";
	siteName?: string;
	siteUrl?: string;
	defaultTitle?: string;
	titleTemplate?: string;
	defaultDescription?: string;
	defaultOgImageUrl?: string;
}

export interface Skill {
	name: string;
	experience: string;
	logo: string;
}

export interface SkillCategory {
	category: string;
	skills: Skill[];
	order?: number;
}

export interface UIProject {
	title: string;
	thumbnail: string;
	technologies: string;
	demoUrl?: string;
	codeUrl?: string;
	documentationUrl?: string;
	category: string;
}

export interface HeaderAuthor {
	name: { first: string; last: string };
	title: string;
	subtitle: string;
	bio: string;
	portrait: string | null;
}

export interface HomeSEO {
	title?: string | undefined;
	description?: string | undefined;
	ogImage: string | undefined;
	noindex?: boolean | undefined;
}
