import { Star, MessageSquareQuote, CheckCircle } from 'lucide-react';
import { AUTHENTIC_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';

export default function ReviewsSection() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'text-amber-500 fill-amber-500'
                : 'text-slate-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 sm:py-24 bg-white text-slate-900 relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-700 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span>AUTHENTIC GUEST FEEDBACK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 mb-4">
            What Our Guests <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">Say</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Real feedback from diners and visitors on Commercial Avenue, Bamenda.
          </p>

          {/* Rating Highlight Pill */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-8 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm">
            <div className="flex items-center space-x-2">
              <span className="font-serif text-3xl font-extrabold text-amber-500">
                {RESTAURANT_INFO.googleRating}
              </span>
              <span className="text-slate-400 text-xs font-bold">/ 5.0</span>
            </div>
            
            <div className="hidden sm:block w-[1px] h-6 bg-slate-200" />

            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4].map((s) => (
                <Star key={s} className="w-4 h-4 text-amber-500 fill-amber-500" />
              ))}
              <Star className="w-4 h-4 text-amber-400/50 fill-amber-400/50" />
            </div>

            <div className="hidden sm:block w-[1px] h-6 bg-slate-200" />

            <div className="text-xs uppercase tracking-wider text-slate-700 font-bold">
              Based on <span className="text-slate-900 font-extrabold">{RESTAURANT_INFO.totalReviews} Google Reviews</span>
            </div>
          </div>
        </div>

        {/* Authentic Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {AUTHENTIC_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="relative p-7 rounded-3xl bg-[#FAF9F6] border border-slate-200/80 hover:border-rose-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Quote Mark & Rating */}
                <div className="mb-5 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-rose-600 group-hover:bg-rose-600 group-hover:text-white transition-colors shadow-xs">
                    <MessageSquareQuote className="w-5 h-5" />
                  </div>
                  {renderStars(rev.rating)}
                </div>

                {/* Review Text */}
                <p className="font-serif italic text-base sm:text-lg text-slate-800 leading-relaxed mb-6 font-normal">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Meta */}
              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    {rev.author}
                  </h4>
                  <span className="text-[10px] uppercase tracking-wider text-rose-600 font-bold">{rev.source}</span>
                </div>
                <div className="flex items-center space-x-1 text-[10px] uppercase tracking-wider text-emerald-600 font-bold">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
