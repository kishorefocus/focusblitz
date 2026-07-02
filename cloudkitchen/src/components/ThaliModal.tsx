'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, HardDrive, ShieldCheck, Plus } from 'lucide-react';

export const ThaliModal: React.FC = () => {
  const { selectedItemForDetail, setSelectedItemForDetail, isOrderModalOpen, setIsOrderModalOpen, addToCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!selectedItemForDetail) return null;
  const item = selectedItemForDetail;

  const handleClose = () => {
    setIsOrderModalOpen(false);
    setSelectedItemForDetail(null);
  };
  const handleAdd = () => { addToCart(item); handleClose(); };

  return (
    <AnimatePresence>
      {isOrderModalOpen && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 80, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(6px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 24 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            style={{
              position: 'relative', zIndex: 1,
              width: '100%', maxWidth: '960px',
              background: '#111111',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '10px',
              display: 'flex', flexDirection: 'row',
              overflow: 'hidden',
              boxShadow: '0 24px 80px rgba(0,0,0,0.8), 0 0 60px rgba(255,84,0,0.06)',
              maxHeight: '90vh',
            }}
          >
            {/* Left — Visual Node Showcase */}
            <div style={{
              width: '45%', minHeight: '480px',
              background: '#0a0a0a',
              borderRight: '1px solid rgba(255,255,255,0.06)',
              position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
              overflow: 'hidden',
            }}>
              {/* Actual Image of the Card */}
              <motion.img 
                src={item.image} 
                alt={item.name}
                initial={{ scale: 1.08, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.45 }}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />

              {/* Gradient dark overlays */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.1) 40%, rgba(10,10,10,0.1) 60%, rgba(10,10,10,0.8) 100%)',
                pointerEvents: 'none',
              }} />

              {/* Holographic grid and scanline animations */}
              <div className="bg-grid" style={{ position: 'absolute', inset: 0, opacity: 0.12, pointerEvents: 'none' }} />
              <div className="scanline-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.35, pointerEvents: 'none' }} />
              <div className="scan-beam" style={{ position: 'absolute', inset: 0, opacity: 0.5, pointerEvents: 'none' }} />

              {/* Diagnostic Label */}
              <div style={{
                position: 'absolute', bottom: '16px', left: '50%', transform: 'translateX(-50%)',
                fontFamily: 'var(--font-roboto-mono), monospace',
                fontSize: '8px', color: '#ff5400',
                letterSpacing: '0.25em', textTransform: 'uppercase',
                background: 'rgba(10,10,10,0.85)', padding: '5px 12px', borderRadius: '3px',
                border: '1px solid rgba(255,84,0,0.35)',
                boxShadow: '0 0 10px rgba(255,84,0,0.25)',
                whiteSpace: 'nowrap',
                zIndex: 10,
              }}>
                VISUALIZATION_NODE // SYNCED
              </div>
            </div>

            {/* Right — Details */}
            <div style={{
              flex: 1, padding: '32px', display: 'flex', flexDirection: 'column',
              justifyContent: 'space-between', overflowY: 'auto', maxHeight: '90vh',
            }}>
              <div>
                {/* Status row */}
                <div style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  fontFamily: 'var(--font-roboto-mono), monospace',
                  fontSize: '9px', color: 'rgba(255,255,255,0.3)',
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  marginBottom: '16px',
                }}>
                  <span style={{ color: '#ff5400' }}>SYS_CORE: FLAVOUR_TRAILS.ENG_v1.0</span>
                  <span style={{ color: item.isAvailable ? '#22c55e' : '#ef4444' }}>
                    {item.isAvailable ? '● AVAILABLE' : '● UNAVAILABLE'}
                  </span>
                </div>

                {/* Name */}
                <h2 style={{
                  fontFamily: '"Barlow Condensed", "Orbitron", sans-serif',
                  fontWeight: 900, fontSize: '32px',
                  textTransform: 'uppercase', color: '#ffffff',
                  letterSpacing: '0.02em', margin: '0 0 6px',
                  paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}>
                  {item.name}
                </h2>

                {/* Description */}
                <p style={{
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: '13px', color: 'rgba(255,255,255,0.55)',
                  lineHeight: '1.65', margin: '16px 0 24px',
                }}>
                  {item.description}
                </p>

                {/* Specs grid */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  {/* Inclusions */}
                  <div style={{
                    padding: '16px',
                    background: '#141414',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '6px',
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      fontFamily: 'var(--font-roboto-mono), monospace',
                      fontSize: '9px', color: '#ff5400',
                      textTransform: 'uppercase', letterSpacing: '0.12em',
                      marginBottom: '12px',
                    }}>
                      <HardDrive size={11} /> Components
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {item.inclusions.map((inc, i) => (
                        <li key={i} style={{
                          display: 'flex', alignItems: 'flex-start', gap: '8px',
                          fontFamily: 'var(--font-roboto-mono), monospace',
                          fontSize: '10px', color: 'rgba(255,255,255,0.65)',
                        }}>
                          <span style={{ color: '#ff5400', flexShrink: 0, marginTop: '2px' }}>›</span>
                          {inc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Diagnostics */}
                  <div style={{
                    padding: '16px',
                    background: '#141414',
                    border: '1px solid rgba(255,255,255,0.06)',
                    borderRadius: '6px',
                  }}>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '6px',
                      fontFamily: 'var(--font-roboto-mono), monospace',
                      fontSize: '9px', color: '#ff5400',
                      textTransform: 'uppercase', letterSpacing: '0.12em',
                      marginBottom: '12px',
                    }}>
                      <ShieldCheck size={11} /> Diagnostics
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      {item.specifications.map((spec, i) => (
                        <div key={i} style={{
                          display: 'flex', justifyContent: 'space-between',
                          paddingBottom: '6px',
                          borderBottom: '1px solid rgba(255,255,255,0.05)',
                          fontFamily: 'var(--font-roboto-mono), monospace',
                          fontSize: '9px',
                        }}>
                          <span style={{ color: 'rgba(255,255,255,0.35)' }}>{spec.label}</span>
                          <span style={{ color: '#ffffff' }}>{spec.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                marginTop: '24px', paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                gap: '16px',
              }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-roboto-mono), monospace', fontSize: '9px', color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', display: 'block', marginBottom: '2px' }}>Total Cost</span>
                  <span style={{
                    fontFamily: '"Barlow Condensed", "Orbitron", sans-serif',
                    fontWeight: 900, fontSize: '32px',
                    color: '#ff5400',
                    textShadow: '0 0 16px rgba(255,84,0,0.5)',
                  }}>₹{item.price}</span>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={handleClose} className="btn-ghost" style={{ padding: '12px 20px', fontSize: '11px', borderRadius: '4px' }}>
                    CANCEL
                  </button>
                  <motion.button
                    whileTap={{ scale: 0.95 }}
                    disabled={!item.isAvailable}
                    onClick={handleAdd}
                    className="btn-orange"
                    style={{
                      padding: '12px 24px', fontSize: '11px', borderRadius: '4px',
                      display: 'flex', alignItems: 'center', gap: '6px',
                      opacity: item.isAvailable ? 1 : 0.4,
                      cursor: item.isAvailable ? 'pointer' : 'not-allowed',
                    }}
                  >
                    <Plus size={13} /> ADD TO MANIFEST
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Close button */}
            <button
              onClick={handleClose}
              style={{
                position: 'absolute', top: '16px', right: '16px',
                background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '4px', color: 'rgba(255,255,255,0.5)',
                cursor: 'pointer', padding: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#ff5400'; (e.currentTarget as HTMLElement).style.color = '#ff5400'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
            >
              <X size={14} />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
