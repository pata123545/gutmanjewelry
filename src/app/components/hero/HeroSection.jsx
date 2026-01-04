import { getTranslations, getLocale } from 'next-intl/server';
import HeroHeader from './HeroHeader';
import HeroCard from './HeroCard';

const HeroSection = async () => {
  // שליפת התרגומים בשרת - פותר את שגיאת t is not defined
  const t = await getTranslations('Hero');
  const locale = await getLocale();

  return (
<section className="">
      {/* כאן הוספנו את ה-Header שיצרנו עכשיו */}
      <HeroHeader />
      
      <div className="max-w-[1700px] mx-auto px-4 md:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <HeroCard 
            image="https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/hero/606095025_122195677244542518_2633246900315274360.jpg"
            subtitle={t('leftCard.subtitle')}
            title={t('leftCard.title')}
            desc={t('leftCard.desc')}
            buttonText={t('leftCard.button')}
            link={`/${locale}/category/charm`}
            align="center"
          />
          <HeroCard 
            image="https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/hero/596713374_122192763362542518_4270168330234204138.jpg"
            subtitle={t('rightCard.subtitle')}
            title={t('rightCard.title')}
            buttonText={t('rightCard.button')}
            link={`/${locale}/category/engraved`}
            align="right"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;