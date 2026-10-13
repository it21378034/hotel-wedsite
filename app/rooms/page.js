'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { rooms } from '../data/hotel';
import styles from './rooms.module.css';

export default function RoomsPage() {
  const [filter, setFilter] = useState('all');

  const filteredRooms = rooms.filter((room) => {
    if (filter === 'all') return true;
    if (filter === 'suites') return room.name.toLowerCase().includes('suite');
    if (filter === 'mountain') return room.name.toLowerCase().includes('mountain') || room.name.toLowerCase().includes('retreat');
    if (filter === 'family') return room.maxGuests >= 3;
    return true;
  });

  return (
    <div className={styles.roomsPage}>
      {/* Header Banner */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Rooms & Suites</span>
          </div>
          <span className="badge badge-accent">Accommodations</span>
          <h1 className={styles.pageTitle}>Rooms & Luxury Suites</h1>
          <p className={styles.pageSubtitle}>
            Immerse yourself in elevated comfort. 30 private sanctuaries featuring panoramic balconies, bespoke timber furnishings, and uninterrupted views of Ella's misty highlands.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          {/* Filter Bar */}
          <div className={styles.filterBar}>
            <div className={styles.filterTabs}>
              <button
                className={`${styles.filterTab} ${filter === 'all' ? styles.activeTab : ''}`}
                onClick={() => setFilter('all')}
              >
                All Sanctuaries ({rooms.length})
              </button>
              <button
                className={`${styles.filterTab} ${filter === 'mountain' ? styles.activeTab : ''}`}
                onClick={() => setFilter('mountain')}
              >
                Mountain & Sunset Views
              </button>
              <button
                className={`${styles.filterTab} ${filter === 'suites' ? styles.activeTab : ''}`}
                onClick={() => setFilter('suites')}
              >
                Signature Suites
              </button>
              <button
                className={`${styles.filterTab} ${filter === 'family' ? styles.activeTab : ''}`}
                onClick={() => setFilter('family')}
              >
                Family & Groups (3+ Guests)
              </button>
            </div>
          </div>

          {/* Room Cards Grid */}
          <div className={styles.roomsList}>
            {filteredRooms.map((room) => (
              <div key={room.id} className={styles.roomCard}>
                <div className={styles.roomImageCol}>
                  <Image
                    src={room.image}
                    alt={`${room.name} at The Grand Pavilion Ella`}
                    width={550}
                    height={380}
                    className={styles.roomImg}
                  />
                  {room.featured && <span className={styles.featuredTag}>★ Signature Pick</span>}
                </div>

                <div className={styles.roomInfoCol}>
                  <div className={styles.roomHeaderRow}>
                    <div className={styles.specsRow}>
                      <span>📐 {room.size}</span>
                      <span>🛏️ {room.bedType}</span>
                      <span>👥 Up to {room.maxGuests} guests</span>
                    </div>
                    <div className={styles.priceBox}>
                      <span className={styles.priceLabel}>From</span>
                      <strong className={styles.priceAmount}>${room.priceFrom}</strong>
                      <span className={styles.pricePer}>/ night</span>
                    </div>
                  </div>

                  <h2 className={styles.roomTitle}>
                    <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h2>

                  <p className={styles.roomDescription}>{room.description}</p>

                  <div className={styles.amenitiesSection}>
                    <span className={styles.amenitiesTitle}>Key Room Highlights:</span>
                    <div className={styles.amenitiesChips}>
                      {room.amenities.map((item, idx) => (
                        <span key={idx} className={styles.chip}>
                          ✓ {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.actionsRow}>
                    <Link href={`/rooms/${room.slug}`} className="btn btn-outline">
                      View Full Gallery & Floorplan
                    </Link>
                    <Link href={`/booking?room=${room.id}`} className="btn btn-accent">
                      Book Now (Best Rate)
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Direct Booking Guarantee */}
          <div className={styles.guaranteeBox}>
            <div className={styles.guaranteeContent}>
              <h3>Direct Booking Guarantee</h3>
              <p>Reserve directly through our official website for guaranteed lowest rates, flexible 48h cancellation, complimentary arrival drinks, and priority room upgrades.</p>
            </div>
            <Link href="/booking" className="btn btn-primary">
              Instant Availability Search
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
