'use client';

import React, { useState } from 'react';
import { CartProvider } from '../context/CartContext';
import { Hero } from '../components/Hero';
import { HolographicMenu } from '../components/HolographicMenu';
import { ThaliModal } from '../components/ThaliModal';
import { SmartCart } from '../components/SmartCart';
import { motion, useScroll, useSpring } from 'framer-motion';

/* ─── SECTION: HOW IT WORKS ──────────────────────────────────────────── */
const steps = [
  {
    code: 'PHASE_01',
    title: 'Source',
    desc: 'Drone-synchronized delivery to your coordinates in under 35 minutes, anywhere in the Whitefield & Laughing Waters radius.',
  },
  {
    code: 'PHASE_02',
    title: 'Craft',
    desc: 'Proprietary spice blends cold-pressed in-house. Authentic Karnataka masala formulas, simmered to perfection.',
  },
  {
    code: 'PHASE_03',
    title: 'Pack',
    desc: 'Thermal-sealed containers maintain temperature integrity across the full delivery cycle.',
  },
  {
    code: 'PHASE_04',
    title: 'Deliver',
    desc: 'Drone-synchronized delivery to your coordinates in under 35 minutes, anywhere in the Whitefield & Laughing Waters radius.',
  },
];

/* ─── SECTION: FAQ ───────────────────────────────────────────────────── */
const faqs = [
  {
    q: 'What is the delivery radius?',
    a: 'We cover a 15km radius from our Whitefield node. Standard ETA is 30–45 minutes depending on order volume.',
  },
  {
    q: 'Can I pre-schedule an order?',
    a: 'Yes — orders can be pre-scheduled up to 48 hours in advance. Set your delivery window during checkout.',
  },
  {
    q: 'Are the recipes authentic?',
    a: 'Absolutely. Our masala formulas are multi-generational Gujarati and Leetu\'s recipes, precision-replicated with modern kitchen tech.',
  },
  {
    q: 'What payment methods are accepted?',
    a: 'Cash on delivery, UPI (GPay, PhonePe, Paytm), and all major debit/credit cards. All digital payments are encrypted.',
  },
];

const FaqItem: React.FC<{ q: string; a: string; index: number }> = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.4 }}
      style={{
        border: '1px solid',
        borderColor: open ? 'rgba(255,84,0,0.3)' : 'rgba(255,255,255,0.06)',
        borderRadius: '6px',
        overflow: 'hidden',
        transition: 'border-color 0.25s',
        background: open ? 'rgba(255,84,0,0.03)' : '#111111',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', padding: '18px 20px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: 'none', border: 'none', cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontWeight: 700, fontSize: '16px',
          textTransform: 'uppercase', letterSpacing: '0.04em',
          color: open ? '#ff5400' : '#ffffff',
          transition: 'color 0.2s',
        }}>
          {q}
        </span>
        <span style={{
          color: '#ff5400', fontSize: '18px', fontWeight: 300,
          transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
          transition: 'transform 0.25s', flexShrink: 0, marginLeft: '16px',
        }}>
          +
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ overflow: 'hidden' }}
      >
        <div style={{
          padding: '0 20px 18px',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '13px', color: 'rgba(255,255,255,0.55)',
          lineHeight: '1.65',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          paddingTop: '14px',
        }}>
          {a}
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ─── SECTION: OPERATORS / CHEFS ───────────────────────────────────── */
const chefs = [
  {
    id: '01',
    name: 'Chef Harshil Shah',
    role: 'Lead Khaman Alchemist',
    bio: 'Trained under the legendary Farsan masters of Surat. 15+ years formulating the perfect spongy texture and sweet-sour balance.',
    stats: [
      { k: 'KHAMAN_XP', v: 'LV.99' },
      { k: 'SPONGE_CTRL', v: 'OPTIMAL' },
      { k: 'FARSAN', v: '96%' },
    ],
  },
  {
    id: '02',
    name: 'Chef Jignesh',
    role: 'Chaat Master Engineer',
    bio: 'Expert in the crunch dynamics of bhel puri, tamarind viscosity, and high-temp vada pav toasting. Zero-compromise on spice integrity.',
    stats: [
      { k: 'VADA_PAV_XP', v: 'LV.92' },
      { k: 'CHAAT_RATIO', v: 'ELITE' },
      { k: 'SPEED', v: '98%' },
    ],
  },
];

