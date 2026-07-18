import styles from './Services.module.scss';

const services = [
  {
    id: 1,
    icon: '🎨',
    category: 'Color',
    name: 'Full Hair Color',
    description: 'Complete single-process color from root to tip. Custom-blended shades for perfect, all-over vibrancy.',
    price: 'From AED 250',
    badge: 'Popular',
  },
  {
    id: 2,
    icon: '✦',
    category: 'Color',
    name: 'Balayage & Ombré',
    description: 'Hand-painted highlights for a natural sun-kissed effect. Soft gradient transitions with dimensional depth.',
    price: 'From AED 650',
    badge: 'Best Seller',
  },
  {
    id: 3,
    icon: '💎',
    category: 'Treatment',
    name: 'Keratin Treatment',
    description: 'Brazilian keratin smoothing treatment. Eliminates frizz, adds intense shine, and reduces styling time.',
    price: 'From AED 850',
    badge: null,
  },
  {
    id: 4,
    icon: '❄️',
    category: 'Extensions',
    name: 'Ice / Tape Extensions',
    description: 'Premium tape-in hair extensions for instant length and volume. Seamless blend with your natural hair.',
    price: 'From AED 1,200',
    badge: 'Luxury',
  },
  {
    id: 5,
    icon: '✂️',
    category: 'Cut & Style',
    name: 'Precision Cut & Blowout',
    description: 'Expert cut tailored to your face shape and lifestyle, finished with a luxurious professional blowout.',
    price: 'From AED 200',
    badge: null,
  },
  {
    id: 6,
    icon: '✨',
    category: 'Highlights',
    name: 'Foil Highlights',
    description: 'Classic foil highlighting technique for brilliant, multi-dimensional color with stunning luminosity.',
    price: 'From AED 450',
    badge: null,
  },
  {
    id: 7,
    icon: '🌿',
    category: 'Treatment',
    name: 'Deep Conditioning Mask',
    description: 'Intensive repair and hydration treatment for damaged, dry, or chemically processed hair.',
    price: 'From AED 180',
    badge: null,
  },
  {
    id: 8,
    icon: '👑',
    category: 'Extensions',
    name: 'Nano Ring Extensions',
    description: 'Micro-ring strand-by-strand extensions. The most discreet, long-lasting, heat-free extension method.',
    price: 'From AED 1,800',
    badge: 'Premium',
  },
];

export default function Services() {
  return (
    <section className={styles.services} id="services" aria-labelledby="services-heading">
      {/* Section Header */}
      <div className={styles.header}>
        <span className="section-label">What We Offer</span>
        <h2 className={styles.title} id="services-heading">
          Our <em>Signature</em> Services
        </h2>
        <div className="gold-divider centered" />
        <p className={styles.subtitle}>
          Every service at Zang Beauty Dubai is a curated experience,
          delivered by master stylists using only the finest professional products.
        </p>
      </div>

      {/* Services Grid */}
      <div className={styles.grid}>
        {services.map((service) => (
          <article key={service.id} className={styles.card} aria-label={service.name}>
            {service.badge && (
              <span className={styles.badge}>{service.badge}</span>
            )}
            <div className={styles.cardTop}>
              <span className={styles.icon} aria-hidden="true">{service.icon}</span>
              <span className={styles.category}>{service.category}</span>
            </div>

            <div className={styles.cardBody}>
              <h3 className={styles.cardName}>{service.name}</h3>
              <p className={styles.cardDesc}>{service.description}</p>
            </div>

            <div className={styles.cardBottom}>
              <span className={styles.price}>{service.price}</span>
              <a
                href="https://wa.me/971588989220"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookBtn}
                id={`service-book-${service.id}`}
                aria-label={`Book ${service.name}`}
              >
                Book Now
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </a>
            </div>

            <div className={styles.cardHoverLine} aria-hidden="true" />
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className={styles.footer}>
        <p className={styles.footerText}>
          Can&apos;t find what you&apos;re looking for? We offer bespoke consultations.
        </p>
        <a
          href="#contact"
          className="btn-outline"
          id="services-contact-cta"
        >
          Request a Consultation
        </a>
      </div>
    </section>
  );
}
