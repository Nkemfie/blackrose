import { RESTAURANT_INFO } from '../data/restaurantData';

export default function FloatingMobileBar() {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Commercial+Avenue,+Bamenda,+Cameroon`;

  return (
    <div
      id="floating-mobile-actions"
      className="fixed bottom-0 inset-x-0 z-40 sm:hidden bg-white/95 backdrop-blur-lg border-t border-slate-200 px-3 py-2 shadow-2xl safe-area-bottom"
    >
      <div className="grid grid-cols-4 gap-1.5">
        {/* Call Button */}
        <a
          href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 active:scale-95 transition-transform"
        >
          <i className="fa-solid fa-phone text-rose-600 text-sm mb-0.5"></i>
          <span className="text-[10px] uppercase font-bold tracking-tight">Call</span>
        </a>

        {/* Messenger Button */}
        <a
          href={RESTAURANT_INFO.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 active:scale-95 transition-transform"
        >
          <i className="fa-brands fa-facebook-messenger text-blue-600 text-base mb-0.5"></i>
          <span className="text-[10px] uppercase font-bold tracking-tight">Chat</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/237680085522?text=Hello%20Blackrose%20Luxe,%20I%20would%20like%20to%20inquire%20about%20a%20table%20or%20menu`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 active:scale-95 transition-transform"
        >
          <i className="fa-brands fa-whatsapp text-emerald-600 text-base mb-0.5"></i>
          <span className="text-[10px] uppercase font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Reserve Button */}
        <a
          href="#reservations"
          className="shimmer-sweep flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-rose-600 to-red-600 text-white shadow-md shadow-rose-600/30 active:scale-95 transition-transform font-bold"
        >
          <i className="fa-solid fa-calendar-check text-white text-sm mb-0.5"></i>
          <span className="text-[10px] uppercase font-bold tracking-tight">Reserve</span>
        </a>
      </div>
    </div>
  );
}
