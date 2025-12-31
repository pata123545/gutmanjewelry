"use client";

import Image from 'next/image';
import Link from 'next/link';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="w-full bg-white" dir="rtl">
      {/* הגבלת רוחב הגריד כדי שלא יתפרס מדי על מסכים גדולים */}
      <div className="max-w-[1100px] mx-auto px-6">
        
        {/* הגדרת הגריד: 2 עמודות בנייד, 5 עמודות במסך גדול */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-16">
          {products.map((product) => (
            <div key={product.id} className="group flex flex-col items-center">
              <Link href={`/product/${product.id}`} className="w-full">
                
                {/* קונטיינר התמונה: כאן קורה הקסם של ה-Luxury */}
                <div className="relative aspect-square w-full max-w-[150px] mx-auto bg-white overflow-hidden transition-all duration-700">
                  <Image
                    src={product.image_url} // וודא שזה השם המדויק בסופאבייס
                    alt={product.title}
                    fill
                    className="object-contain p-10 transition-transform duration-1000 group-hover:scale-105"
                    sizes="140px"
                    unoptimized // הוסף את זה רק לבדיקה כדי לראות אם התמונה מופיעה
                  />
                </div>

                {/* פרטי המוצר: פונטים קטנים ומרווחים */}
                <div className="mt-6 text-center">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-800 font-light italic leading-tight">
                    {product.title}
                  </h3>
                  
                  {/* פס הפרדה קטן שמופיע ב-Hover (אופציונלי) */}
                  <div className="w-0 h-[0.5px] bg-[#cbad73] mx-auto mt-2 transition-all duration-500 group-hover:w-4 opacity-50"></div>
                  
                  <p className="text-[11px] font-serif text-gray-400 mt-3 tracking-widest font-light">
                    ₪{product.price ? Number(product.price).toLocaleString() : '---'}
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;