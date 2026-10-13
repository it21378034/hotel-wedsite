import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { rooms, hotelInfo } from '../../data/hotel';
import styles from './room-detail.module.css';

export async function generateStaticParams() {
  return rooms.map((room) => ({
    slug: room.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);
  if (!room) return { title: 'Room Not Found' };

  return {
    title: `${room.name} — The Grand Pavilion Ella, Sri Lanka`,
    description: room.description.substring(0, 155),
    alternates: {
      canonical: `https://www.thegrandpavilion.lk/rooms/${room.slug}`,
    },
    openGraph: {
      title: `${room.name} | The Grand Pavilion`,
      description: room.shortDesc,
      images: [{ url: room.image }],
    },
  };
}

export default async function RoomDetailPage({ params }) {
  const { slug } = await params;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    notFound();
  }

  // Schema markup for HotelRoom
  const roomSchema = {
    '@context': 'https://schema.org',
    '@type': 'HotelRoom',
    name: room.name,
    description: room.description,
    image: `https://www.thegrandpavilion.lk${room.image}`,
    bed: {
      '@type': 'BedDetails',
      typeOfBed: room.bedType,
    },
    occupancy: {
      '@type': 'QuantitativeValue',
      maxValue: room.maxGuests,
    },
    offers: {
      '@type': 'Offer',
      price: room.priceFrom,
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 2);

  return (
    <div className={styles.roomDetailPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roomSchema) }}
      />

      {/* Hero Header */}
      <section className={styles.roomHero}>
        <div className={styles.heroImgWrapper}>
          <Image
            src={room.image}
            alt={`${room.name} panoramic view`}
            fill
            priority
            className={styles.heroImg}
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <Link href="/rooms">Rooms</Link> <span>/</span> <span>{room.name}</span>
          </div>
          <span className="badge badge-accent">Private Sanctuary</span>
          <h1 className={styles.roomTitle}>{room.name}</h1>
          <p className={styles.roomSubtitle}>{room.shortDesc}</p>
        </div>
      </section>

      {/* Main Content & Sticky Booking Box */}
      <section className={`section ${styles.detailSection}`}>
        <div className={`container ${styles.detailGrid}`}>
          {/* Left Column: Details & Photos */}
          <div className={styles.leftCol}>
            {/* Quick Specs Strip */}
            <div className={styles.specsStrip}>
              <div className={styles.specBox}>
                <span className={styles.specIcon}>📐</span>
                <span className={styles.specLabel}>Size</span>
                <strong>{room.size}</strong>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specIcon}>🛏️</span>
                <span className={styles.specLabel}>Bedding</span>
                <strong>{room.bedType}</strong>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specIcon}>👥</span>
                <span className={styles.specLabel}>Capacity</span>
                <strong>Up to {room.maxGuests} Guests</strong>
              </div>
              <div className={styles.specBox}>
                <span className={styles.specIcon}>🌄</span>
                <span className={styles.specLabel}>View</span>
                <strong>Mountain & Tea Valleys</strong>
              </div>
            </div>

            {/* Room Story */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>About This Sanctuary</h2>
              <p className={styles.descriptionText}>{room.description}</p>
            </div>

            {/* Gallery Grid */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>Sanctuary Gallery</h2>
              <div className={styles.galleryGrid}>
                {room.images && room.images.length > 0 ? (
                  room.images.map((imgSrc, idx) => (
                    <div key={idx} className={styles.galleryItem}>
                      <Image
                        src={imgSrc}
                        alt={`${room.name} photo ${idx + 1}`}
                        width={480}
                        height={320}
                        className={styles.galleryImg}
                      />
                    </div>
                  ))
                ) : (
                  <div className={styles.galleryItem}>
                    <Image
                      src={room.image}
                      alt={room.name}
                      width={480}
                      height={320}
                      className={styles.galleryImg}
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Amenities Checklist */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>Included Amenities & Features</h2>
              <div className={styles.amenitiesChecklist}>
                {room.amenities.map((item, idx) => (
                  <div key={idx} className={styles.checkItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stay Policies */}
            <div className={styles.sectionBlock}>
              <h2 className={styles.blockTitle}>Sanctuary Policies</h2>
              <div className={styles.policiesGrid}>
                <div>
                  <strong>Check-in:</strong> 2:00 PM (Early check-in subject to availability)
                </div>
                <div>
                  <strong>Check-out:</strong> 11:00 AM (Late check-out on request)
                </div>
                <div>
                  <strong>Cancellation:</strong> Free cancellation up to 48 hours prior to arrival.
                </div>
                <div>
                  <strong>Breakfast:</strong> Inclusive of gourmet à la carte breakfast on the terrace.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Booking Card */}
          <aside className={styles.rightCol}>
            <div className={styles.stickyBookingCard}>
              <div className={styles.bookingCardHeader}>
                <span className={styles.fromLabel}>Direct Rates From</span>
                <div className={styles.priceDisplay}>
                  <strong>${room.priceFrom}</strong>
                  <span>/ night + taxes</span>
                </div>
                <div className={styles.guaranteeTag}>✓ Official Best Rate Guarantee</div>
              </div>

              <div className={styles.cardFeaturesList}>
                <div className={styles.cardFeature}>
                  <span>☕</span>
                  <span>Daily Terrace Breakfast Included</span>
                </div>
                <div className={styles.cardFeature}>
                  <span>🍸</span>
                  <span>Signature Welcome Elixir on Arrival</span>
                </div>
                <div className={styles.cardFeature}>
                  <span>📶</span>
                  <span>High-Speed Optical Wi-Fi</span>
                </div>
                <div className={styles.cardFeature}>
                  <span>💆</span>
                  <span>15% Privilege on Ayu Spa Therapies</span>
                </div>
              </div>

              <div className={styles.bookingCardCta}>
                <Link href={`/booking?room=${room.id}`} className="btn btn-accent btn-lg w-full" style={{ width: '100%' }}>
                  Reserve {room.name}
                </Link>
                <a
                  href={`https://wa.me/${hotelInfo.whatsapp.replace(/\+/g, '')}?text=Hello!%20I'm%20interested%20in%20reserving%20the%20${encodeURIComponent(room.name)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline w-full"
                  style={{ width: '100%', marginTop: '0.75rem' }}
                >
                  💬 Inquire via WhatsApp
                </a>
              </div>

              <div className={styles.contactHelp}>
                <span>Questions before booking?</span>
                <strong>Call {hotelInfo.phone}</strong>
              </div>
            </div>
          </aside>
        </div>

        {/* Explore Other Rooms */}
        <div className={`container ${styles.otherRoomsSection}`}>
          <h2 className={styles.otherRoomsTitle}>Explore Other Sanctuaries</h2>
          <div className={styles.otherRoomsGrid}>
            {otherRooms.map((r) => (
              <div key={r.id} className={styles.otherRoomCard}>
                <Image
                  src={r.image}
                  alt={r.name}
                  width={380}
                  height={240}
                  className={styles.otherRoomImg}
                />
                <div className={styles.otherRoomBody}>
                  <h3>{r.name}</h3>
                  <p>{r.shortDesc}</p>
                  <div className={styles.otherRoomBottom}>
                    <span>From ${r.priceFrom} / night</span>
                    <Link href={`/rooms/${r.slug}`} className="btn btn-outline btn-sm">
                      View Room
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
