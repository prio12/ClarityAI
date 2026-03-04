'use client';
import { useScrolled } from '@/hooks/useScrolled';

export default function Nav() {
  const scrolled = useScrolled();
  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all .3s',
        // 🎨 EDIT: bg-bg-app at 92% opacity
        background: scrolled ? 'rgba(10,10,10,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        // 🎨 EDIT: border-border-subtle
        borderBottom: scrolled ? '1px solid #1E1E1E' : 'none',
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
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 8,
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* 🎨 EDIT gradient: bg-gradient-primary */}
            <span style={{ color: '#fff', fontSize: 12, fontWeight: 900 }}>
              C
            </span>
          </div>
          {/* 🎨 EDIT: text-text-primary */}
          <span
            style={{
              color: '#F5F5F5',
              fontWeight: 700,
              fontSize: 18,
              letterSpacing: '-0.02em',
            }}
          >
            ClarityAI
          </span>
        </div>
        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {['Features', 'How It Works', 'Pricing'].map((l) => (
            <a
              key={l}
              href="#"
              // 🎨 EDIT: text-text-muted hover:text-text-primary
              style={{
                fontSize: 14,
                color: '#B3B3B3', // 🎨 text.secondary — visible by default
                textDecoration: 'none',
                transition: 'color .2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#F5F5F5')} // 🎨 text.primary on hover
              onMouseLeave={(e) => (e.currentTarget.style.color = '#B3B3B3')} // 🎨 back to secondary
            >
              {l}
            </a>
          ))}
        </div>
        {/* CTA */}
        <a
          href="#"
          // 🎨 EDIT: bg-gradient-primary
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 18px',
            borderRadius: 10,
            background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
            color: '#fff',
            fontSize: 14,
            fontWeight: 600,
            textDecoration: 'none',
          }}
        >
          Get Started Free
        </a>
      </div>
    </nav>
  );
}
