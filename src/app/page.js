import { supabase } from '@/lib/supabase';
import Categories from './components/categories/Categories';
import Carousel from './components/hero/Carousel';


export default async function Home() {
  // שליפת הנתונים מהטבלה 'jewelry'
  const { data: products, error } = await supabase
    .from('jewelry')
    .select('*');

  if (error) {
    return <div className="p-10 text-red-500">שגיאה בטעינת הנתונים: {error.message}</div>;
  }

  return (
    
    <main className="w-full mx-auto px-5 md:px-8 pt-[120px]  pb-10 relative">
      <Carousel />
      <section className="max-w-[1300px] bg-[#f7f7f7] mx-auto px-6 md:px-12 py-25">
      <Categories />
      </section>
      
    </main>
  );
}