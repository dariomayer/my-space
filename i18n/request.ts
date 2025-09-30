//i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {locales, type Locale} from '../i18n-config';

export default getRequestConfig(async ({requestLocale}) => {
  // Validate that the incoming `locale` parameter is valid
  let locale = await requestLocale;
  
  if (!locale || !locales.includes(locale as Locale)) {
    locale = 'it';
  }

  return {
    locale,
    messages: (await import(`../features/i18n/messages/${locale}`)).default
  };
});
