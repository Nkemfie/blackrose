import { 
  Flame, 
  Volume2, 
  Sparkles, 
  Coffee, 
  Users, 
  HeartHandshake, 
  User, 
  Globe2 
} from 'lucide-react';

export default function AtmosphereSection() {
  const atmosphereDetails = [
    { title: 'Cozy & Comfortable', desc: 'Plush velvet booth seating, warm chandeliers, and relaxing ambiance.', icon: Flame },
    { title: 'Quiet & Intimate', desc: 'An inviting haven along Commercial Avenue for conversation.', icon: Volume2 },
    { title: 'Trendy Nightlife', desc: 'Electric neon signs, weekend music, and vibrant lounge energy.', icon: Sparkles },
    { title: 'Casual & Welcoming', desc: 'Comfortable luxury where everyone feels at ease and appreciated.', icon: Coffee },
    { title: 'Great for Groups', desc: 'Spacious royal blue booths for birthdays, reunions, and squads.', icon: Users },
    { title: 'Family Friendly', desc: 'Delicious meals for all generations with friendly table service.', icon: HeartHandshake },
    { title: 'Solo Dining & Drinks', desc: 'Chic illuminated bar counter with ice-cold drinks and great food.', icon: User },
    { title: 'Great for Tourists', desc: 'Authentic Cameroon dishes (Eru, Ndole, DG) in a 5-star venue.', icon: Globe2 },
  ];

  return (
    <section className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Tag Cards */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-700 uppercase mb-3">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>ATMOSPHERE & VIBE</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              Your Kind of <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">Vibrant Place</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal mb-8 max-w-xl">
              Whether you are meeting for a power lunch, celebrating a milestone in our VIP booths, or enjoying a late-night cocktail, Blackrose Luxe is crafted to fit your moment.
            </p>

            {/* Atmosphere Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {atmosphereDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-rose-300 hover:bg-white hover:shadow-md transition-all flex items-start space-x-3.5 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors shrink-0 shadow-xs">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-serif font-bold text-sm sm:text-base text-slate-900 mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed font-normal">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Real Photos of Lounge & Bar */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-6">
              
              {/* Card 1: Royal Blue Velvet Lounge */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 group">
                <img
                  src="/images/lounge.jpg"
                  alt="Royal Blue Velvet Seating at Blackrose Luxe"
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-white/95 backdrop-blur-md rounded-2xl text-slate-900 text-xs border border-slate-200 shadow-lg text-left flex items-center justify-between">
                  <div>
                    <span className="font-serif font-bold text-sm block">Royal Velvet VIP Lounges</span>
                    <span className="text-[11px] text-slate-500">Commercial Avenue, Bamenda</span>
                  </div>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-100 text-rose-700">
                    VIP Area
                  </span>
                </div>
              </div>

              {/* Card 2: Ace of Spades Bar */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white ring-1 ring-slate-200 ml-6 sm:ml-10 group">
                <img
                  src="/images/bar.jpg"
                  alt="Bar at Blackrose Luxe"
                  className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-white/95 backdrop-blur-md rounded-xl text-slate-900 text-xs border border-slate-200 shadow-md text-left">
                  <span className="font-serif font-bold text-sm block">Illuminated Luxury Bar</span>
                  <span className="text-[11px] text-slate-500">Fine cocktails, spirits & draft beers</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
