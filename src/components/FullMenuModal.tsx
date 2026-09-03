import { useState } from 'react';
import { X, Search, Sparkles } from 'lucide-react';
import { MENU_CATEGORIES, PLACEHOLDER_MENU_ITEMS, RESTAURANT_INFO } from '../data/restaurantData';
import { MenuItem } from '../types';

interface FullMenuModalProps {
  isOpen: boolean;
  onClose: () => void;
  customItems?: MenuItem[];
}

export default function FullMenuModal({ isOpen, onClose, customItems }: FullMenuModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  if (!isOpen) return null;

  const itemsToDisplay = customItems || PLACEHOLDER_MENU_ITEMS;

  const filteredItems = itemsToDisplay.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b border-slate-200 flex items-center justify-between bg-slate-50 text-left">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="w-10 h-10 rounded-xl object-cover border border-rose-500"
            />
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-rose-600 font-extrabold block">
                BLACKROSE LUXE RESTAURANT • BAMENDA
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900">
                Official Kitchen & Drinks Menu
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-200 text-slate-700 hover:text-white hover:bg-rose-600 transition-colors cursor-pointer"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter and Search Bar */}
        <div className="p-4 sm:p-6 border-b border-slate-200 bg-white flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search dishes (e.g. Pizza, Eru, DG)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-rose-500 focus:ring-2 focus:ring-rose-100"
            />
          </div>

          {/* Category Pills */}
          <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-bold whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              All Dishes ({itemsToDisplay.length})
            </button>
            {MENU_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-[11px] uppercase tracking-wider font-bold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-rose-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Scrollable Items Grid */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8 bg-slate-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredItems.map((item: MenuItem) => (
              <div
                key={item.id}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-rose-300 hover:shadow-md transition-all flex items-start gap-4 text-left"
              >
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-100"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="flex-1 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-serif font-bold text-slate-900 text-base leading-tight">
                        {item.name}
                      </h3>
                      <span className="font-extrabold text-rose-600 text-sm whitespace-nowrap">
                        {item.priceNote}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-2 mb-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-[10px] uppercase font-bold text-slate-400">
                      {item.category}
                    </span>
                    <a
                      href={`https://wa.me/237680085522?text=Hello%20Blackrose%20Luxe,%20I%20would%20like%20to%20order:%20${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-bold text-emerald-600 hover:underline flex items-center gap-1"
                    >
                      <i className="fa-brands fa-whatsapp text-xs"></i>
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-16 text-center text-slate-400">
              <p className="text-base font-semibold">No dishes match your search query.</p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                className="mt-3 text-xs font-bold text-rose-600 underline"
              >
                Reset filters
              </button>
            </div>
          )}
        </div>

        {/* Modal Footer Call to Action */}
        <div className="p-4 sm:p-6 border-t border-slate-200 bg-white flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
          <div className="text-xs text-slate-500">
            <span className="font-bold text-slate-800">Phone Orders:</span> {RESTAURANT_INFO.phone} • Commercial Avenue, Bamenda
          </div>

          <div className="flex items-center gap-2">
            <a
              href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
              className="px-5 py-2.5 rounded-full bg-slate-100 text-slate-800 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
            >
              Call Us
            </a>
            <a
              href="#reservations"
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-rose-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-rose-700 transition-colors shadow-md shadow-rose-600/30"
            >
              Reserve Table
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
