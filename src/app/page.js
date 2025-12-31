import { supabase } from '@/lib/supabase';
import Carousel from './components/hero/Carousel';
import Categories from './components/categories/Categories';


export default async function Home() {
  // שליפת הנתונים מהטבלה 'jewelry'
  const { data: products, error } = await supabase
    .from('jewelry')
    .select('*');

  if (error) {
    return <div className="p-10 text-red-500">שגיאה בטעינת הנתונים: {error.message}</div>;
  }

  return (
    <main style={{
      width: '100%',
      maxWidth: '1900px', // במחשב ובאייפד זה לא יימרח מדי
      margin: '0 auto',   // מרכז את האתר
      padding: '20px',    // מרווח מהצדדים בטלפון
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Carousel />
      <Categories />
      
    </main>
  );
}