"use client";

import React, { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import NextImage from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

const LuxuryProductCard = ({ product, locale }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] group overflow-hidden bg-[#F8F8F8] shadow-md border border-neutral-100">
      <div className="absolute inset-0 z-0">
        <NextImage
          src={product.image_url || '/placeholder.jpg'}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
        />
      </div>

      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 z-10" />

      <button 
        onClick={(e) => { e.preventDefault(); setIsFavorite(!isFavorite); }}
        className="absolute top-5 right-5 z-30 transition-transform duration-300 hover:scale-110"
      >
        <Heart 
          size={24} 
          className={`transition-colors duration-300 ${isFavorite ? 'fill-[#BF953F] stroke-[#BF953F]' : 'stroke-white'}`} 
          strokeWidth={1.5}
        />
      </button>

      <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-white flex flex-col justify-end">
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-[22px] md:text-[26px] tracking-[0.1em] font-extralight uppercase leading-tight">
            {product.title}
          </h3>
          <p className="text-[18px] mt-1 font-light opacity-95">
            ₪{Number(product.price).toLocaleString()}
          </p>
        </div>

        <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <button className="flex-1 bg-[#BF953F] text-white py-3.5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
            <ShoppingBag size={14} />
            ADD TO BAG
          </button>
          <Link href={`/${locale}/product/${product.id}`} className="flex items-center justify-center w-12 h-12 border border-white/40 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">
            <Eye size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const BestSellersSlider = ({ products = [] }) => {
  const t = useTranslations('BestSellers');
  const locale = useLocale();

  // --- השורה החדשה: סינון מוצרים שהם Best Sellers בלבד ---
  const bestSellers = products.filter(p => p.is_best_seller === true);

  // אם אין מוצרים ברשימה המסוננת, לא מציגים את הסקשן
  if (!bestSellers || bestSellers.length === 0) return null;

  return (
    <section className="py-24 bg-white" dir={locale === 'he' ? "rtl" : "ltr"}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-16 relative">
        
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] tracking-[0.6em] text-[#BF953F] uppercase mb-4 block font-medium">
            {t('label') || 'Most Loved'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.1em] text-black uppercase">
            {t('title') || 'Best Sellers'}
          </h2>
          <div className="w-12 h-[1px] bg-[#BF953F] mx-auto mt-8 opacity-40"></div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={25}
          slidesPerView={1.2}
          centeredSlides={true}
          loop={bestSellers.length > 4} // לופ רק אם יש מספיק מוצרים
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: false },
            1024: { slidesPerView: 4, centeredSlides: false },
            1440: { slidesPerView: 5, centeredSlides: false },
          }}
          className="luxury-best-sellers !pb-20"
        >
          {bestSellers.map((product) => (
            <SwiperSlide key={product.id}>
              <LuxuryProductCard product={product} locale={locale} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

<style jsx global>{`
        /* הפיכת המיכל הראשי לנקודת ייחוס */
        .max-w-\[1800px\] {
          position: relative;
        }

        /* עיצוב כללי לחיצים */
        .luxury-best-sellers .swiper-button-next,
        .luxury-best-sellers .swiper-button-prev {
          color: #000 !important;
          background: white !important;
          width: 45px !important;
          height: 45px !important;
          border-radius: 50% !important;
          box-shadow: 0 4px 15px rgba(0,0,0,0.15) !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          z-index: 50 !important;
          transition: all 0.3s ease !important;
        }

        /* הגדלת האייקון הפנימי של החץ */
        .luxury-best-sellers .swiper-button-next::after,
        .luxury-best-sellers .swiper-button-prev::after {
          font-size: 18px !important;
          font-weight: bold !important;
        }

        .luxury-best-sellers .swiper-button-next:hover,
        .luxury-best-sellers .swiper-button-prev:hover {
          background: #BF953F !important;
          color: white !important;
        }

        /* הגדרות ספציפיות לצד ימין (RTL) */
        [dir='rtl'] .luxury-best-sellers .swiper-button-next {
          right: -20px !important; /* מוציא את החץ קצת החוצה מהתמונות */
          left: auto !important;
        }

        /* הגדרות ספציפיות לצד שמאל (RTL) */
        [dir='rtl'] .luxury-best-sellers .swiper-button-prev {
          left: -20px !important; /* מוציא את החץ קצת החוצה מהתמונות */
          right: auto !important;
        }

        /* במידה ואת לא ב-RTL (אנגלית) */
        [dir='ltr'] .luxury-best-sellers .swiper-button-next {
          right: -20px !important;
        }
        [dir='ltr'] .luxury-best-sellers .swiper-button-prev {
          left: -20px !important;
        }

        /* הסתרת חיצים במסכים קטנים מאוד כדי שלא יסתירו את התוכן */
        @media (max-width: 1024px) {
          .luxury-best-sellers .swiper-button-next,
          .luxury-best-sellers .swiper-button-prev {
            display: none !important;
          }
        }

        /* עיצוב נקודות הניווט בתחתית */
        .luxury-best-sellers .swiper-pagination-bullet-active {
          background: #BF953F !important;
          width: 30px !important;
          border-radius: 5px !important;
        }
      `}</style>
    </section>
  );
};

export default BestSellersSlider;