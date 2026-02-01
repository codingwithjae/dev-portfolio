import type {
    WebsiteSchemaConfig,
    PersonSchemaConfig,
    ArticleSchemaConfig,
    BreadcrumbItem
} from "../../types/seo";


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

export const SITE_URL = "https://developer.johandercampos.com";

export function mergeSchemas(schemas: string[]): string {
    return `[${schemas.join(", ")}]`;
}

import { urlFor } from "./sanity";

export function getHomeSchema(sanityData: any, staticData: any, imageUrl?: string): string {
    const websiteSchema = generateWebsiteSchema({
        name: "Johander Campos | Front End Developer",
        url: SITE_URL,
        description: "Portfolio of Johander Campos, a Front End Developer specializing in React, TypeScript, and modern web technologies.",
    });

    const personSchema = generatePersonSchema({
        name: "Johander Campos",
        jobTitle: "Front End Developer",
        url: SITE_URL,
        sameAs: [
            sanityData?.socials?.linkedin || staticData.basic.socials.linkedin,
            sanityData?.socials?.github || staticData.basic.socials.github,
        ],
        image: imageUrl || `${SITE_URL}/images/photo.avif`,
    });

    return mergeSchemas([websiteSchema, personSchema]);
}

export function getBlogPostSchema(post: any): string {
    const postUrl = `${SITE_URL}/blog/${post.slug}`;
    const postImage = post.coverImage
        ? urlFor(post.coverImage).width(1200).height(630).url()
        : `${SITE_URL}/images/thumbnail-preview.webp`;

    const articleSchema = generateArticleSchema({
        headline: post.title,
        author: post.author?.name || "Johander Campos",
        datePublished: post.publishedAt || new Date().toISOString().split("T")[0],
        image: postImage,
        url: postUrl,
        description: post.excerpt || "",
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: SITE_URL },
        { name: "Blog", url: `${SITE_URL}/blog` },
        { name: post.title, url: postUrl },
    ]);

    return mergeSchemas([articleSchema, breadcrumbSchema]);
}
