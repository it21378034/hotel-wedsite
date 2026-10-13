import Link from 'next/link';
import { reviews, aggregateRating } from '../data/hotel';
import styles from './reviews.module.css';

export const metadata = {
  title: 'Guest Reviews & Testimonials — The Grand Pavilion Ella',
  description: 'Read verified traveler reviews for The Grand Pavilion Ella. Rated 4.8/5 on TripAdvisor across 240+ international reviews.',
};

export default function ReviewsPage() {
  return (
    <div className={styles.reviewsPage}>
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Reviews</span>
          </div>
          <span className="badge badge-accent">Guest Feedback</span>
          <h1 className={styles.pageTitle}>Verified Guest Experiences</h1>
          <p className={styles.pageSubtitle}>
            Discover genuine impressions from couples, families, and solo travelers who have made The Grand Pavilion their highland home.
          </p>
        </div>
      </section>

      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.scoreBanner}>
            <div className={styles.scoreBig}>
              <strong>{aggregateRating.ratingValue}</strong>
              <span>out of 5.0</span>
              <div className={styles.stars}>★★★★★</div>
            </div>
            <div className={styles.scoreDetails}>
              <h3>Exceptional Rating Based on {aggregateRating.reviewCount} Reviews</h3>
              <div className={styles.ratingBars}>
                <div className={styles.barItem}>
                  <span>Cleanliness & Comfort</span>
                  <div className={styles.barTrack}><div className={styles.barFill} style={{ width: '98%' }}></div></div>
                  <strong>4.9</strong>
                </div>
                <div className={styles.barItem}>
                  <span>Scenic Mountain Location</span>
                  <div className={styles.barTrack}><div className={styles.barFill} style={{ width: '99%' }}></div></div>
                  <strong>4.9</strong>
                </div>
                <div className={styles.barItem}>
                  <span>Service & Hospitality</span>
                  <div className={styles.barTrack}><div className={styles.barFill} style={{ width: '96%' }}></div></div>
                  <strong>4.8</strong>
                </div>
                <div className={styles.barItem}>
                  <span>Dining & Breakfast Quality</span>
                  <div className={styles.barTrack}><div className={styles.barFill} style={{ width: '94%' }}></div></div>
                  <strong>4.7</strong>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.reviewsGrid}>
            {reviews.map((r) => (
              <div key={r.id} className={styles.reviewCard}>
                <div className={styles.reviewHeader}>
                  <div className={styles.stars}>{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}</div>
                  <span className={styles.date}>{r.date}</span>
                </div>
                <h3 className={styles.reviewTitle}>"{r.title}"</h3>
                <p className={styles.reviewText}>{r.text}</p>
                <div className={styles.reviewMeta}>
                  <strong>{r.name}</strong>
                  <span>{r.country} • Stayed in {r.room} ({r.tripType})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
