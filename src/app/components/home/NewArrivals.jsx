"use client";

import React, { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl'; // ייבוא התרגום
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import NextImage from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

const LuxuryProductCard = ({ product, locale, t }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  return (
    <div className="relative w-full aspect-[3/4] group overflow-hidden shadow-md border border-neutral-100">
      <div className="absolute inset-0 z-0">
        <NextImage
          src={product.image_url || product.image || '/placeholder.jpg'}
          alt={product.title || "Jewelry"}
          fill
          sizes="(max-w-768px) 100vw, 25vw"
          className="object-cover transition-transform duration-[3s] ease-out group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 z-10" />
      
      <button onClick={(e) => { e.preventDefault(); setIsFavorite(!isFavorite); }} className="absolute top-5 right-5 z-30 transform hover:scale-110">
        <Heart size={24} className={isFavorite ? 'fill-[#BF953F] stroke-[#BF953F]' : 'stroke-white'} strokeWidth={1.5} />
      </button>

      <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-white flex flex-col justify-end">
        <div className="transform transition-all duration-500 group-hover:-translate-y-2">
          <h3 className="text-[18px] md:text-[22px] tracking-[0.1em] font-extralight uppercase mb-1">{product.title}</h3>
          <p className="text-[16px] font-light text-[#C5A25D]">₪{Number(product.price || 0).toLocaleString()}</p>
        </div>
        <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <button className="flex-[3] bg-[#BF953F] text-white py-3.5 text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2">
            <ShoppingBag size={14} /> {t('addToBag') || 'ADD TO BAG'}
          </button>
          <Link href={`/${locale}/product/${product.id}`} className="flex-1 flex items-center justify-center h-12 border border-white/40 backdrop-blur-md hover:bg-white hover:text-black transition-all">
            <Eye size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const NewArrivals = ({ products = [] }) => {
  const locale = useLocale();
  const t = useTranslations('NewArrivals'); // הפעלת התרגום לסקשן הזה

  const newProducts = products.filter(p => p.is_new === true);

  if (newProducts.length === 0) return null;

  return (
    <section className="py-24 bg-white" dir={locale === 'he' ? "rtl" : "ltr"}>
      <div className="max-w-[1800px] mx-auto px-4 md:px-16 relative">
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] tracking-[0.6em] text-[#BF953F] uppercase mb-4 block font-medium">
            {t('label') || 'NEW ARRIVALS'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extralight tracking-[0.1em] text-black uppercase">
            {t('title') || 'נחיתות אחרונות'}
          </h2>
          <div className="w-12 h-[1px] bg-[#BF953F] mx-auto mt-8 opacity-40"></div>
        </div>
        
        <Swiper 
          modules={[Navigation, Pagination, Autoplay]} 
          spaceBetween={25} 
          slidesPerView={1.2} 
          navigation 
          pagination={{ clickable: true }}
          breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 4 }, 1440: { slidesPerView: 5 } }}
          className="luxury-swiper !pb-20"
        >
          {newProducts.map((p) => (
            <SwiperSlide key={p.id}>
              <LuxuryProductCard product={p} locale={locale} t={t} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        .luxury-swiper .swiper-button-next,
        .luxury-swiper .swiper-button-prev {
          color: #000 !important;
          background: rgba(255, 255, 255, 0.9);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          top: 50%;
          transform: translateY(-50%) scale(0.7);
          z-index: 40;
        }
        [dir='rtl'] .luxury-swiper .swiper-button-next { right: 10px; left: auto; }
        [dir='rtl'] .luxury-swiper .swiper-button-prev { left: 10px; right: auto; }
        
        .luxury-swiper .swiper-pagination-bullet-active {
          background: #BF953F !important;
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default NewArrivals;