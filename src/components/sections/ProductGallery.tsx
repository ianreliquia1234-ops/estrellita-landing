'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'

const pages = [
  { title: 'Los Pollitos Dicen',         bg: '#FF6B35', emoji: '🐣', lines: ['Los pollitos dicen', 'pío, pío, pío…', 'Cuando tienen hambre…'], imageSrc: '/images/los-pollitos.webp' },
  { title: 'Cumpleaños Feliz',           bg: '#00B894', emoji: '🎂', lines: ['Cumpleaños feliz,', 'cumpleaños feliz,', 'te deseamos todos…'], imageSrc: '/images/cumpleanos-feliz.webp' },
  { title: 'Arroz con Leche',            bg: '#E17055', emoji: '🍚', lines: ['Arroz con leche,', 'me quiero casar,', 'con una señorita…'], imageSrc: '/images/arroz-con-leche.webp' },
  { title: 'La Bamba',                   bg: '#0984E3', emoji: '🎸', lines: ['Para bailar la bamba,', 'para bailar la bamba…', 'se necesita una poca…'], imageSrc: '/images/la-bamba.webp' },
  { title: 'El Patio de Mi Casa',        bg: '#00CEC9', emoji: '🏡', lines: ['El patio de mi casa', 'es particular…', 'cuando llueve se moja…'], imageSrc: '/images/el-patio.webp' },
  { title: 'Pin Pon',                    bg: '#A29BFE', emoji: '🎎', lines: ['Pin Pon es un muñeco', 'muy guapo de cartón,', 'se lava la carita…'], imageSrc: '/images/pin-pon.webp' },
  { title: 'Cabeza, Hombros',            bg: '#FDCB6E', emoji: '👦', lines: ['Cabeza, hombros,', 'rodillas y pies…', 'ojos, orejas, nariz…'], imageSrc: '/images/cabeza-hombros.webp' },
  { title: 'Las Mañanitas',              bg: '#E84393', emoji: '🌅', lines: ['Éstas son las mañanitas', 'que cantaba el rey David,', 'hoy por ser día de tu santo…'], imageSrc: '/images/las-manianitas.webp' },
]

const CARD_W = 280
const GAP    = 20

export function ProductGallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const tweenRef   = useRef<{ pause(): void; resume(): void; kill(): void } | null>(null)

  useEffect(() => {
    const track   = trackRef.current
    const section = sectionRef.current
    if (!track || !section) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const pause  = () => tweenRef.current?.pause()
    const resume = () => tweenRef.current?.resume()

    const init = async () => {
      const { gsap } = await import('gsap')
      const halfW = track.scrollWidth / 2
      tweenRef.current = gsap.to(track, {
        x: -halfW,
        duration: 8,
        ease: 'none',
        repeat: -1,
      })
    }

    section.addEventListener('mouseenter', pause)
    section.addEventListener('mouseleave', resume)
    init()

    return () => {
      tweenRef.current?.kill()
      section.removeEventListener('mouseenter', pause)
      section.removeEventListener('mouseleave', resume)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-10 sm:py-14 overflow-hidden"
      aria-label="Veja algumas páginas por dentro"
    >
      <div className="inner mb-8">
        <p className="font-display font-black text-display-sm text-brand-ink text-center uppercase tracking-wide">
          Veja algumas páginas por dentro
        </p>
      </div>

      <div
        className="relative"
        style={{ maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)' }}
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ width: 'max-content', gap: GAP }}
        >
          {[...pages, ...pages].map((page, i) => (
            <PageCard key={i} {...page} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface PageCardProps {
  title: string
  bg: string
  emoji: string
  lines: string[]
  imageSrc?: string
}

function PageCard({ title, bg, emoji, lines, imageSrc }: PageCardProps) {
  if (imageSrc) {
    return (
      <div
        className="flex-shrink-0 rounded-2xl overflow-hidden shadow-medium relative"
        style={{ width: CARD_W, height: 360 }}
      >
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover object-top"
          sizes="220px"
          loading="lazy"
          quality={70}
          unoptimized={false}
        />
      </div>
    )
  }

  return (
    <div
      className="flex-shrink-0 rounded-2xl overflow-hidden shadow-medium"
      style={{ width: CARD_W }}
    >
      <div className="px-4 pt-4 pb-3 text-white" style={{ background: bg }}>
        <div className="text-2xl mb-1">{emoji}</div>
        <p className="font-display font-black text-sm leading-tight">{title}</p>
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/70 mt-1">Canção em Espanhol</p>
      </div>
      <div className="bg-white px-4 py-3">
        {lines.map((line, i) => (
          <p key={i} className="text-[11px] text-brand-ink-mid leading-relaxed">{line}</p>
        ))}
        <div className="mt-3 flex items-center gap-2">
          <div
            className="w-8 h-8 rounded flex items-center justify-center text-[8px] font-bold text-white shrink-0"
            style={{ background: bg }}
          >
            QR
          </div>
          <span className="text-[9px] text-brand-ink-lt">Escuta a Canção</span>
        </div>
      </div>
    </div>
  )
}
