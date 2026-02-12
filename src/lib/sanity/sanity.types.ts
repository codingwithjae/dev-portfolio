export interface SanityImage {
	_type: 'image';
	asset: {
		_ref: string;
		_type: 'reference';
	};
	alt?: string;
	caption?: string;
}

export interface BlogPost {
	_id: string;
	_type: 'blogPost';
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

export interface PageContent {
	_id: string;
	_type: 'pageContent';
	portrait?: string;
	hero?: {
		title: string;
		subtitle: string;
		bio: string;
		experience: string;
		location: string;
	};
	cvUrl?: string;
	socials?: {
		linkedin: string;
		github: string;
	};
	projects?: Array<{
		name: string;
		thumbnail: SanityImage;
		githubUrl: string;
		demoUrl: string;
		techStack: string;
		category?: 'frontend' | 'backend' | 'fullstack';
	}>;
	skills?: SkillCategory[];
	faqs?: Array<{
		question: string;
		answer: string;
	}>;
	author?: {
		name: string;
		title: string;
		subtitle: string;
		bio: string;
	};
	seo?: {
		title?: string;
		description?: string;
		ogImage?: SanityImage;
		noindex?: boolean;
	};
}

export interface SiteSettings {
	_id: string;
	_type: 'siteSettings';
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
	demoUrl: string;
	codeUrl: string;
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
