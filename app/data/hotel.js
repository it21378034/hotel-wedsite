/**
 * Hotel Data Store
 * Central source of truth for The Grand Pavilion resort website.
 * All pages pull from this data layer for consistency.
 */

// ─── Hotel Info ────────────────────────────────────────────
export const hotelInfo = {
  name: "The Grand Pavilion",
  tagline: "Where Mountains Meet Luxury",
  type: "Resort",
  starRating: 5,
  totalRooms: 30,
  yearEstablished: 2019,
  checkIn: "14:00",
  checkOut: "11:00",
  priceRange: "$90 - $280",
  phone: "+94 55 222 8800",
  whatsapp: "+94772228800",
  email: "reservations@thegrandpavilion.lk",
  website: "https://www.thegrandpavilion.lk",
  domain: "www.thegrandpavilion.lk",
  address: {
    street: "42 Passara Road",
    city: "Ella",
    region: "Uva Province",
    country: "Sri Lanka",
    postalCode: "90090",
  },
  geo: {
    lat: 6.8667,
    lng: 81.0466,
  },
  social: {
    facebook: "https://facebook.com/thegrandpavilion",
    instagram: "https://instagram.com/thegrandpavilion",
    twitter: "https://twitter.com/grandpavilionlk",
    tripadvisor: "https://tripadvisor.com/thegrandpavilion",
    youtube: "https://youtube.com/@thegrandpavilion",
  },
  googleBusinessProfile: "https://g.page/thegrandpavilion",
  languages: ["en", "si", "ta"],
  currencies: ["USD", "LKR", "EUR"],
};

// ─── Currency Rates (sample) ───────────────────────────────
export const currencyRates = {
  USD: { symbol: "$", rate: 1 },
  LKR: { symbol: "Rs.", rate: 320 },
  EUR: { symbol: "€", rate: 0.92 },
};

// ─── Translations ──────────────────────────────────────────
export const translations = {
  en: {
    nav: {
      home: "Home",
      rooms: "Rooms & Suites",
      amenities: "Amenities",
      dining: "Dining",
      offers: "Offers",
      gallery: "Gallery",
      location: "Location",
      events: "Events",
      reviews: "Reviews",
      contact: "Contact",
      faq: "FAQ",
      blog: "Blog",
      bookNow: "Book Now",
    },
    hero: {
      title: "Welcome to The Grand Pavilion",
      subtitle: "A modern luxury resort nestled in the misty mountains of Ella, Sri Lanka",
      cta: "Check Availability",
    },
    booking: {
      checkIn: "Check-in",
      checkOut: "Check-out",
      guests: "Guests",
      adults: "Adults",
      children: "Children",
      rooms: "Rooms",
      checkAvailability: "Check Availability",
      bestRate: "Best Rate Guarantee",
      directPerks: "Book direct for exclusive perks",
    },
    footer: {
      about: "Perched among the emerald hills of Ella, The Grand Pavilion offers a sanctuary of modern luxury, where panoramic mountain views meet world-class hospitality.",
      quickLinks: "Quick Links",
      contactUs: "Contact Us",
      newsletter: "Newsletter",
      newsletterText: "Subscribe for exclusive offers and travel inspiration.",
      subscribe: "Subscribe",
      copyright: "© 2026 The Grand Pavilion. All rights reserved.",
    },
  },
  si: {
    nav: {
      home: "මුල් පිටුව",
      rooms: "කාමර සහ සූට්",
      amenities: "පහසුකම්",
      dining: "ආහාර",
      offers: "පිරිනැමීම්",
      gallery: "ගැලරිය",
      location: "ස්ථානය",
      events: "උත්සව",
      reviews: "සමාලෝචන",
      contact: "සම්බන්ධ වන්න",
      faq: "නිතර අසන ප්‍රශ්න",
      blog: "බ්ලොග්",
      bookNow: "දැන් වෙන් කරන්න",
    },
    hero: {
      title: "The Grand Pavilion වෙත සාදරයෙන් පිළිගනිමු",
      subtitle: "එල්ල කඳුකරයේ නවීන සුඛෝපභෝගී නිවාඩු නිකේතනය",
      cta: "ලබා ගත හැකිදැයි පරීක්ෂා කරන්න",
    },
    booking: {
      checkIn: "පිවිසුම",
      checkOut: "පිටවීම",
      guests: "අමුත්තන්",
      adults: "වැඩිහිටියන්",
      children: "ළමයින්",
      rooms: "කාමර",
      checkAvailability: "ලබා ගත හැකිදැයි පරීක්ෂා කරන්න",
      bestRate: "හොඳම මිල සහතිකය",
      directPerks: "විශේෂ වරප්‍රසාද සඳහා කෙලින්ම වෙන් කරන්න",
    },
    footer: {
      about: "එල්ලේ කොළ කඳුකරය මැද The Grand Pavilion නවීන සුඛෝපභෝගී නිවාඩු නිකේතනයක් ලෙස සේවය සපයයි.",
      quickLinks: "ඉක්මන් සබැඳි",
      contactUs: "සම්බන්ධ වන්න",
      newsletter: "පුවත් පත්‍රිකාව",
      newsletterText: "විශේෂ පිරිනැමීම් සහ සංචාරක ආශ්වාදය සඳහා දායක වන්න.",
      subscribe: "දායක වන්න",
      copyright: "© 2026 The Grand Pavilion. සියලු හිමිකම් ඇවිරිණි.",
    },
  },
  ta: {
    nav: {
      home: "முகப்பு",
      rooms: "அறைகள் & சூட்கள்",
      amenities: "வசதிகள்",
      dining: "உணவு",
      offers: "சிறப்பு சலுகைகள்",
      gallery: "கேலரி",
      location: "இடம்",
      events: "நிகழ்வுகள்",
      reviews: "மதிப்புரைகள்",
      contact: "தொடர்பு",
      faq: "கேள்விகள்",
      blog: "வலைப்பதிவு",
      bookNow: "இப்போது புக் செய்யுங்கள்",
    },
    hero: {
      title: "The Grand Pavilion-க்கு வரவேற்கிறோம்",
      subtitle: "எல்லா மலைப்பகுதியில் நவீன சொகுசு விடுமுறை விடுதி",
      cta: "கிடைக்கும் தன்மையை சரிபார்க்கவும்",
    },
    booking: {
      checkIn: "செக்-இன்",
      checkOut: "செக்-அவுட்",
      guests: "விருந்தினர்கள்",
      adults: "பெரியவர்கள்",
      children: "குழந்தைகள்",
      rooms: "அறைகள்",
      checkAvailability: "கிடைக்கும் தன்மையை சரிபார்க்கவும்",
      bestRate: "சிறந்த விலை உத்தரவாதம்",
      directPerks: "நேரடி பதிவு சிறப்பு சலுகைகள்",
    },
    footer: {
      about: "எல்லாவின் பசுமையான மலைகளுக்கு மத்தியில் The Grand Pavilion நவீன சொகுசு விடுமுறை விடுதியாக சேவை செய்கிறது.",
      quickLinks: "விரைவு இணைப்புகள்",
      contactUs: "எங்களை தொடர்பு கொள்ளுங்கள்",
      newsletter: "செய்திமடல்",
      newsletterText: "சிறப்பு சலுகைகள் மற்றும் பயண உத்வேகத்திற்கு பதிவு செய்யுங்கள்.",
      subscribe: "பதிவு செய்யுங்கள்",
      copyright: "© 2026 The Grand Pavilion. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.",
    },
  },
};

