'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.scss';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Shop', href: '#shop' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const close = (e) => {
      if (!e.target.closest(`.${styles.mobileMenu}`) && !e.target.closest(`.${styles.menuToggle}`)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [mobileOpen]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
        id="header"
      >
        <div className={styles.inner}>

          {/* ── Logo ── */}
          <Link href="#home" className={styles.logo} aria-label="Primera Beauty Salon">
            <span className={styles.logoMark}>✦</span>
            <div className={styles.logoText}>
              <span className={styles.logoName}>Primera</span>
              <span className={styles.logoSub}>Beauty Salon</span>
            </div>
          </Link>

          {/* ── Desktop Nav ── */}
          <nav className={styles.nav} aria-label="Main navigation">
            <ul className={styles.navList}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`${styles.navLink} ${activeLink === link.href ? styles.active : ''}`}
                    onClick={() => { setActiveLink(link.href); }}
                  >
                    {link.label}
                    <span className={styles.navUnderline} />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Right Actions ── */}
          <div className={styles.actions}>
            <button
              className={styles.searchBtn}
              aria-label="Search"
              onClick={() => setSearchOpen(!searchOpen)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            <a
              href="https://wa.me/971551088584"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.bookBtn}
              id="header-book-online"
            >
              Book Online
            </a>

            {/* ── Hamburger ── */}
            <button
              className={`${styles.menuToggle} ${mobileOpen ? styles.open : ''}`}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* ── Search Bar ── */}
        <div className={`${styles.searchBar} ${searchOpen ? styles.searchVisible : ''}`}>
          <div className={styles.searchInner}>
            <input
              type="search"
              placeholder="Search services, products..."
              aria-label="Search"
              id="site-search"
            />
            <button aria-label="Submit search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Overlay ── */}
      <div
        className={`${styles.overlay} ${mobileOpen ? styles.overlayVisible : ''}`}
        onClick={() => setMobileOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Menu ── */}
      <nav
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileOpen : ''}`}
        aria-label="Mobile navigation"
        aria-hidden={!mobileOpen}
      >
        <div className={styles.mobileMenuHeader}>
          <span className={styles.logoName}>Primera Beauty Salon</span>
          <button
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          >
            ✕
          </button>
        </div>

        <ul className={styles.mobileNavList}>
          {navLinks.map((link, i) => (
            <li key={link.href} style={{ animationDelay: `${i * 0.07}s` }}>
              <a
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => { setMobileOpen(false); setActiveLink(link.href); }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.mobileFooter}>
          <a
            href="https://wa.me/971551088584"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileBookBtn}
          >
            Book Online via WhatsApp
          </a>
          <p className={styles.mobileContact}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .18h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z"/></svg>
            +971 55 108 8584
          </p>
        </div>
      </nav>
    </>
  );
}
