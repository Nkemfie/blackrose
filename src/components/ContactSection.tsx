import { MapPin, Navigation, Car } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import OpeningHoursSection from './OpeningHoursSection';
import LocationMapSection from './LocationMapSection';
import { OpeningHourDay } from '../types';

interface ContactSectionProps {
  customHours?: OpeningHourDay[];
}

export default function ContactSection({ customHours }: ContactSectionProps) {
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=Commercial+Avenue,+Bamenda,+Cameroon`;

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#FAF9F6] text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-700 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span>DIRECT CHANNELS & LOCATION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            Connect with <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">Blackrose Luxe</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Call us directly, message us on Facebook Messenger, write us via email, or visit our restaurant on Commercial Avenue.
          </p>
        </div>

        {/* Top 3 Direct Contact Cards: Call, Messenger, Email (User's Exact Details) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          
          {/* Card 1: Call Directly */}
          <a
            href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
            className="p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-rose-400 transition-all duration-300 flex flex-col justify-between text-left group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 text-xl mb-4 group-hover:bg-rose-600 group-hover:text-white transition-colors">
                <i className="fa-solid fa-phone"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-rose-600 font-bold block mb-1">
                Direct Telephone
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                {RESTAURANT_INFO.phone}
              </h3>
              <p className="text-xs text-slate-500">
                Call for immediate table bookings, takeaway orders, and catering requests.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-rose-600">
              <span>Call Now</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </a>

          {/* Card 2: Messenger */}
          <a
            href={RESTAURANT_INFO.messengerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between text-left group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <i className="fa-brands fa-facebook-messenger"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-blue-600 font-bold block mb-1">
                Facebook Messenger
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">
                {RESTAURANT_INFO.messengerHandle}
              </h3>
              <p className="text-xs text-slate-500">
                Direct fast chat with our team on Facebook Messenger for quick inquiries.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
              <span>Chat on Messenger</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </a>

          {/* Card 3: Email */}
          <a
            href={`mailto:${RESTAURANT_INFO.email}`}
            className="p-7 rounded-3xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-emerald-400 transition-all duration-300 flex flex-col justify-between text-left group"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 text-xl mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold block mb-1">
                Official Email
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-slate-900 mb-2 break-all">
                {RESTAURANT_INFO.email}
              </h3>
              <p className="text-xs text-slate-500">
                Send us formal inquiries, corporate catering proposals, and event sponsorships.
              </p>
            </div>
            <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-600">
              <span>Send Email</span>
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </div>
          </a>

        </div>

        {/* Primary Banner Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 mb-12 shadow-xl relative overflow-hidden text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Primary Details */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-rose-600 font-bold block mb-1">
                  CONTEMPORARY AFRICAN DINING & VIP NIGHTLIFE
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                  Blackrose Luxe Restaurant
                </h3>
              </div>

              <div className="space-y-4">
                {/* Location */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-rose-600 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">Address & City</span>
                    <span className="text-base font-semibold text-slate-900">
                      Commercial Avenue, Bamenda, Cameroon
                    </span>
                  </div>
                </div>

                {/* WhatsApp & Call */}
                <div className="flex items-start space-x-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-emerald-600 shrink-0 mt-0.5">
                    <i className="fa-brands fa-whatsapp text-lg"></i>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">WhatsApp & Hotline</span>
                    <a
                      href={`https://wa.me/237680085522`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-emerald-600 hover:underline"
                    >
                      +237 6 80 08 55 22
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  id="contact-call-btn"
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs tracking-wider uppercase transition-all shadow-md shadow-rose-600/30"
                >
                  <i className="fa-solid fa-phone text-xs"></i>
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>

                <a
                  id="contact-directions-btn"
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 py-3.5 px-6 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-900 font-bold text-xs tracking-wider uppercase transition-all"
                >
                  <Navigation className="w-4 h-4 text-slate-700" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Services and Amenities Badges */}
            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 space-y-5">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-slate-700 font-bold mb-2">
                  Dining Services
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {RESTAURANT_INFO.services.map((srv) => (
                    <span
                      key={srv}
                      className="px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-2xs"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-slate-700 font-bold mb-2">
                  Amenities & Atmosphere
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-rose-700">
                    Full Bar on Site
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-700">
                    VIP Velvet Seating
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-bold text-amber-700">
                    Free Parking
                  </span>
                  <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
                    Wheelchair Accessible
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Two-Column: Hours & Interactive Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <OpeningHoursSection customHours={customHours} />
          <LocationMapSection />
        </div>

      </div>
    </section>
  );
}
