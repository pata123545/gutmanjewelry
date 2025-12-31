import { supabase } from "@/lib/supabase"; 
import { notFound } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

export default async function CategoryPage({ params }) {
  const { slug } = await params;

  // 1. שליפת הקטגוריה לפי ה-slug
  const { data: category, error: catError } = await supabase
    .from("categories")
    .select("*")
    .eq("slug", slug)
    .single();

  if (catError || !category) return notFound();

  // 2. שליפת מוצרים מטבלת jewelry שמתאימים לקטגוריה הזו
  const { data: products, error: prodError } = await supabase
    .from("jewelry")
    .select("*")
    .eq("category_id", category.id);

  if (prodError) console.error("Database Error:", prodError.message);

  return (
    <main className="min-h-screen bg-white pb-32" dir="rtl">
      {/* Header יוקרתי */}
      <header className="pt-40 pb-20 text-center">
        <div className="max-w-screen-xl mx-auto px-4">
          <span className="text-[#cbad73] text-[9px] tracking-[0.6em] uppercase block mb-4 opacity-70">
            Gutman Jewelry
          </span>
          <h1 className="text-3xl md:text-4xl font-serif font-extralight italic text-black tracking-[0.1em]">
            {category.name}
          </h1>
          <div className="w-12 h-[0.5px] bg-[#cbad73] mx-auto mt-8 opacity-40"></div>
        </div>
      </header>

      {/* Grid מוצרים */}
      <div className="max-w-[1200px] mx-auto px-6">
        {!products || products.length === 0 ? (
          <div className="text-center py-20 border-t border-gray-50">
            <p className="text-gray-400 font-serif italic text-sm tracking-widest">
              כרגע לא נמצאו פריטים בקולקציית {category.name}
            </p>
            <p className="text-[10px] mt-4 text-gray-300">
              וודא שבטבלת jewelry העמודה category_id מכילה את ה-ID: {category.id}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-20">
            {products.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id} className="group flex flex-col items-center">
                {/* קונטיינר תמונה קטן ויוקרתי */}
                <div className="relative aspect-square w-full max-w-[150px] mx-auto bg-white overflow-hidden">
                  <Image
                    src={product.image_url || '/placeholder.png'} 
                    alt={product.name}
                    fill
                    className="object-contain p-10 transition-transform duration-1000 group-hover:scale-105"
                    sizes="150px"
                  />
                </div>
                
                {/* פרטי מוצר */}
                <div className="mt-6 text-center">
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-gray-800 font-light italic leading-tight">
                    {product.name}
                  </h3>
                  <p className="text-[11px] font-serif text-gray-400 mt-2 tracking-widest">
                    ₪{Number(product.price).toLocaleString()}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}