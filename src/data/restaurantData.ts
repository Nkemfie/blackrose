import { RestaurantData, MenuCategory, MenuItem, Review, GalleryItem, DiningExperience } from '../types';

export const RESTAURANT_INFO: RestaurantData = {
  name: 'Blackrose Luxe Restaurant',
  tagline: 'Where Great Taste Meets Elegance',
  address: 'Commercial Avenue',
  city: 'Bamenda',
  region: 'North West Region',
  country: 'Cameroon',
  phone: '6 80 08 55 22',
  phoneFormatted: '+237 6 80 08 55 22',
  email: 'blackroseluxe237@gmail.com',
  messenger: 'Blackrose Luxe',
  messengerHandle: 'Blackrose Luxe',
  messengerUrl: 'https://m.me/BlackroseLuxe',
  facebookUrl: 'https://facebook.com/BlackroseLuxe',
  whatsappNumber: '+237680085522',
  googleRating: 3.8,
  totalReviews: 24,
  knownOpening: 'Opens 8:00 AM daily',
  hours: [
    { day: 'Monday', hours: 'Opens 8:00 AM — Late Night', openTime: '8:00 AM', closeTime: 'Late Night' },
    { day: 'Tuesday', hours: 'Opens 8:00 AM — Late Night', openTime: '8:00 AM', closeTime: 'Late Night' },
    { day: 'Wednesday', hours: 'Opens 8:00 AM — Late Night', openTime: '8:00 AM', closeTime: 'Late Night' },
    { day: 'Thursday', hours: 'Opens 8:00 AM — Late Night', openTime: '8:00 AM', closeTime: 'Late Night' },
    { day: 'Friday', hours: 'Opens 8:00 AM — Late Night (VIP Lounge)', openTime: '8:00 AM', closeTime: 'Late Night' },
    { day: 'Saturday', hours: 'Opens 8:00 AM — Late Night (VIP Weekend)', openTime: '8:00 AM', closeTime: 'Late Night' },
    { day: 'Sunday', hours: 'Opens 8:00 AM — Late Night', openTime: '8:00 AM', closeTime: 'Late Night' },
  ],
  services: ['Dine-in', 'Takeaway', 'Delivery', 'Catering', 'Table service', 'VIP Lounge'],
  diningOptions: ['Lunch', 'Dinner', 'Late Night', 'Catering', 'Dessert', 'Table service'],
  atmosphereTags: [
    'Flashy & Vibrant',
    'Royal Velvet Lounges',
    'Neon Glow Ambiance',
    'Cozy & Elegant',
    'Trendy Nightlife & Dining',
    'Great for Groups & Birthdays',
    'Family Friendly',
    'Solo Dining & Tourists'
  ],
  suitableFor: ['Groups', 'Tourists', 'Solo dining', 'Families / Children', 'Private Celebrations'],
  amenities: ['Full Luxury Bar on site', 'Modern Restroom / Toilet', 'VIP Royal Blue Booths', 'Neon Photo Corners'],
  parking: ['Free street parking', 'Free parking area'],
  accessibility: [
    'Wheelchair-accessible entrance',
    'Wheelchair-accessible seating',
    'Wheelchair-accessible parking',
    'Wheelchair-accessible toilet'
  ]
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'mains', label: 'Premium Eats', description: 'Our chef-crafted top selections featuring chicken, seafood, pizza & grilled specials' },
  { id: 'local', label: 'Affordable Eats', description: 'Traditional Cameroon favorites & home-style delicacies cooked to perfection' },
  { id: 'grills', label: 'Gourmet Pizzas & Grills', description: 'Fresh oven-baked pizzas and sizzled flame-grilled fish & cuts' },
  { id: 'starters', label: 'Sides & Compliments', description: 'Fluffy white rice, fried Irish, golden plantains, boiled plantains & white yams' },
  { id: 'drinks', label: 'Fresh Natural Juices', description: '100% natural cold pressed juices: carrot, pineapple & tropical fruit cocktails' },
  { id: 'desserts', label: 'Desserts & Sweet Treats', description: 'Chilled rich artisan ice cream and refreshing sweet delights' },
  { id: 'cocktails', label: 'Luxury Bar & Spirits', description: 'Premium whiskeys, champagnes, cold beers, and handcrafted cocktails' },
];

