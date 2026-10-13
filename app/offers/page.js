import Image from 'next/image';
import Link from 'next/link';
import { offers } from '../data/hotel';
import styles from './offers.module.css';

export const metadata = {
  title: 'Special Packages & Seasonal Offers — The Grand Pavilion Ella',
  description: 'Exclusive resort packages at The Grand Pavilion Ella: Honeymoon Bliss, Family Highland Adventure, and Long Stay Retreat discounts.',
};

export default function OffersPage() {
  return (
    <div className={styles.offersPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Special Offers</span>
          </div>
          <span className="badge badge-accent">Privileges</span>
          <h1 className={styles.pageTitle}>Exclusive Highland Packages</h1>
          <p className={styles.pageSubtitle}>
            Unlock extraordinary value with curated getaway packages including gourmet dining, Ayurvedic spa rituals, and guided mountain excursions.
          </p>
        </div>
      </section>

      {/* Offers Grid */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.offersGrid}>
            {offers.map((offer) => (
              <div key={offer.id} className={styles.offerCard}>
                <div className={styles.imageCol}>
                  <Image
                    src={offer.image}
                    alt={offer.name}
                    width={500}
                    height={320}
                    className={styles.offerImg}
                  />
                  <div className={styles.badgeRow}>
                    <span className={styles.discountBadge}>{offer.discount}</span>
                    <span className={styles.durationBadge}>{offer.duration}</span>
                  </div>
                </div>

                <div className={styles.infoCol}>
                  <h2 className={styles.offerTitle}>{offer.name}</h2>
                  <p className={styles.offerDesc}>{offer.description}</p>

                  <div className={styles.inclusionsBox}>
                    <strong>Package Inclusions:</strong>
                    <ul>
                      {offer.includes.map((inc, i) => (
                        <li key={i}>✓ {inc}</li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.priceFooter}>
                    <div>
                      {offer.price ? (
                        <div className={styles.priceWrap}>
                          <span className={styles.origPrice}>${offer.originalPrice}</span>
                          <strong className={styles.salePrice}>${offer.price}</strong>
                          <span className={styles.perPackage}>/ entire package</span>
                        </div>
                      ) : (
                        <strong className={styles.salePrice}>Special Promotional Rate</strong>
                      )}
                      <small className={styles.validUntil}>Valid until: {offer.validUntil}</small>
                    </div>

                    <Link href={`/booking?offer=${offer.id}`} className="btn btn-accent btn-lg">
                      Book This Offer
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
