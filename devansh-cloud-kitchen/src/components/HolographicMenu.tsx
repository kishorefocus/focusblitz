'use client';

import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { MENU_CATEGORIES, MENU_ITEMS, MenuItem } from '../data/menu';
import { Search, Plus } from 'lucide-react';

/* ─── CONSTANTS ──────────────────────────────────────────────────────── */

const CAT_META: Record<string, { code: string; label: string }> = {
  'classic-thalis': { code: 'CT-01', label: 'CLASSIC THALIS' },
  'meal-combos': { code: 'MC-02', label: 'MEAL COMBOS' },
  'seafood-specials': { code: 'SF-03', label: 'SEAFOOD SPECIALS' },
};

const ITEM_BADGES: Record<string, { text: string; bg: string; color: string }> = {
  'veg-thali': { text: 'BESTSELLER', bg: '#ff5400', color: '#000' },
  'non-veg-thali': { text: 'SPICY', bg: '#f59e0b', color: '#000' },
  'veg-meal': { text: 'HOT', bg: '#ef4444', color: '#fff' },
  'non-veg-meal': { text: 'POPULAR', bg: '#8b5cf6', color: '#fff' },
  'fish-thali': { text: 'SIGNATURE', bg: '#ff5400', color: '#000' },
  'mini-fish-thali': { text: 'HOT', bg: '#ef4444', color: '#fff' },
};

const LEVELS: Record<string, number> = {
  'veg-thali': 3, 'non-veg-thali': 4, 'veg-meal': 3,
  'non-veg-meal': 4, 'fish-thali': 4, 'mini-fish-thali': 2,
};

const getCalories = (item: MenuItem) =>
  item.specifications.find((s) => s.label === 'ENERGY_OUTPUT')?.value ?? '800 kcal';

const getItemCode = (category: string, index: number) => {
  const map: Record<string, string> = {
    'classic-thalis': 'CT', 'meal-combos': 'MC', 'seafood-specials': 'SF',
  };
  return `#${map[category] ?? 'DA'}-${index + 1}`;
};

/* ─── LEVEL BARS ─────────────────────────────────────────────────────── */
const LevelBars: React.FC<{ filled: number }> = ({ filled }) => (
  <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
    {Array.from({ length: 5 }).map((_, i) => (
      <div
        key={i}
        style={{
          width: '18px',
          height: '3px',
          borderRadius: '2px',
          background: i < filled ? '#ff5400' : 'rgba(255,255,255,0.1)',
        }}
      />
    ))}
  </div>
);

