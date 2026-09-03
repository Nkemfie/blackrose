import { Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { OpeningHourDay } from '../types';

interface OpeningHoursSectionProps {
  customHours?: OpeningHourDay[];
}

export default function OpeningHoursSection({ customHours }: OpeningHoursSectionProps) {
  const hoursList = customHours || RESTAURANT_INFO.hours;

  // Get current day of week
  const dayIndex = new Date().getDay();
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const todayName = dayNames[dayIndex];

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-md flex flex-col justify-between text-left">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 shadow-xs">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-rose-600 font-bold block">
                DAILY SCHEDULE
              </span>
              <h3 className="font-serif text-2xl font-bold text-slate-900">
                Opening Hours
              </h3>
            </div>
          </div>

          <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Opens 8:00 AM</span>
          </span>
        </div>

        {/* Informational Subtext */}
        <p className="text-xs text-slate-500 font-normal mb-6 leading-relaxed">
          * Note: Service begins promptly at 8:00 AM daily for breakfast, coffee, lunch, dinner, and late-night lounge cocktails.
        </p>

        {/* Days List */}
        <div className="space-y-3 divide-y divide-slate-100">
          {hoursList.map((item) => {
            const isToday = item.day.toLowerCase() === todayName.toLowerCase();
            return (
              <div
                key={item.day}
                className={`pt-3 first:pt-0 flex items-center justify-between text-sm ${
                  isToday ? 'text-slate-900 font-bold' : 'text-slate-600 font-normal'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span>{item.day}</span>
                  {isToday && (
                    <span className="px-2 py-0.5 rounded-full bg-rose-100 text-[10px] font-extrabold uppercase text-rose-700">
                      Today
                    </span>
                  )}
                </div>
                <span className={isToday ? 'text-rose-600 font-bold' : 'text-slate-500'}>
                  {item.openTime} – {item.closeTime}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
        <span className="flex items-center gap-1.5">
          <i className="fa-solid fa-utensils text-rose-500"></i>
          <span>Lunch, Dinner & Late Night</span>
        </span>
        <a
          href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
          className="font-bold text-rose-600 hover:underline"
        >
          Call to verify
        </a>
      </div>
    </div>
  );
}
