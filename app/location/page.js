import Link from 'next/link';
import { hotelInfo } from '../data/hotel';
import styles from './location.module.css';

export const metadata = {
  title: 'Location, Landmarks & Directions — The Grand Pavilion Ella',
  description: 'Find The Grand Pavilion Ella on Passara Road. Proximity to Nine Arches Bridge (1.8km), Little Adam’s Peak (2.5km) & Ella Railway Station transfer info.',
};

export default function LocationPage() {
  return (
    <div className={styles.locationPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Location</span>
          </div>
          <span className="badge badge-accent">Getting Here</span>
          <h1 className={styles.pageTitle}>Sanctuary in the Heart of Ella</h1>
          <p className={styles.pageSubtitle}>
            Perched on Passara Road amidst pristine cloud forests and tea terraces, yet only minutes away from Sri Lanka’s most photographed mountain landmarks.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.contentGrid}>
            {/* Left: Directions & Distances */}
            <div className={styles.leftCol}>
              <div className={styles.infoCard}>
                <h2 className={styles.cardHeading}>Key Landmarks & Distances</h2>
                <div className={styles.landmarksTable}>
                  <div className={styles.tableRow}>
                    <span className={styles.lmIcon}>🚂</span>
                    <div className={styles.lmDetail}>
                      <strong>Nine Arches Bridge (Demodara)</strong>
                      <p>Iconic colonial railway viaduct over lush jungle gorge.</p>
                    </div>
                    <span className={styles.lmDistance}>1.8 km / 8 mins</span>
                  </div>

                  <div className={styles.tableRow}>
                    <span className={styles.lmIcon}>⛰️</span>
                    <div className={styles.lmDetail}>
                      <strong>Little Adam's Peak</strong>
                      <p>Gentle scenic ridge hike with 360-degree hill country panorama.</p>
                    </div>
                    <span className={styles.lmDistance}>2.5 km / 12 mins</span>
                  </div>

                  <div className={styles.tableRow}>
                    <span className={styles.lmIcon}>🚉</span>
                    <div className={styles.lmDetail}>
                      <strong>Ella Railway Station</strong>
                      <p>Historic terminus for the world-famous Kandy–Ella train ride.</p>
                    </div>
                    <span className={styles.lmDistance}>1.2 km / 5 mins (Free Pickup)</span>
                  </div>

                  <div className={styles.tableRow}>
                    <span className={styles.lmIcon}>🌊</span>
                    <div className={styles.lmDetail}>
                      <strong>Ravana Falls & Mythic Caves</strong>
                      <p>Roaring 25-metre cascade linked to the ancient Ramayana legend.</p>
                    </div>
                    <span className={styles.lmDistance}>5.0 km / 15 mins</span>
                  </div>

                  <div className={styles.tableRow}>
                    <span className={styles.lmIcon}>🪂</span>
                    <div className={styles.lmDetail}>
                      <strong>Flying Ravana Adventure Park</strong>
                      <p>Sri Lanka's longest mega zipline, ATV trails & climbing tower.</p>
                    </div>
                    <span className={styles.lmDistance}>3.1 km / 10 mins</span>
                  </div>
                </div>
              </div>

              {/* How to Reach Us */}
              <div className={styles.infoCard}>
                <h2 className={styles.cardHeading}>How to Reach The Grand Pavilion</h2>
                <div className={styles.transportList}>
                  <div className={styles.transportItem}>
                    <h3>1. By Scenic Mountain Train (Recommended)</h3>
                    <p>
                      Board the train from Colombo Fort, Kandy, or Nuwara Eliya (Nanu Oya) to Ella. Regarded as one of the most stunning rail routes on Earth. We provide <strong>complimentary chauffeur pickup</strong> from Ella railway station upon arrival.
                    </p>
                  </div>

                  <div className={styles.transportItem}>
                    <h3>2. By Private Chauffeur / Airport Transfer</h3>
                    <p>
                      Bandaranaike International Airport (CMB) in Colombo is approximately 220 km (5.5 hours drive via the southern expressway and scenic hill highways). Mattala Rajapaksa Airport (HRI) is 85 km (2 hours). Our luxury AC SUVs are available for private door-to-door transfer.
                    </p>
                  </div>

                  <div className={styles.transportItem}>
                    <h3>3. Helicopter Scenic Charter</h3>
                    <p>
                      Reach Ella in 45 minutes from Colombo or southern coastal resorts. Helipad transfers can be coordinated through our concierge.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Map Card & Quick Contact */}
            <aside className={styles.rightCol}>
              <div className={styles.mapCard}>
                <div className={styles.mapVisualHeader}>
                  <h3>Resort Coordinates</h3>
                  <p>{hotelInfo.address.street}, {hotelInfo.address.city}, {hotelInfo.address.country}</p>
                </div>

                <div className={styles.mapMockContainer}>
                  <div className={styles.pinWrapper}>
                    <span className={styles.pulsePin}>📍</span>
                    <div className={styles.pinPopup}>
                      <strong>{hotelInfo.name}</strong>
                      <small>Elevation 1,000m • Passara Rd</small>
                    </div>
                  </div>
                </div>

                <div className={styles.mapCardBody}>
                  <div className={styles.coordRow}>
                    <span>Latitude / Longitude:</span>
                    <strong>6.8667° N, 81.0466° E</strong>
                  </div>
                  <div className={styles.coordRow}>
                    <span>Postal Code:</span>
                    <strong>90090</strong>
                  </div>
                  <a
                    href="https://maps.google.com/?q=The+Grand+Pavilion+Ella+Sri+Lanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary w-full"
                    style={{ width: '100%', marginTop: '1rem', textAlign: 'center' }}
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>

              <div className={styles.conciergeCard}>
                <h3>Need Assistance Navigating?</h3>
                <p>Our 24-hour concierge team is available to assist your driver or track your train arrival.</p>
                <div className={styles.contactRow}>
                  <span>📞 Call:</span>
                  <strong>{hotelInfo.phone}</strong>
                </div>
                <div className={styles.contactRow}>
                  <span>💬 WhatsApp:</span>
                  <strong>{hotelInfo.whatsapp}</strong>
                </div>
                <a
                  href={`https://wa.me/${hotelInfo.whatsapp.replace(/\+/g, '')}?text=Hello!%20I%20need%20directions%20or%20pickup%20assistance%20to%20The%20Grand%20Pavilion.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent w-full"
                  style={{ width: '100%', marginTop: '1.25rem' }}
                >
                  Send Driver Location on WhatsApp
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
