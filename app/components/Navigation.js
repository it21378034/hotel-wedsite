'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { hotelInfo, rooms } from '../data/hotel';
import styles from './Navigation.module.css';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [roomsDropdownOpen, setRoomsDropdownOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const pathname = usePathname();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setRoomsDropdownOpen(false);
  }, []);

  // Close menus on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setRoomsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/rooms', label: 'Rooms & Suites', hasDropdown: true },
    { href: '/amenities', label: 'Amenities' },
    { href: '/dining', label: 'Dining' },
    { href: '/offers', label: 'Offers', badge: 'Hot' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Announcement & Concierge Ribbon */}
      <div className={styles.topAnnouncementBar}>
        <div className={`container ${styles.announcementInner}`}>
          <div className={styles.announcementLeft}>
            <span className={styles.goldBadge}>✦ Official Resort Website</span>
            <span className={styles.announcementText}>
              Direct booking exclusive: <strong>Complimentary High Tea & 20% off Spa</strong>
            </span>
          </div>
          <div className={styles.announcementRight}>
            <a href={`tel:${hotelInfo.phone}`} className={styles.topContactLink}>
              <span>📞</span> {hotelInfo.phone}
            </a>
            <a
              href={`https://wa.me/${hotelInfo.whatsapp.replace(/\+/g, '')}?text=Hello!%20I'd%20like%20to%20inquire%20about%20a%20stay`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.topWhatsAppLink}
            >
              <span>💬</span> WhatsApp Live
            </a>
            <div className={styles.langSelectorWrap}>
              <select
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className={styles.topLangSelect}
                aria-label="Select language"
              >
                <option value="EN">EN (USD)</option>
                <option value="SI">සිං (LKR)</option>
                <option value="TA">தமி (LKR)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Floating Glassmorphic Header */}
      <header
        className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <div className={`container ${styles.navContainer}`}>
          {/* Logo with Crest */}
          <Link href="/" className={styles.logo} onClick={closeMobile}>
            <div className={styles.logoIcon}>
              <span className={styles.crestMonogram}>GP</span>
            </div>
            <div className={styles.logoText}>
              <span className={styles.logoName}>The Grand Pavilion</span>
              <span className={styles.logoTagline}>Luxury Resort • Ella</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className={styles.desktopNav} aria-label="Main Navigation">
            <ul className={styles.navLinksList}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href;

                if (link.hasDropdown) {
                  return (
                    <li
                      key={link.href}
                      className={styles.dropdownParent}
                      ref={dropdownRef}
                      onMouseEnter={() => setRoomsDropdownOpen(true)}
                      onMouseLeave={() => setRoomsDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                      >
                        {link.label}
                        <span className={`${styles.dropdownChevron} ${roomsDropdownOpen ? styles.chevronOpen : ''}`}>
                          ▾
                        </span>
                      </Link>

                      {/* Mega Dropdown Menu */}
                      <div className={`${styles.megaDropdown} ${roomsDropdownOpen ? styles.dropdownVisible : ''}`}>
                        <div className={styles.dropdownHeader}>
                          <div>
                            <h4>Select Your Sanctuary</h4>
                            <p>30 private rooms & suites overlooking Ella Gap</p>
                          </div>
                          <Link href="/rooms" className={styles.viewAllRoomsLink} onClick={() => setRoomsDropdownOpen(false)}>
                            Browse All 6 Categories →
                          </Link>
                        </div>
                        <div className={styles.dropdownGrid}>
                          {rooms.slice(0, 4).map((r) => (
                            <Link
                              key={r.id}
                              href={`/rooms/${r.slug}`}
                              className={styles.dropdownRoomItem}
                              onClick={() => setRoomsDropdownOpen(false)}
                            >
                              <div className={styles.dropdownRoomInfo}>
                                <strong>{r.name}</strong>
                                <span>{r.size} • {r.bedType}</span>
                              </div>
                              <span className={styles.dropdownRoomPrice}>From ${r.priceFrom}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.navLink} ${isActive ? styles.activeNavLink : ''}`}
                    >
                      {link.label}
                      {link.badge && <span className={styles.navBadge}>{link.badge}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right Action Bar */}
          <div className={styles.navActions}>
            <Link href="/booking" className={styles.bookCtaBtn}>
              <span className={styles.btnIcon}>✦</span>
              <span>Book Now</span>
            </Link>

            {/* Mobile Menu Hamburger Toggle */}
            <button
              className={`${styles.hamburgerBtn} ${mobileOpen ? styles.hamburgerActive : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileOpen}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Glassmorphic Drawer */}
        <div className={`${styles.mobileDrawer} ${mobileOpen ? styles.drawerOpen : ''}`}>
          <div className={styles.drawerBackdrop} onClick={closeMobile} />
          <div className={styles.drawerPanel}>
            <div className={styles.drawerHeader}>
              <div className={styles.drawerLogo}>
                <span className={styles.crestMonogram}>GP</span>
                <div>
                  <strong>The Grand Pavilion</strong>
                  <small>Ella, Sri Lanka</small>
                </div>
              </div>
              <button className={styles.drawerCloseBtn} onClick={closeMobile} aria-label="Close menu">
                ✕
              </button>
            </div>

            <div className={styles.drawerScrollArea}>
              <ul className={styles.drawerLinksList}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.drawerLink} ${pathname === link.href ? styles.drawerActiveLink : ''}`}
                      onClick={closeMobile}
                    >
                      <span>{link.label}</span>
                      {link.badge && <span className={styles.drawerBadge}>{link.badge}</span>}
                      <span className={styles.drawerArrow}>→</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <div className={styles.drawerHighlightBox}>
                <h4>Direct Booking Perks</h4>
                <p>✓ Guaranteed lowest rate</p>
                <p>✓ Free arrival Ceylon high tea</p>
                <p>✓ 48-hour free cancellation</p>
              </div>

              <div className={styles.drawerCtaWrap}>
                <Link href="/booking" className={styles.drawerBookBtn} onClick={closeMobile}>
                  Check Room Availability
                </Link>
                <a
                  href={`https://wa.me/${hotelInfo.whatsapp.replace(/\+/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.drawerWhatsAppBtn}
                >
                  💬 Chat on WhatsApp with Concierge
                </a>
              </div>

              <div className={styles.drawerFooterInfo}>
                <p>📍 {hotelInfo.address.street}, {hotelInfo.address.city}, Sri Lanka</p>
                <p>📞 {hotelInfo.phone}</p>
                <p>✉️ {hotelInfo.email}</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