/* ─── MAIN PAGE ──────────────────────────────────────────────────────── */
export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <CartProvider>
      {/* Scroll progress bar */}
      <motion.div
        style={{
          position: 'fixed', top: 0, left: 0, right: 0,
          height: '3px',
          background: '#ff5400',
          transformOrigin: 'left',
          scaleX,
          zIndex: 100,
          boxShadow: '0 0 10px rgba(255,84,0,0.7)',
        }}
      />

      {/* ── NAVBAR ── */}
      <header style={{
        position: 'sticky', top: 0, zIndex: 60,
        background: 'rgba(10,10,10,0.92)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '0 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: '60px',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '34px', height: '34px', background: '#ff5400',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '4px',
            boxShadow: '0 0 12px rgba(255,84,0,0.4)',
          }}>
            <span style={{
              fontFamily: '"Barlow Condensed", "Orbitron", sans-serif',
              fontWeight: 900, fontSize: '15px', color: '#000',
            }}>LK</span>
          </div>
          <span style={{
            fontFamily: '"Barlow Condensed", "Orbitron", sans-serif',
            fontWeight: 800, fontSize: '14px',
            letterSpacing: '0.15em', color: '#ffffff',
            textTransform: 'uppercase',
          }}>
            LEETU'S KITCHEN // CLOUD KITCHEN
          </span>
        </div>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: '36px' }}>
          {['MENU', 'ABOUT', 'CONTACT'].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 600, fontSize: '21px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ff5400'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Status pill */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          padding: '6px 14px',
          border: '1px solid rgba(255,84,0,0.35)',
          borderRadius: '20px',
          background: 'rgba(255,84,0,0.05)',
          fontFamily: 'var(--font-roboto-mono), monospace',
          fontSize: '10px', fontWeight: 700,
          color: '#ff5400', letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}>
          <span style={{
            width: '7px', height: '7px', borderRadius: '50%',
            background: '#22c55e',
            boxShadow: '0 0 6px rgba(34,197,94,0.8)',
            animation: 'badge-pulse 1.8s ease-in-out infinite',
          }} />
          ONLINE • BLR
        </div>
      </header>

      {/* ── HERO ── */}
      <Hero />

      {/* ── MENU ── */}
      <HolographicMenu />

      {/* ── HOW IT WORKS ── */}
      <section id="about" style={{
        background: '#0a0a0a',
        padding: '80px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5, zIndex: 0 }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '56px', textAlign: 'center' }}
          >
            <p className="section-label" style={{ marginBottom: '10px' }}>SYSTEM_WORKFLOW // PIPELINE</p>
            <h2 className="section-title">How It Works</h2>
            <div style={{
              width: '48px', height: '2px', background: '#ff5400',
              margin: '16px auto 0',
              boxShadow: '0 0 10px rgba(255,84,0,0.6)',
            }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px' }}>
            {steps.map((s, i) => (
              <motion.div
                key={s.code}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ y: -6 }}
                style={{
                  padding: '28px 24px',
                  background: '#111111',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
                onHoverStart={(e) => {
                  (e.target as HTMLElement).style.borderColor = 'rgba(255,84,0,0.3)';
                }}
                onHoverEnd={(e) => {
                  (e.target as HTMLElement).style.borderColor = 'rgba(255,255,255,0.06)';
                }}
              >
                {/* Top accent line */}
                <div style={{
                  position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
                  background: 'linear-gradient(90deg, #ff5400, transparent)',
                  opacity: 0.6,
                }} />
                <span style={{
                  fontFamily: 'var(--font-roboto-mono), monospace',
                  fontSize: '9px', color: '#ff5400',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  display: 'block', marginBottom: '8px',
                }}>{s.code}</span>
                <h3 style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 800, fontSize: '22px',
                  textTransform: 'uppercase', color: '#ffffff',
                  margin: '0 0 10px',
                }}>{s.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '12px', color: 'rgba(255,255,255,0.45)',
                  lineHeight: '1.6', margin: 0,
                }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPERATORS (CHEFS) ── */}
      <section id="operators" style={{
        background: '#111111',
        padding: '80px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '48px', textAlign: 'center' }}
          >
            <p className="section-label" style={{ marginBottom: '10px' }}>CULINARY_ENGINEERS // OPERATORS</p>
            <h2 className="section-title">The Grid Operators</h2>
            <div style={{ width: '48px', height: '2px', background: '#ff5400', margin: '16px auto 0', boxShadow: '0 0 10px rgba(255,84,0,0.6)' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '24px' }}>
            {chefs.map((chef, i) => (
              <motion.div
                key={chef.id}
                initial={{ opacity: 0, x: i === 0 ? -24 : 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                style={{
                  padding: '28px',
                  background: '#141414',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '8px',
                  position: 'relative', overflow: 'hidden',
                }}
              >
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '100px', height: '100px',
                  background: 'radial-gradient(circle at top right, rgba(255,84,0,0.06), transparent 70%)',
                  pointerEvents: 'none',
                }} />
                <p style={{
                  fontFamily: 'var(--font-roboto-mono), monospace',
                  fontSize: '9px', color: '#ff5400',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  margin: '0 0 8px',
                }}>ENGINEER_PROFILE // {chef.id}</p>
                <h3 style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 900, fontSize: '26px',
                  color: '#ffffff', textTransform: 'uppercase',
                  margin: '0 0 4px', letterSpacing: '0.03em',
                }}>{chef.name}</h3>
                <p style={{
                  fontFamily: 'var(--font-roboto-mono), monospace',
                  fontSize: '10px', color: '#ff5400',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  margin: '0 0 14px',
                }}>{chef.role}</p>
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '12px', color: 'rgba(255,255,255,0.5)',
                  lineHeight: '1.65', margin: '0 0 20px',
                }}>{chef.bio}</p>
                <div style={{
                  display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px',
                  paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)',
                }}>
                  {chef.stats.map(({ k, v }) => (
                    <div key={k} style={{
                      padding: '8px',
                      background: '#0a0a0a',
                      border: '1px solid rgba(255,255,255,0.05)',
                      borderRadius: '4px', textAlign: 'center',
                    }}>
                      <span style={{ fontFamily: 'var(--font-roboto-mono), monospace', fontSize: '8px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'block', marginBottom: '3px' }}>{k}</span>
                      <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>{v}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{
        background: '#0a0a0a',
        padding: '80px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '48px', textAlign: 'center' }}
          >
            <p className="section-label" style={{ marginBottom: '10px' }}>SYSTEM_DIAGNOSTICS // FAQ</p>
            <h2 className="section-title">Frequently Asked</h2>
            <div style={{ width: '48px', height: '2px', background: '#ff5400', margin: '16px auto 0', boxShadow: '0 0 10px rgba(255,84,0,0.6)' }} />
          </motion.div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {faqs.map((f, i) => <FaqItem key={i} q={f.q} a={f.a} index={i} />)}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{
        background: '#111111',
        padding: '80px 60px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '48px', textAlign: 'center' }}
          >
            <p className="section-label" style={{ marginBottom: '10px' }}>// NODE_ADDRESS</p>
            <h2 className="section-title">Find Us</h2>
            <div style={{ width: '48px', height: '2px', background: '#ff5400', margin: '16px auto 0', boxShadow: '0 0 10px rgba(255,84,0,0.6)' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { label: '📍 ADDRESS', lines: ['Flat No. 104, Greenview Apartment,', 'Laughing Waters, 2nd Main Rd,', 'Whitefield, Bengaluru,', 'Karnataka 560066'] },
              { label: '🕒 HOURS', lines: ['11:00 — 23:00 IST', 'Mon – Sun', 'All major holidays'] },
              { label: '📡 COMMS', lines: ['+91 9999999999', 'WhatsApp Order', 'Also on Zomato & Swiggy'] },
              { label: '// STATUS', lines: ['● Kitchen ONLINE', '⚡ Delivery: ~35min', '🔥 Orders flowing'] },
            ].map((col) => (
              <motion.div
                key={col.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
              >
                <span style={{
                  fontFamily: 'var(--font-roboto-mono), monospace',
                  fontSize: '9px', fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase',
                  color: '#ff5400',
                }}>{col.label}</span>
                {col.lines.map((line, i) => (
                  <span key={i} style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '13px', color: 'rgba(255,255,255,0.6)',
                    lineHeight: '1.5',
                  }}>{line}</span>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        background: '#070707',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        padding: '32px 60px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        flexWrap: 'wrap', gap: '16px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{
            width: '28px', height: '28px', background: '#ff5400',
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '3px',
          }}>
            <span style={{ fontFamily: '"Barlow Condensed", sans-serif', fontWeight: 900, fontSize: '12px', color: '#000' }}>LK</span>
          </div>
          <span style={{
            fontFamily: 'var(--font-roboto-mono), monospace',
            fontSize: '10px', color: 'rgba(255,255,255,0.3)',
            letterSpacing: '0.05em',
          }}>
            © {new Date().getFullYear()} LEETU'S KITCHEN CLOUD KITCHEN [NODE_066]
          </span>
        </div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#ff5400', boxShadow: '0 0 6px rgba(255,84,0,0.8)' }} />
          <span style={{
            fontFamily: 'var(--font-roboto-mono), monospace',
            fontSize: '9px', color: '#ff5400',
            letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            12.9719° N, 77.7512° E // 560066
          </span>
        </div>
      </footer>

      {/* ── FLOATING COMPONENTS ── */}
      <SmartCart />
      <ThaliModal />
    </CartProvider>
  );
}
