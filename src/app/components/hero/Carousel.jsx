"use client";

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { banner2 } from '../../../assets/index';

const slides = [
  {
    id: 1,
    imageUrl: banner2,
    altText: "קולקציית טבעות יוקרה",
  },
  // במידה ותוסיף עוד סליידים בעתיד
];

const Carousel = ({ autoSlide = true, autoSlideInterval = 5000 }) => {
  const [curr, setCurr] = useState(0);

  const next = useCallback(() => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  }, []);

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, [autoSlide, autoSlideInterval, next]);
  
  return (
    <section className="w-full max-w-[1905px] pt-15 mx-auto relative overflow-hidden bg-[#E5E1DA]" dir="rtl">
      
      {/* Container הסליידים - גובה דסקטופ 523px */}
      <div 
        className="flex transition-transform duration-[1.2s] ease-[cubic-bezier(0.23,1,0.32,1)] h-[400px] md:h-[500px] lg:h-[523px]"
        style={{ transform: `translateX(${curr * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={s.id} className="w-full flex-shrink-0 relative h-full">
            
            {/* תמונה נקייה לחלוטין - ללא Overlay כהה */}
            <Image
              src={s.imageUrl}
              alt={s.altText}
              fill
              priority={i === 0}
              className="object-cover"
              sizes="100vw"
            />
            
          </div>
        ))}
      </div>

      {/* ניווט Luxury Pagination - קווים דקים בצבע שחור/פחם שמתאים לרקע החול */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-end gap-6">
        {slides.map((_, i) => (
          <button 
            key={i} 
            onClick={() => setCurr(i)} 
            className="group flex flex-col items-center gap-2"
          >
            <span className={`text-[8px] tracking-widest transition-all duration-500 font-light ${curr === i ? 'text-[#1A1A1A]' : 'text-[#1A1A1A]/30'}`}>
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

      {/* מסגרת קטלוג דקה מאוד בלבן שקוף למראה פרימיום */}
      <div className="absolute inset-6 border border-white/20 pointer-events-none z-20 hidden lg:block" />
    </section>
  );
};

export default Carousel;