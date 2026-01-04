"use client";
import { useTranslations } from 'next-intl';

const HeroHeader = () => {
  const t = useTranslations('Hero');

  return (
    <div className="w-full pt-24 pb-12 px-6">
      <div className="max-w-[1700px] mx-auto text-center flex flex-col items-center">
        {/* כותרת קטנה עליונה - מציגים את... */}
        <span className="text-[10px] md:text-[11px] tracking-[0.6em] text-gray-400 uppercase font-light mb-4 animate-fade-in">
          {t('introducing')}
        </span>
        
        {/* הכותרת המרכזית הגדולה */}
        <h1 className="text-1xl md:text-5xl font-serif tracking-[0.15em] text-[#1A1A1A] font-light  leading-tight">
          {t('mainTitle')}
        </h1>
        
        {/* קו דקורטיבי עדין (אופציונלי, למראה לקשרי) */}
        <div className="mt-8 h-[1px] w-12 bg-gray-200" />
      </div>
    </div>
  );
};

export default HeroHeader;