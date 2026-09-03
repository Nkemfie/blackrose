import { useState } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { MENU_CATEGORIES, PLACEHOLDER_MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

interface MenuSectionProps {
  onOpenFullMenu: () => void;
}

export default function MenuSection({ onOpenFullMenu }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('mains');

  const filteredItems = PLACEHOLDER_MENU_ITEMS.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section id="menu" className="py-20 sm:py-24 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-700 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span>REAL KITCHEN MENU & PRICES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Made to Satisfy <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">Every Craving</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            From Cameroon traditional classics like Garri & Eru to fresh oven-baked pizzas, sizzled grills, and natural juices.
          </p>

          {/* Authentic Menu Badge */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700">
            <i className="fa-solid fa-circle-check text-emerald-600"></i>
            <span>Official Blackrose Luxe Menu • Authentic Prices in FCFA (XAF)</span>
          </div>
        </div>

        {/* Category Tabs Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-10 gap-2 scrollbar-none">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs uppercase tracking-wider font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Active Category Description */}
        <div className="text-center mb-8">
          <p className="text-xs sm:text-sm font-semibold text-rose-700 italic">
            {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.description}
          </p>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredItems.map((item: MenuItem) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 hover:border-rose-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              {item.image && (
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                  {item.isChefSpecial && (
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-rose-600 text-white text-[10px] font-bold tracking-wider uppercase flex items-center space-x-1 shadow-md">
                      <Sparkles className="w-3 h-3 text-amber-300" />
                      <span>CHEF SPECIAL</span>
                    </div>
                  )}

                  {/* Price Tag in Image */}
                  <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-amber-400 font-extrabold text-xs shadow-lg border border-white/10">
                    {item.priceNote}
                  </div>
                </div>
              )}

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-lg font-bold text-slate-900 group-hover:text-rose-600 transition-colors leading-tight">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-base font-extrabold text-rose-600">
                    {item.priceNote}
                  </span>
                  
                  <a
                    href={`https://wa.me/237680085522?text=Hello%20Blackrose%20Luxe,%20I%20would%20like%20to%20order:%20${encodeURIComponent(item.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-800 hover:bg-emerald-600 hover:text-white transition-colors text-[11px] font-bold flex items-center gap-1.5"
                  >
                    <i className="fa-brands fa-whatsapp text-emerald-500 hover:text-white text-xs"></i>
                    <span>Order</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Modal Trigger Button */}
        <div className="text-center pt-2">
          <button
            id="view-full-menu-cta"
            onClick={onOpenFullMenu}
            className="shimmer-sweep px-8 py-4 rounded-full bg-gradient-to-r from-rose-600 to-red-600 text-white hover:brightness-110 transition-all font-bold text-xs uppercase tracking-widest shadow-xl shadow-rose-600/30 inline-flex items-center gap-2 cursor-pointer"
          >
            <i className="fa-solid fa-book-open text-sm"></i>
            <span>Open Complete Printed Menu Card</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
