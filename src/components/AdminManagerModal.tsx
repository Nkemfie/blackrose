import { useState, useEffect } from 'react';
import { 
  X, 
  Calendar, 
  Clock, 
  Utensils, 
  Phone, 
  CheckCircle, 
  AlertCircle, 
  Save, 
  Sparkles,
  Users
} from 'lucide-react';
import { RESTAURANT_INFO, PLACEHOLDER_MENU_ITEMS } from '../data/restaurantData';
import { ReservationRequest, OpeningHourDay } from '../types';

interface AdminManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  customHours: OpeningHourDay[];
  onUpdateHours: (newHours: OpeningHourDay[]) => void;
  reservations: ReservationRequest[];
  onUpdateReservations: (updated: ReservationRequest[]) => void;
}

export default function AdminManagerModal({
  isOpen,
  onClose,
  customHours,
  onUpdateHours,
  reservations,
  onUpdateReservations,
}: AdminManagerModalProps) {
  const [activeTab, setActiveTab] = useState<'reservations' | 'hours' | 'menu' | 'info'>('reservations');
  const [editableHours, setEditableHours] = useState<OpeningHourDay[]>(customHours);
  const [saveFeedback, setSaveFeedback] = useState<string | null>(null);

  useEffect(() => {
    setEditableHours(customHours);
  }, [customHours]);

  if (!isOpen) return null;

  const handleHourChange = (index: number, newHoursText: string) => {
    const updated = [...editableHours];
    updated[index] = { ...updated[index], hours: newHoursText };
    setEditableHours(updated);
  };

  const handleSaveHours = () => {
    onUpdateHours(editableHours);
    try {
      localStorage.setItem('blackrose_hours', JSON.stringify(editableHours));
    } catch (e) {
      console.error(e);
    }
    setSaveFeedback('Opening hours updated successfully!');
    setTimeout(() => setSaveFeedback(null), 3000);
  };

  const handleUpdateStatus = (id: string, newStatus: 'pending_confirmation' | 'contacted' | 'confirmed') => {
    const updated = reservations.map((r) => (r.id === id ? { ...r, status: newStatus } : r));
    onUpdateReservations(updated);
    try {
      localStorage.setItem('blackrose_reservations', JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  const handleClearReservations = () => {
    if (confirm('Clear all reservation records?')) {
      onUpdateReservations([]);
      localStorage.removeItem('blackrose_reservations');
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6"
      onClick={onClose}
    >
      <div
        className="bg-white border border-slate-200 rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-slate-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-slate-200 bg-slate-50 flex items-center justify-between text-left">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-rose-50 border border-rose-200 rounded-xl flex items-center justify-center text-rose-600 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-rose-600 font-extrabold block">
                ADMINISTRATION & OPERATIONS
              </span>
              <h2 className="font-serif text-2xl font-bold text-slate-900">
                Restaurant Management Hub
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-slate-200 text-slate-700 hover:text-white hover:bg-rose-600 transition-colors cursor-pointer"
            aria-label="Close admin modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-white px-6 gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('reservations')}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'reservations'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Reservations ({reservations.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('hours')}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'hours'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Opening Hours</span>
          </button>

          <button
            onClick={() => setActiveTab('menu')}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'menu'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>Menu & Prices</span>
          </button>

          <button
            onClick={() => setActiveTab('info')}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'info'
                ? 'border-rose-600 text-rose-600'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Phone className="w-4 h-4" />
            <span>Contact Info</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="flex-1 overflow-y-auto p-6 text-left bg-slate-50">
          {saveFeedback && (
            <div className="mb-4 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600" />
              <span>{saveFeedback}</span>
            </div>
          )}

          {/* Tab 1: Reservations */}
          {activeTab === 'reservations' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg font-bold text-slate-900">
                    Incoming Guest Bookings
                  </h3>
                  <p className="text-xs text-slate-500">
                    Manage table requests, update guest confirmation status, and call diners.
                  </p>
                </div>
                {reservations.length > 0 && (
                  <button
                    onClick={handleClearReservations}
                    className="text-xs font-bold text-rose-600 hover:underline cursor-pointer"
                  >
                    Clear records
                  </button>
                )}
              </div>

              {reservations.length === 0 ? (
                <div className="py-12 text-center bg-white rounded-2xl border border-slate-200">
                  <Calendar className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-bold text-slate-700">No reservations received yet.</p>
                  <p className="text-xs text-slate-400 mt-1">Bookings submitted on the website will appear here in real-time.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {reservations.map((res) => (
                    <div
                      key={res.id}
                      className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-bold text-slate-900 text-sm">{res.fullName}</span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase bg-rose-50 text-rose-700">
                            {res.guests} Guests
                          </span>
                        </div>
                        <div className="text-xs text-slate-500 flex flex-wrap items-center gap-3">
                          <span className="font-semibold text-rose-600">{res.date} at {res.time}</span>
                          <span>•</span>
                          <a href={`tel:${res.phone}`} className="hover:underline text-slate-700 font-medium">
                            <i className="fa-solid fa-phone text-xs mr-1 text-slate-400"></i>
                            {res.phone}
                          </a>
                          <span>•</span>
                          <span>{res.occasion}</span>
                        </div>
                        {res.specialRequest && (
                          <p className="text-xs text-slate-600 italic mt-1 bg-slate-50 p-2 rounded-lg">
                            Note: {res.specialRequest}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-2">
                        <select
                          value={res.status}
                          onChange={(e) => handleUpdateStatus(res.id, e.target.value as any)}
                          className="px-3 py-1.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 bg-white"
                        >
                          <option value="pending_confirmation">Pending</option>
                          <option value="contacted">Contacted</option>
                          <option value="confirmed">Confirmed</option>
                        </select>
                        <a
                          href={`tel:${res.phone}`}
                          className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-rose-600 hover:text-white transition-colors"
                          title="Call guest"
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Hours */}
          {activeTab === 'hours' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Opening Hours Editor
                </h3>
                <p className="text-xs text-slate-500">
                  Daily service starts at 8:00 AM. Enter closing times and customize weekly schedule.
                </p>
              </div>

              <div className="space-y-2.5 bg-white p-5 rounded-2xl border border-slate-200">
                {editableHours.map((item, idx) => (
                  <div key={item.day} className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold text-slate-800 w-28 uppercase tracking-wider">{item.day}</span>
                    <input
                      type="text"
                      value={item.hours}
                      onChange={(e) => handleHourChange(idx, e.target.value)}
                      className="flex-1 px-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 font-semibold focus:outline-none focus:border-rose-500"
                    />
                  </div>
                ))}
              </div>

              <div className="flex justify-end">
                <button
                  onClick={handleSaveHours}
                  className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Save Opening Hours</span>
                </button>
              </div>
            </div>
          )}

          {/* Tab 3: Menu */}
          {activeTab === 'menu' && (
            <div className="space-y-4">
              <div>
                <h3 className="font-serif text-lg font-bold text-slate-900">
                  Live Menu Catalog
                </h3>
                <p className="text-xs text-slate-500">
                  Total of {PLACEHOLDER_MENU_ITEMS.length} dishes and beverages configured with official prices in FCFA (XAF).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-700 space-y-2">
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold">Chicken DG:</span>
                  <span className="text-rose-600 font-bold">3,500 XAF</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold">Artisan Meat Pizza:</span>
                  <span className="text-rose-600 font-bold">5,000 XAF</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold">Chicken Pizza:</span>
                  <span className="text-rose-600 font-bold">7,000 XAF</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold">Garri and Eru Special:</span>
                  <span className="text-rose-600 font-bold">2,500 XAF</span>
                </div>
                <div className="flex justify-between border-b border-slate-100 pb-2">
                  <span className="font-bold">Ndole with Beef:</span>
                  <span className="text-rose-600 font-bold">2,500 XAF</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Natural Juices (Pineapple, Carrot, Tropical):</span>
                  <span className="text-rose-600 font-bold">1,000 XAF</span>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Contact Info */}
          {activeTab === 'info' && (
            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-slate-900">
                Verified Business Information
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">Official Name</span>
                  <span className="text-slate-900 font-bold text-sm">{RESTAURANT_INFO.name}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">Location</span>
                  <span className="text-slate-900 font-semibold text-sm">{RESTAURANT_INFO.address}, {RESTAURANT_INFO.city}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">Direct Hotline</span>
                  <span className="text-rose-600 font-bold text-sm">{RESTAURANT_INFO.phone}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">Official Email</span>
                  <span className="text-slate-900 font-semibold text-sm">{RESTAURANT_INFO.email}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">Facebook Messenger</span>
                  <span className="text-blue-600 font-bold text-sm">{RESTAURANT_INFO.messengerHandle}</span>
                </div>
                <div className="p-4 rounded-2xl bg-white border border-slate-200">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block mb-1">Google Rating</span>
                  <span className="text-amber-500 font-bold text-sm">★ {RESTAURANT_INFO.googleRating} ({RESTAURANT_INFO.totalReviews} Reviews)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-slate-200 bg-white flex justify-between items-center text-xs text-slate-500">
          <span className="text-[11px] font-semibold">Blackrose Luxe Operations Center</span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Close Panel
          </button>
        </div>
      </div>
    </div>
  );
}
