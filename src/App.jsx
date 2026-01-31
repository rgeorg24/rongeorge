import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import CustomCursor from './components/CustomCursor'
import FloatingButtons from './components/FloatingButtons'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Education from './pages/Education'
import Certifications from './pages/Certifications'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Publications from './pages/Publications'
import './index.css'

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <CustomCursor />
            <Navbar />
            <FloatingButtons />
            <AnimatePresence mode="wait">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/experience" element={<Experience />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/publications" element={<Publications />} />
                    <Route path="/education" element={<Education />} />
                    <Route path="/certifications" element={<Certifications />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/privacy-policy" element={<Navigate to="/" replace />} />
                </Routes>
            </AnimatePresence>
        </BrowserRouter>
    )
}

export default App
