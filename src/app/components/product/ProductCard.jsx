"use client";
import React from 'react';
import NextImage from 'next/image';

const ProductCard = ({ product }) => {
  if (!product) return null;

  return (
    <div className="relative w-full h-full group overflow-hidden bg-neutral-200">
      {/* תמונה שממלאת את כל שטח הכרטיס */}
      <NextImage
        src={product.image_url || product.image || '/placeholder.jpg'}
        alt={product.name || "Jewelry"}
        fill
        priority
        className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
      />

      {/* שכבת הצללה דקה כדי שהטקסט יבלוט */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-all duration-700" />
      
      {/* טקסט שצף על התמונה - נקי ויוקרתי */}
      <div className="absolute bottom-16 left-12 text-white z-20">
        <h3 className="text-[28px] md:text-[40px] tracking-[0.2em] font-extralight uppercase">
          {product.name}
        </h3>
        <p className="text-[20px] md:text-[24px] mt-2 font-light opacity-90">
          ₪{product.price}
        </p>
        
        <button className="mt-8 border border-white/50 bg-white/10 backdrop-blur-md px-10 py-4 text-[11px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500">
          Explore +
        </button>
      </div>
    </div>
  );
};

export default ProductCard;