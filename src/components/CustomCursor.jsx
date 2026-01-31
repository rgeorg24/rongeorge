import React, { useEffect, useRef } from 'react'
import './CustomCursor.css'

export default function CustomCursor() {
    const dot = useRef(null)
    const outline = useRef(null)

    useEffect(() => {
        const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
        if (isTouch) return

        const dotEl = dot.current
        const outlineEl = outline.current
        let mouseX = 0
        let mouseY = 0
        let outlineX = 0
        let outlineY = 0
        let rafId = null

        const onMouseMove = (e) => {
            mouseX = e.clientX
            mouseY = e.clientY
            if (dotEl) dotEl.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`
        }

        const animate = () => {
            outlineX += (mouseX - outlineX) / 8
            outlineY += (mouseY - outlineY) / 8
            if (outlineEl) outlineEl.style.transform = `translate3d(${outlineX}px, ${outlineY}px, 0)`
            rafId = requestAnimationFrame(animate)
        }

        document.addEventListener('mousemove', onMouseMove)
        animate()

        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            if (rafId) cancelAnimationFrame(rafId)
        }
    }, [])

    return (
        <>
            <div ref={dot} className="custom-cursor-dot" />
            <div ref={outline} className="custom-cursor-outline" />
        </>
    )
}

