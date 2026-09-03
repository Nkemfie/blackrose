import { Check } from 'lucide-react';
import { DINING_EXPERIENCES } from '../data/restaurantData';

export default function SignatureExperience() {
  return (
    <section
      id="experiences"
      className="py-20 sm:py-24 bg-[#FAF9F6] text-slate-900 relative overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rose-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-700 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span>AUTHENTIC EXPERIENCES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">A Meal</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From relaxed daytime dining to vibrant VIP nightlife in our royal blue velvet lounge, Blackrose Luxe is crafted for moments worth remembering.
          </p>
        </div>

        {/* 3 Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DINING_EXPERIENCES.map((exp) => {
            return (
              <div
                key={exp.id}
                className="group rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-lg hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col justify-between"
              >
                {/* Real Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-950">
                  <img
                    src={exp.imageUrl}
                    alt={`${exp.title} at Blackrose Luxe`}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md rounded-full shadow-md text-[10px] uppercase tracking-wider font-extrabold text-rose-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-600"></span>
                    <span>{exp.title}</span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between text-left">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1.5 group-hover:text-rose-600 transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-rose-600 font-bold mb-3">
                      {exp.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed font-normal mb-6">
                      {exp.description}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="pt-4 border-t border-slate-100 space-y-2.5">
                    {exp.features.map((feat, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2.5 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    <div className="pt-4">
                      <a
                        href="#reservations"
                        className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 hover:text-rose-800 uppercase tracking-wider transition-colors"
                      >
                        <span>Reserve for {exp.title}</span>
                        <i className="fa-solid fa-arrow-right text-xs"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