// ─── Rooms ─────────────────────────────────────────────────
export const rooms = [
  {
    id: "deluxe-mountain-view",
    name: "Deluxe Mountain View",
    slug: "deluxe-mountain-view",
    shortDesc: "Wake up to panoramic views of Ella's emerald mountains from your private balcony.",
    description: "The Deluxe Mountain View room is a serene retreat offering breathtaking panoramas of Ella's misty peaks and rolling tea plantations. Spanning 35 square metres, each room features floor-to-ceiling windows, a private balcony with mountain views, and refined modern furnishings crafted from local timber. The en-suite bathroom includes a rain shower with artisanal Sri Lankan toiletries. Ideal for couples and solo travellers seeking tranquillity and natural beauty, this room is your window to the heart of Sri Lanka's hill country.",
    image: "/images/deluxe-mountain-view-room.jpg",
    images: ["/images/deluxe-mountain-view-room.jpg", "/images/premium-valley-suite.jpg"],
    size: "35 sqm",
    bedType: "King",
    maxGuests: 2,
    count: 8,
    priceFrom: 120,
    amenities: ["Mountain view balcony", "Rain shower", "Free Wi-Fi", "Mini bar", "Air conditioning", "In-room safe", "Tea/coffee maker", "Flat-screen TV", "Bathrobes & slippers"],
    featured: true,
  },
  {
    id: "premium-valley-suite",
    name: "Premium Valley Suite",
    slug: "premium-valley-suite",
    shortDesc: "A spacious suite with separate living area and stunning valley views.",
    description: "Our Premium Valley Suite redefines hill country luxury across 55 generous square metres. A separate living area flows into the bedroom, both bathed in natural light from panoramic windows framing the Ella valley. The centrepiece is a freestanding soaking tub positioned to capture the scenery, complemented by a walk-in rain shower. Furnished with bespoke pieces by Sri Lankan artisans and featuring a private terrace, this suite is perfect for those who appreciate space, style, and sweeping vistas.",
    image: "/images/premium-valley-suite.jpg",
    images: ["/images/premium-valley-suite.jpg", "/images/deluxe-mountain-view-room.jpg"],
    size: "55 sqm",
    bedType: "King",
    maxGuests: 2,
    count: 6,
    priceFrom: 180,
    amenities: ["Valley view terrace", "Freestanding bathtub", "Separate living area", "Rain shower", "Free Wi-Fi", "Mini bar", "Nespresso machine", "Air conditioning", "In-room safe", "Flat-screen TV", "Bathrobes & slippers", "Complimentary fruit basket"],
    featured: true,
  },
  {
    id: "grand-pavilion-suite",
    name: "Grand Pavilion Suite",
    slug: "grand-pavilion-suite",
    shortDesc: "Our signature suite — the pinnacle of luxury with a private plunge pool.",
    description: "The Grand Pavilion Suite is the crown jewel of our resort. At 80 square metres, this signature suite features a private plunge pool overlooking the misty mountains, a spacious bedroom with a king bed dressed in Egyptian cotton, a separate living and dining area, and a spa-inspired bathroom with both a soaking tub and rain shower. Every detail has been curated — from hand-selected artwork to a personal butler service. This is the ultimate Ella experience for discerning travellers.",
    image: "/images/premium-valley-suite.jpg",
    images: ["/images/premium-valley-suite.jpg", "/images/deluxe-mountain-view-room.jpg"],
    size: "80 sqm",
    bedType: "King",
    maxGuests: 3,
    count: 4,
    priceFrom: 280,
    amenities: ["Private plunge pool", "Mountain panorama", "Butler service", "Separate living & dining", "Soaking tub & rain shower", "Nespresso machine", "Premium mini bar", "Bang & Olufsen speakers", "Free Wi-Fi", "Air conditioning", "In-room safe", "55\" Smart TV", "Bathrobes & slippers", "Complimentary champagne"],
    featured: true,
  },
  {
    id: "family-highland-room",
    name: "Family Highland Room",
    slug: "family-highland-room",
    shortDesc: "Spacious family-friendly room with garden access and connecting options.",
    description: "Designed with families in mind, the Family Highland Room offers 45 square metres of comfortable living space with a king bed and a daybed that converts to a single, or connecting room options for larger families. Step out onto a private garden terrace where children can play safely while you enjoy views of the surrounding highlands. The room includes a child-friendly amenity kit, a mini-fridge, and easy access to the kids' activity area and swimming pool.",
    image: "/images/deluxe-mountain-view-room.jpg",
    images: ["/images/deluxe-mountain-view-room.jpg"],
    size: "45 sqm",
    bedType: "King + Daybed",
    maxGuests: 4,
    count: 5,
    priceFrom: 200,
    amenities: ["Garden terrace", "Connecting rooms available", "Child-friendly amenity kit", "Mini fridge", "Free Wi-Fi", "Air conditioning", "In-room safe", "Flat-screen TV", "Rain shower", "Bathrobes & slippers"],
    featured: false,
  },
  {
    id: "honeymoon-retreat",
    name: "Honeymoon Retreat",
    slug: "honeymoon-retreat",
    shortDesc: "An intimate escape designed for romance, with a private hot tub and sunset views.",
    description: "The Honeymoon Retreat is a sanctuary of romance, designed exclusively for couples. Tucked away in the quietest wing of the resort, this 50-square-metre room features a four-poster king bed draped in sheer fabric, a private outdoor hot tub with sunset mountain views, and a spa-inspired bathroom with dual vanities and a couples' rain shower. Complimentary champagne, rose petals, and a personalised turndown service set the mood for an unforgettable honeymoon in Ella's enchanting hill country.",
    image: "/images/premium-valley-suite.jpg",
    images: ["/images/premium-valley-suite.jpg"],
    size: "50 sqm",
    bedType: "King Four-Poster",
    maxGuests: 2,
    count: 4,
    priceFrom: 250,
    amenities: ["Private hot tub", "Sunset views", "Four-poster king bed", "Couples' rain shower", "Dual vanities", "Complimentary champagne", "Rose petal turndown", "Free Wi-Fi", "Nespresso machine", "Air conditioning", "Bluetooth speaker", "Bathrobes & slippers"],
    featured: true,
  },
  {
    id: "classic-comfort-room",
    name: "Classic Comfort Room",
    slug: "classic-comfort-room",
    shortDesc: "Stylish comfort at an accessible price — perfect for the mindful traveller.",
    description: "The Classic Comfort Room proves that great design need not come at a premium. At 28 square metres, this thoughtfully appointed room features a queen bed with premium mattress and fine linens, a modern en-suite bathroom with walk-in shower, a work desk, and garden views. Clean lines, natural materials, and soft lighting create a calming atmosphere. Ideal for solo travellers, couples on a budget, or business guests who value style and comfort without excess.",
    image: "/images/deluxe-mountain-view-room.jpg",
    images: ["/images/deluxe-mountain-view-room.jpg"],
    size: "28 sqm",
    bedType: "Queen",
    maxGuests: 2,
    count: 3,
    priceFrom: 90,
    amenities: ["Garden view", "Walk-in shower", "Work desk", "Free Wi-Fi", "Air conditioning", "In-room safe", "Tea/coffee maker", "Flat-screen TV", "Bathrobes"],
    featured: false,
  },
];

