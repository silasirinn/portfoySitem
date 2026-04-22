import { useState } from 'react'
import {
  Brain,
  Code2,
  Activity,
  MessageSquareWarning,
  HeartPulse,
  Store,
  ListChecks,
  UtensilsCrossed,
  QrCode,
  Calendar,
  ArrowUpRight,
  Scan,
} from 'lucide-react'
import SectionHeader from './SectionHeader.jsx'

const AI_PROJECTS = [
  {
    icon: Scan,
    title: 'AI Body Scanner',
    desc: 'MediaPipe Pose kullanılarak geliştirilen, vücut analizi ve mobil entegrasyon odaklı yapay zekâ destekli sistem.',
    tech: ['MediaPipe Pose', 'Flutter', 'Python', 'Mobile AI Integration'],
    accent: 'from-fuchsia-400/40 via-lavender-500/30 to-blue-400/30',
  },
  {
    icon: Activity,
    title: 'Ovaryen Kanser Risk Sınıflandırması',
    desc: 'Random Forest ve XGBoost tabanlı hibrit model ile geliştirilen, %94 doğruluk oranına sahip ve SHAP ile açıklanabilir hale getirilen karar destek sistemi.',
    tech: ['Python', 'Random Forest', 'XGBoost', 'SHAP', 'scikit-learn'],
    accent: 'from-lavender-500/40 via-fuchsia-400/20 to-blue-400/30',
    stat: '%94 Doğruluk',
  },
  {
    icon: MessageSquareWarning,
    title: 'Türkçe Nefret Söylemi Tespiti',
    desc: 'TF-IDF ve Logistic Regression kullanılarak geliştirilen, Türkçe sosyal medya metinlerinde nefret söylemini tespit etmeye odaklanan NLP projesi.',
    tech: ['Python', 'NLP', 'TF-IDF', 'Logistic Regression', 'scikit-learn'],
    accent: 'from-blue-400/40 via-lavender-500/20 to-fuchsia-400/30',
  },
  {
    icon: HeartPulse,
    title: 'Kalp Yetmezliği Tahmin Sistemi',
    desc: 'UCI kaynaklı üç veri seti birleştirilerek geliştirilen, Random Forest ve SVM birleşimiyle özgün S1LA modeli oluşturulan sistem. %98.97 doğruluk ve 1.00 AUC başarımı elde edilmiştir.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib'],
    accent: 'from-lavender-400/40 via-blue-400/30 to-fuchsia-400/20',
    stat: '%98.97 · 1.00 AUC',
  },
]

