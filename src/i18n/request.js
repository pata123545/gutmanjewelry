import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // 1. וידוא שהשפה קיימת ברשימת השפות שלנו, אם לא נשתמש בברירת מחדל
  if (!routing.locales.includes(locale)) {
    locale = routing.defaultLocale;
  }

  return {
    // חשוב מאוד: להחזיר גם את ה-locale וגם את ה-messages
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});