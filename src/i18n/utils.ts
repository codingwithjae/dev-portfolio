import { DEFAULT_LOCALE, isLocale, type Locale } from "./config";

type LocaleResolutionInput =
	| {
			currentLocale?: string | null;
			locale?: string | null;
			params?: Record<string, string | undefined>;
			url?: URL | string | null;
			pathname?: string | null;
	  }
	| URL
	| string
	| null
	| undefined;

type LocalizedValue<T> = Partial<Record<Locale, T>>;

function normalizeLocale(candidate: unknown): Locale | undefined {
	if (typeof candidate !== "string") {
		return undefined;
	}

	const normalized = candidate.toLowerCase();
	return isLocale(normalized) ? normalized : undefined;
}

function extractPathname(input: LocaleResolutionInput): string | undefined {
	if (typeof input === "string") {
		return input;
	}

	if (input instanceof URL) {
		return input.pathname;
	}

	if (!input) {
		return undefined;
	}

	if (input.pathname) {
		return input.pathname;
	}

	if (typeof input.url === "string") {
		return input.url;
	}

	if (input.url instanceof URL) {
		return input.url.pathname;
	}

	return undefined;
}

function firstPathSegment(pathname: string): string | undefined {
	const sanitized = pathname.trim();
	if (!sanitized) {
		return undefined;
	}

	let path = sanitized;
	try {
		if (sanitized.startsWith("http://") || sanitized.startsWith("https://")) {
			path = new URL(sanitized).pathname;
		}
	} catch {
		path = sanitized;
	}

	const withoutQuery = path.split("?")[0]?.split("#")[0] ?? "";
	const [segment] = withoutQuery.split("/").filter(Boolean);
	return segment;
}

export function resolveLocaleFromRequest(input?: LocaleResolutionInput): Locale {
	const objectInput =
		typeof input === "object" && input && !(input instanceof URL) ? input : undefined;

	const directLocale = normalizeLocale(objectInput?.currentLocale ?? objectInput?.locale);
	if (directLocale) {
		return directLocale;
	}

	const paramLocale = normalizeLocale(objectInput?.params?.locale ?? objectInput?.params?.lang);
	if (paramLocale) {
		return paramLocale;
	}

	const pathname = extractPathname(input);
	if (!pathname) {
		return DEFAULT_LOCALE;
	}

	const localeFromPath = normalizeLocale(firstPathSegment(pathname));
	return localeFromPath ?? DEFAULT_LOCALE;
}

export function pickLocalizedValue<T>(
	value: LocalizedValue<T> | undefined,
	locale: Locale,
): T | undefined {
	if (!value) {
		return undefined;
	}

	if (locale === "es") {
		return value.es ?? value.en;
	}

	return value.en;
}

function isPlainObject(value: unknown): value is Record<string, unknown> {
	return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function deepMergeWithFallback<T>(value: Partial<T> | undefined, fallback: T): T {
	if (value === undefined) {
		return fallback;
	}

	if (Array.isArray(value) || Array.isArray(fallback)) {
		return (value ?? fallback) as T;
	}

	if (!isPlainObject(value) || !isPlainObject(fallback)) {
		return (value ?? fallback) as T;
	}

	const output: Record<string, unknown> = { ...fallback };

	for (const [key, fallbackValue] of Object.entries(fallback)) {
		const nextValue = (value as Record<string, unknown>)[key];
		if (nextValue === undefined) {
			continue;
		}

		if (isPlainObject(nextValue) && isPlainObject(fallbackValue)) {
			output[key] = deepMergeWithFallback(nextValue, fallbackValue);
			continue;
		}

		output[key] = nextValue;
	}

	for (const [key, nextValue] of Object.entries(value)) {
		if (key in output || nextValue === undefined) {
			continue;
		}

		output[key] = nextValue;
	}

	return output as T;
}
