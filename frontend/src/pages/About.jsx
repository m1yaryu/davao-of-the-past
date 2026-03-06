import TopBar from '../components/TopBar'
import './About.css'

const TEAM = [
    { name: 'Adel Danial', role: 'Frontend Development', initials: 'AD' },
    { name: 'Ryu Miyazaki', role: 'Backend Development', initials: 'RM' }
]

export default function About() {
    return (
        <div className="about-page">

            <div className="ab-glow ab-glow-1" />
            <div className="ab-glow ab-glow-2" />

            <TopBar />

            {/* ── Hero ── */}
            <section className="ab-hero">
                <span className="ab-eyebrow">
                    <span className="ab-eyebrow-dot" />
                    About the Project
                </span>
                <h1 className="ab-heading">
                    Preserving Davao's<br />
                    <span className="ab-heading-accent">Living Memory</span>
                </h1>
                <p className="ab-sub">
                    Davao of the Past is a digital archive dedicated to documenting and preserving
                    the visual history of Davao City — from its pre-colonial roots to the modern era.
                </p>
            </section>

            {/* ── Project description ── */}
            <section className="ab-section">
                <div className="ab-card">
                    <div className="ab-card-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M4 4h12v12H4z" rx="2" strokeLinecap="round" />
                            <path d="M4 8h12M8 8v8" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="ab-card-title">What is this project?</h3>
                        <p className="ab-card-text">
                            Davao of the Past is a community-driven digital archive that collects,
                            organizes, and presents historical photographs, documents, and records
                            of Davao City. Our collection spans over a century of history, covering
                            landmarks, people, culture, economy, and governance.
                        </p>
                    </div>
                </div>

                <div className="ab-card">
                    <div className="ab-card-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <circle cx="10" cy="10" r="7" />
                            <path d="M10 6v4l3 2" strokeLinecap="round" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="ab-card-title">Why does it matter?</h3>
                        <p className="ab-card-text">
                            Many historical records of Davao City are scattered, deteriorating, or
                            lost entirely. This archive serves as a centralized, accessible resource
                            for students, researchers, historians, and anyone who cares about the
                            cultural identity of Davao — ensuring that these stories are not forgotten.
                        </p>
                    </div>
                </div>

                <div className="ab-card">
                    <div className="ab-card-icon">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M10 2l2.4 4.8 5.3.8-3.85 3.75.91 5.3L10 14.25l-4.76 2.43.91-5.3L2.3 7.6l5.3-.8L10 2z" />
                        </svg>
                    </div>
                    <div>
                        <h3 className="ab-card-title">Our mission</h3>
                        <p className="ab-card-text">
                            To make Davao's history accessible to everyone — digitizing and organizing
                            historical materials for academic use, cultural education, and community
                            heritage programs. We believe that understanding the past is essential
                            to shaping a meaningful future for the city.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── Team ── */}
            <section className="ab-team-section">
                <div className="ab-team-header">
                    <span className="ab-section-label">The Team</span>
                    <div className="ab-divider" />
                </div>

                <div className="ab-team-grid">
                    {TEAM.map((member, i) => (
                        <div className="ab-member" key={i} style={{ animationDelay: `${i * 0.08}s` }}>
                            <div className="ab-avatar">{member.initials}</div>
                            <div className="ab-member-info">
                                <span className="ab-member-name">{member.name}</span>
                                <span className="ab-member-role">{member.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}