"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

// סגנונות Swiper
import 'swiper/css';
import 'swiper/css/pagination';

const HeroClientWrapper = ({ children }) => {
  return (
    <>
      {/* --- תצוגת מובייל בלבד (עד רזולוציה 1024px) --- */}
      <div className="block lg:hidden mobile-hero-carousel">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {React.Children.map(children, (child) => (
            <SwiperSlide>{child}</SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* --- תצוגת דסקטופ רגילה (מ-1024px ומעלה) --- */}
      <div className="hidden lg:grid grid-cols-2 gap-4">
        {children}
      </div>

      <style jsx global>{`
        /* עיצוב הנקודות במובייל בלבד */
        .mobile-hero-carousel .swiper-pagination-bullet {
          background: #fff;
          opacity: 0.5;
        }
        .mobile-hero-carousel .swiper-pagination-bullet-active {
          background: #BF953F;
          opacity: 1;
        }
        .mobile-hero-carousel .swiper-pagination {
          bottom: 20px !important;
        }
      `}</style>
    </>
  );
};

export default HeroClientWrapper;