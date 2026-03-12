import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as 'en' | 'da')) {
    locale = routing.defaultLocale;
  }

  const home = (await import(`../messages/${locale}/home.json`)).default;

  return {
    locale,
    messages: {
      HomePage: home
    }
  };
});