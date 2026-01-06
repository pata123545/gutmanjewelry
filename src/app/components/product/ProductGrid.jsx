"use client";
import React, { useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

// --- קומפוננטת הכרטיס המקצועית (ProductCard) ---
const ProductCard = ({ product, locale }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="relative w-full aspect-[3/4] group overflow-hidden bg-[#F8F8F8] shadow-sm">
      
      {/* 1. תמונת מוצר כרקע מלא */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src={product.image_url || '/placeholder.jpg'}
          alt={product.title}
          fill
          priority
          className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
        />
      </div>

      {/* 2. שכבת Overlay להכהיה (כדי שהטקסט הלבן יבלוט) */}
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-700 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 z-10" />

      {/* 3. כפתור לב (Wishlist) */}
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

      {/* 4. מידע וכפתורים שצפים על התמונה */}
      <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 z-20 text-white flex flex-col justify-end">
        
        {/* טקסט גדול ויוקרתי כפי שביקשת */}
        <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
          <h3 className="text-[24px] md:text-[30px] tracking-[0.1em] font-extralight uppercase leading-tight mb-1">
            {product.title}
          </h3>
          <p className="text-[18px] md:text-[20px] font-light opacity-90">
            ₪{Number(product.price).toLocaleString()}
          </p>
        </div>

        {/* 5. כפתורי פעולה שמופיעים ב-Hover */}
        <div className="mt-6 flex gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          
          {/* כפתור הוספה לעגלה מוזהב */}
          <button className="flex-1 bg-[#BF953F] text-white py-3.5 text-[10px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2">
            <ShoppingBag size={16} />
            ADD TO BAG
          </button>

          {/* כפתור Explore עם אפקט זכוכית */}
          <Link href={`/${locale}/product/${product.id}`} className="flex items-center justify-center w-14 h-14 border border-white/40 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300">
            <Eye size={20} />
          </Link>
        </div>
      </div>

      {/* מסגרת Hover פנימית דקה */}
      <div className="absolute inset-4 border border-white/0 transition-all duration-1000 group-hover:border-white/10 pointer-events-none z-30" />
    </div>
  );
};

// --- הקומפוננטה הראשית (Grid) ---
const ProductGrid = ({ products }) => {
  const locale = useLocale();
  if (!products || products.length === 0) return null;

  return (
    <section className="w-full py-20 bg-white" dir={locale === 'he' ? "rtl" : "ltr"}>
      <div className="max-w-[1700px] mx-auto px-6">
        
        {/* כותרת מינימליסטית */}
        <div className="mb-12 border-b border-neutral-100 pb-6 flex justify-between items-end">
           <h2 className="text-[14px] tracking-[0.4em] uppercase font-light text-black italic">Collections</h2>
           <span className="text-[10px] text-neutral-400 tracking-widest">{products.length} ITEMS</span>
        </div>

        {/* הגריד שמרנדר את הקרדים - שיניתי ל-4 עמודות למראה יוקרתי ומרווח */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;