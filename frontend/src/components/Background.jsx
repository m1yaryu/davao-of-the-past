import './TopBar'
import TopBar from './TopBar'
import BottomBar from './BottomBar'
import TestCard from './GalleryCard'
import './Background.css'
import { useState } from 'react'

function Background() {
    return (
        <div>
            <div className='glow glow-1'></div>
            <div className='glow glow-2'></div>
        </div>
    )
}

export default Background