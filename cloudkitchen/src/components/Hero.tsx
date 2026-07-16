'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '../hooks/useIsMobile';

/* ─── PARTICLE CANVAS ──────────────────────────────────────────────── */
const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: {
      x: number; y: number; vx: number; vy: number;
      r: number; life: number; maxLife: number;
    }[] = [];

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Spawn particles
    const spawn = () => {
      if (particles.length < 60) {
        particles.push({
          x: Math.random() * canvas.width,
          y: canvas.height + 5,
          vx: (Math.random() - 0.5) * 0.6,
          vy: -(Math.random() * 1.2 + 0.4),
          r: Math.random() * 1.5 + 0.5,
          life: 0,
          maxLife: Math.random() * 200 + 120,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      spawn();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        const alpha = Math.sin((p.life / p.maxLife) * Math.PI) * 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,84,0,${alpha})`;
        ctx.shadowColor = '#ff5400';
        ctx.shadowBlur = 6;
        ctx.fill();

        if (p.life >= p.maxLife) particles.splice(i, 1);
      }
      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
      }}
    />
  );
};

/* ─── CONCENTRIC RING BADGE ────────────────────────────────────────── */
const ConcentricBadge: React.FC = () => (
  <div
    style={{
      position: 'relative',
      width: '320px',
      height: '320px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0,
    }}
  >
    {/* Outermost ring — dashed, olive */}
    <div style={{
      position: 'absolute', inset: 0,
      borderRadius: '50%',
      border: '1px dashed rgba(180,140,0,0.18)',
      animation: 'ring-spin-slow 40s linear infinite',
    }} />
    {/* Tick marks on outer ring */}
    {Array.from({ length: 24 }).map((_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '1px', height: '8px',
          background: 'rgba(180,140,0,0.3)',
          transformOrigin: '50% -155px',
          transform: `rotate(${i * 15}deg) translateX(-50%)`,
        }}
      />
    ))}

    {/* Second ring */}
    <div style={{
      position: 'absolute', inset: '22px',
      borderRadius: '50%',
      border: '1px dashed rgba(255,84,0,0.15)',
      animation: 'ring-spin-rev 25s linear infinite',
    }} />

    {/* Third ring — solid orange */}
    <div style={{
      position: 'absolute', inset: '50px',
      borderRadius: '50%',
      border: '1px solid rgba(255,84,0,0.35)',
    }} />

    {/* Fourth ring — thick orange glow */}
    <div style={{
      position: 'absolute', inset: '72px',
      borderRadius: '50%',
      border: '2px solid rgba(255,84,0,0.6)',
      boxShadow: '0 0 20px rgba(255,84,0,0.25), inset 0 0 20px rgba(255,84,0,0.1)',
    }} />

    {/* Inner filled circle */}
    <div style={{
      position: 'absolute', inset: '90px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255,84,0,0.12) 0%, rgba(255,84,0,0.04) 60%, transparent 100%)',
      border: '1px solid rgba(255,84,0,0.4)',
      boxShadow: '0 0 40px rgba(255,84,0,0.2), inset 0 0 40px rgba(255,84,0,0.08)',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      animation: 'glow-pulse 3s ease-in-out infinite',
    }}>
      {/* Devnagari letter */}
      <span style={{
        fontFamily: '"Noto Sans Devanagari", serif',
        fontSize: '72px',
        fontWeight: 700,
        color: '#ff5400',
        lineHeight: 1,
        textShadow: '0 0 20px rgba(255,84,0,0.8), 0 0 50px rgba(255,84,0,0.4)',
        userSelect: 'none',
      }}>
        जे
      </span>
      <span style={{
        fontFamily: 'var(--font-roboto-mono), monospace',
        fontSize: '9px',
        color: 'rgba(255,84,0,0.6)',
        letterSpacing: '0.2em',
        marginTop: '8px',
        textTransform: 'uppercase',
      }}>
        JHB // 560066
      </span>
    </div>

    {/* Corner crosses / notches */}
    {[0, 90, 180, 270].map((deg) => (
      <div
        key={deg}
        style={{
          position: 'absolute',
          top: '50%', left: '50%',
          width: '10px', height: '1px',
          background: 'rgba(255,84,0,0.5)',
          transformOrigin: '-155px 0',
          transform: `rotate(${deg}deg)`,
        }}
      />
    ))}
  </div>
);

/* ─── TYPEWRITER HOOK ──────────────────────────────────────────────── */
const useTypewriter = (lines: string[], speed = 45) => {
  const [display, setDisplay] = useState<string[]>([]);
  const [curLine, setCurLine] = useState(0);
  const [curChar, setCurChar] = useState(0);

  useEffect(() => {
    if (curLine >= lines.length) return;
    if (curChar <= lines[curLine].length) {
      const t = setTimeout(() => {
        setDisplay((prev) => {
          const next = [...prev];
          next[curLine] = lines[curLine].slice(0, curChar);
          return next;
        });
        setCurChar((c) => c + 1);
      }, speed);
      return () => clearTimeout(t);
    } else {
      const t = setTimeout(() => {
        setCurLine((l) => l + 1);
        setCurChar(0);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [curLine, curChar, lines, speed]);

  return display;
};

/* ─── HERO ─────────────────────────────────────────────────────────── */
export const Hero: React.FC = () => {
  const isMobile = useIsMobile(768);
  const termLines = [
    '> INITIALIZING JHB_KITCHEN_CLOUD.OS _',
    '> CONNECTING TO WHITEFIELD NODE _',
    '> CHASKA-FOOD PROTOCOL: ACTIVE',
    '> GUJARATI SNACKS & CHAAT • FRESH DAILY',
  ];
  const typed = useTypewriter(termLines, 35);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: isMobile ? 'auto' : '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
        padding: isMobile ? '40px 16px 60px' : '80px 60px',
        background: '#0a0a0a',
        borderBottom: '1px solid rgba(255,255,255,0.05)',
      }}
    >
      {/* Background grid */}
      <div className="bg-grid" style={{ position: 'absolute', inset: 0, zIndex: 0 }} />

      {/* Particle canvas */}
      <ParticleField />

      {/* Radial orange glow */}
      <div style={{
        position: 'absolute',
        top: '50%', right: '18%',
        transform: 'translateY(-50%)',
        width: '500px', height: '500px',
        background: 'radial-gradient(circle, rgba(255,84,0,0.07) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* Main content row */}
      <div style={{
        position: 'relative', zIndex: 5,
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? '32px' : '48px',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
        textAlign: isMobile ? 'center' : 'left',
      }}>
        {/* ── LEFT COLUMN ── */}
        <div style={{
          flex: 1,
          minWidth: 0,
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: isMobile ? 'center' : 'flex-start',
        }}>
          {/* Top badge row */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              display: 'flex',
              gap: '10px',
              marginBottom: '24px',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
            }}
          >
            {[
              { icon: '⛙', text: 'NODE-66 / WHITEFIELD' },
              { icon: '⚡', text: 'DELIVERY-FIRST KITCHEN' },
            ].map((b) => (
              <span
                key={b.text}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  padding: '5px 12px',
                  border: '1px solid rgba(255,84,0,0.35)',
                  background: 'rgba(255,84,0,0.06)',
                  fontFamily: 'var(--font-roboto-mono), monospace',
                  fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: '#ff5400', borderRadius: '3px',
                }}
              >
                {b.icon} {b.text}
              </span>
            ))}
          </motion.div>

          {/* Giant headline */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: isMobile ? 'center' : 'flex-start',
            }}
          >
            {/* SOLID WHITE — "J H B" */}
            <h1
              style={{
                fontFamily: '"Barlow Condensed", "Orbitron", sans-serif',
                fontSize: isMobile ? 'clamp(44px, 12vw, 76px)' : 'clamp(80px, 12vw, 140px)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                lineHeight: 0.92,
                color: '#ffffff',
                margin: 0,
              }}
            >
              J H B
            </h1>
            {/* STROKE OUTLINE — "KITCHEN" */}
            <h1
              style={{
                fontFamily: '"Barlow Condensed", "Orbitron", sans-serif',
                fontSize: isMobile ? 'clamp(44px, 12vw, 76px)' : 'clamp(80px, 12vw, 140px)',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '-0.01em',
                lineHeight: 0.92,
                WebkitTextStroke: isMobile ? '1.5px #ff5400' : '2.5px #ff5400',
                color: 'transparent',
                margin: 0,
                textShadow: '0 0 40px rgba(255,84,0,0.15)',
              }}
            >
              KITCHEN
            </h1>
          </motion.div>

          {/* Slogan */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.55 }}
            style={{
              fontFamily: 'var(--font-roboto-mono), monospace',
              fontSize: '12px', color: 'rgba(255,255,255,0.4)',
              marginTop: '20px', letterSpacing: '0.06em',
            }}
          >
            // chaska_in_every_bite()
          </motion.p>

          {/* Terminal log */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            style={{
              marginTop: '28px',
              padding: '16px 20px',
              background: 'rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: '4px',
              width: '100%',
              maxWidth: '460px',
              textAlign: 'left',
            }}
          >
            {termLines.map((line, i) => (
              <div
                key={i}
                style={{
                  fontFamily: 'var(--font-roboto-mono), monospace',
                  fontSize: '11px',
                  color: i < (typed.length || 0) ? 'rgba(255,84,0,0.85)' : 'transparent',
                  lineHeight: '1.8',
                  whiteSpace: 'pre',
                }}
              >
                {typed[i] ?? ''}
                {i === typed.length - 1 && (
                  <span style={{
                    display: 'inline-block', width: '7px', height: '13px',
                    background: '#ff5400', marginLeft: '2px', verticalAlign: 'middle',
                    animation: 'blink 1s step-end infinite',
                  }} />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.95 }}
            style={{
              display: 'flex',
              gap: '12px',
              marginTop: '36px',
              flexWrap: 'wrap',
              justifyContent: isMobile ? 'center' : 'flex-start',
              width: '100%',
            }}
          >
            <a
              href="#menu"
              className="btn-orange"
              style={{
                padding: '14px 28px',
                fontSize: '12px', borderRadius: '3px',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                textDecoration: 'none',
                letterSpacing: '0.08em',
              }}
            >
              ▶ ENTER THE MENU
            </a>
            <a
              href="tel:+919999999999"
              className="btn-ghost"
              style={{
                padding: '14px 24px',
                fontSize: '12px', borderRadius: '3px',
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                textDecoration: 'none',
              }}
            >
              +91 9999999999
            </a>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN — Concentric ring badge ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isMobile ? '260px' : '320px',
            height: isMobile ? '260px' : '320px',
            transform: isMobile ? 'scale(0.8)' : 'scale(1)',
            transformOrigin: 'center',
            marginTop: isMobile ? '24px' : '0',
          }}
        >
          <ConcentricBadge />
        </motion.div>
      </div>

      {/* Scanline overlay */}
      <div className="scanline-overlay" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 3 }} />
    </section>
  );
};
