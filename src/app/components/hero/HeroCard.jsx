"use client";
import Image from 'next/image';
import Link from 'next/link';

const HeroCard = ({ image, subtitle, title, desc, buttonText, link, align = "center" }) => {
  const safeImage = image && image.trim() !== "" ? image : null;

  return (
    <div className="relative group overflow-hidden aspect-[4/5] md:aspect-[14/11] ">
      {/* תמונה עם אפקט זום איטי מאוד */}
      {safeImage ? (
        <Image 
          src={safeImage} 
          alt={title || "Collection Image"}
          fill
          priority
          className="object-cover transition-transform duration-[4s] cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-[#E5E5E5]">
          <span className="text-[9px] tracking-[0.8em] text-gray-400 uppercase font-light">
            Gutman Imagery Pending
          </span>
        </div>
      )}

      {/* Overlay שכבות - פחות שחור, יותר עומק */}
      <div className="absolute inset-0 bg-black/5 transition-colors duration-1000 group-hover:bg-black/20" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 opacity-70" />
      
      {/* Content Container */}
      <div className={`absolute inset-0 flex flex-col p-10 md:p-20 
        ${align === "center" ? "items-center justify-center text-center" : "items-end justify-end text-right"}`}>
        
        {/* Subtitle - כתב דק וקטן מאוד */}
        {subtitle && (
          <div className="overflow-hidden mb-4">
            <span className="text-white text-[10px] md:text-[11px] tracking-[0.7em] uppercase font-extralight block transform transition-transform duration-1000 group-hover:translate-y-0 translate-y-full">
              {subtitle}
            </span>
          </div>
        )}
        
        {/* Title - הלב של העיצוב הלקשרי */}
        <div className="overflow-hidden">
          <h2 className="text-white text-5xl md:text-[85px] font-serif font-light tracking-[-0.02em] leading-[0.85] mb-2 transform transition-transform duration-1000 group-hover:scale-[1.02]">
            {title}
          </h2>
        </div>
        
        {/* Description - סגנון עריכתי (Editorial) */}
        {desc && (
          <p className="text-white text-base md:text-xl font-serif italic font-extralight opacity-80 mt-2 max-w-sm leading-relaxed">
            {desc}
          </p>
        )}
        
        {/* Button - מעבר חלק ומינימליסטי */}
        {link && buttonText && (
          <Link href={link} className="mt-14 relative group/link">
            <div className="flex flex-col items-center">
               <span className="text-white text-[10px] tracking-[0.5em] uppercase font-light pb-2 transition-all duration-500">
                {buttonText}
              </span>
              {/* קו תחתון יוקרתי שנפתח מהאמצע */}
              <div className="h-[0.5px] w-12 bg-white/50 transition-all duration-700 group-hover/link:w-24 group-hover/link:bg-white" />
            </div>
          </Link>
        )}
      </div>

      {/* Frame דק מסביב לכרטיס שמופיע ב-Hover (אופציונלי ליוקרה מוגברת) */}
      <div className="absolute inset-4 border border-white/0 transition-all duration-1000 group-hover:border-white/10 pointer-events-none" />
    </div>
  );
};

export default HeroCard;