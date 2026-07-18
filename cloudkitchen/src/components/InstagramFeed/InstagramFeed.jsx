import Image from 'next/image';
import styles from './InstagramFeed.module.scss';

// Mock Instagram feed items (mix of photos and "reels")
const posts = [
  {
    id: 1,
    type: 'reel',
    image: '/images/insta1.png',
    likes: '2.4K',
    comments: '87',
    caption: 'Stunning transformation 🌟 Full balayage + blowout at Desert Wave Ladies Salon Dubai 💫',
    duration: '0:45',
    views: '18.2K',
  },
  {
    id: 2,
    type: 'photo',
    image: '/images/hero1.png',
    likes: '1.1K',
    comments: '42',
    caption: 'Behind the chair ✂️ Our master stylist working their magic',
  },
  {
    id: 3,
    type: 'reel',
    image: '/images/hero2.png',
    likes: '3.7K',
    comments: '124',
    caption: 'Keratin transformation before & after 🤩 Book your appointment today!',
    duration: '1:12',
    views: '31.5K',
  },
  {
    id: 4,
    type: 'photo',
    image: '/images/hero3.png',
    likes: '892',
    comments: '29',
    caption: 'Tape extensions — seamless, natural, gorgeous 💁‍♀️ #HairExtensions',
  },
  {
    id: 5,
    type: 'photo',
    image: '/images/product1.png',
    likes: '654',
    comments: '18',
    caption: 'Shop our premium haircare collection in-salon & online 💛',
  },
  {
    id: 6,
    type: 'reel',
    image: '/images/about.png',
    likes: '4.2K',
    comments: '196',
    caption: 'A peek inside Desert Wave Ladies Salon Dubai — Dubai\'s beauty destination ✨',
    duration: '0:30',
    views: '42.8K',
  },
];

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ReelIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
    <line x1="7" y1="2" x2="7" y2="22" />
    <line x1="17" y1="2" x2="17" y2="22" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <line x1="2" y1="7" x2="7" y2="7" />
    <line x1="2" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="22" y2="17" />
    <line x1="17" y1="7" x2="22" y2="7" />
  </svg>
);

export default function InstagramFeed() {
  return (
    <section className={styles.section} id="instagram" aria-labelledby="instagram-heading">
      {/* Header */}
      <div className={styles.header}>
        <span className="section-label">Follow the Journey</span>
        <h2 className={styles.title} id="instagram-heading">
          @desertwaveladiessalon
        </h2>
        <div className="gold-divider centered" />
        <p className={styles.subtitle}>
          Join our community of beauty lovers on Instagram.
          Discover transformations, tips, and behind-the-scenes magic.
        </p>

        <a
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.followBtn}
          id="instagram-follow"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
          Follow Us
        </a>
      </div>

      {/* Feed Grid */}
      <div className={styles.grid}>
        {posts.map((post, index) => (
          <a
            key={post.id}
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.post} ${post.type === 'reel' ? styles.postReel : ''} ${index === 0 || index === 5 ? styles.postFeatured : ''}`}
            aria-label={post.caption}
            id={`instagram-post-${post.id}`}
          >
            {/* Image */}
            <div className={styles.postImageWrap}>
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className={styles.postImage}
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Reel Play Overlay */}
              {post.type === 'reel' && (
                <div className={styles.reelOverlay}>
                  <div className={styles.playBtn} aria-hidden="true">
                    <PlayIcon />
                  </div>
                  <div className={styles.reelMeta}>
                    <span className={styles.reelIcon}><ReelIcon /></span>
                    <span className={styles.reelViews}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                      {post.views}
                    </span>
                    <span className={styles.reelDuration}>{post.duration}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Hover Overlay */}
            <div className={styles.hoverOverlay} aria-hidden="true">
              <div className={styles.hoverContent}>
                <div className={styles.hoverStats}>
                  <span className={styles.stat}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                    {post.likes}
                  </span>
                  <span className={styles.stat}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                    {post.comments}
                  </span>
                </div>
                {post.type === 'reel' && (
                  <span className={styles.hoverReel}>
                    Reel · {post.views} views
                  </span>
                )}
                <p className={styles.hoverCaption}>{post.caption}</p>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Stats Bar */}
      <div className={styles.statsBar}>
        {[
          { label: 'Followers', value: '28.5K' },
          { label: 'Posts', value: '1,240' },
          { label: 'Avg. Likes', value: '2.1K' },
          { label: 'Total Reel Views', value: '1.2M' },
        ].map((s) => (
          <div key={s.label} className={styles.statItem}>
            <span className={styles.statValue}>{s.value}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
