import { Smartphone, Code2, Database, Wrench } from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const SKILL_GROUPS = [
  {
    icon: Smartphone,
    title: 'Mobil Geliştirme',
    accent: 'from-lavender-400 to-lavender-600',
    skills: ['Flutter', 'Dart', 'Swift', 'iOS', 'FlutterFlow'],
  },
  {
    icon: Code2,
    title: 'Web Teknolojileri',
    accent: 'from-blue-400 to-lavender-500',
    skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Spring Boot'],
  },
  {
    icon: Database,
    title: 'Veri & Yapay Zeka',
    accent: 'from-fuchsia-400 to-lavender-500',
    skills: ['Python', 'SQL', 'MySQL', 'Machine Learning'],
  },
  {
    icon: Wrench,
    title: 'Araçlar & Diğer',
    accent: 'from-lavender-500 to-blue-400',
    skills: [
      'Postman',
      'Figma',
      'Git',
      'REST API',
      'BLoC',
      'JPA',
      'Hive',
      'Provider',
      'Dio',
      'SharedPreferences',
      'Easy Localization',
      'NumPy',
      'Pandas',
      'Matplotlib',
      'scikit-learn',
    ],
  },
]

export default function Skills() {
  return (
    <section id="beceriler" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader
          eyebrow="Teknik Yetkinlikler"
          title="Beceriler"
          subtitle="Farklı alanlarda edindiğim teknik bilgiler ve kullandığım araçlar."
        />

        <div className="grid md:grid-cols-2 gap-5 lg:gap-6">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.title}
              className={`reveal group relative glass rounded-3xl p-6 sm:p-8 glow-border transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                i === 3 ? 'md:col-span-2' : ''
              }`}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Header row */}
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${group.accent} flex items-center justify-center shadow-lg`}
                  >
                    <group.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="absolute inset-0 rounded-xl bg-lavender-400/40 blur-xl -z-10 group-hover:bg-lavender-400/60 transition-all" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl text-white">{group.title}</h3>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-lavender-300/70 mt-0.5">
                    {group.skills.length} yetkinlik
                  </p>
                </div>
              </div>

              {/* Skills grid */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s, idx) => (
                  <span
                    key={s}
                    className="group/chip relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg glass text-xs sm:text-sm text-lavender-100 hover:text-white hover:border-lavender-300/50 transition-all hover:-translate-y-0.5"
                    style={{ transitionDelay: `${idx * 15}ms` }}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${group.accent}`}
                    />
                    {s}
                  </span>
                ))}
              </div>

              {/* Decorative corner */}
              <div className="absolute -bottom-16 -right-16 w-40 h-40 rounded-full bg-lavender-500/15 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
