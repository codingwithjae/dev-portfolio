/**
 * @file seo.ts
 * @description Type-safe utilities for generating SEO metadata and JSON-LD structured data.
 * Follows schema.org specifications for rich search results.
 */

// ============================================================================
// INTERFACES
// ============================================================================

/**
 * Configuration for the WebSite schema (homepage).
 */
export interface WebsiteSchemaConfig {
    /** The name of the website */
    name: string;
    /** The full URL of the homepage */
    url: string;
    /** A brief description of the website */
    description: string;
}

/**
 * Configuration for the Person schema (author/owner).
 */
export interface PersonSchemaConfig {
    /** Full name of the person */
    name: string;
    /** Job title or role */
    jobTitle: string;
    /** URL to the person's profile page */
    url: string;
    /** Array of social profile URLs */
    sameAs: string[];
    /** Optional profile image URL */
    image?: string;
}

/**
 * Configuration for the Article schema (blog posts).
 */
export interface ArticleSchemaConfig {
    /** The title of the article */
    headline: string;
    /** Full name of the author */
    author: string;
    /** ISO 8601 date string (e.g., 2026-01-19) */
    datePublished: string;
    /** Optional modification date */
    dateModified?: string;
    /** URL to the article's cover image */
    image: string;
    /** The full URL of the article */
    url: string;
    /** Brief description or excerpt */
    description: string;
}

/**
 * Configuration for BreadcrumbList schema.
 */
export interface BreadcrumbItem {
    /** Display name for the breadcrumb */
    name: string;
    /** URL path for the breadcrumb item */
    url: string;
}

// ============================================================================
// GENERATORS
// ============================================================================

/**
 * Generates JSON-LD for a WebSite entity.
 * Place on the homepage.
 * 
 * @param config - Website configuration object.
 * @returns A JSON string ready for injection into a script tag.
 * 
 * @example
 * ```ts
 * const jsonLd = generateWebsiteSchema({ name: 'My Site', url: 'https://example.com', description: '...' });
 * ```
 */
export function generateWebsiteSchema(config: WebsiteSchemaConfig): string {
    return JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: config.name,
        url: config.url,
        description: config.description,
    });
}

/**
 * Generates JSON-LD for a Person entity.
 * Ideal for portfolio homepages to establish author identity.
 * 
 * @param config - Person configuration object.
 * @returns A JSON string ready for injection.
 */
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

/**
 * Generates JSON-LD for an Article entity.
 * Use on individual blog post pages.
 * 
 * @param config - Article configuration object.
 * @returns A JSON string ready for injection.
 */
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

/**
 * Generates JSON-LD for a BreadcrumbList entity.
 * Helps search engines understand site hierarchy.
 * 
 * @param items - Array of breadcrumb items in order (home first).
 * @returns A JSON string ready for injection.
 * 
 * @example
 * ```ts
 * const breadcrumbs = generateBreadcrumbSchema([
 *   { name: 'Home', url: 'https://example.com' },
 *   { name: 'Blog', url: 'https://example.com/blog' },
 * ]);
 * ```
 */
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
