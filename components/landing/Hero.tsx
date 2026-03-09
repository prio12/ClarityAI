'use client';

/* eslint-disable react/no-unescaped-entities */

import { Ic } from '@/components/shared/Icons';
import { ScoreRing } from '@/components/dashboard/ScoreRing';
import { scrollTo } from '@/lib/scrollTo';

export default function Hero() {
  return (
    <section
      style={{
        // 🎨 EDIT: bg-bg-app
        background: '#0A0A0A',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: 64,
      }}
    >
      {/* Orbs */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: '8%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,.10) 0%, rgba(59,130,246,.03) 45%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: -80,
            left: -120,
            width: 420,
            height: 420,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(59,130,246,.07) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -60,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(96,165,250,.06) 0%, transparent 65%)',
            filter: 'blur(50px)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 1,
            background:
              'linear-gradient(90deg, transparent 5%, rgba(59,130,246,.3) 50%, transparent 95%)',
          }}
        />
      </div>

      <div
        style={{
          position: 'relative',
          maxWidth: 1000,
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 14px',
            borderRadius: 999,
            border: '1px solid rgba(59,130,246,.25)',
            background: 'rgba(59,130,246,.08)',
            marginBottom: 32,
            animation: 'hfd .55s ease both',
          }}
        >
          {/* 🎨 EDIT: bg-brand */}
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: '50%',
              background: '#3B82F6',
              display: 'inline-block',
            }}
          />
          {/* 🎨 EDIT: text-brand-light */}
          <span
            style={{
              fontSize: 12,
              color: '#60A5FA',
              fontWeight: 500,
              letterSpacing: '0.05em',
            }}
          >
            AI-Powered Resume Analysis
          </span>
        </div>

        {/* Headline */}
        {/* 🎨 EDIT: text-text-primary */}
        <h1
          style={{
            fontSize: 'clamp(40px,7vw,72px)',
            fontWeight: 900,
            color: '#F5F5F5',
            lineHeight: 1.05,
            letterSpacing: '-0.03em',
            marginBottom: 20,
            animation: 'hfd .55s ease .08s both',
          }}
        >
          Your resume is {/* 🎨 EDIT gradient: from-brand to-brand-light */}
          <span
            style={{
              background: 'linear-gradient(135deg, #3B82F6 30%, #60A5FA 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            getting ignored.
          </span>
          <br />
          Let's fix that.
        </h1>

        {/* Subheading */}
        {/* 🎨 EDIT: text-text-secondary */}
        <p
          style={{
            fontSize: 18,
            color: '#B3B3B3',
            maxWidth: 580,
            margin: '0 auto 40px',
            lineHeight: 1.7,
            animation: 'hfd .55s ease .16s both',
          }}
        >
          Upload your resume, paste the job description, and get an AI match
          score with precise feedback — in under 30 seconds.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 12,
            marginBottom: 56,
            flexWrap: 'wrap',
            animation: 'hfd .55s ease .24s both',
          }}
        >
          <a
            href="#"
            // 🎨 EDIT: bg-gradient-primary shadow-glow-blue
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '14px 28px',
              borderRadius: 12,
              background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
              color: '#fff',
              fontWeight: 700,
              fontSize: 15,
              textDecoration: 'none',
              boxShadow:
                '0 0 28px rgba(59,130,246,.30), 0 0 0 1px rgba(59,130,246,.25)',
            }}
          >
            Analyze Your Resume Free <Ic.Arrow />
          </a>
          <span
            onClick={() => scrollTo('how-it-works')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 28px',
              borderRadius: 12,
              border: '1px solid #2D2D2D',
              color: '#B3B3B3',
              fontWeight: 600,
              fontSize: 15,
              textDecoration: 'none',
              cursor: 'pointer',
            }}
          >
            See How It Works
          </span>
        </div>

        {/* Hero Card */}
        <div style={{ animation: 'hfu .7s ease .32s both' }}>
          <div
            style={{
              maxWidth: 560,
              margin: '0 auto',
              borderRadius: 20,
              overflow: 'hidden',
              // 🎨 EDIT: bg-bg-card border-border-default shadow-elevated
              background: '#141414',
              border: '1px solid #2D2D2D',
              boxShadow:
                '0 0 0 1px rgba(59,130,246,.06), 0 32px 72px rgba(0,0,0,.6)',
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                padding: '10px 16px',
                borderBottom: '1px solid #1E1E1E',
                background: '#0F0F0F',
              }}
            >
              {/* 🎨 EDIT: bg-danger bg-warning bg-success */}
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#EF4444',
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#F59E0B',
                  opacity: 0.6,
                }}
              />
              <span
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  background: '#10B981',
                  opacity: 0.6,
                }}
              />
              {/* 🎨 EDIT: bg-bg-input text-text-muted */}
              <div
                style={{
                  flex: 1,
                  marginLeft: 12,
                  height: 20,
                  borderRadius: 6,
                  background: '#1E1E1E',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 10px',
                }}
              >
                <span style={{ fontSize: 11, color: '#B3B3B3' }}>
                  app.clarityai.com/analyze
                </span>
              </div>
            </div>
            {/* Card body */}
            <div
              style={{
                padding: 24,
                display: 'flex',
                gap: 24,
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <ScoreRing score={87} />
              <div style={{ flex: 1, minWidth: 200 }}>
                {[
                  { label: 'Keyword Match', pct: 91, color: '#3B82F6' }, // 🎨 EDIT: brand
                  { label: 'Skills Alignment', pct: 78, color: '#60A5FA' }, // 🎨 EDIT: brand-light
                  { label: 'Experience Fit', pct: 85, color: '#10B981' }, // 🎨 EDIT: success
                ].map(({ label, pct, color }, i) => (
                  <div key={label} style={{ marginBottom: 14 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 6,
                      }}
                    >
                      {/* 🎨 EDIT: text-text-muted */}
                      <span style={{ fontSize: 11, color: '#B3B3B3' }}>
                        {label}
                      </span>
                      {/* 🎨 EDIT: text-brand-light */}
                      <span
                        style={{
                          fontSize: 11,
                          color: '#60A5FA',
                          fontFamily: 'monospace',
                          fontWeight: 600,
                        }}
                      >
                        {pct}%
                      </span>
                    </div>
                    {/* 🎨 EDIT: bg-border-default */}
                    <div
                      style={{
                        height: 5,
                        borderRadius: 999,
                        background: '#2D2D2D',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          height: '100%',
                          borderRadius: 999,
                          background: color,
                          width: `${pct}%`,
                          transition: `width 1.1s ease ${0.8 + i * 0.2}s`,
                        }}
                      />
                    </div>
                  </div>
                ))}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 6,
                    marginTop: 8,
                  }}
                >
                  {[
                    "Add 'TypeScript'",
                    'Quantify impact',
                    'Remove objective',
                  ].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: 11,
                        padding: '4px 10px',
                        borderRadius: 999,
                        border: '1px solid rgba(59,130,246,.3)',
                        background: 'rgba(59,130,246,.08)',
                        color: '#60A5FA',
                      }}
                    >
                      💡 {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* 🎨 EDIT: text-text-muted */}
        <p
          style={{
            marginTop: 16,
            fontSize: 12,
            color: '#B3B3B3',
            animation: 'hfd .5s ease .5s both',
          }}
        >
          No credit card required · 5 free analyses/month
        </p>
      </div>

      <style>{`
        @keyframes hfd { from { opacity:0; transform:translateY(-14px); } to { opacity:1; transform:translateY(0); } }
        @keyframes hfu { from { opacity:0; transform:translateY(20px);  } to { opacity:1; transform:translateY(0); } }
      `}</style>
    </section>
  );
}
