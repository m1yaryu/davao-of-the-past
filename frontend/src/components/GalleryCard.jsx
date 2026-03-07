import './GalleryCard.css'
import React, { useState } from 'react'

function GalleryCard({ info }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleView = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="card">
            <div className="card-overlay">
                <button className="view-btn" onClick={toggleView} style={{ margin: 'auto' }}>
                    <img src={info.img} alt={info.title} />
                </button>
                <h3 >{info.title}</h3>
            </div>
            {isOpen && (
                <div className="overlay" onClick={toggleView}>

                    <div className="centered-element" onClick={(e) => e.stopPropagation()}>
                        <div className="glow glow-1"></div>
                        <div className="glow glow-2"></div>
                        <img src={info.img} style={{ width: '100%',borderRadius:'10px' }} alt="Preview" />
                        <div className="element-info">
                            <h2>{info.title}</h2>
                            <p style={{ flex: '1', border: 'none', overflowWrap: 'break-word' }}>{info.desc}</p>
                            <div className="button-container">
                                <button onClick={toggleView}>Close</button>
                                <button >Share</button>
                                <button >Download</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}

export default GalleryCard