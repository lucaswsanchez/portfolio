import { en, type Dict } from "./en";
import { es } from "./es";

export type Lang = "en" | "es";
export const langs: Lang[] = ["en", "es"];
export const defaultLang: Lang = "en";

const dicts: Record<Lang, Dict> = { en, es };

export const t = (lang: Lang): Dict => dicts[lang];

/** Path of the home page in each language (English is the default, at /). */
export const homePath = (lang: Lang) => (lang === defaultLang ? "/" : `/${lang}/`);

/** Value for <html lang> and hreflang. */
export const htmlLang: Record<Lang, string> = { en: "en", es: "es" };
