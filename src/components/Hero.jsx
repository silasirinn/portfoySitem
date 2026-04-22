import { useEffect, useRef } from 'react'
import { ArrowRight, Sparkles, FolderGit2 } from 'lucide-react'

export default function Hero() {
  const parallaxRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      if (!parallaxRef.current) return
      const { innerWidth: w, innerHeight: h } = window
      const x = (e.clientX / w - 0.5) * 20
      const y = (e.clientY / h - 0.5) * 20
      parallaxRef.current.style.setProperty('--px', `${x}px`)
      parallaxRef.current.style.setProperty('--py', `${y}px`)
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="ana-sayfa"
      ref={parallaxRef}
      className="relative min-h-screen flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8"
      style={{
        // parallax vars consumed by children
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(188,166,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(188,166,255,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 40%, #000 40%, transparent 80%)',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl w-full grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Left: Text */}
        <div className="lg:col-span-7 reveal">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs sm:text-sm text-lavender-200/90 mb-6">
            <Sparkles className="w-3.5 h-3.5 text-lavender-300" />
            <span>Yazılım Mühendisliği Öğrencisi</span>
            <span className="w-1 h-1 rounded-full bg-lavender-400/60" />
            <span className="text-lavender-300/70">Açık Çalışma Fırsatlarına</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] tracking-tight">
            <span className="block text-gradient">Sıla</span>
            <span className="block italic text-lavender-100/95">Şirin</span>
          </h1>

          <div className="mt-5 flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-lavender-400 to-transparent" />
            <p className="font-mono text-xs sm:text-sm tracking-[0.2em] uppercase text-lavender-300">
              Yazılım Mühendisi
            </p>
          </div>

          <p className="mt-6 text-base sm:text-lg text-lavender-100/80 max-w-xl leading-relaxed">
            Yapay zekâ ve mobil uygulama geliştirme alanlarında kendini sürekli geliştiren bir yazılım mühendisliği öğrencisiyim. Makine öğrenmesi, veri analizi ve modern arayüz teknolojilerini bir araya getirerek gerçek dünya problemlerine yenilikçi ve kullanıcı odaklı çözümler üretmeyi hedefliyorum. Geliştirdiği projelerde performans, ölçeklenebilirlik ve kullanıcı deneyimini ön planda tutuyorum.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => scrollTo('iletisim')}
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-white shimmer-btn shadow-[0_10px_40px_-10px_rgba(124,84,255,0.8)] hover:shadow-[0_10px_60px_-5px_rgba(124,84,255,1)] transition-shadow"
            >
              <span>Benimle İletişime Geç</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollTo('projeler')}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-medium text-lavender-100 glass hover:bg-white/10 transition-colors"
            >
              <FolderGit2 className="w-4 h-4 text-lavender-300" />
              <span>Projelerimi Gör</span>
            </button>
          </div>

          {/* Stat strip */}
          <div className="mt-12 grid grid-cols-3 gap-4 max-w-md">
            {[
              { k: '15+', v: 'Proje' },
              { k: '3+', v: 'Yıl Kod' },
              { k: 'AI/Mobil', v: 'Odak' },
            ].map((s) => (
              <div key={s.v} className="text-center">
                <div className="font-display text-2xl sm:text-3xl text-gradient-soft">{s.k}</div>
                <div className="mt-1 text-[10px] sm:text-xs uppercase tracking-wider text-lavender-300/70">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Portrait */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end reveal">
          <div
            className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[440px] lg:h-[440px] animate-float-slow"
            style={{ transform: 'translate3d(var(--px,0), var(--py,0), 0)' }}
          >
            {/* Glow rings */}
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-lavender-400/50 via-blue-400/30 to-lavender-500/50 blur-3xl animate-glow-pulse" />
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-lavender-500/20 via-transparent to-blue-400/20 blur-2xl" />

            {/* Rotating halo */}
            <div className="absolute -inset-8 rounded-full border border-lavender-300/10 animate-spin-slow" />
            <div
              className="absolute -inset-12 rounded-full border border-dashed border-lavender-300/10 animate-spin-slow"
              style={{ animationDirection: 'reverse', animationDuration: '30s' }}
            />

            {/* Sparkle icons floating */}
            <Sparkles className="absolute -top-6 -left-6 w-8 h-8 text-lavender-200/70 animate-glow-pulse" />
            <Sparkles
              className="absolute bottom-4 -right-6 w-6 h-6 text-blue-200/70 animate-glow-pulse"
              style={{ animationDelay: '-2s' }}
            />
            <Sparkles
              className="absolute top-1/2 -right-10 w-4 h-4 text-lavender-100/70 animate-glow-pulse"
              style={{ animationDelay: '-3s' }}
            />

            {/* Frame */}
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden glow-border glass-strong p-2 shadow-[0_20px_80px_-10px_rgba(124,84,255,0.6)]">
              <div className="relative h-full w-full rounded-[1.5rem] overflow-hidden">
                <img
                  src="/sila-portrait.png"
                  alt="Sıla Şirin — pixel art portre"
                  className="pixel-img w-full h-full object-cover"
                />
                {/* Subtle purple wash to tie image into theme */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lavender-500/5 to-midnight-900/30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-tr from-lavender-500/10 to-blue-400/10 mix-blend-soft-light pointer-events-none" />
              </div>

              {/* Corner ornaments */}
              {[
                'top-2 left-2 border-l border-t',
                'top-2 right-2 border-r border-t',
                'bottom-2 left-2 border-l border-b',
                'bottom-2 right-2 border-r border-b',
              ].map((cls, i) => (
                <span
                  key={i}
                  className={`absolute ${cls} border-lavender-200/60 w-4 h-4 rounded-sm pointer-events-none`}
                />
              ))}
            </div>

            {/* Name tag badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass-strong px-4 py-2 rounded-full flex items-center gap-2 whitespace-nowrap">
              <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse" />
              <span className="text-xs font-mono text-lavender-100">@silasirinn</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-lavender-300/60 text-xs tracking-widest uppercase">
        <span>Kaydır</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-lavender-300 to-transparent" />
      </div>
    </section>
  )
}
