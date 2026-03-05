import './BottomBar.css'
import React, { useState } from 'react'


function BottomBar() {

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);

    const toggleFilterView = () => {
        setIsFilterOpen(!isFilterOpen);
    };

    const toggleSortView = () => {
        setIsSortOpen(!isSortOpen);
    };

    return <div className="bottom-bar">
        <ul>
            <li>
                <button className='menu-button' onClick={toggleFilterView}>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                        <path d="M1 3h14M4 8h8M7 13h2" strokeLinecap="round" />
                    </svg>
                    Filter
                </button>
            </li>

            <li className='search-li'>
                <div className='search-bar'>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="rgba(226,224,232,0.45)" strokeWidth="1.6">
                        <circle cx="6.5" cy="6.5" r="4.5" />
                        <path d="M10.5 10.5L14 14" strokeLinecap="round" />
                    </svg>
                    <input className='search-input'
                        placeholder="Search…"
                    />
                </div>

            </li>

            <li>
                <div className='sort-container'>
                    <button className='menu-button' onClick={toggleSortView}>
                        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
                            <path d="M2 4h12M4 8h8M6 12h4" strokeLinecap="round" />
                        </svg>
                        Sort By:
                    </button>
                    {isSortOpen && (
                        <div>
                            Sort
                        </div>
                    )}
                </div>
            </li>

        </ul>

        {isFilterOpen && (
            <div className="filter-overlay" onClick={toggleFilterView}>
                <div className="filter-centered-element" onClick={(e) => e.stopPropagation()}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </div>
            </div>
        )
        }


    </div >
}
export default BottomBar