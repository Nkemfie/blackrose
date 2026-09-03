import { ArrowRight, Sparkles } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenMenuModal?: () => void;
}

export default function Hero({ onOpenMenuModal }: HeroProps) {
  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-rose-50/40 via-[#FAF9F6] to-white"
    >
      {/* Subtle Background Glow Orbs for Flashy Luxury Feel */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 60:30:10 Text, Flashy Hooks & CTA (7 cols) */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Top Attention-Grabbing Flashy Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200 shadow-sm">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-rose-600"></span>
              </span>
              <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700">
                Commercial Avenue, Bamenda • Open Daily 8:00 AM
              </span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[9px] font-extrabold uppercase bg-rose-600 text-white">
                VIP Lounge
              </span>
            </div>

            {/* Flashy Display Headline: 60% readability, 30% deep slate/blue, 10% neon rose */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.05] tracking-tight text-slate-900 font-bold">
              Where Great Taste <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-red-600 to-amber-600 animate-neon-pulse font-serif italic">
                Meets Pure Elegance.
              </span>
            </h1>

            {/* Subheading Narrative */}
            <p className="text-slate-600 text-base sm:text-lg max-w-2xl leading-relaxed font-normal">
              Step into Bamenda’s premier dining and nightlife destination on Commercial Avenue. 
              Savor authentic Cameroonian delicacies, freshly baked gourmet pizzas, flame-grilled catches, and signature cocktails inside our iconic royal blue velvet lounges.
            </p>

            {/* Flashy Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                id="hero-reserve-btn"
                href="#reservations"
                className="shimmer-sweep px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-extrabold bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white hover:brightness-110 transition-all shadow-lg shadow-rose-600/30 flex items-center gap-2"
              >
                <i className="fa-solid fa-champagne-glasses text-sm"></i>
                <span>Reserve a Table</span>
              </a>

              {onOpenMenuModal ? (
                <button
                  id="hero-menu-btn"
                  onClick={onOpenMenuModal}
                  className="px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-slate-900 border-2 border-slate-300 hover:border-rose-500 hover:text-rose-600 transition-all shadow-xs flex items-center gap-2"
                >
                  <i className="fa-solid fa-utensils text-rose-500"></i>
                  <span>View Full Menu</span>
                  <ArrowRight className="w-4 h-4 text-rose-500" />
                </button>
              ) : (
                <a
                  id="hero-menu-btn"
                  href="#menu"
                  className="px-6 py-3.5 rounded-full text-xs uppercase tracking-widest font-bold bg-white text-slate-900 border-2 border-slate-300 hover:border-rose-500 hover:text-rose-600 transition-all shadow-xs flex items-center gap-2"
                >
                  <i className="fa-solid fa-utensils text-rose-500"></i>
                  <span>View Menu</span>
                  <ArrowRight className="w-4 h-4 text-rose-500" />
                </a>
              )}

              {/* Call Direct */}
              <a
                href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                className="px-5 py-3.5 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-rose-50 hover:text-rose-600 transition-colors flex items-center gap-2 border border-slate-200"
              >
                <i className="fa-solid fa-phone text-rose-500"></i>
                <span>{RESTAURANT_INFO.phone}</span>
              </a>
            </div>

            {/* Social Proof & Google Review Metric Bar */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-6 sm:gap-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-600 font-bold text-lg shadow-xs">
                  {RESTAURANT_INFO.googleRating}
                </div>
                <div>
                  <div className="flex items-center text-amber-500 text-xs">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star-half-stroke"></i>
                  </div>
                  <span className="text-xs font-bold text-slate-800">
                    {RESTAURANT_INFO.totalReviews} Google Reviews
                  </span>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 text-lg shadow-xs">
                  <i className="fa-solid fa-couch"></i>
                </div>
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Royal Velvet Lounges</span>
                  <span className="text-[11px] text-slate-500">VIP booths & neon ambiance</span>
                </div>
              </div>

              <div className="h-8 w-[1px] bg-slate-200 hidden sm:block" />

              <div className="flex items-center gap-2.5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-lg shadow-xs">
                  <i className="fa-brands fa-facebook-messenger"></i>
                </div>
                <div>
                  <a
                    href={RESTAURANT_INFO.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold text-blue-600 hover:underline block"
                  >
                    Chat on Messenger →
                  </a>
                  <span className="text-[11px] text-slate-500">Fast response</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Flashy Real Photo Showcase with Neon "Rose Loves You" (5 cols) */}
          <div className="lg:col-span-5 relative">
            {/* Main Featured Photo: Royal Blue Velvet VIP Lounge */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white ring-1 ring-slate-200 bg-slate-900 group">
              <img
                src="/images/lounge.jpg"
                alt="Blackrose Luxe royal blue velvet VIP lounge in Bamenda"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignette for Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent pointer-events-none" />

              {/* Real Neon Sign Replica: "Rose Loves You" */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rose-500/50 shadow-lg shadow-rose-900/40 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                <span className="text-xs font-serif font-bold italic tracking-wide text-rose-400 animate-neon-pulse">
                  “Rose Loves You”
                </span>
              </div>

              {/* Bottom Overlay Info Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 text-left shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/logo.jpg"
                      alt="Logo badge"
                      className="w-9 h-9 rounded-lg object-cover border border-rose-500"
                    />
                    <div>
                      <h3 className="font-serif font-bold text-slate-900 text-sm leading-tight">
                        VIP Lounge & Cocktail Bar
                      </h3>
                      <p className="text-[11px] text-slate-500">Commercial Avenue, Bamenda</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-100 text-rose-700">
                    Live Tonight
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Flashy Card 1: Fresh Oven Pizza */}
            <div className="absolute -bottom-6 -left-6 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-200 hidden sm:flex items-center gap-3 animate-float-smooth">
              <img
                src="/images/pizza.jpg"
                alt="Signature Meat Pizza"
                className="w-14 h-14 rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="text-left pr-2">
                <span className="text-[10px] uppercase font-bold text-rose-600 block tracking-wider">Hot & Fresh</span>
                <span className="text-xs font-bold text-slate-900 block">Artisan Meat Pizza</span>
                <span className="text-xs font-extrabold text-amber-600">5,000 XAF</span>
              </div>
            </div>

            {/* Floating Flashy Card 2: Cameroon Eru & Garri */}
            <div className="absolute -top-5 -left-5 bg-white p-2.5 rounded-2xl shadow-xl border border-slate-200 hidden md:flex items-center gap-3 animate-float-smooth">
              <img
                src="/images/eru.jpg"
                alt="Cameroon Garri & Eru"
                className="w-14 h-14 rounded-xl object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="text-left pr-2">
                <span className="text-[10px] uppercase font-bold text-emerald-600 block tracking-wider">Local Pride</span>
                <span className="text-xs font-bold text-slate-900 block">Garri & Eru Special</span>
                <span className="text-xs font-extrabold text-rose-600">2,500 XAF</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
