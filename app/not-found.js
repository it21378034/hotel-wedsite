import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.badge}>404 — Page Not Found</span>
          <h1 className={styles.title}>Lost in the Misty Mountains?</h1>
          <p className={styles.text}>
            The path you are looking for doesn't exist or may have been moved. Let us guide you back to serenity.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="btn btn-primary">
              Return to Homepage
            </Link>
            <Link href="/rooms" className="btn btn-secondary">
              Explore Rooms & Suites
            </Link>
            <Link href="/booking" className="btn btn-accent">
              Book a Stay
            </Link>
          </div>
          <div className={styles.quickLinks}>
            <span>Popular Destinations:</span>
            <Link href="/amenities">Resort Amenities</Link>
            <Link href="/dining">Dining & Menus</Link>
            <Link href="/offers">Special Packages</Link>
            <Link href="/location">Getting to Ella</Link>
            <Link href="/contact">Contact Concierge</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
