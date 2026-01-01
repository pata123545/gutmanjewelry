import {getRequestConfig} from 'next-intl/server';
import {notFound} from 'next/navigation';

// רשימת השפות שאתה תומך בהן
const locales = ['he', 'en', 'ru'];

export default getRequestConfig(async ({locale}) => {
  // בדיקה שהשפה ב-URL אכן נתמכת
  if (!locales.includes(locale)) notFound();

  return {
    // טעינת קובץ ה-JSON המתאים מתיקיית ה-messages שפתחת
    messages: (await import(`./messages/${locale}.json`)).default
  };
});