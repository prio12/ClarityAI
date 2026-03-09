/* eslint-disable react/no-unescaped-entities */
'use client';
import { useState, useEffect } from 'react';
import { FadeIn } from '@/components/shared/FadeIn';
import { Ic } from '@/components/shared/Icons';
import { useCounter } from '@/hooks/useCounter';

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Frontend Developer',
    body: 'Applied to 30+ jobs, zero callbacks. Used ClarityAI, added missing keywords, got 3 interviews in one week.',
    avatar: 'SK',
    score: 94,
  },
  {
    name: 'Marcus T.',
    role: 'Product Manager',
    body: 'The gap analysis was eye-opening. Right experience, describing it completely wrong. The suggestions were incredibly specific.',
    avatar: 'MT',
    score: 88,
  },
  {
    name: 'Priya M.',
    role: 'UX Designer',
    body: 'The cover letter generator alone is worth it. Takes 2 minutes now and they actually sound like me.',
    avatar: 'PM',
    score: 91,
  },
  {
    name: 'James L.',
    role: 'Data Analyst',
    body: 'Went from 5% response rate to 40%. ATS optimization tips changed everything. Genuinely different from anything else.',
    avatar: 'JL',
    score: 79,
  },
];

function StatItem({
  to,
  suffix,
  label,
}: {
  to: number;
  suffix: string;
  label: string;
}) {
  const { ref, val } = useCounter(to);
  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        padding: '32px 16px',
        borderRadius: 18,
        background: '#141414',
        border: '1px solid #2D2D2D',
      }}
    >
      <div
        style={{
          fontSize: 36,
          fontWeight: 900,
          color: '#F5F5F5',
          marginBottom: 4,
        }}
      >
        {to % 1 !== 0 ? to.toFixed(1) : val.toLocaleString()}
        {suffix}
      </div>
      <div
        style={{
          fontSize: 12,
          color: '#B3B3B3',
          fontWeight: 500,
          letterSpacing: '0.04em',
        }}
      >
        {label}
      </div>
    </div>
  );
}

export default function SocialProof() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section style={{ background: '#0A0A0A', padding: '96px 24px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        {/* Stats */}
        <div
          style={{
            display: 'grid',
            // ✅ 1 column on mobile, 3 columns on desktop
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: 14,
            marginBottom: 80,
          }}
        >
          {[
            { to: 1000, suffix: '+', label: 'Resumes Analyzed' },
            { to: 89, suffix: '%', label: 'Interview Rate Lift' },
            { to: 4.9, suffix: '/5', label: 'Average Rating' },
          ].map((s) => (
            <StatItem
              key={s.label}
              to={s.to}
              suffix={s.suffix}
              label={s.label}
            />
          ))}
        </div>

        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
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
              Real Results
            </p>
            <h2
              style={{
                fontSize: 'clamp(28px,4vw,40px)',
                fontWeight: 900,
                color: '#F5F5F5',
              }}
            >
              People getting hired with ClarityAI
            </h2>
          </div>
        </FadeIn>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: 14,
          }}
        >
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 65}>
              <div
                style={{
                  padding: 24,
                  borderRadius: 18,
                  background: '#141414',
                  border: '1px solid #2D2D2D',
                  height: '100%',
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color .25s',
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.borderColor = '#404040')
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.borderColor = '#2D2D2D')
                }
              >
                <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
                  {[...Array(5)].map((_, j) => (
                    <span key={j} style={{ color: '#F59E0B' }}>
                      <Ic.Star />
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: 14,
                    color: '#B3B3B3',
                    lineHeight: 1.65,
                    flex: 1,
                    marginBottom: 20,
                  }}
                >
                  "{t.body}"
                </p>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{ display: 'flex', alignItems: 'center', gap: 12 }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: 'rgba(59,130,246,.15)',
                        border: '1px solid rgba(59,130,246,.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <span
                        style={{
                          fontSize: 12,
                          fontWeight: 700,
                          color: '#60A5FA',
                        }}
                      >
                        {t.avatar}
                      </span>
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: '#B3B3B3',
                          margin: 0,
                        }}
                      >
                        {t.name}
                      </p>
                      <p style={{ fontSize: 12, color: '#B3B3B3', margin: 0 }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 700,
                        color: '#3B82F6',
                        fontFamily: 'monospace',
                      }}
                    >
                      {t.score}
                    </div>
                    <div style={{ fontSize: 11, color: '#B3B3B3' }}>
                      match score
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Trust badges */}
        <FadeIn>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: isMobile ? 16 : 32,
              marginTop: 40,
            }}
          >
            {[
              {
                icon: <Ic.Shield />,
                text: 'Privacy first — your data stays yours',
              },
              { icon: <Ic.Zap />, text: 'Results in under 30 seconds' },
              { icon: <Ic.Check />, text: 'No credit card required' },
            ].map((b) => (
              <div
                key={b.text}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  fontSize: 13,
                  color: '#B3B3B3',
                }}
              >
                <span style={{ color: '#B3B3B3' }}>{b.icon}</span>
                {b.text}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
