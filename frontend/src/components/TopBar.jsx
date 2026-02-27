import './TopBar.css'

function TopBar({onToggle}) {
    return <div className="top-bar">
            <ul>
                <li><img src="https://art.pixilart.com/ae7f8b722a19c97.png" className="logo" /></li>
                <li className="hoverable" style={{ marginLeft: 'auto' }} onClick={onToggle}>Gallery</li>
                <li className="hoverable">About</li>
                <li className="hoverable">Contact</li>
            </ul>
    </div>
}
export default TopBar