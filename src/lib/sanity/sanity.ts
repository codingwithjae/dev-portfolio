import { sanityClient } from 'sanity:client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import type { BlogPost, BlogPostDetail, PageContent, SkillCategory } from './sanity.types';

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source).auto('format');

export async function getPageContent(): Promise<PageContent | null> {
  return sanityClient.fetch(`*[_type == "pageContent"][0] {
    ...,
    "portrait": select(
      defined(portrait.asset) => portrait.asset->url,
      null
    )
  }`);
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      _type,
      title,
      "slug": slug.current,
      coverImage,
      excerpt,
      categories,
      publishedAt,
      featured,
      "author": author->{ _id, name, image }
    }
  `);
}

export async function getBlogPost(slug: string): Promise<BlogPostDetail | null> {
  return sanityClient.fetch(
    `
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      _type,
      title,
      "slug": slug.current,
      coverImage,
      excerpt,
      body,
      categories,
      publishedAt,
      "author": author->{ _id, name, image, bio }
    }
  `,
    { slug }
  );
}

export async function getFeaturedBlogPosts(): Promise<BlogPost[]> {
  return sanityClient.fetch(`
    *[_type == "blogPost" && featured == true] | order(publishedAt desc)[0...3] {
      _id,
      _type,
      title,
      "slug": slug.current,
      coverImage,
      excerpt,
      categories,
      publishedAt,
      featured,
      "author": author->{ _id, name, image }
    }
  `);
}

export async function getSkills(): Promise<SkillCategory[]> {
  const data = await sanityClient.fetch(`
    *[_type == "pageContent"][0] {
      skills
    }
  `);
  return data?.skills || [];
}
