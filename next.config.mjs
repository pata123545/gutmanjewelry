import createNextIntlPlugin from 'next-intl/plugin';

// הוספנו את הנתיב המפורש לקובץ ה-request
const withNextIntl = createNextIntlPlugin('./src/i18n/request.js');

/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co', // מאשר את כל הפרויקטים של סופבייס
      },
    ],
  },
};

export default withNextIntl(nextConfig);