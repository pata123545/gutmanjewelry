"use client";
import React from 'react';
import NextImage from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Heart, ArrowRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const NewArrivals = ({ products = [] }) => {
  
  const fallbackProducts = [
    { id: 'f1', name: "Vivi Hoop Earrings", price: "180", image: "https://images.unsplash.com/photo-1635767790021-36b23fe638ad?q=80&w=2000" },
    { id: 'f2', name: "Stellar Necklace", price: "320", image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=2000" },
    { id: 'f3', name: "Luna Gold Ring", price: "450", image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=2000" },
    { id: 'f4', name: "Ethereal Bracelet", price: "290", image: "https://images.unsplash.com/photo-1611085507273-44bb5e7122f0?q=80&w=2000" },
    { id: 'f5', name: "Royal Emerald", price: "580", image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2000" }
  ];

  const finalProducts = (products && products.length > 0) ? products : fallbackProducts;

  return (
    <section className="relative w-[1900px] left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
      
      <div className="pt-20 pb-12 px-6 flex flex-col items-center text-center">
        <span className="text-[11px] tracking-[0.5em] uppercase text-neutral-400 mb-3 font-light">
          The Collection
        </span>
        <h2 className="text-[38px] md:text-[60px] font-bold tracking-tight text-black uppercase leading-none">
          New Arrivals
        </h2>
        <div className="w-20 h-[1px] bg-black mt-10 opacity-10"></div>
      </div>

      <div className="w-full relative group/section px-4 md:px-10"> {/* הוספת ריווח קל מהצדדים של המסך */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20} // ריווח קטן בין הכרטיסים
          slidesPerView={1.2} 
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 }, // מציג 3 כרטיסים מלאים ועוד קצת מהבא
            1440: { slidesPerView: 4.2 }, // מציג 4 כרטיסים - הופך אותם לקטנים ויוקרתיים יותר
          }}
          className="h-[60vh] md:h-[55vh] w-full" // הקטנו מעט את הגובה הכללי
        >
          {finalProducts.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="relative w-full h-full group cursor-pointer overflow-hidden rounded-sm">
                <NextImage
                  src={product.image_url || product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover transition-transform duration-[3.5s] ease-out group-hover:scale-105"
                />
                
                {/* Overlay עדין יותר */}
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-all duration-700" />
                
                <div className="absolute bottom-10 left-8 z-20 text-white">
                  <h3 className="text-[20px] md:text-[28px] tracking-[0.05em] font-light uppercase drop-shadow-sm">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-4 mt-2">
                    <p className="text-[16px] md:text-[20px] font-extralight opacity-90">
                      ₪{product.price}
                    </p>
                    <button className="text-[10px] tracking-[0.3em] uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      View <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* חצים בעיצוב מינימליסטי יותר */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-30 text-black/50 hover:text-black transition-all hidden md:block">
          <ArrowRight size={32} className="rotate-180" strokeWidth={1} />
        </button>
        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-30 text-black/50 hover:text-black transition-all hidden md:block">
          <ArrowRight size={32} strokeWidth={1} />
        </button>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet { background: #000 !important; opacity: 0.2; }
        .swiper-pagination-bullet-active { opacity: 0.8; width: 20px; border-radius: 4px; transition: all 0.4s ease; }
      `}</style>
    </section>
  );
};

export default NewArrivals;