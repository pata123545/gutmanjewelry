"use client";
import { useState, useEffect, useCallback } from 'react';
import NextImage from 'next/image';

const Carousel = ({ 
  // מאפשר להעביר סליידים מבחוץ (למשל מסופבייס) או להשתמש בברירת מחדל
  slidesData = [], 
  autoSlide = true, 
  autoSlideInterval = 5000 
}) => {
  const [curr, setCurr] = useState(0);

  // נתונים לבדיקה במידה ולא הועברו slidesData (Fallback)
  const defaultSlides = [
    {
      id: 1,
      imageUrl: "https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/hero/banner1.png",
      altText: "קולקציית טבעות יוקרה",
    },
       {
      id: 2,
      imageUrl: "https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/hero/banner3.png",
      altText: "קולקציית טבעות יוקרה",
    },
        {
      id: 3,
      imageUrl: "https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/hero/banner.jpg",
      altText: "קולקציית טבעות יוקרה",
    }
  ];

  const finalSlides = slidesData.length > 0 ? slidesData : defaultSlides;

  const next = useCallback(() => {
    setCurr((curr) => (curr === finalSlides.length - 1 ? 0 : curr + 1));
  }, [finalSlides.length]);

  useEffect(() => {
    if (!autoSlide || finalSlides.length <= 1) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next, finalSlides.length]);
  
  return (
    <section className="w-full max-w-[1905px] pt-10 mx-auto relative overflow-hidden bg-[#f7f6f5]" dir="rtl">
      
      {/* Container הסליידים */}
      <div 
        className="flex transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] h-[400px] md:h-[500px] lg:h-[523px]"
        style={{ transform: `translateX(${curr * 100}%)` }}
      >
        {finalSlides.map((s, i) => (
          <div key={s.id} className="w-full flex-shrink-0 relative h-full">
            
            {/* שימוש ב-NextImage אופטימלי */}
            <NextImage
              src={s.imageUrl}
              alt={s.altText}
              fill
              priority={i === 0} // טוען את הסלייד הראשון מיד
              className="object-cover"
              sizes="100vw"
            />
            
          </div>
        ))}
      </div>

      {/* ניווט Luxury Pagination */}
      {finalSlides.length > 1 && (
        <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-end gap-6">
          {finalSlides.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurr(i)} 
              className="group flex flex-col items-center gap-2"
            >
              <span className={`text-[9px] tracking-[0.6em] transition-all duration-500 font-light ${curr === i ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/30'}`}>
                0{i + 1}
              </span>
              <div 
                className={`h-[1px] transition-all duration-1000 ease-in-out ${
                  curr === i ? "bg-[#1A1A1A] w-12" : "bg-[#1A1A1A]/20 w-6 group-hover:bg-[#1A1A1A]/40"
                }`}
              />
            </button>
          ))}
        </div>
      )}

      {/* מסגרת קטלוג דקה למראה פרימיום */}
      <div className="absolute inset-6 border border-white/10 pointer-events-none z-20 hidden lg:block" />
    </section>
  );
};

export default Carousel;