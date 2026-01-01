"use client";
import React from 'react';
import { MapPin } from 'lucide-react';

const VisitStore = () => {
  return (
    <section className="w-full py-24 bg-[#f7f6f5] border-t border-neutral-100">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center md:items-end text-center md:text-right">
        
        {/* כותרת הסקשן */}
        <h2 className="text-[32px] md:text-[48px] tracking-[0.3em] font-extralight text-black uppercase mb-6">
          Visit Us In Store
        </h2>

        {/* טקסט תיאור - מיושר לימין כמו בתמונה */}
        <div className="max-w-[600px] mb-10">
          <p className="text-[16px] md:text-[18px] text-neutral-600 font-light leading-relaxed tracking-wide">
            בואי להכיר מקרוב את הקולקציות החדשות שלנו ולהנות מחוויית קנייה אישית. 
            הצוות שלנו ישמח לעזור לך לבחור את התכשיט המושלם עבורך 
            ולתת לך ייעוץ סטיילינג מקצועי בחנויות הדגל שלנו.
          </p>
        </div>

        {/* כפתור שחור - Luxury Style */}
        <button className="group relative overflow-hidden bg-[#333] text-white px-12 py-5 text-[14px] tracking-[0.4em] uppercase transition-all duration-500 hover:bg-black">
          <span className="relative z-10 flex items-center gap-3">
            החנויות שלנו
            <MapPin size={16} className="group-hover:translate-y-[-2px] transition-transform duration-300" />
          </span>
          {/* אפקט מילוי עדין ב-Hover */}
          <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
        </button>

      </div>
    </section>
  );
};

export default VisitStore;