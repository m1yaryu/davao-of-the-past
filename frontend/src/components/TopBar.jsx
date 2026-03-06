import './TopBar.css'
import { useLocation, useNavigate } from 'react-router-dom'

function TopBar() {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <div className="top-bar">
      <ul>
        <li>
          <svg width="36" height="36" viewBox="0 0 15 15" fill="#a78bfa" xmlns="http://www.w3.org/2000/svg">
            <path d="M13,4H9l0-3L7.5,0L6,1v3H2L1,5v1h13V5L13,4z M7.5,1.5c0.4,0,0.7,0.3,0.7,0.8S7.9,3,7.5,3S6.7,2.7,6.7,2.2&#xA;&#x9;C6.7,1.8,7.1,1.5,7.5,1.5z M13,7H2v4l-1,1.5V14h13v-1.5L13,11V7z M5,12.5H4V8h1V12.5z M8,12.5H7V8h1V12.5z M11,12.5h-1V8h1V12.5z" />
          </svg>
        </li>
        <nav className="nav-links">
          <button
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            onClick={() => navigate('/')}
          >
            Home
          </button>
          <button
            className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}
            onClick={() => navigate('/gallery')}
          >
            Gallery
          </button>
          <button
            className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            onClick={() => navigate('/about')}
          >
            About
          </button>
          <button
            className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            onClick={() => navigate('/contact')}
          >
            Contact
          </button>
        </nav>
      </ul>
    </div>
  )
}

export default TopBar