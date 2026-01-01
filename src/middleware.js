import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // רשימת כל השפות שאתה תומך בהן
  locales: ['he', 'en', 'ru'],
 
  // שפת ברירת המחדל אם לא צוינה שפה בכתובת
  defaultLocale: 'he'
});
 
export const config = {
  // הגדרה אילו נתיבים ה-Middleware יבדוק (מתעלם מקבצים פנימיים וסטטיים)
  matcher: ['/', '/(he|en|ru)/:path*']
};