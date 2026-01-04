"use client";

import { useTranslations, useLocale } from 'next-intl'; // ייבוא כלי התרגום
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Link from 'next/link';
import Image from 'next/image';

// ייבוא הסטייל של Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BestSellersSlider = ({ products }) => {
  const t = useTranslations('BestSellers'); // שימוש במפתח החדש
  const locale = useLocale();
  const isRtl = locale === 'he';

  return (
    // ה-dir משתנה דינמית לפי השפה
    <section className="py-24 bg-[#F9F9F9]" dir={isRtl ? "rtl" : "ltr"}>
      <div className="max-w-[1600px] mx-auto px-6 relative">
        
        {/* כותרת יוקרתית מתורגמת */}
        <div className="flex flex-col items-center mb-16 text-center">
          <span className="text-[10px] tracking-[0.5em] text-[#ead690] uppercase mb-4">
            {t('label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-gray-900 italic">
           {t('title')}
          </h2>
          <div className="w-10 h-[1px] bg-[#ead690]/40 mt-6"></div>
        </div>

        {/* הסליידר */}
        <Swiper
          key={locale} // חשוב: גורם לסליידר להיווצר מחדש כשמחליפים שפה
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
            1440: { slidesPerView: 5 },
          }}
          className="best-sellers-swiper !pb-16"
        >
          {products?.map((product) => (
            <SwiperSlide key={product.id}>
              <div className="group cursor-pointer">
                <Link href={`/${locale}/product/${product.id}`}> {/* הוספת השפה לקישור */}
                  
                  <div className="relative aspect-[3/4] overflow-hidden rounded-[32px] bg-[#fcfcfc] transition-all duration-700 group-hover:bg-[#f7f7f7]">
                        <Image
                        src={product.image_url}
                        alt={product.title || "Gutman Jewelry"}
                        fill
                        className="object-contain p-8 transition-transform duration-[1.2s] group-hover:scale-105"
                        />
                  </div>

                  {/* פרטי מוצר */}
                  <div className="mt-6 text-center">
                    <h3 className="text-[11px] uppercase tracking-[0.25em] text-gray-800 font-light mb-2">
                      {product.title}
                    </h3>
                    <p className="text-[13px] text-black font-light tracking-widest">
                      {t('currency')}{Number(product.price).toLocaleString()}
                    </p>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* עיצוב החיצים */}
        <style jsx global>{`
          .best-sellers-swiper .swiper-button-next,
          .best-sellers-swiper .swiper-button-prev {
            color: #000 !important;
            transform: scale(0.5);
            transition: all 0.3s;
          }
          /* תיקון מיקום החיצים בשפות שונות אם צריך */
          .best-sellers-swiper .swiper-button-next { right: 10px; }
          .best-sellers-swiper .swiper-button-prev { left: 10px; }
          
          .best-sellers-swiper .swiper-button-next:hover,
          .best-sellers-swiper .swiper-button-prev:hover {
            color: #ead690 !important;
          }
          .best-sellers-swiper .swiper-pagination-bullet-active {
            background: #ead690 !important;
          }
        `}</style>
      </div>
    </section>
  );
};

export default BestSellersSlider;