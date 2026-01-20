import { sanityClient } from 'sanity:client';
import { createImageUrlBuilder } from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url';
import type { BlogPost, BlogPostDetail, PageContent } from './sanity.types';

/**
 * Image URL builder configured with the project's Sanity client.
 * Used to transform and generate optimized image URLs from Sanity image records.
 */
const builder = createImageUrlBuilder(sanityClient);

/**
 * Generates an optimized image URL for a given Sanity image source.
 * Automatically applies format optimization (WebP/AVIF) based on browser support.
 * 
 * @param source - The Sanity image record or ID to generate a URL for.
 * @returns An image builder object that can be further chain-transformed (e.g., .width(), .height()) or converted to a string using .url().
 * 
 * @example
 * ```ts
 * const imageUrl = urlFor(project.thumbnail).width(800).url();
 * ```
 */
export const urlFor = (source: SanityImageSource) => builder.image(source).auto('format');

/**
 * Fetches the main Page Content singleton document from Sanity.
 * This document contains global settings like hero section, social links, and CV URL.
 * 
 * @returns A promise that resolves to the PageContent object or null if not found.
 * @throws Will log an error to the console if the fetch fails (handled at call site).
 * 
 * @example
 * ```ts
 * const content = await getPageContent();
 * if (content) console.log(content.hero.title);
 * ```
 */
export async function getPageContent(): Promise<PageContent | null> {
  return sanityClient.fetch(`*[_type == "pageContent"][0]`);
}

/**
 * Fetches all blog posts from Sanity, ordered by publication date (newest first).
 * Transforms the slug object into a direct string for easier frontend consumption.
 * 
 * @returns A promise that resolves to an array of BlogPost objects.
 * 
 * @example
 * ```ts
 * const posts = await getBlogPosts();
 * console.log(`Found ${posts.length} articles`);
 * ```
 */
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

/**
 * Fetches a single blog post's detailed content by its unique slug.
 * Includes full body content for rendering the article.
 * 
 * @param slug - The unique string identifier for the blog post.
 * @returns A promise resolving to the BlogPostDetail or null if no post matches the slug.
 * 
 * @example
 * ```ts
 * const post = await getBlogPost("building-with-astro-and-sanity");
 * if (post) renderPost(post.body);
 * ```
 */
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

/**
 * Fetches up to 3 featured blog posts from Sanity, ordered by publication date.
 * Used for highlighting key articles on the homepage.
 * 
 * @returns A promise that resolves to an array of featured BlogPost objects.
 * 
 * @example
 * ```ts
 * const featured = await getFeaturedBlogPosts();
 * ```
 */
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
