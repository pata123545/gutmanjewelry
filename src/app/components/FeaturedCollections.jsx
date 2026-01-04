"use client";

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

const FeaturedCollections = () => {
  const t = useTranslations('FeaturedCollections');
  const locale = useLocale();

  const collections = [
    { title: t('evening'), image: 'https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/engagement/596713374_122192763362542518_4270168330234204138.jpg', link: 'evening' },
    { title: t('engagement'), image: 'https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/engagement/596713374_122192763362542518_4270168330234204138.jpg', link: 'engagement' },
    { title: t('daily'), image: 'https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/engagement/596713374_122192763362542518_4270168330234204138.jpg', link: 'daily' },
  ];

  const isRTL = locale === 'he';

  return (
    <section className="py-24 bg-[#F9F9F9]" dir={isRTL ? "rtl" : "ltr"}>
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px]">
          
          {collections.map((col, index) => (
            <Link 
              key={index} 
              // הוספת ה-locale לנתיב הקישור
              href={`/${locale}/category/${col.link}`} 
              className="relative group overflow-hidden rounded-[24px]"
            >
              {/* Image */}
              <img 
                src={col.image} 
                alt={col.title}
                className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                <h3 className="text-[14px] tracking-[0.4em] uppercase font-light mb-4 text-center">
                  {col.title}
                </h3>
                <span className="text-[11px] tracking-[0.2em] uppercase border-b border-white/50 pb-1 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                  {t('viewCollection')}
                </span>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;