export const PLACEHOLDER_MENU_ITEMS: MenuItem[] = [
  // Premium Eats
  {
    id: 'item-pe-1',
    name: 'Chicken DG (Directeur Général)',
    category: 'mains',
    description: 'Cameroon legendary celebration dish: succulent chicken stir-fried with golden fried plantains, colorful bell peppers, carrots, and aromatic spices.',
    priceNote: '3,500 XAF',
    isChefSpecial: true,
    image: '/images/eru.jpg',
    dietary: ['Signature Dish']
  },
  {
    id: 'item-pe-2',
    name: 'Snail Sauce (Congo Meat Delicacy)',
    category: 'mains',
    description: 'Plump, tender African land snails gently simmered in a piquant tomato, garlic, and wild herb relish. A true Cameroonian luxury delicacy.',
    priceNote: '3,500 XAF',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-pe-3',
    name: 'Chicken Ndolé Royale',
    category: 'mains',
    description: 'Rich stew of tender bitterleaf, ground fresh peanuts, crayfish, and flavorful pieces of seasoned chicken served with your choice of compliment.',
    priceNote: '3,500 XAF',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-pe-4',
    name: 'Gizzard Sauce',
    category: 'mains',
    description: 'Tender, savory poultry gizzards braised in rich country herbs, peppers, and caramelized onions.',
    priceNote: '3,000 XAF',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-pe-5',
    name: 'Chicken Sauce',
    category: 'mains',
    description: 'Tender cuts of chicken slow simmered in our house velvety tomato and herb reduction.',
    priceNote: '3,500 XAF',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-pe-6',
    name: 'Pork Sauce',
    category: 'mains',
    description: 'Succulent pork bites browned and stewed in a rich garlic, ginger, and aromatic pepper sauce.',
    priceNote: '3,500 XAF',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-pe-7',
    name: 'Chicken White Beans',
    category: 'mains',
    description: 'Hearty, velvety white beans gently stewed with spiced chicken and farm herbs.',
    priceNote: '3,500 XAF',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-pe-8',
    name: 'Chicken Fried Rice',
    category: 'mains',
    description: 'Fragrant golden rice wok-tossed with crisp vegetables, scrambled egg ribbon, and seasoned chicken.',
    priceNote: '3,500 XAF',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-pe-9',
    name: 'Flame Grilled Fish',
    category: 'grills',
    description: 'Fresh whole fish marinated in country spice paste, flame grilled to flaky perfection, served with house pepper sauce.',
    priceNote: '3,500 XAF',
    isChefSpecial: true,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?q=80&w=600&auto=format&fit=crop',
  },

  // Pizzas
  {
    id: 'item-pz-1',
    name: 'Blackrose Signature Meat Pizza',
    category: 'grills',
    description: 'Fresh hand-stretched artisan dough topped with rich herb marinara, melted mozzarella, seasoned ground beef, and spicy peppers.',
    priceNote: '5,000 XAF',
    isChefSpecial: true,
    image: '/images/pizza.jpg',
  },
  {
    id: 'item-pz-2',
    name: 'Gourmet Chicken Pizza',
    category: 'grills',
    description: 'Golden crust layered with tender roasted chicken breast strips, sautéed bell peppers, sweet red onions, and bubbly melted cheese.',
    priceNote: '7,000 XAF',
    image: '/images/pizza.jpg',
  },
  {
    id: 'item-pz-3',
    name: 'Family Feast Pizza (Meat or Chicken)',
    category: 'grills',
    description: 'Extra-large sharing pizza for groups and families, generously loaded with double toppings and golden melted mozzarella.',
    priceNote: '10,000 – 12,000 XAF',
    image: '/images/pizza.jpg',
  },

  // Affordable Eats & Local Classics
  {
    id: 'item-ae-1',
    name: 'Garri and Eru (House Special)',
    category: 'local',
    description: 'The pride of Cameroon: tender shredded eru leaves prepared with waterleaf, pure red palm oil, smoked fish, and succulent beef, served with hot garri / water fufu.',
    priceNote: '2,500 XAF',
    isChefSpecial: true,
    image: '/images/eru.jpg',
  },
  {
    id: 'item-ae-2',
    name: 'Ndolé with Beef',
    category: 'local',
    description: 'Traditional Cameroonian bitterleaf specialty cooked with rich peanut paste, smoked crayfish, and seasoned beef cuts.',
    priceNote: '2,500 XAF',
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-ae-3',
    name: 'Towel Meat Sauce (Tripe)',
    category: 'local',
    description: 'Savory stewed towel meat (beef tripe) slow cooked until tender with local seasonings, peppers, and onions.',
    priceNote: '2,500 XAF',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-ae-4',
    name: 'Beef Sauce with Compliment',
    category: 'local',
    description: 'Rich tomato and onion beef stew served with your choice of rice, fried plantains, or Irish potatoes.',
    priceNote: '2,500 XAF',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-ae-5',
    name: 'Liver Sauce',
    category: 'local',
    description: 'Finely diced beef liver tossed in fresh onions, bell peppers, and savory broth.',
    priceNote: '2,500 XAF',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-ae-6',
    name: 'White Beans with Beef',
    category: 'local',
    description: 'Hearty Cameroonian spiced bean stew simmered with tender beef cuts.',
    priceNote: '2,500 XAF',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-ae-7',
    name: 'Fried Rice with Beef Sauce',
    category: 'local',
    description: 'Seasoned vegetable fried rice paired with a cup of rich beef pepper gravy.',
    priceNote: '2,500 XAF',
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-ae-8',
    name: 'Crisp Vegetable Salad',
    category: 'local',
    description: 'Freshly shredded garden cabbage, carrots, cucumbers, sweet corn, boiled egg, and house dressing.',
    priceNote: '2,000 XAF',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop',
    dietary: ['Vegetarian']
  },
  {
    id: 'item-ae-9',
    name: 'Sautéed Fried Vegetables',
    category: 'local',
    description: 'Garden greens and sweet peppers stir-fried in light seasoned vegetable oil.',
    priceNote: '2,500 XAF',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=600&auto=format&fit=crop',
    dietary: ['Vegetarian']
  },

  // Compliments
  {
    id: 'item-comp-1',
    name: 'Fried Plantains (Alloco / Dodo)',
    category: 'starters',
    description: 'Sweet ripe yellow plantains sliced and fried to caramelized golden perfection.',
    priceNote: 'Included with meals or side',
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?q=80&w=600&auto=format&fit=crop',
    dietary: ['Vegetarian']
  },
  {
    id: 'item-comp-2',
    name: 'Fried Irish (Hand-Cut Potato Fries)',
    category: 'starters',
    description: 'Crispy golden potato fries lightly salted.',
    priceNote: 'Included with meals or side',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=600&auto=format&fit=crop',
    dietary: ['Vegetarian']
  },
  {
    id: 'item-comp-3',
    name: 'Steamed White Rice & Boiled Plantains / White Yams',
    category: 'starters',
    description: 'Authentic carb pairings including steamed long-grain rice, tender boiled plantains, and soft white yams.',
    priceNote: 'Complimentary pairing',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?q=80&w=600&auto=format&fit=crop',
  },

  // Fresh Juices & Desserts
  {
    id: 'item-dr-1',
    name: '100% Natural Pineapple Juice',
    category: 'drinks',
    description: 'Cold pressed fresh sweet pineapple juice made on site without added preservatives.',
    priceNote: '1,000 XAF',
    image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-dr-2',
    name: 'Natural Carrot Juice',
    category: 'drinks',
    description: 'Freshly extracted organic sweet carrot juice, packed with vitamins and natural vitality.',
    priceNote: '1,000 XAF',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-dr-3',
    name: 'Natural Tropical Cocktail Juice',
    category: 'drinks',
    description: 'Delicious blend of seasonal fresh fruits pressed and chilled to quench your thirst.',
    priceNote: '1,000 XAF',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 'item-ds-1',
    name: 'Chilled Artisan Ice Cream',
    category: 'desserts',
    description: 'Scoops of creamy velvety ice cream with sweet syrup topping. The perfect ending to your meal.',
    priceNote: '1,000 XAF',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=600&auto=format&fit=crop',
  },

  // Bar & Cocktails
  {
    id: 'item-bar-1',
    name: 'Blackrose Signature Ruby Cocktail',
    category: 'cocktails',
    description: 'Handcrafted signature cocktail with hints of wild berry, citrus oils, botanical tonic, and premium spirit.',
    priceNote: 'Ask Bar Service',
    isChefSpecial: true,
    image: '/images/bar.jpg',
  },
  {
    id: 'item-bar-2',
    name: 'VIP Spirits & Champagne Service',
    category: 'cocktails',
    description: 'Luc Belaire Champagne, Hennessy Cognac, Jack Daniel’s Whiskey, fine red and white wines, and chilled local beers.',
    priceNote: 'Ask Bar Service',
    image: '/images/bar.jpg',
  }
];

