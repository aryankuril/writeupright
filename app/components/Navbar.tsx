'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import AnimatedButton from './button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // ✅ real state
  const pathname = usePathname();

  // ✅ track scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ✅ prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/aboutus', label: 'About Us' },
    { href: '/allservices', label: 'All Services' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contactus', label: 'Contact Us' },
  ];

  return (
    <header
      className={`container sticky mt-[15px] z-50 transition-all duration-300 rounded-[15px]
      ${isScrolled ? 'bg-[#0a253b] shadow-lg' : 'bg-[#0a253b]'}`}
    >
      <nav className="mx-auto py-2 px-2 md:px-20 lg:px-[20px]">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-between"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Logo.png"
              alt="Presolv360 Logo"
              width={200}
              height={60}
              priority
              className="max-sm:w-[200px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-[60px]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-white transition-colors relative
                           after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                           after:w-full after:h-[2px] after:bg-[#ffffff] after:scale-x-0
                           hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {item.label}
              </Link>
            ))}

            <AnimatedButton
              text="Get a free Quote"
              href="/profile"
              className="ml-4"
            />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#FBB04C] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </motion.div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`container lg:hidden fixed inset-0 z-50 bg-[#0a253b] transition-all duration-300 h-screen
                      ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{ maxHeight: '100vh', overflowY: 'auto' }}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-[#FBB04C] transition-colors z-50"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <nav className="p-5 space-y-6 mt-12">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block text-xl font-sans text-white relative
                           after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                           after:w-full after:h-[2px] after:bg-[#ffffff] after:scale-x-0
                           hover:after:scale-x-100 after:transition-transform after:duration-300
                           transform transition-all duration-500 ease-out
                           ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <AnimatedButton
              text="Get a free Quote"
              href="/profile"
              className="w-full text-center px-6 py-3"
            />
          </nav>
        </div>
      </nav>
    </header>
  );
}
