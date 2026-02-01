

export interface SanityImage {
    _type: 'image';
    asset: {
        _ref: string;
        _type: 'reference';
    };
    alt?: string;
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
    body?: any[];
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
