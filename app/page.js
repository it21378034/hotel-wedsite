import Image from 'next/image';
import Link from 'next/link';
import BookingBar from './components/BookingBar';
import { hotelInfo, rooms, amenities, offers, reviews, aggregateRating } from './data/hotel';
import styles from './page.module.css';

export const metadata = {
  title: 'The Grand Pavilion — Luxury Mountain Resort in Ella, Sri Lanka',
  description: 'Experience 5-star hill country luxury at The Grand Pavilion Ella. Heated infinity pool, panoramic mountain view suites, luxury Ayu Spa, and fine dining.',
  alternates: {
    canonical: 'https://www.thegrandpavilion.lk',
  },
};

export default function Home() {
  const featuredRooms = rooms.filter((r) => r.featured).slice(0, 3);
  const featuredOffers = offers.filter((o) => o.featured).slice(0, 3);
  const topReviews = reviews.slice(0, 3);

  return (
    <div className={styles.home}>
      {/* ─── Hero Section ─── */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image
            src="/images/hero-resort-ella-sri-lanka.jpg"
            alt="The Grand Pavilion Resort in Ella, Sri Lanka with infinity pool and misty mountains"
            fill
            priority
            quality={90}
            className={styles.heroImage}
            sizes="100vw"
          />
          <div className={styles.heroOverlay} />
        </div>

        <div className={`container ${styles.heroContent}`}>
          <div className={styles.heroBadge}>
            <span className={styles.starIcon}>★ ★ ★ ★ ★</span>
            <span className={styles.badgeText}>Five-Star Hill Country Sanctuary</span>
          </div>

          <h1 className={styles.heroTitle}>
            Where Misty Mountains Meet <span className={styles.accentText}>Timeless Luxury</span>
          </h1>

          <p className={styles.heroSubtitle}>
            Perched 1,000 metres above sea level in Ella, Sri Lanka. Awaken to cloud-kissed peaks, heated infinity pool waters, and bespoke Sri Lankan hospitality.
          </p>

          {/* Luxury Action Buttons */}
          <div className={styles.heroCtas}>
            <Link href="/rooms" className={styles.heroPrimaryBtn}>
              <span>Explore Rooms & Suites</span>
              <span className={styles.btnArrow}>→</span>
            </Link>
            <Link href="/booking" className={styles.heroSecondaryBtn}>
              <span>Check Availability</span>
            </Link>
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace(/\+/g, '')}?text=Hello!%20I'd%20like%20to%20inquire%20about%20staying%20at%20The%20Grand%20Pavilion`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroWhatsAppBtn}
            >
              <span className={styles.whatsAppIcon}>💬</span>
              <span>Chat with Concierge</span>
            </a>
          </div>

          {/* Quick Trust Highlights under Hero CTAs */}
          <div className={styles.heroTrustBadges}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Official Best Rate Guarantee</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Free 48h Cancellation</span>
            </div>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Complimentary Ceylon High Tea</span>
            </div>
          </div>
        </div>

        {/* Integrated Booking Bar */}
        <div className={styles.bookingBarWrapper}>
          <div className="container">
            <BookingBar />
          </div>
        </div>
      </section>

      {/* ─── Highlights Ribbon ─── */}
      <section className={styles.highlightsRibbon}>
        <div className={`container ${styles.ribbonGrid}`}>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonNumber}>4.8 / 5</span>
            <span className={styles.ribbonLabel}>Rated on TripAdvisor ({aggregateRating.reviewCount} Reviews)</span>
          </div>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonNumber}>30</span>
            <span className={styles.ribbonLabel}>Private Boutique Sanctuaries</span>
          </div>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonNumber}>1,000 m</span>
            <span className={styles.ribbonLabel}>Elevation with 360° Mountain Vistas</span>
          </div>
          <div className={styles.ribbonItem}>
            <span className={styles.ribbonNumber}>100%</span>
            <span className={styles.ribbonLabel}>Direct Booking Best Rate Guarantee</span>
          </div>
        </div>
      </section>

      {/* ─── Story / About Section ─── */}
      <section className={`section ${styles.storySection}`}>
        <div className={`container ${styles.storyGrid}`}>
          <div className={styles.storyContent}>
            <span className="badge badge-accent">Our Heritage & Haven</span>
            <h2 className={styles.sectionTitle}>
              An Architectural Marvel Amidst Emerald Tea Valleys
            </h2>
            <p className={styles.leadParagraph}>
              The Grand Pavilion was thoughtfully conceived as a celebration of Ella’s untamed nature and refined tropical modernism.
            </p>
            <p className={styles.bodyText}>
              Surrounded by whispering pines, cloud forests, and century-old Ceylon tea estates, our 30 suites and private villas combine locally crafted teakwood, stone textures, and floor-to-ceiling glass to bring the tranquil majesty of the highlands right into your living space.
            </p>
            <div className={styles.storyFeatures}>
              <div className={styles.storyFeatureItem}>
                <span className={styles.storyFeatureIcon}>🌿</span>
                <div>
                  <strong>Sustainable Eco-Design</strong>
                  <p>Solar-powered heating, rainwater harvesting & organic estate gardens.</p>
                </div>
              </div>
              <div className={styles.storyFeatureItem}>
                <span className={styles.storyFeatureIcon}>✨</span>
                <div>
                  <strong>Personalized Butler Care</strong>
                  <p>Attentive highland hospitality dedicated to your every comfort.</p>
                </div>
              </div>
            </div>
            <div className={styles.storyCtaRow}>
              <Link href="/location" className="btn btn-primary">
                Discover Our Location & Story
              </Link>
              <Link href="/amenities" className="btn btn-secondary">
                View Resort Amenities
              </Link>
            </div>
          </div>

          <div className={styles.storyImages}>
            <div className={styles.imageMainWrapper}>
              <Image
                src="/images/deluxe-mountain-view-room.jpg"
                alt="Luxury balcony overlooking mountain peaks in Ella"
                width={540}
                height={400}
                className={styles.storyMainImg}
              />
            </div>
            <div className={styles.imageSecondaryWrapper}>
              <Image
                src="/images/spa-wellness-treatment.jpg"
                alt="Ayurvedic spa treatment at The Grand Pavilion"
                width={300}
                height={240}
                className={styles.storySubImg}
              />
              <div className={styles.experienceCard}>
                <span className={styles.expNum}>5★</span>
                <span className={styles.expText}>Boutique Luxury Experience</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Featured Accommodations ─── */}
      <section className={`section ${styles.roomsSection}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className="badge badge-primary">Private Living</span>
            <h2 className={styles.sectionTitle}>Signature Rooms & Suites</h2>
            <p className={styles.sectionSubtitle}>
              Each sanctuary is crafted with natural wood, floor-to-ceiling windows, and private balconies framing breathtaking sunrises over the Ella Gap.
            </p>
          </div>

          <div className={styles.roomsGrid}>
            {featuredRooms.map((room) => (
              <div key={room.id} className={styles.roomCard}>
                <div className={styles.roomImageWrapper}>
                  <Image
                    src={room.image}
                    alt={`${room.name} at The Grand Pavilion Ella`}
                    width={500}
                    height={320}
                    className={styles.roomImage}
                  />
                  <span className={styles.roomPriceBadge}>
                    From <strong>${room.priceFrom}</strong> <small>/ night</small>
                  </span>
                </div>
                <div className={styles.roomBody}>
                  <div className={styles.roomSpecs}>
                    <span>📐 {room.size}</span>
                    <span>🛏️ {room.bedType}</span>
                    <span>👥 Up to {room.maxGuests} guests</span>
                  </div>
                  <h3 className={styles.roomTitle}>
                    <Link href={`/rooms/${room.slug}`}>{room.name}</Link>
                  </h3>
                  <p className={styles.roomDesc}>{room.shortDesc}</p>
                  
                  <div className={styles.roomAmenitiesList}>
                    {room.amenities.slice(0, 3).map((am, i) => (
                      <span key={i} className={styles.amenityChip}>
                        ✓ {am}
                      </span>
                    ))}
                  </div>

                  <div className={styles.roomFooter}>
                    <Link href={`/rooms/${room.slug}`} className="btn btn-outline btn-sm">
                      View Details
                    </Link>
                    <Link href={`/booking?room=${room.id}`} className="btn btn-accent btn-sm">
                      Book This Room
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.roomsCtaCenter}>
            <Link href="/rooms" className="btn btn-primary btn-lg">
              View All 6 Room Types & Suites →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Resort Amenities Spotlight ─── */}
      <section className={`section ${styles.amenitiesSection}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className="badge badge-accent">Elevated Wellness & Leisure</span>
            <h2 className={styles.sectionTitle}>Curated Resort Experiences</h2>
            <p className={styles.sectionSubtitle}>
              Indulge in moments created to restore mind, body, and spirit amidst Sri Lanka's highland tranquility.
            </p>
          </div>

          <div className={styles.amenitiesGrid}>
            {amenities.map((item) => (
              <div key={item.id} className={styles.amenityCard}>
                <div className={styles.amenityIconWrapper}>
                  <span className={styles.amenityIcon}>{item.icon}</span>
                </div>
                <h3 className={styles.amenityName}>{item.name}</h3>
                <p className={styles.amenityDesc}>{item.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.amenitiesLinkRow}>
            <Link href="/amenities" className="btn btn-secondary">
              Discover Full Amenities & Spa Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Dining Showcase ─── */}
      <section className={`section ${styles.diningSection}`}>
        <div className={`container ${styles.diningGrid}`}>
          <div className={styles.diningImageSide}>
            <Image
              src="/images/restaurant-dining-ella.jpg"
              alt="The Terrace Restaurant at The Grand Pavilion overlooking Ella mountains"
              width={560}
              height={440}
              className={styles.diningImg}
            />
            <div className={styles.diningFloatingBadge}>
              <strong>Farm to Table</strong>
              <span>Organic highland ingredients & Ceylon spices</span>
            </div>
          </div>

          <div className={styles.diningContentSide}>
            <span className="badge badge-accent">Gastronomy</span>
            <h2 className={styles.sectionTitle}>The Terrace & Cloud Nine Lounge</h2>
            <p className={styles.leadParagraph}>
              Feast your eyes on misty mountain vistas while our Executive Chef Kamal crafts exquisite interpretations of heritage Sri Lankan curries and contemporary European classics.
            </p>
            <ul className={styles.diningBulletList}>
              <li>
                <strong>Buffet & A la Carte Breakfast</strong> — Fresh tropical fruits, artisanal Ceylon tea, hopper stations, and international favourites.
              </li>
              <li>
                <strong>Sunset Mountain Cocktails</strong> — Handcrafted botanic elixirs infused with local spices, kithul treacle, and tropical herbs.
              </li>
              <li>
                <strong>Private Starlit Dining</strong> — Romantic candlelit multi-course dinners arranged on secluded viewing decks.
              </li>
            </ul>
            <div className={styles.diningBtnGroup}>
              <Link href="/dining" className="btn btn-accent">
                Explore Dining & Reserve Table
              </Link>
              <Link href="/dining#menus" className="btn btn-outline">
                View Seasonal Menus
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Special Offers & Packages ─── */}
      <section className={`section ${styles.offersSection}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className="badge badge-primary">Exclusive Privileges</span>
            <h2 className={styles.sectionTitle}>Curated Highland Packages</h2>
            <p className={styles.sectionSubtitle}>
              Unlock complimentary spa treatments, guided excursions, and tailored savings when you book directly with us.
            </p>
          </div>

          <div className={styles.offersGrid}>
            {featuredOffers.map((offer) => (
              <div key={offer.id} className={styles.offerCard}>
                <div className={styles.offerCardTop}>
                  <span className={styles.offerDiscountBadge}>{offer.discount}</span>
                  <span className={styles.offerDuration}>{offer.duration}</span>
                </div>
                <h3 className={styles.offerTitle}>{offer.name}</h3>
                <p className={styles.offerShortDesc}>{offer.shortDesc}</p>
                <ul className={styles.offerInclusions}>
                  {offer.includes.slice(0, 4).map((inc, i) => (
                    <li key={i}>✓ {inc}</li>
                  ))}
                </ul>
                <div className={styles.offerPriceRow}>
                  {offer.price ? (
                    <div>
                      <span className={styles.originalPrice}>${offer.originalPrice}</span>
                      <strong className={styles.dealPrice}>${offer.price}</strong>
                      <small> / package</small>
                    </div>
                  ) : (
                    <div>
                      <strong className={styles.dealPrice}>Special Rate</strong>
                    </div>
                  )}
                  <Link href={`/booking?offer=${offer.id}`} className="btn btn-accent btn-sm">
                    Claim Package
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.offersCta}>
            <Link href="/offers" className="btn btn-secondary">
              View All Seasonal Offers →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Guest Reviews & Accreditations ─── */}
      <section className={`section ${styles.reviewsSection}`}>
        <div className="container">
          <div className={styles.sectionHeaderCenter}>
            <span className="badge badge-accent">Traveler Stories</span>
            <h2 className={styles.sectionTitle}>Loved by Discerning Guests</h2>
            <p className={styles.sectionSubtitle}>
              Rated {aggregateRating.ratingValue} out of 5 stars across verified international travel reviews.
            </p>
          </div>

          <div className={styles.reviewsGrid}>
            {topReviews.map((rev) => (
              <div key={rev.id} className={styles.reviewCard}>
                <div className={styles.reviewStars}>
                  {'★'.repeat(rev.rating)}
                  {'☆'.repeat(5 - rev.rating)}
                </div>
                <h3 className={styles.reviewCardTitle}>"{rev.title}"</h3>
                <p className={styles.reviewCardText}>{rev.text}</p>
                <div className={styles.reviewAuthor}>
                  <strong>{rev.name}</strong>
                  <span>{rev.country} • {rev.tripType}</span>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.reviewsBottomLinks}>
            <Link href="/reviews" className="btn btn-primary">
              Read All 247 Verified Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Location & Landmarks ─── */}
      <section className={`section ${styles.locationSection}`}>
        <div className="container">
          <div className={`grid ${styles.locationGrid}`}>
            <div>
              <span className="badge badge-secondary">Explore Ella</span>
              <h2 className={styles.sectionTitle}>At the Heart of Sri Lanka's Wonders</h2>
              <p className={styles.leadParagraph}>
                Situated on Passara Road in Ella, The Grand Pavilion offers blissful serenity while remaining minutes away from the country's most legendary hill country landmarks.
              </p>

              <div className={styles.landmarksList}>
                <div className={styles.landmarkItem}>
                  <div className={styles.landmarkIcon}>🚂</div>
                  <div>
                    <strong>Nine Arches Bridge</strong>
                    <span>1.8 km (10 mins by resort tuk-tuk)</span>
                  </div>
                </div>
                <div className={styles.landmarkItem}>
                  <div className={styles.landmarkIcon}>⛰️</div>
                  <div>
                    <strong>Little Adam’s Peak</strong>
                    <span>2.5 km (Sunrise hikes arranged daily)</span>
                  </div>
                </div>
                <div className={styles.landmarkItem}>
                  <div className={styles.landmarkIcon}>🌊</div>
                  <div>
                    <strong>Ravana Waterfall & Caves</strong>
                    <span>5.0 km (Majestic cascades & mythic caverns)</span>
                  </div>
                </div>
                <div className={styles.landmarkItem}>
                  <div className={styles.landmarkIcon}>🚉</div>
                  <div>
                    <strong>Ella Railway Station</strong>
                    <span>1.2 km (Complimentary resort pickup provided)</span>
                  </div>
                </div>
              </div>

              <div className={styles.locationActions}>
                <Link href="/location" className="btn btn-primary">
                  Interactive Map & Travel Guide
                </Link>
                <Link href="/contact" className="btn btn-outline">
                  Contact Concierge
                </Link>
              </div>
            </div>

            <div className={styles.mapCard}>
              <div className={styles.mapCardHeader}>
                <h3>The Grand Pavilion, Ella</h3>
                <p>42 Passara Road, Ella 90090, Sri Lanka</p>
              </div>
              <div className={styles.mapVisual}>
                <div className={styles.mapPin}>
                  <span>📍</span>
                  <div className={styles.mapTooltip}>
                    <strong>The Grand Pavilion</strong>
                    <span>Luxury Resort • Elevation 1,000m</span>
                  </div>
                </div>
                <div className={styles.mapMockBg}>
                  <div className={styles.contourLine}></div>
                  <div className={styles.contourLine2}></div>
                </div>
              </div>
              <div className={styles.mapCardFooter}>
                <span>GPS: 6.8667° N, 81.0466° E</span>
                <a
                  href="https://maps.google.com/?q=Ella+Sri+Lanka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapExternalLink}
                >
                  Open in Google Maps ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Direct Booking Perks Banner ─── */}
      <section className={styles.perksBanner}>
        <div className={`container ${styles.perksContainer}`}>
          <div className={styles.perksText}>
            <h2>Why Reserve Directly With Us?</h2>
            <p>Direct bookings always receive our lowest available rates and exclusive complimentary perks.</p>
          </div>
          <div className={styles.perksList}>
            <div className={styles.perkItem}>✓ Guaranteed Lowest Rates</div>
            <div className={styles.perkItem}>✓ Complimentary High Tea on Arrival</div>
            <div className={styles.perkItem}>✓ Flexible 48-Hour Cancellation</div>
            <div className={styles.perkItem}>✓ Priority Room View Upgrade</div>
          </div>
          <div>
            <Link href="/booking" className="btn btn-accent btn-lg">
              Book Direct Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
