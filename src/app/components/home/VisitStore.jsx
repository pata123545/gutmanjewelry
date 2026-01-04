"use client";
import React from 'react';
import { MapPin } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const VisitStore = () => {
  const t = useTranslations('VisitStore');
  const locale = useLocale();
  const isRtl = locale === 'he';

  return (
    <section className="w-full py-24 bg-[#f7f6f5] border-t border-neutral-100" dir={isRtl ? "rtl" : "ltr"}>
      <div className={`max-w-[1200px] mx-auto px-6 flex flex-col ${isRtl ? 'md:items-end md:text-right' : 'md:items-start md:text-left'} items-center text-center`}>
        
        {/* כותרת הסקשן */}
        <h2 className="text-[32px] md:text-[48px] tracking-[0.3em] font-extralight text-black uppercase mb-6 leading-tight">
          {t('title')}
        </h2>

        {/* טקסט תיאור */}
        <div className="max-w-[600px] mb-10">
          <p className="text-[16px] md:text-[18px] text-neutral-600 font-light leading-relaxed tracking-wide">
            {t('description')}
          </p>
        </div>

        {/* כפתור שחור - Luxury Style */}
        <button className="group relative overflow-hidden bg-[#333] text-white px-12 py-5 text-[14px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-black">
          <span className="relative z-10 flex items-center gap-3">
            {t('button')}
            <MapPin size={16} className={`${isRtl ? '' : 'order-first'} group-hover:translate-y-[-2px] transition-transform duration-300`} />
          </span>
          {/* אפקט מילוי עדין ב-Hover */}
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>

      </div>
    </section>
  );
};

export default VisitStore;