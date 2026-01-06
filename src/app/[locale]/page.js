import { supabase } from '../../lib/supabase';
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
    <main className="min-h-screen pb-20"> 
      <Carousel />
      <HeroSection />
      
      {/* New Arrivals עם הגנה למערך ריק */}

        <NewArrivals products={products || []} />
      

      <FeaturedCollections />
      
      {/* וודא שגם BestSellers מקבל את הנתונים נכון */}
      <BestSellers products={products || []} />
      
      <EditorialSection />
      <Partners />
      <VisitStore />
    </main>
     
  );
}