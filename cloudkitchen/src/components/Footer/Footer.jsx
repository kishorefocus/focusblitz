import styles from './Footer.module.scss';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact Us', href: '#contact' },
];

const services = [
  'Full Hair Color',
  'Balayage & Ombré',
  'Keratin Treatment',
  'Hair Extensions',
  'Precision Cut & Blowout',
  'Foil Highlights',
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="contact" aria-label="Site footer">
      {/* ── Decorative Top Border ── */}
      <div className={styles.topBorder} aria-hidden="true" />

      {/* ── Book Strip ── */}
      <div className={styles.bookStrip}>
        <div className={styles.bookStripContent}>
          <div className={styles.bookStripText}>
            <h3 className={styles.bookStripTitle}>Ready to Transform?</h3>
            <p className={styles.bookStripSub}>Open daily: 10:00 AM – 10:30 PM</p>
          </div>
          <a
            href="https://wa.me/971585865070"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.bookStripBtn}
            id="footer-book-btn"
          >
            Book Appointment
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* ── Main Footer Body ── */}
      <div className={styles.body}>
        <div className={styles.grid}>
          {/* ── Brand Column ── */}
          <div className={styles.brandCol}>
            <div className={styles.logo}>
              <span className={styles.logoMark}>✦</span>
              <div>
                <span className={styles.logoName}>Hollywood Ladies Salon</span>
                <span className={styles.logoTagline}>Beauty Parlour · Al Rigga · Dubai</span>
              </div>
            </div>

            <p className={styles.brandText}>
              A sanctuary of elegance nestled on Al Rigga Road, Deira, Dubai.
              Where beauty care meets exceptional service.
            </p>

            {/* Socials */}
            <div className={styles.socials}>
              {[
                { id: 'wa', href: 'https://wa.me/971585865070', label: 'WhatsApp', path: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z' },
                { id: 'ig', href: 'https://instagram.com/', label: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z' },
                { id: 'fb', href: 'https://facebook.com/', label: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
                { id: 'yt', href: 'https://youtube.com/', label: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' },
              ].map((s) => (
                <a
                  key={s.id}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={s.label}
                  id={`footer-social-${s.id}`}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── Navigation Column ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Services Column ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Our Services</h4>
            <ul className={styles.linkList}>
              {services.map((service) => (
                <li key={service}>
                  <a href="#services" className={styles.footerLink}>
                    <span className={styles.linkArrow}>→</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Contact Column ── */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Visit Us</h4>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <address className={styles.contactText}>
                  M floor, Al Hawai Building<br />
                  Al Rigga Rd, Al Muraqqabat<br />
                  Deira, Dubai, UAE
                </address>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/>
                  </svg>
                </div>
                <a href="tel:+971585865070" className={styles.contactLink}>+971 58 586 5070</a>
              </div>

              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div className={styles.contactText}>
                  <strong className={styles.hoursTitle}>Open Daily</strong>
                  <span>10:00 AM – 10:30 PM</span>
                </div>
              </div>
            </div>

            {/* Map Link */}
            <a
              href="https://maps.google.com/?q=Hollywood+Ladies+Salon+Al+Hawai+Building+Al+Rigga+Road+Deira+Dubai"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapLink}
              id="footer-map-link"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="3 11 22 2 13 21 11 13 3 11"/>
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p className={styles.copyright}>
            © {currentYear} Hollywood Ladies Salon. All rights reserved.
          </p>
          <p className={styles.tagline}>
            <span className={styles.taglineMark}>✦</span>
            Crafted with love in Dubai
            <span className={styles.taglineMark}>✦</span>
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>Privacy Policy</a>
            <span className={styles.bottomSep}>·</span>
            <a href="#" className={styles.bottomLink}>Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
