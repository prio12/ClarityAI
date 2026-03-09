/* eslint-disable react/no-unescaped-entities */
'use client';
import { FadeIn } from '@/components/shared/FadeIn';

const freePerks = [
  'Unlimited resume analyses',
  'AI match score + breakdown',
  'Full recommendations',
  'Gap analysis',
  'ATS optimization tips',
];

const proPerks = [
  'Everything in Free',
  'Cover letter generation',
  'Analysis history',
  'Priority support',
  'Early access to new features',
];

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      style={{ width: 12, height: 12 }}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        background: '#0A0A0A',
        padding: '96px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Bg orb */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: 600,
          height: 500,
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse, rgba(59,130,246,.06) 0%, transparent 70%)',
          filter: 'blur(20px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 700, margin: '0 auto', position: 'relative' }}>
        {/* Header */}
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
              Pricing
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px,5vw,48px)',
                fontWeight: 900,
                color: '#F5F5F5',
                marginBottom: 12,
                lineHeight: 1.1,
              }}
            >
              Simple, honest pricing.
            </h2>
            <p style={{ fontSize: 16, color: '#B3B3B3' }}>
              Start free. No credit card required.
            </p>
          </div>
        </FadeIn>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 20,
          }}
        >
          {/* FREE CARD */}
          <FadeIn delay={0}>
            <div
              style={{
                padding: 32,
                borderRadius: 20,
                background: '#141414',
                border: '1px solid rgba(59,130,246,.4)',
                boxShadow: '0 0 40px rgba(59,130,246,.08)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box',
                position: 'relative',
              }}
            >
              {/* Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '4px 16px',
                  borderRadius: 999,
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  color: '#fff',
                  fontSize: 11,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                Free During Beta
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#F5F5F5',
                  marginBottom: 4,
                }}
              >
                Free
              </h3>
              <p style={{ fontSize: 13, color: '#B3B3B3', marginBottom: 20 }}>
                Everything free while we're in beta.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 4,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 900,
                    color: '#F5F5F5',
                    lineHeight: 1,
                  }}
                >
                  $0
                </span>
                <span style={{ fontSize: 13, color: '#B3B3B3' }}>/month</span>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 32px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {freePerks.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontSize: 14,
                      color: '#B3B3B3',
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        background: 'rgba(59,130,246,.15)',
                        border: '1px solid rgba(59,130,246,.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#3B82F6',
                      }}
                    >
                      <CheckIcon />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <button
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '12px 24px',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 14,
                  border: 'none',
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                  color: '#fff',
                  boxShadow: '0 0 20px rgba(59,130,246,.25)',
                  transition: 'opacity .2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                Get Started Free
              </button>
            </div>
          </FadeIn>

          {/* PRO CARD — coming soon */}
          <FadeIn delay={100}>
            <div
              style={{
                padding: 32,
                borderRadius: 20,
                background: '#141414',
                border: '1px solid #2D2D2D',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                boxSizing: 'border-box',
                position: 'relative',
                opacity: 0.6,
              }}
            >
              {/* Badge */}
              <div
                style={{
                  position: 'absolute',
                  top: -14,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  padding: '4px 16px',
                  borderRadius: 999,
                  background: '#1A1A1A',
                  border: '1px solid #2D2D2D',
                  color: '#B3B3B3',
                  fontSize: 11,
                  fontWeight: 700,
                  whiteSpace: 'nowrap',
                }}
              >
                Coming Soon
              </div>

              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#B3B3B3',
                  marginBottom: 4,
                }}
              >
                Pro
              </h3>
              <p style={{ fontSize: 13, color: '#B3B3B3', marginBottom: 20 }}>
                For serious job seekers who want every edge.
              </p>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 4,
                  marginBottom: 24,
                }}
              >
                <span
                  style={{
                    fontSize: 48,
                    fontWeight: 900,
                    color: '#737373',
                    lineHeight: 1,
                  }}
                >
                  $4.99
                </span>
                <span style={{ fontSize: 13, color: '#B3B3B3' }}>/month</span>
              </div>

              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '0 0 32px',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {proPerks.map((p) => (
                  <li
                    key={p}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      fontSize: 14,
                      color: '#B3B3B3',
                    }}
                  >
                    <span
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: '50%',
                        background: '#1A1A1A',
                        border: '1px solid #2D2D2D',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        color: '#B3B3B3',
                      }}
                    >
                      <CheckIcon />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <button
                disabled
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '12px 24px',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 14,
                  border: '1px solid #2D2D2D',
                  background: 'transparent',
                  color: '#B3B3B3',
                  cursor: 'not-allowed',
                }}
              >
                Coming Soon
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Bottom note */}
        <FadeIn>
          <p
            style={{
              textAlign: 'center',
              fontSize: 12,
              color: '#B3B3B3',
              marginTop: 24,
            }}
          >
            Free during beta · Pro plan with advanced features coming soon
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
