import { Smartphone, Globe, BrainCircuit } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const CARDS = [
  {
    icon: Smartphone,
    title: 'Mobil Geliştirme',
    desc: 'Flutter ve iOS ile modern mobil uygulamalar geliştiriyorum.',
    tint: 'from-lavender-500/30 to-blue-400/10',
  },
  {
    icon: Globe,
    title: 'Web Teknolojileri',
    desc: 'HTML, CSS, JavaScript ve modern framework\u2019lerle web projeleri üretiyorum.',
    tint: 'from-blue-400/30 to-lavender-500/10',
  },
  {
    icon: BrainCircuit,
    title: 'Yapay Zeka',
    desc: 'Makine öğrenmesi ve veri bilimi alanında projeler geliştiriyorum.',
    tint: 'from-lavender-400/30 to-fuchsia-400/10',
  },
]

export default function About() {
  return (
    <section id="hakkimda" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader
          eyebrow="Benim Hikayem"
          title="Hakkımda"
          subtitle="Teknolojiye duyduğum merak ile başlayan yolculuğum, her yeni projede biraz daha büyüyor."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          {/* Text block */}
          <div className="lg:col-span-5 reveal">
            <div className="relative glass-strong rounded-3xl p-8 lg:p-10 overflow-hidden">
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 20% 0%, #bca6ff, transparent 50%), radial-gradient(circle at 100% 100%, #4a86e8, transparent 50%)',
                }}
              />

              <div className="relative">
                <div className="inline-block font-display italic text-7xl text-lavender-300/30 leading-none">“</div>

                <p className="text-lavender-100/90 leading-relaxed text-[15px] sm:text-base">
                  <span className="text-gradient font-medium">Beykent Üniversitesi Yazılım Mühendisliği</span>{' '}
                  bölümünde 4. sınıf öğrencisiyim. Kendimi mobil, web ve yapay zeka alanlarında
                  geliştirmekteyim. Şu an{' '}
                  <span className="text-lavender-200 font-medium">Flutter ve iOS mobil geliştirme</span>{' '}
                  yapmaktayım. Bunun yanı sıra öğrenmeye ve kendimi daha çok geliştirmeye açık biriyim.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-lavender-300/50 to-transparent" />
                  <span className="font-display italic text-lavender-200 text-sm">— Sıla</span>
                </div>
              </div>
            </div>
          </div>

          {/* Cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
            {CARDS.map((c, i) => (
              <div
                key={c.title}
                className={`reveal group relative glass rounded-2xl p-6 sm:p-7 glow-border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_60px_-15px_rgba(124,84,255,0.5)] overflow-hidden ${
                  i === 2 ? 'sm:col-span-2' : ''
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {/* Tint */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${c.tint} opacity-40 group-hover:opacity-60 transition-opacity pointer-events-none`}
                />

                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl glass-strong mb-4">
                  <c.icon className="w-5 h-5 text-lavender-100" />
                  <div className="absolute inset-0 rounded-xl bg-lavender-400/20 blur-xl -z-10 group-hover:bg-lavender-400/40 transition-all" />
                </div>

                <h3 className="relative font-display text-xl sm:text-2xl text-white mb-2">
                  {c.title}
                </h3>
                <p className="relative text-sm text-lavender-100/70 leading-relaxed">{c.desc}</p>

                {/* Corner glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-lavender-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
