import { useState, MouseEvent } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'interior', label: 'VIP Lounge & Bar' },
    { id: 'food', label: 'Real Dishes & Pizzas' },
    { id: 'events', label: 'Cocktails & Vibe' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const handlePrev = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    const newIndex = (selectedImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImageIndex(newIndex);
  };

  const handleNext = (e: MouseEvent) => {
    e.stopPropagation();
    if (selectedImageIndex === null) return;
    const newIndex = (selectedImageIndex + 1) % filteredItems.length;
    setSelectedImageIndex(newIndex);
  };

  const currentItem = selectedImageIndex !== null ? filteredItems[selectedImageIndex] : null;

  return (
    <section id="gallery" className="py-20 sm:py-24 bg-[#FAF9F6] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-700 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span>REAL RESTAURANT & LOUNGE PHOTOS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            A Glimpse of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">Blackrose Luxe</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Browse our royal blue velvet booths, illuminated cocktail bar, freshly baked artisan pizzas, and mouthwatering Cameroonian specialties.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveFilter(cat.id);
                  setSelectedImageIndex(null);
                }}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Dynamic Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item: GalleryItem, index: number) => (
            <div
              key={item.id}
              onClick={() => setSelectedImageIndex(index)}
              className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer bg-slate-950 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold tracking-wider text-rose-400 border border-rose-500/30 uppercase">
                  {item.category}
                </span>
              </div>

              {/* Click to Expand Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <h3 className="font-serif text-lg font-bold text-white mb-0.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 font-light">
                  {item.description || item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {currentItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            onClick={() => setSelectedImageIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Navigation Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
            aria-label="Previous Photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Navigation Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer z-20"
            aria-label="Next Photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Lightbox Card */}
          <div
            className="max-w-4xl w-full max-h-[85vh] bg-slate-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-1 overflow-hidden bg-black flex items-center justify-center max-h-[65vh]">
              <img
                src={currentItem.imageUrl}
                alt={currentItem.title}
                className="max-h-full max-w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="p-6 bg-slate-900 text-left flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-rose-400 block mb-1">
                  Blackrose Luxe • Commercial Avenue, Bamenda
                </span>
                <h3 className="font-serif text-xl font-bold text-white mb-1">
                  {currentItem.title}
                </h3>
                <p className="text-sm text-slate-300">
                  {currentItem.description || currentItem.caption}
                </p>
              </div>

              <a
                href="#reservations"
                onClick={() => setSelectedImageIndex(null)}
                className="px-5 py-2.5 rounded-full bg-rose-600 text-white font-bold text-xs uppercase tracking-wider hover:bg-rose-700 transition-colors shrink-0 hidden sm:inline-block"
              >
                Reserve a Table
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
