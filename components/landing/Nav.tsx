'use client';
import { useState, useEffect } from 'react';
import { useScrolled } from '@/hooks/useScrolled';
import { scrollTo } from '@/lib/scrollTo';

export default function Nav() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const navLinks = [
    { label: 'Features', id: 'features' },
    { label: 'How It Works', id: 'how-it-works' },
    { label: 'Pricing', id: 'pricing' },
  ];

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all .3s',
        background:
          scrolled || menuOpen ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
        borderBottom: scrolled || menuOpen ? '1px solid #1E1E1E' : 'none',
      }}
    >
      <div
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: '0 24px',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo — always visible */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 9,
              background: 'linear-gradient(135deg, #3B82F6, #1E40AF)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 12px rgba(59,130,246,0.4)',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                color: '#fff',
                fontSize: 16,
                fontWeight: 900,
                letterSpacing: '-0.05em',
                fontFamily: 'Georgia, serif',
                lineHeight: 1,
              }}
            >
              C
            </span>
          </div>
          <span
            style={{
              color: '#F5F5F5',
              fontWeight: 700,
              fontSize: 17,
              letterSpacing: '-0.03em',
              lineHeight: 1,
            }}
          >
            Clarity<span style={{ color: '#3B82F6' }}>AI</span>
          </span>
        </div>

        {/* Desktop links — only when we KNOW it's not mobile */}
        {isMobile === false && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
            {navLinks.map((l) => (
              <span
                key={l.label}
                onClick={() => {
                  scrollTo(l.id);
                  setMenuOpen(false);
                }}
                style={{
                  fontSize: 14,
                  color: '#B3B3B3',
                  cursor: 'pointer',
                  transition: 'color .2s',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}
              >
                {l.label}
              </span>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* Desktop CTA — only when we KNOW it's not mobile */}
          {isMobile === false && (
            <button
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '9px 20px',
                borderRadius: 10,
                background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                color: '#fff',
                fontSize: 14,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 0 16px rgba(59,130,246,0.25)',
                transition: 'opacity .2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Get Started Free
            </button>
          )}

          {/* Hamburger — only when we KNOW it's mobile */}
          {isMobile === true && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 8,
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
              }}
              aria-label="Toggle menu"
            >
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: '#F5F5F5',
                  borderRadius: 2,
                  transition: 'all .25s',
                  transform: menuOpen
                    ? 'translateY(7px) rotate(45deg)'
                    : 'none',
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: '#F5F5F5',
                  borderRadius: 2,
                  transition: 'all .25s',
                  opacity: menuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  display: 'block',
                  width: 22,
                  height: 2,
                  background: '#F5F5F5',
                  borderRadius: 2,
                  transition: 'all .25s',
                  transform: menuOpen
                    ? 'translateY(-7px) rotate(-45deg)'
                    : 'none',
                }}
              />
            </button>
          )}
        </div>
      </div>

      {/* Mobile dropdown — only when we KNOW it's mobile */}
      {isMobile === true && (
        <div
          style={{
            overflow: 'hidden',
            maxHeight: menuOpen ? 320 : 0,
            transition: 'max-height .3s ease',
            borderTop: menuOpen ? '1px solid #1E1E1E' : 'none',
          }}
        >
          <div
            style={{
              padding: '12px 24px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: 0,
            }}
          >
            {navLinks.map((l) => (
              <span
                key={l.label}
                onClick={() => {
                  scrollTo(l.id);
                  setMenuOpen(false);
                }}
                style={{
                  fontSize: 15,
                  color: '#B3B3B3',
                  cursor: 'pointer',
                  padding: '14px 0',
                  borderBottom: '1px solid #1E1E1E',
                  transition: 'color .2s',
                  fontWeight: 500,
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')}
              >
                {l.label}
              </span>
            ))}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: 16,
                padding: '13px 24px',
                borderRadius: 10,
                background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                color: '#fff',
                fontSize: 15,
                fontWeight: 600,
                border: 'none',
                cursor: 'pointer',
                width: '100%',
                boxShadow: '0 0 16px rgba(59,130,246,0.25)',
              }}
            >
              Get Started Free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
