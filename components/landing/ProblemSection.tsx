/* eslint-disable react/no-unescaped-entities */
'use client';
import { FadeIn } from '@/components/shared/FadeIn';

const problems = [
  {
    emoji: '📭',
    title: 'Sending into the void',
    body: "You apply to 40 jobs and hear back from 2. Your resume isn't matching what ATS systems and hiring managers scan for.",
  },
  {
    emoji: '🎯',
    title: 'One resume, every job',
    body: 'Using the same resume everywhere is leaving you invisible. Tailoring manually takes hours — most people skip it. Big mistake.',
  },
  {
    emoji: '🤷',
    title: 'Zero feedback loop',
    body: "You never know why you got ghosted. Wrong keywords? Bad format? Missing skills? You're flying blind every single time.",
  },
  {
    emoji: '✍️',
    title: 'Cover letters that fall flat',
    body: 'Writing a compelling cover letter for every job is exhausting — and that generic template? Hiring managers can tell instantly.',
  },
];

export default function ProblemSection() {
  return (
    // 🎨 EDIT: bg-bg-app
    <section
      style={{
        background: '#0A0A0A',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
          width: 380,
          height: 380,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(59,130,246,.05) 0%, transparent 70%)',
          filter: 'blur(30px)',
          pointerEvents: 'none',
        }}
      />
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            {/* 🎨 EDIT: text-brand */}
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#3B82F6',
                marginBottom: 12,
              }}
            >
              The Problem
            </p>
            {/* 🎨 EDIT: text-text-primary */}
            <h2
              style={{
                fontSize: 'clamp(32px,5vw,48px)',
                fontWeight: 900,
                color: '#F5F5F5',
                lineHeight: 1.1,
              }}
            >
              Job searching shouldn't feel
              <br />
              {/* 🎨 EDIT: text-text-muted */}
              <span style={{ color: '#737373' }}>
                like shouting into the dark.
              </span>
            </h2>
          </div>
        </FadeIn>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {problems.map((p, i) => (
            <FadeIn key={p.title} delay={i * 75}>
              <div
                // 🎨 EDIT: bg-bg-card border-border-default hover:border-brand/30
                style={{
                  padding: 24,
                  borderRadius: 18,
                  background: '#141414',
                  border: '1px solid #2D2D2D',
                  height: '100%',
                  boxSizing: 'border-box',
                  transition: 'border-color .25s, transform .25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2D2D2D';
                  e.currentTarget.style.transform = 'none';
                }}
              >
                <div style={{ fontSize: 32, marginBottom: 16 }}>{p.emoji}</div>
                {/* 🎨 EDIT: text-text-primary */}
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#F5F5F5',
                    marginBottom: 8,
                  }}
                >
                  {p.title}
                </h3>
                {/* 🎨 EDIT: text-text-muted */}
                <p style={{ fontSize: 14, color: '#B3B3B3', lineHeight: 1.65 }}>
                  {p.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
