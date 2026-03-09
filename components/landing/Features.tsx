'use client';
import { FadeIn } from '@/components/shared/FadeIn';
import { Ic } from '@/components/shared/Icons';

const features = [
  {
    Icon: Ic.Chart,
    title: 'AI Match Score',
    desc: 'See a 0–100 score instantly. Know if your resume is a strong fit before you hit send.',
  },
  {
    Icon: Ic.Bulb,
    title: 'Strengths & Gaps',
    desc: "Find exactly what's working and what's missing. No more guessing why you're ghosted.",
  },
  {
    Icon: Ic.Scan,
    title: 'Actionable Recommendations',
    desc: 'Specific, line-by-line suggestions. Add this. Rephrase that. Remove this section.',
  },
  {
    Icon: Ic.Doc,
    title: 'Cover Letter Generator',
    desc: 'A tailored, human-sounding cover letter in seconds, customized to the role.',
  },
  {
    Icon: Ic.Clock,
    title: 'Analysis History',
    desc: 'Track every application. Compare versions and watch your score improve over time.',
  },
  {
    Icon: Ic.Zap,
    title: 'ATS Optimization',
    desc: 'Beat Applicant Tracking Systems before your resume ever reaches a human recruiter.',
  },
];

export default function Features() {
  return (
    // 🎨 EDIT: bg-bg-app
    <section
      id="features"
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
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 350,
          background:
            'radial-gradient(ellipse at bottom, rgba(59,130,246,.07) 0%, transparent 70%)',
          filter: 'blur(20px)',
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
              Features
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
              Everything you need
              <br />
              to get the interview.
            </h2>
          </div>
        </FadeIn>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 14,
          }}
        >
          {features.map((f, i) => (
            <FadeIn key={f.title} delay={i * 55}>
              <div
                // 🎨 EDIT: bg-bg-card border-border-default
                style={{
                  padding: 24,
                  borderRadius: 18,
                  background: '#141414',
                  border: '1px solid #2D2D2D',
                  height: '100%',
                  boxSizing: 'border-box',
                  transition:
                    'border-color .25s, transform .25s, box-shadow .25s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,.28)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow =
                    '0 0 24px rgba(59,130,246,.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#2D2D2D';
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* 🎨 EDIT: bg-brand/10 border-brand/20 text-brand */}
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: 'rgba(59,130,246,.10)',
                    border: '1px solid rgba(59,130,246,.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                    color: '#3B82F6',
                  }}
                >
                  <f.Icon />
                </div>
                {/* 🎨 EDIT: text-text-primary */}
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: '#F5F5F5',
                    marginBottom: 6,
                  }}
                >
                  {f.title}
                </h3>
                {/* 🎨 EDIT: text-text-muted */}
                <p style={{ fontSize: 13, color: '#B3B3B3', lineHeight: 1.65 }}>
                  {f.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
