'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './BookingBar.module.css';

/**
 * BookingBar Component
 * - Sticky booking bar on homepage
 * - Check-in/out dates, guests selector
 * - Best Rate Guarantee messaging
 * - Conversion tracking on "Check Availability"
 */
export default function BookingBar({ sticky = false }) {
  const router = useRouter();
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const [minCheckIn, setMinCheckIn] = useState('');

  useEffect(() => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinCheckIn(tomorrow.toISOString().split('T')[0]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Track conversion event
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'check_availability_click', {
        check_in: checkIn,
        check_out: checkOut,
        adults,
        children,
        rooms,
      });
    }

    const params = new URLSearchParams({
      checkIn: checkIn || minCheckIn,
      checkOut: checkOut || '',
      adults: adults.toString(),
      children: children.toString(),
      rooms: rooms.toString(),
    });

    router.push(`/booking?${params.toString()}`);
  };

  return (
    <div className={`${styles.wrapper} ${sticky ? styles.sticky : ''}`}>
      <form onSubmit={handleSubmit} className={styles.bar} id="booking-bar">
        <div className={styles.field}>
          <label htmlFor="booking-checkin" className={styles.label}>Check-in</label>
          <input
            type="date"
            id="booking-checkin"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            min={minCheckIn}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.field}>
          <label htmlFor="booking-checkout" className={styles.label}>Check-out</label>
          <input
            type="date"
            id="booking-checkout"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            min={checkIn || minCheckIn}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.divider}></div>

        <div className={styles.field}>
          <label htmlFor="booking-adults" className={styles.label}>Adults</label>
          <select
            id="booking-adults"
            value={adults}
            onChange={(e) => setAdults(parseInt(e.target.value))}
            className={styles.select}
          >
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>
            ))}
          </select>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.field}>
          <label htmlFor="booking-children" className={styles.label}>Children</label>
          <select
            id="booking-children"
            value={children}
            onChange={(e) => setChildren(parseInt(e.target.value))}
            className={styles.select}
          >
            {[0, 1, 2, 3, 4].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'Child' : 'Children'}</option>
            ))}
          </select>
        </div>

        <div className={styles.divider}></div>

        <div className={styles.field}>
          <label htmlFor="booking-rooms" className={styles.label}>Rooms</label>
          <select
            id="booking-rooms"
            value={rooms}
            onChange={(e) => setRooms(parseInt(e.target.value))}
            className={styles.select}
          >
            {[1, 2, 3, 4, 5].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'Room' : 'Rooms'}</option>
            ))}
          </select>
        </div>

        <button type="submit" className={`btn btn--primary ${styles.submitBtn}`} id="check-availability-btn">
          Check Availability
        </button>
      </form>

      <div className={styles.guarantee}>
        <span className={styles.guaranteeIcon}>✓</span>
        <span>Best Rate Guarantee — Book direct for exclusive perks</span>
      </div>
    </div>
  );
}