const SW_PROJECTS = [
  {
    icon: Store,
    title: 'Market Stok Takip Paneli',
    date: '30/05/2025 — 15/06/2025',
    desc: 'Kasiyer ürünleri okutur, satış yapılır, stok otomatik güncellenir. Ürün ekleme, güncelleme, silme, satış ekranı, günlük ve haftalık raporlar ile iade işlemlerini destekleyen yönetim paneli.',
    tech: ['Spring Boot', 'JPA', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Postman'],
    accent: 'from-lavender-500/40 to-blue-400/30',
  },
  {
    icon: ListChecks,
    title: 'ToDoApp',
    date: '25/05/2025 — 28/05/2025',
    desc: 'Flutter ile geliştirilen mobil uygulama, kullanıcıların günlük görevlerini çevrimdışı olarak yönetmelerini sağlar. CRUD işlemleri, kalıcı veri saklama ve modern arayüz sunar.',
    tech: ['Flutter', 'Dart', 'Hive', 'Provider'],
    accent: 'from-blue-400/40 to-lavender-500/30',
  },
  {
    icon: UtensilsCrossed,
    title: 'Garson El Terminali',
    date: '10/03/2025 — 20/04/2025',
    desc: 'Restoranlarda garsonların masa, sandalye ve ürün siparişlerini kolayca yönetebilmesi için geliştirildi. BLoC mimarisi, gerçek RESTful API entegrasyonu ve çoklu dil desteği ile tam işlevsel POS çözümü.',
    tech: ['Flutter', 'Dart', 'BLoC', 'REST API', 'Dio', 'SharedPreferences', 'Easy Localization'],
    accent: 'from-lavender-400/40 to-fuchsia-400/30',
  },
  {
    icon: QrCode,
    title: 'Cafe QR/NFC Sistemi',
    date: null,
    desc: 'Kafe ortamında QR veya NFC üzerinden müşteri etkileşimini kolaylaştıran, masa bazlı dijital deneyim sunan modern sipariş / yönlendirme çözümü.',
    tech: ['React', 'Supabase', 'QR/NFC Flow', 'Realtime System Design'],
    accent: 'from-fuchsia-400/40 to-lavender-500/30',
  },
]

function ProjectCard({ project, index }) {
  const [mouse, setMouse] = useState({ x: 50, y: 50 })

  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMouse({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    })
  }

  const Icon = project.icon

  return (
    <article
      onMouseMove={onMove}
      className="reveal group relative glass rounded-3xl overflow-hidden glow-border transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_80px_-20px_rgba(124,84,255,0.6)] flex flex-col h-full"
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      {/* Mouse-follow glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${mouse.x}% ${mouse.y}%, rgba(188,166,255,0.2), transparent 40%)`,
        }}
      />

      {/* Top banner gradient */}
      <div className="relative h-28 sm:h-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${project.accent}`} />
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(188,166,255,0.3), transparent 40%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Icon */}
        <div className="absolute bottom-0 left-5 translate-y-1/2 z-10">
          <div className="relative">
            <div className="w-14 h-14 rounded-2xl bg-midnight-950/80 backdrop-blur border border-lavender-300/30 flex items-center justify-center shadow-xl">
              <Icon className="w-6 h-6 text-lavender-100" />
            </div>
            <div className="absolute inset-0 rounded-2xl bg-lavender-400/40 blur-xl -z-10 group-hover:bg-lavender-400/70 transition-all" />
          </div>
        </div>

        {project.stat && (
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-midnight-950/70 backdrop-blur border border-lavender-300/30 text-[10px] font-mono text-lavender-100">
            {project.stat}
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-midnight-950/90 to-transparent" />
      </div>

      {/* Body */}
      <div className="relative p-6 pt-10 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-3">
          <h3 className="font-display text-lg sm:text-xl text-white leading-tight">
            {project.title}
          </h3>
          <ArrowUpRight className="flex-shrink-0 w-5 h-5 text-lavender-300/60 group-hover:text-lavender-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
        </div>

        {project.date && (
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-lavender-300/70 mb-3">
            <Calendar className="w-3 h-3" />
            {project.date}
          </div>
        )}

        <p className="text-sm text-lavender-100/70 leading-relaxed mb-5 flex-1">{project.desc}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] text-lavender-100/90 hover:bg-lavender-500/20 hover:border-lavender-300/40 transition-colors"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Corner shimmer */}
      <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-lavender-400/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </article>
  )
}

function CategoryHeading({ icon: Icon, label, count }) {
  return (
    <div className="reveal flex items-center gap-4 mb-8">
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-lavender-500 to-blue-500 flex items-center justify-center shadow-lg">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div className="absolute inset-0 rounded-2xl bg-lavender-400/50 blur-xl -z-10" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-display text-2xl sm:text-3xl text-gradient">{label}</h3>
        <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-lavender-300/70 mt-0.5">
          {count} proje
        </div>
      </div>
      <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-lavender-300/50 to-transparent" />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projeler" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl relative z-10">
        <SectionHeader
          eyebrow="Portföy"
          title="Projeler"
          subtitle="Yapay zeka ve yazılım alanındaki projelerim — hepsi farklı bir teknik meydan okuma."
        />

        {/* Category 1 – AI */}
        <div className="mb-20">
          <CategoryHeading icon={Brain} label="Yapay Zekâ Projeleri" count={AI_PROJECTS.length} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {AI_PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>

        {/* Category 2 – Software */}
        <div>
          <CategoryHeading icon={Code2} label="Yazılım Projeleri" count={SW_PROJECTS.length} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
            {SW_PROJECTS.map((p, i) => (
              <ProjectCard key={p.title} project={p} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
