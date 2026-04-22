import { GraduationCap, Calendar, MapPin, Briefcase, CheckCircle2 } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const EDUCATION = [
  {
    status: 'Devam Ediyor',
    degree: 'Yazılım Mühendisliği',
    school: 'İstanbul Beykent Üniversitesi',
    years: '2022 — 2026',
    note: '4. Sınıf Öğrencisi',
    current: true,
  },
  {
    status: 'Tamamlandı',
    degree: 'Lise Diploması',
    school: 'Dede Korkut Anadolu Lisesi',
    years: '2017 — 2021',
    note: null,
    current: false,
  },
]

export function Education() {
  return (
    <section id="egitim" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl relative z-10">
        <SectionHeader
          eyebrow="Akademik Yolculuk"
          title="Eğitim"
          subtitle="Yazılım mühendisliği alanındaki akademik birikimim."
        />

        <div className="relative">
          {/* Timeline spine */}
          <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-lavender-400/60 to-transparent" />

          <div className="space-y-10 sm:space-y-16">
            {EDUCATION.map((item, i) => (
              <div
                key={item.degree}
                className={`reveal relative flex sm:items-center ${
                  i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-5 sm:left-1/2 sm:-translate-x-1/2 top-6 sm:top-1/2 sm:-translate-y-1/2 z-10">
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-br from-lavender-300 to-lavender-500 shadow-[0_0_20px_rgba(188,166,255,0.8)]" />
                    {item.current && (
                      <div className="absolute inset-0 rounded-full bg-lavender-300 animate-ping" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className={`pl-14 sm:pl-0 w-full sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? 'sm:pr-0 sm:mr-auto' : 'sm:pl-0 sm:ml-auto'
                }`}>
                  <div className="group glass rounded-2xl p-6 sm:p-7 glow-border hover:-translate-y-1 transition-transform">
                    <div className="flex items-center gap-2 flex-wrap mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-medium ${
                          item.current
                            ? 'bg-lavender-500/20 text-lavender-100 border border-lavender-300/30'
                            : 'bg-white/5 text-lavender-200/70 border border-white/10'
                        }`}
                      >
                        {item.current && <span className="w-1.5 h-1.5 rounded-full bg-lavender-300 animate-pulse" />}
                        {item.status}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-lavender-300/70 font-mono">
                        <Calendar className="w-3 h-3" /> {item.years}
                      </span>
                    </div>

                    <h3 className="font-display text-xl sm:text-2xl text-white">{item.degree}</h3>
                    <div className="mt-2 flex items-center gap-2 text-lavender-200/80 text-sm">
                      <GraduationCap className="w-4 h-4 text-lavender-300" />
                      <span>{item.school}</span>
                    </div>
                    {item.note && (
                      <p className="mt-3 text-sm text-lavender-100/70 italic">{item.note}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
 * Experience
 * ------------------------------------------------------------------ */

const EXPERIENCE = {
  role: 'Mobil Uygulama Geliştirici',
  company: 'Matrix Teknoloji A.Ş',
  location: 'İstanbul, Türkiye',
  date: '01/02/2025 — 01/05/2025',
  bullets: [
    'Bir anaokulu projesinin arayüz kısmını Flutter ile geliştirdim. Bu projede responsive yapısından ve çoklu dil desteğinden de yararlandım.',
    'Şirketin kendi geliştirdiği Digigarson adlı projenin Garson El Terminali uygulamasını tamamlamada rol aldım. Önce tasarımını FlutterFlow\u2019dan oluşturdum. Daha sonra projenin arayüz ve backendini Flutter ile tamamladım.',
    'GitHub kullanma yetkinliğine sahip oldum.',
    'Çalışma ortamını daha iyi anlama ve deneyimleme fırsatı edindim.',
    'Gerçek bir projede görev alarak Flutter alanında kendimi daha iyi geliştirdim.',
  ],
  tech: ['Flutter', 'Dart', 'FlutterFlow', 'GitHub', 'Responsive Design', 'Çoklu Dil Desteği'],
}

export function Experience() {
  return (
    <section id="deneyim" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl relative z-10">
        <SectionHeader
          eyebrow="Profesyonel Deneyim"
          title="Deneyim"
          subtitle="Gerçek projelerde edindiğim sektör tecrübesi."
        />

        <div className="reveal group relative glass-strong rounded-3xl overflow-hidden glow-border">
          {/* Top accent */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-lavender-400 to-transparent" />

          <div className="p-6 sm:p-10">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-lavender-500 to-blue-500 flex items-center justify-center shadow-lg relative">
                  <Briefcase className="w-6 h-6 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-lavender-400/50 blur-xl -z-10" />
                </div>
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-gradient">
                    {EXPERIENCE.role}
                  </h3>
                  <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-lavender-200/80">
                    <span className="font-medium text-lavender-100">{EXPERIENCE.company}</span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-lavender-300" />
                      {EXPERIENCE.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full glass text-xs font-mono text-lavender-200">
                <Calendar className="w-3.5 h-3.5 text-lavender-300" />
                {EXPERIENCE.date}
              </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-3 mb-8">
              {EXPERIENCE.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-sm sm:text-[15px] text-lavender-100/85 leading-relaxed">
                  <CheckCircle2 className="flex-shrink-0 w-4 h-4 mt-1 text-lavender-300" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            {/* Tech */}
            <div className="pt-6 border-t border-white/10">
              <div className="text-[10px] uppercase tracking-[0.25em] text-lavender-300/70 mb-3 font-mono">
                Kullanılan Teknolojiler
              </div>
              <div className="flex flex-wrap gap-2">
                {EXPERIENCE.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs sm:text-sm text-lavender-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lavender-300" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-lavender-500/20 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-blue-500/15 blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
