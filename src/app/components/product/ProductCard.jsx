"use client";

import React, { useState } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Eye } from 'lucide-react';

const ProductCard = ({ product, locale = 'he' }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  // הגנה למקרה שהמוצר לא נטען כראוי
  if (!product) return null;

  return (
    <div className="relative w-full aspect-[3/4] group overflow-hidden bg-white cursor-pointer">
      
      {/* 1. תמונת המוצר - פותר את בעיית ה"תמונות הקטנות" */}
      <div className="absolute inset-0 z-0">
        <NextImage
          src={product.image_url || product.image || '/placeholder.jpg'}
          alt={product.title || "Jewelry Item"}
          fill
          sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
          priority={false}
        />
      </div>

      {/* 2. שכבות Overlay - מופיעות רק במעבר עכבר (Hover) */}
      {/* שכבת כהות עדינה על כל התמונה */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-700 z-10" />
      
      {/* גרדיאנט שחור עמוק בתחתית כדי שהטקסט הלבן יקפוץ לעין */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* 3. כפתור Wishlist (לב) */}
      <button 
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsFavorite(!isFavorite);
        }}
        className="absolute top-4 right-4 z-30 transition-all duration-300 transform group-hover:scale-110"
      >
        <Heart 
          size={22} 
          strokeWidth={1.5} 
          className={`transition-all duration-300 ${
            isFavorite 
            ? 'fill-[#C5A25D] stroke-[#C5A25D]' 
            : 'stroke-white opacity-0 group-hover:opacity-100 shadow-sm'
          }`} 
        />
      </button>

      {/* 4. תוכן הכרטיס - שם, מחיר וכפתורים */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-20 text-white flex flex-col justify-end transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
        
        {/* פרטי המוצר */}
        <div className="mb-5 text-center md:text-right">
          <h3 className="text-[18px] md:text-[22px] tracking-[0.15em] font-extralight uppercase leading-tight mb-2">
            {product.title}
          </h3>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-[14px] md:text-[16px] font-light tracking-widest text-[#C5A25D]">
              ₪{product.price ? Number(product.price).toLocaleString() : '---'}
            </span>
          </div>
        </div>

        {/* 5. כפתורי פעולה מהירה */}
        <div className="flex items-center gap-2 w-full">
          
          {/* כפתור הוספה לעגלה - זהב קלאסי */}
          <button 
            className="flex-[3] bg-[#C5A25D] text-white py-3 text-[10px] tracking-[0.25em] uppercase font-bold hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-2"
            onClick={(e) => { e.preventDefault(); /* כאן תוסיפי פונקציית הוספה לעגלה */ }}
          >
            <ShoppingBag size={14} />
            <span>ADD TO BAG</span>
          </button>

          {/* כפתור צפייה - אפקט זכוכית (Blur) */}
          <Link href={`/${locale}/product/${product.id}`} className="flex-1 h-11 border border-white/30 backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300">
            <Eye size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </div>

      {/* 6. מסגרת דקה "Luxury Frame" שמופיעה ב-Hover */}
      <div className="absolute inset-4 border border-white/0 transition-all duration-1000 group-hover:border-white/10 pointer-events-none z-30" />
      
      {/* תווית Best Seller (רק אם קיים במאפיינים) */}
      {product.is_best_seller && (
        <div className="absolute top-4 left-4 z-20">
          <span className="text-[8px] tracking-[0.3em] bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-white uppercase font-light">
            Best Seller
          </span>
        </div>
      )}
    </div>
  );
};

export default ProductCard;