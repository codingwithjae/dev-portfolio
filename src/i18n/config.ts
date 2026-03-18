export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const SECONDARY_LOCALE: Locale = "es";

export function isLocale(value: unknown): value is Locale {
	return typeof value === "string" && LOCALES.includes(value as Locale);
}
