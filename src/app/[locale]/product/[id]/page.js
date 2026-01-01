"use client";

import Image from 'next/image';
import { useState } from 'react';

const ProductPage = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-20" dir="rtl">
      <div className="flex flex-col lg:flex-row gap-16">
        
        {/* עמודת התמונות - 60% מהרוחב */}
        <div className="w-full lg:w-[60%] space-y-4">
          <div className="relative aspect-[4/5] bg-[#f9f9f9] rounded-[32px] overflow-hidden group">
            <Image
              src={product.image_url}
              alt={product.title}
              fill
              className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105"
            />
          </div>
          {/* כאן אפשר להוסיף גלריית תמונות קטנות (Thumbnails) מתחת */}
        </div>

        {/* עמודת פרטי המוצר - 40% מהרוחב */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center">
          <nav className="text-[10px] tracking-[0.2em] text-gray-400 uppercase mb-8">
            <Link href="/">Home</Link> / <Link href="/shop">Collections</Link>
          </nav>

          <h1 className="text-3xl font-light tracking-[0.1em] text-gray-800 mb-4 italic">
            {product.title}
          </h1>
          
          <p className="text-[#ead690] text-xl font-light tracking-widest mb-10">
            ₪{Number(product.price).toLocaleString()}
          </p>

          <div className="space-y-8">
            {/* בחירת מידה - אלמנט קריטי בתכשיטים */}
            <div>
              <span className="text-[11px] uppercase tracking-[0.2em] text-gray-400 block mb-4">בחר מידה</span>
              <div className="flex gap-3">
                {['12', '14', '16', '18'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 rounded-full border text-[12px] transition-all duration-300 ${
                      selectedSize === size 
                      ? 'border-black bg-black text-white' 
                      : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* כפתור הוספה לסל - יוקרתי ועוצמתי */}
            <button className="w-full py-5 bg-black text-white text-[11px] uppercase tracking-[0.3em] rounded-full hover:bg-gray-800 transition-all duration-500 shadow-xl shadow-black/10">
              הוספה לתיק הקניות
            </button>

            {/* תיאור מוצר מתקפל (Accordion) */}
            <div className="pt-10 border-t border-gray-100 mt-10">
              <details className="group" open>
                <summary className="list-none flex justify-between items-center cursor-pointer uppercase text-[11px] tracking-[0.2em]">
                  תיאור ופרטים
                  <span className="group-open:rotate-180 transition-transform">↓</span>
                </summary>
                <p className="pt-6 text-[13px] text-gray-500 leading-loose font-light">
                  {product.description || "תכשיט ייחודי שעוצב בקפידה תוך שימוש בחומרים האיכותיים ביותר. פריט זה משלב אלגנטיות נצחית עם נגיעה מודרנית."}
                </p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};