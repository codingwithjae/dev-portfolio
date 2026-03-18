import type { StaticData } from "../../data/staticData";
import { DEFAULT_LOCALE, type Locale } from "../../i18n/config";
import { pickLocalizedValue } from "../../i18n/utils";
import { urlFor } from "../../lib/sanity/sanity";
import type { BlogPostDetail, PageContent } from "../../lib/sanity/sanity.types";
import type {
	ArticleSchemaConfig,
	BreadcrumbItem,
	PersonSchemaConfig,
	WebsiteSchemaConfig,
} from "./types";

export function generateWebsiteSchema(config: WebsiteSchemaConfig): string {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: config.name,
		url: config.url,
		description: config.description,
	});
}

export function generatePersonSchema(config: PersonSchemaConfig): string {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Person",
		name: config.name,
		jobTitle: config.jobTitle,
		url: config.url,
		sameAs: config.sameAs,
		...(config.image && { image: config.image }),
	});
}

export function generateArticleSchema(config: ArticleSchemaConfig): string {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@type": "Article",
		headline: config.headline,
		author: {
			"@type": "Person",
			name: config.author,
		},
		datePublished: config.datePublished,
		...(config.dateModified && { dateModified: config.dateModified }),
		image: config.image,
		url: config.url,
		description: config.description,
	});
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]): string {
	return JSON.stringify({
		"@context": "https://schema.org",
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: item.url,
		})),
	});
}

export const SITE_URL = "https://developer.johandercampos.site/";

function getSiteUrlWithoutTrailingSlash(): string {
	return SITE_URL.endsWith("/") ? SITE_URL.slice(0, -1) : SITE_URL;
}

function getLocalePathPrefix(locale: Locale): string {
	return locale === "es" ? "/es" : "";
}

export function mergeSchemas(schemas: string[]): string {
	return `[${schemas.join(", ")}]`;
}

export function getHomeSchema(
	sanityData: PageContent | null,
	staticData: StaticData,
	imageUrl?: string,
	locale: Locale = DEFAULT_LOCALE,
): string {
	const localizedSeoDescription =
		typeof sanityData?.seo?.description === "string"
			? sanityData.seo.description
			: pickLocalizedValue(sanityData?.seo?.description, locale);
	const localizedAuthorTitle =
		typeof sanityData?.author?.title === "string"
			? sanityData.author.title
			: pickLocalizedValue(sanityData?.author?.title, locale);
	const siteUrlWithoutTrailingSlash = getSiteUrlWithoutTrailingSlash();
	const localePathPrefix = getLocalePathPrefix(locale);

	const websiteSchema = generateWebsiteSchema({
		name: "Johander Campos | Software Engineer",
		url: `${siteUrlWithoutTrailingSlash}${localePathPrefix}`,
		description:
			localizedSeoDescription ||
			"Portfolio of Johander Campos, a Software Engineer specializing in building scalable and efficient web applications.",
	});

	const linkedin = sanityData?.socials?.linkedin || staticData.header.socials.linkedin;
	const github = sanityData?.socials?.github || staticData.header.socials.github;

	const personSchema = generatePersonSchema({
		name: "Johander Campos",
		jobTitle: localizedAuthorTitle || staticData.header.subtitle || "Software Engineer",
		url: `${siteUrlWithoutTrailingSlash}${localePathPrefix}`,
		sameAs: [linkedin, github].filter(Boolean) as string[],
		image: imageUrl || `${siteUrlWithoutTrailingSlash}/images/portrait.webp`,
	});

	return mergeSchemas([websiteSchema, personSchema]);
}

export function getBlogPostSchema(post: BlogPostDetail, locale: Locale = DEFAULT_LOCALE): string {
	const siteUrlWithoutTrailingSlash = getSiteUrlWithoutTrailingSlash();
	const localePathPrefix = getLocalePathPrefix(locale);
	const postUrl = `${siteUrlWithoutTrailingSlash}${localePathPrefix}/blog/${post.slug}`;
	const postImage = post.coverImage
		? urlFor(post.coverImage).width(1200).height(630).url()
		: `${siteUrlWithoutTrailingSlash}/favicon.webp`;

	const articleSchema = generateArticleSchema({
		headline: post.title,
		author: post.author?.name || "Johander Campos",
		datePublished: post.publishedAt || new Date().toISOString().split("T")[0] || "",
		image: postImage,
		url: postUrl,
		description: post.excerpt || "",
	});

	const breadcrumbSchema = generateBreadcrumbSchema([
		{
			name: locale === "es" ? "Inicio" : "Home",
			url: `${siteUrlWithoutTrailingSlash}${localePathPrefix}`,
		},
		{
			name: locale === "es" ? "Blog" : "Blog",
			url: `${siteUrlWithoutTrailingSlash}${localePathPrefix}/blog`,
		},
		{ name: post.title, url: postUrl },
	]);

	return mergeSchemas([articleSchema, breadcrumbSchema]);
}
