'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { hotelInfo } from '../data/hotel';
import styles from './dining.module.css';

export default function DiningPage() {
  const [activeMenu, setActiveMenu] = useState('dinner');
  const [bookingStatus, setBookingStatus] = useState('');

  const handleTableSubmit = (e) => {
    e.preventDefault();
    setBookingStatus('Thank you! Your table reservation request has been received. Our dining host will confirm within 2 hours.');
  };

  const sampleMenus = {
    breakfast: [
      { name: 'Traditional Sri Lankan Egg Hoppers', desc: 'Crispy rice flour bowl hoppers, lunu miris onion sambal, seeni sambal, coconut milk gravy', price: '$18' },
      { name: 'Highland Tropical Fruit Platter & Curd', desc: 'Papaya, passion fruit, fresh hill strawberries, wild kithul treacle, buffalo curd', price: '$14' },
      { name: 'Ceylon Estate Eggs Benedict', desc: 'Poached farm eggs, English muffin, smoked south coast sailfish, lemongrass hollandaise', price: '$22' },
      { name: 'Avocado & Highland Goat Cheese Sourdough', desc: 'Wood-fired sourdough, smashed avocado, toasted pumpkin seeds, organic heirloom tomatoes', price: '$19' },
    ],
    lunch: [
      { name: 'Ella Black Pepper Crab Curry', desc: 'Lagoon mud crab simmered in roasted black curry, moringa leaves, steamed red heirloom rice', price: '$36' },
      { name: 'Wild Mushroom & Coconut Risotto', desc: 'Highland wild mushrooms, organic coconut milk, garlic crisps, toasted curry leaf oil', price: '$26' },
      { name: 'Catch of the Day - South Coast Mahi Mahi', desc: 'Pan-seared mahi mahi, passion fruit butter sauce, charred asparagus, sweet potato puree', price: '$32' },
    ],
    dinner: [
      { name: 'Ceylon Spiced Lamb Rack', desc: 'New Zealand lamb crusted in Ceylon cinnamon and cardamom, roasted beetroot, port wine jus', price: '$44' },
      { name: 'Seafood Symphony of Mirissa', desc: 'Jumbo tiger prawns, calamari, seared tuna medallion, saffron coconut emulsion', price: '$48' },
      { name: 'Slow-Cooked Jackfruit & Cashew Curry (V)', desc: 'Young polos jackfruit, raw cashews, creamy coconut milk, cinnamon bark, string hoppers', price: '$28' },
      { name: 'Valrhona Chocolate & Ceylon Cinnamon Mousse', desc: 'Dark chocolate dome, cinnamon spiced caramel, candied kithul nuts, passion fruit coulis', price: '$16' },
    ],
    highTea: [
      { name: 'The Grand Pavilion Signature High Tea', desc: 'Three-tiered selection of cucumber finger sandwiches, devilled crab tartlets, Ceylon tea scones, clotted cream, strawberry jam & boutique single-estate tea pairing', price: '$35 per guest' },
    ],
  };

  return (
    <div className={styles.diningPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Dining</span>
          </div>
          <span className="badge badge-accent">Culinary Arts</span>
          <h1 className={styles.pageTitle}>The Terrace & Cloud Nine Lounge</h1>
          <p className={styles.pageSubtitle}>
            Where local organic harvests meet modern gastronomic finesse. Dine amidst mountain mists with panoramas of Ella Gap and emerald valleys.
          </p>
        </div>
      </section>

      {/* Main Dining Showcase */}
      <section className={`section ${styles.showcaseSection}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div className={styles.storyImage}>
              <Image
                src="/images/restaurant-dining-ella.jpg"
                alt="Fine dining table set with mountain views at The Grand Pavilion"
                width={560}
                height={420}
                className={styles.diningMainImg}
              />
              <div className={styles.chefBadge}>
                <strong>Chef Kamal Perera</strong>
                <span>Executive Culinary Director</span>
              </div>
            </div>

            <div className={styles.storyText}>
              <span className="badge badge-primary">Farm-to-Table Philosophy</span>
              <h2 className={styles.sectionHeading}>A Symphony of Ceylon Flavours</h2>
              <p className={styles.leadPara}>
                Every meal at The Grand Pavilion is a celebration of Sri Lanka’s lush agrarian bounty. We source organic heirloom vegetables from local Ella farmers, fresh seafood daily from the south coast, and handpicked tea leaves from neighboring estates.
              </p>
              <div className={styles.highlightsGrid}>
                <div className={styles.highlightItem}>
                  <span className={styles.hiIcon}>🌅</span>
                  <div>
                    <strong>Breakfast with the Birds</strong>
                    <span>7:00 AM – 10:30 AM</span>
                  </div>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.hiIcon}>☀️</span>
                  <div>
                    <strong>Highland All-Day Lunch</strong>
                    <span>12:00 PM – 4:00 PM</span>
                  </div>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.hiIcon}>☕</span>
                  <div>
                    <strong>High Tea on the Deck</strong>
                    <span>3:30 PM – 5:30 PM</span>
                  </div>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.hiIcon}>✨</span>
                  <div>
                    <strong>Starlit Dinner & Wine</strong>
                    <span>7:00 PM – 10:30 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Menus Interactive Section */}
          <div id="menus" className={styles.menusContainer}>
            <div className={styles.menuHeader}>
              <span className="badge badge-accent">Curated Tastings</span>
              <h2 className={styles.menuSectionTitle}>Explore Seasonal Menus</h2>
              <div className={styles.menuTabs}>
                <button
                  className={`${styles.menuTab} ${activeMenu === 'breakfast' ? styles.activeTab : ''}`}
                  onClick={() => setActiveMenu('breakfast')}
                >
                  Breakfast
                </button>
                <button
                  className={`${styles.menuTab} ${activeMenu === 'lunch' ? styles.activeTab : ''}`}
                  onClick={() => setActiveMenu('lunch')}
                >
                  Lunch
                </button>
                <button
                  className={`${styles.menuTab} ${activeMenu === 'dinner' ? styles.activeTab : ''}`}
                  onClick={() => setActiveMenu('dinner')}
                >
                  Dinner
                </button>
                <button
                  className={`${styles.menuTab} ${activeMenu === 'highTea' ? styles.activeTab : ''}`}
                  onClick={() => setActiveMenu('highTea')}
                >
                  Ceylon High Tea
                </button>
              </div>
            </div>

            <div className={styles.dishesGrid}>
              {sampleMenus[activeMenu].map((dish, i) => (
                <div key={i} className={styles.dishCard}>
                  <div className={styles.dishTop}>
                    <h3 className={styles.dishName}>{dish.name}</h3>
                    <span className={styles.dishPrice}>{dish.price}</span>
                  </div>
                  <p className={styles.dishDesc}>{dish.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Table Reservation Form */}
          <div className={styles.reservationBox}>
            <div className={styles.resFormHeader}>
              <h2>Reserve Your Mountain Dining Table</h2>
              <p>Non-resident guests are warmly welcome subject to table availability. Advance reservation recommended.</p>
            </div>

            {bookingStatus ? (
              <div className={styles.successMessage}>
                {bookingStatus}
              </div>
            ) : (
              <form onSubmit={handleTableSubmit} className={styles.resForm}>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label>Full Name</label>
                    <input type="text" required placeholder="John Doe" className="input" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" required placeholder="john@example.com" className="input" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Phone / WhatsApp</label>
                    <input type="tel" required placeholder="+94 77 123 4567" className="input" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Date</label>
                    <input type="date" required className="input" />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Time</label>
                    <select className="select">
                      <option>Dinner (7:00 PM)</option>
                      <option>Dinner (8:00 PM)</option>
                      <option>Dinner (9:00 PM)</option>
                      <option>Lunch (12:30 PM)</option>
                      <option>Afternoon High Tea (4:00 PM)</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label>Number of Guests</label>
                    <select className="select">
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5+ Guests</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup} style={{ marginTop: '1rem' }}>
                  <label>Special Requests / Dietary Notes</label>
                  <textarea rows={3} placeholder="Allergies, anniversaries, special seating preferences..." className="textarea" />
                </div>
                <button type="submit" className="btn btn-accent btn-lg" style={{ marginTop: '1.5rem' }}>
                  Request Table Reservation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
