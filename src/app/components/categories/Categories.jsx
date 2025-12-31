import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

const Categories = async () => {
  const { data: categories, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('id', { ascending: true });

  if (error || !categories) return null;

  return (
    <section className="w-full bg-white py-24" dir="rtl">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Header: Minimalist & Clean */}
        <div className="mb-20 text-center">
          <span className="text-[11px] font-light uppercase tracking-[0.5em] text-gray-400 block mb-4">
            Curated Selections
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light text-gray-900 tracking-tight">
            הקולקציות שלנו
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="h-[1px] w-24 bg-black/10"></div>
          </div>
        </div>

        {/* The Grid: Powerhouse Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-2">
          {categories.map((category) => {
            const validSrc = category.image_url && category.image_url.trim() !== "" ? category.image_url : null;

            return (
              <Link 
                key={category.id} 
                href={`/category/${category.slug}`}
                className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#f4f4f4]"
              >
                {/* Image Component with sophisticated zoom */}
                {validSrc ? (
                  <Image
                    src={validSrc}
                    alt={category.name}
                    fill
                    className="object-cover object-center transition-transform duration-[1.5s] cubic-bezier(0.25, 0.46, 0.45, 0.94) group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-widest text-gray-400">
                    Image Pending
                  </div>
                )}

                {/* Refined Overlays */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/30" />
                
                {/* Content: Bottom Aligned Editorial Style */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white">
                  <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0">
                    <p className="mb-2 text-center text-[10px] uppercase tracking-[0.3em] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Explore
                    </p>
                    <h3 className="text-2xl font-serif font-light tracking-wide text-center">
                      {category.name}
                    </h3>
                  </div>
                  <div className="mt-4 h-[1px] w-0 bg-white/60 transition-all duration-700 group-hover:w-16" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;