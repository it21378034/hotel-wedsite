'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hotelInfo } from '../data/hotel';
import styles from './events.module.css';

export default function EventsPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className={styles.eventsPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Events & Weddings</span>
          </div>
          <span className="badge badge-accent">Unforgettable Celebrations</span>
          <h1 className={styles.pageTitle}>Mountain Weddings & Exclusive Events</h1>
          <p className={styles.pageSubtitle}>
            Exchange vows above the clouds or host an inspiring executive retreat amidst the serenity of Sri Lanka's tea highlands.
          </p>
        </div>
      </section>

      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.venueCard}>
              <Image
                src="/images/hero-resort-ella-sri-lanka.jpg"
                alt="Mountain wedding venue deck at The Grand Pavilion"
                width={550}
                height={350}
                className={styles.venueImg}
              />
              <div className={styles.venueInfo}>
                <span className="badge badge-secondary">Outdoor Splendor</span>
                <h2>The Summit Panoramic Deck</h2>
                <p>Accommodating up to 120 guests with 360-degree vistas of Ella Gap, ambient lantern lighting, and custom flower pavilion setup.</p>
              </div>
            </div>

            <div className={styles.venueCard}>
              <Image
                src="/images/restaurant-dining-ella.jpg"
                alt="Indoor dining and celebration venue at The Grand Pavilion"
                width={550}
                height={350}
                className={styles.venueImg}
              />
              <div className={styles.venueInfo}>
                <span className="badge badge-primary">Banquet & Dining</span>
                <h2>The Terrace Glasshouse & Lawn</h2>
                <p>Ideal for formal sit-down wedding banquets, cocktail receptions, and corporate galas with bespoke seasonal tasting menus.</p>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <h2>Inquire About Your Celebration</h2>
            <p>Our dedicated events planner will design every moment to perfection.</p>
            {submitted ? (
              <div className={styles.thankYou}>
                <h3>Thank You!</h3>
                <p>Your event inquiry has been sent to our planning team. We will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className={styles.eventForm}>
                <div className={styles.formRow}>
                  <input type="text" required placeholder="Full Name" className="input" />
                  <input type="email" required placeholder="Email Address" className="input" />
                </div>
                <div className={styles.formRow}>
                  <input type="tel" required placeholder="Phone / WhatsApp" className="input" />
                  <select className="select">
                    <option>Wedding Celebration</option>
                    <option>Corporate Retreat</option>
                    <option>Anniversary / Birthday</option>
                    <option>Private Photo/Film Shoot</option>
                  </select>
                </div>
                <div className={styles.formRow}>
                  <input type="date" required className="input" />
                  <select className="select">
                    <option>20 - 50 Guests</option>
                    <option>50 - 100 Guests</option>
                    <option>100+ Guests (Full Resort Buyout)</option>
                  </select>
                </div>
                <textarea rows={4} placeholder="Describe your celebration vision..." className="textarea" />
                <button type="submit" className="btn btn-accent btn-lg" style={{ marginTop: '1rem' }}>
                  Submit Event Inquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
