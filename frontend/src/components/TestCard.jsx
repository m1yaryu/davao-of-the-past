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

  .tc-root * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Card ── */
  .tc-card {
    flex-basis: calc(33.333% - 40px);
    flex-grow: 0;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .tc-tile {
    width: 100%;
    max-width: 300px;
    height: 300px;
    position: relative;
    border-radius: 14px;
    overflow: hidden;
    cursor: pointer;
    border: 1px solid var(--bar-border);
    background: #1a1228;
  }

  .tc-tile img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .tc-tile:hover img {
    transform: scale(1.05);
  }

  /* bottom gradient */
  .tc-tile::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 45%,
      rgba(8, 4, 17, 0.85) 100%
    );
    pointer-events: none;
    transition: opacity 0.3s;
  }

  /* hover tint */
  .tc-tile::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(167, 139, 250, 0.08);
    opacity: 0;
    transition: opacity 0.25s;
    z-index: 1;
    pointer-events: none;
  }

  .tc-tile:hover::before { opacity: 1; }

  .tc-tile-footer {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 14px 16px;
    z-index: 2;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    gap: 8px;
  }

  .tc-title {
    font-family: 'Syne', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.02em;
    line-height: 1.3;
    text-shadow: 0 1px 4px rgba(0,0,0,0.6);
  }

  .tc-expand-btn {
    flex-shrink: 0;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.18);
    color: #fff;
    width: 30px;
    height: 30px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s;
  }

  .tc-expand-btn:hover {
    background: rgba(167,139,250,0.3);
    border-color: rgba(167,139,250,0.5);
  }

  /* ── Modal overlay ── */
  .tc-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    animation: tcFadeIn 0.2s ease forwards;
    padding: 24px;
  }

  @keyframes tcFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  /* ── Modal ── */
  .tc-modal {
    background: #0e0a1c;
    border: 1px solid rgba(167,139,250,0.15);
    border-radius: 18px;
    width: min(780px, 100%);
    max-height: 90vh;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    box-shadow: 0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(167,139,250,0.06);
    animation: tcZoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes tcZoomIn {
    from { opacity: 0; transform: scale(0.93) translateY(16px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  /* left image panel */
  .tc-modal-img {
    flex: 0 0 340px;
    position: relative;
    overflow: hidden;
    background: #1a1228;
  }

  .tc-modal-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* right info panel */
  .tc-modal-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 28px 28px 24px;
    overflow-y: auto;
    min-width: 0;
  }

  .tc-modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 12px;
    margin-bottom: 16px;
  }

  .tc-modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 20px;
    font-weight: 700;
    color: #fff;
    letter-spacing: 0.02em;
    line-height: 1.25;
  }

  .tc-modal-close {
    flex-shrink: 0;
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
    transition: all 0.15s;
  }
  .tc-modal-close:hover { background: var(--surface-hover); color: #fff; }

  .tc-divider {
    height: 1px;
    background: var(--bar-border);
    margin-bottom: 16px;
  }

  .tc-modal-desc {
    font-size: 13.5px;
    color: var(--text-muted);
    line-height: 1.7;
    flex: 1;
    overflow-wrap: break-word;
  }

  /* action buttons */
  .tc-modal-actions {
    display: flex;
    gap: 8px;
    margin-top: 24px;
    flex-wrap: wrap;
  }

  .tc-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    background: var(--surface);
    border: 1px solid var(--bar-border);
    color: var(--text);
    border-radius: 10px;
    padding: 9px 16px;
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    cursor: pointer;
    transition: background 0.15s, border-color 0.15s, color 0.15s;
  }

  .tc-btn:hover {
    background: var(--surface-hover);
    border-color: rgba(167,139,250,0.3);
    color: #fff;
  }

  .tc-btn:active { transform: scale(0.97); }

  .tc-btn-primary {
    background: var(--accent);
    border-color: transparent;
    color: #0e0a1c;
    font-weight: 500;
  }

  .tc-btn-primary:hover {
    filter: brightness(1.1);
    border-color: transparent;
    color: #0e0a1c;
  }

  /* responsive: stack on small screens */
  @media (max-width: 600px) {
    .tc-modal {
      flex-direction: column;
      max-height: 95vh;
    }
    .tc-modal-img {
      flex: 0 0 220px;
    }
  }
`

export default function TestCard({ info }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="tc-root">
      <style>{styles}</style>

      {/* Tile */}
      <div className="tc-card">
        <div className="tc-tile" onClick={() => setIsOpen(true)}>
          <img src={info.img} alt={info.title} />
          <div className="tc-tile-footer">
            <span className="tc-title">{info.title}</span>
            <button className="tc-expand-btn" onClick={e => { e.stopPropagation(); setIsOpen(true) }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M7 1h4v4M5 7L11 1M1 5v6h6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="tc-overlay" onClick={() => setIsOpen(false)}>
          <div className="tc-modal" onClick={e => e.stopPropagation()}>

            <div className="tc-modal-img">
              <img src={info.img} alt={info.title} />
            </div>

            <div className="tc-modal-info">
              <div className="tc-modal-header">
                <h2 className="tc-modal-title">{info.title}</h2>
                <button className="tc-modal-close" onClick={() => setIsOpen(false)}>
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <div className="tc-divider" />

              <p className="tc-modal-desc">{info.desc}</p>

              <div className="tc-modal-actions">
                <button className="tc-btn" onClick={() => setIsOpen(false)}>
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M1 1l11 11M12 1L1 12" strokeLinecap="round"/>
                  </svg>
                  Close
                </button>
                <button className="tc-btn">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="10" cy="2.5" r="1.5"/><circle cx="10" cy="10.5" r="1.5"/><circle cx="2.5" cy="6.5" r="1.5"/>
                    <path d="M8.6 3.4L3.9 5.6M8.6 9.6L3.9 7.4" strokeLinecap="round"/>
                  </svg>
                  Share
                </button>
                <button className="tc-btn tc-btn-primary">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M6.5 1v8M3 6l3.5 3.5L10 6" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 11h11" strokeLinecap="round"/>
                  </svg>
                  Download
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