/* ─── MENU CARD ──────────────────────────────────────────────────────── */
const MenuCard: React.FC<{
  item: MenuItem;
  index: number;
  onAdd: (item: MenuItem) => void;
  onOpen: (item: MenuItem) => void;
}> = ({ item, index, onAdd, onOpen }) => {
  const [hovered, setHovered] = useState(false);
  const badge = ITEM_BADGES[item.id] ?? { text: 'BESTSELLER', bg: '#ff5400', color: '#000' };
  const level = LEVELS[item.id] ?? 3;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.25, delay: index * 0.04 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        background: '#141414',
        border: `1px solid ${hovered ? 'rgba(255,84,0,0.35)' : 'rgba(255,255,255,0.05)'}`,
        borderRadius: '8px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        transform: hovered ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'border-color 0.25s, transform 0.25s, box-shadow 0.25s',
        boxShadow: hovered
          ? '0 8px 30px rgba(255,84,0,0.1), 0 0 0 1px rgba(255,84,0,0.12)'
          : '0 2px 8px rgba(0,0,0,0.4)',
        cursor: 'default',
        // fixed card width matching screenshot proportions
        minWidth: 0,
      }}
    >
      {/* ── IMAGE AREA ── */}
      <div
        onClick={() => onOpen(item)}
        style={{
          position: 'relative',
          height: '195px',
          overflow: 'hidden',
          flexShrink: 0,
          cursor: 'pointer',
        }}
      >
        <img
          src={item.image}
          alt={item.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            transition: 'transform 0.5s ease',
          }}
        />

        {/* Dark gradient from bottom */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(20,20,20,0.92) 100%)',
          }}
        />

        {/* BADGE — top left, matches screenshot exactly */}
        <span
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            background: badge.bg,
            color: badge.color,
            fontFamily: 'var(--font-roboto-mono), monospace',
            fontSize: '8px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            padding: '3px 7px',
            borderRadius: '2px',
          }}
        >
          {badge.text}
        </span>

        {/* Item code — top right */}
        <span
          style={{
            position: 'absolute',
            top: '10px',
            right: '10px',
            fontFamily: 'var(--font-roboto-mono), monospace',
            fontSize: '8px',
            color: 'rgba(255,84,0,0.85)',
            fontWeight: 700,
            letterSpacing: '0.05em',
          }}
        >
          {getItemCode(item.category, index)}
        </span>

        {/* Orange bottom line on hover */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #ff5400 50%, transparent)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />
      </div>

      {/* ── TEXT BODY ── */}
      <div
        style={{
          padding: '14px 14px 12px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          gap: '8px',
        }}
      >
        {/* Item name */}
        <h3
          onClick={() => onOpen(item)}
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 700,
            fontSize: '17px',
            textTransform: 'uppercase',
            letterSpacing: '0.02em',
            color: hovered ? '#ff5400' : '#ffffff',
            transition: 'color 0.2s',
            margin: 0,
            lineHeight: 1.15,
            cursor: 'pointer',
          }}
        >
          {item.name}
        </h3>

        {/* Description — max 2 lines */}
        <p
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '11px',
            color: 'rgba(255,255,255,0.4)',
            lineHeight: '1.5',
            margin: 0,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.description}
        </p>

        {/* Level bars + calories row — separated by faint lines */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '8px',
            paddingBottom: '8px',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <LevelBars filled={level} />
          <span
            style={{
              fontFamily: 'var(--font-roboto-mono), monospace',
              fontSize: '9px',
              color: '#ff5400',
              letterSpacing: '0.04em',
            }}
          >
            🔥 {getCalories(item)}
          </span>
        </div>

        {/* Price + Add button row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '2px',
          }}
        >
          {/* INR ₹price */}
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
            <span
              style={{
                fontFamily: 'var(--font-roboto-mono), monospace',
                fontSize: '8px',
                color: 'rgba(255,255,255,0.3)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              INR
            </span>
            <span
              style={{
                fontFamily: '"Barlow Condensed", "Orbitron", sans-serif',
                fontWeight: 800,
                fontSize: '24px',
                color: '#ffffff',
                letterSpacing: '-0.01em',
                lineHeight: 1,
              }}
            >
              ₹{item.price}
            </span>
          </div>

          {/* + Add button — orange square, matches screenshot */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            disabled={!item.isAvailable}
            onClick={() => onAdd(item)}
            style={{
              width: '34px',
              height: '34px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '4px',
              cursor: item.isAvailable ? 'pointer' : 'not-allowed',
              background: 'transparent',
              border: `1px solid ${item.isAvailable ? '#ff5400' : 'rgba(255,255,255,0.1)'}`,
              color: item.isAvailable ? '#ff5400' : 'rgba(255,255,255,0.2)',
              transition: 'background 0.2s, box-shadow 0.2s',
            }}
            onMouseEnter={(e) => {
              if (item.isAvailable) {
                (e.currentTarget as HTMLElement).style.background = '#ff5400';
                (e.currentTarget as HTMLElement).style.color = '#000';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 0 14px rgba(255,84,0,0.5)';
              }
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = 'transparent';
              (e.currentTarget as HTMLElement).style.color = item.isAvailable ? '#ff5400' : 'rgba(255,255,255,0.2)';
              (e.currentTarget as HTMLElement).style.boxShadow = 'none';
            }}
          >
            <Plus size={15} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

/* ─── MAIN COMPONENT ─────────────────────────────────────────────────── */
export const HolographicMenu: React.FC = () => {
  const { addToCart, setSelectedItemForDetail, setIsOrderModalOpen } = useCart();
  const [activeCategory, setActiveCategory] = useState<string>('classic-thalis');
  const [search, setSearch] = useState('');

  const filtered = MENU_ITEMS.filter((item) => {
    const catMatch = item.category === activeCategory;
    const q = search.toLowerCase();
    const textMatch = !q ||
      item.name.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q);
    return catMatch && textMatch;
  });

  const handleOpen = useCallback(
    (item: MenuItem) => {
      setSelectedItemForDetail(item);
      setIsOrderModalOpen(true);
    },
    [setSelectedItemForDetail, setIsOrderModalOpen]
  );

  const meta = CAT_META[activeCategory];

  return (
    <section
      id="menu"
      style={{
        background: '#0a0a0a',
        padding: '64px 48px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

        {/* ── HEADER ROW ── */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            marginBottom: '32px',
            paddingBottom: '24px',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <div>
            <p className="section-label" style={{ marginBottom: '6px' }}>
              CORE MENU // SELECT_CATEGORY → HOVER_FOR_SPECS → TAP_NODE_TO_ADD
            </p>
            <h2 className="section-title" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)' }}>
              The Menu
            </h2>
          </div>

          {/* Search field */}
          <div style={{ position: 'relative', width: '280px' }}>
            <Search
              size={12}
              style={{
                position: 'absolute',
                left: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'rgba(255,255,255,0.25)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              placeholder="search dish..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                padding: '9px 12px 9px 30px',
                background: '#111111',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '4px',
                color: '#ffffff',
                fontFamily: 'var(--font-roboto-mono), monospace',
                fontSize: '10px',
                outline: 'none',
                transition: 'border-color 0.2s',
              }}
              onFocus={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,84,0,0.45)'; }}
              onBlur={(e) => { (e.target as HTMLInputElement).style.borderColor = 'rgba(255,255,255,0.08)'; }}
            />
          </div>
        </div>

        {/* ── CATEGORY TABS ── */}
        <div
          style={{
            display: 'flex',
            gap: 0,
            borderBottom: '1px solid rgba(255,255,255,0.07)',
            marginBottom: '4px',
            overflowX: 'auto',
          }}
        >
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const cm = CAT_META[cat.id];
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setSearch(''); }}
                style={{
                  position: 'relative',
                  padding: '0 20px 16px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '4px',
                  flexShrink: 0,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-roboto-mono), monospace',
                    fontSize: '8px',
                    fontWeight: 700,
                    color: isActive ? '#ff5400' : 'rgba(255,255,255,0.22)',
                    letterSpacing: '0.1em',
                    transition: 'color 0.2s',
                  }}
                >
                  {cm.code}
                </span>
                <span
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: '12px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: isActive ? '#ffffff' : 'rgba(255,255,255,0.3)',
                    transition: 'color 0.2s',
                  }}
                >
                  {cm.label}
                </span>
                {isActive && (
                  <motion.div
                    layoutId="cat-line"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#ff5400',
                      boxShadow: '0 0 8px rgba(255,84,0,0.7)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* ── META ROW ── */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-roboto-mono), monospace',
            fontSize: '8px',
            color: 'rgba(255,255,255,0.22)',
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            marginBottom: '28px',
            marginTop: '10px',
          }}
        >
          <span>// {meta?.label} :: {filtered.length} ITEMS LOADED</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>SORT: SIGNATURE_FIRST</span>
            <span>SYNC: REALTIME</span>
          </div>
        </div>

        {/* ── CARDS GRID ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '16px',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered?.map((item, i) => (
              <MenuCard
                key={item.id}
                item={item}
                index={i}
                onAdd={addToCart}
                onOpen={handleOpen}
              />
            ))}

            {filtered.length === 0 && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{
                  gridColumn: '1 / -1',
                  textAlign: 'center',
                  padding: '60px',
                  fontFamily: 'var(--font-roboto-mono), monospace',
                  fontSize: '10px',
                  color: 'rgba(255,255,255,0.2)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                }}
              >
                // NO_ITEMS_MATCH_FILTER_CRITERIA
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
