import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import TestCard from '../components/TestCard'
import { useState } from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Syne:wght@600;700;800&display=swap');

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

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body, html {
    background: #080411;
    min-height: 100vh;
    width: 100%;
  }

  #root {
    background: #080411;
    max-width: 1280px;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  /* ── Page shell ── */
  .home {
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 100vh;
    background: #080411;
    font-family: 'DM Sans', sans-serif;
    color: var(--text);
    position: relative;
    overflow: hidden;
  }

  /* ambient glow blobs */
  .home-glow {
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    filter: blur(90px);
    opacity: 0.18;
  }
  .home-glow-1 {
    width: 500px; height: 500px;
    background: #a78bfa;
    top: -120px; left: -100px;
  }
  .home-glow-2 {
    width: 380px; height: 380px;
    background: #6d28d9;
    bottom: 120px; right: -80px;
  }

  /* ── Hero ── */
  .home-hero {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 100px 32px 80px;
    flex: 1;
    gap: 24px;
    transition: all 0.5s cubic-bezier(0.22, 1, 0.36, 1);
  }

  .home-hero.hidden {
    opacity: 0;
    pointer-events: none;
    height: 0;
    padding: 0;
    overflow: hidden;
  }

  .home-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: var(--accent-dim);
    border: 1px solid rgba(167,139,250,0.25);
    border-radius: 99px;
    padding: 5px 14px;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent);
    animation: heroFadeUp 0.6s 0.1s cubic-bezier(0.22,1,0.36,1) both;
  }

  .home-eyebrow-dot {
    width: 6px; height: 6px;
    background: var(--accent);
    border-radius: 50%;
    animation: pulse 2s infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.5; transform: scale(0.7); }
  }

  .home-heading {
    font-family: 'Syne', sans-serif;
    font-size: clamp(40px, 7vw, 76px);
    font-weight: 800;
    color: #fff;
    line-height: 1.05;
    letter-spacing: -0.02em;
    max-width: 700px;
    animation: heroFadeUp 0.6s 0.2s cubic-bezier(0.22,1,0.36,1) both;
  }

  .home-heading-accent {
    color: var(--accent);
    position: relative;
  }

  .home-sub {
    font-size: 16px;
    color: var(--text-muted);
    max-width: 420px;
    line-height: 1.7;
    animation: heroFadeUp 0.6s 0.3s cubic-bezier(0.22,1,0.36,1) both;
  }

  .home-hero-cta {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    animation: heroFadeUp 0.6s 0.4s cubic-bezier(0.22,1,0.36,1) both;
  }

  .h-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border-radius: 12px;
    padding: 12px 24px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
    letter-spacing: 0.01em;
  }
  .h-btn:active { transform: scale(0.97); }

  .h-btn-primary {
    background: var(--accent);
    border: none;
    color: #0e0a1c;
  }
  .h-btn-primary:hover { filter: brightness(1.1); }

  .h-btn-ghost {
    background: var(--surface);
    border: 1px solid var(--bar-border);
    color: var(--text);
  }
  .h-btn-ghost:hover {
    background: var(--surface-hover);
    border-color: rgba(167,139,250,0.3);
    color: #fff;
  }

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── Gallery ── */
  .gallery-wrap {
    position: relative;
    z-index: 1;
    flex: 1;
    padding: 28px 24px 100px;
  }

  .gallery-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    animation: heroFadeUp 0.4s cubic-bezier(0.22,1,0.36,1) both;
  }

  .gallery-label {
    font-family: 'Syne', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: var(--text-muted);
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .gallery-count {
    font-size: 12px;
    color: var(--text-muted);
    background: var(--surface);
    border: 1px solid var(--bar-border);
    border-radius: 99px;
    padding: 3px 12px;
  }

  .gallery-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 18px;
    animation: galleryIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
  }

  /* stagger children */
  .gallery-container > *:nth-child(1)  { animation-delay: 0.05s; }
  .gallery-container > *:nth-child(2)  { animation-delay: 0.10s; }
  .gallery-container > *:nth-child(3)  { animation-delay: 0.15s; }
  .gallery-container > *:nth-child(4)  { animation-delay: 0.20s; }
  .gallery-container > *:nth-child(5)  { animation-delay: 0.25s; }
  .gallery-container > *:nth-child(6)  { animation-delay: 0.30s; }
  .gallery-container > *:nth-child(n+7){ animation-delay: 0.35s; }

  .gallery-container > * {
    opacity: 0;
    animation: cardIn 0.5s cubic-bezier(0.22, 1, 0.36, 1) forwards;
    /* override tc-card flex-basis so grid takes over */
    flex-basis: unset !important;
  }

  @keyframes galleryIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  @keyframes cardIn {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
`

const ITEMS = [
  { title: "Chrome Intrusion", desc: "A visual study of digital vulnerability and network exposure.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Neon Bloom",       desc: "Organic forms rendered in synthetic light.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Deep Trace",       desc: "Layers of signal noise distilled into form.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Signal Loss",      desc: "What remains when the transmission ends.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Void Pattern",     desc: "Structure emerging from deliberate absence.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Ultraviolet",      desc: "Color at the boundary of human perception.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Fracture Map",     desc: "Terrain of broken surfaces, re-assembled.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Dark Matter",      desc: "The weight of what cannot be seen.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Echo Chamber",     desc: "Reflections of a signal bounced into infinity.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Refraction",       desc: "Light bending through an unknown medium.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Latent Form",      desc: "Shape held in potential, not yet resolved.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
  { title: "Zero State",       desc: "The space before the first instruction.", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" },
]

export default function Home() {
  const [showGallery, setShowGallery] = useState(false)
  const toggleGallery = () => setShowGallery(v => !v)

  return (
    <div className="home">
      <style>{styles}</style>

      {/* ambient glows */}
      <div className="home-glow home-glow-1" />
      <div className="home-glow home-glow-2" />

      <TopBar onToggle={toggleGallery} galleryActive={showGallery} />

      {/* Hero — hidden when gallery is open */}
      <div className={`home-hero ${showGallery ? 'hidden' : ''}`}>
        <span className="home-eyebrow">
          <span className="home-eyebrow-dot" />
          Curated Collection
        </span>
        <h1 className="home-heading">
          Art that lives<br />
          <span className="home-heading-accent">beyond the frame</span>
        </h1>
        <p className="home-sub">
          A personal archive of works spanning mediums, eras, and edges of the known aesthetic world.
        </p>
        <div className="home-hero-cta">
          <button className="h-btn h-btn-primary" onClick={toggleGallery}>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="1" y="1" width="5" height="5" rx="1.5"/>
              <rect x="8" y="1" width="5" height="5" rx="1.5"/>
              <rect x="1" y="8" width="5" height="5" rx="1.5"/>
              <rect x="8" y="8" width="5" height="5" rx="1.5"/>
            </svg>
            Browse Gallery
          </button>
          <button className="h-btn h-btn-ghost">
            Learn more
          </button>
        </div>
      </div>

      {/* Gallery */}
      {showGallery && (
        <div className="gallery-wrap">
          <div className="gallery-header">
            <span className="gallery-label">All Works</span>
            <span className="gallery-count">{ITEMS.length} pieces</span>
          </div>
          <div className="gallery-container">
            {ITEMS.map((item, i) => (
              <TestCard key={i} info={item} />
            ))}
          </div>
        </div>
      )}

      <BottomBar />
    </div>
  )
}