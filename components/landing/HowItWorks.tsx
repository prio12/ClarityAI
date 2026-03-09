'use client';
import { FadeIn } from '@/components/shared/FadeIn';
import { Ic } from '@/components/shared/Icons';

const steps = [
  {
    Icon: Ic.Upload,
    n: 1,
    title: 'Upload your resume',
    body: 'Drop your PDF or paste resume text, then add the job description. Done in 30 seconds.',
  },
  {
    Icon: Ic.Scan,
    n: 2,
    title: 'AI analyzes the match',
    body: 'Scores keyword coverage, skills alignment, and experience fit from 0 to 100.',
  },
  {
    Icon: Ic.Send,
    n: 3,
    title: 'Apply with confidence',
    body: 'Get specific edits, a gap list, and a tailored cover letter. Stand out every time.',
  },
];

export default function HowItWorks() {
  return (
    // 🎨 EDIT: bg-bg-app
    <section
      id="how-it-works"
      style={{ background: '#0A0A0A', padding: '96px 24px' }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <FadeIn>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
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
              How It Works
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
              Three steps.
              <br />
              Zero guesswork.
            </h2>
          </div>
        </FadeIn>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 32,
            position: 'relative',
          }}
        >
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 100}>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: 80,
                    height: 80,
                    borderRadius: 18,
                    background: 'rgba(59,130,246,.08)',
                    border: '1px solid rgba(59,130,246,.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 24,
                  }}
                >
                  {/* 🎨 EDIT: bg-gradient-primary */}
                  <span
                    style={{
                      position: 'absolute',
                      top: -10,
                      right: -10,
                      width: 22,
                      height: 22,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3B82F6, #2563EB)',
                      color: '#fff',
                      fontSize: 11,
                      fontWeight: 900,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {s.n}
                  </span>
                  {/* 🎨 EDIT: text-brand */}
                  <span style={{ color: '#3B82F6' }}>
                    <s.Icon />
                  </span>
                </div>
                {/* 🎨 EDIT: text-text-primary */}
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    color: '#F5F5F5',
                    marginBottom: 8,
                  }}
                >
                  {s.title}
                </h3>
                {/* 🎨 EDIT: text-text-muted */}
                <p style={{ fontSize: 14, color: '#B3B3B3', lineHeight: 1.65 }}>
                  {s.body}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
