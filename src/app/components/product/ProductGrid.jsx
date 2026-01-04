"use client";

import Link from 'next/link';

const ProductGrid = ({ products }) => {
  if (!products || products.length === 0) return null;

  return (
    <section className="w-full py-10" dir="rtl">
      {/* הקונטיינר המרכזי שמגביל את הרוחב למראה יוקרתי */}
      <div className="max-w-[1300px] mx-auto px-4 md:px-10">
        
        {/* גריד: 2 עמודות בנייד, 4 בטאבלט, 5 במחשב */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-x-4 gap-y-12 md:gap-x-8">
          
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/product/${product.id}`} className="flex flex-col">
                
                {/* 1. קונטיינר התמונה - נקי עם מרחב נשימה */}
                <div className="relative aspect-[4/5] w-full bg-white shadow-lg overflow-hidden flex items-center justify-center transition-colors duration-500 group-hover:bg-[#f7f7f7]">
                  <img
                    src={product.image_url}
                    alt={product.title}
                    className="w-20 h-20 object-contain transition-transform duration-1000 ease-out group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* פס זהב דק שמופיע בתחתית התמונה במעבר עכבר */}
                  <div className="absolute bottom-0 left-0 w-0 h-[1.5px] shadow-lg bg-[#ead690] transition-all duration-700 group-hover:w-full"></div>
                </div>

                {/* 2. פרטי המוצר - טיפוגרפיה מינימליסטית */}
                <div className="mt-5 flex flex-col items-center text-center">
                  <h3 className="text-[10px] md:text-[11px] uppercase tracking-[0.25em] text-gray-800 font-light leading-tight transition-colors duration-300 group-hover:text-black">
                    {product.title}
                  </h3>
                  
                  {/* קו הפרדה עדין מאוד */}
                  <div className="w-4 h-4 bg-gray-100 my-2 group-hover:bg-[#ead690]/30 transition-colors"></div>
                  
                  <p className="text-[12px] md:text-[13px] tracking-widest text-[#ead690] font-light">
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