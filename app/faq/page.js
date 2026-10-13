'use client';
import { useState } from 'react';
import Link from 'next/link';
import { faqItems } from '../data/hotel';
import styles from './faq.module.css';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className={styles.faqPage}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className={styles.pageHeader}>
        <div className="container">
          <div className={styles.breadcrumbs}>
            <Link href="/">Home</Link> <span>/</span> <span>FAQ & Policies</span>
          </div>
          <span className="badge badge-accent">Help Center</span>
          <h1 className={styles.pageTitle}>Frequently Asked Questions</h1>
          <p className={styles.pageSubtitle}>
            Everything you need to know about arrival, check-in, dietary accommodations, transfers, and stay policies.
          </p>
        </div>
      </section>

      <section className={`section ${styles.mainSection}`}>
        <div className="container">
          <div className={styles.faqWrapper}>
            {faqItems.map((item, idx) => (
              <div
                key={idx}
                className={`${styles.faqCard} ${openIndex === idx ? styles.cardOpen : ''}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggle(idx)}
                >
                  <span>{item.question}</span>
                  <span className={styles.toggleIcon}>{openIndex === idx ? '−' : '+'}</span>
                </button>
                {openIndex === idx && (
                  <div className={styles.faqAnswer}>
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className={styles.supportBox}>
            <h3>Have a Specific Question?</h3>
            <p>Our guest relations team is available 24/7 on WhatsApp and telephone.</p>
            <div className={styles.supportCtas}>
              <Link href="/contact" className="btn btn-primary">
                Contact Concierge Desk
              </Link>
              <Link href="/booking" className="btn btn-accent">
                Book a Room Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
