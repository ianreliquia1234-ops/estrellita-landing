const pages = [
  { title: 'Estrellita, ¿Dónde Estás?', bg: '#6C5CE7', emoji: '⭐', lines: ['Estrellita, ¿dónde estás?', 'Arriba del cielo, más…', 'En el cielo y en el mar…'] },
  { title: 'Los Pollitos Dicen',         bg: '#FF6B35', emoji: '🐣', lines: ['Los pollitos dicen', 'pío, pío, pío…', 'Cuando tienen hambre…'] },
  { title: 'Cumpleaños Feliz',           bg: '#00B894', emoji: '🎂', lines: ['Cumpleaños feliz,', 'cumpleaños feliz,', 'te deseamos todos…'] },
  { title: 'La Bamba',                   bg: '#0984E3', emoji: '🎸', lines: ['Para bailar la bamba,', 'para bailar la bamba…', 'se necesita una poca…'] },
  { title: 'El Patio de Mi Casa',        bg: '#00CEC9', emoji: '🏡', lines: ['El patio de mi casa', 'es particular…', 'cuando llueve se moja…'] },
]

export function HeroImagesGrid() {
  return (
    <div
      className="w-full overflow-x-auto py-5 [&::-webkit-scrollbar]:hidden"
      style={{ scrollbarWidth: 'none' }}
    >
      <div
        className="flex gap-3 px-4"
        style={{ width: 'max-content', margin: '0 auto' }}
      >
        {pages.map((page) => (
          <div
            key={page.title}
            className="flex-shrink-0 rounded-xl overflow-hidden"
            style={{ width: 'clamp(140px, 35vw, 150px)', boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }}
          >
            <div className="px-3 pt-3 pb-2 text-white" style={{ background: page.bg }}>
              <div className="text-2xl mb-1">{page.emoji}</div>
              <p className="font-bold text-xs leading-tight">{page.title}</p>
              <p style={{ fontSize: 9 }} className="font-semibold uppercase tracking-widest text-white/70 mt-0.5">
                Canção em Espanhol
              </p>
            </div>
            <div className="bg-white px-3 py-3">
              {page.lines.map((line, i) => (
                <p key={i} className="text-[11px] leading-relaxed" style={{ color: '#5C4A3A' }}>{line}</p>
              ))}
              <div className="mt-3 flex items-center gap-2">
                <div
                  className="w-7 h-7 rounded flex items-center justify-center text-[8px] font-bold text-white shrink-0"
                  style={{ background: page.bg }}
                >
                  QR
                </div>
                <span className="text-[9px]" style={{ color: '#9C8070' }}>Escuta a Canção</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
