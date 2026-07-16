'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, Send, ShoppingBag } from 'lucide-react';
import { useIsMobile } from '../hooks/useIsMobile';

export const SmartCart: React.FC = () => {
  const {
    cartItems, updateQuantity, removeFromCart,
    cartTotal, cartCount, clearCart,
    isCartOpen, setIsCartOpen,
  } = useCart();
  const [dispatching, setDispatching] = useState(false);
  const isMobile = useIsMobile(768);

  const packagingTax = Math.ceil(cartTotal * 0.05);
  const grandTotal = cartTotal + packagingTax;

  const handleCheckout = () => {
    setDispatching(true);
    setTimeout(() => {
      alert(
        `🚀 DELIVERY SEQUENCE INITIATED!\n\nOrder manifest compiled.\nGrand Total: ₹${grandTotal}\nNode: Koramangala, Bengaluru\n\nETA: ~35 minutes`
      );
      clearCart();
      setDispatching(false);
      setIsCartOpen(false);
    }, 1800);
  };

  return (
    <>
      {/* ── Floating round cart trigger button in the right bottom corner ── */}
      <motion.button
        onClick={() => setIsCartOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 9998,
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: '#ff5400',
          border: 'none',
          color: '#000000',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 0 20px rgba(255,84,0,0.35)',
          transition: 'box-shadow 0.2s',
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 25px rgba(255,84,0,0.6)';
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.boxShadow = '0 0 20px rgba(255,84,0,0.35)';
        }}
      >
        <ShoppingBag size={22} />
        {cartCount > 0 && (
          <motion.span
            key={cartCount}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            style={{
              position: 'absolute',
              top: '-2px',
              right: '-2px',
              minWidth: '20px',
              height: '20px',
              background: '#f59e0b', // Yellow badge
              color: '#000000',
              fontFamily: 'var(--font-roboto-mono), monospace',
              fontSize: '10px',
              fontWeight: 700,
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid #111111',
            }}
          >
            {cartCount}
          </motion.span>
        )}
      </motion.button>

      <AnimatePresence>
        {isCartOpen && (
          <motion.div
            key="cart-panel"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', damping: 28, stiffness: 240 }}
            style={{
              /* Overlaps EVERYTHING including the sticky header */
              position: 'fixed',
              top: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              width: isMobile ? '100%' : '380px',
              background: '#111111',
              borderLeft: '1px solid rgba(255,255,255,0.08)',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '-12px 0 50px rgba(0,0,0,0.7)',
            }}
          >
            {/* ── HEADER ── */}
            <div
              style={{
                padding: '16px 16px 14px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}
            >
              <div>
                {/* ● DELIVERY_QUEUE label */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    fontFamily: 'var(--font-roboto-mono), monospace',
                    fontSize: '9px',
                    color: '#ff5400',
                    textTransform: 'uppercase',
                    letterSpacing: '0.14em',
                    marginBottom: '5px',
                  }}
                >
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#ff5400',
                      boxShadow: '0 0 6px rgba(255,84,0,0.9)',
                      flexShrink: 0,
                      animation: 'badge-pulse 1.5s ease-in-out infinite',
                    }}
                  />
                  DELIVERY_QUEUE
                </div>

                {/* Order Stack title */}
                <h2
                  style={{
                    fontFamily: '"Barlow Condensed", "Orbitron", sans-serif',
                    fontWeight: 800,
                    fontSize: '22px',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    letterSpacing: '0.02em',
                    margin: 0,
                    lineHeight: 1,
                  }}
                >
                  Order Stack
                </h2>
              </div>

              {/* Close X button */}
              <button
                onClick={() => setIsCartOpen(false)}
                style={{
                  background: 'none',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  color: 'rgba(255,255,255,0.45)',
                  padding: '5px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.2s',
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,84,0,0.5)';
                  (e.currentTarget as HTMLElement).style.color = '#ff5400';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)';
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)';
                }}
              >
                <X size={14} />
              </button>
            </div>

            {/* ── ITEMS LIST ── */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '12px' }}>
              <AnimatePresence initial={false}>
                {cartItems.length === 0 ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '160px',
                      gap: '10px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-roboto-mono), monospace',
                        fontSize: '9px',
                        color: 'rgba(255,255,255,0.2)',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                      }}
                    >
                      QUEUE_EMPTY
                    </span>
                  </motion.div>
                ) : (
                  cartItems.map(({ item, quantity }) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20, height: 0, marginBottom: 0 }}
                      transition={{ type: 'spring', stiffness: 320, damping: 26 }}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        padding: '10px',
                        marginBottom: '8px',
                        background: '#181818',
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '6px',
                        alignItems: 'flex-start',
                      }}
                    >
                      {/* Thumbnail */}
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '4px',
                          overflow: 'hidden',
                          flexShrink: 0,
                          border: '1px solid rgba(255,255,255,0.08)',
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      </div>

                      {/* Details */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        {/* Name */}
                        <p
                          style={{
                            fontFamily: '"Barlow Condensed", sans-serif',
                            fontWeight: 700,
                            fontSize: '13px',
                            textTransform: 'uppercase',
                            color: '#ffffff',
                            margin: 0,
                            lineHeight: 1.2,
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }}
                        >
                          {item.name}
                        </p>

                        {/* Price calc */}
                        <p
                          style={{
                            fontFamily: 'var(--font-roboto-mono), monospace',
                            fontSize: '9px',
                            color: 'rgba(255,255,255,0.35)',
                            margin: '4px 0 8px',
                            letterSpacing: '0.05em',
                          }}
                        >
                          ₹{item.price} × {quantity} = ₹{item.price * quantity}
                        </p>

                        {/* Controls row */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {/* − qty + controls */}
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              border: '1px solid rgba(255,255,255,0.12)',
                              borderRadius: '3px',
                              overflow: 'hidden',
                              height: '24px',
                            }}
                          >
                            <button
                              onClick={() => updateQuantity(item.id, quantity - 1)}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'rgba(255,255,255,0.5)',
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'color 0.15s',
                                fontSize: '14px',
                                lineHeight: 1,
                              }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ff5400'; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                            >
                              <Minus size={9} />
                            </button>

                            <span
                              style={{
                                fontFamily: 'var(--font-roboto-mono), monospace',
                                fontSize: '11px',
                                fontWeight: 700,
                                color: '#ffffff',
                                padding: '0 8px',
                                minWidth: '24px',
                                textAlign: 'center',
                                borderLeft: '1px solid rgba(255,255,255,0.1)',
                                borderRight: '1px solid rgba(255,255,255,0.1)',
                                lineHeight: '24px',
                              }}
                            >
                              {quantity}
                            </span>

                            <button
                              onClick={() => updateQuantity(item.id, quantity + 1)}
                              style={{
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: 'rgba(255,255,255,0.5)',
                                width: '24px',
                                height: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'color 0.15s',
                              }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#ff5400'; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'; }}
                            >
                              <Plus size={9} />
                            </button>
                          </div>

                          {/* Delete button */}
                          <button
                            onClick={() => removeFromCart(item.id)}
                            style={{
                              background: 'rgba(239,68,68,0.08)',
                              border: '1px solid rgba(239,68,68,0.2)',
                              borderRadius: '3px',
                              cursor: 'pointer',
                              color: 'rgba(239,68,68,0.6)',
                              width: '24px',
                              height: '24px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              transition: 'all 0.15s',
                            }}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.15)';
                              (e.currentTarget as HTMLElement).style.color = '#ef4444';
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.08)';
                              (e.currentTarget as HTMLElement).style.color = 'rgba(239,68,68,0.6)';
                            }}
                          >
                            <Trash2 size={10} />
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>

            {/* ── CHECKOUT SUMMARY ── */}
            {cartItems.length > 0 && (
              <div
                style={{
                  padding: '14px 16px',
                  borderTop: '1px solid rgba(255,255,255,0.07)',
                  background: '#141414',
                  flexShrink: 0,
                }}
              >
                {/* Line items */}
                <div
                  style={{
                    fontFamily: 'var(--font-roboto-mono), monospace',
                    fontSize: '11px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '7px',
                    marginBottom: '14px',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255,255,255,0.45)' }}>Subtotal</span>
                    <span style={{ color: '#ffffff' }}>₹{cartTotal}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'rgba(255,255,255,0.45)' }}>Packaging + Tax</span>
                    <span style={{ color: '#ffffff' }}>₹{packagingTax}</span>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      paddingTop: '9px',
                      marginTop: '2px',
                      borderTop: '1px solid rgba(255,255,255,0.08)',
                    }}
                  >
                    <span style={{ color: '#ffffff', fontWeight: 700, fontSize: '13px' }}>Total</span>
                    <span
                      style={{
                        color: '#ff5400',
                        fontWeight: 700,
                        fontSize: '20px',
                        textShadow: '0 0 12px rgba(255,84,0,0.5)',
                        fontFamily: '"Barlow Condensed", sans-serif',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      ₹{grandTotal}
                    </span>
                  </div>
                </div>

                {/* CTA button */}
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={handleCheckout}
                  disabled={dispatching}
                  style={{
                    width: '100%',
                    padding: '13px 10px',
                    background: dispatching ? 'rgba(255,84,0,0.6)' : '#ff5400',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: dispatching ? 'default' : 'pointer',
                    color: '#000000',
                    fontFamily: 'var(--font-roboto-mono), monospace',
                    fontWeight: 700,
                    fontSize: '10px',
                    letterSpacing: '0.07em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '7px',
                    boxShadow: dispatching ? 'none' : '0 0 20px rgba(255,84,0,0.35)',
                    transition: 'background 0.2s, box-shadow 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    if (!dispatching) (e.currentTarget as HTMLElement).style.background = '#ff6a20';
                  }}
                  onMouseLeave={(e) => {
                    if (!dispatching) (e.currentTarget as HTMLElement).style.background = '#ff5400';
                  }}
                >
                  <Send size={11} />
                  {dispatching ? 'DISPATCHING...' : 'INITIATE DELIVERY SEQUENCE'}
                </motion.button>

                <p
                  style={{
                    fontFamily: 'var(--font-roboto-mono), monospace',
                    fontSize: '8px',
                    color: 'rgba(255,255,255,0.18)',
                    textAlign: 'center',
                    marginTop: '8px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                // secure_handoff() → whatsapp_node()
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
