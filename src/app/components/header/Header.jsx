import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Search, Heart, Menu } from 'lucide-react';
import { logo } from '../../../assets/index';

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50 transition-all duration-500" dir="rtl">
      {/* Announcement Bar - Luxury Gold Style */}
      <div className="w-full bg-[#cbad73] text-white text-[9px] py-2 text-center tracking-[0.4em] uppercase font-light">
        משלוחים חינם לכל העולם בקנייה מעל ₪1,000
      </div>

      {/* Main Navigation */}
      <div className="w-full bg-[#1a1a1a]/95 backdrop-blur-md border-b border-white/5 shadow-2xl">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12">
          <div className="flex flex-row items-center h-24">
            
            {/* צד ימין: תפריט ניווט (Desktop) */}
            <nav className="hidden lg:flex items-center gap-10 flex-1">
              {['קולקציות', 'טבעות', 'עגילים', 'הסיפור שלנו'].map((item) => (
                <Link 
                  key={item}
                  href={`/${item.toLowerCase().replace(' ', '-')}`} 
                  className="relative text-[14px] tracking-[0.3em] font-light text-gray-300 uppercase group overflow-hidden"
                >
                  <span className="group-hover:text-[#cbad73] transition-colors duration-500">{item}</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#cbad73] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                </Link>
              ))}
            </nav>

            {/* מרכז: לוגו - Branding (גדול ומרשים) */}
            <div className="flex justify-center flex-1">
              <Link href="/" className="relative h-40 w-40 transition-transform duration-700 hover:scale-105">
                <Image 
                  src={logo}
                  alt="Gutman Jewelry Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </Link>
            </div>

            {/* צד שמאל: אייקונים (Utilities) */}
            <div className="flex items-center gap-8 flex-1 justify-end">
              {/* חיפוש */}
              <button className="text-gray-300 hover:text-[#cbad73] transition-colors duration-300">
                <Search size={20} strokeWidth={1.2} />
              </button>
              
              {/* מועדפים */}
              <button className="hidden sm:block text-gray-300 hover:text-[#cbad73] transition-colors duration-300">
                <Heart size={20} strokeWidth={1.2} />
              </button>

              {/* סל קניות */}
              <Link href="/cart" className="relative group/cart">
                <ShoppingBag size={20} className="text-gray-300 group-hover/cart:text-[#cbad73] transition-colors duration-300" strokeWidth={1.2} />
                <span className="absolute -top-2 -right-2 bg-[#cbad73] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-extralight tracking-tighter">
                  0
                </span>
              </Link>

              {/* המבורגר לנייד */}
              <button className="lg:hidden text-gray-300">
                <Menu size={24} strokeWidth={1.2} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;