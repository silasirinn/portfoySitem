import { useState } from 'react'
import { Mail, Linkedin, Github, Send, Heart, Sparkles, Check } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const CONTACTS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'silaasirin62@gmail.com',
    href: 'mailto:silaasirin62@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Sıla Şirin',
    href: 'https://www.linkedin.com/in/sıla-şirin-8b8865323/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'silasirinn',
    href: 'https://github.com/silasirinn',
  },
]

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    // Compose mailto with form content — works without a backend
    const subject = encodeURIComponent(`Portfolyo iletişim — ${form.name || 'Ziyaretçi'}`)
    const body = encodeURIComponent(
      `İsim: ${form.name}\nEmail: ${form.email}\n\nMesaj:\n${form.message}`
    )
    window.location.href = `mailto:silaasirin62@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="iletisim" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl relative z-10">
        <SectionHeader
          eyebrow="Haydi Konuşalım"
          title="Bana Ulaşın"
          subtitle="Projeleriniz için benimle iletişime geçmekten çekinmeyin. Size en kısa sürede dönüş yapacağım."
        />

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Left: contact links + CTA card */}
          <div className="lg:col-span-2 space-y-5 reveal">
            <div className="glass-strong rounded-3xl p-7 lg:p-8 relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 20% 10%, #bca6ff, transparent 50%), radial-gradient(circle at 100% 100%, #4a86e8, transparent 50%)',
                }}
              />

              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] uppercase tracking-[0.25em] text-lavender-300 mb-5">
                  <Sparkles className="w-3 h-3" />
                  İletişim
                </div>

                <h3 className="font-display italic text-3xl sm:text-4xl text-gradient leading-tight mb-2">
                  Birlikte harika projeler üretelim!
                </h3>
                <p className="text-sm text-lavender-100/70 leading-relaxed mb-8">
                  Bir fikriniz, sorunuz veya birlikte çalışma teklifiniz mi var? Yazmaktan
                  çekinmeyin, her mesajı okuyorum.
                </p>

                <div className="space-y-3">
                  {CONTACTS.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 p-3.5 rounded-xl glass hover:bg-white/10 border border-white/5 hover:border-lavender-300/40 transition-all"
                    >
                      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-lavender-500/30 to-blue-500/20 border border-lavender-300/20 flex items-center justify-center">
                        <c.icon className="w-4 h-4 text-lavender-100" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] uppercase tracking-widest text-lavender-300/70 font-mono">
                          {c.label}
                        </div>
                        <div className="text-sm text-lavender-100 truncate group-hover:text-white transition">
                          {c.value}
                        </div>
                      </div>
                      <svg
                        className="w-4 h-4 text-lavender-300/50 group-hover:text-lavender-200 group-hover:translate-x-0.5 transition-all"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M5 12h14M13 5l7 7-7 7" />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 reveal glass rounded-3xl p-7 lg:p-10 relative overflow-hidden glow-border"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-lavender-500/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />

            <div className="relative space-y-5">
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.2em] text-lavender-300/80 font-mono mb-2">
                  Adınız
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={onChange}
                  placeholder="Adınızı girin"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-lavender-300/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-lavender-400/20 transition-all text-lavender-50 placeholder:text-lavender-300/30"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.2em] text-lavender-300/80 font-mono mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  placeholder="ornek@mail.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-lavender-300/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-lavender-400/20 transition-all text-lavender-50 placeholder:text-lavender-300/30"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] text-lavender-300/80 font-mono mb-2">
                  Mesajınız
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={onChange}
                  placeholder="Kısaca ne yapmak istediğinizi anlatır mısınız?"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:border-lavender-300/50 focus:bg-white/[0.07] focus:outline-none focus:ring-2 focus:ring-lavender-400/20 transition-all text-lavender-50 placeholder:text-lavender-300/30 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={sent}
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-medium text-white shimmer-btn shadow-[0_10px_40px_-10px_rgba(124,84,255,0.8)] hover:shadow-[0_10px_60px_-5px_rgba(124,84,255,1)] transition-all disabled:opacity-70"
              >
                {sent ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Gönderildi!</span>
                  </>
                ) : (
                  <>
                    <span>Gönder</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-lavender-300/60 font-mono pt-1">
                Form gönderdiğinizde mail uygulamanız açılır ve mesajınız önceden doldurulur.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="relative z-10 px-4 sm:px-6 lg:px-8 pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-3xl px-6 sm:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-lavender-200/80">
            <Sparkles className="w-4 h-4 text-lavender-300" />
            <span className="font-display italic">Sıla Şirin</span>
            <span className="text-lavender-300/50">·</span>
            <span className="font-mono text-xs">© {new Date().getFullYear()}</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-lavender-300/70">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-lavender-300 fill-lavender-300 animate-pulse" />
            <span>& React · Tailwind</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="mailto:silaasirin62@gmail.com"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-lavender-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/silasirinn"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-lavender-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/sıla-şirin-8b8865323/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg glass flex items-center justify-center text-lavender-200 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
