import Link from 'next/link';
import Image from 'next/image';
import { supabase } from '../../../lib/supabase';
import { getTranslations, getLocale } from 'next-intl/server';

const Categories = async () => {
  const locale = await getLocale();
  const t = await getTranslations('Categories');

  const { data: categories, error } = await supabase
    .from('categories')
    .select('*')
    .eq('is_active', true)
    .order('id', { ascending: true });

  if (error || !categories) return null;

  const isRTL = locale === 'he';

  return (
    <section className="w-full py-24" dir={isRTL ? "rtl" : "ltr"}>
      <div className="container mx-auto px-6 gap-10 lg:px-6">
        
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-[11px] font-light uppercase tracking-[0.5em] text-gray-400 block mb-4">
            {t('subtitle')}
          </span>
          <h2 className="text-4xl md:text-4xl font-serif font-light text-black tracking-tight">
            {t('title')}
          </h2>
          <div className="mt-8 flex justify-center">
            <div className="h-[1px] w-26 bg-black/10"></div>
          </div>
        </div>

        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-2">
          {categories.map((category) => {
            const validSrc = category.image_url && category.image_url.trim() !== "" ? category.image_url : null;

            return (
              <Link 
                key={category.id} 
                // חשוב: הוספת ה-locale לנתיב הקישור
                href={`/${locale}/category/${category.slug}`}
                className="group relative block aspect-[4/5] w-full overflow-hidden bg-[#f4f4f4]"
              >
                {validSrc ? (
                  <Image
                    src={validSrc}
                    alt={category.name}
                    fill
                    className="object-cover object-center rounded-xl overflow-hidden transition-transform duration-[1.5s] group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1300px) 50vw, 25vw"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-[10px] uppercase tracking-widest text-gray-400">
                    {t('imagePending')}
                  </div>
                )}

                <div className="absolute inset-0 bg-black/0 transition-all duration-700 group-hover:bg-black/40" />
                
                <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-white">
                  <div className="translate-y-4 transition-transform duration-500 group-hover:translate-y-0 text-center">
                    <p className="mb-2 text-[10px] uppercase tracking-[0.3em] opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      {t('explore')}
                    </p>
                    <h3 className="text-2xl font-serif font-light tracking-wide">
                      {/* שמות קטגוריות מ-DB לרוב נשארים כפי שהם, אלא אם יש לך עמודות תרגום ב-DB */}
                      {category.name}
                    </h3>
                  </div>
                  <div className="mt-4 h-[1px] w-0 bg-white/50 transition-all duration-700 group-hover:w-16" />
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