import { useState } from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Syne:wght@600;700&display=swap');

  :root {
    --bar-bg: rgba(8, 4, 17, 0.92);
    --bar-border: rgba(255, 255, 255, 0.07);
    --accent: #a78bfa;
    --accent-dim: rgba(167, 139, 250, 0.15);
    --text: #e2e0e8;
    --text-muted: rgba(226, 224, 232, 0.45);
    --surface: rgba(255, 255, 255, 0.04);
    --surface-hover: rgba(255, 255, 255, 0.08);
  }

  .tb-root * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Bar ── */
  .tb-bar {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: var(--bar-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--bar-border);
    padding: 0 24px;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .tb-bar::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.03) 50%, transparent 100%);
    pointer-events: none;
  }

  /* ── Logo ── */
  .tb-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
  }

  .tb-logo img {
    width: 36px;
    height: 36px;
    border-radius: 8px;
    object-fit: cover;
    border: 1px solid var(--bar-border);
  }

  .tb-logo-name {
    font-family: 'Syne', sans-serif;
    font-size: 15px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.04em;
  }

  /* ── Nav ── */
  .tb-nav {
    display: flex;
    align-items: center;
    gap: 4px;
  }

  .tb-nav-link {
    background: none;
    border: none;
    color: var(--text-muted);
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    padding: 7px 14px;
    border-radius: 8px;
    cursor: pointer;
    transition: color 0.15s, background 0.15s;
    letter-spacing: 0.01em;
    white-space: nowrap;
  }

  .tb-nav-link:hover {
    color: var(--text);
    background: var(--surface);
  }

  .tb-nav-link.active {
    color: var(--accent);
    background: var(--accent-dim);
  }

  /* Gallery is a slightly more prominent CTA */
  .tb-nav-link.gallery {
    color: var(--text);
    border: 1px solid var(--bar-border);
    background: var(--surface);
    margin-left: 6px;
  }

  .tb-nav-link.gallery:hover {
    border-color: rgba(167,139,250,0.35);
    color: #fff;
    background: var(--surface-hover);
  }

  .tb-nav-link.gallery.active {
    color: var(--accent);
    background: var(--accent-dim);
    border-color: rgba(167,139,250,0.4);
  }

  /* ── Mobile hamburger ── */
  .tb-hamburger {
    display: none;
    background: var(--surface);
    border: 1px solid var(--bar-border);
    color: var(--text);
    width: 36px;
    height: 36px;
    border-radius: 9px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s;
  }

  .tb-hamburger:hover { background: var(--surface-hover); }

  @media (max-width: 540px) {
    .tb-nav { display: none; }
    .tb-hamburger { display: flex; }
  }

  /* ── Mobile drawer ── */
  .tb-drawer-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(4px);
    z-index: 10000;
    animation: tbFadeIn 0.2s ease forwards;
  }

  @keyframes tbFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .tb-drawer {
    position: fixed;
    top: 0; right: 0;
    width: 220px;
    height: 100%;
    background: #0e0a1c;
    border-left: 1px solid var(--bar-border);
    padding: 24px 16px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    animation: tbSlideIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    z-index: 10001;
  }

  @keyframes tbSlideIn {
    from { transform: translateX(100%); }
    to   { transform: translateX(0); }
  }

  .tb-drawer-close {
    align-self: flex-end;
    background: var(--surface);
    border: 1px solid var(--bar-border);
    color: var(--text-muted);
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-bottom: 12px;
    transition: all 0.15s;
  }
  .tb-drawer-close:hover { color: var(--text); background: var(--surface-hover); }

  .tb-drawer .tb-nav-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 11px 14px;
    font-size: 14px;
  }
`

const NAV_ITEMS = [
  { label: 'About',   key: 'about' },
  { label: 'Contact', key: 'contact' },
]

export default function TopBar({ onToggle, galleryActive }) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <div className="tb-root">
      <style>{styles}</style>

      <div className="tb-bar">

        {/* Logo */}
        <a className="tb-logo" href="#">
          <img src="https://art.pixilart.com/ae7f8b722a19c97.png" alt="Logo" />
          <span className="tb-logo-name">ARTSPACE</span>
        </a>

        {/* Desktop nav */}
        <nav className="tb-nav">
          {NAV_ITEMS.map(item => (
            <button key={item.key} className="tb-nav-link">
              {item.label}
            </button>
          ))}
          <button
            className={`tb-nav-link gallery ${galleryActive ? 'active' : ''}`}
            onClick={onToggle}
          >
            Gallery
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button className="tb-hamburger" onClick={() => setDrawerOpen(true)}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M2 4h12M2 8h12M2 12h12" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile drawer */}
      {drawerOpen && (
        <div className="tb-drawer-overlay" onClick={() => setDrawerOpen(false)}>
          <div className="tb-drawer" onClick={e => e.stopPropagation()}>
            <button className="tb-drawer-close" onClick={() => setDrawerOpen(false)}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round"/>
              </svg>
            </button>
            {NAV_ITEMS.map(item => (
              <button key={item.key} className="tb-nav-link" onClick={() => setDrawerOpen(false)}>
                {item.label}
              </button>
            ))}
            <button
              className={`tb-nav-link gallery ${galleryActive ? 'active' : ''}`}
              onClick={() => { onToggle?.(); setDrawerOpen(false) }}
            >
              Gallery
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
