import { sanityClient } from "sanity:client";
import type { SanityImageSource } from "@sanity/image-url";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { Locale } from "../../i18n/config";
import type {
	BlogPost,
	BlogPostDetail,
	PageContent,
	SiteSettings,
	SkillCategory,
} from "./sanity.types";

const builder = createImageUrlBuilder(sanityClient);

export const urlFor = (source: SanityImageSource) => builder.image(source).auto("format");

export async function getPageContent(requestedLocale?: Locale): Promise<PageContent | null> {
	return sanityClient.fetch(
		`*[_type == "pageContent"][0] {
    ...,
    "portrait": select(
      defined(portrait.asset) => portrait.asset->url,
      null
    )
  }`,
		{
			locale: requestedLocale,
		},
	);
}

export async function getBlogPosts(requestedLocale?: Locale): Promise<BlogPost[]> {
	return sanityClient.fetch(
		`
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
  `,
		{
			locale: requestedLocale,
		},
	);
}

export async function getBlogPost(
	slug: string,
	requestedLocale?: Locale,
): Promise<BlogPostDetail | null> {
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
		{ slug, locale: requestedLocale },
	);
}

export async function getFeaturedBlogPosts(requestedLocale?: Locale): Promise<BlogPost[]> {
	return sanityClient.fetch(
		`
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
  `,
		{
			locale: requestedLocale,
		},
	);
}

export async function getSkills(requestedLocale?: Locale): Promise<SkillCategory[]> {
	const data = await sanityClient.fetch(
		`
    *[_type == "pageContent"][0] {
      skills
    }
	`,
		{
			locale: requestedLocale,
		},
	);
	return data?.skills || [];
}

export async function getSiteSettings(requestedLocale?: Locale): Promise<SiteSettings | null> {
	return sanityClient.fetch(
		`
    *[_type == "siteSettings"][0] {
      _id,
      _type,
      siteName,
      siteUrl,
      defaultTitle,
      titleTemplate,
      defaultDescription,
      "defaultOgImageUrl": select(
        defined(defaultOgImage.asset) => defaultOgImage.asset->url,
        null
      )
    }
  `,
		{
			locale: requestedLocale,
		},
	);
}
