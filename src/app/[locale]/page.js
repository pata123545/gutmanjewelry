import { supabase } from '@/lib/supabase';
import Carousel from '../components/hero/Carousel';
import FeaturedCollections from '../components/FeaturedCollections';
import BestSellers from '../components/BestSellers';
import EditorialSection from '../components/EditorialSection';
import HeroSection from '../components/hero/HeroSection';
import NewArrivals from '../components/home/NewArrivals';
import Partners from '../components/Partners';
import VisitStore from '../components/home/VisitStore';

// ב-Next.js 15, הארגומנט מגיע כ-props
export default async function Home(props) {
  // 1. חילוץ ה-params בצורה תקינה (פותר את ה-Error שקיבלת)
  const params = await props.params;
  const locale = params.locale;

  // 2. שליפת נתונים מהטבלה המעודכנת 'bestsellers'
  const { data: products, error } = await supabase
    .from('products')
    .select('*');

  // טיפול בשגיאת סופבייס (לא מונע מכל האתר לעלות)
  if (error) {
    console.error("Supabase error:", error.message);
  }

  return (
    <main className="w-full mx-auto px-5 md:px-8 pt-[95px] pb-10 relative">
      <Carousel />
      <HeroSection />
      
      {/* New Arrivals עם הגנה למערך ריק */}
      <section className="max-w-[1300px] bg-[#F9F9F9] mx-auto px-6 md:px-12 py-20">
        <NewArrivals products={products || []} />
      </section>

      <FeaturedCollections />
      
      {/* וודא שגם BestSellers מקבל את הנתונים נכון */}
      <BestSellers products={products || []} />
      
      <EditorialSection />
      <Partners />
      <VisitStore />
    </main>
     
  );
}