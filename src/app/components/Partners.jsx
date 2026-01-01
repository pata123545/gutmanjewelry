"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import NextImage from 'next/image';

// ייבוא סטייל בסיסי של Swiper
import 'swiper/css';

const Partners = () => {
  // רשימת הלוגואים (תחליף בנתיבים האמיתיים שלך ב-Public או ב-Supabase)
  const logos = [
    { id: 1, src: '/logos/partner1.svg', alt: 'Partner 1' },
    { id: 2, src: '/logos/partner2.svg', alt: 'Partner 2' },
    { id: 3, src: '/logos/partner3.svg', alt: 'Partner 3' },
    { id: 4, src: '/logos/partner4.svg', alt: 'Partner 4' },
    { id: 5, src: '/logos/partner5.svg', alt: 'Partner 5' },
    { id: 6, src: '/logos/partner6.svg', alt: 'Partner 6' },
  ];

  return (
    <section className="w-full py-12 bg-[#f0f0f0] border-y border-neutral-100">
      <div className="w-full overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50} // רווח בין לוגו ללוגו
          slidesPerView={2} // כמה לוגואים רואים בנייד
          loop={true} // תנועה אינסופית
          speed={3000} // מהירות התנועה (במילישניות) - ככל שיותר גבוה זה יותר חלק
          autoplay={{
            delay: 0, // 0 אומר שזה לא עוצר בין תזוזות
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 }, // 5 לוגואים במסך מחשב
            1440: { slidesPerView: 6 },
          }}
          className="partners-swiper"
        >
          {logos.map((logo) => (
            <SwiperSlide key={logo.id} className="flex items-center justify-center">
              <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-500 opacity-50 hover:opacity-100">
                <NextImage
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx global>{`
        /* טריק CSS כדי שהתנועה תהיה ליניארית וחלקה לגמרי (בלי האצה/האטה) */
        .partners-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
};

export default Partners;