import { useEffect, useRef } from 'react'

/* ------------------------------------------------------------------
 * Sparkle cursor — creates tiny glowing stars + particles on move.
 * Throttled to ~60fps worth of particles, desktop only, respects
 * reduced motion. Elegant, not overwhelming.
 * ------------------------------------------------------------------ */
export function SparkleCursor() {
  const lastSpawn = useRef(0)
  const lastPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Skip on touch devices & reduced motion
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(hover: none)').matches
    if (prefersReduced || isTouch) return

    const onMove = (e) => {
      const now = performance.now()
      // Throttle: spawn only every 45ms
      if (now - lastSpawn.current < 45) return

      const dx = e.clientX - lastPos.current.x
      const dy = e.clientY - lastPos.current.y
      const speed = Math.hypot(dx, dy)
      // Skip if barely moved, or moved too fast (avoid spam)
      if (speed < 2) return

      lastSpawn.current = now
      lastPos.current = { x: e.clientX, y: e.clientY }

      // Alternate between dot sparkle and star sparkle
      const isStar = Math.random() > 0.55
      const el = document.createElement(isStar ? 'span' : 'span')
      el.className = isStar ? 'star-sparkle' : 'sparkle'

      const jitterX = (Math.random() - 0.5) * 30
      const jitterY = (Math.random() - 0.5) * 30
      el.style.left = `${e.clientX + jitterX * 0.3}px`
      el.style.top = `${e.clientY + jitterY * 0.3}px`
      el.style.setProperty('--dx', `${jitterX}px`)
      el.style.setProperty('--dy', `${jitterY - 20}px`)

      if (isStar) {
        const size = 10 + Math.random() * 8
        el.innerHTML = `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 0l2.4 7.6L22 10l-7.6 2.4L12 20l-2.4-7.6L2 10l7.6-2.4z"/></svg>`
      } else {
        const size = 4 + Math.random() * 5
        el.style.width = `${size}px`
        el.style.height = `${size}px`
      }

      document.body.appendChild(el)
      setTimeout(() => el.remove(), 1200)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return null
}

/* ------------------------------------------------------------------
 * Scroll reveal — adds .is-visible when element enters viewport.
 * ------------------------------------------------------------------ */
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/* ------------------------------------------------------------------
 * Animated background — floating orbs + starfield canvas.
 * ------------------------------------------------------------------ */
export function AtmosphereBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let raf
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = (canvas.width = window.innerWidth)
    let h = (canvas.height = window.innerHeight)

    const STAR_COUNT = Math.min(90, Math.floor((w * h) / 22000))
    const stars = Array.from({ length: STAR_COUNT }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random() * 0.7 + 0.2,
      tw: Math.random() * 0.02 + 0.005,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.6 ? 260 : 220, // purple or blue
    }))

    const render = (t) => {
      ctx.clearRect(0, 0, w, h)
      stars.forEach((s) => {
        const alpha = s.a * (0.55 + 0.45 * Math.sin(t * s.tw + s.phase))
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${s.hue}, 90%, 85%, ${alpha})`
        ctx.shadowColor = `hsla(${s.hue}, 90%, 75%, ${alpha})`
        ctx.shadowBlur = 6
        ctx.fill()
      })
      if (!prefersReduced) raf = requestAnimationFrame(render)
    }
    render(0)

    const onResize = () => {
      w = canvas.width = window.innerWidth
      h = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {/* Floating gradient orbs */}
      <div className="orb animate-float-slow" style={{ width: 500, height: 500, top: '-10%', left: '-10%', background: 'radial-gradient(circle, #7c54ff, transparent 60%)' }} />
      <div className="orb animate-float-slower" style={{ width: 420, height: 420, top: '40%', right: '-10%', background: 'radial-gradient(circle, #4a86e8, transparent 60%)' }} />
      <div className="orb animate-float-slow" style={{ width: 380, height: 380, bottom: '-10%', left: '20%', background: 'radial-gradient(circle, #bca6ff, transparent 60%)', animationDelay: '-4s' }} />
    </div>
  )
}
