import { supabase } from '../../../../lib/supabase';
import { notFound } from 'next/navigation';
import ProductCard from '../../../components/product/ProductCard'; // ודאי שהנתיב לקומפוננטת כרטיס מוצר נכון

export default async function CategoryPage({ params }) {
  const { slug, locale } = params;

  // 1. שליפת פרטי הקטגוריה מ-Supabase
  const { data: category, error: catError } = await supabase
    .from('categories')
    .select('*')
    .eq('slug', slug)
    .single();

  if (catError || !category) {
    notFound();
  }

  // 2. שליפת מוצרים השייכים לקטגוריה הזו
  const { data: products, error: prodError } = await supabase
    .from('products')
    .select('*')
    .eq('category_id', category.id);

  if (prodError) {
    console.error('Error fetching products:', prodError);
  }

  return (
    <div className="bg-black min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* כותרת הקטגוריה */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extralight text-white italic tracking-wider mb-4">
            {category.name} {/* כאן אפשר להוסיף לוגיקה לתרגום אם יש עמודת name_he */}
          </h1>
          <div className="h-[1px] w-24 bg-[#C5A25D] mx-auto opacity-50"></div>
        </header>

        {/* גריד מוצרים */}
        {products?.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} locale={locale} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-neutral-500 tracking-widest uppercase text-sm">
              בקרוב קולקציה חדשה...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}