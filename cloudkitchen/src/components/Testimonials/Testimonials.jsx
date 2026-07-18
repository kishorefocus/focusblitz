'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Testimonials.module.scss';

const testimonials = [
  {
    id: 1,
    name: 'Layla Al-Mansouri',
    location: 'Dubai, UAE',
    avatar: 'L',
    rating: 5,
    service: 'Balayage & Blowout',
    text: 'I walked in wanting a change and walked out feeling like a completely new person. The balayage result was absolutely stunning — natural, dimensional, and exactly what I envisioned. The team made me feel so welcome. I won\'t go anywhere else.',
    date: 'March 2025',
  },
  {
    id: 2,
    name: 'Sophia Reinholt',
    location: 'Abu Dhabi, UAE',
    avatar: 'S',
    rating: 5,
    service: 'Keratin Treatment',
    text: 'Best keratin I\'ve ever had in the UAE. My hair has been silky and manageable for months now. The salon itself is gorgeous — every detail is so thoughtfully done. I love the premium atmosphere and how professional each stylist is.',
    date: 'January 2025',
  },
  {
    id: 3,
    name: 'Nour Hassan',
    location: 'Sharjah, UAE',
    avatar: 'N',
    rating: 5,
    service: 'Full Hair Color & Highlights',
    text: 'I\'ve been to many salons in Dubai, but Zang Beauty Dubai is truly in a league of its own. The attention to detail and the skill of the colorist are unmatched. My hair color is vibrant, rich, and looks exactly like the inspiration photo I brought.',
    date: 'February 2025',
  },
  {
    id: 4,
    name: 'Amina Farouq',
    location: 'Dubai, UAE',
    avatar: 'A',
    rating: 5,
    service: 'Tape Hair Extensions',
    text: 'The tape extensions are so natural-looking that my friends couldn\'t tell the difference. The application took no time, and the quality is exceptional. I\'ve been getting compliments non-stop. Highly, highly recommend Zang Beauty Dubai!',
    date: 'April 2025',
  },
];

function QuoteIcon() {
  return (
    <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 32V19.2C0 13.867 1.6 9.333 4.8 5.6C8.053 1.867 12.48 0 18.08 0V5.6C15.04 5.6 12.613 6.507 10.8 8.32C9.04 10.08 8.16 12.453 8.16 15.44V17.6H18.08V32H0ZM23.92 32V19.2C23.92 13.867 25.52 9.333 28.72 5.6C31.973 1.867 36.4 0 42 0V5.6C38.96 5.6 36.533 6.507 34.72 8.32C32.96 10.08 32.08 12.453 32.08 15.44V17.6H42V32H23.92Z" fill="currentColor"/>
    </svg>
  );
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoRef = useRef(null);

  const go = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(index);
      setIsTransitioning(false);
    }, 400);
  };

  const next = () => go((current + 1) % testimonials.length);
  const prev = () => go((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    autoRef.current = setInterval(next, 7000);
    return () => clearInterval(autoRef.current);
  }, [current]);

  const t = testimonials[current];

  return (
    <section className={styles.testimonials} id="testimonials" aria-labelledby="testimonials-heading">
      {/* Background decor */}
      <div className={styles.bgDecor} aria-hidden="true">
        <span className={styles.decor1}>✦</span>
        <span className={styles.decor2}>✦</span>
      </div>

      {/* Header */}
      <div className={styles.header}>
        <span className="section-label">Client Stories</span>
        <h2 className={styles.title} id="testimonials-heading">
          What Our <em>Clients</em> Say
        </h2>
        <div className="gold-divider centered" />
      </div>

      {/* Testimonial Card */}
      <div className={styles.sliderWrap}>
        <button
          className={`${styles.arrow} ${styles.arrowPrev}`}
          onClick={prev}
          aria-label="Previous testimonial"
          id="testimonial-prev"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div
          className={`${styles.card} ${isTransitioning ? styles.cardExiting : styles.cardEntering}`}
          aria-live="polite"
          aria-label="Testimonial"
        >
          <div className={styles.quoteIcon}>
            <QuoteIcon />
          </div>

          <div className={styles.stars}>
            {Array.from({ length: t.rating }, (_, i) => (
              <span key={i} className={styles.star}>★</span>
            ))}
          </div>

          <blockquote className={styles.quote}>
            <p>{t.text}</p>
          </blockquote>

          <div className={styles.service}>
            <span className={styles.serviceLabel}>Service:</span>
            {t.service}
          </div>

          <div className={styles.author}>
            <div className={styles.avatar} aria-hidden="true">
              {t.avatar}
            </div>
            <div className={styles.authorInfo}>
              <span className={styles.authorName}>{t.name}</span>
              <span className={styles.authorMeta}>{t.location} · {t.date}</span>
            </div>
          </div>
        </div>

        <button
          className={`${styles.arrow} ${styles.arrowNext}`}
          onClick={next}
          aria-label="Next testimonial"
          id="testimonial-next"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Testimonial navigation">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => go(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-selected={i === current}
            role="tab"
            id={`testimonial-dot-${i}`}
          />
        ))}
      </div>

      {/* Summary Cards */}
      <div className={styles.summaryGrid}>
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            className={`${styles.summaryCard} ${i === current ? styles.summaryActive : ''}`}
            onClick={() => go(i)}
            aria-label={`Read testimonial from ${t.name}`}
          >
            <div className={styles.summaryAvatar}>{t.avatar}</div>
            <div className={styles.summaryText}>
              <span className={styles.summaryName}>{t.name}</span>
              <span className={styles.summaryService}>{t.service}</span>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
