export interface WebsiteSchemaConfig {
    name: string;
    url: string;
    description: string;
}

export interface PersonSchemaConfig {
    name: string;
    jobTitle: string;
    url: string;
    sameAs: string[];
    image?: string;
}

export interface ArticleSchemaConfig {
    headline: string;
    author: string;
    datePublished: string;
    dateModified?: string;
    image: string;
    url: string;
    description: string;
}

export interface BreadcrumbItem {
    name: string;
    url: string;
}
