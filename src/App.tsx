import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import MenuSection from './components/MenuSection';
import SignatureExperience from './components/SignatureExperience';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import AtmosphereSection from './components/AtmosphereSection';
import ReservationSection from './components/ReservationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingMobileBar from './components/FloatingMobileBar';
import FullMenuModal from './components/FullMenuModal';
import AdminManagerModal from './components/AdminManagerModal';
import { RESTAURANT_INFO } from './data/restaurantData';
import { ReservationRequest, OpeningHourDay } from './types';

export default function App() {
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [customHours, setCustomHours] = useState<OpeningHourDay[]>(RESTAURANT_INFO.hours);
  const [reservations, setReservations] = useState<ReservationRequest[]>([]);

  // Load any persistent settings & reservations from localStorage
  useEffect(() => {
    try {
      const savedHours = localStorage.getItem('blackrose_hours');
      if (savedHours) {
        setCustomHours(JSON.parse(savedHours));
      }
      const savedReservations = localStorage.getItem('blackrose_reservations');
      if (savedReservations) {
        setReservations(JSON.parse(savedReservations));
      }
    } catch (e) {
      console.error('Error loading stored applet data', e);
    }
  }, []);

  const handleReservationSubmitted = (newBooking: ReservationRequest) => {
    setReservations((prev) => [newBooking, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-900 flex flex-col selection:bg-rose-600 selection:text-white relative font-sans">
      {/* Sticky Luxury Navbar */}
      <Navbar
        onOpenAdmin={() => setIsAdminOpen(true)}
        reservationCount={reservations.filter((r) => r.status === 'pending_confirmation').length}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Cinematic Hero Section */}
        <Hero onOpenMenuModal={() => setIsFullMenuOpen(true)} />

        {/* 2. Restaurant Introduction (Two-Column About) */}
        <About onDiscoverClick={() => {}} />

        {/* 3. Why Choose Blackrose Luxe (Features) */}
        <Features />

        {/* 4. Food / Menu Preview Section */}
        <MenuSection onOpenFullMenu={() => setIsFullMenuOpen(true)} />

        {/* 5. Signature Dining Experience (Lunch, Dinner, Celebrations) */}
        <SignatureExperience />

        {/* 6. A Glimpse of Blackrose (Masonry Gallery with Lightbox) */}
        <GallerySection />

        {/* 7. Customer Reviews Section */}
        <ReviewsSection />

        {/* 8. Atmosphere Section (Your Kind of Place) */}
        <AtmosphereSection />

        {/* 9. Reservations Form Section */}
        <ReservationSection onReservationSubmitted={handleReservationSubmitted} />

        {/* 10. Contact, Hours & Interactive Map Section */}
        <ContactSection customHours={customHours} />
      </main>

      {/* 11. Dark Editorial Footer */}
      <Footer onOpenAdmin={() => setIsAdminOpen(true)} />

      {/* 12. Floating Mobile Action Bar */}
      <FloatingMobileBar />

      {/* Full Menu Catalog Modal */}
      <FullMenuModal
        isOpen={isFullMenuOpen}
        onClose={() => setIsFullMenuOpen(false)}
      />

      {/* Admin Content & Reservation Control Modal */}
      <AdminManagerModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        customHours={customHours}
        onUpdateHours={setCustomHours}
        reservations={reservations}
        onUpdateReservations={setReservations}
      />
    </div>
  );
}

