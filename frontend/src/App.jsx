import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TestCard from "./components/TestCard"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Gallery from "./pages/Gallery"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Gallery />} />
        <Route path="/gallery"        element={<Gallery />} />
        <Route path="/about"   element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

function Test({ string }) {
  return (
    <>
      <div>
        <p>{string}</p>
      </div>
    </>
  )
}

export default App
