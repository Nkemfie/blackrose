export interface MenuItem {
  id: string;
  name: string;
  category: 'starters' | 'mains' | 'grills' | 'local' | 'desserts' | 'drinks' | 'cocktails';
  description: string;
  priceNote: string; // Clearly labeled placeholder price
  isChefSpecial?: boolean;
  image?: string;
  dietary?: string[];
}

export interface MenuCategory {
  id: string;
  label: string;
  description: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  source: string;
  date?: string;
  verified?: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'food' | 'interior' | 'events' | 'atmosphere';
  categoryLabel: string;
  imageUrl: string;
  caption: string;
  description?: string;
}

export interface DiningExperience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  features: string[];
}

export interface OpeningHourDay {
  day: string;
  hours: string;
  openTime?: string;
  closeTime?: string;
  isKnownStatus?: boolean;
}

export interface ReservationRequest {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  specialRequest?: string;
  createdAt: string;
  status: 'pending_confirmation' | 'contacted' | 'confirmed';
}

export interface RestaurantData {
  name: string;
  tagline: string;
  address: string;
  city: string;
  region: string;
  country: string;
  phone: string;
  phoneFormatted?: string;
  email: string;
  messenger: string;
  messengerHandle?: string;
  messengerUrl: string;
  facebookUrl: string;
  whatsappNumber: string;
  googleRating: number;
  totalReviews: number;
  knownOpening: string;
  hours: OpeningHourDay[];
  services: string[];
  diningOptions: string[];
  atmosphereTags: string[];
  suitableFor: string[];
  amenities: string[];
  parking: string[];
  accessibility: string[];
}