// ─── Amenities ─────────────────────────────────────────────
export const amenities = [
  {
    id: "infinity-pool",
    name: "Infinity Pool",
    icon: "🏊",
    description: "Our signature infinity pool sits at the edge of the mountain, offering uninterrupted views of Ella's valley and tea plantations. Open daily from 7 AM to 8 PM, the heated pool features a shallow children's section and poolside service for refreshments and light bites.",
    image: "/images/hero-resort-ella-sri-lanka.jpg",
  },
  {
    id: "spa-wellness",
    name: "Spa & Wellness",
    icon: "💆",
    description: "Surrender to tranquillity at our full-service spa, where ancient Ayurvedic traditions meet modern wellness techniques. Choose from hot stone massages, herbal body wraps, aromatherapy sessions, and bespoke facial treatments. Each therapy room overlooks the forest canopy.",
    image: "/images/spa-wellness-treatment.jpg",
  },
  {
    id: "restaurant",
    name: "The Terrace Restaurant",
    icon: "🍽️",
    description: "Fine dining meets Sri Lankan soul at The Terrace, our open-air restaurant perched above the valley. Chef Kamal curates seasonal menus featuring local organic produce, fresh seafood from the south coast, and international favourites — all paired with an extensive wine and cocktail list.",
    image: "/images/restaurant-dining-ella.jpg",
  },
  {
    id: "fitness-centre",
    name: "Fitness Centre",
    icon: "💪",
    description: "Stay active in our state-of-the-art fitness centre, equipped with Technogym cardio machines, free weights, yoga mats, and a dedicated stretching area. Personal training sessions and morning yoga classes overlooking the mountains are available on request.",
    image: "/images/hero-resort-ella-sri-lanka.jpg",
  },
  {
    id: "airport-transfer",
    name: "Airport Transfer",
    icon: "✈️",
    description: "Arrive in comfort with our private airport transfer service. We offer luxury sedan and SUV transfers from Bandaranaike International Airport (BIA), Mattala Rajapaksa Airport, and Colombo city hotels. Pre-book to enjoy a seamless, stress-free journey to Ella.",
    image: "/images/hero-resort-ella-sri-lanka.jpg",
  },
  {
    id: "tea-experience",
    name: "Tea Plantation Tours",
    icon: "🍵",
    description: "Discover the magic of Ceylon tea on a guided tour of nearby plantations. Walk through emerald fields, learn the art of tea picking, and taste freshly brewed single-estate teas. A quintessential Ella experience, exclusive to our guests.",
    image: "/images/hero-resort-ella-sri-lanka.jpg",
  },
];

