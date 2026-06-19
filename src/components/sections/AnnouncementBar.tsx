export function AnnouncementBar() {
  const now = new Date()
  const date = `${String(now.getDate()).padStart(2,'0')}/${String(now.getMonth()+1).padStart(2,'0')}/${now.getFullYear()}`

  return (
    <div
      style={{ background: '#FF6B35' }}
      className="text-white text-center py-4 px-4 text-sm sm:text-base font-black tracking-wide leading-snug"
      role="banner"
    >
      <span style={{ color: '#FFE066' }}>⚡</span>{' '}
      OFERTA ESPECIAL DISPONÍVEL APENAS HOJE {date}
    </div>
  )
}
