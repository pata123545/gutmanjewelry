"use client";
import React from 'react';
import { useTranslations, useLocale } from 'next-intl';

const Footer = () => {
  const t = useTranslations('Footer');
  const locale = useLocale();
  const isRtl = locale === 'he';

  // המערך שהגדרת, מוטמע בתוך הקומפוננטה
  const navigationLinks = [
    { name: t('new'), slug: 'new' },
    { name: t('jewelry'), id: 'jewelry' },
    { name: t('bestSellers'), slug: 'best-sellers' },
    { name: t('collections'), id: 'collections' },
    { name: t('gold14k'), id: 'gold' },
    { name: t('gifts'), id: 'gifts' },
    { name: t('lastChance'), slug: 'last-chance' },
  ];

  return (
    <footer className="bg-[#0D0D0D] pt-32 pb-10 px-6 border-t border-white/5" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-full h-full relative mx-auto">
        
        {/* סקשן ניוזלטר */}
        <div className="flex flex-col items-center text-center mb-32">
          <span className="text-[10px] uppercase tracking-[0.6em] text-[#C5A25D] mb-8 block font-medium">
            {t('stayConnected')}
          </span>
          <h2 className="text-3xl md:text-4xl font-extralight italic mb-12 text-white tracking-wide">
            {t('newsletterTitle')}
          </h2>
          <form className="w-full max-w-lg flex border-b border-white/10 pb-4 transition-all focus-within:border-[#C5A25D]">
            <input 
              type="email" 
              placeholder={t('emailPlaceholder')} 
              className="bg-white/20 flex-grow text-sm font-light outline-none py-2 px-0 text-white placeholder:text-white tracking-widest"
            />
            <button className="text-[11px] uppercase tracking-[0.3em] font-semibold px-6 text-black bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] shadow-xl  transition-all duration-500">
              {t('subscribe')}
            </button>
          </form>
        </div>

        {/* מבנה הקישורים */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* לוגו ותיאור */}
          <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="mb-8">
              <img 
                src="https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/logo/Gutman%20Jewelry.png" 
                alt="Gutman Jewelry"
                className="h-40 md:h-40 w-auto object-contain" 
              />
            </div>
            <p className="text-neutral-500 text-[13px] leading-[1.8] font-light max-w-[240px]">
              {t('aboutText')}
            </p>
          </div>

          {/* עמודת קולקציות - מערך דינמי */}
          <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A25D] opacity-80">
              {t('collections')}
            </h4>
            <ul className="space-y-4 text-neutral-400 text-[13px] font-light">
              {navigationLinks.map((link, index) => (
                <li 
                  key={index} 
                  className="hover:text-white cursor-pointer transition-colors duration-300"
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>

          {/* שירות לקוחות */}
          <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A25D] opacity-80">
              {t('customerService')}
            </h4>
            <ul className="space-y-5 text-neutral-400 text-[13px] font-light">
              <li className="hover:text-white cursor-pointer transition-colors duration-300">{t('serv1')}</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-300">{t('serv2')}</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-300">{t('serv3')}</li>
              <li className="hover:text-white cursor-pointer transition-colors duration-300">{t('serv4')}</li>
            </ul>
          </div>

          {/* סושיאל */}
          <div className={`${isRtl ? 'text-right' : 'text-left'}`}>
            <h4 className="text-[11px] uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A25D] opacity-80">{t('followUs')}</h4>
            <div className="flex flex-col gap-5 text-neutral-400 text-[13px] font-light">
              <span className="hover:text-white cursor-pointer transition-all duration-300 tracking-[0.2em] text-[12px]">INSTAGRAM</span>
              <span className="hover:text-white cursor-pointer transition-all duration-300 tracking-[0.2em] text-[12px]">FACEBOOK</span>
              <span className="hover:text-white cursor-pointer transition-all duration-300 tracking-[0.2em] text-[12px]">PINTEREST</span>
            </div>
          </div>
        </div>

        {/* זכויות יוצרים */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] text-white tracking-[0.3em] uppercase">
            {t('rights')}
          </p>
          <div className="flex gap-10">
            <span className="text-[9px] text-white uppercase tracking-[0.2em] cursor-pointer hover:text-[#C5A25D] transition-colors">
              {t('terms')}
            </span>
            <span className="text-[9px] text-white uppercase tracking-[0.2em] cursor-pointer hover:text-[#C5A25D] transition-colors">
              {t('accessibility')}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;