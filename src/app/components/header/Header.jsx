"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ShoppingBag, Search, User, Heart, X, Menu, ChevronDown } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isRTL = locale === 'he';
  const langRef = useRef(null);

  // כתובת הלוגו מסופבייס (החלף בקישור הציבורי האמיתי שלך)
  const logoUrl = "https://afhhrnpwfmtderonxfhl.supabase.co/storage/v1/object/public/logo/Gutman%20Jewelry.png";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    router.push(segments.join('/'));
    setIsLangOpen(false);
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

  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ];

  return (
    <>
      <header className="w-full fixed top-0 z-[100] bg-[#0D0D0D]  border-b border-gray-100 text-black" dir="ltr">
        {/* Announcement Bar */}
        <div className="w-full bg-[#d4c5b3] h-8 flex items-center justify-center">
          <span className="text-[12px] tracking-[0.4em] uppercase font-light">
            {t('freeShipping')}
          </span>
        </div>

        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 h-20 flex items-center justify-between relative">
          
          {/* Logo Section */}
          <div className="flex-1 flex justify-start">
            <Link href={`/${locale}`} className="relative h-20 w-20 transition-transform">
              <img 
                src={logoUrl}
                alt="Gutman Jewelry"
                className="object-contain"
                style={{ 
                  display: 'block',
                  width: 'auto',
                  height: '80px',
                  maxWidth: 'none',
                  minHeight: '80px'
                }} 
/>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex flex-[3] justify-center h-full">
            <ul className="flex gap-8 h-full items-center">
              {navItems.map((item) => (
                <li 
                  key={item.name} 
                  className="h-full flex items-center group cursor-pointer relative"
                  onMouseEnter={() => setActiveMenu(item.id || null)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link 
                    href={item.slug ? `/${locale}/${item.slug}` : "#"}
                    className={`text-[13px] uppercase tracking-[0.2em] transition-colors hover:bg-gradient-to-r hover:from-[#BF953F] hover:via-[#FCF6BA] hover:to-[#AA771C] hover:bg-clip-text hover:text-transparent transition-all duration-500 ${item.slug === 'last-chance' ? 'bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent font-bold' : 'text-white'}`}
                  >
                    {item.name}
                  </Link>
                  <span className={`absolute bottom-5 left-0 h-[1.5px] bg-gradient-to-r from-[#BF953F] via-[#FCF6BA] to-[#AA771C] bg-clip-text text-transparent transition-all duration-300 ${activeMenu === item.id ? 'w-full' : 'w-0'}`} />
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions & Languages */}
          <div className="flex-1 flex items-center justify-end gap-6">
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-[10px] text-white tracking-widest uppercase hover:text-[#cbad73] transition-colors"
              >
                <span>{locale}</span>
                <ChevronDown size={12} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangOpen && (
                <div className="absolute top-full right-0 mt-4 bg-white border border-gray-100 shadow-xl min-w-[120px] py-2 z-[110]">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => handleLocaleChange(lang.code)}
                      className={`w-full text-right px-4 py-2 text-[11px] hover:bg-[#f4f1ee] transition-colors ${locale === lang.code ? 'font-bold bg-[#fafafa]' : 'font-light'}`}
                      dir="rtl"
                    >
                      {lang.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center gap-5 border-l border-gray-100 pl-6">
              <button className="hover:text-[#cbad73] text-white transition-colors"><Search size={20} strokeWidth={1.2}/></button>
              <button className="hover:text-[#cbad73] text-white transition-colors"><Heart size={20} strokeWidth={1.2}/></button>
              <button className="hidden md:block hover:text-[#cbad73] text-white transition-colors"><User size={20} strokeWidth={1.2}/></button>
              <button className="relative hover:text-[#cbad73] text-white transition-colors">
                <ShoppingBag size={20} strokeWidth={1.2}/>
                <span className="absolute -top-1.5 -right-2 bg-red-500  text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-normal">0</span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;