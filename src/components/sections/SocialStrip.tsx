'use client'

import { useEffect, useRef } from 'react'

const items = [
  '★★★★★  +500 mães já usam',
  '·',
  'Nota 4.9 de 5',
  '·',
  'Aprovado por professoras',
  '·',
  '★★★★★  Acesso imediato',
  '·',
  'PDF pronto para imprimir',
  '·',
  'Garantia de 7 dias',
  '·',
]

// Duplicated for seamless GSAP infinite loop
const track = [...items, ...items]

export function SocialStrip() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let ctx: { revert?: () => void } = {}

    const init = async () => {
      const { gsap } = await import('gsap')
      if (!trackRef.current) return

      const el = trackRef.current
      const halfW = el.scrollWidth / 2

      ctx = gsap.context(() => {
        gsap.to(el, {
          x: -halfW,
          duration: 28,
          ease: 'none',
          repeat: -1,
        })
      })
    }

    init()
    return () => ctx.revert?.()
  }, [])

  return (
    <div
      className="bg-brand-navy py-3.5 overflow-hidden"
      aria-label="Prova social"
    >
      <div ref={trackRef} className="flex gap-8 whitespace-nowrap will-change-transform">
        {track.map((item, i) => (
          <span
            key={i}
            className={`text-sm font-semibold shrink-0 ${
              item === '·'
                ? 'text-white/20'
                : item.startsWith('★')
                ? 'text-brand-gold'
                : 'text-white/70'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
