'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import { StairsRef } from '@/components/animation/Stairs';
import { useStairsNavigation } from '@/hooks/useStairsNavigation';

interface HeaderProps {
  stairsRef: React.RefObject<StairsRef | null>;
  triggerStairsAnimation?: () => void;
}

const Header: React.FC<HeaderProps> = ({ stairsRef }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const pathname = usePathname();
  const { navigateWithStairs } = useStairsNavigation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useEffect(() => {
    if (menuRef.current) {
      gsap.to(menuRef.current, {
        scaleY: isMenuOpen ? 1 : 0,
        opacity: isMenuOpen ? 1 : 0,
        duration: 0.3,
        ease: isMenuOpen ? 'power3.out' : 'power3.in',
        transformOrigin: 'top',
      });
    }
  }, [isMenuOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Vision & Philosophy', href: '/vision-and-philosophy' },
    { name: 'Learning Verticals', href: '/learning-verticals' },
    { name: 'About Me', href: '/about-me' },
    { name: 'Featured Works', href: '/featured-works' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    if (pathname === href) return;

    navigateWithStairs(href);
  };

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link 
          href="/" 
          onClick={(e) => handleLinkClick(e, '/')}
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
        >
          <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
          <span className="text-xl md:text-2xl font-bold text-white">Incisive-Cul</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden custom-1100:flex items-center space-x-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
                className={`relative px-2 py-1 font-medium transition duration-300 ease-in-out group
                  ${isActive ? "text-blue-400" : "text-slate-300 hover:text-white"}
                `}
              >
                {item.name}
                {/* Active and Hover underlines */}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300
                    ${isActive ? "w-full" : "w-0"}
                  `}
                />
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300
                    ${isActive ? "w-0" : "w-0 group-hover:w-full"}
                  `}
                />
              </Link>
            );
          })}
        </nav>
        
        {/* Mobile Menu Button - Shows below 1100px */}
        <motion.button
          onClick={toggleMenu}
          className="text-slate-100 max-custom-1100:flex custom-1100:hidden focus:outline-none"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </motion.button>

        {/* Mobile Nav - Shows below 1100px */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className={`absolute inset-x-0 top-16 bg-slate-900 shadow-md rounded-b-lg p-4 max-custom-1100:block custom-1100:hidden transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'scale-y-100 opacity-100 pointer-events-auto' : 'scale-y-0 opacity-0 pointer-events-none'}`}
          >
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-center py-2 font-medium transition duration-300 ease-in-out
                      ${isActive ? "text-blue-400" : "text-gray-300 hover:text-blue-400"}
                    `}
                    onClick={(e) => {
                      handleLinkClick(e, item.href);
                      toggleMenu();
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;