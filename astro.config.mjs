// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { SITE_URL } from "./src/data/site-url.mjs";

export default defineConfig({
  site: SITE_URL,
  // English at /, Spanish at /es/ (see src/i18n for the texts).
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: "en", locales: { en: "en", es: "es" } },
    }),
  ],
  devToolbar: { enabled: false },
  build: { inlineStylesheets: "always" },
  vite: { plugins: [tailwindcss()] },
});
