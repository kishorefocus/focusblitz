'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import styles from './Hero.module.scss';

const slides = [
  {
    id: 1,
    image: '/images/hero1.png',
    eyebrow: 'Welcome to Desert Wave Ladies Salon Dubai',
    title: 'Radiance',
    subtitle: 'Unmatched Styling',
    description: 'Transform your look with our world-class stylists. Premium services tailored to celebrate your unique beauty.',
    cta: 'Book Now',
    ctaHref: 'https://wa.me/97148866167',
    tag: 'Al Muraqqabat · Deira · Dubai',
  },
  {
    id: 2,
    image: '/images/hero2.png',
    eyebrow: 'Hair Color Specialists',
    title: 'Glamour',
    subtitle: 'Premium Hair Care',
    description: 'From balayage to full color — our expert colorists craft the perfect shade for every complexion and style.',
    cta: 'Explore Services',
    ctaHref: '#services',
    tag: 'Color · Balayage · Highlights',
  },
  {
    id: 3,
    image: '/images/hero3.png',
    eyebrow: 'Extension Experts',
    title: 'Elegance',
    subtitle: 'Luxury Extensions',
    description: 'Experience the finest hair extensions — Ice, Tape, and Nano ring methods for voluminous, natural-looking length.',
    cta: 'Our Services',
    ctaHref: '#services',
    tag: 'Extensions · Volume · Length',
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const progressRef = useRef(null);
  const SLIDE_DURATION = 6000;

  const goTo = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setProgress(0);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 600);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, goTo]);

  // Auto-play & progress bar
  useEffect(() => {
    setProgress(0);
    let start = null;

    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const pct = Math.min((elapsed / SLIDE_DURATION) * 100, 100);
      setProgress(pct);
      if (elapsed < SLIDE_DURATION) {
        progressRef.current = requestAnimationFrame(tick);
      }
    };

    progressRef.current = requestAnimationFrame(tick);
    intervalRef.current = setTimeout(next, SLIDE_DURATION);

    return () => {
      cancelAnimationFrame(progressRef.current);
      clearTimeout(intervalRef.current);
    };
  }, [current, next]);

  const slide = slides[current];

  return (
    <section className={styles.hero} id="home" aria-label="Hero slideshow">
      {/* Background images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
          aria-hidden={i !== current}
        >
          <Image
            src={s.image}
            alt={s.title}
            fill
            priority={i === 0}
            quality={90}
            className={styles.slideImg}
            sizes="100vw"
          />
          <div className={styles.slideOverlay} />
        </div>
      ))}

      {/* Content */}
      <div className={styles.content}>
        <div className={`${styles.textBlock} ${isAnimating ? styles.exit : styles.enter}`}>
          <span className={styles.eyebrow}>{slide.eyebrow}</span>

          <h1 className={styles.title}>
            {slide.title}
            <em className={styles.titleItalic}> — {slide.subtitle}</em>
          </h1>

          <div className={styles.divider} />

          <p className={styles.description}>{slide.description}</p>

          <div className={styles.ctaGroup}>
            <a
              href={slide.ctaHref}
              className={styles.ctaBtn}
              target={slide.ctaHref.startsWith('http') ? '_blank' : undefined}
              rel={slide.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
              id={`hero-cta-${slide.id}`}
            >
              <span>{slide.cta}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <span className={styles.slideTag}>{slide.tag}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator} aria-hidden="true">
          <span className={styles.scrollLine} />
          <span className={styles.scrollText}>Scroll</span>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        className={`${styles.arrow} ${styles.arrowPrev}`}
        onClick={prev}
        aria-label="Previous slide"
        id="hero-prev"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        className={`${styles.arrow} ${styles.arrowNext}`}
        onClick={next}
        aria-label="Next slide"
        id="hero-next"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dots */}
      <div className={styles.dots} role="tablist" aria-label="Slide navigation">
        {slides.map((s, i) => (
          <button
            key={s.id}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-selected={i === current}
            role="tab"
            id={`hero-dot-${i}`}
          >
            {i === current && (
              <span
                className={styles.dotProgress}
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Slide counter */}
      <div className={styles.counter} aria-hidden="true">
        <span className={styles.counterCurrent}>
          {String(current + 1).padStart(2, '0')}
        </span>
        <span className={styles.counterSep} />
        <span className={styles.counterTotal}>
          {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
