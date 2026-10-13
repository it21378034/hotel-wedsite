'use client';
import { useState } from 'react';
import Link from 'next/link';
import { hotelInfo } from '../data/hotel';
import styles from './contact.module.css';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.contactPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Contact</span>
          </div>
          <span className="badge badge-accent">Get in Touch</span>
          <h1 className={styles.pageTitle}>We Are Here to Welcome You</h1>
          <p className={styles.pageSubtitle}>
            Have questions about room availability, airport pickups, private dining, or mountain weddings? Our 24-hour concierge team is at your service.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.contactGrid}>
            {/* Form */}
            <div className={styles.formCard}>
              <h2 className={styles.cardHeading}>Send Us a Message</h2>
              {submitted ? (
                <div className={styles.successBox}>
                  <h3>Thank you for reaching out!</h3>
                  <p>Your message has been sent to our concierge desk. We will respond promptly within a few hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Your Name *</label>
                      <input type="text" required placeholder="Elena Vance" className="input" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Email Address *</label>
                      <input type="email" required placeholder="elena@example.com" className="input" />
                    </div>
                  </div>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label>Phone / WhatsApp</label>
                      <input type="tel" placeholder="+94 77 123 4567" className="input" />
                    </div>
                    <div className={styles.formGroup}>
                      <label>Subject</label>
                      <select className="select">
                        <option>General Reservation Inquiry</option>
                        <option>Airport Chauffeur Transfer</option>
                        <option>Private Dining / High Tea</option>
                        <option>Weddings & Celebrations</option>
                        <option>Spa & Wellness Booking</option>
                      </select>
                    </div>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Your Message *</label>
                    <textarea rows={5} required placeholder="Tell us about your upcoming journey..." className="textarea" />
                  </div>
                  <button type="submit" className="btn btn-accent btn-lg">
                    Send Inquiry Message
                  </button>
                </form>
              )}
            </div>

            {/* Info Cards */}
            <aside className={styles.infoAside}>
              <div className={styles.infoCard}>
                <h3>Direct Inquiries</h3>
                <div className={styles.contactItem}>
                  <span className={styles.cIcon}>📞</span>
                  <div>
                    <strong>Phone Call</strong>
                    <a href={`tel:${hotelInfo.phone}`}>{hotelInfo.phone}</a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.cIcon}>💬</span>
                  <div>
                    <strong>Instant WhatsApp</strong>
                    <a
                      href={`https://wa.me/${hotelInfo.whatsapp.replace(/\+/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {hotelInfo.whatsapp} (24/7 Chat)
                    </a>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.cIcon}>✉️</span>
                  <div>
                    <strong>Email Desk</strong>
                    <a href={`mailto:${hotelInfo.email}`}>{hotelInfo.email}</a>
                  </div>
                </div>
              </div>

              <div className={styles.infoCard}>
                <h3>Resort Address</h3>
                <div className={styles.contactItem}>
                  <span className={styles.cIcon}>📍</span>
                  <div>
                    <strong>Physical Location</strong>
                    <p>{hotelInfo.name}<br />{hotelInfo.address.street}<br />{hotelInfo.address.city}, {hotelInfo.address.country}</p>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.cIcon}>⏰</span>
                  <div>
                    <strong>Check-in & Desk Hours</strong>
                    <p>Check-in: 2:00 PM • Check-out: 11:00 AM<br />Front Desk: 24 Hours Open</p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
