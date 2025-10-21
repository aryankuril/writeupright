'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import AnimatedButton from './button';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'All Services' },
    { href: '/ourwork', label: 'Our Work' },
    { href: '/aboutus', label: 'About us' },
    { href: '/contactus', label: 'Contact Us' },
  ];

  const servicesData = [
    {
      title: 'SEO',
      links: [
        { name: 'Technical SEO', href: '/services#technical-seo' },
        { name: 'Content Marketing', href: '/services#content-marketing' },
        { name: 'International SEO', href: '/services#international-seo' },
        { name: 'Ecommerce SEO', href: '/services#ecommerce-seo' },
        { name: 'SEO Audits', href: '/services#seo-audits' },
        { name: 'SEO Migration Services', href: '/services#seo-migration' },
        { name: 'Local SEO', href: '/services#local-seo' },
      ],
    },
    {
      title: 'AI Search',
      links: [
        { name: 'Generative Engine Optimisation', href: '/services#geo' },
        { name: 'AIO Optimisation', href: '/services#aio' },
        { name: 'Deep Research', href: '/services#deep-research' },
        { name: 'LLM Performance Tracking', href: '/services#llm-tracking' },
      ],
    },
    {
      title: 'Paid Media',
      links: [
        { name: 'PPC', href: '/services#ppc' },
        { name: 'PPC Audit Services', href: '/services#ppc-audit' },
        { name: 'Programmatic Advertising', href: '/services#programmatic' },
        { name: 'Google Shopping', href: '/services#google-shopping' },
      ],
    },
    {
      title: 'Social Media',
      links: [
        { name: 'Facebook Ads', href: '/services/socialmedia' },
        { name: 'Instagram Ads', href: '/services/socialmedia' },
        { name: 'LinkedIn Ads', href: '/services/socialmedia' },
        { name: 'Reddit Ads', href: '/services/socialmedia' },
        { name: 'TikTok Ads', href: '/services/socialmedia' },
        { name: 'Youtube Ads', href: '/services/socialmedia' },
      ],
    },
    {
      title: 'Web Development',
      links: [
        { name: 'Custom Website Development', href: '/services/webdev' },
        { name: 'Ecommerce Development', href: '/services/webdev' },
        { name: 'CMS Development', href: '/services/webdev' },
        { name: 'Web App Development', href: '/services/webdev' },
      ],
    },
  ];

  return (
    <header
      className={`container sticky mt-[15px] z-50 transition-all duration-300 rounded-[15px]
      ${isScrolled ? 'bg-[#0a253b] shadow-lg' : 'bg-[#0a253b]'}`}
    >
      <nav className="mx-auto py-2 px-2 md:px-20 lg:px-[20px] relative">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center justify-between"
        >
          {/* Left - Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/Logo.png"
                alt="Logo"
                width={200}
                height={60}
                priority
                className="max-sm:w-[200px]"
              />
            </Link>
          </div>

          {/* Center - Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center gap-[40px] relative">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() =>
                  item.label === 'All Services' && setIsServicesOpen(true)
                }
                onMouseLeave={() =>
                  item.label === 'All Services' && setIsServicesOpen(false)
                }
              >
                <Link
                  href={item.href}
                  className="font-sans text-white transition-colors relative
                    after:content-[''] after:absolute after:bottom-[-4px] after:left-0
                    after:w-full after:h-[2px] after:bg-[#ffffff] after:scale-x-0
                    hover:after:scale-x-100 after:transition-transform after:duration-300"
                >
                  {item.label}
                </Link>

                {/* Desktop Mega Menu */}
                {item.label === 'All Services' && isServicesOpen && (
                  <div
                    className="absolute left-[9em] top-[50px] transform -translate-x-1/2 w-[95vw] max-w-[1200px] 
                      bg-[#1b2735] text-white rounded-[10px] shadow-xl p-10 flex flex-wrap justify-between 
                      transition-all duration-300"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {servicesData.map((col, index) => (
                      <div key={index} className="w-[45%] sm:w-[30%] md:w-[18%] mb-6">
                        <h3 className="text-[18px] font-semibold mb-3">{col.title}</h3>
                        <ul className="space-y-2">
                          {col.links.map((link, idx) => (
                            <li key={idx}>
                              <Link
                                href={link.href}
                                className="text-[15px] text-gray-300 hover:text-white transition-colors cursor-pointer"
                                onClick={() => setIsServicesOpen(false)}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right - Button */}
          <div className="hidden lg:flex items-center">
            <AnimatedButton text="Get a free Quote" href="/profile" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-[#FBB04C] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6H20M4 12H20M4 18H20" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </motion.div>

        {/* ---------------- MOBILE MENU ---------------- */}
        <div
          id="mobile-menu"
          className={`container lg:hidden fixed inset-0 z-50 bg-[#0a253b] transition-all duration-300 h-screen
            ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
          style={{ maxHeight: '100vh', overflowY: 'auto' }}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white hover:text-[#FBB04C] transition-colors z-50"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6L18 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <nav className="p-5 space-y-4 mt-12">
            {/* SERVICES DROPDOWN */}
            <div>
              <button
                className="w-full text-left text-xl font-sans text-white flex justify-between items-center"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span>Services</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isServicesOpen && (
                <div className="mt-3 space-y-4 pl-4">
                  {servicesData.map((service, index) => (
                    <div key={index}>
                      <button
                        className="w-full text-left text-lg font-semibold text-white flex justify-between items-center"
                        onClick={() =>
                          setOpenServiceIndex(openServiceIndex === index ? null : index)
                        }
                      >
                        {service.title}
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${
                            openServiceIndex === index ? 'rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>

                      {openServiceIndex === index && (
                        <ul className="mt-2 pl-3 space-y-2">
                          {service.links.map((link, i) => (
                            <li key={i}>
                              <Link
                                href={link.href}
                                className="text-gray-300 text-base hover:text-white transition-colors cursor-pointer"
                                onClick={() => setIsOpen(false)}
                              >
                                {link.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* OTHER NAV LINKS */}
            {navItems
              .filter((item) => item.label !== 'All Services')
              .map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-xl font-sans text-white hover:text-[#FBB04C] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

            <AnimatedButton
              text="Get a free Quote"
              href="/contactus"
              className="w-full text-center px-6 py-3 mt-4"
            />
          </nav>
        </div>
      </nav>
    </header>
  );
}
