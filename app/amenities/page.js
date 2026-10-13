import Image from 'next/image';
import Link from 'next/link';
import { amenities, hotelInfo } from '../data/hotel';
import styles from './amenities.module.css';

export const metadata = {
  title: 'Amenities & Luxury Wellness — The Grand Pavilion Ella',
  description: 'Discover 5-star resort amenities at The Grand Pavilion Ella: heated mountain infinity pool, Ayu Ayurvedic Spa, fitness studio, Ceylon tea tours & airport transfers.',
};

export default function AmenitiesPage() {
  return (
    <div className={styles.amenitiesPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Amenities</span>
          </div>
          <span className="badge badge-accent">Resort Life</span>
          <h1 className={styles.pageTitle}>World-Class Amenities & Wellness</h1>
          <p className={styles.pageSubtitle}>
            Immerse yourself in mountain serenity with curated facilities designed to rejuvenate the body, soothe the mind, and enrich your highland journey.
          </p>
        </div>
      </section>

      {/* Amenities Showcase */}
      <section className={`section ${styles.showcaseSection}`}>
        <div className="container">
          <div className={styles.amenitiesList}>
            {amenities.map((item, index) => (
              <div
                key={item.id}
                className={`${styles.amenityRow} ${index % 2 === 1 ? styles.reverseRow : ''}`}
              >
                <div className={styles.imageCol}>
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={560}
                    height={380}
                    className={styles.amenityImg}
                  />
                  <div className={styles.iconBadge}>{item.icon}</div>
                </div>

                <div className={styles.textCol}>
                  <span className="badge badge-secondary">Experience</span>
                  <h2 className={styles.amenityTitle}>{item.name}</h2>
                  <p className={styles.amenityDesc}>{item.description}</p>
                  
                  <div className={styles.hoursBox}>
                    <strong>Operating Hours:</strong> 7:00 AM – 9:00 PM Daily
                  </div>

                  <div className={styles.ctaRow}>
                    <Link href="/booking" className="btn btn-accent">
                      Book a Stay with Us
                    </Link>
                    <a
                      href={`https://wa.me/${hotelInfo.whatsapp.replace(/\+/g, '')}?text=Hello!%20I'd%20like%20to%20inquire%20about%20${encodeURIComponent(item.name)}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      Inquire via Concierge
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spa Menu Highlight Banner */}
      <section className={styles.spaBanner}>
        <div className={`container ${styles.spaBannerInner}`}>
          <div className={styles.spaText}>
            <h2>Signature Ayurvedic Wellness Rituals</h2>
            <p>
              Experience authentic Sri Lankan herbal therapies, warm oil Shirodhara, and customized body polishes using estate-grown botanicals.
            </p>
          </div>
          <Link href="/contact" className="btn btn-primary btn-lg">
            Download Spa Menu & Reserve
          </Link>
        </div>
      </section>
    </div>
  );
}
