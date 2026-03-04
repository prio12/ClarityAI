'use client';

export default function Footer() {
  return (
    // 🎨 EDIT: bg-bg-app border-border-subtle
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #1E1E1E',
        padding: '48px 24px 40px',
      }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
            gap: 32,
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                marginBottom: 12,
              }}
            >
              {/* 🎨 EDIT: bg-gradient-primary */}
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
              {/* 🎨 EDIT: text-text-primary */}
              <span
                style={{
                  color: '#F5F5F5',
                  fontWeight: 700,
                  fontSize: 17,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                }}
              >
                Clarity
                <span style={{ color: '#3B82F6' }}>AI</span>
              </span>
            </div>
            {/* 🎨 EDIT: text-text-muted */}
            <p style={{ fontSize: 13, color: '#737373', lineHeight: 1.65 }}>
              AI-powered resume analysis for job seekers serious about landing
              their next role.
            </p>
          </div>
          {[
            {
              heading: 'Product',
              links: ['Features', 'Pricing', 'How It Works', 'Changelog'],
            },
            {
              heading: 'Company',
              links: ['About', 'Privacy Policy', 'Terms of Service', 'Contact'],
            },
          ].map((col) => (
            <div key={col.heading}>
              {/* 🎨 EDIT: text-text-primary */}
              <p
                style={{
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#F5F5F5',
                  marginBottom: 16,
                }}
              >
                {col.heading}
              </p>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                }}
              >
                {col.links.map((l) => (
                  <li key={l}>
                    {/* 🎨 EDIT: text-text-muted hover:text-text-primary */}
                    <a
                      href="#"
                      style={{
                        fontSize: 13,
                        color: '#737373',
                        textDecoration: 'none',
                        transition: 'color .2s',
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = '#F5F5F5')
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = '#737373')
                      }
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {/* 🎨 EDIT: border-border-subtle */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            paddingTop: 24,
            borderTop: '1px solid #1E1E1E',
          }}
        >
          {/* 🎨 EDIT: text-text-muted */}
          <p style={{ fontSize: 12, color: '#737373' }}>
            © {new Date().getFullYear()} ClarityAI. All rights reserved.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <a
              href="mailto:hello@clarityai.com"
              style={{ fontSize: 13, color: '#737373', textDecoration: 'none' }}
            >
              hello@clarityai.com
            </a>
            {/* 🎨 EDIT: text-border-default */}
            <span style={{ color: '#2D2D2D' }}>·</span>
            {[
              {
                label: 'Twitter',
                path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
              },
              {
                label: 'LinkedIn',
                path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                // 🎨 EDIT: text-text-muted hover:text-brand
                style={{ color: '#737373', transition: 'color .2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#3B82F6')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#737373')}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: 15, height: 15 }}
                >
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
