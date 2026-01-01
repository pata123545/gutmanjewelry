"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ShoppingBag, Search, User, Heart, X, Menu, ChevronDown } from 'lucide-react';
import { logo } from '../../../assets/index';
import { useTranslations, useLocale } from 'next-intl';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [activeDrawer, setActiveDrawer] = useState(null);
  
  const t = useTranslations('Header');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const isRTL = locale === 'he';
  const langRef = useRef(null);

  // סגירת דרופדאון שפות בלחיצה בחוץ
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

  // מבנה ניווט עם תרגומים דינמיים
  const navItems = [
    { name: t('new'), slug: 'new' },
    { 
      name: t('jewelry'), 
      id: 'jewelry',
      columns: [
        { title: 'עגילים', items: ['כל העגילים', 'עגילי חישוק', 'עגילים צמודים', 'עגילים תלויים', 'עגילי זהב 14K'] },
        { title: 'שרשראות', items: ['כל השרשראות', 'שרשראות קצרות', 'שרשראות ארוכות', 'שרשראות שכבות', 'שרשראות בחריטה אישית', "שרשראות צ'ארמס", 'שרשראות זהב 14K'] },
        { title: 'טבעות', items: ['כל הטבעות', 'טבעות בציפוי זהב/כסף', 'טבעות בחריטה אישית', 'טבעות זהב 14K'] },
        { title: 'צמידים', items: ['כל הצמידים', 'צמידים עדינים', 'צמידים קשיחים', 'צמידי רגל', 'צמידים בחריטה אישית', "צמידי צ'ארמס", 'צמידי זהב 14K'] },
      ],
      promos: [
        { title: "תכשיטי חריטה", img: "/images/engraving.jpg" },
        { title: "עצבי תכשיט צ'ארם אישי", img: "/images/charms.jpg" }
      ]
    },
    { name: t('bestSellers'), slug: 'best-sellers' },
    { 
      name: t('collections'), 
      id: 'collections',
      columns: [
        { title: 'טרנדי', items: ["תכשיטי צ'ארמס", 'Mix & Match', 'תכשיטי חריטה', 'פנינים', 'תכשיטי פרחים', 'עגילי סטייטמנט', 'כל הקולקציות'] },
        { title: 'קולקציות', items: ['Vintage Glam', 'Coastal Vibes', 'Israel At Heart', 'Elements', 'The Fine Line', 'Beginnings', 'Mystic Eye', 'כל הקולקציות'] },
        { title: 'לפי חומר', items: ['תכשיטים בציפוי', 'זהב 14K', 'תכשיטי כסף 925', 'תכשיטי יהלומים', 'פנינים', 'אבני חן וחרוזים'] },
      ],
      promos: [{ title: "תכשיטי כלה", img: "/images/bridal.jpg" }]
    },
    { 
      name: t('gold14k'), 
      id: 'gold',
      columns: [
        { title: 'זהב 14K', items: ['עגילי זהב 14K', 'שרשראות זהב 14K', 'צמידי זהב 14K', 'טבעות זהב 14K', 'תכשיטי חריטה 14K'] },
        { title: 'לפי חומר', items: ['תכשיטי כסף 925', 'תכשיטי יהלומים', 'טבעות זהב 14-18K'] },
      ],
      promos: [{ title: "חריטה בזהב 14K", img: "/images/gold-engraving.jpg" }]
    },
    { 
      name: t('gifts'), 
      id: 'gifts',
      columns: [
        { title: 'רעיונות למתנות', items: ['המתנות הפופולריות', 'תכשיטי לבבות', 'מתנות לנערות', 'מתנות למורות ולגננות', 'לכל ההצעות שלנו'] },
        { title: 'לפי תקציב', items: ['עד 100 ש״ח', 'עד 200 ש״ח', 'עד 300 ש״ח', 'עד 500 ש״ח'] },
        { title: 'אקססוריז', items: ['מוצרי נייר', 'כרטיסי ברכה', 'אחסון וארגון תכשיטים', 'גיפט קארד'] },
      ]
    },
    { name: t('lastChance'), slug: 'last-chance' },
  ];

  const languages = [
    { code: 'he', label: 'עברית' },
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ];

  return (
    <>
      <header className="w-full fixed top-0 z-[100] bg-white border-b border-gray-100 text-black" dir="ltr">
        {/* Announcement Bar */}
        <div className="w-full bg-[#d4c5b3] h-8 flex items-center justify-center">
          <span className="text-[12px] tracking-[0.4em] uppercase font-light">
            {t('freeShipping')}
          </span>
        </div>

        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 h-20 flex items-center justify-between relative">
          
          <div className="flex-1 flex justify-start">
            <Link href={`/${locale}`} className="relative h-40 w-40 transition-transform hover:scale-105">
              <Image src={logo} alt="Gutman" fill className="object-contain object-left brightness-0" priority />
            </Link>
          </div>

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
                    className={`text-[11px] uppercase tracking-[0.2em] transition-colors hover:text-[#cbad73] ${item.name === t('lastChance') ? 'text-red-700' : 'text-black'}`}
                  >
                    {item.name}
                  </Link>
                  <span className={`absolute bottom-5 left-0 h-[1.5px] bg-black transition-all duration-300 ${activeMenu === item.id ? 'w-full' : 'w-0'}`} />
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex-1 flex items-center justify-end gap-6">
            {/* Language Dropdown */}
            <div className="relative" ref={langRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-[10px] tracking-widest uppercase hover:text-[#cbad73] transition-colors"
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
              <button className="hover:text-[#cbad73] transition-colors"><Search size={19} strokeWidth={1.2}/></button>
              <button className="hover:text-[#cbad73] transition-colors"><Heart size={19} strokeWidth={1.2}/></button>
              <button className="hidden md:block hover:text-[#cbad73] transition-colors"><User size={19} strokeWidth={1.2}/></button>
              <button className="relative hover:text-[#cbad73] transition-colors">
                <ShoppingBag size={19} strokeWidth={1.2}/>
                <span className="absolute -top-1.5 -right-2 bg-black text-white text-[7px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
              </button>
            </div>
          </div>
        </div>

        {/* Mega Menu logic remains the same but uses the item objects from navItems */}
        {/* ... (Mega Menu JSX) */}
      </header>
    </>
  );
};

export default Header;