// ─── Reviews ───────────────────────────────────────────────
export const reviews = [
  {
    id: 1,
    name: "Sarah & James Mitchell",
    country: "United Kingdom",
    rating: 5,
    date: "2026-09-15",
    title: "The most magical stay of our honeymoon",
    text: "We stayed in the Honeymoon Retreat for five nights and it was absolutely perfect. The private hot tub overlooking the mountains at sunset is something we'll never forget. The staff anticipated every need — from arranging a surprise candlelit dinner to recommending the best hiking trails. Breakfast on the terrace was heavenly. We're already planning our return trip.",
    room: "Honeymoon Retreat",
    tripType: "Honeymoon",
  },
  {
    id: 2,
    name: "Tomoko Nakamura",
    country: "Japan",
    rating: 5,
    date: "2026-08-22",
    title: "Perfection in the mountains",
    text: "Everything about The Grand Pavilion exceeded expectations. The infinity pool overlooking the tea plantations is spectacular. My Premium Valley Suite was spacious, beautifully designed, and the freestanding bathtub was a dream. The spa treatments using local herbs were the best I've experienced in Asia. The Nine Arches Bridge trip the hotel organised was a highlight of my Sri Lanka visit.",
    room: "Premium Valley Suite",
    tripType: "Solo travel",
  },
  {
    id: 3,
    name: "Michael & Lisa Andersen",
    country: "Denmark",
    rating: 5,
    date: "2026-07-10",
    title: "Best family vacation ever",
    text: "We travelled with our two kids (ages 6 and 9) and The Grand Pavilion made it effortless. The Family Highland Room had everything we needed, and the children loved the pool and the garden. The staff organised a tea plantation tour that was fun even for the little ones. The restaurant catered perfectly to our children's dietary needs. Highly recommend for families.",
    room: "Family Highland Room",
    tripType: "Family",
  },
  {
    id: 4,
    name: "Rajesh Gupta",
    country: "India",
    rating: 4,
    date: "2026-06-28",
    title: "Stunning views, excellent service",
    text: "The location is unbeatable — waking up to mountain views every morning was a privilege. The Deluxe Mountain View room was comfortable and well-appointed. The restaurant served excellent Sri Lankan cuisine with a modern twist. My only minor note: the Wi-Fi in the room could be a bit stronger for business calls, but it worked fine for general use. The team was warm and professional throughout.",
    room: "Deluxe Mountain View",
    tripType: "Business",
  },
  {
    id: 5,
    name: "Elena Rossi",
    country: "Italy",
    rating: 5,
    date: "2026-08-05",
    title: "A hidden gem in Sri Lanka's hills",
    text: "I've stayed at luxury resorts across Southeast Asia, and The Grand Pavilion stands among the very best. The architecture blends seamlessly with the landscape. The Grand Pavilion Suite with its private plunge pool was extraordinary. The staff organised a sunrise hike to Little Adam's Peak which was unforgettable. The attention to detail — from the welcome drink to the handwritten farewell card — shows a level of care that's rare today.",
    room: "Grand Pavilion Suite",
    tripType: "Leisure",
  },
  {
    id: 6,
    name: "David & Catherine Thompson",
    country: "Australia",
    rating: 5,
    date: "2026-09-02",
    title: "Worth every penny",
    text: "We booked the Classic Comfort Room expecting a basic stay but were blown away. The room was stylishly designed with quality furnishings, and the garden view was lovely. The value for money is exceptional when you consider the quality of the food, the pool, and the location. We upgraded to the Premium Valley Suite for our last two nights and it was incredible. Would recommend to anyone visiting Ella.",
    room: "Classic Comfort Room",
    tripType: "Couple",
  },
];

export const aggregateRating = {
  ratingValue: 4.8,
  reviewCount: 247,
  bestRating: 5,
  worstRating: 1,
};

