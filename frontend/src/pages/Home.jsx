import { useNavigate } from 'react-router-dom'
import TopBar from '../components/TopBar'
import './Home.css'

const FEATURED = [
  {
    title: "City Hall, 1938",
    category: "Landmarks",
    img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg"
  },
  {
    title: "Bankerohan Market",
    category: "Economy & Trade",
    img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg"
  },
  {
    title: "Santa Ana Wharf",
    category: "Streets & Districts",
    img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg"
  },
  {
    title: "Rizal Park, 1950s",
    category: "People & Culture",
    img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg"
  },
]

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-page">

      {/* ambient glows */}
      <div className="hp-glow hp-glow-1" />
      <div className="hp-glow hp-glow-2" />

      <TopBar />

      {/* ── Hero ── */}
      <section className="hp-hero">
        <div className="hp-hero-inner">
          <span className="hp-eyebrow">
            <span className="hp-eyebrow-dot" />
            Davao City Archives
          </span>

          <h1 className="hp-heading">
            Revisiting the<br />
            <span className="hp-heading-accent">Heart of Davao</span>
          </h1>

          <p className="hp-sub">
            A curated visual archive of Davao City's history — preserving landmarks,
            culture, and stories for academic research and cultural revitalization.
          </p>

          <div className="hp-cta">
            <button className="hp-btn-primary" onClick={() => navigate('/gallery')}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="1" y="1" width="5" height="5" rx="1.5" />
                <rect x="8" y="1" width="5" height="5" rx="1.5" />
                <rect x="1" y="8" width="5" height="5" rx="1.5" />
                <rect x="8" y="8" width="5" height="5" rx="1.5" />
              </svg>
              Browse the Archive
            </button>
            <button className="hp-btn-ghost" onClick={() => navigate('/about')}>
              Learn more
            </button>
          </div>

          {/* stat pills */}
          <div className="hp-stats">
            <div className="hp-stat">
              <span className="hp-stat-num">200+</span>
              <span className="hp-stat-label">Historical Photos</span>
            </div>
            <div className="hp-stat-divider" />
            <div className="hp-stat">
              <span className="hp-stat-num">6</span>
              <span className="hp-stat-label">Eras Covered</span>
            </div>
            <div className="hp-stat-divider" />
            <div className="hp-stat">
              <span className="hp-stat-num">12</span>
              <span className="hp-stat-label">Districts</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured ── */}
      <section className="hp-featured">
        <div className="hp-featured-header">
          <span className="hp-section-label">Featured</span>
          <button className="hp-view-all" onClick={() => navigate('/gallery')}>
            View all
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 6h8M7 3l3 3-3 3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="hp-featured-grid">
          {FEATURED.map((item, i) => (
            <div
              key={i}
              className="hp-card"
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
              onClick={() => navigate('/gallery')}
            >
              <div className="hp-card-img">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="hp-card-info">
                <span className="hp-card-category">{item.category}</span>
                <span className="hp-card-title">{item.title}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}