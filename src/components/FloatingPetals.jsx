import { useEffect, useRef } from 'react'

const PETAL_COUNT = 12

export default function FloatingPetals() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const petals = Array.from({ length: PETAL_COUNT }, (_, i) => {
      const el = document.createElement('div')
      el.className = 'petal'
      el.style.left = `${Math.random() * 100}vw`
      el.style.animationDuration = `${8 + Math.random() * 12}s`
      el.style.animationDelay = `${Math.random() * 10}s`
      el.style.width = `${5 + Math.random() * 8}px`
      el.style.height = `${5 + Math.random() * 8}px`
      el.style.opacity = `${0.2 + Math.random() * 0.4}`
      // alternate gold and rose
      el.style.background = i % 3 === 0 ? '#c9a96e' : i % 3 === 1 ? '#d4a0a8' : '#e8d5b0'
      container.appendChild(el)
      return el
    })

    return () => petals.forEach((el) => el.remove())
  }, [])

  return <div ref={containerRef} className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden />
}
