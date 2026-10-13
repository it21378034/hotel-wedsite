'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './gallery.module.css';

const galleryItems = [
  { id: 1, title: 'Resort Infinity Pool & Misty Mountains', category: 'resort', src: '/images/hero-resort-ella-sri-lanka.jpg' },
  { id: 2, title: 'Deluxe Mountain View Private Balcony', category: 'rooms', src: '/images/deluxe-mountain-view-room.jpg' },
  { id: 3, title: 'Premium Valley Suite Living & Soaking Tub', category: 'rooms', src: '/images/premium-valley-suite.jpg' },
  { id: 4, title: 'The Terrace Restaurant Candlelit Setting', category: 'dining', src: '/images/restaurant-dining-ella.jpg' },
  { id: 5, title: 'Ayu Herbal Spa Therapy Pavilions', category: 'wellness', src: '/images/spa-wellness-treatment.jpg' },
  { id: 6, title: 'Cloud-Kissed Ella Gap at Sunrise', category: 'nature', src: '/images/hero-resort-ella-sri-lanka.jpg' },
  { id: 7, title: 'Bespoke Teak Furnishings & Fine Linens', category: 'rooms', src: '/images/deluxe-mountain-view-room.jpg' },
  { id: 8, title: 'Mountain Sunset Dining on the Deck', category: 'dining', src: '/images/restaurant-dining-ella.jpg' },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [activePhoto, setActivePhoto] = useState(null);

  const filteredItems = galleryItems.filter((item) => {
    if (filter === 'all') return true;
    return item.category === filter;
  });

  return (
    <div className={styles.galleryPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Gallery</span>
          </div>
          <span className="badge badge-accent">Visual Journey</span>
          <h1 className={styles.pageTitle}>Moments of Highland Wonder</h1>
          <p className={styles.pageSubtitle}>
            Glimpse into life at The Grand Pavilion. From sun-dappled tea valleys to serene private sanctuaries and exquisite culinary moments.
          </p>
        </div>
      </section>

      {/* Gallery Main */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          {/* Tabs */}
          <div className={styles.filterTabs}>
            <button
              className={`${styles.tabBtn} ${filter === 'all' ? styles.activeTab : ''}`}
              onClick={() => setFilter('all')}
            >
              All Views
            </button>
            <button
              className={`${styles.tabBtn} ${filter === 'rooms' ? styles.activeTab : ''}`}
              onClick={() => setFilter('rooms')}
            >
              Rooms & Suites
            </button>
            <button
              className={`${styles.tabBtn} ${filter === 'dining' ? styles.activeTab : ''}`}
              onClick={() => setFilter('dining')}
            >
              Dining & Cocktails
            </button>
            <button
              className={`${styles.tabBtn} ${filter === 'wellness' ? styles.activeTab : ''}`}
              onClick={() => setFilter('wellness')}
            >
              Spa & Wellness
            </button>
            <button
              className={`${styles.tabBtn} ${filter === 'nature' ? styles.activeTab : ''}`}
              onClick={() => setFilter('nature')}
            >
              Nature & Scenery
            </button>
          </div>

          {/* Grid */}
          <div className={styles.galleryGrid}>
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className={styles.galleryCard}
                onClick={() => setActivePhoto(item)}
              >
                <div className={styles.imgWrapper}>
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={480}
                    height={320}
                    className={styles.cardImg}
                  />
                  <div className={styles.imgOverlay}>
                    <span>🔍 View Fullscreen</span>
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className={styles.lightbox} onClick={() => setActivePhoto(null)}>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setActivePhoto(null)}>
              ✕ Close
            </button>
            <Image
              src={activePhoto.src}
              alt={activePhoto.title}
              width={900}
              height={600}
              className={styles.modalImg}
            />
            <p className={styles.modalCaption}>{activePhoto.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}
