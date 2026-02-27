import '../components/TopBar'
import TopBar from '../components/TopBar'
import BottomBar from '../components/BottomBar'
import TestCard from '../components/TestCard'
import './Home.css'
import { useState } from 'react'

function Home() {

    const [showGallery, setShowGallery] = useState(false);
    const toggleGallery = () => setShowGallery(!showGallery);

    return (
        <div className="home">
            <TopBar onToggle={toggleGallery} />

            {showGallery && (
                <div className="gallery-container">
                    <TestCard info={{ title: "Title", desc: "container description", img: "https://d15shllkswkct0.cloudfront.net/wp-content/blogs.dir/1/files/2013/10/chrome-hacked-story-300x300.jpg" }} />
                    <TestCard info={{ title: "Title", desc: "2nd Container" }} />
                    <TestCard info={{ title: "Title", desc: "1st Container" }} />
                    <TestCard info={{ title: "Title", desc: "2nd Container" }} />
                    <TestCard info={{ title: "Title", desc: "1st Container" }} />
                    <TestCard info={{ title: "Title", desc: "2nd Container" }} />
                    <TestCard info={{ title: "Title", desc: "2nd Container" }} />
                    <TestCard info={{ title: "Title", desc: "1st Container" }} />
                    <TestCard info={{ title: "Title", desc: "2nd Container" }} />
                    <TestCard info={{ title: "Title", desc: "2nd Container" }} />
                    <TestCard info={{ title: "Title", desc: "1st Container" }} />
                    <TestCard info={{ title: "Title", desc: "2nd Container" }} />
                </div>
            )}

            <BottomBar />
        </div>
    )
}

export default Home