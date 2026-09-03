import { ArrowUp, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import BlackRoseLogo from './BlackRoseLogo';

interface FooterProps {
  onOpenAdmin?: () => void;
}

export default function Footer({ onOpenAdmin }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-200 border-t border-slate-800 pt-16 pb-28 sm:pb-16 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <BlackRoseLogo size="md" />
            </div>

            <p className="text-sm text-slate-400 max-w-sm font-normal leading-relaxed">
              Bamenda's stylish contemporary dining destination and royal blue velvet VIP lounge on Commercial Avenue, Cameroon.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center space-x-2 text-xs text-amber-400 font-bold bg-slate-900 px-3 py-1.5 rounded-full border border-amber-400/20">
                <div className="flex text-amber-400 text-xs">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <span>★ {RESTAURANT_INFO.googleRating} Google Rating</span>
                <span>•</span>
                <span>{RESTAURANT_INFO.totalReviews} Reviews</span>
              </div>
            </div>
          </div>

          {/* Col 1: Explore */}
          <div>
            <h4 className="font-serif text-xs font-bold text-white tracking-widest mb-4 uppercase">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium tracking-wide">
              <li>
                <a href="#home" className="hover:text-rose-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-rose-400 transition-colors">Our Story</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-rose-400 transition-colors">Food & Drink Menu</a>
              </li>
              <li>
                <a href="#experiences" className="hover:text-rose-400 transition-colors">VIP Lounge & Nightlife</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-rose-400 transition-colors">Photo Gallery</a>
              </li>
            </ul>
          </div>

          {/* Col 2: Dining */}
          <div>
            <h4 className="font-serif text-xs font-bold text-white tracking-widest mb-4 uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium tracking-wide">
              <li>
                <a href="#reservations" className="hover:text-rose-400 transition-colors">Table Reservations</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">City Delivery</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">Fresh Takeaway</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">Event Catering</a>
              </li>
              <li>
                <a href="#services" className="hover:text-rose-400 transition-colors">Table Hospitality</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Real Info */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs font-bold text-white tracking-widest mb-4 uppercase">
              Contact Us
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <p className="flex items-start space-x-2">
                <i className="fa-solid fa-location-dot text-rose-500 mt-1"></i>
                <span>Commercial Avenue, Bamenda, Cameroon</span>
              </p>
              
              {/* Call */}
              <p className="flex items-center space-x-2">
                <i className="fa-solid fa-phone text-rose-500"></i>
                <a href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`} className="font-bold text-white hover:text-rose-400">
                  {RESTAURANT_INFO.phone}
                </a>
              </p>

              {/* Email */}
              <p className="flex items-center space-x-2">
                <i className="fa-solid fa-envelope text-emerald-400"></i>
                <a href={`mailto:${RESTAURANT_INFO.email}`} className="text-slate-300 hover:text-white break-all">
                  {RESTAURANT_INFO.email}
                </a>
              </p>

              {/* Messenger */}
              <p className="flex items-center space-x-2">
                <i className="fa-brands fa-facebook-messenger text-blue-400"></i>
                <a
                  href={RESTAURANT_INFO.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-400 hover:underline"
                >
                  {RESTAURANT_INFO.messengerHandle}
                </a>
              </p>
            </div>

            {/* Social Channels */}
            <div className="pt-2">
              <div className="flex items-center space-x-2.5">
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-rose-400 hover:bg-rose-600 hover:text-white transition-colors"
                  title="Call Us"
                >
                  <i className="fa-solid fa-phone text-xs"></i>
                </a>
                <a
                  href={RESTAURANT_INFO.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-blue-400 hover:bg-blue-600 hover:text-white transition-colors"
                  title="Chat on Facebook Messenger"
                >
                  <i className="fa-brands fa-facebook-messenger text-sm"></i>
                </a>
                <a
                  href={`https://wa.me/237680085522`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-emerald-400 hover:bg-emerald-600 hover:text-white transition-colors"
                  title="WhatsApp"
                >
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                </a>
                <a
                  href={`mailto:${RESTAURANT_INFO.email}`}
                  className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-rose-600 hover:text-white transition-colors"
                  title="Email Us"
                >
                  <i className="fa-solid fa-envelope text-xs"></i>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} Blackrose Luxe Restaurant. All rights reserved. Commercial Avenue, Bamenda.</p>
          
          <div className="flex items-center space-x-4">
            {onOpenAdmin && (
              <button
                onClick={onOpenAdmin}
                className="text-slate-400 hover:text-rose-400 transition-colors flex items-center space-x-1"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Manager Panel</span>
              </button>
            )}
            
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-900 border border-slate-700 hover:border-rose-500 hover:text-rose-400 transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
