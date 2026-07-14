"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ChevronDown, MessageSquare } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState<{ name: string; href: string }[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const whatwedo = [
    { name: 'Technical Advisory', href: '/what-we-do/technical' },
    { name: 'Regular Advisory', href: '/what-we-do/regular' },
    { name: 'Engineering Advisory', href: '/what-we-do/Engiee' },
    { name: 'Project Management', href: '/what-we-do/project' },
    { name: 'Operational Excellence', href: '/what-we-do/op' },
  ];

  const aboutLinks = [
    { name: 'About Us', href: '/about-us' },
    { name: 'Value & Mission', href: '/about-us/value' },
    { name: 'Our Team', href: '/about-us/team' },
  ];

  const navLinks = [
    { name: 'Why Us?', href: '/why-us' },
    { name: 'Our Work', href: '/our-work' },
    { name: 'Our Clients', href: '/clientele' },
  ];

  const allPages = [
    ...aboutLinks,
    ...whatwedo,
    ...navLinks,
    { name: 'Home', href: '/' },
    { name: 'Contact Us', href: '/contact-us' }
  ];

  const isAboutActive = aboutLinks.some(link => pathname === link.href);
  const isWhatWeDoActive = whatwedo.some(link => pathname === link.href);

  // Monitor scroll height to trigger glassmorphic state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search logic
  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredResults([]);
      return;
    }
    const filtered = allPages.filter(page =>
      page.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredResults(filtered);
  }, [searchQuery]);

  // Handle ESC key to close search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <nav className={`sticky top-0 z-40 w-full transition-all duration-300 font-afaca ${isScrolled
          ? 'py-2 bg-[#F2F5E3]/85 backdrop-blur-md shadow-md border-b border-[#1A3013]/10'
          : 'py-4 bg-[#F2F5E3] border-b border-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

          {/* Left: Logo */}
          <Link href="/" className="inline-block transition-opacity hover:opacity-90 shrink-0">
            <Image
              src="/logo.png"
              alt="Paradigm Logo"
              width={isScrolled ? 130 : 150}
              height={50}
              className="object-contain transition-all duration-300"
            />
          </Link>

          {/* Center: Desktop Menu Links */}
          <div className="hidden lg:flex items-center space-x-8">
            <ul className="flex items-center space-x-6 m-0 p-0 list-none">

              {/* About Dropdown */}
              <li className="relative group cursor-pointer font-bold text-sm xl:text-base">
                <div className={`flex items-center transition-colors duration-300 pb-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#1A3013] after:transition-all after:duration-300 ${isAboutActive ? 'text-[#1A3013] after:w-full' : 'text-gray-600 hover:text-[#1A3013] after:w-0 group-hover:after:w-full'
                  }`}>
                  <span>About Us</span>
                  <ChevronDown className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-black/5 py-2 m-0 list-none z-50 min-w-[180px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  {aboutLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-5 py-2.5 text-sm transition-colors ${pathname === link.href
                          ? 'text-[#1A3013] bg-[#F2F5E3]/50 font-black'
                          : 'text-gray-600 hover:bg-[#F2F5E3]/30 hover:text-[#1A3013]'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </li>

              {/* What We Do Dropdown */}
              <li className="relative group cursor-pointer font-bold text-sm xl:text-base">
                <div className={`flex items-center transition-colors duration-300 pb-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#1A3013] after:transition-all after:duration-300 ${isWhatWeDoActive ? 'text-[#1A3013] after:w-full' : 'text-gray-600 hover:text-[#1A3013] after:w-0 group-hover:after:w-full'
                  }`}>
                  <span>What We Do</span>
                  <ChevronDown className="ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180" />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-md shadow-xl rounded-xl border border-black/5 py-2 m-0 list-none z-50 min-w-[200px] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                  {whatwedo.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-5 py-2.5 text-sm transition-colors ${pathname === link.href
                          ? 'text-[#1A3013] bg-[#F2F5E3]/50 font-black'
                          : 'text-gray-600 hover:bg-[#F2F5E3]/30 hover:text-[#1A3013]'
                        }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </li>

              {/* Direct links */}
              {navLinks.map((link) => (
                <li key={link.href} className="font-bold text-sm xl:text-base">
                  <Link
                    href={link.href}
                    className={`transition-colors duration-300 pb-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#1A3013] after:transition-all after:duration-300 ${pathname === link.href ? 'text-[#1A3013] after:w-full' : 'text-gray-600 hover:text-[#1A3013] after:w-0 hover:after:w-full'
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Search & Contact CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Trigger */}
            <button
              className="p-2.5 rounded-full hover:bg-black/5 transition-colors text-gray-700 focus:outline-none"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="w-5 h-5 text-[#1A3013] stroke-[2.5]" />
            </button>

            {/* Pill CTA button */}
            <Link
              href="/contact-us"
              className="px-5 py-2.5 bg-[#1A3013] hover:bg-green-950 text-white rounded-full text-sm font-bold uppercase tracking-wider shadow transition-all duration-300 flex items-center space-x-2 shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile hamburger & search icons */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              className="p-2 text-gray-700 hover:bg-black/5 rounded-full focus:outline-none"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Open search"
            >
              <Search className="w-5 h-5 text-[#1A3013] stroke-[2.5]" />
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-700 hover:bg-black/5 rounded-full focus:outline-none"
              aria-label="Toggle mobile menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#1A3013" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                {isMobileMenuOpen ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </>
                ) : (
                  <>
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </>
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden w-full bg-[#F2F5E3] border-b border-gray-200 overflow-hidden shadow-xl"
            >
              <ul className="flex flex-col m-0 p-6 list-none gap-4 font-bold">
                <li>
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">About Us</div>
                  <ul className="list-none pl-4 space-y-3">
                    {aboutLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-1 text-sm ${pathname === link.href ? 'text-[#1A3013] font-black' : 'text-gray-600'}`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">What We Do</div>
                  <ul className="list-none pl-4 space-y-3">
                    {whatwedo.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-1 text-sm ${pathname === link.href ? 'text-[#1A3013] font-black' : 'text-gray-600'}`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>

                <li>
                  <div className="text-gray-400 text-xs uppercase tracking-widest mb-2">Navigation</div>
                  <ul className="list-none pl-4 space-y-3">
                    {navLinks.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`block py-1 text-sm ${pathname === link.href ? 'text-[#1A3013] font-black' : 'text-gray-600'}`}
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/contact-us"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`block py-2 text-sm text-[#1A3013] font-black underline underline-offset-4`}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Global Overlay Search Modal */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            key="search-backdrop"
            onClick={() => {
              setIsSearchOpen(false);
              setSearchQuery('');
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4"
          >
            <motion.div
              key="search-modal-content"
              onClick={(e) => e.stopPropagation()}
              ref={searchRef}
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              transition={{ type: "spring", damping: 25, stiffness: 250 }}
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl border border-black/5 p-6 md:p-8 flex flex-col relative"
            >
              {/* Close Button */}
              <button
                onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                className="absolute right-6 top-6 p-1.5 hover:bg-gray-150 rounded-full transition-colors text-gray-500 hover:text-black focus:outline-none"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mb-4">
                <h3 className="text-xl font-black text-[#1A3013] uppercase tracking-tight font-black">
                  Search Site Directory
                </h3>
                <p className="text-xs text-gray-500 font-afaca">
                  Type to search services, projects, values, or pages. Press ESC to close.
                </p>
              </div>

              {/* Input field wrapper */}
              <div className="relative flex items-center mb-6">
                <Search className="w-5 h-5 text-gray-400 absolute left-4" />
                <input
                  type="text"
                  className="w-full pl-12 pr-12 py-3.5 bg-gray-50 border border-gray-200 focus:border-[#1A3013] focus:bg-white rounded-2xl focus:outline-none transition-all text-base text-gray-800"
                  placeholder="Enter keywords (e.g., Engineering, FSSAI, Team)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery.trim() !== '' && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 p-1 hover:bg-gray-250 rounded-full text-gray-400 hover:text-black transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Search results list */}
              <div className="flex-1 overflow-y-auto max-h-[300px] scrollbar-thin">
                {searchQuery.trim() !== '' ? (
                  filteredResults.length > 0 ? (
                    <ul className="m-0 p-0 list-none divide-y divide-gray-100">
                      {filteredResults.map((result) => (
                        <li key={result.href}>
                          <Link
                            href={result.href}
                            onClick={() => { setIsSearchOpen(false); setSearchQuery(''); }}
                            className="flex items-center justify-between px-4 py-3.5 hover:bg-[#F2F5E3]/40 rounded-xl text-gray-700 hover:text-[#1A3013] transition-all"
                          >
                            <div className="flex flex-col">
                              <span className="text-sm font-bold">{result.name}</span>
                              <span className="text-xs text-gray-400">Navigate to {result.name}</span>
                            </div>
                            <ChevronDown className="w-4 h-4 rotate-270 opacity-30 group-hover:opacity-100" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-12 text-center text-gray-400 text-sm flex flex-col items-center justify-center">
                      <Search className="w-8 h-8 mb-2 opacity-20" />
                      <span>No results found matching &ldquo;{searchQuery}&rdquo;</span>
                    </div>
                  )
                ) : (
                  <div className="py-8 text-center text-gray-400 text-sm flex flex-col items-center justify-center">
                    <span>Start typing to show search recommendations...</span>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
