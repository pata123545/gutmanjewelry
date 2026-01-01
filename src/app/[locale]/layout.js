import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Header from '../components/header/Header';
import { Geist, Geist_Mono } from "next/font/google";
import "../../app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ה-Metadata חייב להיות מחוץ לפונקציה!
export const metadata = {
  title: "Gutman Jewelry",
  description: "Luxury Jewelry Store",
};

export default async function RootLayout({ children, params }) {
  // קבלת השפה
  const { locale } = await params;
  
  // טעינת התרגומים
  const messages = await getMessages(locale);

  return (
    <html lang={locale} dir={locale === 'he' ? 'rtl' : 'ltr'}>
      <body className={`${geistSans.variable} ${geistMono.variable} bg-[#f7f6f5] m-0 p-0 antialiased`}>
        
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Header />
          <main>
            {children}
          </main>
        </NextIntlClientProvider>

      </body>
    </html>
  );
}