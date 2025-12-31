"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Search, User, Menu, X } from 'lucide-react';
import { logo } from '../../../assets/index';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'קולקציות', slug: 'collections' },
    { name: 'טבעות', slug: 'rings' },
    { name: 'עגילים', slug: 'earrings' },
    { name: 'צמידים', slug: 'bracelets' },
    { name: 'הסיפור שלנו', slug: 'about' }
  ];

  return (
    <header className="w-full fixed top-0  z-50 bg-[#28282B] border-b border-gray-100 shadow-sm" dir="rtl">
      
      {/* Announcement Bar */}
      <div className="w-full bg-[#cbad73] text-white text-[9px] py-1.5 text-center tracking-[0.3em] uppercase font-light">
        משלוחים חינם בקנייה מעל ₪1,000
      </div>

      <div className="max-w-[1500px]  mx-auto px-6 lg:px-10 py-3">
        <div className="flex items-center justify-between h-12">
          
          {/* 1. צד ימין: לוגו */}
          <div className="flex-1 flex justify-start">
            <Link href="/" className="relative h-80 w-80 transition-transform hover:scale-105">
              <Image 
                src={logo} 
                alt="Gutman Jewelry" 
                fill 
                className="mt-[-0.7rem] object-contain object-right" 
                priority 
              />
            </Link>
          </div>

          {/* 2. אמצע: תפריט ניווט עם אפקט קו */}
          <nav className="hidden lg:flex items-center justify-center flex-[2]">
            <ul className="flex gap-10">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={`/category/${item.slug}`} 
                    className="relative text-[12px] tracking-[0.2em] font-light text-white uppercase group py-2"
                  >
                    {item.name}
                    {/* הקו שעובר מתחת ב-Hover */}
                    <span className="absolute bottom-0 right-0 w-0 h-[1px] bg-[#cbad73] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* 3. צד שמאל: אייקונים */}
          <div className="flex-1 flex items-center justify-end gap-6 text-white">
            <button className="hover:text-[#cbad73] transition-colors">
              <Search size={20} strokeWidth={1.2} />
            </button>
            <Link href="/account" className="hidden md:block hover:text-[#cbad73] transition-colors">
              <User size={20} strokeWidth={1.2} />
            </Link>
            <Link href="/cart" className="relative hover:text-[#cbad73] transition-colors">
              <ShoppingBag size={20} strokeWidth={1.2} />
              <span className="absolute -top-2 -right-2 bg-[#cbad73] text-white text-[8px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>
            
            {/* כפתור המבורגר לסלולר */}
            <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} strokeWidth={1.2} />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[100] transition-transform duration-500 ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="p-8 flex flex-col h-full">
          <button onClick={() => setIsMobileMenuOpen(false)} className="self-end mb-10 text-white">
            <X size={28} />
          </button>
          <nav className="flex flex-col gap-8 text-right">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={`/category/${item.slug}`} 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="text-2xl font-serif border-b border-gray-50 pb-4 text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;