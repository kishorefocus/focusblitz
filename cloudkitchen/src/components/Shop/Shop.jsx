'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Shop.module.scss';

const products = [
  {
    id: 1,
    name: 'Luxe Hydrating Shampoo',
    brand: 'Beauty &amp; Sense Selection',
    image: '/images/product1.png',
    price: 'AED 145',
    originalPrice: null,
    rating: 5,
    reviews: 48,
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Argan Oil Hair Elixir',
    brand: 'Beauty &amp; Sense Selection',
    image: '/images/product2.png',
    price: 'AED 189',
    originalPrice: 'AED 220',
    rating: 5,
    reviews: 63,
    badge: 'Sale',
  },
  {
    id: 3,
    name: 'Intense Repair Hair Mask',
    brand: 'Beauty &amp; Sense Selection',
    image: '/images/product3.png',
    price: 'AED 220',
    originalPrice: null,
    rating: 4,
    reviews: 37,
    badge: 'New',
  },
  {
    id: 4,
    name: 'Color Protect Conditioner',
    brand: 'Beauty &amp; Sense Selection',
    image: '/images/product1.png',
    price: 'AED 135',
    originalPrice: null,
    rating: 5,
    reviews: 29,
    badge: null,
  },
];

function StarRating({ rating, total = 5 }) {
  return (
    <div className={styles.stars} aria-label={`${rating} out of ${total} stars`}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={i < rating ? styles.starFilled : styles.starEmpty}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Shop() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  return (
    <section className={styles.shop} id="shop" aria-labelledby="shop-heading">
      {/* Header */}
      <div className={styles.header}>
        <span className="section-label">Haircare Edit</span>
        <h2 className={styles.title} id="shop-heading">
          Shop Our <em>Premium</em> Products
        </h2>
        <div className="gold-divider centered" />
        <p className={styles.subtitle}>
          Salon-quality products curated by our stylists — available for you to
          take the luxury home.
        </p>
      </div>

      {/* Product Grid */}
      <div className={styles.grid}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isWishlisted={wishlist.includes(product.id)}
            onWishlist={() => toggleWishlist(product.id)}
          />
        ))}
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <a
          href="#contact"
          className="btn-outline"
          id="shop-view-all"
        >
          View Full Collection
        </a>
      </div>
    </section>
  );
}

function ProductCard({ product, isWishlisted, onWishlist }) {
  const [hovered, setHovered] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <article
      className={`${styles.card} ${hovered ? styles.cardHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={product.name}
    >
      {/* Image Container */}
      <div className={styles.imageWrap}>
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className={styles.productImg}
          sizes="(max-width: 768px) 50vw, 25vw"
        />

        {product.badge && (
          <span className={`${styles.badge} ${styles[`badge_${product.badge.toLowerCase().replace(' ', '_')}`]}`}>
            {product.badge}
          </span>
        )}

        {/* Hover Action Icons */}
        <div className={`${styles.hoverActions} ${hovered ? styles.hoverVisible : ''}`} aria-label="Product actions">
          <button
            className={styles.actionBtn}
            title="Compare"
            id={`product-compare-${product.id}`}
            aria-label="Compare product"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="16 3 21 3 21 8" />
              <line x1="4" y1="20" x2="21" y2="3" />
              <polyline points="21 16 21 21 16 21" />
              <line x1="15" y1="15" x2="21" y2="21" />
            </svg>
            <span>Compare</span>
          </button>

          <button
            className={styles.actionBtn}
            title="Quick View"
            id={`product-quickview-${product.id}`}
            aria-label="Quick view product"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            <span>Quick View</span>
          </button>

          <button
            className={`${styles.actionBtn} ${isWishlisted ? styles.actionBtnActive : ''}`}
            title={isWishlisted ? 'Remove from Wishlist' : 'Add to Wishlist'}
            onClick={onWishlist}
            id={`product-wishlist-${product.id}`}
            aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            aria-pressed={isWishlisted}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span>{isWishlisted ? 'Wishlisted' : 'Wishlist'}</span>
          </button>

          <button
            className={`${styles.actionBtn} ${styles.orderBtn}`}
            title="Order Now"
            onClick={handleAddToCart}
            id={`product-order-${product.id}`}
            aria-label="Order this product"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
            <span>{addedToCart ? 'Added!' : 'Order Now'}</span>
          </button>
        </div>
      </div>

      {/* Card Body */}
      <div className={styles.body}>
        <span className={styles.brand}>{product.brand}</span>
        <h3 className={styles.productName}>{product.name}</h3>

        <div className={styles.ratingRow}>
          <StarRating rating={product.rating} />
          <span className={styles.reviewCount}>({product.reviews})</span>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>{product.price}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>{product.originalPrice}</span>
          )}
        </div>
      </div>
    </article>
  );
}
