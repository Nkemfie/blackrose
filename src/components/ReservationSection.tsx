import { useState, FormEvent } from 'react';
import { Calendar, Clock, Users, Phone, Mail, User, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { ReservationRequest } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface ReservationSectionProps {
  onReservationSubmitted?: (newReservation: ReservationRequest) => void;
}

export default function ReservationSection({ onReservationSubmitted }: ReservationSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '19:00',
    guests: '2',
    occasion: 'Casual Dining',
    specialRequest: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const occasionOptions = [
    'Casual Dining',
    'VIP Lounge Experience',
    'Dinner Date',
    'Birthday Celebration',
    'Anniversary',
    'Family Gathering',
    'Business Lunch',
    'Cocktail Night',
    'Other Special Occasion',
  ];

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please provide a contact phone number';
    } else if (formData.phone.trim().length < 8) {
      errs.phone = 'Please provide a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.date) {
      errs.date = 'Please select a reservation date';
    }
    if (!formData.time) {
      errs.time = 'Please select your preferred time';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newBooking: ReservationRequest = {
        id: `res-${Date.now()}`,
        fullName: formData.fullName,
        phone: formData.phone,
        email: formData.email,
        date: formData.date,
        time: formData.time,
        guests: parseInt(formData.guests, 10) || 2,
        occasion: formData.occasion,
        specialRequest: formData.specialRequest,
        createdAt: new Date().toISOString(),
        status: 'pending_confirmation',
      };

      try {
        const stored = localStorage.getItem('blackrose_reservations');
        const list = stored ? JSON.parse(stored) : [];
        list.unshift(newBooking);
        localStorage.setItem('blackrose_reservations', JSON.stringify(list));
      } catch (err) {
        console.error('Local save error', err);
      }

      if (onReservationSubmitted) {
        onReservationSubmitted(newBooking);
      }

      setIsSubmitting(false);
      setSubmitted(true);
    }, 500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '19:00',
      guests: '2',
      occasion: 'Casual Dining',
      specialRequest: '',
    });
    setErrors({});
  };

  return (
    <section id="reservations" className="py-20 sm:py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold tracking-widest text-rose-700 uppercase mb-3">
            <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
            <span>INSTANT TABLE & VIP BOOTH BOOKING</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            Reserve Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-red-600 italic">Table</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            Planning lunch, dinner, a birthday or VIP lounge evening on Commercial Avenue? Reserve directly below or contact us on WhatsApp / Messenger.
          </p>
        </div>

        {/* Form Container Card - 60:30:10 rule: 60% white card, 30% slate labels, 10% flashy rose accent */}
        <div className="bg-[#FAF9F6] border border-slate-200/90 rounded-3xl p-6 sm:p-10 shadow-xl relative text-left">
          {submitted ? (
            /* Confirmation Message */
            <div className="py-10 px-4 text-center max-w-lg mx-auto">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Reservation Request Received!
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 font-normal">
                Thank you, <strong>{formData.fullName}</strong>! Our management team at Blackrose Luxe has received your booking. We will call you shortly to confirm your table.
              </p>
              
              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-left text-xs sm:text-sm text-slate-700 space-y-2.5 mb-8 shadow-xs">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold">Guest:</span>
                  <span className="font-bold text-slate-900">{formData.fullName}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold">Date & Time:</span>
                  <span className="font-bold text-rose-600">{formData.date} at {formData.time}</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold">Party Size:</span>
                  <span className="font-bold text-slate-900">{formData.guests} Guests</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 uppercase tracking-wider text-[10px] font-bold">Occasion:</span>
                  <span className="font-semibold text-slate-800">{formData.occasion}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-6 py-3 rounded-full border-2 border-slate-300 text-xs uppercase tracking-wider font-bold text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  Make Another Request
                </button>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-rose-600 text-xs uppercase tracking-wider font-bold text-white hover:bg-rose-700 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <i className="fa-solid fa-phone text-xs"></i>
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/237680085522?text=Hello%20Blackrose%20Luxe,%20I%20just%20submitted%20a%20table%20reservation%20for%20${encodeURIComponent(formData.fullName)}%20on%20${encodeURIComponent(formData.date)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-emerald-600 text-xs uppercase tracking-wider font-bold text-white hover:bg-emerald-700 transition-colors shadow-md flex items-center justify-center gap-2"
                >
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                  <span>WhatsApp Alert</span>
                </a>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="e.g. Forbi Roland"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border ${
                        errors.fullName ? 'border-rose-500 ring-2 ring-rose-200' : 'border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                      } text-slate-900 placeholder-slate-400 text-sm outline-none transition-all`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center space-x-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Phone Number <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="tel"
                      placeholder="e.g. 6 80 08 55 22"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border ${
                        errors.phone ? 'border-rose-500 ring-2 ring-rose-200' : 'border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                      } text-slate-900 placeholder-slate-400 text-sm outline-none transition-all`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center space-x-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Email Address <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="email"
                      placeholder="e.g. guest@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border ${
                        errors.email ? 'border-rose-500 ring-2 ring-rose-200' : 'border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                      } text-slate-900 placeholder-slate-400 text-sm outline-none transition-all`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center space-x-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                {/* Date */}
                <div>
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Reservation Date <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full pl-10 pr-4 py-3 bg-white rounded-xl border ${
                        errors.date ? 'border-rose-500 ring-2 ring-rose-200' : 'border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100'
                      } text-slate-900 text-sm outline-none transition-all`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-xs text-rose-600 mt-1.5 flex items-center space-x-1 font-semibold">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.date}</span>
                    </p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Time <span className="text-rose-600">*</span>
                  </label>
                  <div className="relative">
                    <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.time}
                      onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-slate-900 text-sm outline-none transition-all"
                    >
                      <option value="11:30">11:30 AM (Lunch)</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:30">01:30 PM</option>
                      <option value="15:00">03:00 PM (Afternoon)</option>
                      <option value="17:00">05:00 PM</option>
                      <option value="18:30">06:30 PM</option>
                      <option value="19:00">07:00 PM (Prime Dinner)</option>
                      <option value="20:00">08:00 PM</option>
                      <option value="21:00">09:00 PM (VIP Lounge)</option>
                      <option value="22:00">10:00 PM (Nightlife)</option>
                    </select>
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-slate-900 text-sm outline-none transition-all"
                    >
                      <option value="1">1 Person (Solo Dining)</option>
                      <option value="2">2 People (Couple / Date)</option>
                      <option value="3">3 People</option>
                      <option value="4">4 People (Family Table)</option>
                      <option value="6">6 People (Group Booth)</option>
                      <option value="8">8 People (Royal Blue Lounge)</option>
                      <option value="12">12+ People (VIP Party)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Occasion Selection */}
              <div>
                <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                  Occasion / Seating Preference
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {occasionOptions.slice(0, 4).map((occ) => (
                    <button
                      key={occ}
                      type="button"
                      onClick={() => setFormData({ ...formData, occasion: occ })}
                      className={`p-2.5 rounded-xl text-xs font-bold text-center border transition-all cursor-pointer ${
                        formData.occasion === occ
                          ? 'bg-rose-600 text-white border-rose-600 shadow-sm'
                          : 'bg-white text-slate-700 border-slate-200 hover:border-rose-300'
                      }`}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold tracking-wider text-slate-700 uppercase mb-2">
                  Special Requests (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-slate-400" />
                  <textarea
                    rows={3}
                    placeholder="Dietary requirements, preferred booth, birthday cake surprise..."
                    value={formData.specialRequest}
                    onChange={(e) => setFormData({ ...formData, specialRequest: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 bg-white rounded-xl border border-slate-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100 text-slate-900 placeholder-slate-400 text-sm outline-none transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="shimmer-sweep w-full py-4 rounded-full bg-gradient-to-r from-rose-600 via-red-600 to-rose-700 text-white font-extrabold text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-rose-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Your Reservation...</span>
                  ) : (
                    <>
                      <i className="fa-solid fa-calendar-check text-sm"></i>
                      <span>Confirm Reservation Request</span>
                    </>
                  )}
                </button>
              </div>

              {/* Quick direct contact options */}
              <div className="pt-3 text-center flex flex-wrap items-center justify-center gap-4 text-xs text-slate-500">
                <span>Prefer instant chat?</span>
                <a
                  href={`tel:${RESTAURANT_INFO.phone.replace(/\s+/g, '')}`}
                  className="font-bold text-rose-600 hover:underline inline-flex items-center gap-1"
                >
                  <i className="fa-solid fa-phone text-xs"></i>
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
                <span>•</span>
                <a
                  href={RESTAURANT_INFO.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <i className="fa-brands fa-facebook-messenger text-xs"></i>
                  <span>Facebook Messenger</span>
                </a>
              </div>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}
