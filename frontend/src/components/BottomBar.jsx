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
            <li><button onClick={toggleFilterView}>Filter</button></li>
            <li>
                <form>
                    <label>
                        Search
                    </label>
                    <input />
                </form>
            </li>
            <li>
                <div className='sort-container'>
                    <button onClick={toggleSortView}>Sort By:</button>
                    {isSortOpen && (
                        <ul className="sort-dropdown-menu">
                            <li>Title</li>
                            <li>Year</li>
                            <li>Location</li>
                        </ul>
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