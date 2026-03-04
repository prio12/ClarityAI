/* eslint-disable react/no-unescaped-entities */
'use client';
import { FadeIn } from '@/components/shared/FadeIn';
import { Ic } from '@/components/shared/Icons';

export default function FinalCTA() {
  return (
    // 🎨 EDIT: bg-bg-app
    <section style={{ background: '#0A0A0A', padding: '96px 24px' }}>
      <FadeIn>
        <div
          style={{
            maxWidth: 680,
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
            padding: '64px 48px',
            borderRadius: 28,
            overflow: 'hidden',
            // 🎨 EDIT: bg-bg-card border-brand/20
            background: '#141414',
            border: '1px solid rgba(59,130,246,.2)',
            boxShadow: '0 0 60px rgba(59,130,246,.07)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%) translateY(-50%)',
              width: 500,
              height: 280,
              borderRadius: '50%',
              background:
                'radial-gradient(ellipse, rgba(59,130,246,.13) 0%, transparent 70%)',
              filter: 'blur(20px)',
              pointerEvents: 'none',
            }}
          />
          <div style={{ position: 'relative' }}>
            {/* 🎨 EDIT: text-brand */}
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#3B82F6',
                marginBottom: 16,
              }}
            >
              Get Started Today
            </p>
            {/* 🎨 EDIT: text-text-primary */}
            <h2
              style={{
                fontSize: 'clamp(32px,5vw,48px)',
                fontWeight: 900,
                color: '#F5F5F5',
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Stop sending
              <br />
              blind applications.
            </h2>
            {/* 🎨 EDIT: text-text-secondary */}
            <p
              style={{
                fontSize: 17,
                color: '#B3B3B3',
                lineHeight: 1.7,
                maxWidth: 460,
                margin: '0 auto 32px',
              }}
            >
              You've put in the work. Make sure your resume shows it. First
              analysis is free — no credit card, no commitment.
            </p>
            <a
              href="#"
              // 🎨 EDIT: bg-gradient-primary shadow-glow-blue
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                padding: '16px 32px',
                borderRadius: 14,
                background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                color: '#fff',
                fontWeight: 700,
                fontSize: 16,
                textDecoration: 'none',
                boxShadow:
                  '0 0 32px rgba(59,130,246,.32), 0 0 0 1px rgba(59,130,246,.25)',
              }}
            >
              Analyze Your Resume Free <Ic.Arrow />
            </a>
            {/* 🎨 EDIT: text-text-muted */}
            <p style={{ marginTop: 16, fontSize: 13, color: '#737373' }}>
              No credit card required · 5 free analyses/month
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