// ─── Offers ────────────────────────────────────────────────
export const offers = [
  {
    id: "honeymoon-package",
    slug: "honeymoon-package",
    name: "Honeymoon Bliss Package",
    shortDesc: "Five nights of romance in the Honeymoon Retreat with spa, dining, and surprises.",
    description: "Celebrate your love story amidst the misty mountains of Ella. The Honeymoon Bliss Package includes five nights in our exclusive Honeymoon Retreat with private hot tub, daily breakfast for two on the terrace, a 90-minute couples' spa treatment, a candlelit dinner with a curated tasting menu and champagne, a sunrise hike to Little Adam's Peak with a private guide, rose petal turndown every evening, and a farewell gift hamper of Ceylon tea and local artisan chocolates. Let us create memories that last a lifetime.",
    price: 1150,
    originalPrice: 1450,
    discount: "20% OFF",
    duration: "5 nights",
    includes: [
      "5 nights in Honeymoon Retreat",
      "Daily breakfast for two",
      "90-min couples' spa treatment",
      "Candlelit dinner with champagne",
      "Sunrise hike with private guide",
      "Rose petal turndown nightly",
      "Farewell gift hamper",
      "Airport transfer (one way)",
    ],
    image: "/images/premium-valley-suite.jpg",
    validUntil: "2027-03-31",
    featured: true,
  },
  {
    id: "family-adventure",
    slug: "family-adventure",
    name: "Family Adventure Package",
    shortDesc: "Four nights of highland fun for the whole family with tours and activities.",
    description: "Create unforgettable family memories in Sri Lanka's stunning hill country. This package includes four nights in our Family Highland Room (connecting rooms available), daily breakfast and one family dinner, a guided tea plantation tour, a visit to the Nine Arches Bridge by private tuk-tuk, a kids' activity kit on arrival, complimentary use of the pool and fitness centre, and a picnic lunch prepared by our chef for a family hike. The Grand Pavilion is where adventure meets comfort for families of all ages.",
    price: 780,
    originalPrice: 960,
    discount: "18% OFF",
    duration: "4 nights",
    includes: [
      "4 nights in Family Highland Room",
      "Daily breakfast for the family",
      "One family dinner",
      "Tea plantation tour",
      "Nine Arches Bridge tuk-tuk trip",
      "Kids' activity kit",
      "Picnic lunch for family hike",
      "Pool & fitness access",
    ],
    image: "/images/deluxe-mountain-view-room.jpg",
    validUntil: "2027-06-30",
    featured: true,
  },
  {
    id: "long-stay-retreat",
    slug: "long-stay-retreat",
    name: "Long Stay Retreat",
    shortDesc: "Stay seven nights or more and enjoy 25% off plus exclusive wellness perks.",
    description: "Escape the everyday and immerse yourself in the tranquillity of Ella's hill country with our Long Stay Retreat. Book seven nights or more in any room category and enjoy 25% off the standard rate, plus daily breakfast, two spa treatments per stay, a complimentary room upgrade (subject to availability), weekly laundry service, and a private cooking class with our executive chef. Whether you're a remote worker, a long-term traveller, or simply in need of an extended break, this package offers exceptional value and unmatched serenity.",
    price: null,
    originalPrice: null,
    discount: "25% OFF",
    duration: "7+ nights",
    includes: [
      "25% off any room for 7+ nights",
      "Daily breakfast",
      "Two spa treatments per stay",
      "Complimentary room upgrade (subject to availability)",
      "Weekly laundry service",
      "Private cooking class",
      "Late checkout",
      "Welcome drink & fruit basket",
    ],
    image: "/images/hero-resort-ella-sri-lanka.jpg",
    validUntil: "2027-12-31",
    featured: true,
  },
  {
    id: "seasonal-monsoon",
    slug: "seasonal-monsoon",
    name: "Monsoon Magic Deal",
    shortDesc: "Experience the dramatic beauty of Ella in the rainy season at special rates.",
    description: "There's a special magic to Ella when the monsoon clouds roll in — the mountains shimmer, waterfalls thunder, and the greenery reaches peak intensity. Our Monsoon Magic Deal lets you experience this dramatic beauty at up to 30% off standard rates. All room categories qualify, with complimentary hot chocolate on arrival, a rain-themed spa package, and indoor activities including a Ceylon tea tasting workshop. This is Ella at its most raw and beautiful, and we've priced it so everyone can experience it.",
    price: null,
    originalPrice: null,
    discount: "30% OFF",
    duration: "Min 2 nights",
    includes: [
      "Up to 30% off all room types",
      "Hot chocolate on arrival",
      "Rain-themed spa package",
      "Ceylon tea tasting workshop",
      "Daily breakfast",
      "Indoor board games & library",
      "Complimentary umbrella kit",
    ],
    image: "/images/hero-resort-ella-sri-lanka.jpg",
    validUntil: "2027-02-28",
    featured: false,
  },
];

// ─── FAQ ───────────────────────────────────────────────────
export const faqItems = [
  {
    question: "What are the check-in and check-out times?",
    answer: "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in and late check-out are available upon request and subject to availability. Contact us in advance to arrange.",
  },
  {
    question: "What is the cancellation policy?",
    answer: "Free cancellation up to 48 hours before check-in. Cancellations within 48 hours will incur a charge equivalent to the first night's stay. No-shows are charged the full booking amount. Special package rates may have different cancellation terms — please check at the time of booking.",
  },
  {
    question: "Are pets allowed at The Grand Pavilion?",
    answer: "We love animals, but unfortunately we are unable to accommodate pets at this time due to the resort's location within a natural habitat area. Service animals are welcome with prior arrangement.",
  },
  {
    question: "Is the resort child-friendly?",
    answer: "Absolutely! We welcome families with children of all ages. Our Family Highland Rooms are designed for families, and we offer a children's pool section, kids' activity kits, highchairs and cots (on request), and a children's menu at the restaurant. Babysitting can be arranged with 24 hours' notice.",
  },
  {
    question: "Is there parking available?",
    answer: "Yes, we offer complimentary on-site parking for all guests. The car park is monitored 24/7. Valet parking is also available upon request.",
  },
  {
    question: "Is the resort accessible for guests with disabilities?",
    answer: "We are committed to accessibility. We have wheelchair-accessible rooms on the ground floor, ramp access throughout the main areas, an accessible pool entry, and accessible restrooms. Please inform us of specific needs when booking so we can ensure a comfortable stay.",
  },
  {
    question: "How do I get to The Grand Pavilion from the airport?",
    answer: "The Grand Pavilion is approximately 220 km from Bandaranaike International Airport (BIA). We offer private airport transfers (approx. 5-6 hours by road) which can be pre-booked. Alternatively, you can take the scenic train from Colombo to Ella station (approximately 6.5 hours), which is one of the most beautiful train journeys in the world. We provide complimentary transfers from Ella railway station.",
  },
  {
    question: "Do you offer airport transfers?",
    answer: "Yes, we offer private transfers from Bandaranaike International Airport (BIA), Mattala Rajapaksa International Airport, Colombo city hotels, and other locations across Sri Lanka. Pre-booking is required. Contact us for pricing.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, Mastercard, American Express, and bank transfers. Payment is accepted in USD, LKR, and EUR. All rates shown are in US Dollars unless otherwise stated.",
  },
  {
    question: "Is Wi-Fi available?",
    answer: "Yes, complimentary high-speed Wi-Fi is available throughout the resort, including all rooms, the restaurant, pool area, and lobby. For the best connection for video calls, the business lounge offers dedicated high-speed internet.",
  },
];

