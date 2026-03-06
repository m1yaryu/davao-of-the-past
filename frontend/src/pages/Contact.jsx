import TopBar from '../components/TopBar'
import './Contact.css'

export default function Contact() {
    return (

        <div className="contact-page">
            <TopBar />
            <div className="ct-glow ct-glow-1" />
            <div className="ct-glow ct-glow-2" />



            {/* ── Hero ── */}
            <section className="ct-hero">
                <span className="ct-eyebrow">
                    <span className="ct-eyebrow-dot" />
                    Get in Touch
                </span>
                <h1 className="ct-heading">
                    Reach out to<br />
                    <span className="ct-heading-accent">our team</span>
                </h1>
                <p className="ct-sub">
                    Have a historical photo to contribute? Questions about the archive?
                    We'd love to hear from you.
                </p>
            </section>

            {/* ── Contact cards ── */}
            <section className="ct-section">

                {/* Email */}
                <a className="ct-card" href="mailto:davaoofthepast@school.edu.ph">
                    <div className="ct-card-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <rect x="2" y="5" width="16" height="12" rx="2" />
                            <path d="M2 7l8 5 8-5" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="ct-card-body">
                        <span className="ct-card-label">Email</span>
                        <span className="ct-card-value">xsrillixon@gmail.com</span>
                        <span className="ct-card-hint">We typically reply within 2–3 business days</span>
                    </div>
                    <svg className="ct-card-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>

                {/* Institution */}
                <div className="ct-card ct-card-static">
                    <div className="ct-card-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M3 7l7-4 7 4v9H3V7z" />
                            <path d="M8 16v-5h4v5" />
                        </svg>
                    </div>
                    <div className="ct-card-body">
                        <span className="ct-card-label">Institution</span>
                        <span className="ct-card-value">Mapúa Malayan Colleges Mindanao</span>
                        <span className="ct-card-hint">Talomo, Davao City, 8000 Davao del Sur</span>
                    </div>
                </div>

                {/* Department */}
                <div className="ct-card ct-card-static">
                    <div className="ct-card-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <circle cx="10" cy="7" r="3" />
                            <path d="M4 17c0-3.31 2.69-6 6-6s6 2.69 6 6" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div className="ct-card-body">
                        <span className="ct-card-label">Department</span>
                        <span className="ct-card-value">College of Computing and Information Science</span>
                        <span className="ct-card-hint">IT103 — Web Programming</span>
                    </div>
                </div>

            </section>

            {/* ── Contribute banner ── */}
            <section className="ct-banner-wrap">
                <div className="ct-banner">
                    <div className="ct-banner-text">
                        <h3 className="ct-banner-title">Have a historical photo?</h3>
                        <p className="ct-banner-sub">
                            We welcome contributions from the community. If you have photos,
                            documents, or stories from Davao's past, reach out and help us grow the archive.
                        </p>
                    </div>
                    <a className="ct-banner-btn" href="mailto:davaoofthepast@school.edu.ph">
                        Contribute
                        <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M2 6.5h9M8 3l4 3.5L8 10" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                </div>
            </section>

        </div>
    )
}