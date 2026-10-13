'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { rooms, hotelInfo } from '../data/hotel';
import styles from './booking.module.css';

function BookingContent() {
  const searchParams = useSearchParams();
  const preselectedRoomId = searchParams.get('room') || 'deluxe-mountain-view';
  const preselectedCheckIn = searchParams.get('checkIn') || '';
  const preselectedCheckOut = searchParams.get('checkOut') || '';
  const preselectedGuests = parseInt(searchParams.get('guests') || '2', 10);

  const [step, setStep] = useState(1);
  const [checkIn, setCheckIn] = useState(preselectedCheckIn || '2026-11-01');
  const [checkOut, setCheckOut] = useState(preselectedCheckOut || '2026-11-05');
  const [guests, setGuests] = useState(preselectedGuests || 2);
  const [selectedRoom, setSelectedRoom] = useState(
    rooms.find((r) => r.id === preselectedRoomId) || rooms[0]
  );
  const [addons, setAddons] = useState({
    airportTransfer: false,
    couplesSpa: false,
    candlelitDinner: false,
  });
  const [guestDetails, setGuestDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
  });
  const [confirmedBookingId, setConfirmedBookingId] = useState('');

  // Calculate nights
  const nights = Math.max(
    1,
    Math.round(
      (new Date(checkOut).getTime() - new Date(checkIn).getTime()) /
        (1000 * 60 * 60 * 24)
    ) || 4
  );

  const roomSubtotal = selectedRoom ? selectedRoom.priceFrom * nights : 0;
  const addonTotal =
    (addons.airportTransfer ? 120 : 0) +
    (addons.couplesSpa ? 160 : 0) +
    (addons.candlelitDinner ? 95 : 0);
  const taxes = Math.round((roomSubtotal + addonTotal) * 0.12);
  const total = roomSubtotal + addonTotal + taxes;

  const handleConfirm = (e) => {
    e.preventDefault();
    const refCode = 'GP-' + Math.floor(100000 + Math.random() * 900000);
    setConfirmedBookingId(refCode);
    setStep(4);
  };

  return (
    <div className={styles.bookingPage}>
      {/* Header */}
      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>Reservation Engine</span>
          </div>
          <span className="badge badge-accent">Direct Reservation</span>
          <h1 className={styles.pageTitle}>Book Your Stay at The Grand Pavilion</h1>
          <p className={styles.pageSubtitle}>
            Official best rate guarantee, zero reservation fees, and complimentary Ceylon high tea on arrival.
          </p>

          {/* Stepper Progress Bar */}
          <div className={styles.stepper}>
            <div className={`${styles.stepItem} ${step >= 1 ? styles.activeStep : ''}`}>
              <span className={styles.stepNum}>1</span>
              <span>Dates & Rooms</span>
            </div>
            <div className={styles.stepDivider} />
            <div className={`${styles.stepItem} ${step >= 2 ? styles.activeStep : ''}`}>
              <span className={styles.stepNum}>2</span>
              <span>Enhancements</span>
            </div>
            <div className={styles.stepDivider} />
            <div className={`${styles.stepItem} ${step >= 3 ? styles.activeStep : ''}`}>
              <span className={styles.stepNum}>3</span>
              <span>Guest Details</span>
            </div>
            <div className={styles.stepDivider} />
            <div className={`${styles.stepItem} ${step >= 4 ? styles.activeStep : ''}`}>
              <span className={styles.stepNum}>✓</span>
              <span>Confirmation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Reservation Flow */}
      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          {step === 4 ? (
            /* Step 4: Confirmed State */
            <div className={styles.confirmationCard}>
              <div className={styles.confirmedIcon}>✓</div>
              <span className="badge badge-accent">Reservation Confirmed</span>
              <h2 className={styles.confTitle}>Thank You, {guestDetails.firstName || 'Honoured Guest'}!</h2>
              <p className={styles.confSubtitle}>
                Your reservation at The Grand Pavilion Ella has been successfully recorded. A confirmation receipt has been sent to <strong>{guestDetails.email || 'your email'}</strong>.
              </p>

              <div className={styles.confRefBox}>
                <span>Booking Reference Number</span>
                <strong>{confirmedBookingId}</strong>
              </div>

              <div className={styles.confSummaryGrid}>
                <div className={styles.confSummaryCol}>
                  <h3>Stay Summary</h3>
                  <p><strong>Sanctuary:</strong> {selectedRoom.name}</p>
                  <p><strong>Dates:</strong> {checkIn} to {checkOut} ({nights} nights)</p>
                  <p><strong>Guests:</strong> {guests} Guests</p>
                  <p><strong>Total Amount:</strong> ${total} (inclusive of taxes)</p>
                </div>
                <div className={styles.confSummaryCol}>
                  <h3>Selected Add-ons</h3>
                  <p>{addons.airportTransfer ? '✓ Private Airport Chauffeur ($120)' : '— No Airport Transfer'}</p>
                  <p>{addons.couplesSpa ? '✓ Ayu Couples Herbal Massage ($160)' : '— No Spa Pre-booked'}</p>
                  <p>{addons.candlelitDinner ? '✓ Candlelit Terrace Dinner ($95)' : '— No Private Dining Pre-booked'}</p>
                </div>
              </div>

              <div className={styles.confActions}>
                <Link href="/" className="btn btn-primary">
                  Return to Homepage
                </Link>
                <a
                  href={`https://wa.me/${hotelInfo.whatsapp.replace(/\+/g, '')}?text=Hello!%20I%20just%20completed%20booking%20reference%20${confirmedBookingId}%20for%20${selectedRoom.name}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-accent"
                >
                  💬 Send Details to WhatsApp Concierge
                </a>
              </div>
            </div>
          ) : (
            /* Steps 1 - 3 with Sticky Receipt Sidebar */
            <div className={styles.flowGrid}>
              <div className={styles.flowLeft}>
                {/* STEP 1: Dates & Room */}
                {step === 1 && (
                  <div className={styles.stepCard}>
                    <h2 className={styles.cardHeading}>1. Select Dates & Preferred Room</h2>
                    <div className={styles.datesRow}>
                      <div className={styles.inputGroup}>
                        <label>Check-in Date</label>
                        <input
                          type="date"
                          value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          className="input"
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label>Check-out Date</label>
                        <input
                          type="date"
                          value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          className="input"
                        />
                      </div>
                      <div className={styles.inputGroup}>
                        <label>Guests</label>
                        <select
                          value={guests}
                          onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                          className="select"
                        >
                          <option value={1}>1 Guest</option>
                          <option value={2}>2 Guests</option>
                          <option value={3}>3 Guests</option>
                          <option value={4}>4 Guests</option>
                        </select>
                      </div>
                    </div>

                    <h3 className={styles.subHeading}>Choose Room Category</h3>
                    <div className={styles.roomsSelectGrid}>
                      {rooms.map((room) => {
                        const isSelected = selectedRoom.id === room.id;
                        return (
                          <div
                            key={room.id}
                            className={`${styles.roomSelectCard} ${isSelected ? styles.selectedRoomCard : ''}`}
                            onClick={() => setSelectedRoom(room)}
                          >
                            <div className={styles.roomSelectImgWrap}>
                              <Image
                                src={room.image}
                                alt={room.name}
                                width={240}
                                height={150}
                                className={styles.roomSelectImg}
                              />
                            </div>
                            <div className={styles.roomSelectInfo}>
                              <div className={styles.selectHeader}>
                                <h4>{room.name}</h4>
                                <strong className={styles.selectPrice}>${room.priceFrom} <small>/ night</small></strong>
                              </div>
                              <p className={styles.selectDesc}>{room.shortDesc}</p>
                              <div className={styles.selectFeatures}>
                                <span>📐 {room.size}</span>
                                <span>🛏️ {room.bedType}</span>
                                <span>👥 Max {room.maxGuests}</span>
                              </div>
                            </div>
                            <button
                              type="button"
                              className={`${styles.selectBtn} ${isSelected ? styles.activeSelectBtn : ''}`}
                            >
                              {isSelected ? '✓ Selected' : 'Choose Room'}
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    <div className={styles.stepCtaRow}>
                      <button
                        type="button"
                        onClick={() => setStep(2)}
                        className="btn btn-accent btn-lg"
                      >
                        Continue to Enhancements →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 2: Add-ons & Experiences */}
                {step === 2 && (
                  <div className={styles.stepCard}>
                    <h2 className={styles.cardHeading}>2. Enhance Your Highland Experience</h2>
                    <p className={styles.stepNote}>
                      Select optional perks and transport to be prepared seamlessly before your arrival.
                    </p>

                    <div className={styles.addonsList}>
                      <div
                        className={`${styles.addonCard} ${addons.airportTransfer ? styles.addonSelected : ''}`}
                        onClick={() => setAddons({ ...addons, airportTransfer: !addons.airportTransfer })}
                      >
                        <input
                          type="checkbox"
                          checked={addons.airportTransfer}
                          onChange={() => {}}
                          className={styles.addonCheck}
                        />
                        <div className={styles.addonDetails}>
                          <div className={styles.addonTitleRow}>
                            <h4>Private Luxury Airport Chauffeur (Colombo CMB to Ella)</h4>
                            <strong className={styles.addonPrice}>+$120</strong>
                          </div>
                          <p>Door-to-door transfer in a luxury AC SUV with bottled highland water and refreshments.</p>
                        </div>
                      </div>

                      <div
                        className={`${styles.addonCard} ${addons.couplesSpa ? styles.addonSelected : ''}`}
                        onClick={() => setAddons({ ...addons, couplesSpa: !addons.couplesSpa })}
                      >
                        <input
                          type="checkbox"
                          checked={addons.couplesSpa}
                          onChange={() => {}}
                          className={styles.addonCheck}
                        />
                        <div className={styles.addonDetails}>
                          <div className={styles.addonTitleRow}>
                            <h4>Ayu Couples Herbal & Hot Stone Ritual (90 Mins)</h4>
                            <strong className={styles.addonPrice}>+$160</strong>
                          </div>
                          <p>Full-body Ayurvedic warm oil massage followed by organic herbal steam and herbal tea pairing.</p>
                        </div>
                      </div>

                      <div
                        className={`${styles.addonCard} ${addons.candlelitDinner ? styles.addonSelected : ''}`}
                        onClick={() => setAddons({ ...addons, candlelitDinner: !addons.candlelitDinner })}
                      >
                        <input
                          type="checkbox"
                          checked={addons.candlelitDinner}
                          onChange={() => {}}
                          className={styles.addonCheck}
                        />
                        <div className={styles.addonDetails}>
                          <div className={styles.addonTitleRow}>
                            <h4>Private Starlit Terrace Candlelit Dinner</h4>
                            <strong className={styles.addonPrice}>+$95</strong>
                          </div>
                          <p>Four-course curated tasting menu set on a secluded viewing deck overlooking the Ella Gap.</p>
                        </div>
                      </div>
                    </div>

                    <div className={styles.stepCtaRowBetween}>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn btn-outline"
                      >
                        ← Back to Dates & Room
                      </button>
                      <button
                        type="button"
                        onClick={() => setStep(3)}
                        className="btn btn-accent btn-lg"
                      >
                        Continue to Guest Details →
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: Guest Details Form */}
                {step === 3 && (
                  <div className={styles.stepCard}>
                    <h2 className={styles.cardHeading}>3. Guest Details & Final Review</h2>
                    <form onSubmit={handleConfirm}>
                      <div className={styles.formGrid}>
                        <div className={styles.formGroup}>
                          <label>First Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="John"
                            value={guestDetails.firstName}
                            onChange={(e) => setGuestDetails({ ...guestDetails, firstName: e.target.value })}
                            className="input"
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label>Last Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Doe"
                            value={guestDetails.lastName}
                            onChange={(e) => setGuestDetails({ ...guestDetails, lastName: e.target.value })}
                            className="input"
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label>Email Address *</label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            value={guestDetails.email}
                            onChange={(e) => setGuestDetails({ ...guestDetails, email: e.target.value })}
                            className="input"
                          />
                        </div>
                        <div className={styles.formGroup}>
                          <label>Phone / WhatsApp *</label>
                          <input
                            type="tel"
                            required
                            placeholder="+94 77 123 4567"
                            value={guestDetails.phone}
                            onChange={(e) => setGuestDetails({ ...guestDetails, phone: e.target.value })}
                            className="input"
                          />
                        </div>
                      </div>

                      <div className={styles.formGroup} style={{ marginTop: '1.25rem' }}>
                        <label>Special Requests / Estimated Arrival Time</label>
                        <textarea
                          rows={3}
                          placeholder="Dietary requirements, honeymoon setup, flight/train details..."
                          value={guestDetails.specialRequests}
                          onChange={(e) => setGuestDetails({ ...guestDetails, specialRequests: e.target.value })}
                          className="textarea"
                        />
                      </div>

                      <div className={styles.termsBox}>
                        <label className={styles.termsLabel}>
                          <input type="checkbox" required />
                          <span>
                            I agree to the 48-hour free cancellation policy and hotel terms. Pay upon arrival with card or cash.
                          </span>
                        </label>
                      </div>

                      <div className={styles.stepCtaRowBetween}>
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="btn btn-outline"
                        >
                          ← Back to Enhancements
                        </button>
                        <button
                          type="submit"
                          className="btn btn-accent btn-lg"
                        >
                          Confirm Reservation (${total})
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              {/* Right: Live Summary Sidebar */}
              <aside className={styles.flowRight}>
                <div className={styles.summarySidebar}>
                  <h3 className={styles.summaryTitle}>Reservation Summary</h3>
                  <div className={styles.summaryRoomPreview}>
                    <Image
                      src={selectedRoom.image}
                      alt={selectedRoom.name}
                      width={320}
                      height={180}
                      className={styles.summaryImg}
                    />
                    <h4>{selectedRoom.name}</h4>
                    <p>{selectedRoom.size} • {selectedRoom.bedType}</p>
                  </div>

                  <div className={styles.summaryDates}>
                    <div>
                      <span>Check-in:</span>
                      <strong>{checkIn} (from 2 PM)</strong>
                    </div>
                    <div>
                      <span>Check-out:</span>
                      <strong>{checkOut} (by 11 AM)</strong>
                    </div>
                    <div>
                      <span>Duration:</span>
                      <strong>{nights} Night{nights > 1 ? 's' : ''}</strong>
                    </div>
                    <div>
                      <span>Guests:</span>
                      <strong>{guests} Guest{guests > 1 ? 's' : ''}</strong>
                    </div>
                  </div>

                  <div className={styles.breakdown}>
                    <div className={styles.breakdownRow}>
                      <span>{selectedRoom.name} ({nights} nights)</span>
                      <strong>${roomSubtotal}</strong>
                    </div>
                    {addonTotal > 0 && (
                      <div className={styles.breakdownRow}>
                        <span>Selected Enhancements</span>
                        <strong>+${addonTotal}</strong>
                      </div>
                    )}
                    <div className={styles.breakdownRow}>
                      <span>Service Charge & Taxes (12%)</span>
                      <strong>+${taxes}</strong>
                    </div>
                    <div className={`${styles.breakdownRow} ${styles.totalRow}`}>
                      <span>Total Balance (Due at Hotel)</span>
                      <strong>${total}</strong>
                    </div>
                  </div>

                  <div className={styles.sidebarPerks}>
                    <span>✓ Free cancellation up to 48 hours</span>
                    <span>✓ No credit card booking fee</span>
                    <span>✓ Breakfast on the terrace included</span>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div style={{ padding: '6rem', textAlign: 'center' }}>Loading reservation system...</div>}>
      <BookingContent />
    </Suspense>
  );
}