// ─── Blog Posts ────────────────────────────────────────────
export const blogPosts = [
  {
    id: "best-things-to-do-in-ella",
    slug: "best-things-to-do-in-ella",
    title: "12 Best Things to Do in Ella, Sri Lanka (2026 Guide)",
    excerpt: "From the iconic Nine Arches Bridge to hidden waterfalls and tea plantations, discover the top attractions and activities in Ella, Sri Lanka's most enchanting hill country town.",
    content: `Ella is a small town with a huge reputation. Nestled in the central highlands of Sri Lanka at an elevation of over 1,000 metres, this former backpacker secret has blossomed into one of the country's most sought-after destinations — and for good reason. Surrounded by emerald tea plantations, dramatic mountain peaks, and a web of hiking trails, Ella offers a perfect blend of adventure, nature, and relaxation.

Whether you're staying at The Grand Pavilion or just passing through, here are the 12 best things to do in Ella.

**1. Walk Across the Nine Arches Bridge**
The Nine Arches Bridge (also known as the Bridge in the Sky) is Ella's most iconic landmark. Built during the British colonial era without steel or concrete, this viaduct is an architectural marvel set against a lush green backdrop. Visit early in the morning or at the scheduled train times (around 9:00 AM and 3:00 PM) for the most dramatic photos. The bridge is a 20-minute walk from the town centre, and The Grand Pavilion can arrange a private tuk-tuk for guests.

**2. Hike Little Adam's Peak**
Despite its grand name, Little Adam's Peak is a relatively easy hike that rewards with 360-degree panoramic views of the Ella Gap, surrounding mountains, and tea estates. The trail starts near the 98 Acres Resort and takes about 45 minutes each way. Sunrise hikes are particularly spectacular — ask our concierge to arrange a guided dawn trek.

**3. Visit Ravana Falls**
One of the widest waterfalls in Sri Lanka, Ravana Falls cascades 25 metres down a rocky cliff just 6 km from Ella town. The waterfall is linked to the ancient Ramayana legend, adding a mythical dimension to its natural beauty. Visit during the monsoon season for the most dramatic flow.

**4. Explore Tea Plantations**
Ella is surrounded by some of Sri Lanka's finest tea estates. Take a guided tour of a working plantation to learn about the plucking, withering, rolling, and drying process of Ceylon tea. Many estates offer tastings of their premium single-estate teas. The Grand Pavilion partners with local plantations for exclusive guest tours.

**5. Take the Ella to Kandy Train**
Often described as one of the most scenic train journeys in the world, the route from Ella to Kandy passes through tunnels, across bridges, and through tea country at a leisurely pace. Even a short segment — like Ella to Nanu Oya — is unforgettable. Book second class for the best window seats.

**6. Swim at Ravana Ella Cave**
Legend has it that King Ravana hid Princess Sita in this cave during the Ramayana epic. Today, you can explore the cave's chambers and cool off in the natural pool at its base. It's a moderate 30-minute hike from the road.

**7. Dine at The Grand Pavilion's Terrace Restaurant**
We couldn't leave out our own Terrace Restaurant, where Chef Kamal's seasonal menus showcase the best of Sri Lankan and international cuisine. Overlooking the valley, it's consistently rated as one of the best dining experiences in Ella.

**8. Visit Demodara Loop**
Near the Nine Arches Bridge, the Demodara Loop is a unique engineering feat where the railway line loops back under itself through a tunnel. It's a fascinating sight for train enthusiasts and photographers alike.

**9. Yoga and Wellness**
Ella's peaceful environment makes it ideal for yoga and wellness retreats. The Grand Pavilion offers morning yoga sessions overlooking the mountains, plus a full-service spa with Ayurvedic treatments.

**10. Visit the Ella Spice Garden**
Learn about the spices that make Sri Lankan cuisine so distinctive. Guided tours explain the cultivation and uses of cinnamon, cardamom, pepper, cloves, and more, with the chance to buy fresh spices directly.

**11. Zipline Across the Valley**
For adrenaline seekers, the Flying Ravana zipline offers the longest zipline in Sri Lanka, stretching over 200 metres above the valley floor. It's thrilling, safe, and the views are incredible.

**12. Stargaze from the Mountains**
With minimal light pollution, Ella offers extraordinary stargazing. On clear nights, you can see the Milky Way with the naked eye. The Grand Pavilion's rooftop terrace is perfect for this — we can arrange blankets, hot drinks, and even a telescope.

*Planning your Ella trip? [Book your stay at The Grand Pavilion](/rooms) and let our concierge team plan your perfect itinerary.*`,
    image: "/images/hero-resort-ella-sri-lanka.jpg",
    date: "2026-09-20",
    author: "The Grand Pavilion Team",
    category: "Travel Guide",
    tags: ["Ella", "Sri Lanka", "things to do", "travel guide", "hill country"],
  },
  {
    id: "how-to-get-from-airport-to-ella",
    slug: "how-to-get-from-airport-to-ella",
    title: "How to Get from the Airport to Ella, Sri Lanka",
    excerpt: "A complete guide to travelling from Bandaranaike International Airport to Ella — by private transfer, train, bus, and domestic flight. Plus tips for the most scenic route.",
    content: `Getting from Bandaranaike International Airport (BIA) to Ella is one of the most common questions we receive from international guests. The journey is approximately 220 km and, while it takes some time, the scenic beauty of Sri Lanka's interior makes it part of the adventure. Here's every option, with our honest recommendations.

**Option 1: Private Airport Transfer (Recommended)**
**Duration:** 5-6 hours | **Cost:** From $120 one-way

The most comfortable and convenient option. The Grand Pavilion offers private sedan and SUV transfers directly from the airport to our resort. Your driver will be waiting in the arrivals hall, and you can stop along the way for photos, meals, or sightseeing. We can even arrange a route via Kandy or Nuwara Eliya for a small supplement.

**Why we recommend it:** After a long flight, a private transfer lets you relax and enjoy the changing scenery — from coastal lowlands through rubber plantations to the dramatic highlands. Pre-book through our reservations team.

**Option 2: Train (The Scenic Route)**
**Duration:** 9-10 hours total | **Cost:** From $5-15 for train ticket

For the adventurous traveller, the train journey from Colombo to Ella is legendary. From the airport, take a taxi to Colombo Fort railway station (about 40 minutes), then board the train to Ella. The journey takes approximately 6.5 hours and passes through some of the most beautiful scenery in Asia — tunnels, tea plantations, misty mountains, and the famous Nine Arches Bridge just before Ella station.

**Tips:**
- Book second class (reserved seats) in advance at www.railway.gov.lk
- The 08:30 AM departure from Colombo Fort is the most popular
- Sit on the right side for the best views
- The Grand Pavilion provides complimentary transfers from Ella railway station

**Option 3: Bus**
**Duration:** 7-8 hours | **Cost:** From $5-10

Several bus services connect Colombo to Ella via the Southern Expressway and Badulla road. Air-conditioned intercity buses depart from Colombo's Bastian Mawatha bus station. While affordable, this option can be uncomfortable on winding mountain roads.

**Option 4: Domestic Flight + Transfer**
**Duration:** 3-4 hours total | **Cost:** From $150-250

The fastest option. Take a domestic flight from BIA to Mattala Rajapaksa International Airport (HRI), then a 2.5-hour private transfer to Ella. Flights are operated by several domestic carriers. The Grand Pavilion can arrange Mattala transfers.

**Our Recommendation**
For first-time visitors, we recommend combining the private transfer on arrival (when you're tired from travelling) with the scenic train journey on departure (when you're refreshed and can enjoy the views). This gives you the best of both worlds.

*Need help planning your journey? [Contact us](/contact) or WhatsApp us at +94 77 222 8800 and our team will arrange everything for you.*`,
    image: "/images/hero-resort-ella-sri-lanka.jpg",
    date: "2026-09-05",
    author: "The Grand Pavilion Team",
    category: "Getting Here",
    tags: ["airport transfer", "Ella", "transport", "travel tips", "Sri Lanka"],
  },
  {
    id: "ella-travel-guide",
    slug: "ella-travel-guide",
    title: "Ella Travel Guide: Everything You Need to Know",
    excerpt: "Your complete guide to visiting Ella, Sri Lanka — best time to visit, where to stay, what to eat, how to get around, and insider tips from the team at The Grand Pavilion.",
    content: `Ella is one of Sri Lanka's most captivating destinations, a tiny hill country town surrounded by emerald tea plantations, dramatic peaks, and some of the island's most spectacular natural beauty. Once a quiet stop on the Colombo-Badulla railway line, Ella has grown into a must-visit destination for travellers from around the world. This comprehensive guide covers everything you need to know.

**Best Time to Visit Ella**
Ella enjoys a relatively mild climate year-round thanks to its elevation of 1,041 metres. The best months to visit are:
- **January to March:** Dry season, clear skies, ideal for hiking
- **April to May:** Shoulder season, occasional rain, fewer crowds
- **June to September:** Southwest monsoon, but Ella is relatively sheltered
- **October to November:** Inter-monsoon, some rain but lush greenery
- **December:** Peak season, festive atmosphere, book early

Average temperatures range from 16°C at night to 28°C during the day. A light jacket is recommended for evenings.

**Where to Stay**
Ella offers accommodation for every budget, from backpacker hostels to luxury resorts. For those seeking modern luxury with panoramic mountain views, The Grand Pavilion is the premier choice. Our 30-room resort combines contemporary design with Sri Lankan hospitality, featuring an infinity pool, full-service spa, fine dining restaurant, and rooms starting from $90 per night.

**What to Eat**
Sri Lankan cuisine in Ella is a feast for the senses:
- **Rice and curry:** The national dish — typically rice served with up to 10 small curry dishes
- **Hoppers (appa):** Bowl-shaped crispy pancakes, often with an egg in the centre
- **Kottu roti:** Chopped roti stir-fried with vegetables, egg, and spices
- **Fresh tropical fruits:** Papaya, mango, king coconut, and rambutan
- **Ceylon tea:** Best enjoyed at its source, in Ella's tea houses and plantations

At The Grand Pavilion's Terrace Restaurant, Chef Kamal elevates traditional Sri Lankan flavours with modern techniques, using locally sourced organic ingredients.

**Getting Around Ella**
Ella town is compact and walkable, but for attractions like the Nine Arches Bridge, Ravana Falls, and tea plantations, you'll want transport:
- **Tuk-tuks:** The most popular and affordable option. Negotiate a price before departing.
- **Hotel transfers:** The Grand Pavilion arranges private transfers to all local attractions.
- **Rented scooter:** Available in town for experienced riders (international driving permit required).
- **Walking/hiking:** Many attractions are accessible on foot via well-marked trails.

**Money & Practical Tips**
- **Currency:** Sri Lankan Rupee (LKR). Most hotels and upscale restaurants accept USD and credit cards.
- **ATMs:** Available in Ella town centre (Bank of Ceylon, Commercial Bank).
- **Language:** Sinhala and Tamil are official languages; English is widely spoken in tourist areas.
- **Safety:** Ella is generally very safe, but take normal precautions. Leeches can be an issue on rainy hikes — wear long socks and use repellent.
- **Electricity:** 230V with UK-style three-pin plugs. Adaptors available at reception.

**Insider Tips from Our Team**
1. Visit the Nine Arches Bridge at dawn (around 6:00 AM) to avoid crowds entirely
2. The best tea factory tour is at Uva Halpewatte — ask us to arrange it
3. Book your Ella-Kandy train ticket at least two weeks in advance
4. Carry a light rain jacket even in the dry season — mountain weather is unpredictable
5. Don't miss the stargazing — Ella has some of the clearest night skies in Sri Lanka

*Ready to explore Ella? [View our special offers](/offers) and [book your stay](/rooms) at The Grand Pavilion for the ultimate hill country experience.*`,
    image: "/images/hero-resort-ella-sri-lanka.jpg",
    date: "2026-08-15",
    author: "The Grand Pavilion Team",
    category: "Travel Guide",
    tags: ["Ella", "travel guide", "Sri Lanka", "hill country", "things to do"],
  },
];

