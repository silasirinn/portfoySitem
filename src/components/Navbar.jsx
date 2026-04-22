import { useEffect, useState } from 'react'
import { Menu, X, Sparkles } from 'lucide-react'

const NAV_ITEMS = [
  { id: 'ana-sayfa', label: 'Ana Sayfa' },
  { id: 'hakkimda', label: 'Hakkımda' },
  { id: 'beceriler', label: 'Beceriler' },
  { id: 'egitim', label: 'Eğitim' },
  { id: 'deneyim', label: 'Deneyim' },
  { id: 'projeler', label: 'Projeler' },
  { id: 'iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('ana-sayfa')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      // detect active section
      const y = window.scrollY + window.innerHeight / 3
      let current = 'ana-sayfa'
      NAV_ITEMS.forEach(({ id }) => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      })
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500 ${
            scrolled ? 'glass shadow-[0_8px_32px_rgba(124,84,255,0.18)]' : 'bg-transparent'
          }`}
        >
          {/* Logo */}
          <button onClick={() => go('ana-sayfa')} className="flex items-center gap-2 group">
            <span className="relative inline-flex">
              <Sparkles className="w-5 h-5 text-lavender-300 group-hover:text-lavender-200 transition-colors" />
              <span className="absolute inset-0 blur-md bg-lavender-400/50 rounded-full -z-10 group-hover:bg-lavender-300/70 transition" />
            </span>
            <span className="font-display text-lg sm:text-xl text-gradient tracking-wide">
              Sıla <span className="italic">Şirin</span>
            </span>
          </button>

          {/* Desktop menu */}
          <ul className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`relative px-3 xl:px-4 py-2 text-sm font-medium transition-colors rounded-full ${
                    active === item.id
                      ? 'text-white'
                      : 'text-lavender-200/70 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active === item.id && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-lavender-500/30 to-lavender-400/20 border border-lavender-300/30 -z-10" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 rounded-lg glass text-lavender-100"
            aria-label="Menüyü aç/kapat"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            open ? 'max-h-[500px] mt-3 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="glass rounded-2xl p-2 flex flex-col">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    active === item.id
                      ? 'bg-lavender-500/20 text-white'
                      : 'text-lavender-200/80 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}
