import { DEFAULT_LOCALE, type Locale } from "../i18n/config";
import { deepMergeWithFallback } from "../i18n/utils";
import type { StaticData } from "./staticData.en";
import { staticDataEn } from "./staticData.en";
import { staticDataEs } from "./staticData.es";

export const staticData = {
	...staticDataEn,
	en: staticDataEn,
	es: staticDataEs,
};

export type { StaticData } from "./staticData.en";
export type LocalizedStaticData = Record<Locale, StaticData>;

export function getStaticData(locale: Locale = DEFAULT_LOCALE): StaticData {
	if (locale === "es") {
		return deepMergeWithFallback(staticData.es, staticData.en);
	}

	return staticData.en;
}