// ─── Events ────────────────────────────────────────────────
export const eventSpaces = [
  {
    name: "The Mountain Hall",
    capacity: 120,
    style: "Banquet / Theatre / Cocktail",
    features: ["Floor-to-ceiling mountain views", "Built-in AV system", "Private entrance", "Adjacent terrace", "Customisable lighting"],
    ideal: "Weddings, galas, corporate conferences",
  },
  {
    name: "The Valley Pavilion",
    capacity: 60,
    style: "Open-air / Garden",
    features: ["Outdoor ceremony space", "Mountain backdrop", "Festoon lighting", "Paved terrace", "Rain backup marquee"],
    ideal: "Garden weddings, cocktail receptions, intimate celebrations",
  },
  {
    name: "The Boardroom",
    capacity: 20,
    style: "Boardroom",
    features: ["High-speed internet", "75\" Smart display", "Video conferencing", "Refreshment service", "Natural light"],
    ideal: "Board meetings, workshops, strategy sessions",
  },
];

// ─── Nearby Attractions ────────────────────────────────────
export const nearbyAttractions = [
  { name: "Nine Arches Bridge", distance: "2.5 km", time: "8 min drive", type: "Landmark" },
  { name: "Little Adam's Peak", distance: "3 km", time: "10 min drive", type: "Hiking" },
  { name: "Ravana Falls", distance: "6 km", time: "15 min drive", type: "Waterfall" },
  { name: "Ella Railway Station", distance: "1.5 km", time: "5 min drive", type: "Transport" },
  { name: "Demodara Loop", distance: "4 km", time: "12 min drive", type: "Landmark" },
  { name: "Ravana Ella Cave", distance: "7 km", time: "18 min drive", type: "Historical" },
  { name: "Ella Spice Garden", distance: "2 km", time: "6 min drive", type: "Experience" },
  { name: "Bandaranaike Airport (BIA)", distance: "220 km", time: "5.5 hr drive", type: "Airport" },
  { name: "Kandy", distance: "140 km", time: "4 hr drive / 4 hr train", type: "City" },
  { name: "Colombo", distance: "200 km", time: "5 hr drive / 6.5 hr train", type: "City" },
];

