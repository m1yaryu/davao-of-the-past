import React, { useState, useRef, useEffect } from 'react'

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500&family=Syne:wght@600&display=swap');

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

  .bb-root * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'DM Sans', sans-serif;
  }

  /* ── Bar ── */
  .bb-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    background: var(--bar-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border-top: 1px solid var(--bar-border);
    padding: 12px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .bb-bar::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, rgba(167,139,250,0.03) 50%, transparent 100%);
    pointer-events: none;
  }

  /* ── Shared button ── */
  .bb-btn {
    display: flex;
    align-items: center;
    gap: 7px;
    background: var(--surface);
    color: var(--text);
    border: 1px solid var(--bar-border);
    border-radius: 10px;
    padding: 9px 16px;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.01em;
    cursor: pointer;
    transition: background 0.18s, border-color 0.18s, color 0.18s, transform 0.12s;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .bb-btn:hover {
    background: var(--surface-hover);
    border-color: rgba(167,139,250,0.3);
    color: #fff;
  }

  .bb-btn:active { transform: scale(0.97); }

  .bb-btn.active {
    background: var(--accent-dim);
    border-color: rgba(167,139,250,0.5);
    color: var(--accent);
  }

  .bb-btn svg { flex-shrink: 0; }

  /* ── Search ── */
  .bb-search {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
    max-width: 340px;
    background: var(--surface);
    border: 1px solid var(--bar-border);
    border-radius: 10px;
    padding: 0 14px;
    transition: border-color 0.18s, background 0.18s;
  }

  .bb-search:focus-within {
    border-color: rgba(167,139,250,0.4);
    background: var(--surface-hover);
  }

  .bb-search svg { color: var(--text-muted); flex-shrink: 0; }

  .bb-search input {
    flex: 1;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text);
    font-size: 13px;
    font-family: 'DM Sans', sans-serif;
    padding: 9px 0;
    caret-color: var(--accent);
  }

  .bb-search input::placeholder { color: var(--text-muted); }

  .bb-clear {
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 2px;
    display: flex;
    align-items: center;
    border-radius: 4px;
    transition: color 0.15s;
  }
  .bb-clear:hover { color: var(--text); }

  /* ── Sort dropdown ── */
  .bb-sort-wrap {
    position: relative;
  }

  .bb-sort-label {
    font-size: 10px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-right: 2px;
  }

  .bb-sort-value {
    font-weight: 500;
    color: var(--accent);
  }

  .bb-chevron {
    transition: transform 0.2s;
  }
  .bb-chevron.open { transform: rotate(180deg); }

  .bb-dropdown {
    position: absolute;
    bottom: calc(100% + 10px);
    right: 0;
    background: rgba(14, 10, 28, 0.97);
    border: 1px solid var(--bar-border);
    border-radius: 12px;
    overflow: hidden;
    min-width: 148px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.6), 0 0 0 1px rgba(167,139,250,0.08);
    animation: dropUp 0.18s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes dropUp {
    from { opacity: 0; transform: translateY(6px) scale(0.97); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }

  .bb-dropdown-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;
    font-size: 13px;
    color: var(--text);
    cursor: pointer;
    transition: background 0.12s;
    border-bottom: 1px solid var(--bar-border);
  }

  .bb-dropdown-item:last-child { border-bottom: none; }

  .bb-dropdown-item:hover {
    background: var(--surface-hover);
    color: #fff;
  }

  .bb-dropdown-item.selected {
    color: var(--accent);
    background: var(--accent-dim);
  }

  .bb-dropdown-item .check {
    width: 14px;
    height: 14px;
    opacity: 0;
    transition: opacity 0.12s;
  }
  .bb-dropdown-item.selected .check { opacity: 1; }

  /* ── Filter overlay ── */
  .bb-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.65);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    animation: fadeIn 0.2s ease forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .bb-modal {
    background: #0e0a1c;
    border: 1px solid rgba(167,139,250,0.15);
    border-radius: 18px;
    width: min(480px, 90vw);
    max-height: 80vh;
    overflow-y: auto;
    box-shadow: 0 24px 64px rgba(0,0,0,0.8), 0 0 0 1px rgba(167,139,250,0.06);
    animation: zoomIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  }

  @keyframes zoomIn {
    from { opacity: 0; transform: scale(0.93) translateY(16px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  .bb-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px 16px;
    border-bottom: 1px solid var(--bar-border);
  }

  .bb-modal-title {
    font-family: 'Syne', sans-serif;
    font-size: 16px;
    color: #fff;
    letter-spacing: 0.02em;
  }

  .bb-modal-close {
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
  .bb-modal-close:hover { background: var(--surface-hover); color: #fff; }

  .bb-modal-body {
    padding: 20px 24px 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .bb-filter-group label {
    display: block;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 10px;
  }

  .bb-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .bb-chip {
    background: var(--surface);
    border: 1px solid var(--bar-border);
    color: var(--text);
    border-radius: 8px;
    padding: 6px 14px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.15s;
  }
  .bb-chip:hover { border-color: rgba(167,139,250,0.3); color: #fff; }
  .bb-chip.active {
    background: var(--accent-dim);
    border-color: rgba(167,139,250,0.5);
    color: var(--accent);
  }

  .bb-modal-footer {
    padding: 0 24px 24px;
    display: flex;
    gap: 10px;
    justify-content: flex-end;
  }

  .bb-btn-ghost {
    background: none;
    border: 1px solid var(--bar-border);
    color: var(--text-muted);
    border-radius: 10px;
    padding: 9px 18px;
    font-size: 13px;
    cursor: pointer;
    transition: all 0.15s;
    font-family: 'DM Sans', sans-serif;
  }
  .bb-btn-ghost:hover { color: var(--text); border-color: rgba(255,255,255,0.2); }

  .bb-btn-primary {
    background: var(--accent);
    border: none;
    color: #0e0a1c;
    border-radius: 10px;
    padding: 9px 20px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s;
    font-family: 'DM Sans', sans-serif;
  }
  .bb-btn-primary:hover { filter: brightness(1.1); }
  .bb-btn-primary:active { transform: scale(0.97); }
`

const SORT_OPTIONS = ['Title', 'Year', 'Location']

const FILTER_GROUPS = [
  { label: 'Type',   options: ['Painting', 'Sculpture', 'Photography', 'Digital'] },
  { label: 'Era',    options: ['Ancient', 'Medieval', 'Modern', 'Contemporary'] },
  { label: 'Region', options: ['Europe', 'Americas', 'Asia', 'Africa', 'Oceania'] },
]

export default function BottomBar() {
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSortOpen,   setIsSortOpen]   = useState(false)
  const [sortBy,       setSortBy]       = useState('Title')
  const [search,       setSearch]       = useState('')
  const [activeChips,  setActiveChips]  = useState({})

  const sortRef = useRef(null)

  // Close sort dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setIsSortOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const toggleChip = (group, option) => {
    const key = `${group}:${option}`
    setActiveChips(prev => ({ ...prev, [key]: !prev[key] }))
  }

  const activeFilterCount = Object.values(activeChips).filter(Boolean).length

  const clearFilters = () => setActiveChips({})

  return (
    <div className="bb-root">
      <style>{styles}</style>

      <div className="bb-bar">

        {/* Filter button */}
        <button
          className={`bb-btn ${isFilterOpen ? 'active' : ''}`}
          onClick={() => setIsFilterOpen(true)}
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M2 4h12M4 8h8M6 12h4" strokeLinecap="round"/>
          </svg>
          Filters
          {activeFilterCount > 0 && (
            <span style={{
              background: 'var(--accent)',
              color: '#0e0a1c',
              borderRadius: '99px',
              fontSize: '10px',
              fontWeight: 600,
              padding: '1px 6px',
              marginLeft: 2,
            }}>
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Search */}
        <div className="bb-search">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="6.5" cy="6.5" r="4.5"/>
            <path d="M10.5 10.5L14 14" strokeLinecap="round"/>
          </svg>
          <input
            placeholder="Search…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {search && (
            <button className="bb-clear" onClick={() => setSearch('')}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round"/>
              </svg>
            </button>
          )}
        </div>

        {/* Sort */}
        <div className="bb-sort-wrap" ref={sortRef}>
          <button
            className={`bb-btn ${isSortOpen ? 'active' : ''}`}
            onClick={() => setIsSortOpen(v => !v)}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M2 5h12M4 8h8M6 11h4" strokeLinecap="round"/>
            </svg>
            <span className="bb-sort-label">Sort</span>
            <span className="bb-sort-value">{sortBy}</span>
            <svg className={`bb-chevron ${isSortOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 4l4 4 4-4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {isSortOpen && (
            <div className="bb-dropdown">
              {SORT_OPTIONS.map(opt => (
                <div
                  key={opt}
                  className={`bb-dropdown-item ${sortBy === opt ? 'selected' : ''}`}
                  onClick={() => { setSortBy(opt); setIsSortOpen(false) }}
                >
                  {opt}
                  <svg className="check" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M2 7l4 4 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Filter modal */}
      {isFilterOpen && (
        <div className="bb-overlay" onClick={() => setIsFilterOpen(false)}>
          <div className="bb-modal" onClick={e => e.stopPropagation()}>

            <div className="bb-modal-header">
              <span className="bb-modal-title">Filter</span>
              <button className="bb-modal-close" onClick={() => setIsFilterOpen(false)}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round"/>
                </svg>
              </button>
            </div>

            <div className="bb-modal-body">
              {FILTER_GROUPS.map(group => (
                <div className="bb-filter-group" key={group.label}>
                  <label>{group.label}</label>
                  <div className="bb-chips">
                    {group.options.map(opt => (
                      <button
                        key={opt}
                        className={`bb-chip ${activeChips[`${group.label}:${opt}`] ? 'active' : ''}`}
                        onClick={() => toggleChip(group.label, opt)}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="bb-modal-footer">
              <button className="bb-btn-ghost" onClick={clearFilters}>Clear all</button>
              <button className="bb-btn-primary" onClick={() => setIsFilterOpen(false)}>
                Apply{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  )
}
