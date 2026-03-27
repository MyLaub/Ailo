import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  const home = (await import(`../messages/${locale}/home.json`)).default;
  const expertise = (await import(`../messages/${locale}/expertise.json`)).default;
  const about = (await import(`../messages/${locale}/about.json`)).default;
  const footer = (await import(`../messages/${locale}/footer.json`)).default;

  return {
    locale,
    messages: {
      ...home,
      ...expertise,
      ...about,
      ...footer
    }
  };
});