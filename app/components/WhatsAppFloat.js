'use client';
import { hotelInfo } from '../data/hotel';

/**
 * WhatsApp Floating Chat Button
 * - Fixed position bottom-right
 * - Animated floating effect
 * - Tracks WhatsApp click events
 */
export default function WhatsAppFloat() {
  const handleClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'whatsapp_click', { page: window.location.pathname });
    }
  };

  return (
    <a
      href={`https://wa.me/${hotelInfo.whatsapp}?text=Hello%20Grand%20Pavilion%2C%20I%20would%20like%20to%20make%20an%20enquiry.`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
      onClick={handleClick}
    >
      <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.004 0h-.008C7.174 0 .004 7.176.004 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.22l6.12-1.96A15.908 15.908 0 0016.004 32C24.83 32 32 24.826 32 16.004 32 7.176 24.83 0 16.004 0zm9.306 22.614c-.39 1.1-1.932 2.012-3.186 2.278-.856.182-1.974.326-5.736-1.232-4.812-1.994-7.908-6.886-8.148-7.204-.232-.318-1.944-2.59-1.944-4.938 0-2.348 1.232-3.504 1.668-3.982.39-.428 1.024-.614 1.63-.614.196 0 .372.01.53.018.436.018.654.044.942.73.36.856 1.232 3.004 1.34 3.222.11.218.218.514.072.812-.138.306-.258.494-.476.754-.218.26-.458.58-.654.778-.218.218-.444.456-.192.892.252.436 1.124 1.854 2.414 3.006 1.658 1.48 3.056 1.94 3.49 2.152.436.218.69.186.942-.11.26-.306 1.11-1.286 1.406-1.73.29-.436.582-.364.982-.218.4.146 2.542 1.2 2.978 1.418.436.218.728.326.834.512.11.182.11 1.072-.282 2.172z" fill="currentColor"/>
      </svg>
    </a>
  );
}
