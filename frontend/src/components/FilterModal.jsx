import { useState } from 'react'
import './FilterModal.css'

const FILTERS = [
  {
    label: 'Era',
    key: 'era',
    options: ['Pre-Colonial', 'Spanish Period', 'American Period', 'Japanese Occupation', 'Post-War', 'Modern Davao'],
  },
  {
    label: 'Category',
    key: 'category',
    options: ['Landmarks', 'Streets & Districts', 'People & Culture', 'Religion & Traditions', 'Economy & Trade', 'Government'],
  },
  {
    label: 'Location',
    key: 'location',
    options: ['Poblacion', 'Chinatown', 'Bankerohan', 'Toril', 'Talomo', 'Santa Ana', 'Agdao'],
  },
  {
    label: 'Type',
    key: 'type',
    options: ['Photograph', 'Illustration', 'Map', 'Document', 'Portrait'],
  },
]

function FilterModal({ isOpen, onClose, onApply }) {
  const [active, setActive] = useState({})

  const toggle = (key, option) => {
    const id = `${key}:${option}`
    setActive(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const isActive = (key, option) => !!active[`${key}:${option}`]

  const activeCount = Object.values(active).filter(Boolean).length

  const handleClear = () => setActive({})

  const handleApply = () => {
    onApply?.(active)
    onClose?.()
  }

  if (!isOpen) return null

  return (
    <div className="fm-overlay" onClick={onClose}>
      <div className="fm-modal" onClick={e => e.stopPropagation()}>

        <div className="fm-header">
          <div className="fm-header-left">
            <span className="fm-title">Filter</span>
            {activeCount > 0 && (
              <span className="fm-count">{activeCount} selected</span>
            )}
          </div>
          <button className="fm-close" onClick={onClose}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M2 2l8 8M10 2l-8 8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="fm-body">
          {FILTERS.map((group, i) => (
            <div className="fm-group" key={group.key} style={{ animationDelay: `${i * 0.05}s` }}>
              <span className="fm-group-label">{group.label}</span>
              <div className="fm-chips">
                {group.options.map(opt => (
                  <button
                    key={opt}
                    className={`fm-chip ${isActive(group.key, opt) ? 'active' : ''}`}
                    onClick={() => toggle(group.key, opt)}
                  >
                    {isActive(group.key, opt) && (
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M1.5 5l2.5 2.5 4.5-4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="fm-footer">
          <button className="fm-btn-ghost" onClick={handleClear}>
            Clear all
          </button>
          <button className="fm-btn-primary" onClick={handleApply}>
            Apply{activeCount > 0 ? ` (${activeCount})` : ''}
          </button>
        </div>

      </div>
    </div>
  )
}

export default FilterModal