export const AUTHENTIC_REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Ngu Blandine',
    rating: 5,
    text: 'Their meals are the best. Very delicious.',
    source: 'Google Review',
    verified: true
  },
  {
    id: 'rev-2',
    author: 'Gody Shey',
    rating: 5,
    text: 'A very nice place for weekend especially Saturday evening with great music, royal blue lounges, and delicious food!',
    source: 'Google Review',
    verified: true
  },
  {
    id: 'rev-3',
    author: 'Commercial Avenue Regular',
    rating: 4,
    text: 'Pleasant atmosphere, comfortable velvet seats, lovely neon lights and friendly table service on Commercial Avenue.',
    source: 'Verified Customer',
    verified: true
  }
];

export const DINING_EXPERIENCES: DiningExperience[] = [
  {
    id: 'lounge',
    title: 'VIP Velvet Lounge & Nightlife',
    subtitle: 'Royal Blue Velvet Seating & Neon Rose Atmosphere',
    description: 'Step into our iconic royal blue tufted booths framed by crystal chandeliers and our radiant neon rose art. An electric, unforgettable atmosphere for stylish evenings and celebrations.',
    imageUrl: '/images/lounge.jpg',
    features: ['Royal blue plush velvet seating', 'Glowing "Rose Loves You" neon corner', 'Premium bar and bottle service', 'Great music & weekend vibes']
  },
  {
    id: 'dining',
    title: 'Gourmet Dining & Lunch',
    subtitle: 'From Cameroon Classics to Gourmet Pizza',
    description: 'Enjoy delicious meals whether you crave traditional Garri & Eru, Chicken DG, fresh Grilled Fish, or freshly baked artisan meat pizza fresh from our oven.',
    imageUrl: '/images/pizza.jpg',
    features: ['Fast dine-in & takeaway', 'Fresh local ingredients daily', 'Comfortable air-conditioned dining booths', 'Family-friendly seating']
  },
  {
    id: 'bar',
    title: 'The Illuminated Luxury Bar',
    subtitle: 'Ace of Spade Neon Counter & Cocktails',
    description: 'Our show-stopping illuminated bar counter offers cold draft beers, fine champagnes, top-shelf spirits, and signature house-crafted cocktails mixed by our talented bartenders.',
    imageUrl: '/images/bar.jpg',
    features: ['Neon Ace-of-Spade luxury bar display', 'Premium champagnes & whiskeys', 'Fresh 100% natural fruit juices', 'Friendly mixologists & fast service']
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'VIP Royal Blue Velvet Lounge',
    category: 'interior',
    categoryLabel: 'VIP Lounge',
    imageUrl: '/images/lounge.jpg',
    caption: 'Our signature plush royal blue tufted booths under sparkling crystal chandeliers and ambient neon.'
  },
  {
    id: 'gal-2',
    title: 'Gourmet Meat & Cheese Pizza',
    category: 'food',
    categoryLabel: 'Kitchen & Grills',
    imageUrl: '/images/pizza.jpg',
    caption: 'Freshly baked artisan pizza with golden bubbling cheese and savory spiced meats.'
  },
  {
    id: 'gal-3',
    title: 'Illuminated Spade Cocktail Bar',
    category: 'interior',
    categoryLabel: 'Full Bar',
    imageUrl: '/images/bar.jpg',
    caption: 'The heart of Blackrose Luxe nightlife with premium spirits, champagnes, and fine wines.'
  },
  {
    id: 'gal-4',
    title: 'Authentic Cameroon Garri & Eru',
    category: 'food',
    categoryLabel: 'Local Specialties',
    imageUrl: '/images/eru.jpg',
    caption: 'Glistening forest eru stew slow-simmered with beef, smoked fish, and served with garri.'
  },
  {
    id: 'gal-5',
    title: 'The Official Blackrose Luxe Identity',
    category: 'atmosphere',
    categoryLabel: 'Brand Emblem',
    imageUrl: '/images/logo.jpg',
    caption: 'The iconic intertwined BR logo with the sculpted red rose bud.'
  },
  {
    id: 'gal-6',
    title: 'Weekend Socials & Dining',
    category: 'events',
    categoryLabel: 'Celebrations',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=900&auto=format&fit=crop',
    caption: 'Unforgettable moments, birthdays, reunions, and date nights on Commercial Avenue.'
  }
];