// ─── Dining Menus ──────────────────────────────────────────
export const diningMenus = {
  breakfast: {
    name: "Breakfast",
    hours: "7:00 AM – 10:30 AM",
    items: [
      { name: "Full Sri Lankan Breakfast", desc: "String hoppers, dhal curry, coconut sambol, pol roti, fish curry", price: 18 },
      { name: "English Breakfast", desc: "Eggs any style, bacon, sausages, grilled tomato, toast, juice", price: 16 },
      { name: "Tropical Fruit Platter", desc: "Seasonal papaya, mango, pineapple, passion fruit, king coconut", price: 12 },
      { name: "Eggs Benedict", desc: "Poached eggs, hollandaise, smoked salmon, toasted muffin", price: 15 },
      { name: "Hoppers with Egg", desc: "Traditional bowl-shaped crispy pancake with a centred egg", price: 10 },
    ],
  },
  lunch: {
    name: "Lunch",
    hours: "12:00 PM – 3:00 PM",
    items: [
      { name: "Rice & Curry Platter", desc: "Basmati rice, chicken curry, three vegetable curries, papadam, chutney", price: 22 },
      { name: "Grilled Catch of the Day", desc: "Fresh fish, roasted vegetables, herb butter, steamed rice", price: 28 },
      { name: "Garden Buddha Bowl", desc: "Quinoa, roasted sweet potato, avocado, hummus, mixed greens (V)", price: 18 },
      { name: "Club Sandwich", desc: "Triple-layer with grilled chicken, bacon, egg, fries", price: 16 },
      { name: "Kottu Roti", desc: "Chopped roti stir-fried with vegetables, egg, and spices", price: 14 },
    ],
  },
  dinner: {
    name: "Dinner",
    hours: "6:30 PM – 10:00 PM",
    items: [
      { name: "Chef's Tasting Menu", desc: "Five-course seasonal menu with wine pairing option", price: 65 },
      { name: "Pan-Seared Lamb Rack", desc: "Herb-crusted lamb, roasted root vegetables, red wine jus", price: 38 },
      { name: "Prawn Curry", desc: "Southern-style coconut prawn curry, jasmine rice, papadam", price: 32 },
      { name: "Grilled Ribeye Steak", desc: "300g Australian ribeye, truffle mash, seasonal greens", price: 42 },
      { name: "Wild Mushroom Risotto", desc: "Arborio rice, forest mushrooms, parmesan, truffle oil (V)", price: 26 },
      { name: "Ella Valley Salad", desc: "Local greens, goat cheese, candied walnuts, honey dressing (V)", price: 18 },
    ],
  },
};
