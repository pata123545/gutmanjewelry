"use client";
import React from 'react';
import NextImage from 'next/image'; // שיניתי את השם ל-NextImage כדי שיהיה ברור
import Link from 'next/link';

const HeroCard = ({ image, subtitle, title, desc, buttonText, link, align = "center" }) => {
  // בדיקה אם ה-URL תקין. אם זה מגיע מסופבייס, זה יעבור כאן
  const safeImage = image && image.trim() !== "" ? image : null;

  return (
    <div className="relative group overflow-hidden aspect-[4/5] md:aspect-[14/11] w-full bg-[#f7f6f5]">
    
      {safeImage ? (
        <NextImage 
          src={safeImage} 
          alt={title || "Collection Image"}
          fill
          priority // באנרים תמיד מקבלים פריוריטי לטעינה מהירה
          className="object-cover transition-transform duration-[6s] ease-out group-hover:scale-110"
          sizes="100vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#E5E5E5]">
          <span className="text-[9px] tracking-[0.8em] text-black uppercase font-light">
            Gutman Imagery Pending
          </span>
        </div>
      )}

      {/* שכבות Overlay ליצירת עומק וקריאות לטקסט */}
      <div className="absolute inset-0 bg-black/10 transition-colors duration-1000 group-hover:bg-black/25" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/50 opacity-80" />
      
      {/* Content Container */}
      <div className={`absolute inset-0 flex flex-col p-10 md:p-20 z-10 
        ${align === "center" ? "items-center justify-center text-center" : "items-end justify-end text-right"}`}>
        
        {/* Subtitle */}
        {subtitle && (
          <div className="overflow-hidden mb-4">
            <span className="text-white text-[10px] md:text-[12px] tracking-[0.6em] uppercase font-light block transform transition-all duration-1000 group-hover:tracking-[0.8em]">
              {subtitle}
            </span>
          </div>
        )}
        
        {/* Title */}
        <div className="overflow-hidden">
          <h2 className="text-white text-5xl md:text-[90px] font-extralight tracking-tight leading-[0.9] mb-4 transform transition-transform duration-1000">
            {title}
          </h2>
        </div>
        
        {/* Description */}
        {desc && (
          <p className="text-white text-base md:text-lg font-light opacity-90 mt-2 max-w-md leading-relaxed tracking-wide">
            {desc}
          </p>
        )}
        
        {/* Button */}
        {link && buttonText && (
          <Link href={link} className="mt-12 group/link">
            <div className="flex flex-col items-center">
               <span className="text-white text-[11px] tracking-[0.4em] uppercase font-light pb-3 transition-all duration-300 group-hover:tracking-[0.6em]">
                {buttonText}
              </span>
              <div className="h-[1px] w-12 bg-white/40 transition-all duration-700 group-hover/link:w-28 group-hover/link:bg-white" />
            </div>
          </Link>
        )}
      </div>

      {/* מסגרת דקה ב-Hover */}
      <div className="absolute inset-6 border border-white/0 transition-all duration-1000 group-hover:border-white/10 pointer-events-none" />
    </div>
  );
};

export default HeroCard;