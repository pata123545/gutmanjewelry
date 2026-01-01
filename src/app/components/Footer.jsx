import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#f0f0f0] pt-24 pb-12 px-6 border-t border-white/5" dir="rtl">
      <div className="max-w-[1400px] mx-auto">
        
        {/* סקשן ניוזלטר - מותאם לרקע כהה */}
        <div className="flex flex-col items-center text-center mb-24">
          <h3 className="text-[11px] uppercase tracking-[0.4em] text-[#ead690] mb-6">Stay Connected</h3>
          <h2 className="text-3xl font-light italic mb-10 text-white">הצטרפי לעולם של Gutman</h2>
          <form className="w-full max-w-md flex border-b border-white/20 pb-2 transition-all focus-within:border-[#ead690]">
            <input 
              type="email" 
              placeholder="כתובת האימייל שלך" 
              className="bg-transparent flex-grow text-sm font-light outline-none py-2 px-4 text-white placeholder:text-gray-500"
            />
            <button className="text-[10px] uppercase tracking-[0.2em] font-medium px-4 text-[#ead690] hover:text-white transition-colors">
              הצטרפות
            </button>
          </form>
        </div>

        {/* מבנה הקישורים */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-right">
          
          {/* לוגו ותיאור קצר */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl tracking-[0.2em] font-light mb-6 uppercase text-white">Gutman</h2>
            <p className="text-gray-400 text-xs leading-relaxed font-light">
              תכשיטי יוקרה בעיצוב אישי. כל פריט הוא סיפור של אמנות, רגש ודיוק חסר פשרות.
            </p>
          </div>

          {/* ניווט */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium mb-6 text-white">קולקציות</h4>
            <ul className="space-y-4 text-gray-400 text-[13px] font-light">
              <li className="hover:text-[#ead690] cursor-pointer transition-colors">טבעות אירוסין</li>
              <li className="hover:text-[#ead690] cursor-pointer transition-colors">שרשראות יהלומים</li>
              <li className="hover:text-[#ead690] cursor-pointer transition-colors">צמידי טניס</li>
              <li className="hover:text-[#ead690] cursor-pointer transition-colors">קולקציית ערב</li>
            </ul>
          </div>

          {/* שירות לקוחות */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium mb-6 text-white">שירות לקוחות</h4>
            <ul className="space-y-4 text-gray-400 text-[13px] font-light">
              <li className="hover:text-[#ead690] cursor-pointer transition-colors">משלוחים והחזרות</li>
              <li className="hover:text-[#ead690] cursor-pointer transition-colors">מדריך מידות</li>
              <li className="hover:text-[#ead690] cursor-pointer transition-colors">צור קשר</li>
              <li className="hover:text-[#ead690] cursor-pointer transition-colors">שאלות נפוצות</li>
            </ul>
          </div>

          {/* אינסטגרם / סושיאל */}
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-medium mb-6 text-white">עקבו אחרינו</h4>
            <div className="flex gap-6 justify-start">
              <span className="text-gray-400 hover:text-[#ead690] cursor-pointer text-sm">Instagram</span>
              <span className="text-gray-400 hover:text-[#ead690] cursor-pointer text-sm">Facebook</span>
              <span className="text-gray-400 hover:text-[#ead690] cursor-pointer text-sm">Pinterest</span>
            </div>
          </div>
        </div>

        {/* זכויות יוצרים */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] text-gray-500 tracking-widest uppercase">
            © 2026 GUTMAN JEWELRY. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <span className="text-[10px] text-gray-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">תקנון האתר</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest cursor-pointer hover:text-white transition-colors">הצהרת נגישות</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;