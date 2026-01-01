import React from 'react';

const EditorialSection = () => {
  return (
    <section className="bg-[#F9F9F9] py-24 px-6" dir="rtl">
      <div className="max-w-[1400px] mx-auto overflow-hidden rounded-[48px] bg-white shadow-sm border border-white">
        <div className="flex flex-col lg:flex-row items-stretch">
          
          {/* צד הטקסט */}
          <div className="w-full lg:w-2/5 p-12 lg:p-20 flex flex-col justify-center text-right">
            <span className="text-[10px] tracking-[0.5em] text-[#ead690] uppercase mb-6 block">
              Since 2024
            </span>
            <h2 className="text-4xl font-extralight tracking-tight text-black mb-8 leading-tight italic">
              אמנות של דיוק <br /> וניצוץ נצחי
            </h2>
            <p className="text-gray-500 text-sm leading-loose font-light mb-10 max-w-md">
              כל תכשיט ב-Gutman מעוצב מתוך מחשבה על הרגעים הקטנים שהופכים לזיכרונות גדולים. אנחנו משלבים טכניקות צורפות מסורתיות עם עיצוב מודרני וחסר פשרות.
            </p>
            <div>
              <button className="border-b border-black pb-2 text-[11px] uppercase tracking-[0.3em] hover:text-[#ead690] hover:border-[#ead690] transition-all">
                גלי את הסיפור שלנו
              </button>
            </div>
          </div>

          {/* צד התמונה */}
          <div className="w-full lg:w-3/5 min-h-[400px] lg:min-h-[600px] relative">
            <img 
              src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=2070&auto=format&fit=crop" 
              alt="Editorial Jewelry"
              className="w-full h-full object-cover shadow-inner"
            />
            {/* שכבת Overlay עדינה על התמונה למראה יוקרתי */}
            <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EditorialSection;