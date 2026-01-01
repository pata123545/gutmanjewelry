import { supabase } from '../../lib/supabase';
import Carousel from '../components/hero/Carousel';
import FeaturedCollections from '../components/FeaturedCollections';
import BestSellers from '../components/BestSellers';
import EditorialSection from '../components/EditorialSection';
import Footer from '../components/Footer';
import HeroSection from '../components/hero/HeroSection';
import NewArrivals from '../components/home/NewArrivals';
import Partners from '../components/Partners';
import VisitStore from '../components/hero/VisitStore';


export default async function Home() {
  // שליפת הנתונים מהטבלה 'jewelry'
  const { data: products, error } = await supabase
    .from('jewelry')
    .select('*');

  if (error) {
    return <div className="p-10 text-red-500">שגיאה בטעינת הנתונים: {error.message}</div>;
  }

  return (
    
    <main className="w-full mx-auto px-5 md:px-8 pt-[95px]  pb-10 relative">
      <Carousel />
      <HeroSection />
      <section className="max-w-[1300px] bg-[#F9F9F9] mx-auto px-6 md:px-12 py-25">
      <NewArrivals />
      </section>
      <FeaturedCollections />
      <BestSellers products={products}/>
      <EditorialSection />
      <Partners />
      <VisitStore />
      <Footer />
    </main>
  );
}