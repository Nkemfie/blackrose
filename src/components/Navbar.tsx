import { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Sparkles, UtensilsCrossed } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import BlackRoseLogo from './BlackRoseLogo';

interface NavbarProps {
  onOpenAdmin?: () => void;
  reservationCount?: number;
}

export default function Navbar({ onOpenAdmin, reservationCount = 0 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'VIP Lounge', href: '#experiences' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reservations', href: '#reservations' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md py-2.5 shadow-lg border-b border-slate-200/80'
          : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Official Brand Logo and Name */}
        <a
          href="#home"
          className="group flex items-center gap-2 focus:outline-none"
          aria-label="Blackrose Luxe Restaurant Home"
        >
          <BlackRoseLogo size="md" />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.15em] font-semibold text-slate-700" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-rose-600 transition-colors relative py-1 hover:border-b-2 hover:border-rose-600"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden sm:flex items-center space-x-2.5">
          {/* Direct Phone Call Button */}
          <a
            id="nav-call-btn"
            href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center space-x-2 px-3.5 py-2 rounded-full border border-slate-300 text-slate-800 bg-white hover:border-rose-500 hover:text-rose-600 transition-all text-[11px] uppercase tracking-wider font-semibold shadow-xs"
          >
            <i className="fa-solid fa-phone text-rose-500 text-xs"></i>
            <span>{RESTAURANT_INFO.phone}</span>
          </a>

          {/* Direct Messenger Chat */}
          <a
            id="nav-messenger-btn"
            href={RESTAURANT_INFO.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Chat on Facebook Messenger"
            className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-600 hover:text-white transition-all shadow-xs"
            aria-label="Messenger Chat"
          >
            <i className="fa-brands fa-facebook-messenger text-base"></i>
          </a>

          {/* Flashy Reserve Table Button */}
          <a
            href="#reservations"
            className="shimmer-sweep bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white px-5 py-2.5 rounded-full text-[11px] uppercase tracking-wider font-bold hover:brightness-110 transition-all shadow-md shadow-rose-600/30 flex items-center gap-1.5"
          >
            <i className="fa-solid fa-calendar-check text-xs"></i>
            <span>Reserve Table</span>
          </a>

          {/* Admin / Manager Access */}
          {onOpenAdmin && (
            <button
              id="admin-settings-toggle"
              onClick={onOpenAdmin}
              title="Admin & Content Manager"
              className="relative p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-colors"
              aria-label="Open Restaurant Management Panel"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
              {reservationCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {reservationCount}
                </span>
              )}
            </button>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center space-x-2">
          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
            className="p-2 rounded-full bg-rose-50 text-rose-600 border border-rose-200"
            aria-label="Quick Call"
          >
            <i className="fa-solid fa-phone text-sm"></i>
          </a>

          {onOpenAdmin && (
            <button
              onClick={onOpenAdmin}
              className="p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-600"
              aria-label="Admin Manager"
            >
              <Sparkles className="w-4 h-4 text-amber-500" />
            </button>
          )}

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-rose-600" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-white border-b border-slate-200 shadow-2xl p-6 transition-all max-h-[85vh] overflow-y-auto">
          <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="text-base font-semibold text-slate-800 hover:text-rose-600 transition-colors py-2 border-b border-slate-100 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <i className="fa-solid fa-chevron-right text-xs text-rose-500"></i>
              </a>
            ))}

            <div className="pt-4 flex flex-col space-y-2.5">
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl border-2 border-slate-200 bg-slate-50 text-slate-900 font-bold text-xs uppercase tracking-wider"
              >
                <i className="fa-solid fa-phone text-rose-600"></i>
                <span>Call {RESTAURANT_INFO.phone}</span>
              </a>

              <a
                href={RESTAURANT_INFO.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-blue-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
              >
                <i className="fa-brands fa-facebook-messenger text-base"></i>
                <span>Chat on Messenger</span>
              </a>

              <a
                href="#reservations"
                onClick={handleLinkClick}
                className="w-full flex items-center justify-center space-x-2 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-600/30"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Make a Table Reservation</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
