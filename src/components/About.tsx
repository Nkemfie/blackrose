import { CheckCircle2, ArrowRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AboutProps {
  onDiscoverClick?: () => void;
}

export default function About({ onDiscoverClick }: AboutProps) {
  return (
    <section
      id="about"
      className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-y border-slate-100"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-96 h-96 rounded-full bg-rose-100/60 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Real Restaurant Visuals (Bar & VIP Atmosphere) */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Main Card: Illuminated Spade Bar */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 bg-slate-900 group">
                <img
                  src="/images/bar.jpg"
                  alt="Blackrose Luxe luxury cocktail bar on Commercial Avenue"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                
                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl flex items-center justify-between text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-bold text-lg shadow-sm">
                      <i className="fa-solid fa-martini-glass"></i>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-rose-600 font-bold block">
                        Full Luxury Bar On Site
                      </span>
                      <span className="font-serif text-sm sm:text-base text-slate-900 font-bold">
                        Spirits, Cocktails & Bel-Aire Champagne
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-slate-500 hidden sm:inline-block">
                    Commercial Ave
                  </span>
                </div>
              </div>

              {/* Inset Official Logo Badge */}
              <div className="absolute -top-5 -right-5 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950 flex items-center justify-center hidden sm:flex">
                <img
                  src="/images/logo.jpg"
                  alt="Blackrose Luxe Emblem"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

          {/* Right Column: High-Impact Narrative & Key Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            
            {/* Top Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 mb-4 w-fit">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
              <span className="text-[11px] font-extrabold tracking-[0.2em] text-rose-700 uppercase">
                THE BLACKROSE LUXE STORY
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.12] mb-5 tracking-tight">
              A Taste of Luxury. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">
                A Place to Connect.
              </span>
            </h2>

            {/* Description */}
            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed mb-6 font-normal">
              <p>
                Located right on <strong>Commercial Avenue in Bamenda</strong>, Blackrose Luxe Restaurant reimagines dining by uniting celebrated Cameroonian heritage with modern nightlife elegance.
              </p>
              <p>
                From rich, slow-simmered <strong>Garri & Eru</strong> and tender <strong>Chicken DG</strong> to sizzling <strong>artisan pizzas</strong> fresh from our oven, we prepare every dish with passion. Relax in our plush royal blue velvet booths beneath crystal chandeliers and our iconic glowing neon sign.
              </p>
            </div>

            {/* Value Highlights Grid */}
            <div className="grid grid-cols-2 gap-3.5 mb-8 pt-5 border-t border-slate-200">
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                <i className="fa-solid fa-couch text-rose-600 text-sm"></i>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">Royal Velvet VIP Booths</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                <i className="fa-solid fa-wine-glass text-rose-600 text-sm"></i>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">On-Site Luxury Bar</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                <i className="fa-solid fa-pizza-slice text-rose-600 text-sm"></i>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">Hot Oven Pizzas & Grills</span>
              </div>
              <div className="flex items-center space-x-2.5 p-2 rounded-xl bg-slate-50 border border-slate-200/60">
                <i className="fa-solid fa-wheelchair text-rose-600 text-sm"></i>
                <span className="text-xs sm:text-sm font-semibold text-slate-900">Accessible & Welcoming</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                id="about-discover-btn"
                href="#menu"
                onClick={onDiscoverClick}
                className="px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-rose-600 transition-colors font-bold text-xs tracking-wider uppercase shadow-md flex items-center gap-2"
              >
                <span>Explore Food & Drinks</span>
                <ArrowRight className="w-4 h-4 text-rose-400" />
              </a>

              <a
                href={RESTAURANT_INFO.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-600 hover:bg-blue-600 hover:text-white transition-all font-bold text-xs tracking-wider uppercase flex items-center gap-2"
              >
                <i className="fa-brands fa-facebook-messenger text-sm"></i>
                <span>Message Us</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
