'use client';
import { useState } from 'react';
import Link from 'next/link';
import { hotelInfo } from '../data/hotel';
import styles from './Footer.module.css';

/**
 * Footer Component
 * - NAP consistency (Name, Address, Phone)
 * - Quick links, social links
 * - Newsletter signup
 * - Back to top button
 */
export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      // Track conversion event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'newsletter_signup', { method: 'footer' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={`container ${styles.footerInner}`}>
        {/* Column 1: About */}
        <div className={styles.col}>
          <div className={styles.footerLogo}>
            <span className={styles.logoIcon}>GP</span>
            <div>
              <h3 className={styles.logoName}>The Grand Pavilion</h3>
              <span className={styles.logoTagline}>Ella, Sri Lanka</span>
            </div>
          </div>
          <p className={styles.about}>
            Perched among the emerald hills of Ella, The Grand Pavilion offers a sanctuary
            of modern luxury, where panoramic mountain views meet world-class hospitality.
          </p>
          <div className={styles.social}>
            <a href={hotelInfo.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href={hotelInfo.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href={hotelInfo.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href={hotelInfo.social.tripadvisor} target="_blank" rel="noopener noreferrer" aria-label="TripAdvisor" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 004.04 10.43 5.976 5.976 0 004.075-1.6L12 19.705l1.922-2.09a5.976 5.976 0 004.075 1.6 5.997 5.997 0 004.04-10.43L24 6.648h-4.35a13.573 13.573 0 00-7.644-2.353zM6.003 17.213a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zm11.994 0a3.997 3.997 0 110-7.994 3.997 3.997 0 010 7.994zM6.003 11.219a2 2 0 100 4 2 2 0 000-4zm11.994 0a2 2 0 100 4 2 2 0 000-4z"/></svg>
            </a>
            <a href={hotelInfo.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={styles.socialLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/rooms">Rooms & Suites</Link></li>
            <li><Link href="/amenities">Amenities</Link></li>
            <li><Link href="/dining">Dining</Link></li>
            <li><Link href="/offers">Special Offers</Link></li>
            <li><Link href="/gallery">Photo Gallery</Link></li>
            <li><Link href="/events">Events & Weddings</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQ & Policies</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <address className={styles.address}>
            <p>
              <strong>{hotelInfo.name}</strong><br />
              {hotelInfo.address.street}<br />
              {hotelInfo.address.city}, {hotelInfo.address.region}<br />
              {hotelInfo.address.country} {hotelInfo.address.postalCode}
            </p>
            <p>
              <a href={`tel:${hotelInfo.phone}`} className={styles.contactLink} onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'phone_click', { page: 'footer' })}>
                📞 {hotelInfo.phone}
              </a>
            </p>
            <p>
              <a href={`https://wa.me/${hotelInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className={styles.contactLink} onClick={() => typeof window !== 'undefined' && window.gtag && window.gtag('event', 'whatsapp_click', { page: 'footer' })}>
                💬 WhatsApp
              </a>
            </p>
            <p>
              <a href={`mailto:${hotelInfo.email}`} className={styles.contactLink}>
                ✉️ {hotelInfo.email}
              </a>
            </p>
          </address>
        </div>

        {/* Column 4: Newsletter */}
        <div className={styles.col}>
          <h4 className={styles.colTitle}>Newsletter</h4>
          <p className={styles.newsletterText}>
            Subscribe for exclusive offers and travel inspiration from Ella.
          </p>
          {subscribed ? (
            <div className={styles.successMsg}>
              ✓ Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className={styles.newsletterInput}
                aria-label="Email address for newsletter"
              />
              <button type="submit" className={styles.newsletterBtn} aria-label="Subscribe to newsletter">
                →
              </button>
            </form>
          )}
          <div className={styles.trustBadges}>
            <span className={styles.trustBadge}>🔒 SSL Secured</span>
            <span className={styles.trustBadge}>💳 Secure Payment</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            © 2026 {hotelInfo.name}. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <Link href="/faq">Privacy Policy</Link>
            <Link href="/faq">Terms of Service</Link>
            <Link href="/faq">Cookie Policy</Link>
          </div>
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            ↑ Top
          </button>
        </div>
      </div>
    </footer>
  );
}
