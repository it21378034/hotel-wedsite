import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import Script from 'next/script';

/**
 * Root Layout for The Grand Pavilion
 * - Google Fonts via CSS import (in globals.css)
 * - GA4, GTM, Search Console placeholders
 * - JSON-LD Hotel schema
 * - Open Graph / Twitter Card defaults
 * - Canonical, hreflang, favicon, manifest
 */

const GA_ID = 'G-XXXXXXXXXX'; // Replace with real GA4 ID
const GTM_ID = 'GTM-XXXXXXX'; // Replace with real GTM ID

export const metadata = {
  metadataBase: new URL('https://www.thegrandpavilion.lk'),
  title: {
    default: 'The Grand Pavilion — Luxury Resort in Ella, Sri Lanka',
    template: '%s | The Grand Pavilion',
  },
  description: 'Discover The Grand Pavilion, a modern luxury resort in Ella Hill Country, Sri Lanka. Stunning mountain views, infinity pool, spa, fine dining & 30 beautifully designed rooms. Book direct for best rates.',
  keywords: ['resort in Ella Sri Lanka', 'luxury hotel Ella Hill Country', 'Ella resort with pool', 'hotel near Nine Arches Bridge', 'hill country resort Sri Lanka', 'The Grand Pavilion'],
  authors: [{ name: 'The Grand Pavilion' }],
  creator: 'The Grand Pavilion',
  publisher: 'The Grand Pavilion',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://www.thegrandpavilion.lk',
    languages: {
      'en': 'https://www.thegrandpavilion.lk',
      'si': 'https://www.thegrandpavilion.lk/si',
      'ta': 'https://www.thegrandpavilion.lk/ta',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thegrandpavilion.lk',
    siteName: 'The Grand Pavilion',
    title: 'The Grand Pavilion — Luxury Resort in Ella, Sri Lanka',
    description: 'A modern luxury resort nestled in the misty mountains of Ella, Sri Lanka. Infinity pool, spa, fine dining & panoramic mountain views.',
    images: [
      {
        url: '/images/hero-resort-ella-sri-lanka.jpg',
        width: 1200,
        height: 630,
        alt: 'The Grand Pavilion resort with infinity pool overlooking Ella mountains and tea plantations at sunset',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Grand Pavilion — Luxury Resort in Ella, Sri Lanka',
    description: 'A modern luxury resort in Ella Hill Country, Sri Lanka. Book direct for best rates.',
    images: ['/images/hero-resort-ella-sri-lanka.jpg'],
    creator: '@grandpavilionlk',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Replace with real Search Console code
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

// JSON-LD: Hotel / LodgingBusiness schema for homepage
const hotelJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Resort',
  name: 'The Grand Pavilion',
  alternateName: 'Grand Pavilion Ella',
  description: 'A modern luxury resort in Ella, Sri Lanka offering 30 beautifully designed rooms with panoramic mountain views, infinity pool, spa, and fine dining.',
  url: 'https://www.thegrandpavilion.lk',
  telephone: '+94 55 222 8800',
  email: 'reservations@thegrandpavilion.lk',
  image: [
    'https://www.thegrandpavilion.lk/images/hero-resort-ella-sri-lanka.jpg',
    'https://www.thegrandpavilion.lk/images/deluxe-mountain-view-room.jpg',
    'https://www.thegrandpavilion.lk/images/premium-valley-suite.jpg',
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '42 Passara Road',
    addressLocality: 'Ella',
    addressRegion: 'Uva Province',
    addressCountry: 'LK',
    postalCode: '90090',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 6.8667,
    longitude: 81.0466,
  },
  starRating: {
    '@type': 'Rating',
    ratingValue: '5',
  },
  numberOfRooms: 30,
  priceRange: '$90 - $280',
  checkinTime: '14:00',
  checkoutTime: '11:00',
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Infinity Pool', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Spa & Wellness Centre', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Restaurant', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Fitness Centre', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Free Wi-Fi', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Airport Transfer', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Room Service', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Parking', value: true },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.8',
    reviewCount: '247',
    bestRating: '5',
    worstRating: '1',
  },
  sameAs: [
    'https://facebook.com/thegrandpavilion',
    'https://instagram.com/thegrandpavilion',
    'https://twitter.com/grandpavilionlk',
    'https://tripadvisor.com/thegrandpavilion',
    'https://youtube.com/@thegrandpavilion',
  ],
  paymentAccepted: 'Cash, Credit Card, Debit Card',
  currenciesAccepted: 'USD, LKR, EUR',
  availableLanguage: ['English', 'Sinhala', 'Tamil'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />

        {/* Google Analytics 4 */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga4-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });`,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hotelJsonLd) }}
        />
      </head>
      <body>
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          ></iframe>
        </noscript>

        <Navigation />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
