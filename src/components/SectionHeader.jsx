export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-12 sm:mb-16 reveal">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[10px] sm:text-xs uppercase tracking-[0.3em] text-lavender-300 mb-4">
          <span className="w-1 h-1 rounded-full bg-lavender-400" />
          {eyebrow}
          <span className="w-1 h-1 rounded-full bg-lavender-400" />
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-gradient tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-lavender-100/70 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="mt-6 mx-auto h-px w-24 bg-gradient-to-r from-transparent via-lavender-300 to-transparent" />
    </div>
  )
}
