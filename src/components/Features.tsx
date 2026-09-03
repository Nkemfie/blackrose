import { 
  Utensils, 
  ShoppingBag, 
  Truck, 
  Sparkles, 
  ConciergeBell, 
  CalendarCheck
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      id: 'feat-dine-in',
      title: 'Dine-In Luxury',
      description: 'Relax in our signature royal blue velvet booths under warm chandeliers and ambient neon.',
      icon: Utensils,
      faIcon: 'fa-solid fa-utensils',
      tag: 'Royal Velvet Seating',
      color: 'from-rose-500 to-red-500'
    },
    {
      id: 'feat-takeaway',
      title: 'Fast Takeaway',
      description: 'Piping-hot meals, fresh pizzas, and local dishes packaged securely for your convenience.',
      icon: ShoppingBag,
      faIcon: 'fa-solid fa-bag-shopping',
      tag: 'Fresh & Quick',
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: 'feat-delivery',
      title: 'Citywide Delivery',
      description: 'Enjoy delicious food delivered straight to your home, office, or hotel in Bamenda.',
      icon: Truck,
      faIcon: 'fa-solid fa-motorcycle',
      tag: 'Direct to Door',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'feat-catering',
      title: 'Celebration Catering',
      description: 'Customized food and bar service for birthdays, weddings, anniversaries, and corporate events.',
      icon: Sparkles,
      faIcon: 'fa-solid fa-champagne-glasses',
      tag: 'VIP Events',
      color: 'from-rose-600 to-pink-600'
    },
    {
      id: 'feat-table-service',
      title: 'Attentive Table Service',
      description: 'Warm, friendly hospitality from our dedicated team dedicated to making every guest feel valued.',
      icon: ConciergeBell,
      faIcon: 'fa-solid fa-bell-concierge',
      tag: '5-Star Care',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: 'feat-reservations',
      title: 'Guaranteed Reservations',
      description: 'Secure your preferred booth, VIP table, or group arrangement with instant confirmation.',
      icon: CalendarCheck,
      faIcon: 'fa-solid fa-calendar-check',
      tag: 'No Waiting',
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section
      id="services"
      className="py-20 sm:py-24 bg-[#FAF9F6] text-slate-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-700 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600" />
            <span>COMMERCIAL AVENUE • BAMENDA</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">Blackrose Luxe</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Whether you are dining in our royal blue booths, ordering takeaway, or booking for a special night out, we ensure complete comfort and memorable flavors.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((item) => {
            return (
              <div
                key={item.id}
                className="group relative p-7 rounded-2xl bg-white border border-slate-200/80 hover:border-rose-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Icon & Tag Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <i className={`${item.faIcon} text-lg`}></i>
                    </div>
                    <span className="text-[10px] font-bold tracking-wider uppercase text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-slate-900 mb-2 group-hover:text-rose-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 group-hover:text-rose-600 transition-colors">
                    Experience Excellence
                  </span>
                  <i className="fa-solid fa-arrow-right text-xs text-slate-300 group-hover:text-rose-600 group-hover:translate-x-1 transition-all"></i>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
