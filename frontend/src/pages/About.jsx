import '../components/TopBar'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import GalleryCard from '../components/GalleryCard'
import './About.css'
import { useState } from 'react'

function About() {
    return (
        <div className="home">
            <TopBar/>

                <div className="gallery-container">
                    <GalleryCard info={{ title: "Title", desc: "About Page", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" }} />
                </div>

            <BottomBar />
        </div>
    )
}

export default About