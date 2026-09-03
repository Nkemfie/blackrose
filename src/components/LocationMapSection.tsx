import { MapPin, Navigation, Car } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export default function LocationMapSection() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Commercial+Avenue,+Bamenda,+Cameroon`;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-md flex flex-col justify-between text-left">
      <div>
        {/* Section Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shadow-xs">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest text-rose-600 font-bold block">
              LOCATION & DIRECTIONS
            </span>
            <h3 className="font-serif text-2xl font-bold text-slate-900">
              Find Us on Commercial Ave
            </h3>
          </div>
        </div>

        {/* Address Display */}
        <p className="font-serif text-xl text-slate-900 mb-1 font-bold">
          {RESTAURANT_INFO.address}, {RESTAURANT_INFO.city}
        </p>
        <p className="text-xs sm:text-sm text-slate-600 font-normal mb-5 leading-relaxed">
          Conveniently situated right along the lively Commercial Avenue corridor in Bamenda, Cameroon.
        </p>

        {/* Interactive Map Embed Container with Light Mode Filter */}
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 h-64 sm:h-72 w-full bg-slate-100 shadow-inner mb-6 group">
          <iframe
            title="Blackrose Luxe Restaurant Location Map on Commercial Avenue, Bamenda"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Commercial+Avenue,+Bamenda,+Cameroon&t=&z=16&ie=UTF8&iwloc=&output=embed"
          />

          {/* Overlay Map Pin Label */}
          <div className="absolute top-3 left-3 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-xs text-slate-900 flex items-center space-x-2 shadow-md pointer-events-none">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span className="text-[11px] tracking-wider uppercase font-bold text-rose-700">Commercial Avenue • Bamenda</span>
          </div>
        </div>
      </div>

      {/* Direction & Parking CTA */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600">
          <span className="inline-flex items-center space-x-1 font-semibold">
            <Car className="w-3.5 h-3.5 text-rose-600" />
            <span>Free Street Parking & Secure Lot</span>
          </span>
          <span>•</span>
          <span className="text-slate-500">Taxi accessible</span>
        </div>

        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full bg-slate-900 hover:bg-rose-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-sm"
        >
          <Navigation className="w-4 h-4 text-rose-400" />
          <span>Open in Google Maps</span>
        </a>
      </div>
    </div>
  );
}
