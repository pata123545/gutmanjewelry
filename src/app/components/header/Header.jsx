"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShoppingBag, Heart, X, Menu, ChevronDown, Globe, Search, User } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const langRef = useRef(null);

  const logoUrl = "https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/logo/Gutman%20Jewelry.png";

  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ];

  const handleLocaleChange = (newLocale) => {
    if (newLocale === locale) return;
    const segments = pathname.split('/').filter(Boolean);
    const supportedLocales = ['he', 'en', 'ru'];
    if (supportedLocales.includes(segments[0])) {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    window.location.href = `/${segments.join('/')}`;
  };

  const navItems = [
    { name: t('new'), slug: 'new' },
    { name: t('jewelry'), id: 'jewelry' },
    { name: t('bestSellers'), slug: 'best-sellers' },
    { name: t('collections'), id: 'collections' },
    { name: t('gold14k'), id: 'gold' },
    { name: t('gifts'), id: 'gifts' },
    { name: t('lastChance'), slug: 'last-chance' },
  ];

  return (
    <>
      <header className="w-full fixed top-0 z-[100] bg-[#0D0D0D] border-b border-white/10" dir="ltr">
        {/* פס הכרזה */}
        <div className="w-full bg-[#d4c5b3] h-7 flex items-center justify-center px-4">
          <span className="text-[10px] tracking-[0.2em] uppercase font-medium text-black truncate">
            {t('freeShipping')}
          </span>
        </div>

        {/* Header Main */}
        <div className="max-w-[1800px] mx-auto px-4 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* צד שמאל: לוגו (קטן במובייל, גדול בדסקטופ) */}
          <div className="flex items-center flex-shrink-0">
            <Link href={`/${locale}`}>
              <img 
                src={logoUrl} 
                alt="Logo" 
                className="h-10 w-auto object-contain sm:h-10 lg:h-12" 
                /* h-7 = 28px למובייל | sm:h-10 = 40px | lg:h-12 = 48px */
              />
            </Link>
          </div>

          {/* מרכז: תפריט דסקטופ */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 mx-4">
              {navItems.map((item) => {
                // בודקים אם הפריט הנוכחי הוא Last Chance
                const isLastChance = item.slug === 'last-chance';

                if (isLastChance) {
                  return (
                    <span
                      key={item.name}
                      onClick={() => router.push(`/${locale}/${item.slug}`)}
                      className="text-[11px] xl:text-[12px] uppercase tracking-widest cursor-pointer font-bold underline underline-offset-4 transition-all
                                bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent"
                    >
                      {item.name}
                    </span>
                  );
                }

                // לכל שאר הפריטים נשתמש בקישור רגיל
                return (
                  <Link
                    key={item.name}
                    href={`/${locale}/${item.slug || ''}`}
                    className="text-[11px] xl:text-[12px] uppercase tracking-widest text-white transition-all duration-300
                              hover:bg-gradient-to-r hover:from-[#BF953F] hover:via-[#FCF6BA] hover:to-[#AA771C] 
                              hover:bg-clip-text hover:text-transparent"
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

          {/* צד ימין: שפה, אייקונים והמבורגר */}
          <div className="flex items-center gap-2 sm:gap-5">
            
            {/* בורר שפה (דסקטופ) */}
            <div className="relative hidden md:block" ref={langRef}>
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center gap-1 text-[10px] text-white uppercase hover:text-[#cbad73]">
                <Globe size={14} strokeWidth={1.5} />
                <span>{locale}</span>
                <ChevronDown size={10} className={isLangOpen ? 'rotate-180' : ''} />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-3 bg-white shadow-2xl min-w-[110px] py-2 border border-gray-100">
                  {languages.map((lang) => (
                    <button key={lang.code} onClick={() => handleLocaleChange(lang.code)} className="w-full text-right px-4 py-2 text-[11px] text-black hover:bg-gray-50 block" dir="rtl">
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* אייקונים */}
            <div className="flex items-center gap-3 border-l border-white/10 pl-3">
              {/* Search Button */}
              <button className="text-white transition-all duration-300 hover:text-[#BF953F]">
                <Search size={18} strokeWidth={1.5} />
              </button>

              {/* Heart Button */}
              <button className="text-white transition-all duration-300 hover:text-[#BF953F]">
                <Heart size={18} strokeWidth={1.5} />
              </button>

              {/* Shopping Bag Button */}
              <button className="relative text-white transition-all duration-300 hover:text-[#BF953F] group">
                <ShoppingBag size={18} strokeWidth={1.5} />
                <span className="absolute -top-1.5 -right-2 bg-[#BF953F] text-black text-[8px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-bold transition-transform group-hover:scale-110">
                  0
                </span>
              </button>
            </div>

            {/* המבורגר מובייל (מופיע רק ב-Mobile) */}
            <button onClick={() => setIsMobileMenuOpen(true)} className="lg:hidden text-white ml-1 p-1">
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* תפריט מובייל נפתח מימין */}
        <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[200] transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setIsMobileMenuOpen(false)}>
          <div className={`absolute top-0 right-0 h-full w-[280px] bg-[#0D0D0D] p-6 shadow-2xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-10 border-b border-white/10 pb-6">
               <button onClick={() => setIsMobileMenuOpen(false)} className="text-white"><X size={26} /></button>
               <img src={logoUrl} alt="Logo" className="h-6 w-auto" />
            </div>
            <nav className="flex flex-col gap-6 text-right" dir={locale === 'he' ? 'rtl' : 'ltr'}>
              {navItems.map((item) => (
                <Link key={item.name} href={`/${locale}/${item.slug || ''}`} className="text-[14px] uppercase tracking-widest text-white hover:text-[#cbad73]" onClick={() => setIsMobileMenuOpen(false)}>
                  {item.name}
                </Link>
              ))}
              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">Choose Language</p>
                <div className="flex gap-4 justify-end">
                  {languages.map((l) => (
                    <button key={l.code} onClick={() => handleLocaleChange(l.code)} className={`text-xs uppercase ${locale === l.code ? 'text-[#BF953F] font-bold' : 'text-gray-400'}`}>
                      {l.code}
                    </button>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
      {/* Spacer למניעת הסתרת תוכן הדף */}
      <div className="h-[92px] sm:h-[112px]"></div>
    </>
  );
};

export default Header;