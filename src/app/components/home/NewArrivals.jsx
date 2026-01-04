"use client";
import { useTranslations, useLocale } from 'next-intl';
import NextImage from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const NewArrivals = ({ products = [] }) => {
  const locale = useLocale();
  const isRtl = locale === 'he';
  const t = useTranslations('NewArrivals');

  // פונקציית תרגום גמישה מאוד
  const getTranslatedName = (product) => {
    if (!product) return "";

    // אפשרות 1: השדות הם name_en, name_ru וכו'
    if (locale === 'en') return product.name_en || product.title_en || product.name || product.title;
    if (locale === 'ru') return product.name_ru || product.title_ru || product.name || product.title;
    
    // אפשרות 2: השם הוא אובייקט בעצמו {he: "...", en: "..."}
    if (typeof product.name === 'object') {
      return product.name[locale] || product.name['he'];
    }

    return product.name || product.title;
  };

  return (
    <section 
      className="relative left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] w-[1900px] overflow-hidden border-y border-neutral-100" 
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* כותרת */}
      <div className="py-24 text-center px-4">
        <span className="text-[11px] tracking-[0.6em] text-[#C5A25D] uppercase mb-5 block font-medium">
          {t('subtitle')}
        </span>
        <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.15em] text-neutral-900 uppercase">
          {t('title')}
        </h2>
        <div className="w-12 h-[1px] bg-[#C5A25D] mx-auto mt-10 opacity-50"></div>
      </div>

      <div className="relative w-full group">
        <Swiper
          key={locale} // חיוני! גורם לכל התוכן להשתנות ברגע שהשפה משתנה
          modules={[Navigation, Autoplay]}
          spaceBetween={0} 
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: '.nav-next-full',
            prevEl: '.nav-prev-full',
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 4 },
          }}
          className="w-full"
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative aspect-[4/5] w-full overflow-hidden group/item cursor-pointer bg-[#F7F7F7]">
                {/* תמונה עם Padding */}
                <div className="relative w-full h-full p-12 transition-transform duration-[2s] ease-out group-hover/item:scale-110">
                  <NextImage
                    src={product.image_url}
                    alt={getTranslatedName(product)}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                
                {/* טקסט מוצר */}
                <div className={`absolute bottom-0 w-full p-10 z-10 ${isRtl ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-[12px] tracking-[0.25em] font-light uppercase mb-3 text-neutral-800">
                    {getTranslatedName(product)}
                  </h3>
                  <p className="text-[13px] font-medium tracking-widest text-[#C5A25D]">
                    {Number(product.price).toLocaleString()} {t('currency')}
                  </p>
                </div>

                {/* כפתור Hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/item:opacity-100 transition-all duration-700 z-20">
                  <div className="bg-white/90 backdrop-blur-sm px-10 py-4 text-[10px] tracking-[0.5em] text-black uppercase font-semibold shadow-2xl">
                    {t('shopNow')}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* חיצים */}
        <button className="nav-prev-full absolute left-10 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 text-neutral-400 hover:text-[#C5A25D]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="nav-next-full absolute right-10 top-1/2 -translate-y-1/2 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 text-neutral-400 hover:text-[#C5A25D]">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default NewArrivals;